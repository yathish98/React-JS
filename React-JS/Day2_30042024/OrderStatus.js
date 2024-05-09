import React, { useState } from "react";

//defining the OrderStatus component
function OrderStatus(){
    const [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
        });
    
    //function to update the status value in the order object based on the selected dropdown value
    function handleStatusChange(){
        var orderlist = document.getElementById("orderList");
        let OrderDetails= orderlist.options[orderlist.selectedIndex].text;
        console.log(OrderDetails);
        setOrder({...order,status:OrderDetails});
    }

    return (
        <div>
            <h1>{order.id}</h1>
            <h1>{order.status}</h1>
            <h1>{order.customer}</h1>
            <h1>{order.items}</h1>
            <select id = "orderList"> {/*Dropdown with the values to be updated in the Status*/}
                <option> Processing </option>  
                <option> Shipped </option>  
                <option> Delivered </option>  
            </select>
            <button onClick={handleStatusChange}>Update Status</button> {/*button to update the Status with the selected value*/}
        </div>
    );
}

export default OrderStatus;