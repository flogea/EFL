import { SubmitHandler, useForm } from 'react-hook-form';
import { FormLayout } from '../../components/atoms/FormLayout/FormLayout';
import { Input } from '../../components/atoms/Input/Input';
import { Text } from '../../components/atoms/Text/Text';
import styles from './SignIn.module.scss'
import { FormValues } from '../../model/types/types';
import { baseValidator, emailValidator, passwordValidator } from '../../model/validation/validation';
import { Button } from '../../components/atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
    setFocus,
    watch,
  } = useForm<FormValues>({
    mode: 'all',
  });
  const navigate = useNavigate();

  const handleSubmitSignIn = () => {
    navigate('/')
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSubmitSignIn();
  };

  return (
    <div className={styles.signin}>
      <FormLayout>
        <Text tag='h1'>Авторизация</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder='Почта' type='email' {...register('email', emailValidator)} />
          {!!errors.email && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.email?.message}
            </Text>
          )}
          <Input placeholder='Пароль' type='password' {...register('password', baseValidator)} />
          {!!errors.password && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.password?.message}
            </Text>
          )}
          <Button width='max' disabled={!isValid} type="submit" className={styles.submitBtn}>
            Войти
          </Button>
        </form>
      </FormLayout>
    </div>
  )
}
