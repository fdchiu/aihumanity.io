import { useRef, useLayoutEffect } from "react";
import "./GSAPSection.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Button, Img, Heading } from "../../";

gsap.registerPlugin(ScrollTrigger);


function GsapSection2() {
    const containerRef = useRef(null);
    const firstItem = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            let sections = gsap.utils.toArray(".gsapsection");
            console.log(`sections:${sections.length}`)
            gsap.to(sections, {
                xPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top, top",
                    //snap: 1,
                    end: () => "+=" + containerRef.current.offsetWidth,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="gsapwrapper" ref={containerRef}>
                <div className="gsapsection " ref={firstItem} key="1">
                        <h1>Page 1</h1>
                    </div>
                
                <div className="gsapsection" key="2">
                    <h1>Page 2</h1>
                    {/*<Img src="images/page_test.jpg" />*/}
                </div>
            </div>
        </>
    );
}

export default GsapSection2;
