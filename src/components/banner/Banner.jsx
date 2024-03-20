import Logo from './BigLogo.png';
import Background from './Banner.png';
import styles from './Banner.module.css';

function Banner(){
    return(
        <div className={styles.banner__content}>
            <img src={Background} alt="" />
            <div className={styles.centered}>
                <img className={styles.img} src={Logo} alt="" />
                <h2 className={styles.h2}>БРЕНД ОДЕЖДЫ</h2>
                <p className={styles.center}><button className={styles.button}>Перейти в категории</button></p>
            </div>
        </div>
    )
}

export default Banner