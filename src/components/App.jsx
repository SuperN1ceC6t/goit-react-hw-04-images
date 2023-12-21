import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import axios from "axios";
import { LoadMore } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export class App extends Component  {
  state = {
    images: [],
    isLoading: false,
    search: '',
    page: 1,
    error: '',
    totalPages: 0,
  }

  KEY = '22671510-1d0277e7650e6177903139f39'

  handleChange = ({target: {value}}) => {
    this.setState({ search: value })
  }

  handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    images: [],
    page: 1,
  }, () => {
    this.addImages();
  });
}

handleLoadMore = () => {
  this.setState(prev => ({ page: prev.page + 1}), () => {
    this.addImages();
  });
}

  getImages = async (search, page) => {
      const response = await axios(`https://pixabay.com/api/?q=${search}&page=${page}&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      return response.data
  }

  addImages = async () => {
    try {
      this.setState({ isLoading: true })

      const data = await this.getImages(this.state.search, this.state.page);

      if (data.hits.length === 0) {
        console.log("Images not found");
      }

      this.setState(state => ({
        images: [...state.images, ...data.hits],
        isLoading: false,
        error: '',
        totalPages: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: 'Something went wrong!' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
    <div className="App">
        <Searchbar handleChange={this.handleChange} handleSubmit={ this.handleSubmit} />
        {this.state.isLoading && <Loader/>}
        <ImageGallery handleOpenModal={this.handleOpenModal} images={this.state.images} />
        {this.state.images.length > 0 && this.state.page !== this.state.totalPages && <LoadMore handleLoadMore={ this.handleLoadMore} />}
    </div>
  )}
};
