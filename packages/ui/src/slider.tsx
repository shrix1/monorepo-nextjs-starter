import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";
import { cn } from "./lib/cn";

type TSliderPropsType = {
  coveredTrackClassName?: string;
  thumbClassName?: string;
  trackClassName?: string;
  currentValue?: string | number;
  variant?: "timeline" | "default";
  timeInSec?: number;
  audioWave?: boolean;
  styles?: React.CSSProperties;
};

function _processTimeSegment(r: string[], val: number, char: string) {
  if (val >= 1) {
    r.push(`${val.toFixed(0)}${char}`);
  }
}
function msToHMS(ms: number, separator?: string) {
  // Converts milliseconds to a timestamp in the format of 00:00:00
  let seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  const results: string[] = [];

  if (separator) {
    if (Number.isNaN(seconds)) {
      // Fix: speaker label sometimes doesn't have time. Extra character is present before the start word.
      return "";
    }
    const timeParts = [];
    if (hours > 0) {
      const formattedHours = hours.toString().padStart(2, "0");
      timeParts.push(formattedHours);
    }
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    timeParts.push(formattedMinutes, formattedSeconds);

    return timeParts.join(separator);
  }
  _processTimeSegment(results, hours, "h");
  _processTimeSegment(results, minutes, "m");
  _processTimeSegment(results, seconds, "s");

  if (results.length === 0) {
    return "~0s";
  }
  return results.join(" ");
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & TSliderPropsType
>(
  (
    {
      styles,
      className,
      audioWave,
      coveredTrackClassName = "",
      thumbClassName = "",
      trackClassName = "",
      currentValue,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    return (
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-full touch-none select-none items-center",
          className,
        )}
        style={{
          ...styles,
        }}
        {...props}
      >
        <SliderPrimitive.Track
          data-intercom-target="slider-track"
          className={cn(
            "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",
            trackClassName,
          )}
          style={{
            opacity: props.disabled ? 0.7 : 1,
            cursor: props.disabled ? "default" : "pointer",
          }}
        >
          <SliderPrimitive.Range
            data-intercom-target="slider-range"
            className={cn(
              "absolute h-full bg-xm-primary",
              coveredTrackClassName,
            )}
          />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
          data-intercom-target="slider-thumb"
          className={cn(
            "relative block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            thumbClassName,
          )}
          style={{
            opacity: props.disabled ? 0.7 : 1,
            cursor: props.disabled ? "default" : "pointer",
          }}
        >
          {currentValue && (
            <p
              className="border-gray absolute -translate-y-7 rounded-md border bg-white p-0.5 px-1 text-xs font-semibold drop-shadow-lg"
              style={{ textShadow: "0px 0px 15px #919090" }}
            >
              {currentValue}
            </p>
          )}
          {variant === "timeline" && (
            <div
              className="h-[20px] w-[30px] -translate-x-[13.5px] -translate-y-0 rotate-90 bg-xm-primary"
              style={{
                clipPath: "polygon(0% 20%, 51% 20%, 73% 49%, 52% 80%, 0% 80%)",
              }}
            />
          )}
          {variant === "timeline" && props.timeInSec !== undefined && (
            <p
              className={`absolute bottom-0 z-10  translate-y-4 text-xs ${
                props.timeInSec > 1 ? "-translate-x-[29px]" : "-translate-x-0"
              }`}
            >
              {`${msToHMS(props.timeInSec * 1000, ":")}.${(props.timeInSec * 1000) % 1000}`}
            </p>
          )}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    );
  },
);

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
