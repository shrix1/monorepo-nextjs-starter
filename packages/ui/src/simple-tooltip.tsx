"use client";

import type React from "react";
import { cn } from "./lib/cn";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export type TooltipProps = {
  children: React.ReactNode;
  text?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "center" | "start" | "end";
  className?: string;
  sideOffset?: number;
  tooltipTextClassName?: string;
  arrowClassName?: string;
  contentComp?: React.ReactNode;
  contentClassName?: string;
  defaultOpen?: boolean;
};

export const SimpleTooltip = ({
  children,
  text,
  side = "bottom",
  align,
  className,
  sideOffset,
  tooltipTextClassName,
  arrowClassName,
  contentComp,
  contentClassName,
  defaultOpen = false,
}: TooltipProps) => {
  return !text && !contentComp ? (
    <div>{children}</div>
  ) : (
    <TooltipProvider delayDuration={100}>
      <Tooltip defaultOpen={defaultOpen}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          className={cn(className, "text-sm hidden md:block")}
          sideOffset={sideOffset}
        >
          {!contentComp ? (
            <p className={tooltipTextClassName}>{text}</p>
          ) : (
            <div className={contentClassName}>{contentComp}</div>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
