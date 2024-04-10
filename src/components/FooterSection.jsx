import { Text, Button, Img, Heading } from "../components";
import SocialButtons from "./SocialButtons";

export default function FooterSection() {
    return (
        <footer className="flex sm:flex-col justify-between items-center gap-5 p-20 md:p-5 bg-black-900_02">
            <div className="flex flex-col w-[26%] sm:w-full ml-10 gap-6 md:ml-0">
                <div className="flex items-center w-[44%] md:w-full gap-[9px]">
                    <Img src="images/img_television.svg" alt="television_five" className="h-[28px]" />
                    <Img src="images/img_settings.svg" alt="settings_three" className="h-[26px]" />
                </div>
                <Text size="xs" as="p" className="!text-white-A700 !font-manrope leading-[140%]">
                    <>
                        San Francisco Bay Area, USA
                        <br />
                        Email: support@creataai.com
                        <br />
                        Phone: +1 408 xxx xxxx (masked)
                    </>
                </Text>
            </div>
            <SocialButtons />
            {/*
          <div className="flex flex-col items-end w-[18%] sm:w-full mr-10 gap-[46px] md:mr-0">
            <div className="flex justify-between w-[80%] md:w-full gap-5">
              <Button shape="circle" className="w-[40px] !rounded-[20px]">
                <Img src="images/img_user.svg" />
              </Button>
              <Button shape="circle" className="w-[40px] !rounded-[20px]">
                <Img src="images/img_discord.svg" />
              </Button>
              <Button shape="circle" className="w-[40px] !rounded-[20px]">
                <Img src="images/img_airplane.svg" />
              </Button>
            </div>
            <Text size="xs" as="p" className="!text-white-A700 !font-manrope">
              Copyright © AI Humanity Protocol 2024
            </Text>
          </div>
*/}
        </footer>
    );
}
