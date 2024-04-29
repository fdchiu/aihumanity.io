import { useRef, useLayoutEffect, useState, useEffect } from "react";
import "./GSAPSection.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Text, Button, Img, Heading } from "../../";
import useIsMobile from "hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);


function GsapSection3() {
    const isMobile = useIsMobile()
    const containerRef = useRef(null);
    const panalRef = useRef()
    const [fontSize, setFontSize] = useState('5xl')

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            gsap.utils.toArray(".gsapsectionV").forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    pin: true,
                    pinSpacing: false,
                    //markers: true,
                    scrub: 2,
                    id: "gsapsectionV"+i
                })
            })
            
        }, containerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (isMobile) {
            setFontSize('xl')
        }
        //console.log(`fontsize: ${fontSize}`)

    }, [])

    return (
        <>

            <div className="gsapwrapperV bg-black-900_02" ref={containerRef} >
                <div className="gsapsectionV" key="1">
                    <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                                    <Heading
                                
                                        size={fontSize}
                                        as="h2" className="!text-gray-300 text-center">
                                        Humanity
                                    </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                </div>
                <div className="gsapsectionV" key="2">
                    <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                                <Heading size={fontSize} as="h2" className="!text-gray-300 text-center">
                                    Accountbility
                                </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                </div>
                <div className="gsapsectionV" key="3">
                    <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                                <Heading size={fontSize} as="h2" className="!text-gray-300 text-center">
                                    Governance
                                </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                </div>
                <div className="gsapsectionV" key="4">
                    <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                                <Heading size={fontSize} as="h2" className="!text-gray-300 text-center">
                                    Democratization
                                </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                </div>

            </div>

        </>
    );
}

export default GsapSection3;
