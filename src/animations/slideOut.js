import { Elastic, Expo, Power3, TimelineMax, TweenMax } from "gsap";
let tl = new TimelineMax ();

const slideOut = ( ...targets ) => {
    
    return new Promise ( ( resolve ) => {
              TweenMax.to ( `.current ${targets[0]}`, 1, {
                  ease : Expo.easeOut,
                  y    : '-400'
              } );
        
              TweenMax.to ( `.current`, 1.45, {
                  ease       : Expo.easeOut,
                  y          : '-200%',
                  delay      : .5,
                  onComplete : () => {
                      resolve ();
                  }
              } )
          } )
      }
;

export { slideOut };