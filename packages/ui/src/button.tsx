import { ReactNode } from "react";

interface ButtonProps {
  size: "sm" | "md" | "lg";
  variant?: "default" | "outline";
  children: ReactNode;
  className?: string;
}

export const Button = ({ size, variant = "outline", children, className = "" }: ButtonProps) => {
  const classes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    default: "bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 ease-in-out",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors duration-300 ease-in-out"
  };

  const buttonClasses = `rounded-2xl font-medium ${classes[size]} ${classes[variant]} ${className}`;

  // console.log(buttonClasses);
  // console.log(classes);

  return <button className={buttonClasses}>{children}</button>;
};
