import React, {
    Component
} from 'react';

class state extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            a:"",
            b:""
        };
    }
    //挂载
    componentDidMount() {

    }
    //卸载
    componentWillUnmount() {

    }
    inputChange=(e)=>{
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return(
            <div>
                <p>状态提升↓</p>
                <p>
                    a：<input type="number" name="a" value={this.state.a} onChange={this.inputChange}/>
                </p>
                <p>
                    b：<input type="number" name="b" value={this.state.b} onChange={this.inputChange}/>
                </p>
                <p>a大于100b大于200</p>
            </div>
        );
    }
}

export default state;
