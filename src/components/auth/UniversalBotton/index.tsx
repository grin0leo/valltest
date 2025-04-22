import Link from 'next/link';
import styles from './universalBotton.module.css';

interface UniversalButtonProps {
  text: string;
  href: string;
}

export function UniversalButton({ text, href }: UniversalButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {text}
    </Link>
  );
}