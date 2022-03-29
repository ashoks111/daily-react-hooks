import { useDaily } from '@daily-co/daily-react-hooks';
import { useCallback, useState } from 'react';
const VideoTile = () => {

    const callObject = useDaily();
    const [muted, setMuted] = useState(false);

    const toggleCamera = useCallback(() => {
        console.log('toggle cam', callObject);
        callObject?.setLocalVideo(muted);
        setMuted(!muted);
      }, [ callObject, muted ]);

    console.log("call object", callObject);
    return (
        <div>
            <button onClick={toggleCamera}>njs</button>
        </div>
    )
}
export default VideoTile;