
import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import useIsMobile from "hooks/useIsMobile";

import { Text, Button, Img, Heading } from "../../components";

/*
* not working
*/

function HeroSection() {
    const isMobile = useIsMobile()
    const [fontSize, setFontSize] = useState('4xl')

    useEffect(() => {
        if (isMobile) {
            setFontSize('4xl')
        }
        console.log(`font: ${fontSize}`)
    }, [])

    return (
        <section>
            <div className="h-[875px] md:h-auto bg-black-900_02  bg-cover bg-no-repeat" >
                <div className="h-[875px] md:h-auto  bg-cover bg-no-repeat relative">
                        <Heading
                            size={fontSize}
                            as="h2"
                            className="w-[81%] h-max left-0 bottom-0 right-0 top-0 m-auto tracking-[-8.25px] text-center leading-[125px] absolute"
                        >
                            <span className="text-white-A700 font-semibold">
                                <>
                                    Welcome to <br />
                                </>
                            </span>
                            <span className="text-transparent font-semibold bg-gradient5 bg-clip-text">AI Humanity&nbsp;</span>
                            <span className="text-white-A700 font-semibold">Protocol</span>
                        </Heading>

                    {/*} <canvas id="scene" /> */}
                    <Scene ref={particleElement} />

                </div>
                {
                    showScrollHint ?
                        <ScrollHint />
                        : <>
                        </>
                }
            </div>
        </section>
    );
}

export default HeroSection;