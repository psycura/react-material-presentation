import React from 'react';
import PropTypes from 'prop-types';

import CardLayout from './layouts/CardLayout'
import ListLayout from './layouts/ListLayout'



const components = {
    card : CardLayout,
    list : ListLayout
};

const DynamicSlide = ( props ) => {
    const SpecificLayout = components[ props.slide.slideTemplate ];
    return <SpecificLayout slide={props.slide}/>;
};

DynamicSlide.propTypes = {
    slide: PropTypes.object.isRequired
};

export default DynamicSlide;