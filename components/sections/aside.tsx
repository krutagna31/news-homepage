import { asideLinks } from "@/content";
import { CustomLink, Separator } from "@/components/ui";

function Aside() {
  return (
    <aside className="py-12">
      <div className="space-y-6 bg-slate-900 p-6 dark:bg-slate-900">
        <h2 className="text-4xl font-extrabold text-amber-400">New</h2>
        <ul className="space-y-6">
          {asideLinks.map(({ title, description, href }, index) => (
            <li key={title}>
              <h3>
                <CustomLink
                  href={href}
                  className="text-xl font-bold text-white"
                >
                  {title}
                </CustomLink>
              </h3>
              <p className="text-gray-400">{description}</p>
              {index < asideLinks.length - 1 && (
                <Separator className="mt-4 bg-gray-600" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export { Aside };
