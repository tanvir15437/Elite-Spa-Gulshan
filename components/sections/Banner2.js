import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    navigation: { clickable: true },
    pagination: { clickable: true }, // Added visible dots for better UX
    autoplay: {
        delay: 6000, // Reduced from 85s (which is way too long) to 6s
        disableOnInteraction: false,
    },
    loop: true
};

const Banner2 = () => {
    return (
        <>
        <section className="main-slider slider-style-two">
            <Swiper {...swiperOptions}>
                {/* Slide 1: Focus on Modern Elegance */}
                <SwiperSlide className="slide-item">
                    <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider2-1.png)' }}></div>
                    <div className="auto-container content-box">
                        <div className="inner-column">
                            <span className="sub-title">Premium Skin Care Est. 2024</span>
                            <h1 className="title">Redefining <br/> Your Radiance</h1>
                            <p className="text">Experience the fusion of science and nature. Our expert stylists are dedicated to bringing out your inner glow with personalized treatments.</p>
                            
                            <div className="btn-box">
                                <Link href="/page-contact" className="theme-btn btn-style-one">
                                    <span className="btn-title">Explore Services</span>
                                </Link>
                            </div>

                            {/* Decorative Floating Images (The 'Z' Bounce adds visual interest) */}
                            <figure className="image home2-circle-img bounce-z">
                                <img src="/images/main-slider/slide2-4.png" alt="Decorative Element"/>
                            </figure>
                            <figure className="image2">
                                <img src="/images/main-slider/slide2-2.png" alt="Main Visual"/>
                            </figure>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: Focus on Wellness/Relaxation */}
                <SwiperSlide className="slide-item">
                    <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider2-1.png)' }}></div>
                    <div className="auto-container content-box">
                        <div className="inner-column">
                            <span className="sub-title">A Sanctuary of Peace</span>
                            <h1 className="title">Nature's <br/> Purest Touch</h1>
                            <p className="text">Escape the city noise. Indulge in our organic spa retreats designed to rejuvenate your body and soul in a tranquil environment.</p>
                            
                            <div className="btn-box">
                                <Link href="/page-contact" className="theme-btn btn-style-one">
                                    <span className="btn-title">Book a Session</span>
                                </Link>
                            </div>

                            <figure className="image home2-circle-img bounce-z">
                                <img src="/images/main-slider/slide2-4.png" alt="Floating Accent"/>
                            </figure>
                            <figure className="image2">
                                <img src="/images/main-slider/slide2-2.png" alt="Spa Experience"/>
                            </figure>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
        </>
    );
};

export default Banner2;