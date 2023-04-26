import Image from 'next/image';
import s from './style.module.scss';
import points from '../../public/points.svg';
import info1 from '../../public/info1.svg';
import info2 from '../../public/info2.svg';
import info3 from '../../public/info3.svg';
import { useEffect, useRef, useState } from 'react'

export default function Benefit () {

    const [state, setState] = useState({max: 0, min: 0})
    const myElementRef = useRef(null);
    const [maxIntervalId, setMaxIntervalId] = useState(null);
    const [minIntervalId, setMinIntervalId] = useState(null);

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (myElementRef.current && isElementInViewport(myElementRef.current)) {
        if (!maxIntervalId && state.max < 600) {
            const maxId = setInterval(() => {
            setState(prevState => ({...prevState, max: prevState.max + 1}));
            }, 4);
            setMaxIntervalId(maxId);
        }
        if (!minIntervalId && state.min < 135) {
            const minId = setInterval(() => {
            setState(prevState => ({...prevState, min: prevState.min + 1}));
            }, 8);
            setMinIntervalId(minId);
            }  
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [maxIntervalId, minIntervalId]);

    useEffect(() => {
        if (state.max >= 600 && maxIntervalId) {
        clearInterval(maxIntervalId);
        setMaxIntervalId(null);
        }
        if (state.min >= 135 && minIntervalId) {
        clearInterval(minIntervalId);
        setMinIntervalId(null);
    }
}, [state.max, state.min]);

    return(
        <div className={s.benefit}>
            <div className={s.benefit__left}>
                <Image className={s.benefit__points} src={points} alt='points'/>
                <div className={s.benefit__cube}>
                    <span className={s.cube__line}></span>
                    <span className={s.cube__sect}>Benefit</span>
                </div>
                <h3 className={s.benefit__heading}>Benefit You Get When Using Our Services</h3>
                <article className={s.benefit__info}>
                    <div ref={myElementRef} className={s.info__plus}>{state.max}+</div>
                    <p className={s.info__text}>Home Furniture throughout Indonesia</p>
                </article>
                <article className={s.benefit__info}>
                    <div ref={myElementRef} className={s.info__plus}>{state.min}+</div>
                    <p className={s.info__text}>Staff ready to help you</p>
                </article>
            </div>
            <div className={s.benefit__right}>
                <Image className={s.right__info} src={info1} alt='info' />
                <Image className={s.right__info} src={info2} alt='info' />
                <Image className={s.right__info} src={info3} alt='info' />
            </div>
        </div>
    )
}