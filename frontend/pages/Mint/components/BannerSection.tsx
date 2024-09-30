import { useMemo } from "react";
// Internal components
import { Image } from "@/components/ui/image";
// Internal utils
import { cn } from "@/lib/utils";
// Internal config
import { config } from "@/config";

interface StepItemProps {
  number: string;
  title: string;
}

const StepItem: React.FC<StepItemProps> = ({ number, title }) => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[198px]">
      <div className="text-base font-semibold tracking-tight leading-none text-indigo-500 uppercase">
        {number}
      </div>
      <div className="mt-2 text-2xl font-medium text-black">{title}</div>
    </div>
  );
};

interface StepImageProps {
  src: string;
}

const StepImage: React.FC<StepImageProps> = ({ src }) => {
  return (
    <div className="flex grow shrink gap-2.5 items-center self-stretch py-px pl-2.5 my-auto min-h-[283px] min-w-[240px] w-[198px]">
      <img
        loading="lazy"
        src={src}
        alt=""
        className="object-contain self-stretch my-auto aspect-[0.88] min-w-[240px] w-[246px] max-sm:w-[521px]"
      />
    </div>
  );
};

interface Step {
  number: string;
  title: string;
}

interface StepImageData {
  src: string;
}

const steps: Step[] = [
  { number: 'Step 1', title: 'Connect your wallet' },
  { number: 'Step 2', title: 'Select quantity' },
  { number: 'Step 3', title: 'Confirm' },
  { number: 'Step 4', title: 'Done' },
  { number: 'Step 5', title: 'Receive your nft' },
];

const stepImages: StepImageData[] = [
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8200ac7af716cb08463c15b22e481d2db122d6143dc1e2850f06020ca7260098?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28d930027e7e52f101bf42f8f38579953da83a55f72ebeddc7fbfed388f6d7fd?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/58fd7000d3de4f9bce626f2381debd123c01fa99b06f130b1579eb8ad116fa24?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8200ac7af716cb08463c15b22e481d2db122d6143dc1e2850f06020ca7260098?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/28d930027e7e52f101bf42f8f38579953da83a55f72ebeddc7fbfed388f6d7fd?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a' },
];

export const BannerSection: React.FC = () => {


  return (
    <section className="flex flex-col">
      <header className="flex flex-col max-w-full w-[536px]">
        <h1 className="text-4xl font-medium text-black max-md:max-w-full">
          How to mint NFT?
    </h1>
    <p className="mt-6 text-base text-black text-opacity-60 max-md:max-w-full">
      Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </header>
  <div className="flex flex-col mt-16 w-full max-md:mt-10 max-md:max-w-full">
    <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full">
      {steps.map((step, index) => (
        <StepItem key={index} number={step.number} title={step.title} />
      ))}
    </div>
    <div className="flex flex-wrap gap-5 items-center mt-4 w-full max-md:max-w-full">
      {stepImages.map((image, index) => (
        <StepImage key={index} src={image.src} />
      ))}
    </div>
  </div>
</section>
  );
};
