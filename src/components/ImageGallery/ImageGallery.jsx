import { ImageGalleryItem } from '../../components/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          url={largeImageURL}
          tags={tags}
        />
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
