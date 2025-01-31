'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MingcuteDownLine } from '@/icons/MingcuteDownLine';
import styles from './style.module.css';

export type SelectOption = {
  label: React.ReactNode;
  value: string | number;
};

interface Props {
  label: React.ReactNode;
  options: SelectOption[];
  onChange?: (value: SelectOption) => void;
  value?: SelectOption | undefined;
  placeholder?: string;
}

export default function SelectInput({
  label,
  options,
  onChange,
  value,
  placeholder,
}: Props) {
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null,
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: SelectOption) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    onChange?.(option);
  };

  useEffect(() => {
    if (value) setSelectedOption(value);
    else setSelectedOption(null);
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={styles.container}
      onClick={() => setIsDropdownOpen(prev => !prev)}
    >
      <span className={styles.label}>{label}</span>
      <div className={styles['input-wrapper']}>
        <input
          readOnly
          autoComplete="off"
          value={selectedOption?.label?.toString() || ''}
          placeholder={placeholder}
          className={styles.input}
        />
        <MingcuteDownLine />
      </div>

      {isDropdownOpen && (
        <div className={styles.options}>
          {options.map(item => (
            <div
              key={item.value}
              className={`${styles.option} ${
                selectedOption?.value === item.value ? styles.selected : ''
              }`}
              onClick={() => handleOptionClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
