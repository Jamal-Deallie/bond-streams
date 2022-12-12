import styles from '@/styles/components/swiper.module.scss';
import { Swiper as Swipe, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Props = {};

const Swiper = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.outer}>
        <Swipe
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}>
          <SwiperSlide>
            <div className={styles.slide}>Slide1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>Slide1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>Slide1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>Slide1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>Slide1</div>
          </SwiperSlide>
        </Swipe>
      </div>
    </div>
  );
};

export default Swiper;
