'use client';

import { useAuth } from '@/components/auth/use_auth.ts';
import Background from '@/components/auth/Background';
import { UniversalButton } from '@/components/auth/UniversalBotton';
import AuthButtons from '@/components/auth/LoginLinks';
import Image from 'next/image';
import styles from './signup.module.css';

export default function LoginPage() {
  const { login, password, setLogin, setPassword, handleSubmit } = useAuth();

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.signUpBox}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.title}>Регистрация</h1>
          
          <div className={styles.inputGroup}>
            <input type="text" id="login" value={login} onChange={(e) => setLogin(e.target.value)} className={styles.input} placeholder="Почта"  required/>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} placeholder="Пароль" required/>
          </div>

          <div className={styles.divider}>
            <Image src="/auth/line.svg" alt="Line" width={464} height={2} className={styles.dividerImage}/>
          </div>
          
          <div className={styles.authButtons}>
            <AuthButtons />
          </div>
          
          <div className={styles.submitButton}>
            <UniversalButton text="Зарегистрироваться" href="/catalog" />
          </div>

          <div className={styles.login}>
            <p>Уже есть аккаунт? <a href="/main/auth/login" className={styles.loginLink}>Войти</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}