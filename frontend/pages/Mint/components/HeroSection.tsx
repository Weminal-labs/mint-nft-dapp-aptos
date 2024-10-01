import { FC, useState } from "react";
// Internal assets
import Copy from "@/assets/icons/copy.svg";
import Placeholder1 from "@/assets/placeholders/bear-1.png";
// Internal utils
import { truncateAddress } from "@/utils/truncateAddress";
// Internal hooks
import { useGetCollectionData } from "@/hooks/useGetCollectionData";
// Internal components
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Socials } from "@/pages/Mint/components/Socials";
// Internal constants
import { NETWORK } from "@/constants";
// Internal config
import { config } from "@/config";
// Internal enrty functions

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const { data } = useGetCollectionData();

  const { collection } = data ?? {};

  return (
    <section className="hero-container flex flex-col md:flex-row gap-[60px] w-full">
      <Image
        src={collection?.cdn_asset_uris?.cdn_image_uri ?? collection?.cdn_asset_uris?.cdn_animation_uri ?? Placeholder1}
        rounded
        className="w-[400px] aspect-square object-cover self-center"
      />
      <div className="basis-3/5 flex flex-col flex-1 gap-6 h-auto justify-end">
        <h1 className="text-[40px] font-[500] text-black">
          {collection?.collection_name ?? config.defaultCollection?.name}
        </h1>
        <p className="body-sm">{collection?.description ?? config.defaultCollection?.description}</p>
        <Socials />
        <div className="flex gap-x-2 items-center flex-wrap justify-between uppercase font-[600] text-[16px] ">
          <p className="whitespace-nowrap opacity-70">Collection Address</p>

          <div className="flex gap-x-2">
            <AddressButton address={collection?.collection_id ?? ""} />
            <a
              className={`px-10 !py-5 border border-black rounded-[8px] font-[600] text-[16px]`}
              target="_blank"
              href={`https://explorer.aptoslabs.com/account/${collection?.collection_id}?network=${NETWORK}`}
            >
              View on Explorer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AddressButton: FC<{ address: string }> = ({ address }) => {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    if (copied) return;
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <Button
      onClick={onCopy}
      className="whitespace-nowrap flex gap-1 px-0 py-0 font-[600] text-[16px] h-auto justify-center align-center"
      variant="link"
    >
      {copied ? (
        "Copied!"
      ) : (
        <>
          {truncateAddress(address)}
          <Image src={Copy} className="dark:invert" />
        </>
      )}
    </Button>
  );
};
