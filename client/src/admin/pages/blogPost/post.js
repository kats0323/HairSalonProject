//This is phillip speaking this is all from ant Design i will try to comment on everything tommrow to let you know what it does.
import React, { Component } from "react";
import './post.css'
import Navbar from '../partials/_navbar'
import { Upload, Icon, Modal } from 'antd';
import { Input } from 'antd';


// this function is from ant Design they provide a function to upload data
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }
            ],
        };
    }

    // This is the Upload Functions provided from ant D
        handleCancel = () => this.setState({ previewVisible: false });

        handlePreview = async file => {
            if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
            }

            this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            });
        };

        handleChange = ({ fileList }) => this.setState({ fileList });
    // 

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div class="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div class="clearfix main">
        <Navbar />
        <div>
            <div class="blogpost-bg">
                <h1>Blog Post</h1>
            </div>
            <div class="blogfields">
                <h1>Post</h1>
                <Input style={{height:"70px"}} placeholder="What's Happening" allowClear />
            </div>
                <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList} onPreview={this.handlePreview} onChange={this.handleChange} >
                    {/* hides the button when it there are 8 photo's or more otherwise display the upload button */}
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img style={{ width: '100%' }} src={previewImage} alt="previewimage" />
                </Modal>
                <input type="submit" class="blogpost-submit" />
        </div>
      </div>
    );
  }
}

  
