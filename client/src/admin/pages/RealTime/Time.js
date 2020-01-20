import React,{ Component } from 'react'
import './real.time.css'

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:''

        }
    }

    componentDidMount(){
        // this.timer = setInterval(
        //     () => this.tick(),
        //     1000
        // )
        var that = this;
        var date = new Date().getDate();
        var month = new Date().getMonth() +　1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        that.setState({
             //Setting the value of the date time
             date:
             date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
        });
    }

    // componentWillMount(){
    //     clearInterval(this.timer);
    // }

    // tick(){
    //     this.setState({
    //         date:''
    //     })
    // }


    render(){
        return (
            <div className='clock'>
                 <h4 className='current-time'>Current Date Time</h4>
                {this.state.date}
            </div>
        )
    }
}

export default Timer