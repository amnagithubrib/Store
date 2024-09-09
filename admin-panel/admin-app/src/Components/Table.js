import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/orders/");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/orders/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`Failed to delete order with ID ${id}`);
      }

      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error deleting order:", error.message);
    }
  };

  return (
    <div>
      <h2>Order List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.mobile}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(order.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrderList;