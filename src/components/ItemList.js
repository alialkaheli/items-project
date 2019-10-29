import React, { Component } from 'react';
import Item from './Item';

export default class ItemList extends Component {
    render() {
        const { items} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">List of Items</h3>
                <li className="list-group-item d-flex justify-content-between my-2">
                    <h6>Title</h6>
                    <h6>Description</h6>
                    <h6>Image</h6>
                    <h6>Quantity</h6>

                </li>
                {items.map(item => {
                    return (
                        <Item
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            quantity={item.quantity}
                        />

                    );
                })}
            </ul>
        );
    }
}