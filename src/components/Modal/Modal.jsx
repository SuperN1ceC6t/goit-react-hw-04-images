import { useEffect } from "react";

export const Modal = ({largeImageURL, alt, onCloseModal}) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [])

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

    return (
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
}
