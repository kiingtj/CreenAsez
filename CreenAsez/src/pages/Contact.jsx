import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    document.title = 'CreenAsez - Contact';

    useEffect(() => {
        AOS.init();
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        
        if (id === "firstName" || id === "lastName") {
            const regex = /^[a-zA-ZñÑçÇáéíóúÁÉÍÓÚ]*$/;
            if (!regex.test(value)) {
                return;
            }
        }

        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_frk76nq', // Reemplaza con tu ID de servicio
            'template_ta1h7sc', // Reemplaza con tu ID de plantilla
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                message: formData.message,
                from_name: formData.email,
                to_name: "Creen",
                reply_to: formData.email
            },
            '4jWvhGfUx0NCXhomP' // Reemplaza con tu ID de usuario
        )
        .then(() => {
            alert('Email enviado correctamente.');
            setFormData({ // Limpia los campos del formulario
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error('Error al enviar el email. ', error);
            alert('Error al enviar el email.');
        });
    };

    return (
        <div className='font-helvetica'>
            <Header />
            <div className='container mt-44 text-white mx-auto'>
                <form className="max-w-md mx-4 md:mx-auto" onSubmit={handleSubmit} data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='md:text-4xl text-3xl md:font-black font-bold mb-2'>Contact Creen</h1>
                    <p>creenasez@gmail.com</p>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='hover:text-teal-400 text-white'>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium mt-10">First Name <span className='text-red-400'>*</span></label>
                            <input type="text" id="firstName" value={formData.firstName} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                        <div className='hover:text-teal-400 text-white'>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium mt-10">Last Name</label>
                            <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1'>
                        <div className='hover:text-teal-400 text-white'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium mt-10">Email <span className='text-red-400'>*</span></label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 hover:text-teal-400 text-white'>
                        <div className=''>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium mt-10">Message <span className='text-red-400'>*</span></label>
                            <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"></textarea>
                        </div>
                    </div>

                    <div className='grid grid-cols-1'>
                        <input type="submit" value="Send" className='mt-10 border rounded-lg p-4 ransition-transform hover:scale-95 duration-300 hover:border-teal-400 hover:text-teal-400' />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
