import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./GSAPSection.module.css";
import { useGSAP } from "@gsap/react";

export default function GsapTest() {
    const container = useRef();
    const circle = useRef();

    useGSAP(() => {
        // use selectors...
        gsap.to(".box", { rotation: "+=360", duration: 3 });

        // or refs...
        gsap.to(circle.current, { rotation: "-=360", duration: 10 });
    },
        { scope: container }
    ); // <-- scope for selector text (optional)

    return (
        <div >
            <div ref={container} className="container">
                <div className="box ">selector</div>
                <div className="circle" ref={circle}>
                    Ref
                </div>
            </div>
            <div className="box">selector</div>
        </div>
    );
}

