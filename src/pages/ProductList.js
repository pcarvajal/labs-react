import React, { Component } from 'react';
import CategoryName from '../components/CategoryName';
import ItemList from '../components/ItemList';
import api from '../config'

class ProductList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

     fetchItems() {
         fetch(api)
            .then(res => res.json())
            .then(data => {
                this.setState({ items: data })
            }).catch(err => console.log(err))
    }


    componentDidMount() {
        this.fetchItems();
    }


    render() {
        return (
            <div className="container">
                <CategoryName />
                <ItemList
                    items={this.state.items}
                />
            </div>
        )
    }
}

export default ProductList;