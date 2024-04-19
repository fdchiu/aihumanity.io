import { useRef, useLayoutEffect } from "react";
import "./GSAPSection.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Button, Img, Heading } from "../../";

gsap.registerPlugin(ScrollTrigger);


function GsapSection1() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            let sections = gsap.utils.toArray(".gsapsection");
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        scrub: true,
                        //snap: 1 / (sections.length - 1),
                        //end: () => "+=" + containerRef.current.offsetWidth,
                        markers: true,
                        end: 'bottom center',
                        pinSpacing: true

                    },
                });
            
        }, containerRef); 
        
        return () => ctx.revert(); 
    }, []);

    return (
        <>
            
            <div className="gsapwrapper bg-black-900_02" ref={containerRef} >
                <div className="gsapsection" key="1">
                    <div className="flex md:flex-col justify-between items-center gap-5 p-[200px] md:p-5 bg-black-900_02">
                        <div className="flex flex-col w-[65%] md:w-full gap-4 my-11">
                            <div className="h-[80px] w-[40%] relative">
                                <div className="flex justify-center w-[45%] bottom-[0.00px] right-[0.00px] p-[7px] m-auto border border-solid white_A700_1c_white_A700_1c_border bg-light_blue-A400 absolute rounded-[5px]">
                                    <Img src="images/robot_human.png" alt="image_three" className="self-start h-[28px]" />
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
                        <Img src='images/circle0.png' />
                    </div>

                </div>
                <div className="gsapsection" key="2">
                    <div className="flex md:flex-col justify-between items-center gap-5 p-[200px] md:p-5 bg-black-900_02">
                        <div className="flex flex-col w-[65%] md:w-full gap-4 my-11">
                            <div className="h-[80px] w-[40%] relative">
                                <div className="flex justify-center w-[45%] bottom-[0.00px] right-[0.00px] p-[7px] m-auto border border-solid white_A700_1c_white_A700_1c_border bg-light_blue-A400 absolute rounded-[5px]">
                                    <Img src="images/robot_human.png" alt="image_three" className="self-start h-[28px]" />
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
                                A decentralized ecosystem that rewards contributions with $AIH tokens, driving engagement and innovation.
                            </Heading>
                        </div>
                        <Img src='images/circle1.png' />
                    </div>
                </div>

                <div className="gsapsection" key="3">
                    <div className="flex md:flex-col justify-between items-center gap-5 p-[200px] md:p-5 bg-black-900_02">
                        <div className="flex flex-col w-[65%] md:w-full gap-4 my-11">
                            <div className="h-[80px] w-[40%] relative">
                                <div className="flex justify-center w-[45%] bottom-[0.00px] right-[0.00px] p-[7px] m-auto border border-solid white_A700_1c_white_A700_1c_border bg-light_blue-A400 absolute rounded-[5px]">
                                    <Img src="images/robot_human.png" alt="image_three" className="self-start h-[28px]" />
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
                                A platform that encourages and rewards open source AI LLM model development and science researches for AI democratization.
                            </Heading>
                        </div>
                        <Img src='images/circle_full.png' />
                    </div>

                </div> 

                </div>
                
        </>
    );
}
/*

 */

export default GsapSection1;
