import { Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div className={styles.layout}><main><Outlet /></main></div>
  )
}
