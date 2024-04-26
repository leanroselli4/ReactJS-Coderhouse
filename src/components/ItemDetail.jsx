import { useContext } from "react";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return (
        <div className="container-fluid py-5 padding-custom">
            <div className="row">
                <div className="col-md-5 text-center">
                    <img src={item.image} alt={item.title} className="img-size border border-light rounded" />
                </div>

                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <div className="row text-light font-bk">
                        <h2 className="title-size m-0">{item.title}</h2>
                    </div>
                    <div className="row text-light font-category pt-1">
                        <h2 className="category-size m-0">{item.category.toUpperCase()}</h2>
                    </div>
                    <div className="row text-light font-category fs-3 pt-3">
                        <p className="price-size m-0"><b>$ {item.price}</b></p>
                    </div>
                    <div className="row text-light font-text text-justify pt-5 pb-2">
                        <p className="description-size m-0">{item.description}</p>
                    </div>
                    <div className="row">
                        <ItemCount stock={item.stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;