import clsx from "clsx";

import "./Button.scss";

import type { ButtonProps } from "./Button.types";

const Button = ({
  children,
  variant = "primary",
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx("button", `button--${variant}`, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;