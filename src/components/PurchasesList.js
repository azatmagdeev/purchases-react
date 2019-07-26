import React, {Component} from 'react';

class PurchasesList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                       <tr>
                           <th>Name</th>
                           <th>Category</th>
                           <th>Price</th>
                       </tr>
                    </thead>
                    <tbody>
                    {/*list is here*/}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default PurchasesList;