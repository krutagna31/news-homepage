import { Article } from "@/types";

export const articles: Article[] = [
  {
    image: {
      src: "/images/articles/image-retro-pcs.jpg",
      alt: "retro pc",
    },
    link: {
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      href: "/",
    },
  },
  {
    image: {
      src: "/images/articles/image-top-laptops.jpg",
      alt: "laptop keyboard with red backlight",
    },
    link: {
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      href: "/",
    },
  },
  {
    image: {
      src: "/images/articles/image-gaming-growth.jpg",
      alt: "a hand throwing controller in the air",
    },
    link: {
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      href: "/",
    },
  },
];
