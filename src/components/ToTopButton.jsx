import React, { useState, useEffect } from 'react';
import "../styles/App.css"


const ToTopButton = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        }
        window.addEventListener("scroll", handleScroll);

        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        };
    }, []) 
    useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://cdn.lordicon.com/lordicon.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);
	
		return () => {
		  document.body.removeChild(script);
		};
	  }, []);
    return (
        <>

            {isScrolled && (
                <>
                    <lord-icon
                        src="https://cdn.lordicon.com/dwoxxgps.json"
                        trigger="in"
                        delay="200"
                        state="in-arrow-up"
                        colors="primary:#ffffff"
                        style={{ width: '50px', height: '50px', position: 'absolute', bottom: '50px', right: '50px' }}
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="toTop-btn"
                    ></lord-icon>
                </>
            )}
        </>
    );
};

export default ToTopButton;