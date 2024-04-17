import { useRef, useLayoutEffect } from "react";
import "./GsapSection1b.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { ScrollSmoother } from "gsap/all";
import { Text, Button, Img, Heading } from "../../";

gsap.registerPlugin(ScrollTrigger);

            
export default function GsapSection1b() {
    const containerHeroRef = useRef(null);
    const animacijaRef = useRef();
    const mainRef = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // normalize scroll behavior
            ScrollTrigger.normalizeScroll(true);

            // create a ScrollSmoother instance
            /*let smoother = ScrollSmoother.create({
                smooth: 3,
                effects: true,
                smoothTouch: 0.1
            });*/

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: containerHeroRef.current, // "#container-hero",
                    pin: true,
                    start: "top top", // Changed start property to "top top"
                    end: "bottom",
                    scrub: 1,
                    markers: false
                }
            });

            const circles = gsap.utils.toArray(".circle2");
            circles.forEach((circle) => {
                timeline.from(circle, {
                    clipPath: "circle(0% at 50% 50px)",
                    stagger: 1
                });
            });

            console.clear();

            gsap.registerPlugin(ScrollTrigger);

            const panels = gsap.utils.toArray(".panel");
            gsap.set(panels, {
                yPercent: 100,
                opacity: 1
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: animacijaRef.current, // ".animacija",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    id: "animac",
                    scrub: true
                }
            });

            panels.forEach((panel, i) => {
                // first panel should start already in place, and last panel should end in the center.
                tl.to(panel, {
                    yPercent: 0,
                    duration: 1,
                    ease: "none"
                });
            });
            tl.to(
                [ animacijaRef.current,/*".animacija"*/, panels],
                {
                    backgroundColor: "#ffffff",
                    duration: 1
                },
                "<"
            );
            tl.to(
                [".animacija h2", ".mi-smo *"],
                {
                    color: "#212121",
                    duration: 1
                },
                "<"
            );
            tl.to({}, { duration: 1 }); // add some extra space at the end so the last panel sits for a bit before unpinning.

            gsap.to(".logo-rotating", {
                rotation: 2160, // add this property to rotate the element by 360 degrees
                xPercent: -800,
                ease: "none",
                scrollTrigger: {
                    trigger: animacijaRef.current,// ".animacija",
                    start: "top center",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.to(".mi-smo", {
                xPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: animacijaRef.current, // ".animacija",
                    start: "top center",
                    end: "bottom top",
                    scrub: true
                }
            });            
        });
    }, mainRef);

    return (
        <div id="smooth-wrapper" ref={mainRef}>
            <div id="smooth-content">
                <div id="container-hero" ref={containerHeroRef}>
                    <section id="krog-anim">
                        <div className="inner2">
                            <div className="container">
                                <div className="row hero-button-1">
                                    <div className="col-sm">
                                        <button className="btn-black">
                                            <p>Start a project</p>
                                            <span className="circle-button">
                                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M-0.000604237 4.65685H11.3131M11.3131 4.65685L7.35331 8.61665M11.3131 4.65685L7.35331 0.697056" stroke="white" stroke-width="1.4" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col-sm logotip">
                                        <img src="https://clou.agency/wp-content/uploads/2023/04/Group-1000001979.svg"/>
                                    </div>
                                    <div className="col-sm">
                                    </div>
                                </div>
                            </div>
                            <h1>UNLOCK YOUR <span style={{ color:"#e3e1e1"}}>FULL</span> DIGITAL POTENTIAL</h1>
                        </div>
                    </section>
                    <section className="circle2">
                        <div className="inner2">
                            <div className="container">
                                <div className="row hero-button-2">
                                    <div className="col-sm">
                                        <button className="btn-black">
                                            <p>Start a project</p>
                                            <span className="circle-button">
                                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M-0.000604237 4.65685H11.3131M11.3131 4.65685L7.35331 8.61665M11.3131 4.65685L7.35331 0.697056" stroke="white" stroke-width="1.4" />
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="col-sm logotip">
                                        <img src="https://clou.agency/wp-content/uploads/2023/04/Group-1000001979.svg"/>
                                    </div>
                                    <div className="col-sm">
                                    </div>
                                </div>
                                <h1 style={{ color: '#B0E0E6' }}>UNLOCK YOUR <span style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff', color: '#FF6347' }}>FULL</span> DIGITAL POTENTIAL</h1>
                            </div>
                            </div>
                    </section>
                </div>

                <div className="sections animacija" ref={animacijaRef}>
                    <div className="container">
                        <section className="module">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col">
                                        <img src="https://clou.agency/wp-content/uploads/2023/04/clou-fav.svg" className="logo-rotating" height="70" />
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">

                                        </svg>
                                    </div>
                                    <div className="col mi-smo">
                                        <p>Our approach is centered around innovative solutions that leverage cutting-edge technology and strategic insights to deliver exceptional results for our clients.</p>
                                        <h3>We are
                                            <span className="circle-button-horizontal">
                                                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M-0.000604237 4.65685H11.3131M11.3131 4.65685L7.35331 8.61665M11.3131 4.65685L7.35331 0.697056" stroke="white" strokeWidth="1.4" />
                                                </svg>
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg">
                                <figure className="fig"></figure>
                                <div className="panels">
                                    <div className="panel-content">
                                        <h2>Creative</h2>
                                    </div>
                                    <div className="panel">
                                        <h2>Limitless</h2>
                                    </div>
                                    <div className="panel">
                                        <h2>Outstanding</h2>
                                    </div>
                                    <div className="panel zadnji">
                                        <h2>United</h2>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}