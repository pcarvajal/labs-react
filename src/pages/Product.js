import React, { Component } from 'react'
import ItemDetail from '../components/ItemDetail'; 
import api from '../config'

class Product extends Component {

    constructor(props){
        super(props)

        const {sku} = props.match.params

        this.state = {
            item : [],
            prices : [],
            sku : sku
        }
    }

    fetchItem(){
        fetch(`${api}/product/${this.state.sku}`)
        .then(res => res.json())
        .then(data => {
            this.setState({item : data})
            this.setState({prices : data.prices})
        });
    }

    componentDidMount() {
        this.fetchItem();
    }

    render() {
        return (
            <div className="container">
                <ItemDetail
                    img={this.state.item.fullImage}
                    sku={this.state.item.partNumber}
                    formattedOfferPrice={this.state.prices.formattedOfferPrice}
                    formattedListPrice={this.state.prices.formattedListPrice}
                    formattedCardPrice={this.state.prices.formattedCardPrice}
                    discountPercentage={this.state.prices.discountPercentage}
                    name={this.state.item.name}
                />
            </div>
        )
    }
}

export default Product