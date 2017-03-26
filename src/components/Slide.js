import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

class Slide extends Component {
    
    render() {
        const {slide} = this.props;
        
        let styles = {
            cardText : {
                minHeight : '50vh',
                marginTop : 50
            }
        };
        
        if (this.props.opening) {
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
            styles.cardHeader = {
                minHeight : '30vh',
                background:`url(${slide.bgImg})`,
                backgroundPosition: 'bottom left',
                backgroundSize: 'cover'
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
                background:`url(${slide.bgImg})`,
                backgroundPosition: 'bottom left',
                backgroundSize: 'cover'

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
            <div key={slide.id}>
                <Card style={styles.card} className="card">
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
}

export default (Slide);