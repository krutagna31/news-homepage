"use client";

import { useTheme } from "next-themes";
import { ViewContainer } from "@/components/layouts";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { headerLinks } from "@/content";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ThemeImage,
} from "@/components/ui";

function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="pt-6">
      <ViewContainer className="flex items-center justify-between">
        <Link href="#">
          <ThemeImage
            className="w-10"
            src={{
              light: "/images/header/logo-light.svg",
              dark: "/images/header/logo-dark.svg",
            }}
            alt="w"
            width="65"
            height="40"
          />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {headerLinks.map((headerLink) => (
              <NavigationMenuItem key={headerLink.title}>
                <NavigationMenuLink asChild>
                  <Link href={headerLink.href}>{headerLink.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden" variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-2/4">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Browse and select a link to explore different pages of the
                  site
                </SheetDescription>
              </SheetHeader>
              <NavigationMenu className="pl-4">
                <NavigationMenuList className="flex-col items-start">
                  {headerLinks.map((headerLink) => (
                    <NavigationMenuItem key={headerLink.title}>
                      <NavigationMenuLink asChild>
                        <Link className="text-xl" href={headerLink.href}>
                          {headerLink.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </ViewContainer>
    </header>
  );
}

export { Header };
