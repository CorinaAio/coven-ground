import AwesomeSlider from 'react-awesome-slider';
import "./styles.scss";

import React from "react";

const ImageGallery = (props) => {
  const {images } = props;

  if(!images) return null;

  return (
    <AwesomeSlider selected={0}>
        {images.map(image => <div data-src={image.fluid.src} />)}
  </AwesomeSlider>
  )
};

export default ImageGallery;
