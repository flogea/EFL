import { emailregex, passwordRegex, phoneRegex } from './regex';

export const passwordValidator = {
  required: 'Поле обязательно к заполнению',
  minLength: {
    value: 6,
    message: 'Пароль должен содержать от 6 до 20 символов',
  },
  maxLength: {
    value: 20,
    message: 'Пароль должен содержать от 6 до 20 символов',
  },
  pattern: {
    value: passwordRegex,
    message:
      'Пароль должен содержать заглавные и строчные латинские буквы, цифры и один из спецсимволов',
  },
};

export const phoneValidator = {
  required: 'Поле обязательно к заполнению',
  pattern: {
    value: phoneRegex,
    message: 'Некорректно введен номер телефона',
  },
};

export const emailValidator = {
  required: 'Поле обязательно к заполнению',
  pattern: {
    value: emailregex,
    message: 'Некорректно введена почта',
  },
};

export const baseValidator = {
  required: 'Поле обязательно к заполнению',
};
