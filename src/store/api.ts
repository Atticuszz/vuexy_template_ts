// Importing FastAPI client for HTTP requests
import fastapiClient from '@/plugins/fastapiClient';

// Fetch all tasks from the backend
export const fetchData = async () => {
  try {
    // Make GET request to fetch all task entries
    const response = await fastapiClient.get('your_endpoint_here');

    // maybe you need to Transform the data
    // ...
    return response.data
  } catch (error) {
    // Log error if fetching fails
    console.error('There was a problem fetching data:', error);
  }
};

//
