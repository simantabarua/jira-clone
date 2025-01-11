import { AuthNavbar } from "@/features/auth/components/nav";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Sign in",
  description: "sign in to your account",
};
function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-neutral-100 min-h-screen">
        <AuthNavbar />
        <div className="container mx-auto flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </main>
    </>
  );
}

export default AuthLayout;
