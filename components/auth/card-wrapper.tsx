"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { HeaderComp } from "./HeaderComp";
import { BackButton } from "./back-button";
import { Social } from "./social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md bg-[#112] text-white">
      <CardHeader>
        <HeaderComp label={headerLabel} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {
        showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )
      }

      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>

    </Card>
  )
}
