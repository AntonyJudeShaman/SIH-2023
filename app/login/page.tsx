import Image from "next/image";
import Form from "@/components/form";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import logo from "@/components/favicon.png";

export default function Login() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-purple-50">
        <Link href="/">
      <ArrowLeft className="absolute left-8 top-8 text-black w-8 h-8" />
      </Link>
        <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-green-100 shadow-xl">
          <div className="relative flex flex-col items-center justify-center space-y-3 border-b border-green-200 bg-green-200 px-4 py-6 pt-8 text-center sm:px-16">
            <Link href="#">
              <Image
                src={logo}
                priority
                alt="Logo"
                className="h-12 w-10"
                width={20}
                height={20}
                style={{ filter: 'contrast(80%)' }} 
              />
            </Link>
            <h3 className="text-xl font-bold text-green-950 bg-green-200" data-theme="">
              Sign In
            </h3>
            <p className="text-sm font-semibold text-green-950">
              Use your email and password to sign in
            </p>
            
          </div>
          <Form type="login" />
          
        </div>
      </div>
    </>
  );
}
