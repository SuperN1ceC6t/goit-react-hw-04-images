import { Component } from 'react';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.onCloseModal();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;
    console.log(this.props);

    return (
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
  }
}