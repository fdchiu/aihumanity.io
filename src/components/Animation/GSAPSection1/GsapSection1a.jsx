import { useRef, useLayoutEffect } from "react";
import "./GSAPSection.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Button, Img, Heading } from "../../";
import { Power2 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function GsapSection1a() {
    const containerRef = useRef(null);
    const ringRef = useRef();
    const textSectionRef = useRef()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const textPanels = gsap.utils.toArray('.gsapsection-panel');
            //const imgs = gsap.utils.toArray('.gsapring-animation-img');
            var radius = ringRef.current.r.baseVal.value;
            var circumference = radius * 2 * Math.PI;

            ringRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
            ringRef.current.style.strokeDashoffset = 150//`${circumference}`;
            //console.log(`radius:${radius} circum:${circumference}`)

            function setProgress(percent) {
                const offset = circumference - percent / 100 * circumference;
                ringRef.current.style.strokeDashoffset = offset;
            }
            const offset = [120, 80, 0]
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom center', //+=100%',
                    pin: true,
                    scrub: true,
                    //markers: true,
                    //pinSpacing: true
                },
            });

            tl.set(textPanels[0], { opacity: 1 })
            //tl.set(imgs[0], { opacity: 1 })
            //tl.set(ringRef, { strokeDashoffset:0 })
            textPanels.forEach((panel, i) => {
                // first panel should start already in place, and last panel should end in the center.
                if (textPanels[i + 1]) {
                    tl.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 10 })
                        //.set(imgs[i], { opacity: 1 })
                        //.set(ringRef.current, {strokeDashoffset: offset[i], duration: 5})
                        .to(ringRef.current, { strokeDashoffset: offset[i], duration: 10, ease: "power2.out" })
                        .to(panel, {
                            yPercent: 0,
                            xPercent: -100,
                            duration: 10,
                            ease: "power2.out"
                        })
                       // .to(imgs[i], { rotation: -60 }, { duration: 10 })
                       // .to(imgs[i], { autoAlpha: 0, duration: 10 })
                    //.fromTo(imgs[i + 1], { opacity: 0 }, { opacity: 1 }, {duration: 1 })
                    //.fromTo(imgs[i], { opacity: 1 }, { opacity: 0, duration: 0.5 })
                } else if (i == textPanels.length - 1) {
                    tl.set(ringRef.current, { strokeDashoffset: 0, duration: 10, ease: "power2.out" })
                }
                });
        
            tl.set(textPanels[textPanels.length-1], {opacity:1})
            //tl.set(imgs[imgs.length-1], { opacity: 1 })
           /* imgs.forEach((img, i) => {
                tl.fromTo(img, { opacity: 0 }, { opacity: 1, duration: 1 })
            }); */
            /*tl.to(img,{
                autoAlpha: 0,
                    delay: 2,
                        repeat: -1,
                            repeatDelay: 1.5,
                                stagger: { each: 2 }
            })*/

           /* textPanels.forEach((textPanel, i) => {
                if (textPanels[i + 1]) {
                    tl.set(textPanel, { autoAlpha: 1 })  //'+=0.5'
                        //.to(textPanels[i + 1], { opacity: 1 }, '<')                    
                     .to(
                         textPanels,
                            { yPercent: -(100 * (i + 1)), ease: 'none' },
                            '<'
                        );
                }
            });*/
            tl.to({}, {}, '+=0.5');
        

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="gsapwrapper-combo bg-black-900_02" ref={containerRef}>
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
                        <div className="gsapsection-combo-content" ref={textSectionRef}>
                            <div className="gsapsection-panel">
                            <       Heading size="2xl" as="h2" className="!text-gray-300 leading-[120%]">
                                A cutting-edge protocol ensuring AI operates with ethical standards and human values.
                                    </Heading>
                                </div>
                                <div className="gsapsection-panel">
                                    <       Heading size="2xl" as="h2" className="!text-gray-300 leading-[120%]">
                                        A decentralized ecosystem that rewards contributions with $AIH tokens, driving engagement and innovation.
                                    </Heading>
                                </div>
                                <div className="gsapsection-panel">
                                    <       Heading size="2xl" as="h2" className="!text-gray-300 leading-[120%]">
                                        A platform that encourages and rewards open source AI LLM model development and science researches for AI democratization.
                                    </Heading>
                            </div>
                        </div>
                    </div>
                   
                    <div className="gsapring-animation ">
                        {/*<Img className="gsapring-animation-img" src='images/circle0.png' width='200' height='200' />
                        <Img className="gsapring-animation-img"  src='images/circle1.png' width='200' height='200' />
                        <Img className="gsapring-animation-img" src='images/circle_full.png' width='200' height='200' />
    */}
                        <svg width='200' height='200'  className="circle-container" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <circle
                                className="circle-container__progress" ref={ringRef}
                                r="32"
                                cx="100"
                                cy="100"
                                style={{ strokeDashoffset: 70 }}
                            ></circle>
                        </svg>
                    </div>
                    </div>

                    
                    {/*}
                    <div className="gsapsection-comboleft" key="2">
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
                    </div>
                </div>

                    <div className="gsapsection-comboleft" key="3">
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
                    </div>

                    </div>
    */}

            </div>            
        </>
    );
}
/*

 */

export default GsapSection1a;
