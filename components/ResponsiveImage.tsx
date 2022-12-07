import React from 'react';
import { AdvancedImage, responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import styles from '@/styles/components/responsiveImage.module.scss';

type ImageProps = {
  url: string;
};

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_KEY,
  },
});

const ResponsiveImage = ({ url }: ImageProps) => {
  let img = cld.image(url);
  img.quality('auto').format('auto');
  return (
    <AdvancedImage
      className={styles.image}
      cldImg={img}
      style={{ maxWidth: '100%' }}
      plugins={[responsive(), placeholder()]}
    />
  );
};

export default ResponsiveImage;
