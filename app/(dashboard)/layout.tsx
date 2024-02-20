import Logo from "@/components/logo";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
      <nav className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
