import { TimelineMax, TweenMax } from "gsap";
let tl = new TimelineMax ();

const listSplit = ( list, listItem ) => {
    
    return new Promise ( ( resolve ) => {
        tl.to ( listItem, .175, {
            marginBottom : 40,
            boxShadow    : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        } )
        .set ( list, {
                boxShadow  : 'none',
                onComplete : () => {
                    // this.getDimensions;
                    resolve ();
                }
            }, '-=2'
        );
    } )
};

export { listSplit };