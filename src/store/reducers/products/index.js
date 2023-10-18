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



/**
 * Tnain arajadrnanqn  hetevyaln e
 *
 * Stanal 3 ej
 *      1. User registration
 *      2. Login user
 *      3. User information
 *
 *  xndir@ kirarelu hamar  ogtagorcum eq
 *  raact router dom routingi hamar
 *  react redux state management  pahpanelu hamar
 *
 *  @UserRegistration(page):
 *     unenalu eq forma  vori mijocov stexcelu eq  userneri canq
 *     hetevyal dashterov
 *     1. Anun,
 *     2. Azganun,
 *     3. Position,
 *     4. Email,
 *     5. Password
 *     6. Confirm password
 *
 *     grel validacia hetevyal dashteri  hamar stugel
 *     1. bolor dashter@ lracvac e  te  voch
 *     2. stugel password u confirm password dashter@ ham@Nknum en ira r
 *     3. stugel  nman email artahaytutyun goyutyun uni te che
 *
 *     buttoni vra click aneluc  ayd  informacian arden reduzi mijocov havaqel  stori mej
 *
 *  @UserLogin(page):
 *     ays  ejum unenalu eq  2 input dasht  ev button
 *     input dashtern en `
 *     1. email
 *     2. password
 *
 *     xndir@ hetevyaln e ayd ejum  email  password greluc , buttoni vra click aneluc
 *     stugum eq hetevyal validacian
 *
 *     STUGEL NMAN MARD  MER AVELACVAC CUCAKUM KA TE CHE
 *     ete chka cuyc tal input dashter@ karmir guyni
 *     hakarak depqum navigate anel  nor ej
 *
 *
 *     @UserDetails(page):
 *
 *     ays  ej@  ashxatelu e miayn login lineluc heto
 *     aysinqn  sovorakan ete meqn uzenanaq  linkn  brouzerum dnenq ayd ej@ chpetqa bacvi
 *
 *
 *     @ndhanut  xndir npatakn e hetevyal qayler@
 *
 *     1.  Stexcel  userner
 *     2. login linelu jamanak stugel nman  user  ka te che
 *     3. ete nman user gtnvec apa  navigate anel  user details ej
 *     4. aranc  login linelu chpetqa hasaneli linel user details ej@
 *     5. apahovel bolor input dashteri hamar ver@ nshvac validacianer@
 *
 *
 *
 *
 *
 * **/