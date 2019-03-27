import React, {
    Component
} from 'react';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import { Link } from 'react-router-dom'

class index extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    //挂载
    componentDidMount() {

    }
    //卸载
    componentWillUnmount() {

    }
    render() {
        return(
            <div>
                <Header />
                <div>
                    <ul>
                        <li>
                        </li>
						<li>
						</li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}

export default index;
