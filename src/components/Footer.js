import {memo} from 'react';
import styles from './Footer.module.css'

function Footer() {
    const creatorUrl = "https://d12n.me/";
    const reactImage = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
    const myGithubUrl = "https://github.com/movwf";
    return (
        <div className="info">
            <p className={styles.names}>Simple trick ; Just use it!</p>
            <p className={styles.names}>cloned by <a href={creatorUrl}>Dmitry Sharabin</a></p>
            <p><img alt={"react"} className={styles.reacted} src={reactImage}></img>
            React-ed by
            <a className={styles.names} href={myGithubUrl}>MOVWF</a>
            </p>
        </div>
    )
}

export default memo(Footer)
