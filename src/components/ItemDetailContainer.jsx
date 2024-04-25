import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "ItemList", id);
        getDoc(producto).then(resultado => {
            setLoading(false);
            setItem({id:resultado.id, ...resultado.data()});
        });
    }, [id]);

    return (
        <div className="bg-gradient">
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;