import React, { useState } from 'react';
import './App.css';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = (updatedService) => {
    setServices(
      services.map((service) => 
        service.id === updatedService.id ? updatedService : service
      )
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="App">
      <h1>Healthcare Services Manager</h1>
      <ServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;
