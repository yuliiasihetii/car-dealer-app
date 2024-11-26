import axios from 'axios';

const MAKES_DATA_LINK = process.env.NEXT_PUBLIC_MAKES_DATA_LINK;

export const useFetchMakes = async () => {
  if (!MAKES_DATA_LINK) {
    console.error('API URL is missing! Check your environment variables.');
    return [];
  }

  try {
    const response = await axios.get(MAKES_DATA_LINK);
    return response.data.Results;
  } catch (error) {
    console.error('Error fetching vehicle makes:', error);
    return [];
  }
};
