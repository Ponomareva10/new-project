import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import s from './style.module.scss';
import arrowLeft from '../../public/arrowLeft.svg';
import arrowRight from '../../public/arrowRight.svg';
import Card from '../Card/Card';
import { useEffect, useState } from "react";

export default function Recomendation () {

    const [items, setItems] = useState([]);

    useEffect(() => {
        async function  GetHomeCard() {
            const res = await fetch('http://localhost:4200/items')
            const json = await res.json()
            setItems(json)
        }
        GetHomeCard()
    },[]) 

    return(
        <>
            <div className={s.recomendation}> 
                <span className={s.recomendation__line}></span>
            Our Recommendation
            </div>
            <div className={s.options}>
                <h3 className={s.options__heading}>Featured House</h3>
                <div className={s.options__btn}>
                    <button className={s.btn} >
                        <span className={s.btn__iconHome}></span>
                        House</button>
                    <button className={s.btn} >
                    <span className={s.btn__iconVilla}></span>
                        Villa</button>
                    <button className={s.btn} >
                    <span className={s.btn__iconApartment}></span>
                        Apartment</button>
                </div>
                <div className={s.options__arrays}>
                    <button className={s.array} >
                        <Image src={arrowLeft} alt='arrow-left' />
                    </button>
                    <button className={s.array} >
                        <Image src={arrowRight} alt='arrow-right' />
                    </button>
                </div>
            </div>
            <div className={s.sliderWrapper}>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={40}
                    className="mySwiper"
                    >
                        {
                            items?.map(item => (
                                <SwiperSlide key={item.id} className={s.swiperSlide}>
                                    <Card item={item} />
                                </SwiperSlide>
                            ))
                        }
                </Swiper>
            </div>
        </>
    )
}