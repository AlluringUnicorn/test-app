import css from './Card.module.css';


export const Card = ({user, followers, tweets}) => {
    return <div className={css.card} >
        <img src="/images/logo.png" alt="logo" className={css.logo}/>
        <img src="/images/main-image.png" alt="main-img" className={css.main_img} />
        <img src="/images/boy.png" alt="avatar" className={css.avatar} />
        <img src="/images/rectangle.png" alt="line" className={css.line} />
        <p className={css.tweets}>{user}</p>
        <p className={css.tweets}>{tweets} Tweets</p>
        <p className={css.followers}> {followers} Followers</p>
        <button className={css.btn}>Follow</button>
    </div>
}