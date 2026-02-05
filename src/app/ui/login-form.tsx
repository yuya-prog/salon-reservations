"use client";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "../lib/action";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
  return (
    <form action={formAction}>
      <h1 className="font-bold text-4xl">salon-reservations-system</h1>
      <div className="w-80">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="mb-2">
            email
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            className="border-2 border-gray-300 rounded-md p-2"
          />

          <label htmlFor="password" className="mb-2">
            password
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="border-2 border-gray-300 rounded-md p-2"
          />

          <input type="hidden" name="redirectTo" value={callbackUrl} />
        </div>

        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
        Login
      </button>
    </form>
  );
};
export default LoginForm;
