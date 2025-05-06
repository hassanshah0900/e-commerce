import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariantClasses = "px-4 py-2 rounded-lg text-white focus:outline-4";
const iconVariantClasses = "bg-transparent p-2 text-body-dark outline-none";
const outlineVariantClasses =
  "bg-transparent rounded-lg px-4 py-2 outline-none";

function getVariantClasses(variant: string, color: string) {
  if (variant === "button") {
    if (color === "primary")
      return `${buttonVariantClasses} bg-primary hover:bg-primary-dark focus:bg-primary-dark outline-primary/40 `;
    if (color === "green")
      return `${buttonVariantClasses} bg-green hover:bg-green/90 focus:bg-green/90 outline-green/40`;
  }

  if (variant === "icon") {
    if (color === "primary")
      return `${iconVariantClasses} hover:text-primary focus-visible:text-primary `;
    if (color === "green")
      return `${iconVariantClasses} hover:text-green focus-visible:text-green `;
  }

  if (variant === "outline") {
    if (color === "primary")
      return `${outlineVariantClasses} text-primary hover:text-white hover:bg-primary border border-primary `;
    if (color === "green")
      return `${outlineVariantClasses} text-green hover:text-white hover:bg-green focus-visible:text-white focus-visible:bg-green  border border-green`;
    if (color === "red")
      return `${outlineVariantClasses} text-red hover:text-white hover:bg-red focus-visible:text-white focus-visible:bg-red  border border-red`;
  }
}

const displays = {
  inline: "w-max",
  block: "w-full",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "green" | "red";
  variant?: "button" | "icon" | "outline";
  display?: "inline" | "block";
};

export default function Button({
  color = "primary",
  variant = "button",
  display = "inline",
  className,
  children,
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      {...props}
      className={twMerge(
        clsx(
          "cursor-pointer transition-colors duration-200",
          getVariantClasses(variant, color),
          displays[display]
        ),
        className
      )}
    >
      {children}
    </button>
  );
}
