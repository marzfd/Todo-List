import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/signIn">LOGIN</Link>
        </li>
        <li>
          <Link href="/signUp">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
