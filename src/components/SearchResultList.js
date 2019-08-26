import React, { Component } from 'react';
import '../styles/SearchResultList.scss';
import Card from 'react-bootstrap/Card';

export default class SearchResultList extends Component {
    listItem(first, second, third, fourth, key) {
        return (
            <Card key={ key }>
                <a className="listTitleLink" href={first}>
                    <Card.Title>
                        { fourth }
                    </Card.Title>
                </a>
                <Card.Body>
                    <Card.Text>
                        { second }
                    </Card.Text>
                    <Card.Text>
                        { third }
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    render() {
        if (this.props.list) {
            return (
                <div className="list">
                    {
                        this.props.list.map((item, key) => this.listItem(item.html_url, item.stargazers_count, item.watchers_count, item.name, key))
                    }
                </div>
            )
        }
        else return ( <div /> )
    }
}
