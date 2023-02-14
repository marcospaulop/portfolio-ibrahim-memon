import s from './container3.module.scss'

import Experience1 from '../../public/Experience1.png'
import Experience2 from '../../public/Experience2.png'
import Experience3 from '../../public/Experience3.png'
import Experience4 from '../../public/Experience4.png'

export function Experience() {
  return (
    <div className={s.workExperience}>
      <h1>Work Experience</h1>
      <ul>
        <li>
          <div className={s.card}>
            <img src={Experience1} alt="Ícone" />
            <div className={s.text}>
              <h2>CIB on the Mobile</h2>
              <h5>
                Take your client onboard seamlessly by our amazing tool of
                digital onboard process.
              </h5>
              <a href="/posts/cib">Learn More</a>
            </div>
          </div>
        </li>
        <li>
          <div className={s.card}>
            <img src={Experience2} alt="Ícone" />
            <div className={s.text}>
              <h2>CIB on the Mobile</h2>
              <h5>
                Take your client onboard seamlessly by our amazing tool of
                digital onboard process.
              </h5>
              <a href="/posts/cib">Learn More</a>
            </div>
          </div>
        </li>
        <li>
          <div className={s.card}>
            <img src={Experience3} alt="Ícone" />
            <div className={s.text}>
              <h2>CIB on the Mobile</h2>
              <h5>
                Take your client onboard seamlessly by our amazing tool of
                digital onboard process.
              </h5>
              <a href="/posts/cib">Learn More</a>
            </div>
          </div>
        </li>
        <li>
          <div className={s.card}>
            <img src={Experience4} alt="Ícone" />
            <div className={s.text}>
              <h2>CIB on the Mobile</h2>
              <h5>
                Take your client onboard seamlessly by our amazing tool of
                digital onboard process.
              </h5>
              <a href="/posts/cib">Learn More</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
