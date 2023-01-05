import React from 'react';

class ImageWithTitle extends React.Component {
  state = {
    isHovered: false,
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { imageUrl, title } = this.props;
    const { isHovered } = this.state;

    const filter = isHovered ? 'grayscale(100%)' : 'none';
    const imageStyles = {
      filter,
      transition: 'filter 0.3s ease-in-out',
    };

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={imageUrl} alt={title} style={imageStyles} />
        <p>{title}</p>
      </div>
    );
  }
}

export default ImageWithTitle;
