import s from './container5.module.scss'

import screenshot from '../../public/screenshot.png'
import screenshot1 from '../../public/screenshot1.png'
import clicks from '../../public/click.png'

export function Portfolio() {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.textContainer}>
          <h4>Featured Project</h4>
          <h2>Example Project</h2>
          <div className={s.text}>
            A web app for visualizing personalized Spotify data. View your
            <br />
            top artists, top tracks, recently played tracks, and detailed audio
            <br />
            information about each track. Create and save new playlists of
            <br />
            recommended tracks based on your existing playlists and more.
          </div>
          <img src={clicks} alt="Double click icons" className={s.clicks} />
        </div>
        <div className={s.imgContainer}>
          <img src={screenshot1} alt="Image of a project wireframe" />
        </div>
        <div className={s.backgroundRadial} />
      </div>
      <div className={s.right}>
        <div className={s.textContainer}>
          <h4>Featured Project</h4>
          <h2>Example Project</h2>
          <div className={s.text}>
            A web app for visualizing personalized Spotify data. View your
            <br />
            top artists, top tracks, recently played tracks, and detailed audio
            <br />
            information about each track. Create and save new playlists of
            <br />
            recommended tracks based on your existing playlists and more.
          </div>
          <img src={clicks} alt="Double click icons" className={s.clicks} />
        </div>
        <div className={s.imgContainer}>
          <img src={screenshot} alt="Image of a project wireframe" />
        </div>
        <div className={s.backgroundRadial} />
      </div>
    </div>
  )
}
