import { useEffect, useState } from "react"
import AudioVisualizer from "./AudioVisualizer";

let analyser: any;
let dataArray: any;
let rafId: any;
const AudioAnalyser = (props: any) => {
    const {audio} = props;
    const [audioData, setAudioData] = useState(new Uint8Array(0));
   // const [analyser, setAnalyser] = useState<any>(null);
    // const [dataArray, setDataArray] = useState<any>(null);
   // const [rafId, setRafid] = useState<any>(null);

    useEffect(() => {
        let source: MediaStreamAudioSourceNode;
        if( typeof window !== 'undefined') {
            const audioContext = new (window.AudioContext)();
            console.log("audioContext", audioContext);
            analyser = audioContext.createAnalyser();
            console.log("analyser", analyser);
            // setAnalyser(analysers)
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            //setDataArray(dataArray);
            source = audioContext.createMediaStreamSource(audio);
            source.connect(analyser);
            rafId = requestAnimationFrame(tick);
        }
        
        //setRafid(rafId);

        return(() => {
            cancelAnimationFrame(rafId);
            analyser.disconnect();
            if(source) {
                source.disconnect();
            }
            
        })
    }, [])

    const tick = () => {
        analyser.getByteTimeDomainData(dataArray);
        setAudioData(dataArray);
        requestAnimationFrame(tick)
       // setRafid();
      }
    return <AudioVisualizer audioBufferData={audioData} />
}
export default AudioAnalyser