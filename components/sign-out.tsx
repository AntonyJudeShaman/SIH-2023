"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-stone-400 hover:text-stone-200 top-5 right-10 absolute transition-all"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
