import Image from "next/image";

import { BRAND_LOGO } from "@/content/site";

export function BrandLogo({
  alt,
  className,
  priority = false,
}: {
  alt: string;
  className: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={BRAND_LOGO}
      alt={alt}
      width={640}
      height={640}
      sizes="64px"
      priority={priority}
      className={`block object-contain ${className}`}
    />
  );
}
