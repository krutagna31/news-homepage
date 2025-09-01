import { SectionContainer } from "@/components/layouts";
import { Button } from "@/components/ui";

function Hero() {
  return (
    <SectionContainer>
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
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <Button
              className="rounded-none bg-red-400 px-8 py-6 font-bold tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white dark:text-slate-800 dark:hover:bg-slate-800 dark:hover:text-white"
              size="lg"
            >
              READ MORE
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export { Hero };
