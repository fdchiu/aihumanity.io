import { Text, Button, Img, Heading } from "../components";

export default function HeaderMenu() {
    return (
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
    );
}
