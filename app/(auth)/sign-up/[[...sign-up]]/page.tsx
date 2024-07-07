import { SignUp } from "@clerk/nextjs";

export default function SingUpPage() {
  return (
    <div>
      <main className="flex h-screen w-full items-center justify-center text-white hover:text-blue-1">
        <SignUp />
      </main>
    </div>
  );
}
