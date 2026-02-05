"use client";
import { Suspense, useActionState } from "react";
import LoginForm from "../ui/login-form";

const Page = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
