import React, {Component} from 'react';
import slides from '../data/slides';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {TweenMax, TimelineMax, Back, Expo, Elastic, Power3} from "gsap";
import {browserHistory} from 'react-router';


let tl = new TimelineMax();


class Slide extends Component {
    constructor(props, context) {
        super(props, context);
        const {slideId}=props.params || props;
        this.state     = {
            slide   : slides[slideId - 1],
            slideId : slideId
        };
    }
    
    componentWillReceiveProps(nextProps) {
        const {slideId:prevId} = this.props.params;
        const {slideId:nextId} = nextProps.params;
        if (prevId !== nextId) {
            let slideNextId = +nextId - 1;
            this.setState({
                slide   : slides[slideNextId],
                slideId : nextId
            });
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.params);
        if (this.props.params) {
            this.slideIn();
        }
    }
    
    
    componentDidMount() {
        console.log('componentDidMount', this.state.slide.id);
        if (this.state.slide.id < 2) {
            tl.set('.card', {
                position  : 'absolute',
                overflow  : 'hidden',
                left      : 0,
                top       : 0,
                height    : this.props.height,
                width     : this.props.width,
                transform : 'none',
            })
        } else {
            this.slideIn();
        }
    }
    
    
    
    nextSlide = () => {
        if (this.state.slideId < 2) {
            this.firstSlideExpand()
        } else {
            this.slideOut()
        }
    };
    
    render() {
        const {slide} = this.state;
        
        let styles = {
            cardText : {
                minHeight : '50vh',
                marginTop : 50
            }
        };
        
        if (this.state.slide.id === 1) {
            styles.button     = {
                width           : 40,
                height          : 40,
                borderRadius    : '50%',
                border          : 10,
                zIndex          : 1,
                position        : 'absolute',
                backgroundColor : slide.secondaryColor,
                top             : 16
            };
            styles.card       = {
                opacity : 0
            };
            styles.cardHeader = {
                minHeight : '30vh',
                
            }
        } else {
            styles.card       = {
                opacity : 1,
                width   : '100%',
                height  : '100%'
            };
            styles.cardHeader = {
                backgroundColor : slide.mainColor,
                minHeight       : '30vh',
            };
            styles.button     = {
                width           : 100,
                height          : 100,
                border          : 10,
                zIndex          : 1,
                boxShadow       : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
                position        : 'absolute',
                backgroundColor : slide.secondaryColor,
                bottom          : '-50px',
                right           : '5%',
                borderRadius    : '50%'
            }
        }
        return (
            <div style={styles.root} onClick={this.nextSlide} key={slide.id}>
                <Card style={styles.card}
                      className="card">
                    <CardHeader
                        style={styles.cardHeader}
                        className="card-header">
                        <div style={styles.button}
                             className="button">
                        </div>
                    </CardHeader>
                    <CardText style={styles.cardText}>
                        {slide.content}
                    </CardText>
                </Card>
            
            </div>
        );
    }
    
    firstSlideExpand = () => {
        TweenMax.to('.list', .375, {
            opacity : 0
        });
        tl.to('.card', .375, {
            bezier     : {
                type   : 'soft',
                values : [
                    {width : '30%', height : '40%'},
                    {width : '60%', height : '80%'},
                    {width : '100%', height : '100%'}]
            },
            onComplete : () => {
                this.setState({
                    slideId : ++this.state.slideId
                });
            }
        })
        .to('.button', .375, {
            top       : 'auto',
            boxShadow : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
            bezier    : {
                type   : 'soft',
                values : [
                    {right : '80%', bottom : '-0', width : 60, height : 60},
                    {right : '60%', bottom : '-5', width : 80, height : 80},
                    {right : '5%', bottom : '-50', width : 100, height : 100}]
            },
            width     : 100,
            height    : 100,
        }, '-=.375')
        .to('.card-header', .375, {
            backgroundColor : this.state.slide.mainColor
        }, '-=.3')
        .to('.card', 0.5, {
            opacity : 1,
            
        }, '-=2');
    };
    
    slideIn = () => {
        tl.set('.card', {
            position  : 'absolute',
            overflow  : 'hidden',
            top       : '110%',
            height    : '100%',
            width     : '100%',
            transform : 'none',
        })
        .set('.button', {
            bottom : '-240%'
        })
        .to('.card', 1, {
            top  : 0,
            ease : Power3.easeOut,
        }).to('.button', 1, {
            ease   : Elastic.easeOut.config(1, 0.3),
            bottom : '-50'
        }, '-=.2')
    };
    
    slideOut = () => {
        TweenMax.to('.button', 1, {
            ease : Expo.easeOut,
            y    : '-400'
        });
        TweenMax.to('.card', 1, {
            ease       : Expo.easeOut,
            y          : '-200%',
            delay      : .5,
            onComplete : () => this.urlRedirect()
        })
    };
    
    urlRedirect = () => {
        browserHistory.push(`/slides/${this.state.slide.id + 1}/`);
    }
}

export default (Slide);