import React from 'react';
import Item from './Item'; 


const ItemList = (props) => (
    <div className="row">
        {
            props.items.map((item) => {
                return (
                    <Item 
                        img={item.thumbnailImage}
                        name={item.name}
                        listPrice={item.prices.formattedListPrice}
                        offerPrice={item.prices.formattedOfferPrice}
                        cardPrice={item.prices.formattedCardPrice}
                        key={item.uniqueID}
                        sku={item.partNumber}
                    />
                    )
            })
        }
        </div>
)


export default ItemList;