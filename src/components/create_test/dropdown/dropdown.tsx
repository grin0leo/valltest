'use client';

import css from './dropdown.module.css';

interface DropdownProps {
  id: string;
  label: React.ReactNode;
  placeholder: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Dropdown({
  id,
  label,
  placeholder,
  options,
  value,
  onSelect,
  isOpen,
  onToggle,
}: DropdownProps) {
  return (
    <div className={css.dropdownGroup}>
      <label className={css.dropdownLabel}>{label}</label>
      <div className={css.customDropdown}>
        <div
          className={`${css.dropdownHeader} ${isOpen ? css.open : ''}`}
          onClick={onToggle}
        >
          <span className={`${css.dropdownValue} ${!value ? css.placeholder : ''}`}>
            {value || placeholder}
          </span>
          <img
            src={isOpen ? '/create_test_ai/open.svg' : '/create_test_ai/сlose.svg'}
            alt="dropdown icon"
            className={css.dropdownIcon}
          />
        </div>

        {isOpen && (
          <div className={css.dropdownList}>
            {options.map((option) => (
              <div
                key={option}
                className={css.dropdownItem}
                onClick={() => onSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}