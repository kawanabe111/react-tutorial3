import React from 'react';
import { useState } from "react";

export default function App() {
  const [displayedImageSrc, setDisplayedImageSrc] = useState( "images/pic1.jpg");
  const [displayedImageAlt, setDisplayedImageAlt] = useState( "Closeup of a human eye");
  const [imageColor, setImageColor] = useState("lighten");
    var images = [
      {
        "src": "images/pic1.jpg",
        "alt": "Closeup of a human eye"
      },
      {
        "src": "images/pic2.jpg",
        "alt": "Rock that looks like a wave"
      },
      {
        "src": "images/pic3.jpg",
        "alt": "Purple and white pansies"
      },
      {
        "src": "images/pic4.jpg",
        "alt": "Section of wall from a pharoah's tomb"
      },
      {
        "src": "images/pic5.jpg",
        "alt": "Large moth on a leaf"
      }
    ];
    function imageClick(src, alt){
      setDisplayedImageSrc(src);
      setDisplayedImageAlt(alt);
    }
    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img" >
          <img
            className="displayed-img"
            src={displayedImageSrc}
            alt={displayedImageAlt}
          />
          <div className={ imageColor === "darken" ? 'overlay' : '' }></div>
          {imageColor === "lighten" && <button className="dark" onClick={() => setImageColor("darken")} >Darken</button> }
          {imageColor === "darken" && <button className="light" onClick={() => setImageColor("lighten")} >lighten</button> }
        </div>
        
        <div className="thumb-bar">
          {images.map((images) => {
            return (
              <img key={images.src} src={images.src} alt={images.alt} onClick={() => imageClick(images.src, images.alt)}/>
            );
          })}
        </div>
      </>
    );
  }