import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="border-t mt-10 bg-muted/50">
      <div className="container mx-auto text-center space-y-6 py-24">
        <h2 className="text-4xl font-extrabold tracking-tight text-balance font-heading">
          Ready to start your citizenship journey?
        </h2>
        <p className="text-base sm:text-lg leading-normal text-balance">
          Effortlessly prepare for the{" "}
          <span className="font-semibold">Einbürgerungstest</span> with our app
          — completely free of charge.
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 items-center justify-center gap-x-6 max-w-2xl mx-auto"
          )}
        >
          <Link
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "font-sans text-lg"
            )}
            target="_blank"
            href={`citizenshiptest.de`}
          >
            Citizenship Test App
            <ExternalLink className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
