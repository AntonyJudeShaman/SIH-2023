import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import favicon from "@/components/favicon.png";
import { ArrowLeft } from "lucide-react";

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-purple-50" data-theme="cmyk">
      <Link href="/">
      <ArrowLeft className="absolute left-8 top-8 text-black w-6 h-6" />
      </Link>
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-green-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-green-200 bg-green-200 px-4 py-6 pt-8 text-center sm:px-16">
        <Link href="/">
            <Image
              src={favicon}
              priority
              alt="Logo"
              className="h-12 w-10 "
              width={20}
              height={20}
              style={{ filter: 'contrast(80%)' }} 
            />
          </Link>
          <h3 className="text-xl font-bold text-green-950 bg-green-200">Sign Up</h3>
          <p className="text-sm font-semibold text-green-950">
            Create an account with your email and password
          </p>
        </div>
        <Form type="register" />
      </div>
    </div>
  );
}
