import { func } from "prop-types";
import { Text, Button, Img, Heading } from "../components";

export default function SocialButtons() {
    function openPage(url) {
        //console.log(url)
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="flex justify-between w-[13%] md:w-full mr-[60px] gap-5 md:mr-0">
            <Button shape="circle" className="w-[40px] !rounded-[20px]" onClick={() => openPage('https://github.com/aihumanity-io')}>
                <Img src="images/img_user.svg" />
            </Button>
            <Button shape="circle" className="w-[40px] !rounded-[20px]" onClick={() => openPage('https://discord.gg/dE8dXppYCe')}>
                <Img src="images/img_discord.svg" />
            </Button>
            <Button shape="circle" className="w-[40px] !rounded-[20px]" onClick={() => { openPage('https://x.com/AIHumanityPro') }} >
                <Img src="images/img_airplane.svg"/>
            </Button>
    
            {/* <button 
                className="w-[40px] !rounded-[20px] flex items-center justify-center text-center cursor-pointer circle"
                onClick={function() { alert('hello') }}
            ><Img src="images/img_airplane.svg"></Img>
            </button>
    */}
        </div>
    );
}