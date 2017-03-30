import { TweenMax, TimelineMax } from "gsap";
let tl = new TimelineMax ();

const fadeIn = ( target ) => {
    return new Promise ( ( resolve ) => {
        tl.from ( target, .375, {
            opacity    : 0,
            onComplete : () => resolve ()
        } )
    } )
};

export { fadeIn };

