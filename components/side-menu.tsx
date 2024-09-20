"use client";

import * as React from "react";
import { kebabCase } from "lodash";
import { usePathname } from "next/navigation";

import constitution from "../data/constitution-titles.json" with { type: "json" };
import SideNavLink from "@/components/side-nav-link-base";

export const SideMenu: React.FunctionComponent = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="pb-4">
        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
          Menu
        </h4>
        {constitution.map((title, index) => {
          const href = `/${kebabCase(title)}`;
          return (
            <SideNavLink
              key={`${title}-${index}`}
              href={href}
              label={title}
              highlight={pathname === href}
            />
          );
        })}
      </div>
    </>
  );
};
