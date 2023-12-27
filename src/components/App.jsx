import { useState, useEffect } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import axios from "axios";
import { LoadMore } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export const App = () =>  {
  const [state, setState] = useState({
    images: [],
    isLoading: false,
    searchValue: '',
    searchQuery: '',
    page: 1,
    error: '',
    totalPages: 0,
  })

  const KEY = '22671510-1d0277e7650e6177903139f39'

  const handleChange = ({target: {value}}) => {
    setState((prev) => ({
      ...prev,
      searchValue: value
    }))
  }

  const handleSubmit = (e) => {
  e.preventDefault();
    if (state.searchQuery === state.searchValue) { return; }
  else{setState((prev) => (
    {
    ...prev,
    searchQuery: state.searchValue,
    images: [],
    page: 1,
  }));}
}


  const handleLoadMore = () => {
  setState(prev => ({
    ...prev,
    page: prev.page + 1
  }));
}

  const getImages = async (search, page) => {
      const response = await axios(`https://pixabay.com/api/?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      return response.data
  }

  const addImages = async () => {
    if (state.searchQuery === '') {
      return; // Если searchQuery пустой, не загружать изображения
    }

    try {
      setState((prev) => ({
        ...prev,
        isLoading: true
      }))

      const data = await getImages(state.searchQuery, state.page);

      if (data.hits.length === 0) {
        console.log("Images not found");
      }

      setState(prev => ({
        ...prev,
        images: [...prev.images, ...data.hits],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: 'Something went wrong!'
      }));
    } finally {
      setState((prev) => ({
        ...prev,
        isLoading: false
      }));
    }
  }; 

  useEffect(() => {
    addImages();
  }, [state.page, state.searchQuery]);

  return (
    <div className="App">
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        {state.isLoading && <Loader/>}
        <ImageGallery images={state.images} />
        {state.images.length > 0 && state.page !== state.totalPages && <LoadMore handleLoadMore={handleLoadMore} />}
    </div>
  )
}
