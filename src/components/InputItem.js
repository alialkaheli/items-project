import React, { Component } from 'react';

export default class InputItem extends Component {
    render() {
        const { title, description, image, quantity, handleChange, handleSubmit } = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit} className="align-self-center">
                    <div className="card w-100 ">
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={handleChange('title')}
                        />
                        <textarea
                            rows="4" cols="50"
                            placeholder="Description"
                            value={description}
                            onChange={handleChange('description')}
                        />

                        <input 
                            type="url" 
                            placeholder="Enter a link for an image"
                            value={image}
                            onChange={handleChange('image')}
                        /> 
                        <input
                            type="number"
                            value={quantity}
                            onChange={handleChange('quantity')}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={title && description && quantity ? false : true}
                        className={
                            'btn btn-block btn-primary mt-3 text-uppercase w-100'
                        }
                    >
                        add item
                    </button>
                </form>
            </div>
        );
    }
}