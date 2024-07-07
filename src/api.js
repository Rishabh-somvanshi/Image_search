import axios from "axios";

const searchImages = async (term) => {
  try {
    if (term !== "") {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            Authorization:
              "Client-ID CxL77vwFWG3x7b3eS5XdShv84GPa280DoHS3rIJLwx4",
          },
          params: {
            query: term,
          },
        }
      );
      console.log("🚀 ~ searchImages ~ response:", response?.data?.results);
      return response;
    } else {
      console.log("🚀 ~ searchImages ~ query term is blank:", term);
    }
  } catch (error) {
    console.error("🚀 ~ searchImages ~ error:", error);
    if (error.response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error("Error data:", error.response.data);
      console.error("Error status:", error.response.status);
      console.error("Error headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
  }
};

export default searchImages;
