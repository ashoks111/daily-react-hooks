import dynamic from 'next/dynamic';
import { forwardRef, useEffect, useRef, useState } from 'react';

const Video = (props: any) => {
  const { participant } = props;
  const videoContainerEl = useRef<any>();
  const videoEl = useRef<any>();
  const videoTrack = participant?.tracks?.video?.persistentTrack;
  useEffect(() => {
    if (!videoEl) return;
    const video = videoEl.current;
    const videoContainer = videoContainerEl.current;
    if (!video || !videoTrack) return;
  
    video.srcObject = new MediaStream([videoTrack]);

  }, [videoEl, videoTrack]);

  return (
    <div className="shadow-lg mx-auto max-w-full" shaka-controls="false" ref={videoContainerEl} style={{"width": "800px"}}>
        <video  autoPlay  ref={videoEl} className="w-full h-full" />
    </div>
  )
};

Video.displayName = 'video';

export default Video;
