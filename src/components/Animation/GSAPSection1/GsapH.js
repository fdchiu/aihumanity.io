import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import  "./GSAPSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function GsapH() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100*(panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div ref={component}>
      <div ref={slider} className="containerHorizotal" style={{height:'100vh'}}>
      <div className="description panel blue firstContainer " style={{ height: '100vh' }}>
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      <div className="panel red" style={{ height: '100vh' }}>ONE</div>
      <div className="panel orange" style={{ height: '100vh' }}>TWO</div>
      <div className="panel purple lastContainer" style={{ height: '100vh' }}>THREE</div>
      </div>
    </div>
  );
}
