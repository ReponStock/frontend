"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const NavigateLogin = () => {
    router.push("/login");
  }
  const NavigateFilesUpload = () => {
    router.push("/filesUpload");
  }

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={()=>NavigateLogin()}>Login</button>
      <button onClick={()=>NavigateFilesUpload()}>FilesUpload</button>
    </div>
  );
}
