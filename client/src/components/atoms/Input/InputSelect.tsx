import React from 'react'
import styles from './InputSelect.module.scss'

type optionsData = {
  id: string;
  value: string;
}

type Select = {
  options: optionsData[]
}

export const InputSelect = ({ options }: Select) => {
  return (
    <select name="" id="" className={styles.select}>
      {options.map((option, index) => (
        <option value={option.id} key={option.id}>{option.value}</option>
      ))}
    </select>
  )
}
