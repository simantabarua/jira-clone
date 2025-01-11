"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function AuthNavbar() {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";

  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <Image src={"assets/logo.svg"} alt="logo" width={202} height={40} />
      <div>
        {isSignIn ? (
          <Button asChild variant="primary">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        ) : (
          <Button asChild variant="primary">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
