import clsx from "clsx";

import "./Button.scss";

import type { ButtonProps } from "./Button.types";

function Button({
  children,
  variant = "primary",
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx("button", `button--${variant}`, className)}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;