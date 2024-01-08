"use client";

import { Github, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-cetner w-full gap-x-2">
      <Button size="lg" className="w-full" onClick={() => {}}>
        <Github className="h-5 w-5" />
      </Button>

      <Button size="lg" className="w-full" onClick={() => {}}>
        <Twitter className="h-5 w-5" />
      </Button>
    </div>
  );
};
