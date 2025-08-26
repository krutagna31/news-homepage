import { Link } from "@/types/shared";

export type Article = {
  image: {
    src: string;
    alt: string;
  };
  link: Link;
};
