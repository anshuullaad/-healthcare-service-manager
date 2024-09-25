import React, { useState } from 'react';

function ServiceItem({ service, updateService, deleteService }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleUpdate = () => {
    updateService({ ...service, name, description, price });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>${service.price}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteService(service.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

export default ServiceItem;
