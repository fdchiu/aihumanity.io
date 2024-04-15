import { useRef, useLayoutEffect } from "react";
import "./GSAPSection.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// View demo with min-width: 1200px
function GsapScroll() {
    const containerRef = useRef(null);
    useLayoutEffect(() => {
        const container = containerRef.current;

        let sections = gsap.utils.toArray(".gsapsection");
        const context = gsap.context(() => {
            gsap.to(sections, {
                xPercent: -100,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    start: 0,
                    snap: 1,
                    end: () => "+=" + container.offsetWidth,
                },
            });
        }, containerRef);

        // I am doing some experimenting stuff with the code down below.
        // This is a bit related to controlling the width of the first element, so I didn't ommited it
        // If you see the CSS file has a strange width calc() function it is related to this

        let timeout;
        const delay = 100;
        function handleResize() {
            const height = window.innerHeight;
            document.documentElement.style.setProperty("--vH", height / 100 + "px");
        }

        // Delaying so that the browser won't crash
        window.addEventListener("resize", () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(handleResize, delay);
        });

        handleResize();

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            context.revert();
        };
    }, []);

    return (
        <>
            <div className="gsapwrapper" ref={containerRef}>
                <div className="gsapsection background">
                    <div className="background__inner">
                        <h1 style={{color:'black'}}>First section</h1>
                        <img className="background__inner--image" />
                    </div>
                </div>
                <div className="gsapsection tracklist">
                    <h1 style={{ color: 'black' }}>Second Section</h1>
                </div>
            </div>
        </>
    );
}
/*

 */

export default GsapScroll;
