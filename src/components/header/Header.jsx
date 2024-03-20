import styles from './Header.module.css'
import Logo from './Logoimg.png'
import {Link} from 'react-router-dom'



function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_spaceBetween}>
                <div className={styles.header_nav}>

                    <img src={Logo}></img>
                    <div className={styles.column}></div>
                    <Link to='/' className={styles.nav_link}>ГЛАВНАЯ</Link>
                    <Link to='/catalog' className={styles.nav_link}>КАТАЛОГ</Link>
                    <div className={styles.column}></div>
                    <Link to='/users' className={styles.nav_link}>ИНФОРМАЦИЯ</Link>
                </div>
                <div className={styles.btns}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.7071 14.2929C15.3166 13.9024 14.6834 13.9024 14.2929 14.2929C13.9024 14.6834 13.9024 15.3166 14.2929 15.7071L15.7071 14.2929ZM20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM10 16C6.68629 16 4 13.3137 4 10H2C2 14.4183 5.58172 18 10 18V16ZM4 10C4 6.68629 6.68629 4 10 4V2C5.58172 2 2 5.58172 2 10H4ZM10 4C13.3137 4 16 6.68629 16 10H18C18 5.58172 14.4183 2 10 2V4ZM16 10C16 13.3137 13.3137 16 10 16V18C14.4183 18 18 14.4183 18 10H16ZM14.2929 15.7071L20.2929 21.7071L21.7071 20.2929L15.7071 14.2929L14.2929 15.7071Z"
                            fill="white"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 8C16 5.79086 14.2091 4 12 4C9.79082 4 7.99995 5.79086 7.99995 8M19.4453 10.674L20.3786 16.274C20.5923 17.5559 20.6993 18.1968 20.5138 18.6964C20.351 19.1347 20.0399 19.5022 19.6343 19.7349C19.172 20 18.522 20 17.2224 20H6.7773C5.47768 20 4.8284 20 4.36617 19.7349C3.96053 19.5022 3.64877 19.1347 3.48595 18.6964C3.30041 18.1968 3.40739 17.5559 3.62105 16.274L4.55438 10.674C4.71271 9.72398 4.79213 9.24902 5.02916 8.89258C5.2381 8.57838 5.53166 8.32965 5.87593 8.17521C6.26649 8 6.74782 8 7.71089 8H16.2893C17.2524 8 17.7336 8 18.1242 8.17521C18.4685 8.32965 18.7617 8.57838 18.9707 8.89258C19.2077 9.24902 19.2869 9.72399 19.4453 10.674Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 4.19431C8 -0.500122 1 -0.00012207 1 5.99991C1 11.9999 10 16.9999 10 16.9999C10 16.9999 19 11.9999 19 5.99991C19 -0.00012207 12 -0.500122 10 4.19431Z"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default Header