import clsx from "clsx";
import Link from "next/link";

function CustomLink({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link className={clsx(className, "")} {...props}>
      {children}
    </Link>
  );
}

export { CustomLink };
