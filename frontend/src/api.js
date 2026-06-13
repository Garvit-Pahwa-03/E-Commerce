const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiFetch = async (endpoint, options = {}) => {
  const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const url = `${API_BASE_URL}${formattedEndpoint}`;
  
  const response = await fetch(url, options);
  return response;
};