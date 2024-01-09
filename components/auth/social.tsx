"use client";

import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "../ui/button";
import { Github, Twitter } from "lucide-react";
import { useSearchParams } from "next/navigation";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div className="flex items-cetner w-full gap-x-2">
      <Button size="lg" className="w-full" onClick={() => onClick("github")}>
        <Github className="h-5 w-5" />
      </Button>

      <Button size="lg" className="w-full" onClick={() => onClick("google")}>
        <Twitter className="h-5 w-5" />
      </Button>
    </div>
  );
};
