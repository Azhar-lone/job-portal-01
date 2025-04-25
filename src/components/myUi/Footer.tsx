import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  return (
    <footer  className="bg-background  p-8 z-40 flex flex-col gap-2 border-t-2">
      <div className="max-w-[1440px] mx-auto   ">
        <div className=" flex items-start flex-col md:flex-row justify-between border-b gap-5   p-2 border-foreground">
          <div className="flex flex-col text-foreground gap-4   md:w-1/4  w-full ">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex gap-2   ">
              <ShoppingBagIcon /> Job
            </h3>
            <p>
              Job Quis enim pellentesque viverra tellus eget malesuada
              facilisis. Congue nibh vivamus aliquet nunc mauris dui nullam et.
            </p>
          </div>

          <div className="flex flex-col  md:w-1/5  w-full text-foreground  ">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex gap-2">
              Company
            </h3>
            <ul className="flex flex-col gap-2 flex-wrap">
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Our Team </Link>
              <Link href={"#"}> Partners </Link>
              <Link href={"#"}> For Candidates </Link>
              <Link href={"#"}> For Employers</Link>
            </ul>
          </div>

          <div className="flex flex-col  md:w-1/5  w-full  text-foreground ">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex gap-2">
              Job Categories
            </h3>

            <ul className="flex flex-col gap-2 ">
              <Link href={"#"}>Telecomunications</Link>
              <Link href={"#"}>Hotels & Tourism </Link>
              <Link href={"#"}> Construction </Link>
              <Link href={"#"}> Education </Link>
              <Link href={"#"}> Financial Services</Link>
            </ul>
          </div>

          <div className="flex flex-col text-foreground md:w-1/5  w-full  gap-3 ">
            <h3 className="text-xl font-semibold text-foreground flex ">
              Newsletter
            </h3>
            <p className="text-foreground/80">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <Input placeholder="Email Address" />

            <Button className="py-5 text-lg">Subscribe now</Button>
          </div>
        </div>
        <div className="text-foreground flex flex-col md:flex-row justify-between p-2 items-center gap-2">
          <h1 className="text-foreground/70 text-sm flex gap-2">
            © Copyright Job Portal 2025.{" "}
            <Link
              className="hover:text-primary"
              href={"https://azhar-lone-portfolio.vercel.app/"}
              target="_blank"
            >
              @Azhar Lone
            </Link>
          </h1>
          <div className="flex gap-2 items-center">
            <h5>Privacy Policy</h5>
            <h5>Terms & Conditions</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
