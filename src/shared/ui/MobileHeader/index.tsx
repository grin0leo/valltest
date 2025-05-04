'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { BurgerMenu } from '../BurgerMenu'
import { TestPopupWrapper } from '../TestPopupWrapper'
import css from './mobileHeader.module.css'

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '/main', text: 'Главная' },
    { href: '/main/workshop', text: 'Мастерская' }
  ]

  return (
    <>
      <header className={css.mobileHeader}>
        <div className={css.headerContent}>
          <Link href={'/main'} className={css.logoLink}>
            <Image src={'/Layout/Vt.svg'} width={39} height={24} alt="Логотип VallTest" />
          </Link>
          
          <div className={css.controls}>
            <TestPopupWrapper />
            
            <button 
              className={`${css.mobileMenuButton} ${isMenuOpen ? css.open : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Меню"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <BurgerMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        menuItems={menuItems} 
      />
    </>
  )
}