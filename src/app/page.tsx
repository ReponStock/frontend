"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const NavigateLogin = () => {
    router.push("/login");
  }

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={()=>NavigateLogin()}>Login</button>
    </div>
  );
}
