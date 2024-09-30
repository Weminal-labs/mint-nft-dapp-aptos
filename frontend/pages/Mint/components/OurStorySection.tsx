// Internal components
import { buttonVariants } from "@/components/ui/button";
import { TriImageBanner } from "@/pages/Mint/components/TriImageBanner";
// Internal config
import { config } from "@/config";

interface CaptionProps {
  text: string;
}

const Caption: React.FC<CaptionProps> = ({ text }) => {
  return (
    <div className="text-base font-semibold tracking-tight leading-none text-indigo-500 uppercase">
      {text}
    </div>
  );
};

interface StoryContentProps {
  content: string;
}

const StoryContent: React.FC<StoryContentProps> = ({ content }) => {
  return (
    <p className="mt-6 text-base text-black text-opacity-60 max-md:max-w-full">
      {content}
    </p>
  );
};

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-0 items-center self-stretch my-auto min-h-[400px] min-w-[240px] max-md:max-w-full">
      {images.map((src, index) => (
        <img
          key={index}
          loading="lazy"
          src={src}
          alt=""
          className={`object-contain self-stretch my-auto rounded-lg ${
            index === 0
              ? 'aspect-[1.45] min-w-[240px] w-[282px]'
              : 'aspect-square min-w-[240px] w-[282px]'
          }`}
        />
      ))}
    </div>
  );
}

interface OurStorySectionProps {
  
}

export const OurStorySection: React.FC<OurStorySectionProps> = () => {
  const captionText = "Caption";
  const title = "Our Story";
  const content = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const images = ["https://cdn.builder.io/api/v1/image/assets/TEMP/d8448a22-0eab-4072-b7fe-dff19e895890?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a", "https://cdn.builder.io/api/v1/image/assets/TEMP/2f235ec8d3f77c0608a19454c208c48bdf5689cad202ec7dfe91b01d8cebc399?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a"];

  return (
    <section className="flex flex-wrap gap-10 justify-between items-center">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[536px] max-md:max-w-full">
        <Caption text={captionText} />
        <h2 className="mt-2 text-4xl font-medium text-black max-md:max-w-full">{title}</h2>
        <StoryContent content={content} />
      </div>
      <ImageGallery images={images} />
    </section>
  );
};
