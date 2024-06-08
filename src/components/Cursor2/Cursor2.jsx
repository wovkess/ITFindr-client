import React, { useEffect, useState } from 'react';
import styles from "./Cursor2.module.css";

const Cursor2 = () => {
    const [hidden, setHidden] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const cursorDot = document.querySelector(`.${styles['cursor-dot']}`);
        const cursorOutline = document.querySelector(`.${styles['cursor-outline']}`);

        const handleMouseMove = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: 'forwards' });

            setHidden(false); // Show cursor when moving inside the document
        };

        const handleMouseLeave = () => {
            setHidden(true); // Hide cursor when leaving the document
        };

        const handleLinkHover = () => {
            setHovered(true); // Set cursor as hovered when hovering over a link
        };

        const handleLinkLeave = () => {
            setHovered(false); // Set cursor as not hovered when leaving a link
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);
        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("mouseenter", handleLinkHover);
            link.addEventListener("mouseleave", handleLinkLeave);
        });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
            document.querySelectorAll("a").forEach(link => {
                link.removeEventListener("mouseenter", handleLinkHover);
                link.removeEventListener("mouseleave", handleLinkLeave);
            });
        };
    }, []);

    return (
        <>
            <div className={`${styles['cursor-dot']} ${hidden ? styles.hidden : ''} ${hovered ? styles.hovered : ''}`}></div>
            <div className={`${styles['cursor-outline']} ${hidden ? styles.hidden : ''} ${hovered ? styles.hovered : ''}`}></div>
        </>
    );
};

export default Cursor2;
