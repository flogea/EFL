import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './SignUpPage.module.scss';
import { FormLayout } from '../../components/atoms/FormLayout/FormLayout';
import { FormValues } from '../../model/types/types';
import { baseValidator, emailValidator, passwordValidator } from '../../model/validation/validation';
import { Input } from '../../components/atoms/Input/Input';
import { Text } from '../../components/atoms/Text/Text';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/atoms/Button/Button';

export const SignUp = () => {
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
  const navigate = useNavigate()

  const handleSubmitSignUp = async () => {
    // try {
    // 	await sendNewPassword({
    // 		password,
    // 		newPassword,
    // 	}).unwrap();
    // 	dispatch(setIsFirstEnter());
    // 	navigate('success');
    // } catch (err) {
    // 	navigate('error');
    // 	// setError('old_password', { type: '400', message: `${err}` });
    // }
    navigate('/')
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSubmitSignUp();
  };

  return (
    <div className={styles.signup}>
      <FormLayout>
        <Text tag="h1">Регистрация</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="label" id="name" placeholder="Имя" {...register('name', baseValidator)} />
          {!!errors.name && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.name?.message}
            </Text>
          )}
          <Input type="label" id="surname" placeholder="Фамилия" {...register('surname', baseValidator)} />
          {!!errors.surname && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.surname?.message}
            </Text>
          )}
          <Input type="label" id="group" placeholder="Группа" {...register('group', baseValidator)} />
          {!!errors.group && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.group?.message}
            </Text>
          )}
          <Input
            type="email"
            id="email"
            placeholder="Почта"
            {...register('email', emailValidator)}
          />
          {!!errors.email && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.email?.message}
            </Text>
          )}
          <Input
            type="password"
            id="password"
            placeholder="Пароль"
            {...register('password', passwordValidator)}
          />
          {!!errors.password && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.password?.message}
            </Text>
          )}
          <Input
            type="password"
            id="password_repeat"
            placeholder="Повторите пароль"
            {...register('password_repeat', {
              required: 'Поле обязательно к заполнению',
              validate: (value) => {
                if (watch('password') !== value) {
                  return 'Пароли не совпадают';
                }
              },
            })}
          />
          {!!errors.password_repeat && (
            <Text tag="span" size="xs" theme="alert">
              {errors?.password_repeat?.message}
            </Text>
          )}
          <Button disabled={!isValid} type="submit" className={styles.submitBtn}>
            Зарегестрироваться
          </Button>
        </form>
      </FormLayout>
    </div>
  );
}
