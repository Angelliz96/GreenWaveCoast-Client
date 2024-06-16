import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [resources, setResources] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/resources");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchResources();
  }, []);

  const handleDelete = async (resourceId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/resources/delete/${resourceId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Resource deleted successfully");

      // Actualiza la lista de recursos después de eliminar
      setResources(resources.filter(resource => resource.id !== resourceId));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      <main>
        <h1>ADMIN PAGE</h1>
        <button type="button" onClick={() => navigate('/create')}>ADD NEW RESOURCE</button>
        <table>
          <thead>
            <tr>
              <th>RESOURCE TITLE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id}>
                <td>{resource.title}</td>
                <td>
                  <button type="button" onClick={() => navigate(`/update/${resource.id}`)}>EDIT</button>
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(resource.id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Admin;
