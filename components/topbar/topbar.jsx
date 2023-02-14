import { Logo } from '../../public/Logo'
import styles from './topbar.module.scss'

export function Topbar() {
  return (
    <div className={styles.topbar}>
      <div id={styles.container}>
        <a href="/">
          <Logo />
        </a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#lab">Lab</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
