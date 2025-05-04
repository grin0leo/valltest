'use client';

import Background from '@/components/auth/Background';
//import AuthButtons from '@/components/auth/LoginLinks';
import { useAuth } from '@/components/auth/use_auth';
import Image from 'next/image';
import styles from './login.module.css';
import buttonStyles from '@/components/auth/UniversalBotton/universalBotton.module.css'; './';


export default function LoginPage() {
  const { handleLoginFormSubmit, isLoginOperationPending } = useAuth();

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.loginBox}>
        <form onSubmit={handleLoginFormSubmit} className={styles.form}>
          <h1 className={styles.title}>Вход</h1>
          <div className={styles.inputGroup}>
            <input type="email" name="login_form_email" className={styles.input} placeholder="Почта" required />
            <input type="password" name="login_form_password" className={styles.input} placeholder="Пароль" required />
          </div>
          <div className={styles.forgotLink}>
            <a href="/main/auth/signup" className={styles.forgotPassword}>Забыли пароль?</a>
          </div>
{/*        <div className={styles.divider}>
            <Image src="/auth/line.svg" alt="Line" width={464} height={2} className={styles.dividerImage} />
          </div>
      <div className={styles.authButtons}>
            <AuthButtons />
          </div> */}
          <div className={styles.submitButton}>
            <button type="submit" className={buttonStyles.button}>{isLoginOperationPending ? "Входим" : "Войти"}</button>
          </div>
          <div className={styles.signUp}>
            <p>Ещё нет аккаунта? <a href="/main/auth/signup" className={styles.signUpLink}>Зарегистрироваться</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
