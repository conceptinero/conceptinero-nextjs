import Link from "next/link";
import Image from "next/image";

const styles = {
  footer: { imgSize: 24, textSize: "lg" },
  navbar: { imgSize: 50, textSize: "xl" },
};

function Logo({ type = "navbar" }: { type?: "footer" | "navbar" }) {
  const { imgSize, textSize } = styles[type];
  return (
    <Link href="/" className="flex gap-3 items-center">
      <div>
        <Image
          src="/logos/conceptinero.webp"
          alt="Conceptinero Logo"
          width={imgSize}
          height={imgSize}
        />
      </div>
      <span
        className={`font-bold text-${textSize} text-blue-900 dark:text-white`}
      >
        Conceptinero
      </span>
    </Link>
  );
}

export default Logo;
