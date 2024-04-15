import React, { useCallback, useEffect, useRef, useState } from "react";
//import "./styles.css";
import { Heading } from './Heading';

import Carousel from "@itseasy21/react-elastic-carousel";

const VerticalScrollSection = () => {
    const wheeling = useRef(false);
    const wheelingTimeout = useRef(false);
    const slider = useRef(null);
    const sliderContainer = useRef(null);
    const currentIndex = useRef(0);
    const IMAGES_LENGTH = 4;

    const getNextCurrentIndex = (index) => {
        if (index === IMAGES_LENGTH) {
            return index;
        }

        return index + 1;
    };

    const getPrevCurrentIndex = (index) => {
        if (index === 0) {
            return index;
        }

        return index - 1;
    };

    const shouldPreventDefault = useCallback(({ isNext }) => {
        if (!isNext && currentIndex.current > 0) {
            return true;
        }

        if (isNext && currentIndex.current < 4) {
            return true;
        }

        return false;
    }, []);

    const scroll = useCallback(
        (e) => {
            const isNext = e.wheelDelta > 0;
            if (shouldPreventDefault({ isNext })) {
                e.preventDefault();
            }
            if (slider === null) return null;

            clearTimeout(wheelingTimeout.current);
            wheelingTimeout.current = setTimeout(function () {
                wheeling.current = false;
            }, 100);

            if (wheeling.current === true) {
                return null;
            }

            if (isNext) {
                slider.current.slideNext();
                currentIndex.current = getNextCurrentIndex(currentIndex.current);
            } else {
                slider.current.slidePrev();
                currentIndex.current = getPrevCurrentIndex(currentIndex.current);
            }
            wheeling.current = true;
        },
        [slider]
    );

    const stopWheeling = useCallback(() => {
        wheeling.current = false;
    }, []);

    useEffect(() => {
        if (!sliderContainer.current) {
            return null;
        }
        const sliderContainerCurrent = sliderContainer.current;
        sliderContainerCurrent.addEventListener("wheel", scroll, true);

        return () => {
            sliderContainerCurrent.removeEventListener("wheel", scroll, false);
        };
    }, [scroll, stopWheeling]);

    return (
        <div className="tenants-container">
            <div ref={sliderContainer} className="tenants-middle">
                <Carousel
                    onScroll={scroll}
                    //horizontalMode
                    verticalMode
                    itemsToShow={1}
                    enableSwipe={true}
                    ref={slider}
                >
                    <div className="h-[875px]  md:p-5 bg-black-900_02 relative" style={{width: '100vw'}}>
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                            <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                                Humanity
                            </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                    <div className="h-[875px] md:p-5 bg-black-900_02 relative" style={{ width: '100vw' }}>
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                            <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                                Accountbility
                            </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                    <div className="h-[875px]  md:p-5 bg-black-900_02 relative" style={{ width: '100vw' }}>
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                            <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                                Governance
                            </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                    <div className="h-[875px] md:p-5 bg-black-900_02 relative" style={{ width: '100vw' }}>
                        <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                            <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                                Democratization
                            </Heading>
                        </div>
                        <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default VerticalScrollSection;
