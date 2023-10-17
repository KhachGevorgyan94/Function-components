import {productsActions} from "./action-types";

const initialState = {
    productList:[
        {
        name:'Hamem',
        description:'esor enq havaqel',
        count:30,
        price:170
    }
    ],

    productData:{
        productDelAddress:{
            city:'12423',
            country:'234234',
            post:'35345',
            phone:{
                phoneCode:'432',
                number:'4234234234234'
            }
        }
    }
}


export const productReducer = (state = initialState, action)=>{

    switch (action.type){
        case productsActions.DELETE_PRODUCT:{
            state.productList = state.productList.filter((x,index)=>index!==action.payload)
            // state.productData.productDelAddress.phone.phoneCode = 'asdasdaasdasdasdsd'
            // console.log('aaaaaaaaaaaaaaaaaaaaaaaa')
            // return {...state}
            return {...state,
                productData: {...state.productData,
                    productDelAddress:{...state.productData.productDelAddress,
                        phone: 'asdfasdfasdf'}}}
            // return {...state}
            // return {...state,
            //     productList: state.productList.filter((x,index)=>index!==action.payload)}
        }
        default:{
            return state
        }
    }

}