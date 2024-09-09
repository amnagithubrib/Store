import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ContactList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/contact/");
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error.message);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/contact/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete contact");
      }

      // Update the contacts after successful deletion
      const updatedContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(updatedContacts);
    } catch (error) {
      console.error("Error deleting contact:", error.message);
    }
  };

  return (
    <div>
      <h2>Contact List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Email</b></TableCell>
              <TableCell><b>Mobile Number</b></TableCell>
              <TableCell><b>Address</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.mobile_number}</TableCell>
                <TableCell>{contact.address}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactList;
