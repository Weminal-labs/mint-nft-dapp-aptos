import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

// Internal utils
import { aptosClient } from "@/utils/aptosClient";
import { clampNumber } from "@/utils/clampNumber";
// Internal hooks
import { useGetCollectionData } from "@/hooks/useGetCollectionData";
import { useGetMintFee } from "@/hooks/useGetMintFee";
import { useGetAccountBalance } from "@/hooks/useGetAccountBalance";
// Internal components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
// Internal constants
// Internal config
// Internal enrty functions
import { mintNFT } from "@/entry-functions/mint_nft";
interface StatsSectionProps {}

export const StatsSection: React.FC<StatsSectionProps> = () => {
  const { data: mintFee = 0 } = useGetMintFee();
  const queryClient = useQueryClient();
  const { account, signAndSubmitTransaction } = useWallet();
  const { data: accountBalance } = useGetAccountBalance(account?.address);
  const [nftCount, setNftCount] = useState(1);

  const { data } = useGetCollectionData();
  const { collection, maxSupply = 0, totalMinted = 0, uniqueHolders = 0 } = data ?? {};

  const mintNft = async (e: FormEvent) => {
    e.preventDefault();
    if (!collection?.collection_id) return;
    if (!account) {
      toast({ variant: "destructive", title: "Error", description: "You must connect a wallet before minting" });
      return;
    }
    if (accountBalance !== undefined && accountBalance < mintFee) {
      toast({ variant: "destructive", title: "Error", description: "You do not have enough funds to mint" });
      return;
    }

    const response = await signAndSubmitTransaction(
      mintNFT({ collectionId: collection.collection_id, amount: nftCount }),
    );
    await aptosClient().waitForTransaction({ transactionHash: response.hash });
    queryClient.invalidateQueries();
    setNftCount(1);
  };

  return (
    <section className="stats-container w-full justify-between flex-row flex">
      <ul className="flex flex-col md:flex-row gap-10 justify-left text-nowrap">
        {[
          { title: "CREATED NFTs", value: maxSupply },
          { title: "TOTAL MINTED", value: totalMinted },
          { title: "UNIQUE HOLDERS", value: uniqueHolders },
        ].map(({ title, value }) => (
          <li className="basis-1/3" key={title + " " + value}>
            <Card className="py-2 px-4 border-none">
              <p className="label-sm text-black opacity-70 font-[600]">{title}</p>
              <p className="text-[40px] font-[600] leading-10 tracking-tighter">{clampNumber(value)}</p>
            </Card>
          </li>
        ))}
      </ul>

      <Card className="border-none">
        <CardContent
          fullPadding
          className="flex flex-col md:flex-row gap-4 md:justify-between items-start md:items-center flex-wrap "
        >
          <form onSubmit={mintNft} className="flex flex-col md:flex-row gap-4">
            <Input
              type="number"
              value={nftCount}
              onChange={(e) => setNftCount(parseInt(e.currentTarget.value, 10))}
              className="px-10 py-5 md:h-auto rounded-[8px] border border-black text-[16px] font-[600] w-fit"
            />
            <Button className="px-10 py-5 w-[254px] h-[56px] md:h-auto uppercase rounded-[8px] " type="submit">
              Mint
            </Button>
            {!!mintFee && (
              <span className="whitespace-nowrap text-secondary-text body-sm self-center">{mintFee} APT</span>
            )}
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
