'use client';

import css from './container.module.css';

interface ContainerProps {
  title: string;
  children: React.ReactNode;
}

export default function Container({ title, children }: ContainerProps) {
  return (
    <div className={css.infoContainer}>
      <h2 className={css.infoTitle}>{title}</h2>
      {children}
    </div>
  );
}