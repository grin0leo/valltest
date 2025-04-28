'use client';

import css from './input.module.css';

interface InputProps {
    label: React.ReactNode;
    placeholder: string;
    name?: string; 
    value?: string; 
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  }

export default function Input({ 
  label, 
  placeholder, 
  name, 
  value, 
  onChange 
}: InputProps) {
  return (
    <div className={css.testNameContainer}>
      <span className={css.testNameLabel}>{label}</span>
      <input
        className={css.testNameInput}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}