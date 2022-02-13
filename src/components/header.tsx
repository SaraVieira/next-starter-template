import { useSession } from "next-auth/react";
import Link from "next/link";
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (loading) return null;
  return (
    <header className="pb-12">
      {!session.user ? (
        <Link href="/signin">Sign In</Link>
      ) : (
        `Hello ${session.user.name || session.user.email}`
      )}
    </header>
  );
}
