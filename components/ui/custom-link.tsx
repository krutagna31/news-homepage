import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

const customLinkVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "hover:text-amber-400",
      secondary: "hover:text-red-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function CustomLink({
  children,
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof customLinkVariants>) {
  return (
    <Link className={cn(customLinkVariants({ variant, className }))} {...props}>
      {children}
    </Link>
  );
}

export { CustomLink };
