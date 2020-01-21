import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import './not_authorised.css'
import './author.respon.css'


const BlogFunction = props => (
    <tr>
        <td>{props.blogs.title}</td>
        <td>{props.blogs.content}</td>
        <img src={props.blogs.photo} style={{ width: "500px", margin: "20px", height: "300px" }} alt="blogphoto" />
        <td>
            <button href="#" onClick={() => { props.deleteBlog(props.blogs._id) }}>delete</button>
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
