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
        const result = await response.json();
        setResources(result.data);
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

      setResources(resources.filter(resource => resource._id !== resourceId));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div>
      <main>
        <h1>ADMIN PAGE</h1>
        <button type="button" onClick={() => navigate('/user')}>ADD NEW RESOURCE</button>
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
              <tr key={resource._id}>
                <td>{resource.title}</td>
                <td>
                  <button type="button" onClick={() => navigate(`/user/${resource._id}`)}>EDIT</button>
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(resource._id)}>DELETE</button>
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
