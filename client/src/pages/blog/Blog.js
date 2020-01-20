import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './blog.css'
import { Button, Icon } from 'antd';


const BlogFunction = props => (
    <tr>
        <h2>{props.blogs.title}</h2>
        <h4>{props.blogs.content}</h4>
        <br />
        <img src={props.blogs.photo} style={{ width: "95%", margin: "20px", height: "300px" }} />
    </tr >
)


export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: [] };
    }

    componentDidMount() {
        axios.get('/blogs/')
            .then(response => {
                this.setState({ blogs: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    blogList() {
        return this.state.blogs.map(currentblog => {
            return <BlogFunction blogs={currentblog} key={currentblog._id} />;
        })
    }

    render() {
        const Line = ({ color }) => (
            <div class="style-line">
               <hr style={{ color: "green",border:"0.4px solid", width:"100%",}} /> 
           </div>
        );
        return (
            <div className="blogPad">
                <Line />
                <div className="blogFlex">
                    <h1>Blog</h1>
                </div>
                <div className="blogFlex">
                    {this.blogList()}
                </div>
                
                <div className="btnPad">
                    <Button type="primary">
                        <Icon type="left" />
                    </Button>
                    <Button type="primary">
                        <Icon type="right" />
                    </Button>
                </div>
                <Line />
            </div>
        )
    }
}