import React, {useRef} from "react";
import classes from './Slider.module.scss';
import Icon from "../../UI/Icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({onSlideChange, items}) => {
    const swiperRef = useRef(null);

    return(
        <div className={classes.slider}>
            <button
                className={[classes.button, classes.prev].join(' ')}
                onClick={() => swiperRef.current.swiper.slidePrev()}
            >
                <Icon type={'arrow'}/>
            </button>
            <Swiper
                slidesPerView={4.85}
                centeredSlides={true}
                spaceBetween={28}
                loop={true}
                onSlideChange={(swiper) => onSlideChange(swiper.realIndex)}
                className={classes.list}
                ref={swiperRef}
            >
                {items?.length && items.map((item) => {
                    return <SwiperSlide key={item} className={classes.item}>
                        {({ isActive, isPrev, isNext }) => (
                            <span
                                className={
                                    isActive
                                    ? classes.active
                                    : (isPrev || isNext)
                                    ? classes.translucent
                                    : null
                                }
                            >
                                {item}
                            </span>
                        )}
                    </SwiperSlide>
                })}
            </Swiper>
            <button
                className={[classes.button, classes.next].join(' ')}
                onClick={() => swiperRef.current.swiper.slideNext()}
            >
                <Icon type={'arrow'}/>
            </button>
        </div>
    )
}

export default Slider;
