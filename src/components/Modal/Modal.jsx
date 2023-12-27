import { useEffect, useCallback } from "react";

export const Modal = ({largeImageURL, alt, onCloseModal}) => {

  const handleKeydown = useCallback((e) => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  }, [onCloseModal]);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, [handleKeydown])

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