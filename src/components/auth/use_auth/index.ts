'use client';

import { loginWithEmail, registerWithEmail } from '@/lib/auth-client';
import { useMutation } from '@tanstack/react-query';


export function useAuth() {

  const {
    mutate: login, 
    isPending: isLoginOperationPending, 
    isSuccess: wasLoginSuccesful } 
    = useMutation({
    mutationFn: ({email, password}: {email: string, password: string}) => {
      return loginWithEmail({email, password})

    }
  })

  const {
    mutate: register,
    isPending: isRegisterPending,
    isSuccess: wasRegisterSuccessful,
  } = useMutation({
    mutationFn: ({ name,email, password }: { name:string, email: string; password: string }) => {
      return registerWithEmail({name, email, password})
    }
  });



  const handleLoginFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData.entries());
    console.log(data)
    login({ 
      email: data.login_form_email as 'string', 
      password: data.login_form_password as 'string' 
    })
    
    // window.location.href = '/catalog'; // или куда тебе надо
  };

  const handelRegisterFormSubmit = async(e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    register({
      name: data.register_form_name as string,
      email: data.register_form_email as string,
      password: data.register_form_password as string
    });
  };

  return { 
    login, 
    wasLoginSuccesful, 
    isLoginOperationPending, 
    handleLoginFormSubmit,
    register,
    wasRegisterSuccessful,
    isRegisterPending,
    handelRegisterFormSubmit
  };
}

