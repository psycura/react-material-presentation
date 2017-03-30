import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const CardLayout = ( props ) => {
    
    const { slide } = props;
    const { card }  = slide.components.wrapper;
    const headerBg  = card.cardHeader.media ? `url('../assets/${card / cardHeader.media}')` : card.cardHeader.bgColor;
    
    const styles = {
        card : {
            width  : '100%',
            height : '100%'
        },
        
        cardHeader : {
            minHeight          : '30vh',
            backgroundPosition : 'bottom left',
            backgroundSize     : 'cover',
            position           : 'relative',
            background         : headerBg
        },
        
        button : {
            width           : '100px',
            height          : '100px',
            border          : '10px',
            zIndex          : 1,
            boxShadow       : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
            position        : 'absolute',
            left            : '90%',
            top             : '24.5vh',
            borderRadius    : '50%',
            backgroundColor : card.cardHeader.button
        },
        
        content : {
            minHeight : '50vh',
            marginTop : '8vh',
        }
    };
    
    return (
        
        <div key={slide.id}>
            <Card style={styles.card} className="card">
                <CardHeader
                    style={styles.cardHeader}
                    className="card-header"
                    title={card.cardHeader.title}
                    subtitle={card.cardHeader.subtitle}>
                    <div style={styles.button}
                         className="button">
                    </div>
                </CardHeader>
                <CardText style={styles.cardText}>
                    {card.content}
                </CardText>
            </Card>
        </div>
    );
    
};

export default CardLayout;