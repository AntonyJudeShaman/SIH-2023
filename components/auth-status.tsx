import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="absolute bottom-5 z-30 left-5 w-full  ">
      {session && (
        <p className="text-stone-200 text-sm">
          Signed in as {session.user?.email}
          {/* Signed in as {session.user?.name} */}
        </p>
      )}
    </div>
  );
}
