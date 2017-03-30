import { TweenMax, TimelineMax } from "gsap";

const transformFromPrevSlide = ( ...targets ) => {
    console.log ( 'transformFromPrevSlide start' );
    
    return new Promise ( ( resolve ) => {
        let prevElements        = [];
        let targetElements      = [];
        let dummyObjectsCurrent = [];
        let dummyObjectsTargets = [];
        let timeLines           = [];
        
        const time = .375;
        
        for ( let target of targets ) {
            for ( let key in target ) {
                switch ( key ) {
                    case 'from':
                        prevElements.push ( target[ key ] );
                        break;
                    case 'to':
                        targetElements.push ( target[ key ] );
                        break;
                    default:
                        break;
                }
            }
        }
        
        prevElements.forEach ( ( element, index ) => {
            let prevEl      = document.querySelector ( element ),
                nextEl      = document.querySelector ( targetElements[ index ] );
            let rectCurrent = prevEl.getBoundingClientRect (),
                rectNext    = nextEl.getBoundingClientRect ();
            
            let dummyCurrent = prevEl.cloneNode ( false ),
                dummyNext    = nextEl.cloneNode ( false );
            
            const wrapper = document.querySelector ( '.wrapper' );
            
            wrapper.appendChild ( dummyCurrent );
            wrapper.appendChild ( dummyNext );
            
            let styleCurrent = {
                position  : 'fixed',
                left      : rectCurrent.left,
                top       : rectCurrent.top,
                height    : rectCurrent.height,
                width     : rectCurrent.width,
                listStyle : 'none',
                opacity   : 0
            };
            
            let styleNext = {
                position  : 'fixed',
                left      : rectNext.left,
                top       : rectNext.top,
                height    : rectNext.height,
                width     : rectNext.width,
                listStyle : 'none',
                opacity   : 0
            };
            
            TweenMax.set ( dummyCurrent, styleCurrent );
            TweenMax.set ( dummyNext, styleNext );
            
            dummyObjectsCurrent.push ( dummyCurrent );
            dummyObjectsTargets.push ( dummyNext );
            
            let timeLine = new TimelineMax ();
            timeLines.push ( timeLine );
        } );
        
        timeLines.forEach ( ( tl, index ) => {
            const targetObjRect  = dummyObjectsTargets[ index ].getBoundingClientRect ();
            const currentObjRect = dummyObjectsCurrent[ index ].getBoundingClientRect ();
            const targetWidth    = targetObjRect.width,
                  targetHeight   = targetObjRect.height,
                  targetLeft     = targetObjRect.left,
                  targetTop      = targetObjRect.top,
                  currentLeft    = currentObjRect.left,
                  currentTop     = currentObjRect.top;
            
            TweenMax.to ( prevElements[ index ], time, {
                opacity : 0
            } );
            
            tl.to ( dummyObjectsCurrent[ index ], time, {
                bezier : {
                    type   : 'soft',
                    values : [
                        {
                            left   : calculation ( currentLeft, targetLeft, .3 ),
                            top    : calculation ( currentTop, targetTop, .4 ),
                            width  : targetWidth * .3,
                            height : targetHeight * .4
                        },
                        {
                            left   : calculation ( currentLeft, targetLeft, .6 ),
                            top    : calculation ( currentTop, targetTop, .8 ),
                            width  : targetWidth * .6,
                            height : targetHeight * .8
                        },
                        {
                            left   : calculation ( currentLeft, targetLeft, 1 ),
                            top    : calculation ( currentTop, targetTop, 1 ),
                            width  : targetWidth,
                            height : targetHeight
                        } ]
                }
            } )
            .to ( dummyObjectsCurrent[ index ], 0.5, {
                opacity    : 1,
                onComplete : () => {
                    console.log ( 'transformFromPrevSlide complete' );
                    resolve ();
                    
                }
            }, '-=2' );
            
            function calculation ( current, next, percent ) {
                let value = current;
                if ( current < next ) {
                    value = next * percent;
                } else if ( current > next ) {
                    value = next / percent;
                }
                return value;
            }
        } );
        
    } )
    
};

/*const firstSlideExpand = () => {
 
 const list = document.querySelector ( '.md-list' );
 const card = document.querySelector ( '.md-card' );
 const time = .375;
 
 TweenMax.to ( list, .375, {
 opacity : 0
 } );
 tl.to ( card, time, {
 bezier : {
 type   : 'soft',
 values : [
 { width : '30%', height : '40%' },
 { width : '60%', height : '80%' },
 { width : '100%', height : '100%' } ]
 }
 } )
 .to ( '.md-card-header', time, {
 backgroundColor : this.slides[ 0 ].mainColor,
 onComplete      : () => {
 this.$router.push ( '/slides' );
 }
 }, '-=.3' )
 .to ( card, 0.5, {
 opacity : 1,
 }, '-=2' );
 
 TweenMax.to ( '.button', time, {
 top       : 'auto',
 boxShadow : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
 bezier    : {
 type   : 'soft',
 values : [
 { left : '10%', bottom : '-0', width : 60, height : 60 },
 { left : '60%', bottom : '-5', width : 80, height : 80 },
 { left : '90%', bottom : '-50', width : 100, height : 100 } ]
 },
 width     : 100,
 height    : 100,
 } )
 };*/

export { transformFromPrevSlide }