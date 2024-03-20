import Logo from '../header/Logoimg.png'
import styles from './Footer.module.css';

function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_column}>
                    <img src={Logo} alt="logo" />
                    <div className='bg-[#D9D9D9] w-[3px] h-[43px]' />
                        <a className='uppercase hover:text-red-500' href="/">Главная</a>
                        <a className='uppercase hover:text-red-500' href="/">Каталог</a>
                    <div className='bg-[#D9D9D9] w-[3px] h-[43px]' />
                    <a className='uppercase hover:text-red-500' href="/">Nнформация</a>
                </div>
                <div className={styles.footer_right}>
                    <p>г. KАЗАНЬ, ул. бали галеева 3а </p>
                    <p>+7 (927) 482-09-82</p>
                    <p>Kuzmakolom@gMAIL.RU</p>
                </div>
            </div>
        </div>
    )
}

export default Footer