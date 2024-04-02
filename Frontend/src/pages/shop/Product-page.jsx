import React, { useContext } from 'react'
import { Shopcontext } from '../../containers/context/shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../../components/breadcrum/breadcrum';
import Productdisplay from '../../components/product-display/product-display';
export const Productpage = () => {
    const {Imagelist}  = useContext(Shopcontext);
    const {productId} = useParams();
    const Productpage = Imagelist.find((e)=> e.id === Number(productId));
  return (
    <div>
        <Breadcrum Productpage={Productpage}/>
        <Productdisplay Productpage={Productpage}/>
    </div>
  )
}
export default Productpage
