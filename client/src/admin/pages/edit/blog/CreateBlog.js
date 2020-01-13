import React, { Component } from 'react';
import axios from 'axios';

export default class CreateBlog extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onPhotoChange = this.onPhotoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: '',
            photo: ''
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    onPhotoChange(e) {
        this.setState({ photo: e.target.files[0] })
    }
    onSubmit(e) {
        e.preventDefault()
        const blog = {
            title: this.state.title,
            content: this.state.content,
            photo: this.state.photo
        }



        // formData.append('photo', this.state.photo)
        axios.post("http://localhost:5000/blogs/add", blog).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="container" style={{ paddingLeft: "200px" }}>
                <div className="row">
                    <form action="http://localhost:5000/blogs/add" method="POST" enctype="multipart/form-data" >
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                        <div className="form-group">
                            <label>Content: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="content"
                                value={this.state.content}
                                onChange={this.onChangeContent}
                            />
                        </div>
                        <div className="form-group">
                            <input type="file" name="photo" onChange={this.onPhotoChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}