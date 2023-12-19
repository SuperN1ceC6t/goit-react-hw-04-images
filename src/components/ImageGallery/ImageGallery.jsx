import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({handleOpenModal,images}) => {
        return (
            <ul className="ImageGallery">
                {images.map(image => {return <ImageGalleryItem key={image.id} handleOpenModal={handleOpenModal} image={image} />})}
            </ul>
    )
}