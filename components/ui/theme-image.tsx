import { useTheme } from "next-themes";
import Image from "next/image";

interface ThemeImageProps
  extends Omit<React.ComponentProps<typeof Image>, "src"> {
  src: {
    light: string;
    dark: string;
  };
}

function ThemeImage({ src, alt, ...props }: ThemeImageProps) {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "light" ? src.light : src.dark}
      alt={alt}
      {...props}
    />
  );
}

export { ThemeImage };
