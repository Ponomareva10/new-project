import s from './style.module.scss';
import Image from 'next/image';
import image1 from '../../public/imageRight1.png';
import image2 from '../../public/imageRight2.png'; 

export default function RightSlider () {
    return(
        <div className={s.sliderWrapper}>
                <Image className={s.img} src={image1} alt="photo-Home" />
                <Image className={s.img} src={image2} alt="photo-Home" />
        </div>
    )
}