import React, { Component } from 'react';
import SearchResultList from '../components/SearchResultList';
import Header from '../components/Header';
import '../App.css';
import Form from 'react-bootstrap/Form';
import * as Actions from '../store/actions';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class Root extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = { str: '' }
    }

    async onChange(e) {
        await this.setState({ str: e.target.value });
        this.props.getData(this.state.str);
    }

    form() {
        return (
            <Form>
            <Form.Group>
                <Form.Control
                placeholder="Enter your query..."
                value={ this.state.str }
                onChange={ this.onChange } 
                />
            </Form.Group>
            </Form>
        )
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content">
                { this.form() }
                <SearchResultList list={ this.props.data } />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
    let path = state.dataReducer
    return { data: path.data }
}
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
