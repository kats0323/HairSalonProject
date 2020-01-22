import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';


const CutFunction = props => (
    <tr>
        <td id="japanese">{props.cuts.ja_course}</td>
        <td id="english">{props.cuts.en_course}</td>
        <td>{props.cuts.ja_price}</td>
        <td>{props.cuts.en_price}</td>
        <td id="japanese">{props.cuts.ja_detail}</td>
        <td id="english">{props.cuts.en_detail}</td>
        <td>
            <Link to={"/admin/services/cut/edit/" + props.cuts._id}>edit</Link> |  <button href="#" onClick={() => { props.deleteCut(props.cuts._id) }}>delete</button>
        </td>
    </tr>
)


class CutList extends Component {
    constructor(props) {
        super(props);

        this.deleteCut = this.deleteCut.bind(this)

        this.state = { cuts: [] };
    }

    componentDidMount() {
        axios.get('/cut/')
            .then(response => {
                this.setState({ cuts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCut(id) {
        axios.delete('/cut/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            cuts: this.state.cuts.filter(el => el._id !== id)
        })
    }

    cutList() {
        return this.state.cuts.map(currentcut => {
            return <CutFunction cuts={currentcut} deleteCut={this.deleteCut} key={currentcut._id} />;
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
                        <a href="/admin">GO TO LOGIN PAGE</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div >
                    <h3>Cut List</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Japanese Course</th>
                                <th>English Course</th>
                                <th>Japanese Price</th>
                                <th>English Price</th>
                                <th>Japanese Detail</th>
                                <th>English Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.cutList()}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

CutList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CutList);