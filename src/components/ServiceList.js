import React from 'react';
import ServiceItem from './ServiceItem';

function ServiceList({ services, updateService, deleteService }) {
  return (
    <ul>
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          updateService={updateService}
          deleteService={deleteService}
        />
      ))}
    </ul>
  );
}

export default ServiceList;
