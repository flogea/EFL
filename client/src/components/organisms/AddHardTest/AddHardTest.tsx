import { useForm } from 'react-hook-form';
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import styles from './AddHardTest.module.scss'
import { FormValues } from '../../../model/types/types';

export const AddHardTest = () => {

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

  return (
    <div>
      <form action="">
        <input type="file" accept='.json' />
        <Button type='submit'>Создать тест</Button>
      </form>
    </div>
  )
}
