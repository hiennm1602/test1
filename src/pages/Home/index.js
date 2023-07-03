import { useEffect, useRef } from "react";
import video from 'src/assets/videos/The_Last_Spark_Wallpaper.mp4';
import classNames from "classnames/bind";
import style from './Home.module.scss'

const cx = classNames.bind(style)
function Home() {
    const vidRef = useRef()

    useEffect(() => {
        vidRef.current.play()
    }, [])
    return (  
        <div>
            <video className={cx('video')}
                src={video}
                ref={vidRef}
                muted
                autoPlay
                loop
            />
        </div>
    );
}

export default Home;