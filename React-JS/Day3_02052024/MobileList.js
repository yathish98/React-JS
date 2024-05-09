//React Displaying Mobile Product List Assignment

import {useState} from "react";
import './table.css';

function MobileList(){
let [mobilearray,setMobilearray] =useState([
    {id:1,name:"Redmi Note 13 Pro",description:"Midnight Black, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera | Flagship 4nm SD 7s Gen 2 | 67W TurboCharge", price:9000,rating:4, stockStatus:"In Stock"},
    {id:2,name:"OnePlus 12R",description:"Cool Blue, 8GB RAM, 128GB Storage", price:120000,rating:5, stockStatus:"In Stock"},
    {id:3,name:"iPhone15 Pro",description:"Only for the rich", price:120000,rating:5, stockStatus:"In Stock"},
    {id:4,name:"Oppo A77s",description:"Sunset Orange, 8GB RAM, 128 Storage", price:24000,rating:4, stockStatus:"Out of Stock"}
]);

return (
    <div>
        <h1>List Of Mobiles</h1>
        <table class="center"><tr class="trStyle">
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock</th>
                        </tr></table>
        {mobilearray.map( (mobile) => (
            <div key={mobile.id}>

<table class="center">
<tr class="tr1Style">
                            <td class="tdStyle">{mobile.name}</td>
                            <td class="tdStyle">{mobile.description}</td>
                            <td class="tdStyle">{mobile.price}</td>
                            <td class="tdStyle">{mobile.rating}</td>
                            <td class="tdStyle">{mobile.stockStatus}</td>
                        </tr>

            </table>
            </div>
        ))}
        </div>
    
);
}

export default MobileList;