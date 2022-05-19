import { useState } from "react";
import AudioAnalyser from "./AudioAnalayser";

const SoundMeter = (props: any) => {
  const {audioTrack} = props;
    // const [audio, setAudio] = useState<MediaStream | null>(null);
    // const toggleMicrophone = () => {
    //     if(audio) {
    //         stopMicroPhone();
    //     } else {
    //         startMicroPhone();
    //     }
    // }
    // const startMicroPhone = async () => {
        // const audio = await navigator.mediaDevices.getUserMedia({
        //     audio: true,
        //     video: false
        //   });
    //       setAudio(audio);
    // }

    // const stopMicroPhone = () => {
    //     audio?.getTracks().forEach(track => track.stop());
    //     setAudio(null);
    // }
    return (
        <div className="flex" style={{backgroundColor: '#000000'}}>
        {/* <div  >
          <button onClick={toggleMicrophone}>
            {audio ? 'Stop microphone' : 'Get microphone input'}
          </button>
        </div> */}
        {audioTrack ? <AudioAnalyser audio={new MediaStream([audioTrack])} /> : ''}
      </div>
    )
}
export default SoundMeter;