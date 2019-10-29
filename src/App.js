import React, { Component } from 'react';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputItem from './components/InputItem';
import ItemList from './components/ItemList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      id: uuid(),

      title: '',
      description: '',
      image: '',
      quantity: 0,

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      image: this.state.image,
      quantity: this.state.quantity,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      title: '',
      description: '',
      image: '',
      quantity: 0,
      id: uuid(),
    });
  };


  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Create your item</h3>
              <InputItem
                title={this.state.title}
                description={this.state.description}
                image={this.state.image}
                quantity={this.state.quantity}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <ItemList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;