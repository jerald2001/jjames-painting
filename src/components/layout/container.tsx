import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** "default" = 1280px, "narrow" = 880px for editorial content, "wide" = 1440px for bleed sections */
  width?: "default" | "narrow" | "wide";
};

export function Container({
  children,
  className,
  width = "default",
}: ContainerProps) {
  const widthClass = {
    default: "max-w-[1280px]",
    narrow: "max-w-[880px]",
    wide: "max-w-[1440px]",
  }[width];

  return (
    <div className={cn("mx-auto w-full px-6 md:px-8", widthClass, className)}>
      {children}
    </div>
  );
}
