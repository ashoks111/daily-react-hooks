import { useDaily, useDailyEvent, useLocalParticipant, useParticipant, useParticipantIds } from '@daily-co/daily-react-hooks';
import { useCallback, useState } from 'react';
import VideoTile from './videoTile';

const Participants = () => {
    const daily =  useDaily();
    const participantIds = useParticipantIds({filter: 'local'});
    const [meetingState, setMeetingState] = useState('');

    useDailyEvent(
      'joined-meeting',
      useCallback(ev => {
        setMeetingState('joined');
      }, []),
    );
    useDailyEvent(
      'left-meeting',
      useCallback(ev => {
        setMeetingState('leave');
        console.log("leave meeting")
        daily?.startCamera();
      }, []),
    );

    const join =() => {
      daily?.join({url: 'https://diagnal.daily.co/loungetest'})
    }

    const leave = () => {
      daily?.leave();
    }

    return (
        <div>
          {meetingState === 'joined' ? <button onClick={leave}>Leave</button> : <button onClick={join}>Join</button>}
           
                {participantIds.map((id) => <VideoTile key={id} participantId={id} />)}
  
        </div>
      
    )
  }
  export default Participants