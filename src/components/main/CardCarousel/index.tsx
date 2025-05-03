'use client'

import Image from 'next/image';
import styles from './cardCarousel.module.css';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

export function CardCarousel({ title, subtitle, image }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title}
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
    </div>
  );
}