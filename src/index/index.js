import React, {
    Component
} from 'react';
import httpServer from '../server/api'

class index extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //挂载
    componentDidMount() {
        console.log(123456)
        console.log(httpServer)
        httpServer.get().then(function (res) {
            console.log(res.data)
        })
    }
    //卸载
    componentWillUnmount() {

    }
    render() {
        return(
            <div>
               index
            </div>
        );
    }
}

export default index;
