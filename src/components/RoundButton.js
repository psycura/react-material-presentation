import React, {Component} from 'react';

class RoundButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles={
            button : {
                width           : this.props.size,
                height          : this.props.size,
                borderRadius    : '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                border          : 10,
                zIndex          : 1,
                boxShadow       : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
                backgroundColor: 'red'
            }
        };
        return (
          <div className="RoundButton"
               style={styles.button}>
          </div>
        );
    }
}

export default RoundButton;