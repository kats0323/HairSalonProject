import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types'
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
class BlogList extends Component {
    constructor(props) {
        super(props);
        this.deleteBlog = this.deleteBlog.bind(this)
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
    deleteBlog(id) {
        axios.delete('/blogs/' + id)
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
        console.log("in blog---", this.props.isAuthenticated)
        if (!this.props.isAuthenticated) {
            console.log("UN AUTHORISED")
            return (
                <div>
                    <h1> NOT AUTHORISED</h1>
                    <a href="/admin">GO TO DASHBOARD</a>
                </div>
            )
        } else {
            return (
                <div style={{ paddingLeft: "350px" }}>
                    <h1>Blog</h1>
                    <br />
                    {this.blogList()}
                </div>
            )
        }
    }
}
BlogList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(BlogList);










