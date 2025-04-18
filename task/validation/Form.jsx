import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './Form.module.css';

const Form = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, "Qısadı")
            .required("Ad yazılmalıdır"),
        lastName: Yup.string()
            .min(2, "Qısadı")
            .required("Soyad yazılmalıdır"),
        email: Yup.string()
            .email("Geçerli bir e-posta adresi girin")
            .required("Emai yazılmalıdır")
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            axios.post('https://northwind.vercel.app/api/categories', values);
            formik.resetForm();
        },
        validationSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
            <label htmlFor="firstName" className={styles.label}>First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={styles.input}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className={styles.error}>{formik.errors.firstName}</div>
            ) : null}
            
            <label htmlFor="lastName" className={styles.label}>Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className={styles.input}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className={styles.error}>{formik.errors.lastName}</div>
            ) : null}
            
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={styles.input}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
            
            <button type="submit" className={styles.button}>Submit</button>
        </form>
    );
};

export default Form;
