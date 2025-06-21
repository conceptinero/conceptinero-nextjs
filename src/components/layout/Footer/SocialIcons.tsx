import { SocialLink, socialLinks } from "./footerData";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SocialIcon({ href, label, path }: SocialLink) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={label}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        "h-8 w-8 rounded-full"
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-current hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
      >
        <path d={path} />
      </svg>
    </a>
  );
}

function SocialIcons() {
  return (
    <>
      {socialLinks.map((social, index) => (
        <SocialIcon
          key={index}
          href={social.href}
          label={social.label}
          path={social.path}
        />
      ))}
    </>
  );
}

export default SocialIcons;
