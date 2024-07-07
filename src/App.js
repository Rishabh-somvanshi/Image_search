import "bulma/css/bulma.css";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import axios from "axios";

import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log("🚀 ~ handleSubmit ~ result:", result);
    setImages(result.data.results);
  };
  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} /> <ImageList images={images} />
    </div>
  );
}

export default App;

//1.search bar
//2.image list
//3.image show
