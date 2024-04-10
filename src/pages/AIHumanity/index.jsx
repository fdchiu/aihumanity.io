import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import ParticleBackground from "components/Background/particleBackground";
import Logo from "components/logo";
import HeaderMenu from "components/HeaderMenu";
import SocialButtons from "components/SocialButtons";

export default function AIHumanityPage() {
  return (
    <>
      <Helmet>
        <title>AI Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full sectionScroller" >
        <div className="h-[875px] md:h-auto bg-black-900_02 bg-[url(/public/images/img_hero.png)] bg-cover bg-no-repeat">
          <div className="h-[875px] md:h-auto bg-[url(/public/images/img_hero.png)] bg-cover bg-no-repeat relative">
            
            <div className="flex flex-col items-center w-full">
              <div className="self-stretch">
                <header>
                  <div className="flex md:flex-col justify-between items-center gap-5 p-5 border-white-A700_19 border-b-[0.5px] border-solid">
                    <div className="flex sm:flex-col justify-between items-center w-[48%] md:w-full ml-[60px] gap-5 md:ml-0">
                      <Logo/>
                      {/* <div className="flex justify-center items-center w-[22%] sm:w-full gap-[9px]">
                        <Img src="images/img_television.svg" alt="television_one" className="h-[28px]" />
                        <Img src="images/img_settings.svg" alt="settings_one" className="h-[26px]" />
                      </div>
  
                      <div className="flex items-center pl-3">
                        <div className="flex items-start gap-1">
                          <Heading size="s" as="p" className="tracking-[-0.14px] text-center">
                            Products
                          </Heading>
                          <Img src="images/img_frame.svg" alt="image" className="h-[12px] w-[12px] mt-[3px]" />
                        </div>
                        <a href="#">
                          <div className="flex ml-5 p-1.5">
                            <Heading size="s" as="p" className="self-end tracking-[-0.14px] text-center">
                              Blog
                            </Heading>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex ml-2 p-1.5">
                            <Heading size="s" as="p" className="self-end tracking-[-0.14px] text-center">
                              Whitepaper
                            </Heading>
                          </div>
                        </a>
                        <a href="#">
                          <div className="flex ml-2 p-1.5">
                            <Heading size="s" as="p" className="self-end tracking-[-0.14px] text-center">
                              Support
                            </Heading>
                          </div>
                        </a>
                      </div>
                      */}
                      <HeaderMenu/>
                    </div>

                    {/* <div className="flex justify-between w-[13%] md:w-full mr-[60px] gap-5 md:mr-0">
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
                    */}
                    <SocialButtons/>
                  </div>
                </header>
                {/* <Img
                  src="images/img__875x1440.png"
                  alt="image_one"
                  className="h-[875px] w-full md:h-auto mt-[-81px] opacity-0.22 relative object-cover font-franie"
                />
                  */}
              </div>
              <div className="flex justify-center w-[10%] md:w-full mt-[-93px] md:p-5 relative">
                <div className="flex flex-col items-center w-full mt-1.5 gap-[22px]">
                  <div className="w-[16%] md:w-full p-2.5 border-gray-900_03 border-[7px] border-solid bg-gray-900_02 rounded-[10px]">
                    <div className="h-[16px] w-[4px] mb-3 bg-blue-400 rounded-sm" />
                  </div>
                  <Heading size="xs" as="h1" className="text-center">
                    SCROLL TO EXPLORE
                  </Heading>
                </div>
              </div>
            </div>
            
            <Heading
              size="4xl"
              as="h2"
              className="w-[81%] h-max left-0 bottom-0 right-0 top-0 m-auto tracking-[-8.25px] text-center leading-[125px] absolute"
            >
              <span className="text-white-A700 font-semibold">
                <>
                  Welcome to <br />
                </>
              </span>
              <span className="text-transparent font-semibold bg-gradient5 bg-clip-text">AIHumanity&nbsp;</span>
              <span className="text-white-A700 font-semibold">Protocol</span>
            </Heading>
            <Img
              src="images/Ellipse33.png"
              alt="image_two"
              className="h-[521px] w-[31%] top-[16%] right-0 left-0 m-auto object-cover absolute"
            />
          </div>
        </div>
        <section>
        <div className="flex flex-col items-start justify-center pl-[200px] pr-14 gap-4 py-[200px] md:p-5 bg-black-900_02">
          <Text
            as="p"
            className="mt-[31px] px-2 py-1 !text-gray-300 tracking-[-0.04px] uppercase border border-solid white_A700_1c_white_A700_1c_border bg-gradient rounded-[18px]"
          >
            &#123; Why AIHumanity &#125;
          </Text>
          <Heading size="3xl" as="h2" className="w-[88%] md:w-full mb-[31px] !text-gray-300 leading-[120%]">
            <span className="text-gray-300">AIHumanity champions a&nbsp;</span>
            <span className="text-transparent bg-gradient5 bg-clip-text">
              human-centric AI approach that prioritizes ethical values, humanity, and societal benefits.
            </span>
          </Heading>
          </div>
        </section>
        <section>
        <div className="h-[875px] p-[200px] md:p-5 bg-black-900_02 relative">
          <div className="flex justify-center w-full bottom-[38%] right-0 left-0 px-[155px] m-auto md:px-5 absolute max-w-[1040px]">
            <Heading size="5xl" as="h2" className="!text-gray-300 text-center">
              Humanity
            </Heading>
          </div>
          <div className="h-[325px] w-[63%] bottom-[29%] right-0 left-0 m-auto border-black-900_7e border border-solid bg-gradient1 backdrop-opacity-[0.4] blur-[210.00px] absolute" />
          </div>
        </section>
        <section>
        <div className="flex md:flex-col justify-between items-center gap-5 p-[200px] md:p-5 bg-black-900_02">
          <div className="flex flex-col w-[65%] md:w-full gap-4 my-11">
            <div className="h-[80px] w-[40%] relative">
              <div className="flex justify-center w-[45%] bottom-[0.00px] right-[0.00px] p-[7px] m-auto border border-solid white_A700_1c_white_A700_1c_border bg-light_blue-A400 absolute rounded-[5px]">
                <Img src="images/img_.svg" alt="image_three" className="self-start h-[28px]" />
              </div>
              <Button
                color="light_blue_A700"
                size="md"
                className="left-[0.00px] top-[0.50px] m-auto tracking-[-0.04px] uppercase font-medium border border-solid white_A700_1c_white_A700_1c_border min-w-[209px] absolute rounded-[5px]"
              >
                &#123; The Solution &#125;
              </Button>
            </div>
            <Heading size="2xl" as="h2" className="!text-gray-300 leading-[120%]">
              A cutting-edge protocol ensuring AI operates with ethical standards and human values.
            </Heading>
          </div>
          <div className="h-[308px] w-[308px] md:p-5 bg-blue-200 rounded-[154px]" />
          </div>
          </section>
        <div className="flex flex-col items-center gap-[60px] p-9 sm:gap-[30px] sm:p-5 bg-black-900_02">
          <div className="flex flex-col items-start w-full mt-6 gap-4 mx-auto max-w-[1040px]">
            <Button
              size="xs"
              variant="outline"
              shape="round"
              color="white_A700_1c_white_A700_1c"
              className="tracking-[-0.04px] uppercase font-medium min-w-[186px]"
            >
              &#123; Ecosystem &#125;
            </Button>
            <Heading size="lg" as="h2" className="!text-gray-300 leading-[140%]">
              AIHumanity ecosystem through the DePin subsystem, AI Accountability protocol, and DeSci subsystem combined
              with $AIH token incentives, aims at promoting the democratization of AI and providing the best way to
              handle the relationship between AI and humans.
            </Heading>
          </div>
          <div className="h-[531px] w-[56%] relative">
            <div className="flex flex-col items-end w-full h-max left-0 bottom-0 right-0 top-0 m-auto md:p-5 absolute max-w-[755px]">
              <div className="flex md:flex-col self-stretch items-start">
                <div className="flex justify-center w-[14%] md:w-full mt-[190px] p-[11px] z-[1] rotate-[43deg] border border-solid gray_900_04_gray_900_06_border bg-gradient3 rounded">
                  <Img src="images/img_googlecloud.svg" alt="googlecloud_one" className="h-[55px]" />
                </div>
                <div className="flex items-start md:self-stretch ml-[-97px] md:ml-0 relative flex-1">
                  <div className="h-[478px] pb-16 px-16 md:pb-5 md:px-5 flex-1 relative rounded-[14px]">
                    <Img
                      src="images/img_group_33842.png"
                      alt="image_four"
                      className="h-[79px] w-[20%] bottom-[39%] right-0 left-0 m-auto object-cover absolute"
                    />
                    <div className="flex bottom-[17%] right-0 left-0 p-6 m-auto sm:p-5 border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_adobe.svg" alt="adobe_one" className="h-[30px]" />
                    </div>
                    <div className="flex justify-center w-[20%] bottom-[42%] left-[19%] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_evernote.svg" alt="evernote_one" className="h-[55px]" />
                    </div>
                    <Img
                      src="images/img_group_33829.png"
                      alt="image_five"
                      className="h-[78px] w-[20%] bottom-[19%] left-[19%] m-auto object-cover absolute"
                    />
                    <div className="flex justify-center w-[20%] top-[22%] right-0 left-0 p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_figma.svg" alt="figma_one" className="h-[55px]" />
                    </div>
                    <div className="flex justify-center w-[20%] top-[0.00px] right-0 left-0 p-[11px] m-auto rotate-[43deg] border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_apple.svg" alt="apple_one" className="h-[55px]" />
                    </div>
                    <div className="flex justify-center w-[20%] left-[19%] top-[20%] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_azure.svg" alt="azure_one" className="h-[55px]" />
                    </div>
                    <div className="flex justify-center w-[20%] bottom-[14%] right-[20%] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_aws.svg" alt="aws_one" className="h-[55px]" />
                    </div>
                    <div className="flex justify-center w-[20%] right-[20%] top-[24%] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_box.svg" alt="box_one" className="h-[55px]" />
                    </div>
                    <div className="flex justify-center w-[20%] bottom-[37%] right-[20%] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_dropbox.svg" alt="dropbox_one" className="h-[55px]" />
                    </div>
                    <div className="flex justify-center w-[20%] right-[19%] top-[5.09px] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
                      <Img src="images/img_dropbox.svg" alt="dropbox_three" className="h-[55px]" />
                    </div>
                    <Img
                      src="images/img_group_33841.svg"
                      alt="image_six"
                      className="h-[96px] bottom-[27%] left-[29%] m-auto absolute"
                    />
                    <Img
                      src="images/img_group_33847.svg"
                      alt="image_seven"
                      className="h-[97px] bottom-[24%] right-[29%] m-auto absolute"
                    />
                    <Img
                      src="images/img_group_33843.svg"
                      alt="image_eight"
                      className="h-[96px] right-[29%] bottom-0 top-0 my-auto absolute"
                    />
                    <Img
                      src="images/img_group_33843.svg"
                      alt="image_nine"
                      className="h-[97px] left-[29%] top-[30%] m-auto absolute"
                    />
                    <Img
                      src="images/img_group_33843.svg"
                      alt="image_ten"
                      className="h-[96px] left-[29%] top-[8%] m-auto absolute"
                    />
                    <Img
                      src="images/img_group_33847.svg"
                      alt="image_eleven"
                      className="h-[97px] right-[28%] top-[10%] m-auto absolute"
                    />
                  </div>
                  <div className="flex justify-center w-[14%] mt-[127px] ml-[-92px] p-[11px] z-[1] relative border border-solid gray_900_04_gray_900_06_border bg-gradient3 rounded">
                    <Img src="images/img_evernote.svg" alt="evernote_three" className="h-[55px]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-[20%] md:w-full mt-[-32px] mr-[163px] p-[11px] md:mr-0 z-[1] relative border border-solid gray_900_04_gray_900_06_border bg-gradient3 rounded">
                <Img src="images/img_close.svg" alt="close_one" className="h-[55px]" />
              </div>
            </div>
            <div className="flex justify-center w-[15%] h-max right-[3.59px] bottom-0 top-0 p-[11px] my-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
              <Img src="images/img_close.svg" alt="close_three" className="h-[55px]" />
            </div>
            <div className="flex justify-center w-[15%] bottom-[6%] left-[21%] p-[11px] m-auto rotate-[43deg] border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
              <Img src="images/img_apple.svg" alt="apple_three" className="h-[55px]" />
            </div>
            <div className="flex justify-center w-[15%] bottom-[24.00px] right-0 left-0 p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
              <Img src="images/img_zoom.svg" alt="zoom_one" className="h-[55px]" />
            </div>
            <div className="flex justify-center w-[15%] bottom-[19%] right-[2.00px] p-[11px] m-auto border border-solid gray_900_04_gray_900_06_border bg-gradient3 absolute rounded">
              <Img src="images/img_azure.svg" alt="azure_three" className="h-[55px]" />
            </div>
            <div className="flex md:flex-col justify-center items-center w-full h-max left-0 bottom-0 right-0 top-0 m-auto absolute md:relative">
              <div className="flex self-end justify-center w-[13%] md:w-full mb-[153px] p-[11px] border border-solid gray_900_04_gray_900_06_border bg-gradient3 rounded">
                <Img src="images/img_box.svg" alt="box_three" className="h-[55px]" />
              </div>
              <div className="md:self-stretch h-[531px] ml-[-114px] md:ml-0 relative bg-gradient4 flex-1 rounded-[13px]" />
            </div>
            <Img
              src="images/img_group_33847.svg"
              alt="image_twelve"
              className="h-[98px] bottom-[29%] right-[9%] m-auto absolute"
            />
            <Img
              src="images/img_group_33847.svg"
              alt="image_thirteen"
              className="h-[98px] right-[8%] top-[11%] m-auto absolute"
            />
            <Img
              src="images/img_group_33847.svg"
              alt="image_fourteen"
              className="h-[97px] right-[9%] top-[32%] m-auto absolute"
            />
            <Img
              src="images/img_group_33847.svg"
              alt="image_fifteen"
              className="h-[97px] bottom-[16%] left-[8%] m-auto absolute"
            />
            <Img
              src="images/img_group_33841.svg"
              alt="image_sixteen"
              className="h-[96px] left-[10%] top-1/4 m-auto absolute"
            />
            <Img
              src="images/img_group_33841.svg"
              alt="image_seventeen"
              className="h-[96px] bottom-[8%] right-[9%] m-auto absolute"
            />
            <Img
              src="images/img_group_33847.svg"
              alt="image_eighteen"
              className="h-[97px] bottom-[36%] left-[9%] m-auto absolute"
            />
            <Img
              src="images/img_group_33847.svg"
              alt="image_nineteen"
              className="h-[96px] bottom-[14%] left-[30%] m-auto absolute"
            />
            <Img
              src="images/img_group_33851.svg"
              alt="image_twenty"
              className="h-[96px] bottom-[11%] right-[30%] m-auto absolute"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[100px] px-14 py-20 md:gap-[75px] md:p-5 sm:gap-[50px] bg-black-900_02">
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
                  <Text as="p" className="!font-light italic">
                    /01
                  </Text>
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
                  <Text as="p" className="!font-light italic">
                    /02
                  </Text>
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
                  <Text as="p" className="!font-light italic">
                    /03
                  </Text>
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
          <div className="flex flex-col justify-center w-full gap-6 p-8 mx-auto md:p-5 border-[0.5px] border-solid gray_50_gray_50_00_border bg-gradient2 max-w-5xl rounded-[12px]">
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
        <footer className="flex sm:flex-col justify-between items-center gap-5 p-20 md:p-5 bg-black-900_02">
          <div className="flex flex-col w-[26%] sm:w-full ml-10 gap-6 md:ml-0">
            <div className="flex items-center w-[44%] md:w-full gap-[9px]">
              <Img src="images/img_television.svg" alt="television_five" className="h-[28px]" />
              <Img src="images/img_settings.svg" alt="settings_three" className="h-[26px]" />
            </div>
            <Text size="xs" as="p" className="!text-white-A700 !font-manrope leading-[140%]">
              <>
                San Francisco Bay, USA
                <br />
                Email: support@creataai.com
                <br />
                Phone: +1 408 xxx xxxx (masked)
              </>
            </Text>
          </div>
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
              Copyright © AIHumanityProtocol 2024
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
