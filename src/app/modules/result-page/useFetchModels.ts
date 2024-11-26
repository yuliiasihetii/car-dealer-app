export const useFetchModels = async (makeId: string, year: string) => {
  const MODELS_DATA_LINK = process.env.NEXT_PUBLIC_MODELS_DATA_LINK;

  if (!MODELS_DATA_LINK) {
    console.error('API URL is missing! Check your environment variables.');
    return [];
  }

  try {
    const url = MODELS_DATA_LINK.replace('{makeId}', makeId).replace(
      '{year}',
      year
    );
    const response = await fetch(url);
    const data = await response.json();
    return data.Results;
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
};
