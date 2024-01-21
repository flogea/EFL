import React, {
  DetailedHTMLProps,
  FormEvent,
  HTMLAttributes,
  forwardRef,
  useRef,
  useState,
} from 'react';

import styles from './Input.module.scss';
import { useCombinedRef } from '../../../hooks/useCombinedRef';

// type TInput = {
//   type: 'text' | 'number' | 'email' | 'password' | 'tel';
// };

export interface IInput
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  readonly value?: string;
  readonly label?: string;
  readonly isError?: boolean;
  readonly className?: string;
  readonly type: string;
  readonly name?: string;
  readonly maxLength?: number;
  readonly resetField?: () => void;
  readonly resetMask?: () => void;
  readonly handleSearch?: () => void;
  readonly handleCalendar?: () => void;
  readonly white?: boolean;
  readonly required?: boolean;
  readonly id?: string;
  readonly defaultValue?: string;
  readonly wrappDataTestid?: string;
  readonly size?: 'm' | 's' | 'l';
  readonly textAlign?: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      label,
      isError = false,
      placeholder,
      onBlur,
      onChange,
      onFocus,
      onInput,
      resetField,
      resetMask,
      handleSearch,
      handleCalendar,
      value,
      type,
      maxLength,
      className,
      white,
      required,
      id,
      defaultValue,
      wrappDataTestid,
      size = 'm',
      textAlign,
      ...rest
    },
    ref,
  ): JSX.Element => {
    const [valueInput, setValueInput] = useState<string | undefined>(value || defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputRefCombine = useCombinedRef(ref, inputRef);
    console.log(ref);

    const handleChangeValue: (e: FormEvent<HTMLInputElement>) => void = (e) => {
      setValueInput(e.currentTarget.value);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <div className={styles.inputBlock}>
        <label
          // className={labelClasses}
          htmlFor={id}
          // onClick={handleFocusLabel}
        >
          {label}
        </label>

        <input
          className={styles.input}
          defaultValue={defaultValue}
          id={id}
          maxLength={maxLength}
          // onBlur={handleFocusDisable}
          onChange={handleChangeValue}
          // onFocus={handleFocus}
          // onInput={handleOnInputValue}
          placeholder={placeholder}
          ref={inputRefCombine}
          required={required}
          type={type}
          value={value}
          {...rest}
        />
      </div>
    );
  },
);
