import React, { Component } from "react";
import './gallery.css'



class PhotoGallery extends Component {
      
    
    render() {
         const ColoredLine = ({ color }) => (
            <hr style={{ color: "gray",border:"2px dotted" }} /> 
         );
       
        return (
            <div>
                <h1 class="title-gallery-center">PhotoGallery</h1>
                
                    <ColoredLine />

            </div>
        );
    };
};

export default PhotoGallery;