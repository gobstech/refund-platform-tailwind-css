import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean,
  variant?: "base" | "icon" | "iconSmall"
}

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-8 w-8",
  }
}

export function Button({ 
  children, 
  isLoading, 
  className,
  type = "button", 
  variant = "base",
  ...rest 
}: Props) {
  return (
    <button 
      type={type} 
      disabled={isLoading} 
      className={classMerge([
        "flex items-center justify-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear cursor-pointer disabled:opacity-50 disabled:cursor-progress h-8",
        variants.button[variant],
        isLoading && `disabled:cursor-progress`,
        className
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}