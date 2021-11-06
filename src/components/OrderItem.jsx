import React from 'react';

import close from '@icons/icon_close'

const OrderItem = ({product}) => {
    return ( 
        <div>
            <figure>
                <img src={product.images[0]} alt={product.images} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={close} alt="close" />
        </div>
     );
}
 
export default OrderItem;