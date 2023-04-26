import Image from "next/image";
import s from './style.module.scss';
import traveloka from '../../public/traveloka.svg';
import tiketcom from '../../public/tiketcom.svg';
import air from '../../public/air.svg';
import tripodvisor from '../../public/tripadvisor.svg';

export default function Partners() {
    return(
        <div className={s.partners}>
            <h3 className={s.partners__heading}>Our Partnership </h3>
            <div className={s.partners__listIcon}>
                <Image src={traveloka} alt='icon-traveloca' />
                <Image src={tiketcom} alt='icon-tiketcom' />                 
                <Image src={air} alt='icon-air' />
                <Image src={tripodvisor} alt='icon-tripodvisor' />
            </div>
        </div>
    )
}