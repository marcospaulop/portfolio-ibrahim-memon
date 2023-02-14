import s from './container4.module.scss'
import experience from '../../public/Experience.png'

export function Skills() {
  return (
    <div className={s.container} id="about">
      <div className={s.about}>
        <div>
          <h3>
            I'm currently looking to join a <strong>cross-functional</strong>{' '}
            team
          </h3>
          <h4>
            that values improving people's lives through accessible design
          </h4>
        </div>

        <img src={experience} alt="Experience technology icons" />
      </div>
    </div>
  )
}
