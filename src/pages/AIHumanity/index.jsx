import React, { useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import { gsap, Elastic } from "gsap/gsap-core";
import ParticleBackground from "components/Background/ParticleBackground";
import Logo from "components/logo";
import HeaderMenu from "components/HeaderMenu";
import SocialButtons from "components/SocialButtons";
import FooterSection from "components/FooterSection";
import TSParticle from "components/Background/TSParticle";
import Scene from "components/Background/ParticleShaders";


export default function AIHumanityPage() {
  /*const canvas = useMemo(() => document.getElementById("scene")
  , [])
  
  const ctx = useMemo(() => (
    canvas !== null && canvas != undefined?canvas.getContext("2d"):null
  ), canvas)

  const particles = useMemo()

  const render = function () {
    requestAnimationFrame(render);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0, j = particles.length; i < j; i++) {
      const particle = particles[i];
      ctx.fillRect(particle.x1 * 6, particle.y1 * 6, 3, 3);
    }
  };

  function drawScene(png) {
    //const canvas = document.getElementById("scene");
    //const ctx = canvas.getContext("2d");

    canvas.width = png.width * 6;
    canvas.height = png.height * 6;

    ctx.drawImage(png, 0, 0);

    const data = ctx.getImageData(0, 0, png.width, png.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    for (let y = 0, y2 = data.height; y < y2; y++) {
      for (let x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
          const particle = {
            x0: x,
            y0: y,
            x1: png.width / 2,
            y1: png.height / 2,
            speed: Math.random() * 4 + 2
          };
          gsap.to(particle, {
            duration: particle.speed,
            x1: particle.x0,
            y1: particle.y0,
            delay: y / 30,
            ease: Elastic.easeOut
          });
          particles.push(particle);
        }
      }
    }

    requestAnimationFrame(render);
  }
  */
  function drawScene(png) {
    const canvas = document.getElementById("scene");
    const ctx = canvas.getContext("2d");


    canvas.width = png.width * 4;
    canvas.height = png.height * 4;

    ctx.drawImage(png, 0, 0);

    const data = ctx.getImageData(0, 0, png.width, png.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const particles = [];
    for (let y = 0, y2 = data.height; y < y2; y++) {
      for (let x = 0, x2 = data.width; x < x2; x++) {
        if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
          const particle = {
            x: x,
            y: y,
            color: "hsl(" + (x * 3.6) + ",50%,50%)"
          };
          particles.push(particle);
        }
      }
    }

    for (let i = 0, j = particles.length; i < j; i++) {
      const particle = particles[i];
      ctx.fillStyle = particle.color;
      ctx.fillRect(particle.x * 4, particle.y * 4, 2, 2);
    }

  }

  useEffect(() => {
    //canvas = document.getElementById("scene");
    //ctx = canvas.getContext("2d");
    const png = new Image();
    png.src = "images/Ellipse33.png"
    //png.src = "data:image/png;base64,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";
    //png.onload = drawScene(png);
  })

  return (
    <>
      <Helmet>
        <title>AI Humanity</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full sectionScroller" >
        <section>
        <div className="h-[875px] md:h-auto bg-black-900_02  bg-cover bg-no-repeat">
          <div className="h-[875px] md:h-auto  bg-cover bg-no-repeat relative">
            
            <div className="flex flex-col items-center w-full">
              <div className="self-stretch">
                <header>
                  <div className="flex md:flex-col justify-between items-center gap-5 p-5 border-white-A700_19 border-b-[0.5px] border-solid">
                    <div className="flex sm:flex-col justify-between items-center w-[48%] md:w-full ml-[60px] gap-5 md:ml-0">
                      <Logo/>
                      <HeaderMenu/>
                    </div>
                    <SocialButtons/>
                  </div>
                </header>
                {/*<Img
                  src="images/img__875x1440.png"
                  alt="image_one"
                  className="h-[875px] w-full md:h-auto mt-[-81px] opacity-0.22 relative object-cover font-franie"
  />*/}
                  {/*  <ParticleBackground/>
                  <TSParticle/> 
<Scene /> */}
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
              <span className="text-transparent font-semibold bg-gradient5 bg-clip-text">AI Humanity&nbsp;</span>
              <span className="text-white-A700 font-semibold">Protocol</span>
            </Heading>
              {/* <Img
              src="images/Ellipse33.png"
              alt="image_two"
              className="h-[521px] w-[31%] top-[16%] right-0 left-0 m-auto object-cover absolute"
/> */}              
              {/*} <canvas id="scene" /> */}
              <Scene /> 

          </div>
          <div style={{ maxWidth: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }}>
            
          
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
          </div>
        </section>
        <section>
        <div className="flex flex-col items-start justify-center pl-[200px] pr-14 gap-4 py-[200px] md:p-5 bg-black-900_02">
          <Text
            as="p"
            className="mt-[31px] px-2 py-1 !text-gray-300 tracking-[-0.04px] uppercase border border-solid white_A700_1c_white_A700_1c_border bg-gradient rounded-[18px]"
          >
            &#123; Why AI Humanity &#125;
          </Text>
          <Heading size="3xl" as="h2" className="w-[88%] md:w-full mb-[31px] !text-gray-300 leading-[120%]">
            <span className="text-gray-300">AI Humanity champions a&nbsp;</span>
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
              AI Humanity ecosystem through the DePin subsystem, AI Accountability protocol, and DeSci subsystem combined
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
      <FooterSection/>
      </div>
    </>
  );
}
