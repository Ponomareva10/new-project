import Head from 'next/head';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/pagination";
import s from '../pages/style.module.scss';
import yellow from '../public/yellowFilter.png';
import pink from '../public/pinkFilter.png';
import Welcome from '../components/Welcome/Welcome';
import Partners from '../components/Partners/Partners';
import Header from '../components/Header/Header';
import RightSlider from '../components/RightSlider/Rightslider';
import RightPeoples from '../components/RightPeople/RightPeople';
import Recomendation from '../components/Recomendation/Recomendation';
import Benefit from '../components/Benefit/Benefit';
import Ready from '../components/Ready/Ready';

export default function Index () {
    return(
        <>
        <Head>
            <title>Your dreams</title>
            <meta name="keywords" content="our house, house, free shipping, best quality " />
            <meta name="description" content="Houses recommended by our partners that have been curated to become the home of your dreams"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600&family=Mulish:wght@700;800&family=Rubik&family=Shantell+Sans:wght@300;500&display=swap" rel="stylesheet" />
        </Head>
        <main className={s.main}>
            <section className={s.main__left} >
                <Welcome />
                <Partners />
            </section>
            <section className={s.main__right} >
                <Header />
                <RightSlider />
                <RightPeoples />
            </section>
            <section className={s.main__recomendation}>
                <Recomendation />
            </section>
            <section className={s.main__benefit}>
                <Image className={s.benefit__filterYellow} src={yellow} alt='filter' />
                <Image className={s.benefit__filterPink} src={pink} alt='filter' />
                <Benefit />
                <Ready />
            </section>
        </main>
        </>
    )
}