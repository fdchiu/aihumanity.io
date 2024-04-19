import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Button, Img, Heading } from "components";

gsap.registerPlugin(ScrollTrigger);


export default function ProductDescription() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const imgs = gsap.utils.toArray(".product-img-anima")
            const finalSection = gsap.utils.toArray(".product-final-section")
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    end:  'bottom bottom', 
                    pin: false,
                    scrub: true,
                    markers: true,
                    //pinSpacing: true
                },
            });

            imgs.forEach((img, i) => {
                tl.fromTo(img, { y: 300 }, { y: 0, duration: 5,  stagger: 0.2, })
            });

            tl.fromTo(".product-final-section", { xPercent: 50 }, { xPercent: 0, duration: 5, ease: "sine.in" })

            tl.to({}, {}, '+=0.5');

        }, containerRef);

        return () => ctx.revert();

    }, []);

    return (

        <div className="flex flex-col gap-[100px] px-14 py-20 md:gap-[75px] md:p-5 sm:gap-[50px] bg-black-900_02" ref={containerRef}>
            <div className="flex flex-col w-full gap-[90px] mx-auto md:gap-[67px] sm:gap-[45px] max-w-[1041px]">
                <div className="flex self-start">
                    <Button
                        size="xs"
                        variant="outline"
                        shape="round"
                        color="white_A700_1c_white_A700_1c"
                        className="tracking-[-0.04px] uppercase font-medium min-w-[170px]"
                    >
                        &#123; Products &#125;
                    </Button>
                </div>
                <div className="flex flex-col gap-[121px]">
                    <div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10 flex-1">
                        <div className="flex sm:flex-col justify-between items-start gap-5">
                            <Img src="images/Left_Face.png" className="product-img-anima" />
                            <div className="flex flex-col items-start w-[50%] sm:w-full gap-[21px]">
                                <Heading size="xl" as="h2" className="w-[73%] md:w-full !text-gray-300 leading-[120%]">
                                    <>
                                        Human Emotion <br />
                                        Understanding by AI
                                    </>
                                </Heading>
                                <Heading as="h3">DePin Subsystem</Heading>
                                <Text as="p" className="leading-[120%]">
                                    Allows AI model to know and better understand human
                                </Text>
                            </div>
                        </div>
                        <div className="h-px rotate-[-180deg] bg-gray-800" />
                    </div>
                    <div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10 flex-1">
                        <div className="flex sm:flex-col justify-between items-start gap-5">
                            <Img src="images/Left_machine.png" className={"product-img-anima"} />
                            <div className="flex flex-col items-start w-[50%] sm:w-full gap-[18px]">
                                <Heading size="xl" as="h4" className="!text-gray-300">
                                    AI Accountability
                                </Heading>
                                <Heading as="h5">Protocol</Heading>
                                <Text as="p" className="leading-[120%]">
                                    Provides forensic traces for AI actions for accountability
                                </Text>
                            </div>
                        </div>
                        <div className="h-px rotate-[-180deg] bg-gray-800" />
                    </div>
                    <div className="flex flex-col justify-center gap-20 py-7 md:gap-[60px] sm:gap-10 sm:py-5 flex-1">
                        <div className="flex sm:flex-col justify-between items-start gap-5">
                            <Img src="images/Left_future.png" className={"product-img-anima"}/>
                            <div className="flex flex-col items-start w-[50%] sm:w-full gap-5">
                                <Heading size="xl" as="h6" className="!text-gray-300">
                                    AI Democratization
                                </Heading>
                                <Heading as="h5">DeSci Subsystem</Heading>
                                <Text as="p" className="leading-[120%]">
                                    Democratize AI so that every human being can benefit
                                </Text>
                            </div>
                        </div>
                        <div className="h-px mb-0.5 rotate-[-180deg] bg-gray-800" />
                    </div>
                </div>
            </div>

            <div className="product-final-section flex flex-col justify-center w-full gap-6 p-8 mx-auto md:p-5 border-[0.5px] border-solid gray_50_gray_50_00_border bg-gradient2 max-w-5xl rounded-[12px]">
                <div className="flex items-center w-[28%] md:w-full mt-4 gap-[19px]">
                    <Img src="images/img_television.svg" alt="television" className="h-[57px]" />
                    <Img src="images/img_group_47.svg" alt="image_twentyone" className="h-[52px]" />
                </div>
                <Heading as="h2" className="mb-4 !text-gray-300 leading-[140%]">
                    “Our fundamental goal is to build a platform and protocol that establish a formidable and non-conflict
                    relationship between AI and humans, govern AI and AI Agents, increase security in communication among AI
                    agents and between AI agents and humans, and enforce accountability of AI. ”
                </Heading>
            </div>
        </div>
    );
}
