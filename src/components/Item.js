import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const { title, description, image, quantity } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <h6>{description}</h6>
                <img src={image} alt="Not available" width="150" height="100" />
                <h6>{quantity}</h6>
                
            </li>
        );
    }
}