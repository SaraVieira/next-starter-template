import Header from "./header";
import type { ReactChildren } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="pb-6 bg-brand-darkBlue min-h-screen w-screen text-white">
      <Header />
      <main>{children}</main>
    </div>
  );
}
