import { ViewContainer } from "@/components/layouts";
import { Articles, Hero } from "@/components/sections";
import { Aside } from "@/components/sections/aside";

export default function Home() {
  return (
    <>
      <ViewContainer className="grid gap-x-12 lg:grid-cols-[70fr_30fr]">
        <Hero />
        <Aside />
      </ViewContainer>
      <Articles />
    </>
  );
}
