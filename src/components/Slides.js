import React, {Component} from 'react';
import slides from '../data/slides';
import Slide from '../components/Slide';


class Slides extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slides : slides,
        }
    }
    
    render() {
        const slideId = this.props.params.slideId;
        
        return (
          <div className="Slides">
              <Slide id={slideId}/>
              <p> </p>
          </div>
        );
    }
}

export default Slides;