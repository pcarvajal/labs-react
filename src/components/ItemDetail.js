import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemDetail extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)

    }
    
    render() {
        return (
            <div className="row">
            <div className="col-6">
                <div className="card">
                    <img src={this.props.img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <Link to="/">Volver</Link>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <h1>{this.props.name}</h1>
                <h4>SKU {this.props.sku}</h4>
                <ul>
                    <li>Normal : {this.props.formattedListPrice}</li>
                    <li>Internet : {this.props.formattedOfferPrice}</li>
                    <li>Tarjeta Ripley : {this.props.formattedCardPrice}</li>
                    <li>Descuento : - {this.props.discountPercentage} %</li>
                </ul>
            </div>
        </div>
        )
    }
}

export default ItemDetail;