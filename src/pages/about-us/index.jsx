import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../../store/reducers/products/action-types";
import {useEffect} from "react";

export const AboutUs = () => {
    const products = useSelector(state=>state.productReducer.productList)
    const productData = useSelector(state=>state.productReducer.productData)
    console.log(products)
    const dispatch = useDispatch()
    const deleteProduct = (index)=>{
        dispatch({type:productsActions.DELETE_PRODUCT,payload:index})
        console.log(productData,'aaaaaaaaaaaaaaaaaaaaa')

    }

    useEffect(() => {
        console.log(productData)

    }, [productData]);

    return <div>
        About us

        <div >
            {products.length? <ul className='product-list'>
                {products.map((item,index)=>{
                    return <li key={index}>{index+1}. {item.name}  <button onClick={()=>deleteProduct(index)}>Delete</button></li>
                })}
            </ul>: <p>empty product list</p>}
        </div>

    </div>
}