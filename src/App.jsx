import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';

function App() {
    const [count, setCount] = useState(0);
    const [orderPopup, setOrderPopup] = useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: 100,
            Delay: 100
        });
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
                <Navbar handleOrderPopup={handleOrderPopup} />
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Products />
                <Testimonials />
                <Footer />
                <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
            </div>
        </>
    );
}

export default App;
