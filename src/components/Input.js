import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body bg-warning my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text btn-dark  text-white">
                                <i className="fas fa-book" />
                            </div>
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Input Here. . ."
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        className={`btn btn-block mt-3 ${editItem ? 'btn-success' : 'btn btn-light'}`}
                    >
                        {editItem ? 'Edit task' : 'ADD'}
                    </button>
                </form>
            </div>
        )
    }
}
