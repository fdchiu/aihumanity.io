
import React, { useEffect, useMemo, useRef, useState, useLayoutEffect } from "react";
import MediaQuery from "react-responsive";
import useQuery from "hooks/useQuery"
import useIsMobile from "hooks/useIsMobile";
import PlayMov from "components/Video/PlayMov";

import { Text, Button, Img, Heading } from "../../components";

function WhySection() {
    const isMobile = useIsMobile()
    const [fontSize, setFontSize] = useState('3xl')

    useEffect(() => {
        if (isMobile) {
            setFontSize('xl')
        }
        console.log(`font: ${fontSize}`)
    },[])

    return (
        <section>
                <div className="flex flex-col items-start justify-center pl-[200px] pr-14 gap-4 py-[200px] md:p-5 bg-black-900_02">
                <Text
                    size={fontSize}
                        as="p"
                        className="mt-[31px] px-2 py-1 !text-gray-300 tracking-[-0.04px] uppercase border border-solid white_A700_1c_white_A700_1c_border bg-gradient rounded-[18px]"
                    >
                        &#123; Why AI Humanity &#125;
                    </Text>
                    <Heading size={fontSize} as="h2" className="w-[88%] md:w-full mb-[31px] !text-gray-300 leading-[120%]">
                        <span className="text-gray-300">AI Humanity champions a&nbsp;</span>
                        <span className="text-transparent bg-gradient5 bg-clip-text ">
                            human-centric AI approach that prioritizes ethical values, humanity, and societal benefits.
                        </span>
                    </Heading>
            </div>
            {/*<PlayMov/>*/}

        </section>

    );
}

export default WhySection;