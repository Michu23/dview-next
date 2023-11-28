import React, { useRef, useState, useEffect } from "react";
import Dot from "../../../public/assets/Ellipse.svg";

function Marquee({ tags }) {
    const marqueeRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        // Getting the width of one set of content (since we duplicated it)
        if (marqueeRef.current) {
            setContentWidth(marqueeRef.current.firstChild.offsetWidth);
        }
    }, [tags]);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            // If half of the content (one set) is fully out of view
            if (scrollAmount >= contentWidth) {
                setScrollAmount(0); // Reset to beginning
            } else {
                setScrollAmount(prev => prev + 1); // Move left
            }
        }, 30); // Adjust interval for faster/slower scroll

        return () => clearInterval(scrollInterval);
    }, [scrollAmount, contentWidth]);

    return (
        <div className="subs p-1 mb-3"
            style={{
                overflow: "hidden",
            }}
        >
            <div 
                className="marquee-content" 
                ref={marqueeRef} 
                style={{ transform: `translateX(-${scrollAmount}px)` }}
            >
                {/* Duplicated content - start */}
                {tags.map((tag, index) => (
                    <React.Fragment key={'a' + index}>
                        <div className="subbox me-2">
                            <p className="ch">{tag}</p>
                        </div>
                        <img src={Dot} className="me-2" alt="" />
                    </React.Fragment>
                ))}
                {/* Duplicated content - end */}
                
                {/* Duplicated content - start */}
                {tags.map((tag, index) => (
                    <React.Fragment key={'b' + index}>
                        <div className="subbox me-2">
                            <p className="ch">{tag}</p>
                        </div>
                        <img src={Dot} alt="" className="me-2" />
                    </React.Fragment>
                ))}
                {/* Duplicated content - end */}
                {/* Duplicated content - start */}
                {tags.map((tag, index) => (
                    <React.Fragment key={'b' + index}>
                        <div className="subbox me-2">
                            <p className="ch">{tag}</p>
                        </div>
                        <img src={Dot} alt="" className="me-2" />
                    </React.Fragment>
                ))}
                {/* Duplicated content - end */}
            </div>
        </div>
    );
}

export default Marquee;
