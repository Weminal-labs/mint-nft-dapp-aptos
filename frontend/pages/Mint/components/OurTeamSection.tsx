import { FC } from "react";
// Internal components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { ConfigTeamMember, config } from "@/config";
// Internal assets
import Twitter from "@/assets/icons/twitter.svg";
import Discord from "@/assets/icons/discord.svg";

interface TeamMemberProps {
  imageSrc: string;
  altText: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, altText }) => (
  <img
    loading="lazy"
    src={imageSrc}
    alt={altText}
    className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[200px]"
  />
);

const teamMembers = [
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/08159317cada75611af192f675e0cd9b30312ab278225492cbca0e390d9c8a94?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a", altText: "Team member 1" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/08159317cada75611af192f675e0cd9b30312ab278225492cbca0e390d9c8a94?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a", altText: "Team member 2" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a85b0e1cf132701b55f8cc7425e9ace99bd79a8da895b6db72f03a546f5d6e7?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a", altText: "Team member 3" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f1ddcc3028e5603dd14ef9f97ef93800dacd6f1ce63fbaa418c10c0936ffd27?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a", altText: "Team member 4" },
  { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a85b0e1cf132701b55f8cc7425e9ace99bd79a8da895b6db72f03a546f5d6e7?placeholderIfAbsent=true&apiKey=55089f330881432795d0fd8215f3cd4a", altText: "Team member 5" }
];

interface OurTeamSectionProps {}

export const OurTeamSection: React.FC<OurTeamSectionProps> = () => {

  return (
    <section className="flex flex-col justify-center">
      <h2 className="gap-2.5 self-center text-4xl font-medium text-black">
        Our Team
      </h2>
      <div className="flex flex-wrap gap-6 items-center mt-10 w-full max-md:max-w-full justify-center">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            altText={member.altText}
          />
        ))}
      </div>
    </section>
  );
};
