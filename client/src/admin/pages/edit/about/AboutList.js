import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


<<<<<<< HEAD
=======

>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
const AboutFunction = props => (
    <tr>
        <h2>{props.about.en_introduction}</h2>
        <h4>{props.about.ja_introduction}</h4>
        <br />
<<<<<<< HEAD
        <img src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />
=======
        <img src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} alt="avatar" />
>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
        <td>
            <Link to={"/admin/about/edit/" + props.about._id}>edit</Link> |    <button href="#" onClick={() => { props.deleteAbout(props.about._id) }}>delete</button>
        </td>
<<<<<<< HEAD
=======

>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
    </tr >
)


export default class AboutList extends Component {
    constructor(props) {
        super(props);

        this.deleteAbout = this.deleteAbout.bind(this)

        this.state = { about: [] };
    }

    componentDidMount() {
        axios.get('/about/')
            .then(response => {
                this.setState({ about: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAbout(id) {
        axios.delete('/about/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            about: this.state.about.filter(el => el._id !== id)
        })
    }

    aboutList() {
        return this.state.about.map(currentabout => {
            return <AboutFunction about={currentabout} deleteAbout={this.deleteAbout} key={currentabout._id} />;
        })
    }

    render() {
        console.log(this.aboutList())
        return (

            <div>

                <h1>About</h1>
                <br />
                <h3>
                    {this.aboutList()}
                </h3>

            </div>
        )
    }
}