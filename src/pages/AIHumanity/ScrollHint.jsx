import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power1, } from "gsap/gsap-core";
import { Heading } from "components/Heading"

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHint() {
    const containerRef = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let element = containerRef.current
            //var tl = new TimelineMax({ repeat: 5, repeatDelay: 0.5 });
            var tl2 = gsap.timeline({ repeat: 5, repeatDelay: 0.5 });

            tl2.to(element, 0.4, { y: '12', ease: Power1.easeNone });
            tl2.to(element, 0.2, { y: '0', ease: Power1.easeOut });
            tl2.to(element, 0.2, { y: '8', ease: Power1.easeNone });
            tl2.to(element, 0.4, { y: '0', ease: Power1.easeOut });
            // another way
            /*gsap.to(containerRef.current, {
                y: -10,
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: false,
                    scrub: true,
                    ease: "bounce"
            
                }
            });*/
        }, containerRef);

        return () => ctx.revert();
    });

    return (
        <div id="scroll-hint" style={{ maxWidth: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="flex justify-center w-[10%] md:w-full mt-[-93px] md:p-5 relative" ref={containerRef}>
            <div className="flex flex-col items-center w-full mt-1.5 gap-[22px]">
                <div className="w-[20px] md:w-[16%] p-2.5 border-gray-900_03 border-[7px] border-solid bg-gray-900_02 rounded-[10px]">
                    <div className="h-[16px] w-[4px] mb-3 bg-blue-400 rounded-sm" />
                </div>
                <Heading size="xs" as="h1" className="text-center">
                    SCROLL TO EXPLORE
                </Heading>
            </div>
            </div>
        </div>
    );
}