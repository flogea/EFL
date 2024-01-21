import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './SignUpPage.module.scss';
import { FormLayout } from '../../components/atoms/FormLayout/FormLayout';
import { FormValues } from '../../model/types/types';
import { emailValidator, passwordValidator } from '../../model/validation/validation';
import { Input } from '../../components/atoms/Input/Input';
import { Text } from '../../components/atoms/Text/Text';

function SignUp() {
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
    // defaultValues: {},
  });

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
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSubmitSignUp();
  };

  return (
    <div className={styles.signup}>
      <FormLayout>
        <Text tag="h1">Регистрация</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="label" id="name" name="name" label="Имя" />
          <Input type="label" id="surname" name="surname" label="Фамилия" />
          <Input
            type="email"
            id="email"
            // name="email"
            label="Почта"
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
            label="Пароль"
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
            label="Повторите пароль"
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
        </form>
        <button type="submit" className={styles.submitBtn}>
          Зарегестрироваться
        </button>
      </FormLayout>
    </div>
  );
}

export default SignUp;
