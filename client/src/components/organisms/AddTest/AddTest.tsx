import { Button } from '../../atoms/Button/Button'
import { LeftSideMenu } from '../../molecules/LeftSideMenu/LeftSideMenu'
import styles from './AddTest.module.scss'

export const AddTest = () => {
  return (
    <div className={styles.testpage}>
      <LeftSideMenu />
      <div className={styles.addtest}>
        <Button href='/test/addtest/simpletest'>Добавить простой тест (вручную)</Button>
        <Button href='/test/addtest/filetest'>Добавить сложный тест</Button>
      </div>
    </div>
  )
}
