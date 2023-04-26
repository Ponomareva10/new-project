import Image from "next/image";
import logo from '../../public/logo.svg';
import s from './style.module.scss';
import MyInput from "../UI/MyInput/MuInput";

export default function Welcome () {
    return( 
        <div className={s.bgColor}>
            <Image className={s.logo} src={logo} alt='logo' />
            <h1 className={s.heading}>Good Living Better live <br/>
            <span className={s.heading__fragment}>your dreams</span>
            easily here</h1>
            <p className={s.leftText}>Everything you need about finding your place to live will be here, where it will be easier for you. Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
            <MyInput />
        </div>
    )
}