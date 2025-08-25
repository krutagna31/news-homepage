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
          <Image src="/images/logo.svg" alt="w" width="65" height="40" />
        </Link>
        <NavigationMenu>
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
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation Bar</SheetTitle>
              <SheetDescription>Navigation Bar Description</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </ViewContainer>
    </header>
  );
}

export { Header };
