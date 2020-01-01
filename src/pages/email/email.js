import React, { Component } from 'react';
// import './comment.css';

import EmailTable from './email-table/email-table'

class Email extends Component {

    render() {
        // const {comments} = this.state
        return (
            <div className="email">
                <EmailTable/>
            </div>
        );
    }
}


export default Email;
