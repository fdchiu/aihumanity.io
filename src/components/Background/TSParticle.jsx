import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const config = {
    fullScreen: {
        zIndex: 1,
    },
    background: {
        color: "#000",
    },
    emitters: {
        position: {
            x: 50,
            y: 100,
        },
        rate: {
            quantity: 5,
            delay: 0.15,
        },
    },
    particles: {
        color: {
            value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
        },
        move: {
            decay: 0.05,
            direction: "top",
            enable: true,
            gravity: {
                enable: true,
            },
            outModes: {
                top: "none",
                default: "destroy",
            },
            speed: {
                min: 50,
                max: 100,
            },
        },
        number: {
            value: 0,
        },
        opacity: {
            value: 1,
        },
        rotate: {
            value: {
                min: 0,
                max: 360,
            },
            direction: "random",
            animation: {
                enable: true,
                speed: 30,
            },
        },
        tilt: {
            direction: "random",
            enable: true,
            value: {
                min: 0,
                max: 360,
            },
            animation: {
                enable: true,
                speed: 30,
            },
        },
        size: {
            value: 10,
            animation: {
                enable: true,
                startValue: "min",
                count: 1,
                speed: 16,
                sync: true,
            },
        },

        shape: {
            type: ["circle", "square"],
            options: {},
        },
    },
};
export default function TSParticle() {

    const particlesInit = useCallback(async (main) => {
        // here we initialize the particles animation
        console.log(main)
        await loadFull(main);
    }, []); 

    const particlesInit2 = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    return (
        <Particles
            id="tsparticle"
            //init={particlesInit2}
            options={{
            fullScreen: {
                enable: true,
                zIndex: 1
            },
            particles: {
                number: {
                    value: 200,
                    limit: 300,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "images/Ellipse33.png",
                        width: 50,
                        height: 50
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.5,
                        sync: false
                    }
                },
                size: {
                    value: 10,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 10,
                        size_min: 10,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        lineLinked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 100,
                        duration: 2,
                        opacity: 1,
                        speed: 2
                    },
                    repulse: {
                        distance: 200
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            backgroundMask: {
                enable: true,
                cover: {
                    color: {
                        value: {
                            r: 0,
                            g: 0,
                            b: 0
                        }
                    }
                }
            },
            retina_detect: true,
            fps_limit: 60,
            background: {
            image: "url('https://particles.js.org/images/background3.jpg')"
            }
        }} />
        /*<div className="particles">
            <Particles options={config} init={particlesInit} />
        </div>
        */
    );

}

