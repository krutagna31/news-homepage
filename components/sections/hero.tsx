import { SectionContainer, ViewContainer } from "@/components/layouts";
import { Button } from "@/components/ui";

function Hero() {
  return (
    <SectionContainer>
      <ViewContainer className="space-y-6">
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
        <div className="grid md:grid-cols-2">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            The Bright Future of Web 3.0?
          </h1>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button className="rounded-none tracking-widest" size="lg">
              READ MORE
            </Button>
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}

export { Hero };
