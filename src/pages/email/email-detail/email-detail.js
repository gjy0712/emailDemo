import React, { Component } from 'react';


class EmailDetail extends Component {
    render() {
        return (
            <p>Detail，url参数：{this.props.params.id}</p>
        )
    }
}

export default EmailDetail
