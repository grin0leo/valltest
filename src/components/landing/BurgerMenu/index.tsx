'use client'

import Link from "next/link";
import { useEffect } from "react";
import styles from "./burgerMenu.module.css";
import clsx from "clsx";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: {
    href: string;
    text: string;
  }[];
}

export function BurgerMenu({ isOpen, onClose, menuItems }: BurgerMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}
      
      <div className={clsx(styles.burgerMenu, { [styles.active]: isOpen })}>
        <nav className={styles.navList}>
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} className={styles.navItem} onClick={onClose}>
              {item.text}
            </Link>
          ))}
        </nav>
        
        <div className={styles.authContainer}>
          <Link href="main/auth/signup" className={styles.signupLink} onClick={onClose}>
            Регистрация
          </Link>
          <Link href="main/auth/login" className={styles.loginButton} onClick={onClose}>
            Войти
          </Link>
        </div>
      </div>
    </>
  );
}