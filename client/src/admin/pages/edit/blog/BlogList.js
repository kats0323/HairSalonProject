import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogFunction = props => (
    <tr>
        <td>{props.blogs.title}</td>
        <td>{props.blogs.content}</td>
        <img src={props.blogs.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />

        <td>
            <Link to={"/admin/blogs/edit/" + props.blogs._id}>edit</Link> | <button href="#" onClick={() => { props.deleteBlog(props.blogs._id) }}>delete</button>
        </td>
    </tr >
)


export default class BlogList extends Component {
    constructor(props) {
        super(props);

        this.deleteBlog = this.deleteBlog.bind(this)

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

    deleteBlog(id) {
        axios.delete('http://localhost:5000/blogs/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            blogs: this.state.blogs.filter(el => el._id !== id)
        })
    }

    blogList() {
        return this.state.blogs.map(currentblog => {
            return <BlogFunction blogs={currentblog} deleteBlog={this.deleteBlog} key={currentblog._id} />;
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