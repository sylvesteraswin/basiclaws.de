import SocialList from "@/components/social-list";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div>
      <Separator />
      <footer className={"container py-8 space-y-8"}>
        <div
          className={
            "w-full flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0"
          }
        >
          <div className={"md:hidden block"}>
            <SocialList isFooter={true} />
          </div>
          <div>{`© ${new Date().getFullYear()} BasicLaws.de`}</div>
          <div className={"md:block hidden"}>
            <SocialList isFooter={true} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
