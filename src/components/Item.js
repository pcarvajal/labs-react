import React from 'react';
import { Link } from 'react-router-dom';


class Item extends React.Component {



    render() {
        return (
            <div className="col-sm-4 mt-4" >
                <div className="card">
                    <img src={this.props.img} className="card-img-top" alt="imagen producto" />
                    <div className="card-body">
                        <p className="card-text">{this.props.name}</p>
                        <ul>
                            <li><small><strike>{this.props.listPrice}</strike></small></li>
                            <li>{this.props.offerPrice}</li>
                            <li>{this.props.cardPrice} <img src="" /></li>
                        </ul>
                        <Link to={`product/${this.props.sku}`}>Ver</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;