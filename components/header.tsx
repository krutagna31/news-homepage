import { ViewContainer } from "@/components/layouts";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

function Header() {
  return (
    <header className="py-6">
      <ViewContainer className="flex justify-between">
        <Link href="#">Next.js Template</Link>
        <ModeToggle />
      </ViewContainer>
    </header>
  )
}

export { Header };