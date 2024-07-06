import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Inicio = () => {
    document.title = 'CreenAsez';
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='font-helvetica'>
            <Header />
            <div className='container mt-40 text-white mx-auto px-4'>
                <div className='flex space-x-4'>
                    <img src="./src/assets/images/banner/banner.jpg" alt="imagen 3" className='w-full' />
                </div>
                <h1 className='md:text-4xl text-3xl md:font-extrabold font-black items-center justify-center flex mt-20' data-aos="fade-up" data-aos-duration="1000">Descubre el Mundo Visual con CreenAsez</h1>
                <p className='mt-20 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Videoclips, Eventos Deportivos y Noches de Fiesta.
                    Sumérgete en la diversidad de videos creativos creados por <span className='italic font-bold'>Creen</span> desde Madrid.
                    Desde videoclips que dan vida a la música hasta la energía única de los DJ's en discotecas, cada proyecto captura momentos
                    únicos con estilo y pasión. Con una habilidad excepcional para dirigir, filmar, editar y producir, <span className='italic font-bold'>Creen </span>
                    de CreenAsez se destaca en la creación y edición de contenido que resuena en una amplia audiencia global.
                </p>
                <div className='flex flex-col md:flex-row space-x-4 mt-20' data-aos="fade-up" data-aos-duration="1000">
                    <img src="./src/assets/images/creen/foto1.jpg" alt="creen" className='w-full md:w-1/2 mb-4 md:mb-0' />
                    <div className='md:w-1/2 flex items-center justify-center'>
                        <p className='md:text-4xl font-extrabold text-center'>Explora, Capta, Vibra.</p>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:flex-row items-center justify-center mt-20' data-aos="fade-up" data-aos-duration="1000">
                    <div className='md:w-1/2 flex items-center justify-center'>
                        <p className='md:text-4xl font-extrabold text-center'>Direct, Creative, Edit.</p>
                    </div>
                    <img src="./src/assets/images/creen/foto2.jpg" alt="creen2" className='w-full md:w-1/2 mb-4 md:mb-0 mt-6 md:mt-0' />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <p className='mt-20 text-justify text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
                <h1 className='md:text-4xl text-base md:font-extrabold font-black items-center justify-center flex mt-36' data-aos="fade-up" data-aos-duration="1000">COLABORACIONES CON ARTISTAS</h1>
                <div className='flex md:flex-row gap-1 flex-col mt-10' data-aos="fade-up" data-aos-duration="1000">
                    <div className='relative w-full md:w-1/4'>
                        <img src="./src/assets/images/artistas/miko.png" alt="Young Miko" className='w-full rounded-lg transform transition-transform hover:scale-95' />
                        <div className='absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-lg' style={{ backgroundImage: "url('./src/assets/images/artistas/miko2.png')" }}></div>
                    </div>
                    <div className='relative w-full md:w-1/4'>
                        <img src="./src/assets/images/artistas/jose.jpg" alt="Jose de las heras" className='w-full rounded-lg transform transition-transform hover:scale-95' />
                        <div className='absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-lg' style={{ backgroundImage: "url('./src/assets/images/artistas/jose2.jpg')" }}></div>
                    </div>
                    <div className='relative w-full md:w-1/4'>
                        <img src="./src/assets/images/artistas/badgyal.jpg" alt="Bad Gyal" className='w-full rounded-lg transform transition-transform hover:scale-95' />
                        <div className='absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-lg' style={{ backgroundImage: "url('./src/assets/images/artistas/badgyal2.jpg')" }}></div>
                    </div>
                    <div className='relative w-full md:w-1/4'>
                        <img src="./src/assets/images/artistas/omarMontes.jpg" alt="Omar Montes" className='w-full rounded-lg transform transition-transform hover:scale-95' />
                        <div className='absolute inset-0 bg-cover bg-center opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-lg' style={{ backgroundImage: "url('./src/assets/images/artistas/omarMontes2.jpg')" }}></div>
                    </div>
                </div>
                <div className='items-center justify-center flex flex-wrap mt-10 text-white gap-4' data-aos="fade-up" data-aos-duration="500">
                    <img src="./src/assets/images/logo-artistas/miko.webp" alt="logo-miko" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/jose.png" alt="logo-jose" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/badgyal.webp" alt="logo-badgyal" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <p className='font-extrabold w-1/5 text-center md:w-auto '>OMAR MONTES</p>
                    <img src="./src/assets/images/logo-artistas/rvfv.png" alt="logo-rvfv" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/saiko.png" alt="logo-saiko" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/quevedo.avif" alt="logo-quevedo" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(300%)' }} />
                    <img src="./src/assets/images/logo-artistas/bizarap.jpg" alt="logo-bizarap" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/jw.png" alt="logo-jaywheeler" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/maikel.png" alt="logo-maikel" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/robledo.png" alt="logo-robledo" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/juseph.png" alt="logo-juseph" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/dasoul.png" alt="logo-dasoul" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/yago.png" alt="logo-yago" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/lennis.png" alt="logo-lennis" className='md:w-1/12 w-1/5' style={{ filter: 'invert(100%) brightness(200%)' }} />
                    <img src="./src/assets/images/logo-artistas/arce.png" alt="logo-arce" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/mequi.png" alt="logo-mequi" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/djnelson.png" alt="logo-djnelson" className='md:w-1/12 w-1/5' />
                    <img src="./src/assets/images/logo-artistas/dimelomilo.png" alt="logo-dimelomilo" className='md:w-1/12 w-1/5' style={{ filter: 'invert(50%) brightness(300%)' }} />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Inicio;
