import { Modal } from "components/Modal/Modal";
import { useState } from "react";

export const ImageGalleryItem = ({image}) => {
    const [state, setState] = useState({
        isModalOpen: false,
    })

    const toggleModal = () => {
        setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
    };

        return (
            <>
                <div className="ImageGalleryItem" onClick={toggleModal}>
                    <img className="ImageGalleryItem-image" src={image.webformatURL} alt={image.tags} />
                </div>
                {state.isModalOpen && (<Modal largeImageURL={ image.largeImageURL} alt={image.tags} onCloseModal={toggleModal} />)}
            </>
        )
}
