import { TimelineMax } from "gsap";
let tl = new TimelineMax ();

const listSplit = ( { duration, delay, target } ) => {

    return new Promise ( ( resolve ) => {
        tl.to ( `${target} .list-item`, duration, {
            delay,
            marginBottom : 40,
            boxShadow    : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        } )
        .set ( target, {
                boxShadow  : 'none',
                onComplete : () => {
                    resolve ();
                }
            }, '-=2'
        );
    } )
};

export { listSplit };