import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Heading } from './Heading';

function CarouselSection() {
    const carousel = useRef()

    function onScroll() {
            console.log("onscroll")
        }
        return (
            <Carousel style={{ overflowY: 'scroll' }} axis="vertical"
                showIndicators={false} showArrows={false} showThumbs={false} autoPlay={true}
                emulateTouch={true}
                verticalSwipe={'standard'}
                preventMovementUntilSwipeScrollTolerance={true} and swipeScrollTolerance={50}
                onScroll={onScroll}
                infiniteLoop={true}
                stopOnHover={false}
                showStatus={false}
                swipeable={true}
                transitionTime={2000}
                ref={carousel}
            >
                <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                    <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                        <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                            Humanity
                        </Heading>
                    </div>
                    <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                </div>
                <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                    <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                        <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                            Accountbility
                        </Heading>
                    </div>
                    <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                </div>
                <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                    <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                        <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                            Governance
                        </Heading>
                    </div>
                    <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                </div>
                <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
                    <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
                        <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
                            Democratization
                        </Heading>
                    </div>
                    <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
                </div>
            </Carousel>
        );
    }
export default CarouselSection
