import Image from 'next/image';
;

type ImageProps = {
  src: string;
  alt: string;
  height_ratio?: number;
  width_ratio?: number;
  height?: string;
  width?: string;
  fit?: string;
};

const ResponsiveImage = ({
  src,
  alt,
  height_ratio = 1,
  width_ratio = 1,
  height,
  width,
  fit,
}: ImageProps) => {
  return (
    <div
      style={{
        position: 'relative',
        height: height,
        width: width,
        aspectRatio: width_ratio / height_ratio,
      }}>
      <Image alt={alt} src={src} fill object-fit={fit} sizes='100%' />
    </div>
  );
};

export default ResponsiveImage;
