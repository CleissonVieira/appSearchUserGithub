export const handleResponse = async (response: Response, message: string) => {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || message);
    }
    return response.json();
};
  