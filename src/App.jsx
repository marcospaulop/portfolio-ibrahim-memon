import { Topbar } from '../components/topbar'
import { Presentation } from '../components/container1'
import { About } from '../components/container2'
import { Experience } from '../components/container3'
import { Skills } from '../components/container4'
import { Portfolio } from '../components/container5'
import { Contact } from '../components/container6'

import styles from './styles.module.scss'

export function App() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <Presentation />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}
