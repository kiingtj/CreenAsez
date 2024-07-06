import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const shop = () => {
    document.title = 'CreenAsez - Shop';

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='font-helvetica'>
            <Header />
            <div className='container mt-44 text-white mx-auto'>
                <h1 className="md:text-6xl text-3xl md:font-black font-black items-center justify-center flex mt-20 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-500" data-aos="fade-up" data-aos-duration="1000">
                    CREEN CLOTHING
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-6 mt-20'>
                    <div className="w-full rounded-lg transition-transform hover:scale-95 " data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami1.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami1.1.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami1.2.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami2.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami2.1.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami2.2.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami3.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami3.1.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami3.2.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami4.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami4.1.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami4.2.jpg" alt="product image" />
                    </div>
                </div>
                <h1 className="md:text-6xl text-2xl md:font-black font-black items-center justify-center flex mt-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-500" data-aos="fade-up" data-aos-duration="1000">
                    CREEN CLOTHING X BEPLAYER
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-6 mt-20'>
                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami5.1.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami5.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami5.2.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami6.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <video src="./src/assets/videos/shop/cami6.2.mp4" autoPlay muted loop className="rounded-lg transition-transform hover:scale-95 duration-500">
                            Tu navegador no admite el elemento <code>video</code>.
                        </video>
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/cami6.1.jpg" alt="product image" />
                    </div>
                </div>
                <h1 className="md:text-6xl text-xl md:font-black font-black items-center justify-center flex mt-20 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-500" data-aos="fade-up" data-aos-duration="1000">
                    CREEN CLOTHING X CELEBRITIES
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-6 mt-20'>
                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb7.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb9.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb6.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb5.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb2.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb8.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb3.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500" src="./src/assets/images/shop/celeb4.jpg" alt="product image" />
                    </div>

                    <div className="w-full rounded-lg transition-transform hover:scale-95" data-aos="fade-up" data-aos-duration="1000">
                        <img className="rounded-lg transition-transform hover:scale-95 duration-500 h-full" src="./src/assets/images/shop/celeb1.jpg" alt="product image" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default shop;