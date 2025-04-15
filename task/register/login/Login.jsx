import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const sendData = (e) => {
        e.preventDefault();

        axios.post('https://northwind.vercel.app/api/categories', {
            name: name,
            email: email,
            website: website,
            message: message
        })
        .then(response => {
            console.log("Data sent successfully!", response);
        
            setName('');
            setEmail('');
            setWebsite('');
            setMessage('');
        })
        .catch(error => console.error("Error sending data:", error));
    };

    return (
        <>
            <div className={styles.container}>
                <form onSubmit={sendData}>
                    <div className={styles.register}>
                        <div className={styles.title}>
                            <p>GET IN TOUCH</p>
                        </div>
                        <div className={styles.tellUs}>
                            <div className={styles.input}>
                                <span>Tell us your name</span>
                                <input 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className={styles.input}>
                                <span>Enter your email</span>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                        </div>
                        <div className={styles.website}>
                            <span>Your Website</span>
                            <input 
                                type="url" 
                                placeholder="http://" 
                                value={website} 
                                onChange={(e) => setWebsite(e.target.value)} 
                            />
                        </div>
                        <div className={styles.message}>
                            <span>Message</span>
                            <textarea 
                                placeholder="Your message here..." 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.submit}>
                            <button type="submit">SUBMIT</button>
                        </div>
                    </div>
                </form>
                <section>
                    <span>Call us on *001 345 6178</span>
                </section>
            </div>
        </>
    );
};

export default Login;
