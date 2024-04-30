import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css'
import config from '../config'
export default function ViewSellers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${config.url}/viewseller`);
      setCustomers(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Seller</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>company</th>
              <th>Gender</th>

            </tr>
          </thead>
          <tbody>
  {Array.isArray(customers) && customers.length > 0 ? (
    customers.map((customer, index) => (
      <tr key={index}>
        <td>{customer.name}</td>
        <td>{customer.email}</td>
        <td>{customer.companyName}</td>
        <td>{customer.gender}</td>

      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}