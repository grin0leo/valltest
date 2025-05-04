'use client';
import Background from '@/components/auth/Background';
import { UniversalButton } from '@/components/auth/UniversalBotton';
import AuthButtons from '@/components/auth/LoginLinks';
import Image from 'next/image';
import { useAuth } from '@/components/auth/use_auth';
import styles from './signup.module.css';
import buttonStyles from '@/components/auth/UniversalBotton/universalBotton.module.css'; './';

export default function SignUpPage() {
  const {handelRegisterFormSubmit ,isRegisterPending} = useAuth();

  return (
    <div className={styles.container}>
      <Background />
      <div className={styles.signUpBox}>
        <form onSubmit={handelRegisterFormSubmit} className={styles.form}>
          <h1 className={styles.title}>Регистрация</h1>
          <div className={styles.inputGroup}>
            <input type = "text" name = "register_form_name" className={styles.input} placeholder="Имя" required />
            <input type="email" name="register_form_email" className={styles.input} placeholder="Почта" required />
            <input type="password" name="register_form_password" className={styles.input} placeholder="Пароль" required />
          </div>
          <div className={styles.divider}>
            <Image src="/auth/line.svg" alt="Line" width={464} height={2} className={styles.dividerImage} />
          </div>
          <div className={styles.authButtons}>
            <AuthButtons />
          </div>
          <div className={styles.submitButton}>
            <button type="submit" className={buttonStyles.button}>Зарегистрироваться</button>
          </div>
          <div className={styles.login}>
            <p>Уже есть аккаунт? <a href="/main/auth/login" className={styles.loginLink}>Войти</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
