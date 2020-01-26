import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './blog.css'
import { Button, Icon } from 'antd';


const BlogFunction = props => (
    <div className="blogStyle">
        <div className="blogCol">
            <h3 className="blog_title_contents">{props.blogs.title}</h3>
            <p className="blog_contents">{props.blogs.content}</p>
            <img src={props.blogs.photo} alt="blogPicture" />
        </div>
    </div >
)


export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            index: 0,
            end: 4
        };
    }

    componentDidMount() {
        axios.get('/blogs/')
            .then(response => {
                let latestBlogs = response.data.reverse()
                console.log("Latest Blogs", latestBlogs);
                this.setState({ blogs: latestBlogs })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    blogList() {
        if (this.state.blogs.length > 0) {
            let { index, end, blogs } = this.state
            console.log("Index", index)
            console.log("end", end)
            const currentblog = blogs.slice(index, end)
            console.log("first blog", currentblog)
            return currentblog.map(currentblog => {
                return <BlogFunction blogs={currentblog} key={currentblog._id}
                />;
            })
        }
    }

    onClickIncrement = () => {
        this.setState((state, props) => ({
            index: state.index + 4,
            end: state.end + 4
        }));
    }

    onClickDecrement = () => {
        this.setState((state, props) => ({
            index: state.index - 4,
            end: state.end - 4
        }));
    }


    Lbutton = () => (
        <div>
            {console.log(`The value of index is  = ` + this.state.index)}
            {0 < this.state.index ? (
                <Button type="primary" onClick={this.onClickDecrement} style={{ color: "white" }}>
                    <Icon type="left" />
                    Previous
                </Button>
            ) : null}
        </div>
    )
    Rbutton = () => (
        <div>
            {console.log(`The value of end is  = ` + this.state.end + `value of blog is = ` + this.state.blogs.length)}
            {this.state.end < this.state.blogs.length ? (
                <Button type="primary" onClick={this.onClickIncrement} style={{ color: "white" }}>
                    Next
                    <Icon type="right" />
                </Button>
            ) : null}
        </div>
    )


    render() {
        return (
            <div>
                <h1 className="blogTitle" style={{ textAlign: "center", paddingBottom: "10px" }}>Blog</h1>
                <div style={{ paddingLeft: "25%", paddingRight: "25%", paddingBottom: "6vh" }}>
                    <div className="blogPad" style={{ width: "100%", paddingBottom: "2%" }}>
                        <div className="blogFlex">
                            {this.blogList()}
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: "20px" }}>
                    <div className="btnPad" style={{ paddingTop: "20px" }}>
                        {this.Lbutton()}
                        {this.Rbutton()}
                    </div>
                </div>
            </div>
        )
    }
}