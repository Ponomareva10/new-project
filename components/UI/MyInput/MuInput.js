import Image from 'next/image';
import s from './style.module.scss';
import location from '../../../public/locaton.svg';

export default function MyInput () {
    return (
        <label className={s.label}> 
            <Image className={s.label__locationIcon} src={location} alt='location-icon' />
            <input className={s.label__input}  placeholder='Search for the location you want!' type='text' />
            <button className={s.label__btn}>
                Search
                <span className={s.btn__icon}></span>
            </button>
        </label>
    )
}