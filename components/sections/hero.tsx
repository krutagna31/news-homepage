import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button, CustomLink, Separator } from "@/components/ui";
import { heroLinks } from "@/content";
import { Fragment } from "react";

function Hero() {
  return (
    <SectionContainer>
      <ViewContainer className="grid gap-12 lg:grid-cols-[70fr_30fr]">
        <div className="space-y-6">
          <div>
            <picture>
              <source
                media="(min-width:768px)"
                srcSet="/images/hero/image-web-3-desktop.jpg"
              />
              <img
                src="/images/hero/image-web-3-mobile.jpg"
                alt="a picture showing few shapes"
              />
            </picture>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <h1 className="text-4xl font-extrabold md:text-5xl">
              The Bright Future of Web 3.0?
            </h1>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <Button className="rounded-none tracking-widest" size="lg">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
        <aside className="space-y-6 bg-slate-900 p-6">
          <h2 className="text-4xl font-extrabold text-amber-400">New</h2>
          <ul className="space-y-6">
            {heroLinks.map(({ title, description, href }, index) => (
              <Fragment key={title}>
                <li>
                  <h3>
                    <CustomLink
                      href={href}
                      className="text-xl font-bold text-white"
                    >
                      {title}
                    </CustomLink>
                  </h3>
                  <p className="text-gray-400">{description}</p>
                </li>
                {index < heroLinks.length - 1 && (
                  <Separator className="bg-gray-600" />
                )}
              </Fragment>
            ))}
          </ul>
        </aside>
      </ViewContainer>
    </SectionContainer>
  );
}

export { Hero };
