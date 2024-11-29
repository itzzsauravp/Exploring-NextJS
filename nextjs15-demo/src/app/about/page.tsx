"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-2xl font-bold">
      <p>About</p>
      <button onClick={() => router.replace("/")} className="border p-2">
        Home
      </button>
    </div>
  );
};

export default About;
