import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva("!text-label-sm cursor-pointer transition-all", {
  variants: {
    variant: {
      default:
        "bg-primary-base text-white active:opacity-80 focus:opacity-80 hover:opacity-80",
      text: "active:opacity-80 focus:opacity-80 hover:opacity-80",
    },
    size: {
      sm: "rounded px-1 py-0.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  ...rest
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
