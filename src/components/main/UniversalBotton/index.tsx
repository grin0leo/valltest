import Link from "next/link";
import { ReactNode } from "react";
import css from "./universalButton.module.css";

interface UniversalButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}

export function UniversalButton({
  children,
  href,
  className = "",
  disabled = false,
}: UniversalButtonProps) {
  return (
    <Link
      href={href}
      className={`${css.button} ${className}`}
      aria-disabled={disabled}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {children}
    </Link>
  );
}