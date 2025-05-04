'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BurgerMenu } from "@/components/landing/BurgerMenu";
import styles from "./headerLanding.module.css";

export function HeaderLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#product", text: "Продукт" },
    { href: "#opportunities", text: "Возможности" },
    { href: "#aboutUs", text: "О нас" },
    { href: "#roadmap", text: "Дорожная карта" },
    { href: "#contacts", text: "Контакты" }
  ];

  return (
    <header className={styles.header}>
      <Image src="/landing/sampleLogo.svg" width={144} height={35} alt="Logo" className={styles.logo}/>
      
      <nav className={styles.navLinks}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.href} className={styles.navLink}>
            {item.text}
          </Link>
        ))}
      </nav>
      
      <div className={styles.authContainer}>
        <Link href="/auth/signup" className={styles.signupLink}>
          Регистрация
        </Link>
        <Link href="/auth/login" className={styles.loginButton}>
          Войти
        </Link>
      </div>

      <button type="button" className={styles.mobileMenuButton} onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu} menuItems={menuItems} />
    </header>
  );
}