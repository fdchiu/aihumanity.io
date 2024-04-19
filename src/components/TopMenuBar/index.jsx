import Logo from "components/logo"
import HeaderMenu from "components/HeaderMenu";
import SocialButtons from "components/SocialButtons";

export default function TopMenuBar() {
    return (    
            
        <div className="md:h-auto bg-black-900_02  bg-cover bg-no-repeat relative">

        <div className="flex flex-col items-center w-full">
            <div className="self-stretch">
                <header>
                    <div className="flex md:flex-col justify-between items-center gap-5 p-5 border-white-A700_19 border-b-[0.5px] border-solid">
                        <div className="flex sm:flex-col justify-between items-center w-[48%] md:w-full ml-[60px] gap-5 md:ml-0">
                            <Logo />
                            <HeaderMenu />
                        </div>
                        <SocialButtons />
                    </div>
                </header>
            </div>

                </div>
    </div>
    );
}
{/*<div className="h-[875px] md:h-auto bg-black-900_02  bg-cover bg-no-repeat" >*/ }        