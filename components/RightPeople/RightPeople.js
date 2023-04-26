import Image from 'next/image';
import image3 from '../../public/peoplesSlider.png';
import s from './style.module.scss';

export default function RightPeoples () {
    return(
        <div className={s.wrapper} >
            <Image className={s.people}  src={image3} alt="photo-pepoples" />
        </div>
    )
}