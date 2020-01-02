import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'


import App from '../App'
import Email from '../pages/email/email'
import EmailTable from '../pages/email/email-table/email-table'
import EmailDetail from '../pages/email/email-detail/email-detail'


class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Email}/>
                    <Route path='emailtable' component={EmailTable}/>
                    <Route path='emaildetail/:id' component={EmailDetail}/>
                </Route>
            </Router>
        )
    }
}

export default RouteMap
