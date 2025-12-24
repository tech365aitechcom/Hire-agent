import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-[hsl(262_83%_58%)] via-[hsl(220_95%_60%)] to-[hsl(190_95%_55%)] text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-[hsl(262_83%_58%_/_0.4)] hover:scale-105 active:scale-100",
        heroOutline: "bg-transparent border border-[hsl(262_83%_58%_/_0.5)] text-foreground hover:bg-[hsl(262_83%_58%_/_0.1)] hover:border-[hsl(262_83%_58%)] hover:shadow-lg hover:shadow-[hsl(262_83%_58%_/_0.2)]",
        neon: "bg-[hsl(190_95%_55%)] text-[hsl(240_15%_3%)] font-semibold shadow-lg hover:shadow-xl hover:shadow-[hsl(190_95%_55%_/_0.4)] hover:scale-105",
        glass: "bg-[hsl(240_12%_6%_/_0.4)] backdrop-blur-md border border-[hsl(240_10%_18%_/_0.5)] text-foreground hover:bg-[hsl(240_12%_6%_/_0.6)] hover:border-[hsl(262_83%_58%_/_0.5)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
