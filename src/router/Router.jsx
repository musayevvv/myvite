import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from '../purplebuzz/layout/Layout';
import Home from '../purplebuzz/home/Home'
import Contact from '../purplebuzz/contact/Contact'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;