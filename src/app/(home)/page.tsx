import dynamic from "next/dynamic";
import Link from "next/link";

const ToolTip = dynamic(() => import("@/components/home/ToolTip"));

export default function HomePage() {
  return (
    <main className="flex flex-col h-screen home-bg text-white px-5 md:px-0">
      <div className="mt-4 md:mt-8 ml-auto md:px-10 cursor-pointer">
        <ToolTip />
      </div>

      <div className="flex flex-col h-full items-center justify-center space-y-2">
        <h1 className="font-light text-2xl md:text-3xl">Welcome to</h1>
        <h1 className="font-bold text-4xl md:text-6xl">LunarLoom</h1>
        <Link href="/chat">
          <button className="bg-blue-500 px-8 py-2 rounded-md my-3 hover:brightness-90">
            Get Started
          </button>
        </Link>
        <p className="text-center text-xs md:text-base">
          Copyright © 2023 LunarLoom LunarLoom Web Socket Service - WebSocket
          Service for LunarLoom End To End Encrypted Chat App
        </p>
      </div>
    </main>
  );
}


