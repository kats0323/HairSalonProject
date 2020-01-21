import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './blog.css'
import { Button, Icon } from 'antd';


const BlogFunction = props => (
    <tr>
        <h3>{props.blogs.title}</h3>
        <p>{props.blogs.content}</p>
        <br />
        <img src={props.blogs.photo} alt="blogPicture" />
    </tr >
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
                this.setState({ blogs: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    blogList() {
        if (this.state.blogs.length > 0) {
             var currentblog = this.state.blogs.slice(this.state.index,this.state.end).reverse()
            console.log("first blog", currentblog)
            return currentblog.map(currentblog => {
                return <BlogFunction blogs={currentblog} key={currentblog._id}
             />;
        })
        }
    }

    onClickIncrement = () =>{
        this.setState((state, props) => ({
            index: state.index +  4,
            end: state.end +  4
        }));
    }

    onClickDecrement = () =>{
        this.setState((state, props) => ({
            index: state.index -  4,
            end: state.end -  4
        }));
    }


    Lbutton = () => (
        <div> 
            {console.log(`The value of index is  = `+ this.state.index)}
            { 0 < this.state.index ? (
                <Button type="primary" onClick={this.onClickDecrement}>
                    <Icon type="left" />
                </Button>
            ):null} 
        </div>
    )
    Rbutton = () => (
        <div> 
            {console.log(`The value of end is  = `+ this.state.end + `value of blog is = ` + this.state.blogs.length)}
            {this.state.end < this.state.blogs.length ? (
                <Button type="primary" onClick={this.onClickIncrement}>
                    <Icon type="right" />
                </Button>
            ):null} 
        </div>
    )


    render() {
        const Line = ({ color }) => (
            <div class="style-line">
               <hr style={{ color: "green",border:"0.4px solid", width:"60%",}} /> 
           </div>
        );
        return (
            <div>
                <div style={{paddingLeft:"25%", paddingRight:"25%", paddingBottom:"6vh" ,paddingTop:"4vh"}}>
                    <div className="blogPad" style={{borderBottom:"1px solid",borderTop:"1px solid",width:"100%", color:"green", paddingBottom:"2%"}}>
                        <div className="blogFlex">
                            {this.blogList()}
                        </div>
                    </div>
                    <div style={{paddingTop:"20px"}}>
                        <div className="btnPad">
                            {this.Lbutton()}
                            {this.Rbutton()}
                        </div>
                    </div>
                </div>
                <Line />
            </div>
        )
    }
}