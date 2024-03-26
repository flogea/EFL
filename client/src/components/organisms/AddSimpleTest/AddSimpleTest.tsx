import { Input } from '../../atoms/Input'
import { AddTestBlock } from '../../molecules/AddTestBlock'
import styles from './AddSimpleTest.module.scss'

export const AddSimpleTest = () => {
  return (
    <div className={styles.add_simple_test}>

      <Input className={styles.testname} type='text' placeholder='Название теста' />
      <AddTestBlock />
    </div>
  )
}