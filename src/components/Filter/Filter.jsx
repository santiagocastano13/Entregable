import React from 'react';
import './Filter.css';

export const Filter = ({ handleFilterChange }) => {
  return (
    <>
      <div id='filter'>
        <h3 id='filterTitle'>Filtrar: </h3>
        <select name="Filter" id="Filter" onChange={handleFilterChange}>
          <option value="">Todas las tareas</option>
          <option value="Pendientes">Pendientes</option>
          <option value="Resueltas">Resueltas</option>
        </select>
      </div>
    </>
  );
};
