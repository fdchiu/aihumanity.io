
import { Text, Button, Img, Heading } from "../components";

export default function Logo() {
    return (

        <div className="flex justify-center items-center w-[22%] sm:w-full gap-[9px]">
            <Img src="images/img_television.svg" alt="television_one" className="h-[28px]" />
            <Img src="images/img_settings.svg" alt="settings_one" className="h-[26px]" />
        </div>
    );
}