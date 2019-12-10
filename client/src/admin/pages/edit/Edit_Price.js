import React, { Component } from "react";
import Price from "../../../pages/price/Price"


class EditPrice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Cut"
        }
    }

    changeTitle = (newTitle) => {
        this.setState({ title: newTitle });
    }

    render() {
        return (
            <div>
                <h2>PARENT: {this.state.title} </h2>
                <h2>Grand Parent props passed to parent: {this.props.name}</h2>
                {/* pass the props from grandparent to child {...this.props*/}
                <Child changeTitle={this.changeTitle} title={this.state.title} {...this.props} />
                <Child changeTitle={this.changeTitle} title={this.state.title} {...this.props} />
            </div>
        )
    }
}
export default EditPrice