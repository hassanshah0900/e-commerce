import clsx from "clsx";
import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLProps<HTMLInputElement> & {
  label?: string;
};

export default function Input({ label, type, className, ...props }: Props) {
  return (
    <div
      className={twMerge(
        clsx(
          "text-body-dark",
          type === "radio" && "flex justify-start items-center gap-2"
        ),
        className
      )}
    >
      {label && (
        <label className="mb-1 inline-block" htmlFor={label}>
          {label}
        </label>
      )}
      <input
        {...props}
        id={label ?? props.id}
        type={type}
        className={clsx(
          "font-light inline-block text-sm placeholder:text-body text-body-dark border border-accent",
          type === "radio"
            ? "appearance-none w-4 h-4 border -order-1 checked:border-5 transition-all checked:border-primary rounded-full focus:outline-2 outline-primary/40 outline-offset-0"
            : "w-full px-4 py-2 rounded-sm  focus:border-primary outline-none"
        )}
      />
    </div>
  );
}
