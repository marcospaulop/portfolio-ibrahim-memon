import { Topbar } from '../components/topbar/topbar'
import { Presentation } from '../components/container1/container1'
import { About } from '../components/container2/container2'
import { Experience } from '../components/container3/container2'
import { Skills } from '../components/container4/container4'
import { Portfolio } from '../components/container5/container5'
import { Contact } from '../components/container6/container6'

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
