import {memo} from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div>
		    <h1 className={styles.baslik}>todo</h1>
		    <h2 className={styles.baslik2}>do, while you can</h2>
	    </div>
    )
}

export default memo(Header)
