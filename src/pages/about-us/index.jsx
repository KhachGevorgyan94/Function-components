import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../../store/reducers/products/action-types";
import {useEffect, useState} from "react";
import {useUserContext} from "../../context/user-context";

export const AboutUs = () => {
    const [imageValue, setImageValue] = useState('')
    const userData = useUserContext()
    // const products = useSelector(state=>state.productReducer.productList)
    // const productData = useSelector(state=>state.productReducer.productData)
    // console.log(products)
    // const dispatch = useDispatch()
    // const deleteProduct = (index)=>{
    //     dispatch({type:productsActions.DELETE_PRODUCT,payload:index})
    //     console.log(productData,'aaaaaaaaaaaaaaaaaaaaa')
    //
    // }
    //
    // useEffect(() => {
    //     console.log(productData)
    //
    // }, [productData]);

    function encodeImageFileAsURL(element) {
        console.log(element)

        var file = element.target.files[0];
        console.log(file)
        if (file) {
            var reader = new FileReader();
            reader.onloadend = function () {
                console.log(reader)
                console.log('RESULT', reader.result)
                setImageValue(reader.result)
            }
            reader.readAsDataURL(file);
        }
    }

    return <div>
        About us

        <div>
            {/*{products.length? <ul className='product-list'>*/}
            {/*    /!*{products.map((item,index)=>{*!/*/}
            {/*    /!*    return <li key={index}>{index+1}. {item.name}  <button onClick={()=>deleteProduct(index)}>Delete</button></li>*!/*/}
            {/*    /!*})}*!/*/}
            {/*</ul>: <p>empty product list</p>}*/}
            <h1>{userData.user.email}</h1>

            <label>
                <input type="file" hidden onChange={encodeImageFileAsURL}/>
                <p>Upload category image</p>
            </label>

            <div className='image-test' style={{backgroundImage: `url('${imageValue}')`}}></div>
        </div>

    </div>
}