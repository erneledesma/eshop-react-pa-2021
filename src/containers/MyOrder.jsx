import React from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import arrow from '@icons/flechita.svg'

const MyOrders = () => {

    const {state}= useCCOntext(AppContext);

    return ( 
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrow} alt="arrow"></img>
                <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                { state.cart.map(product => (
                    <OrderItem 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </aside>
     );
}
 
export default MyOrders;