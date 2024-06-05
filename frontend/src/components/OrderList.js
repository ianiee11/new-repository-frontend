import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://your-backend-url.herokuapp.com/api/orders');
        setOrders(response.data);
      } catch (err) {
        console.error(err);
        alert('Error fetching orders');
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Subject: {order.subject}</p>
            <p>Type: {order.type}</p>
            <p>Pages: {order.pages}</p>
            <p>Deadline: {order.deadline}</p>
            <p>Details: {order.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
