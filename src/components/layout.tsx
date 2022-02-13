import { ReactNode } from "react";
import Header from "./header";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="pb-6 bg-brand-darkBlue min-h-screen w-screen text-white">
      <Header />
      <main>{children}</main>
    </div>
  );
}
