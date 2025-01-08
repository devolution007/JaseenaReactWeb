import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css'; // Import Swiper styles

// Import images for the slider
import image1 from '@/assets/images/other/12.jpeg';
import image2 from '@/assets/images/other/13.png';
import image3 from '@/assets/images/other/8.jpg';
import image4 from '@/assets/images/other/11.jpg';
import image5 from '@/assets/images/other/10.jpg';

// Define the other array with imported images
const other = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
];

const Testimonial = () => {
    return (
        <>
            <section
                className="relative py-20 overflow-x-hidden w-full"
                data-aos="fade-up"
                data-aos-duration="500"
            >
                <div className="relative z-20 w-full">
                    <div className="flex flex-col items-center justify-center pb-14">
                        <div className="text-center">
                            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
                                Featured Product
                            </span>
                            
                        </div>
                    </div>

                    <div className="relative w-full">
                        <div id="swiper_two" className="swiper w-full">
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                slidesPerView={5}
                                spaceBetween={0}
                                loop
                            >
                                {(other || []).map((item, idx) => {
                                    return (
                                        <SwiperSlide key={idx}>
                                            <img
                                                src={item.image}
                                                alt={`testimonial-${idx}`}
                                                className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110 hover:border-4 "
                                                style={{ width: '350px', height: '260px', borderRadius: '25px' }}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;