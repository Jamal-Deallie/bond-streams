import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy'

type VideoProps = {
  url?: string;
  mute?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playing?: boolean;
};

const ResponsiveVideo = ({
  url,
  mute,
  autoPlay,
  playing,
  loop = false,
}: VideoProps) => {
  const [hasWindow, setWindow] = useState(false);
  // console.log(loop);
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
          loop={loop}
          controls={false}
          volume={1}
          url={url}
        />
      ) : null}
    </>
  );
};

export default ResponsiveVideo;
