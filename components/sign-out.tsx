"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="border border-input hover:bg-accent hover:text-accent-foreground  font-bold right-10 button top-5 right-10 absolute transition-all"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
