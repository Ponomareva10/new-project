import Image from 'next/image';
import s from './style.module.scss';

export default function Card ({item}) {
    return(
        <div className={s.card}>
            <Image className={s.card__marker} src={item.marcer}  alt='home-marker' width={130} height={34} />
            <Image className={s.card__img} src={item.homephoto} alt='home-photo' width={340} height={382} />
            <h4 className={s.card__item}>{item.name}</h4>
            <div className={s.card__price} >{item.price}</div>
            <div className={s.card__autor}> 
                <Image className={s.autor__photo} src={item.autorphoto} alt='autor' width={40} height={40}/>
                <div>
                    <div className={s.autor__name} >{item.autor}</div>
                    <div className={s.autor__address} >{item.address}</div>
                </div>
            </div>
        </div>
    )
}

