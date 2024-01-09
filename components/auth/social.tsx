"use client";

import { Github, Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export const Social = () => {

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackURL: DEFAULT_LOGIN_REDIRECT
    })
  }

  return (
    <div className="flex items-cetner w-full gap-x-2">
      <Button size="lg" className="w-full" onClick={() => onClick("google")}>
        <Github className="h-5 w-5" />
      </Button>

      <Button size="lg" className="w-full" onClick={() => onClick("github")}>
        <Twitter className="h-5 w-5" />
      </Button>
    </div>
  );
};
