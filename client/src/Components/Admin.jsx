import React, { useEffect, useState } from "react";

const Admin = () => {
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/UserItem")
      .then((res) => res.json())
      .then((data) => setUserItems(data));
  }, []);

  return (
    <div className="admin-container">
      <h1>Administration</h1>

      <div className="table">
        <div className="table-row table-row-header">
          <div>Nom</div>
          <div>Prix</div>
          <div>Username</div>
          <div>Email</div>
          <div>Statut</div>
          <div>Validation</div>
        </div>
        {userItems.map((item) => (
          <div className="table-row table-row-data" key={item.id}>
            <div>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.user.username}</div>
            <div>{item.user.email}</div>
            <div>{item.status}</div>
            <div>{item.validation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
