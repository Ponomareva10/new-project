import Link from 'next/link';
import {useRouter} from 'next/router';
import s from './style.module.scss'; 

export default function Header () {
    
    const router = useRouter();
    const { pathname } = router;

    return(
        <header className={s.header}>
            <Link className={s.header__nav} href='/'>
                <span className={pathname === '/' &&
            s.nav__active} >Home</span>
            </Link>
            <Link className={s.header__nav} href='/'>Property</Link>
            <Link className={s.header__nav} href='/'>Property</Link>
            <button className={s.header__btn}>Sign Up!</button>
        </header>
    )
}