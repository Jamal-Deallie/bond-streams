import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

type VideoProps = {
  url?: string;
  mute?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playing?: boolean;
};

const ResponsiveVideo = ({ url, mute, autoPlay, playing }: VideoProps) => {
  const [hasWindow, setWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindow(true);
    }
  }, []);

  return (
    <>
      {hasWindow ? (
        <ReactPlayer
          width={'100%'}
          height={'100%'}
          playing={playing}
          muted={mute}
          autoPlay={autoPlay}
          loop={false}
          controls={false}
          volume={1}
          url={url}
        />
      ) : null}
    </>
  );
};

export default ResponsiveVideo;
