import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.addNewPurchase()}>
                    <input placeholder='name'/>
                    <input placeholder='cat'/>
                    <input placeholder='price'/>
                    <button>Add</button>
                </form>
            </div>
        );
    }

    addNewPurchase(){

    }
}

export default Form;