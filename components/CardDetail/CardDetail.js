import Image from 'next/image';
import s from './style.module.scss';
import icon1 from '../../public/bed.svg';
import icon2 from '../../public/bath.svg';
import icon3 from '../../public/garage.svg';
import icon4 from '../../public/ladder.svg';
import CardVisit from '../CardVisit/CardVisit';

export default function CardDetail() {
    return(
        <div className={s.detail} >
            <h5 className={s.detail__heading} >House Detail</h5>
            <div className={s.detail__items} >
                <div className={s.item} >
                    <Image className={s.item__icon} src={icon1} alt='icon-bed' />
                    <span className={s.item__name} >4 Bedrooms</span>
                </div>
                <div className={s.item} >
                    <Image className={s.item__icon} src={icon2} alt='icon-bath' />
                    <span className={s.item__name} >2 Bathrooms</span>
                </div>
                <div className={s.item} >
                    <Image className={s.item__icon} src={icon3} alt='icon-garage' />
                    <span className={s.item__name} >1 Carport</span>
                </div>
                <div className={s.item} >
                    <Image className={s.item__icon} src={icon4} alt='icon-ladder' />
                    <span className={s.item__name} >2 Floors</span>
                </div>
            </div>
            <div className={s.detail__line} ></div>
            <CardVisit />
        </div>
    )
}