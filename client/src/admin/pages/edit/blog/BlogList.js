import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card } from "antd";
import './not_authorised.css'
import "../../partials/edit.css"



const BlogFunction = props => (

    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: "20px", color: "black" }}>Title/タイトル</p>/p>
            <p className="admin_words">{props.blogs.title}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Contents/内容</p>
            <p>{props.blogs.content}</p>
            <br />
            <img className="adminImg" src={props.blogs.photo} style={{ width: "500px", margin: "20px", height: "300px" }} alt="photo_blog" />

            <br />
            <br />
            <button><Link to={"/admin/blogs/edit/" + props.blogs._id}>Edit</Link></button>
            <br />
            <br />
            <button href="#" onClick={() => { props.deleteBlog(props.blogs._id) }}>delete</button>
            <br />
        </Card>
    </div>

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
        if (!this.props.isAuthenticated) {
            return (
                <div className='not-allowed'>
                    {/* ここだけ */}
                    <div className='cool-green-logo'>
                        <img src={process.env.PUBLIC_URL + '/img/GreenLogo.png'} alt="logo" style={{ height: "80px" }} />
                        {/* <hr className='logo-line'width="600" color="green" noshade></hr> */}
                    </div>
                    <h1 className='not-author'> NOT AUTHORISED</h1>
                    <p className='message_'>Plese logoin before you go into admin page </p>
                    <div className='dashboard_'>
                        <a href="/admin">GO TO DASHBOARD</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h1 class="admin_title_page">Blog</h1>
                    <br />
                    <br />
                    <button><Link to={"/admin/blogs/create/"}>Create</Link></button>
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
