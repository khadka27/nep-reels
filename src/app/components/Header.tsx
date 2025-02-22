"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User } from "lucide-react";
import { useNotification } from "./Notification";
import logo from "@/Image/Nepreels1.png";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <div className="navbar bg-base-300 sticky top-0 z-40 shadow">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-xl gap-2 normal-case font-bold"
            prefetch={true}
            onClick={() => showNotification("Welcome to NepReels", "info")}
          >
            <div className="relative mr-2 w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={logo}
                alt="NepReels Logo"
                layout="fill" // This allows the image to fill the container
                objectFit="cover" // Adjusts the image's size to cover the area of the container
                className="rounded-full" // Ensures the img element itself is fully round
              />
            </div>
            <span className="text-xl font-bold">नेपReels</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <User className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {session ? (
                <>
                  <li>
                    <span className="text-sm opacity-70">
                      {session.user?.email?.split("@")[0]}
                    </span>
                  </li>
                  <li className="menu-title">
                    <span>Account</span>
                  </li>
                  <li>
                    <Link
                      href="/upload"
                      className="justify-between"
                      onClick={() =>
                        showNotification("Welcome to Admin Dashboard", "info")
                      }
                    >
                      Video Upload
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="justify-between">
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="justify-between"
                    onClick={() =>
                      showNotification("Please sign in to continue", "info")
                    }
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
