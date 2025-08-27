import { SectionContainer, ViewContainer } from "@/components/layouts";
import Image from "next/image";
import { articles } from "@/content";
import { CustomLink } from "@/components/ui";

function Articles() {
  return (
    <SectionContainer>
      <ViewContainer className="grid gap-4 md:grid-cols-3">
        {articles.map(({ image, link }, index) => (
          <article key={index} className="grid grid-cols-[30fr_70fr] items-center gap-4">
            <div>
              <Image className="w-full" src={image.src} alt={image.alt} width="200" height="254" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-red-400">0{index + 1}</p>
              <h2>
                <CustomLink className="font-bold" variant="secondary" href={link.href}>
                  {link.title}
                </CustomLink>
              </h2>
              <p className="text-muted-foreground text-sm">
                {link.description}
              </p>
            </div>
          </article>
        ))}
      </ViewContainer>
    </SectionContainer>
  );
}

export { Articles };
