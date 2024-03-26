import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'
import { Text } from '../../atoms/Text/Text';

const _ISPREPOD = true;

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to='/'><Text tag='h1' weight='bold' className={styles.logo}>EFL</Text></Link>
      <div className={styles.links}>
        {_ISPREPOD ? <Link to='/lab' ><Text tag='span' className={styles.navlink}>Лабоньки</Text></Link> : <Link to='' ></Link>}
        {_ISPREPOD ? <Link to='/test' ><Text tag='span' className={styles.navlink}>Тесты</Text></Link> : <Link to='' ></Link>}
        {_ISPREPOD ? <Link to='/constructor' ><Text tag='span' className={styles.navlink}>Конструктор</Text></Link> : <Link to='' ></Link>}
        {_ISPREPOD ? <Link to='/stat' ><Text tag='span' className={styles.navlink}>Статистика</Text></Link> : <Link to='' ></Link>}
      </div>
    </div>
  )
}