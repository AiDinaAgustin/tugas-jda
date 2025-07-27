"use client";

import { useSession } from "next-auth/react";

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {session ? (
        <div className="flex items-center gap-2">
          {session.user?.image && (
            <img
              src={session.user.image}
              alt={session.user.name || "User"}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span>Welcome, {session.user?.name || "User"}</span>
        </div>
      ) : (
        <span>Not signed in</span>
      )}
    </div>
  );
}