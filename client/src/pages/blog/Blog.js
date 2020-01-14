import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogFunction = props => (
    <tr>
        <h2>{props.blogs.title}</h2>
        <h4>{props.blogs.content}</h4>
        <br />
        <img src={props.blogs.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />
    </tr >
)


export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = { blogs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/blogs/')
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
        return (
            <div style={{ paddingLeft: "350px" }}>
                <h1>Blog</h1>
                <br />
                {this.blogList()}
            </div>
        )
    }
}