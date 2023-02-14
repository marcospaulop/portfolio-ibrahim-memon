import { Logo } from '../../public/Logo'
import styles from './topbar.module.scss'
import {} from 'react'

export function Topbar() {
  const Scroll = (to) => {
    var topbarHeight = document.querySelector('#topbar')?.offsetHeight
    var targetPosition = document.querySelector(to)?.offsetTop

    window.scroll({
      top: targetPosition - topbarHeight - 15,
      behavior: 'smooth',
    })
  }
  return (
    <div className={styles.topbar} id="topbar">
      <div id={styles.container}>
        <a href="/">
          <Logo />
        </a>
        <ul>
          <li>
            <a
              onClick={() => {
                Scroll('#home')
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Scroll('#about')
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                Scroll('#lab')
              }}
            >
              Lab
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
