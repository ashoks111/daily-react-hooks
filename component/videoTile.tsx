import { useParticipant } from '@daily-co/daily-react-hooks';
import {  useRef, } from 'react';
import dynamic from 'next/dynamic';
import SoundMeter from './SoundMeter';

const Video =dynamic(import ("./video"),{ssr:false});
const VideoTile = (props: any) => {

    const { participantId, self } = props;
    const participant = useParticipant(participantId);

    console.log("participant", participant)
    //@ts-ignore
    const audioTrack = participant?.tracks?.audio?.persistentTrack;

    const videoRef = useRef<HTMLVideoElement | null>(null);

    return (
        <div>
          <Video participant={participant}/>
        </div>
    )
}
export default VideoTile;