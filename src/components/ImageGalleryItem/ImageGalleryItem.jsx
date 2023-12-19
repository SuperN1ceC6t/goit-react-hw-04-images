import { Modal } from "components/Modal/Modal";
import { Component } from "react"

export class ImageGalleryItem extends Component {
    
    state = {
    isModalOpen: false,
    };

    toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
    };

    render() {
        const { image } = this.props;
        return (
            <>
                <div className="ImageGalleryItem" onClick={this.toggleModal}>
                    <img className="ImageGalleryItem-image" src={image.webformatURL} alt={image.tags} />
                </div>
                {this.state.isModalOpen && (<Modal largeImageURL={ image.largeImageURL} alt={image.tags} onCloseModal={this.toggleModal} />)}
            </>
        )
    }
}