import Image from 'next/image';
import s from './style.module.scss';
import visit from '../../public/manager.png';

export default function CardVisit() {
    return(
        <div className={s.visit}>
            <Image src={visit} alt='manager-photo' />
            <div className={s.visit__info} >
                <div className={s.info__name} >Dianne Russell</div>
                <div className={s.info__manager} >Manager Director</div>
            </div>
            <button className={s.visit__phone}>Contact Now</button>
        </div>
    )
}