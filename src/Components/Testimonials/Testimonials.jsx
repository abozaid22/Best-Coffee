
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay,  } from 'swiper/modules';
// img
import imgCbDv68iS from '../../assets/user-1-CbDv68iS.jpg'
import imgBjTSFPXC from '../../assets/user-2-BjTSFPXC.jpg'
import imgDxQ0dwHV from '../../assets/user-3-DxQ0dwHV.jpg'
import imgC4kCMyS9 from '../../assets/user-4-C4kCMyS9.jpg'
import imgCpjWc7BS from '../../assets/user-5-CpjWc7BS.jpg'

export default function Testimonials() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <section className=' py-7 bg-[#252525] text-white'>
        
        <div className=' mb-10'>
            <h2 className=" text-3xl font-bold text-center">Testimonials</h2>
            <div className="bg-orange-400 w-24 h-0.5 mt-2 mx-auto"></div>
        </div>

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, ]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
                <img loading='lazy' className="w-20 h-20 rounded-full" src={imgCbDv68iS} alt="imgCbDv68iS" />
                <p className="text-lg">Amazing service and top-notch coffee!</p>
                <h3 className="font-bold">- John Doe</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
                <img loading='lazy' className="w-20 h-20 rounded-full" src={imgBjTSFPXC} alt="imgBjTSFPXC" />
                <p className="text-lg">A perfect start to my day, every day.</p>
                <h3 className="font-bold">- Jane Smith</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
                <img loading='lazy' className="w-20 h-20 rounded-full" src={imgDxQ0dwHV} alt="imgDxQ0dwHV" />
                <p className="text-lg">Best coffee shop in town!</p>
                <h3 className="font-bold">- Emily Brown</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
                <img loading='lazy' className="w-20 h-20 rounded-full" src={imgC4kCMyS9} alt="imgC4kCMyS9" />
                <p className="text-lg">Friendly staff and great ambiance.</p>
                <h3 className="font-bold">- Michael Green</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col items-center gap-4">
                <img loading='lazy' className="w-20 h-20 rounded-full" src={imgCpjWc7BS} alt="imgCpjWc7BS" />
                <p className="text-lg">Love their specialty drinks!</p>
                <h3 className="font-bold">- Sarah Johnson</h3>
            </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        </Swiper>

        </section>
    </>
  )
}

