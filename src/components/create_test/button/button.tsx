'use client';

import { useState } from 'react';
import css from './button.module.css';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  tooltip: string;
}

export default function Button({ href, children, tooltip }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={css.buttonWrapper}>
      <a
        href={href}
        className={css.actionButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </a>
      {isHovered && (
        <div className={css.tooltip}>
          {tooltip}
        </div>
      )}
    </div>
  );
}