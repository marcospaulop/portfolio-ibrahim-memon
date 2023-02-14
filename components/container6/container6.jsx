import s from './container6.module.scss'

import instagram from '../../public/Instagram.png'
import dribbble from '../../public/Dribbble.png'
import gmail from '../../public/Gmail.png'

export function Contact() {
  return (
    <div className={s.container}>
      <h2>Contact</h2>
      <h4>
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect. <br /> <br />
        <a href="mailto:ibrhaimmemon930@gmail.com">ibrhaimmemon930@gmail.com</a>
      </h4>
      <ul>
        <li>
          <img src={instagram} alt="Instagram" />
        </li>
        <li>
          <img src={dribbble} alt="Dribbble" />
        </li>
        <li>
          <img src={gmail} alt="Gmail" />
        </li>
      </ul>
    </div>
  )
}
