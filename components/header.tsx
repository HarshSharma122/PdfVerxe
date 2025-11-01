import React from "react";
import { Button } from "./ui/button";
import { NavItem } from "@/utils/nav-item";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import logo from "../public/pdf-verxe-logo.svg";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3">
      {/* logo section*/}
      <section>
        <Image src={logo} alt="logo" height={50} width={50} />
      </section>

      {/* navigation section */}
      <section>
        <NavItem />
      </section>

      {/* CTA section */}
      <section className="flex items-center gap-2">
        <Button variant="outline">Contact us</Button>
        <SignedOut>
          <SignUpButton>
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </section>
    </header>
  );
};

export default Header;
