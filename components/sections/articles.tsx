import { SectionContainer, ViewContainer } from "@/components/layouts";
import Image from "next/image";
import { articles } from "@/content";
import Link from "next/link";

function Articles() {
  return (
    <SectionContainer>
      <ViewContainer className="grid grid-cols-3 gap-6">
        {articles.map(({ image, link }, index) => (
          <article key={index} className="flex items-center gap-4">
            <div>
              <Image src={image.src} alt={image.alt} width="200" height="254" />
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-red-500">0{index + 1}</p>
              <h2>
                <Link className="font-bold" href={link.href}>
                  {link.title}
                </Link>
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
