import { useRef, useLayoutEffect } from "react";
import "./GSAPSection.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Button, Img, Heading } from "../../";

gsap.registerPlugin(ScrollTrigger);

// View demo with min-width: 1200px
function GsapSection1() {
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
                    end: () => "+=" + containerRef.current.offsetWidth,
                },
            });
        }, containerRef);
        
    }, []);

    return (
        <>
            <div className="gsapwrapper" ref={containerRef}>
                <div className="gsapsection ">
                    <div className="flex md:flex-col justify-between items-center gap-5 p-[200px] md:p-5 bg-black-900_02">
                        <div className="flex flex-col w-[65%] md:w-full gap-4 my-11">
                            <div className="h-[80px] w-[40%] relative">
                                <div className="flex justify-center w-[45%] bottom-[0.00px] right-[0.00px] p-[7px] m-auto border border-solid white_A700_1c_white_A700_1c_border bg-light_blue-A400 absolute rounded-[5px]">
                                    <Img src="images/img_.svg" alt="image_three" className="self-start h-[28px]" />
                                </div>
                                <Button
                                    color="light_blue_A700"
                                    size="md"
                                    className="left-[0.00px] top-[0.50px] m-auto tracking-[-0.04px] uppercase font-medium border border-solid white_A700_1c_white_A700_1c_border min-w-[209px] absolute rounded-[5px]"
                                >
                                    &#123; The Solution &#125;
                                </Button>
                            </div>
                            <Heading size="2xl" as="h2" className="!text-gray-300 leading-[120%]">
                                A cutting-edge protocol ensuring AI operates with ethical standards and human values.
                            </Heading>
                        </div>
                        <div className="h-[308px] w-[308px] md:p-5 bg-blue-200 rounded-[154px]" />
                    </div>

                </div>
                <div className="gsapsection">
                    <div className="flex md:flex-col justify-between items-center gap-5 p-[200px] md:p-5 bg-black-900_02">
                        <div className="flex flex-col w-[65%] md:w-full gap-4 my-11">
                            <div className="h-[80px] w-[40%] relative">
                                <div className="flex justify-center w-[45%] bottom-[0.00px] right-[0.00px] p-[7px] m-auto border border-solid white_A700_1c_white_A700_1c_border bg-light_blue-A400 absolute rounded-[5px]">
                                    <Img src="images/img_.svg" alt="image_three" className="self-start h-[28px]" />
                                </div>
                                <Button
                                    color="light_blue_A700"
                                    size="md"
                                    className="left-[0.00px] top-[0.50px] m-auto tracking-[-0.04px] uppercase font-medium border border-solid white_A700_1c_white_A700_1c_border min-w-[209px] absolute rounded-[5px]"
                                >
                                    &#123; The Solution 2 &#125;
                                </Button>
                            </div>
                            <Heading size="2xl" as="h2" className="!text-gray-300 leading-[120%]">
                                A cutting-edge protocol ensuring AI operates with ethical standards and human values.
                            </Heading>
                        </div>
                        <div className="h-[308px] w-[308px] md:p-5 bg-blue-200 rounded-[154px]" />
                    </div>

                </div>
            </div>
        </>
    );
}
/*

 */

export default GsapSection1;
