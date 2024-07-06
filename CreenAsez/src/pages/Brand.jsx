import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const brand = () => {
    document.title = 'CreenAsez - Brand';

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='font-helvetica'>
            <Header />
            <div className='container mt-44 text-white mx-auto px-4'>
                <p className='md:text-4xl text-xl md:font-black font-black flex mt-20 italic' data-aos="fade-up" data-aos-duration="1000">¿Quién es CreenAsez?</p>
                <p className='mt-8 text-justify' data-aos="fade-up" data-aos-duration="1000">Creen es un Director / Creador reconocido a nivel mundial. Durante los últimos años, ha
                    sido la fuerza creativa detrás de algunas de las marcas, artistas y personalidades más influyentes que han impactado la cultura global. Creen se dedica
                    a dirigir, escribir, filmar, editar y producir los videoclips en los proyectos en los que participa. Su trabajo ha inspirado y ha
                    atraído a una amplia audiencia de seguidores, alcanzando cientos de miles en diversas plataformas sociales. El contenido que
                    produce tiene un impacto viral y sigue expandiéndose.</p>
                <div className='items-center justify-center flex mt-20' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/xxk84iwQOIw?si=VgBzNC_MGxGiO_sY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">Abusadora Dance Video (Septiembre 2020) - Yago Roche</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex flex-col md:flex-row mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 mb-8 md:mb-0 border border-gray-500'
                        src="https://www.youtube.com/embed/m1uKjQCeqto?si=k3gqopCzZKXN_zKL"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/TmUWnY1tiEo?si=h60bju6AQoLrjr6W"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">Backstage 'TBT'  (Enero 2021) - Yago Roche</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/c81C-QfT2Js?si=b0eZSpR5b1msnctV"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">Friki Dance Video (Enero 2022)</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/tCBhby44Lbo?si=LEZn-2O9FA3BTmbv&amp"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">AMANDA SAMPEDRO ATLÉTICO DE MADRID (Mayo 2022)</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/3MNyeV6upCM?si=4i9DSnAxAKEwl9j2&amp"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">LAIA ALEIXANDRI M.CITY (Junio 2022)</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/AbYZtBoX3d0?si=5fSYlGqxjeyVXKy6&amp"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">COLISEO PUERTO RICO (Octubre 2022) - Jose de las Heras</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/MDp8o48kYIU?si=d0Cg7dj0uMxN3zXD&amp"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>

                <p className='mt-20 text-lg underline italic font-black' data-aos="fade-up" data-aos-duration="1000">Backstage 'Soltera'(Junio 2024) - Jose de las Heras x Omar Montes</p>
                <p className='mt-2 text-justify text-sm' data-aos="fade-up" data-aos-duration="1000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <iframe
                        className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'
                        src="https://www.youtube.com/embed/j0quiDarnUE?si=0hctDqVvHlGkuU2-&amp"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                {/* 
                <div className='items-center justify-center flex mt-20 gap-4' data-aos="fade-up" data-aos-duration="1000">
                    <video src="./src/assets/videos/2024-07-01 11-50-02.mp4" autoPlay muted className='md:w-1/2 md:h-96 w-full rounded-lg shadow-gray-800 shadow-xl transition-transform hover:scale-95 border border-gray-500'>
                        Tu navegador no admite el elemento <code>video</code>.
                    </video>
                </div>
                */}
            </div>
            <Footer />
        </div>
    );
};

export default brand;