import styles from './Header.module.css'

import LogoDev from '../assets/logo.svg'

export function Header(){
    return(
        <div>
            <header className={styles.header}>
                <img src={LogoDev} alt="logotipo" />
            <strong>CultureDev Feed</strong>
                
            </header>
        </div>
    )
}