export type TInpLabel = {
  id: string;
  name: 'name' | 'surname' | 'email' | 'password' | 'password_repeat';
  type: string;
  text: string;
};

export type FormValues = {
  name: string;
  surname: string;
  email: string;
  password: string;
  password_repeat: string;
};
