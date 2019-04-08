import React, {
    Component
} from 'react';
import httpServer from '../server/api'

class details extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    //挂载
    componentDidMount() {
        var _this = this
        httpServer.list().then(function (res) {
            console.log(res.data)
            _this.setState({
                list: res.data
            })
        })
    }

    //卸载
    componentWillUnmount() {

    }

    getPhoto = (e) => {
        e.preventDefault();
        console.log(
            `Selected file - ${this.fileInput.files[0].name}`
        );
        console.log(this.fileInput.files[0]) //传值参数
    }

    render() {
        const listArray = this.state.list.map((item, index) =>
            <ul key={item.id}>
                <li>index:{index}</li>
                <li>{item.id}</li>
                <li>{item.name}</li>
                <li>{item.value}</li>
            </ul>
        )
        return (
            <div>
                <input type="file" ref={input => {
                    this.fileInput = input;
                }}
                />
                <button onClick={(e) => this.getPhoto(e)}>获取图片信息</button>
                {listArray}
            </div>
        );
    }
}

export default details;
