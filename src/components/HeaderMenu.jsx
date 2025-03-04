import React, { useState } from "react";
import { Text, Button, Img, Heading } from "../components";
import SignupPopupModule from "pages/SignupPopup";
import SignupModule from "pages/Signup";

export default function HeaderMenu() {
    const [showSignup, setShowSignup] = useState(false);
    return (
        <div className="flex items-center pl-3">
            <div className="flex items-start gap-1">
                <Heading size="s" as="p" className="tracking-[-0.14px] text-center">
                    Products
                </Heading>
                <Img src="images/img_frame.svg" alt="image" className="h-[12px] w-[12px] mt-[3px]" />
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowSignup(true); }} className="text-blue-500 underline cursor-pointer">

                <div className="flex ml-5 p-1.5">
                    <Heading size="s" as="p" className="self-end tracking-[-0.14px] text-center">
                        Blog
                    </Heading>
                </div>
                { /*showSignup && <SignupPopupModule onClose={() => setShowSignup(false)} />*/}
                
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
            {/*showSignup && <SignupModule onClose={() => setShowSignup(false)} />*/}
        </div>
    );
}
