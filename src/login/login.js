import React, {
    Component
} from 'react';

class login extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isXuanran: false
        };
    }

    //挂载
    componentDidMount() {

    }

    //卸载
    componentWillUnmount() {

    }

    login = (e, id) => {
        console.log(e)
        console.log(id)
        console.log(this.state)
    }

    inputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <p>login</p>
                <p>
                    用户名：<input type="text" name="username" value={this.state.username} onChange={this.inputChange}/>
                </p>
                <p>
                    密码：<input type="text" name="password" value={this.state.password} onChange={this.inputChange}/>
                </p>
                <p>
                    <button onClick={(e) => this.login(e, 1)}>登陆</button>
                    {/*isXuanran如果是true，右边的会被渲染，如果是false，不会渲染*/}
                    {this.state.isXuanran && <button>注册</button>}
                </p>
            </div>
        );
    }
}

export default login;
