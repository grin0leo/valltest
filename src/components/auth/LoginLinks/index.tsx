"use client";
import styles from './loginLinks.module.css';
import Image from 'next/image';

export default function AuthButtons() {
  const handleGoogleAuth = () => {
    const clientId = 'ВАШ_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/google/callback');
    const scope = encodeURIComponent('profile email');
    const responseType = 'code';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl;
  };

  const handleVKAuth = () => {
    const clientId = 'ВАШ_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/vk/callback');
    const scope = 'email';
    const responseType = 'code';

    const authUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl;
  };

  const handleYandexAuth = () => {
    const clientId = 'ВАШ_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/yandex/callback');
    const responseType = 'code';

    const authUrl = `https://oauth.yandex.ru/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
    window.location.href = authUrl;
  };

  return (
    <div className={styles.container}>
      <div className={styles.authButton} onClick={handleGoogleAuth}>
        <Image src="/auth/google.svg" alt="Google" width={40} height={40} className={styles.icon}/>
      </div>

      <div className={styles.authButton} onClick={handleYandexAuth}>
        <Image src="/auth/yandex.svg" alt="Yandex" width={40} height={40} className={styles.icon}/>
      </div>

      <div className={styles.authButton} onClick={handleVKAuth}>
        <Image src="/auth/vk.svg" alt="VK" width={44} height={44} className={styles.vkIcon}/>
      </div>
    </div>
  );
}