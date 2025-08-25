"use client";

import { useTheme } from "next-themes";
import { ViewContainer } from "@/components/layouts";
import Link from "next/link";
// import {
//   Button,
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui";
import { Menu, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { links } from "@/content";
import {
  Button,
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
} from "@/components/ui";

function Header() {
  const { setTheme } = useTheme();

  return (
    <header className="py-6">
      <ViewContainer className="flex items-center justify-between">
        <Link href="#">
          <Image src="/images/logo.svg" alt="w" width="32" height="24" />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink asChild>
                  <Link href={link.href}>{link.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Browse and select a link to explore different pages of the
                  site
                </SheetDescription>
              </SheetHeader>
              <NavigationMenu>
                <NavigationMenuList className="flex-col items-start">
                  {links.map((link) => (
                    <NavigationMenuItem key={link.title}>
                      <NavigationMenuLink asChild>
                        <Link href={link.href}>{link.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
      </ViewContainer>
    </header>
  );
}

export { Header };
