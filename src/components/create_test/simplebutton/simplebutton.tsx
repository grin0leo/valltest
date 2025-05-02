'use client';

import css from './simplebutton.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean
}

export default function SimpleButton({ href, children, onClick, disabled }: ButtonProps) {
  return (
    <button className={css.buttonWrapper} disabled={disabled} onClick={onClick}>
      <p className={css.actionButton}>
        {children}
      </p>
      {/* <a href={href} className={css.actionButton}>
        {children}
      </a> */}
    </button>
  );
}