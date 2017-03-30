import { Elastic, Expo, Power3, TimelineMax, TweenMax } from "gsap";
let tl = new TimelineMax ();

const slideIn = ( ...targets ) => {
   
    return new Promise ( ( resolve ) => {
              tl.set ( '.current', {
                  position  : 'absolute',
                  overflow  : 'hidden',
                  top       : '110%',
                  height    : '100%',
                  width     : '100%',
                  transform : 'none',
              } )
              .set ( `.current ${targets[ 1 ]}`, {
                  top    : 'auto',
                  y      : 0,
                  bottom : '-250%',
                  zIndex : 10,
              } )
              .to ( '.current', 1, {
                  top      : 0,
                  ease     : Power3.easeOut,
                  overflow : 'inherit'
              }, )
              .to ( `.current ${targets[ 1 ]}`, 1, {
                  ease       : Elastic.easeOut.config ( 1, 0.3 ),
                  bottom     : '-50',
                  onComplete : () => {
                      resolve ();
                  }
              }, '-=.2' );
          } )
      }
;

export { slideIn };