import Lenis from "@studio-freight/lenis";
import { raf } from "@studio-freight/tempus";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";

const state = {
    top: 0,
    progress: 0,
};

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(false);

export let lenis;

export default function Scroll({ children }) {
    const content = useRef < HTMLDivElement > (null);

    const { pathname } = useLocation();

    useEffect(() => {
        lenis = new Lenis({
            duration: 1.2,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 1,
            infinite: false,
            mouseMultiplier: 0.8
        });

        lenis.on(
            "scroll",
            ({ scroll, progress }) => {
                state.top = scroll;
                state.progress = progress;
                ScrollTrigger.update();
            }
        );
        const effect = raf.add(time => {
            lenis.raf(time);
        });

        return () => {
            raf.remove(effect);
            lenis.destroy();
        };
    }, [pathname]);

    useEffect(() => {
        lenis &&
            lenis.scrollTo(".scroll-magnet", {
                offset: 0,
                duration: 0.1,
                easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });

        window.scrollTo(0, 0)
    }, [pathname]);

    return (
        <div
            ref={content}
            style={{
                position: "relative",
                minHeight: "fit-content",
            }}
        >
            {children}
        </div>
    );
}
