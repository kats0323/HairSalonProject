import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import axios from 'axios';
import './gallery.css'


const PhotoFunction = props => (

    <tr>

        <img src={props.photos.photo} style={{ width: "400px", margin: "20px", height: "300px", cursor: "pointer" }} class="photos_pg"
            onClick={
                props.popup_open
            } />

    </tr >

)


export default class PhotoGallery extends Component {
    constructor(props) {
        super(props);


        this.state = { photos: [] };
    }

    componentDidMount() {
        axios.get('/photos/')
            .then(response => {
                this.setState({ photos: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    popup_open(e) {
        let popupContent = document.querySelector(".popup-content");
        let popup_wrapper = document.querySelector(".popup-wrapper");
        let photoData = e.target.src
        console.log(photoData)
        popupContent.innerHTML = '<img src=' + photoData + ' >'
        popup_wrapper.style.display = "block"
    }

    popupClose() {
        let popup_wrapper = document.querySelector(".popup-wrapper");
        popup_wrapper.style.display = "none"
    }
    photoList() {
        return this.state.photos.map(currentphoto => {
            return <PhotoFunction photos={currentphoto} key={currentphoto._id} popup_open={this.popup_open} />;
        })
    }

    render() {
        const ColoredLine = ({ color }) => (
            <hr style={{ color: "gray", border: "2px dashed" }} />
        );


        return (
            <div id="popup" >
                <div id="popup_background">
                    <div>
                        <h1 class="title-gallery-center">PhotoGallery</h1>
                        <ColoredLine />
                        <Row type="flex" justify="start" >
                            {this.photoList()}
                        </Row>
                        <div class="popup-wrapper">
                            <div class="popup">
                                <div class="popup-close" onClick={this.popupClose}>X</div>
                                <div class="popup-content"  ></div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
