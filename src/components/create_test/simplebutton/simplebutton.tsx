'use client';

import css from './simplebutton.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function SimpleButton({ href, children }: ButtonProps) {
  return (
    <div className={css.buttonWrapper}>
      <a href={href} className={css.actionButton}>
        {children}
      </a>
    </div>
  );
}