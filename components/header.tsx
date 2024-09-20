"use client";

// import { blogConfig } from "@/blog.config";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Separator } from "@/components/ui/separator";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
// import Search from "@/plugins/search";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={
        "w-full sticky top-0 bg-secondary/80 backdrop-blur-md shadow-sm z-10 min-h-20"
      }
    >
      <header className={"container flex justify-between py-4"}>
        <div className={"flex justify-center items-center"}>
          <Link
            className={"flex justify-center items-center mr-4 gap-2"}
            href={"/"}
          >
            <Image src="/logo.png" alt="BasicLaws.de" width={48} height={48} />
            <div className={"text-xl font-bold font-sans"}>BasicLaws.de</div>
          </Link>
        </div>
        <div className={"flex justify-center items-center space-x-1"}>
          {/*   <div className={"md:hidden block"}>
            <Sheet
              open={open}
              onOpenChange={() => {
                setOpen(!open);
              }}
            >
              <SheetTrigger>
                <Button size={"icon"} variant={"ghost"}>
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={"top"}
                className={"w-full space-y-4 p-12 text-sm"}
              >
                {routes.map((route: any, index: number) => (
                  <div className={"space-y-4"}>
                    <Link
                      href={route.value}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <Button
                        variant={active == route.name ? "secondary" : "ghost"}
                        className={"text-base w-full"}
                      >
                        {route.name}
                      </Button>
                    </Link>
                    {index != routes.length - 1 && <Separator />}
                  </div>
                ))}
              </SheetContent>
            </Sheet>
          </div> */}
          {/* <Search /> */}
          {/* <Link href={githubRepo}>
            <Button size={"icon"} variant={"ghost"}>
              <Github size={20} />
            </Button>
          </Link> */}
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => {
              setTheme(theme == "light" ? "dark" : "light");
            }}
          >
            {theme == "light" && <Sun size={20} />}
            {theme == "dark" && <Moon size={20} />}
          </Button>
        </div>
      </header>
    </div>
  );
};
