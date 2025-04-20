import React from 'react'
import styles from './Contact.module.css'
import { RiNewsLine } from "react-icons/ri";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
    const validationSchema = Yup.object({
        Name: Yup.string()
            .min(2, "Qısadı")
            .required("Ad yazılmalıdır"),
        email: Yup.string()
            .email("Geçərli bir e-posta adresi girin")
            .required("Email yazılmalıdır"),
        phone: Yup.string()
            .matches(/^(050|051|055|070|077|099)\d{7}$/, "Mobil nömrə düzgün deyil")
            .required("Telefon nömrəsi yazılmalıdır"),
        companyName: Yup.string()
            .required("Şirkət adı yazılmalıdır"),
        subject: Yup.string()
            .required("Mövzu yazılmalıdır"),
        message: Yup.string()
            .required("Mesaj yazılmalıdır"),
    });





    const formik = useFormik({
        initialValues: {
            Name: '',
            email: '',
            phone: '',
            companyName: '',
            subject: '',
            message: '',
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                await axios.post('https://northwind.vercel.app/api/categories', values);
                resetForm();
                alert("Mesaj göndərildi!");
            } catch (error) {
                console.error("Xəta baş verdi:", error);
            }
        },
        validationSchema,
    });
    return (
        <section className={styles.contactSection}>
            <div className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.leftDiv}>
                        <h1>Contact</h1>
                        <h3>Elit, sed do eiusmod tempor</h3>
                        <p>
                            Vector illustration is from
                            <a href="">StorySet</a>
                            .
                            Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.

                        </p>
                    </div>
                    <div className={styles.rightDiv}>
                        <div className={styles.rightDivImage}><img src="https://themewagon.github.io/purple-buzz/assets/img/banner-img-01.svg" alt="" /></div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.create}>
                    <h1>Create success campaign with us!</h1>
                    <h2>Elit, sed do eiusmod tempor </h2>
                    <p>
                        Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate.
                    </p>
                </div>
            </div>

            <div className={styles.lastDiv}>
                <div className={styles.info}>
                    <div className={styles.infoBox}>
                        <div className={styles.iconBox}><RiNewsLine className={styles.photo} /></div>
                        <div className={styles.text}>
                            <p>Media Contact</p>
                            <span>Mr. John Doe</span>
                            <span>010-020-0340</span>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.iconBox}><RiNewsLine className={styles.photo} /></div>
                        <div className={styles.text}>
                            <p>Media Contact</p>
                            <span>Mr. John Doe</span>
                            <span>010-020-0340</span>
                        </div>
                    </div>
                    <div className={styles.infoBox}>
                        <div className={styles.iconBox}><RiNewsLine className={styles.photo} /></div>
                        <div className={styles.text}>
                            <p>Media Contact</p>
                            <span>Mr. John Doe</span>
                            <span>010-020-0340</span>
                        </div>
                    </div>
                </div>


                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <div className={styles.inputRow}>
                        <div>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Ad"
                                value={formik.values.Name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.Name && formik.errors.Name && (
                                <div className={styles.error}>{formik.errors.Name}</div>
                            )}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className={styles.error}>{formik.errors.email}</div>
                            )}
                        </div>
                    </div>

                    <div className={styles.inputRow}>
                        <div>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Telefon"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <div className={styles.error}>{formik.errors.phone}</div>
                            )}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Şirkət Adı"
                                value={formik.values.companyName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.companyName && formik.errors.companyName && (
                                <div className={styles.error}>{formik.errors.companyName}</div>
                            )}
                        </div>
                    </div>

                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Mövzu"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.subject && formik.errors.subject && (
                            <div className={styles.error}>{formik.errors.subject}</div>
                        )}
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Mesaj"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.message && formik.errors.message && (
                            <div className={styles.error}>{formik.errors.message}</div>
                        )}
                    </div>
                    <div className={styles.btnBox}>
                        <button type="submit" className={styles.submitButton}>Göndər</button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Contact