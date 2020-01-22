import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';

const PermFunction = props => (
    <tr>
        <td id="japanese">{props.perms.ja_course}</td>
        <td id="english">{props.perms.en_course}</td>
        <td>{props.perms.ja_price}</td>
        <td>{props.perms.en_price}</td>
        <td id="japanese">{props.perms.ja_detail}</td>
        <td id="english">{props.perms.en_detail}</td>
        <td>
            <Link to={"/admin/services/perms/edit/" + props.perms._id}>edit</Link> |<button href="#" onClick={() => { props.deletePerm(props.perms._id) }}>delete</button>
        </td>
    </tr>
)


class PermList extends Component {
    constructor(props) {
        super(props);

        this.deletePerm = this.deletePerm.bind(this)

        this.state = { perms: [] };
    }

    componentDidMount() {
        axios.get('/perm/')
            .then(response => {
                this.setState({ perms: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePerm(id) {
        axios.delete('/perm/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            perms: this.state.perms.filter(el => el._id !== id)
        })
    }

    permList() {
        return this.state.perms.map(currentperm => {
            return <PermFunction perms={currentperm} deletePerm={this.deletePerm} key={currentperm._id} />;
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
                    <h3>Perm List</h3>
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
                            {this.permList()}
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

PermList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(PermList);