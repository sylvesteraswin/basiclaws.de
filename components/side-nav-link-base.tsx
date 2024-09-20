import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface SideNavLinkProps {
  href: string;
  label: string;
  highlight: boolean;
}

const SideNavLink: React.FunctionComponent<SideNavLinkProps> = ({
  href,
  label,
  highlight,
}) => {
  return (
    <Link
      //   href="#"
      href={href}
      className={cn(
        !highlight &&
          "flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:bg-muted",
        highlight &&
          "flex items-center gap-3 rounded-lg px-3 py-2 bg-primary text-primary-foreground transition-all hover:bg-primary/90"
      )}
    >
      {label}
    </Link>
  );
};

export default SideNavLink;
