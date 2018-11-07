import React from 'react';
import GifItem from './GifItem';

//var GifList = function(props) => {}
//We are looping through a set of gifitem component passing down from setState
//and we render them with gifItems component
const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id}
                    gif={image}
                    onGifSelect={props.onGifSelect}/>
  });

  return (
    <div className="gif-list">{gifItems}</div>
  );
};

export default GifList;
