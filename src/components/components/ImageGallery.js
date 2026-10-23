import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-spring-lightbox';

const photos = [1, 2, 3, 4, 5, 6].map(n => ({
  src: `./img/gallery/${n}.jpg`,
  width: 2,
  height: 1,
  alt: `Project ${n}`
}));

export default () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const gotoPrevious = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  const gotoNext = () => currentIndex + 1 < photos.length && setCurrentIndex(currentIndex + 1);

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} margin={5} />
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        onClose={() => setIsOpen(false)}
        images={photos}
        currentIndex={currentIndex}
        style={{ background: 'rgba(0, 0, 0, 0.9)' }}
      />
    </div>
  );
};
