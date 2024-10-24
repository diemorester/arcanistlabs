import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { MdOutlineClose } from 'react-icons/md';
import { RxArrowTopRight } from 'react-icons/rx';

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

export default function ContactModalButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageCount, setMessageCount] = useState(0);

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

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="relative border border-mono text-mono py-3 pr-7 min-w-[200px] min-h-[50px] rounded-sm overflow-hidden group text-lg active:scale-95 transition-transform duration-300 ease-in-out bg-white text-black"
            >
                <span className="flex items-center justify-center transition-transform duration-300 ease-in-out">
                    CONTACT US
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
                        <RxArrowTopRight color="black" className="w-6 h-6 transition-opacity duration-500 group-hover:opacity-0" />
                    </span>
                </span>
                <span className="absolute right-3 top-1/2 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:top-1/4">
                    <RxArrowTopRight color="black" className="w-6 h-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
            </button>
            {isModalOpen && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-stone-100 p-8 w-full max-w-md mx-auto rounded shadow-md relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
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
                                setIsModalOpen(false);
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
