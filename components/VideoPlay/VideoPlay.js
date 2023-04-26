import Image from 'next/image';
import s from './style.module.scss';
import points from '../../public/pointsPlayer.svg';

export default function VideoPlay() {
    return (
        <div className={s.player}>
            <Image className={s.player__points}  src={points} alt='points' />
            <video className={s.player__video} 
            autoPlay="autoplay"
            muted="muted"
            controls="controls"
            loop="loop">
                <source src='/videoPlayer.mp4' type='video/mp4' />
            </video>
        </div>
    )
}