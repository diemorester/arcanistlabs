import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MdOutlineClose } from 'react-icons/md';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, 'Name cannot contain symbols or numbers')
        .max(50, 'Max 50 characters')
        .required('Name required'),
    email: Yup.string()
        .email('Email not valid')
        .max(50, 'Max 50 characters')
        .required('Email required'),
    message: Yup.string()
        .max(666, 'Max 666 characters')
        .required('Message cannot be empty'),
});

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFooter(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // useEffect(() => {
    //     if (isModalOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }

    //     return () => {
    //         document.body.style.overflow = 'auto'
    //     }
    // }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (!showFooter) {
        return null;
    }

    return (
        <>
            <footer id="footer-section" className="flex flex-col justify-end h-screen items-center gap-36 fixed bottom-0 left-0 right-0 pointer-events-auto bg-stone-100 text-black">
                <div className="flex flex-wrap gap-10 justify-center md:gap-[120px] md:text-3xl text-center">
                    <a className="relative group">
                        <button>
                            <span className="relative">Instagram</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a className="relative group">
                        <button>
                            <span className="relative">YouTube</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a className="relative group">
                        <button>
                            <span className="relative">Twitter</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a className="relative group">
                        <button>
                            <span className="relative">Facebook</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                    <a onClick={openModal} className="relative group">
                        <button>
                            <span className="relative">Email</span>
                            <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </a>
                </div>
                <div className="w-full flex flex-row justify-between text-xs md:text-base text-center p-5 md:py-16 md:px-20">
                    <p>&#169; 2024 ArcanistLabs all rights reserved.</p>
                    <p>bismillah keterima xixixi</p>
                </div>
            </footer>
            {isModalOpen && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-stone-100 p-8 w-full max-w-md mx-auto rounded shadow-md relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-black hover:text-red-600"
                        >
                            <MdOutlineClose className="w-5 h-5" />
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center text-black">Contact Us</h2>

                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validationSchema={ContactSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                                closeModal();
                            }}
                        >
                            {({ errors, touched, isSubmitting, handleChange }) => (
                                <Form className="space-y-4">
                                    <div className="relative text-black placeholder-gray-700">
                                        <Field
                                            type="text"
                                            name="name"
                                            maxLength={50}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                handleChange(e);
                                            }}
                                            placeholder={touched.name && errors.name ? errors.name : 'Name'}
                                            className={`mt-1 p-2 w-full md:h-[42px] bg-stone-100 border rounded ${touched.name && errors.name ? 'placeholder-red-500 text-sm' : ''}`}
                                        />
                                    </div>

                                    <div className="relative text-black placeholder-gray-700">
                                        <Field
                                            type="email"
                                            name="email"
                                            maxLength={50}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                handleChange(e);
                                            }}
                                            placeholder={touched.email && errors.email ? errors.email : 'Email'}
                                            className={`mt-1 p-2 w-full md:h-[42px] bg-stone-100 border rounded ${touched.email && errors.email ? 'placeholder-red-500 text-sm' : ''}`}
                                        />
                                    </div>

                                    <div className="relative text-black placeholder-gray-700">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            rows={4}
                                            maxLength={666}
                                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                                handleChange(e);
                                                setMessageCount(e.target.value.length);
                                            }}
                                            placeholder={touched.message && errors.message ? errors.message : 'Message'}
                                            className={`mt-1 p-2 w-full h-[150px] border rounded bg-stone-100 resize-none pr-12 ${touched.message && errors.message ? 'placeholder-red-500 text-sm' : ''}`}
                                        />
                                        <p className="absolute top-2 right-2 text-xs italic text-gray-500">
                                            {666 - messageCount}/666
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-2 px-4 bg-gray-700 text-white rounded hover:bg-black active:scale-95"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </>
    );
}
