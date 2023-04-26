import CardDetail from '../CardDetail/CardDetail';
import VideoPlay from '../VideoPlay/VideoPlay';
import s from './style.module.scss';

export default function Ready () {
    return(
        <div className={s.readyPlyer}>
            <div className={s.readyPlayer__left}>
                <div className={s.ready}>
                    <span className={s.ready__line}></span>
                    Ready to Sell!
                </div>
                <h3 className={s.ready__heading}>Let’s tour and see our house!</h3>
                <p className={s.ready__text} >Houses recommended by our partners that have been curated to become the home of your dreams!</p>
                <CardDetail />
            </div>
            <div className={s.readyPlayer__rigth}>
                <VideoPlay />
            </div>
        </div>

    )
}