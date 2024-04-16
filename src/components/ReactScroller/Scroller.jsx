import React, { useState, useMemo } from 'react';
import './Scroller.module.css'
import { Img, Text } from 'components';

export default function Scroller() {
    const [titleText, setTitleText] = useState('Page 1')
    const titles = useMemo(() => {
        return ['Page 1', 'Page2', 'Page3']
    })
    const [indexCurrent, setIndex] = useState(0)
    const [top, setTop] = useState(0)

    const handleScroll = (event) => {
        const container = event.target;
        setTop(top + event.deltaY)
        const scrollAmount = event.deltaY;
        console.log(`${scrollAmount}`)
        if (scrollAmount > 10) {
            if (indexCurrent == titles.length-1) {
                setIndex(0)
                //return
            } else {
                setIndex(indexCurrent+1)
            }
            setTitleText(titles[indexCurrent])
        } else if(scrollAmount <= -10 ){
            if (indexCurrent == 0) {
                //return
                setIndex(0)
            } else {
                setIndex(indexCurrent - 1)
            }
            setTitleText(titles[indexCurrent])

        }
        
        container.scrollTo({
            top: 0,
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="container bg-black-900_02" onWheel={handleScroll}>
                <div className="item">
                <Img src='images/page_test.jpg' />
                    <Text as={'h1'} size='40' color='white'>{titleText}</Text>
                </div>
        </div >
    );
}
