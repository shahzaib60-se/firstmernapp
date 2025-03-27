import React from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    const data = useCart();

    const handleAddToCart = async () => {
        await dispatch({
            type: "ADD",
            id: props.productItem._id,
            title: props.productItem.title,
            price: props.productItem.price,
            image: props.productItem.image,
        });
        console.log(data);
    };

    return (
        <div>
            <div className="card m-3" style={{ width: "18rem" }}>
                <img
                    src={props.productItem.image || "https://via.placeholder.com/150"}
                    className="card-img-top"
                    alt={props.productItem.title || "Product"}
                    style={{ height: "150px", objectFit: "fill" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.productItem.title}</h5>
                    <div className="container w-100">
                        <div className="d-inline fs-5">{props.productItem.price}</div>
                    </div>
                    <hr />
                    <button
                        className="btn btn-success justify-center ms-2"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
