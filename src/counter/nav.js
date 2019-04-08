import React, {
    Component
} from 'react';
import {Link} from 'react-router-dom';

class nav extends Component {
    render() {
        return(
            <li><Link to="/counter">Counter</Link></li>
        );
    }
}

export default nav;
