"use client";
import * as React from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";

export default function Form({ type }: { type: "login" | "register" }) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setisGoogleLoading] = React.useState<boolean>(false);
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        if (type === "login") {
          signIn("credentials", {
            redirect: false,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            // @ts-ignore
          }).then(({ error }) => {
            if (error) {
              setLoading(false);
              toast.error(error);
            } else {
              router.refresh();
              router.push("/protected");
            }
          });
        } else {
          fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Account created! Redirecting to login...");
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              const { error } = await res.json();
              toast.error(error);
            }
          });
        }
      }}
      className="flex flex-col space-y-4 bg-green-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="email"
          className="block font-bold text-xs text-green-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          autoComplete="email"
          required
          className="mt-1 block w-full text-black bg-white appearance-none rounded-md border border-green-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block font-bold text-xs text-green-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*****"
          required
          className="mt-1 bg-white text-black block w-full appearance-none rounded-md border border-green-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        disabled={loading}
        className={`${
          loading
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-gradient-to-b from-green-500 to-blue-600 hover:to-green-500 hover:from-blue-600 text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? (
          <LoadingDots color="#00FF00" />
        ) : (
          <p className="font-bold">
            {type === "login" ? "Sign In" : "Sign Up"}
          </p>
        )}
      </button>
      {type === "login" ? (
        <p className="text-center text-sm text-green-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-gray-800">
            Sign up
          </Link>{" "}
          for free.
        </p>
      ) : (
        <p className="text-center text-sm text-green-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-gray-800">
            Sign in
          </Link>{" "}
          instead.
        </p>
      )}
      <div className="">
        <div className="horizontal-line">
        <div className="line"></div>
        <span className="or-text font-semibold text-green-600">OR </span>
        <div className="line"></div>
      </div>
      </div>

      <button
        type="button"
        className="mt-1 bg-white w-full rounded-xl mx-auto d-block text-center align-center justify-center hover:bg-gray-200 font-semibold text-black p-3 w-100 border border-gray-400 hover:bg-accent hover:text-accent-foreground shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm flex items-center"
        onClick={() => {
          setisGoogleLoading(true);
          signIn("google");
        }}
        disabled={isLoading || isGoogleLoading}
      >
        {isGoogleLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2" />
        )}
        Google
      </button>
    </form>
  );
}
