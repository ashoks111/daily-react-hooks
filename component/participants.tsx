import { useDaily, useLocalParticipant, useParticipant, useParticipantIds } from '@daily-co/daily-react-hooks';

function ParticipantRow({ id }: any) {
    const participant = useParticipant(id);
  
    return (
      <li style={{ display: 'flex', gap: 8 }}>
        <span>{participant?.user_name ?? 'Guest'}</span>
        <span>📷{participant?.tracks?.video?.state === 'playable' ? '✅' : '❌'}</span>
        <span>🎙️{participant?.tracks?.audio?.state === 'playable' ? '✅' : '❌'}</span>
      </li>
    )
  }

const Participants = () => {
    const daily =  useDaily();
    // getting daily null
    console.log('daily ', daily);
    const participantIds = useParticipantIds({
        filter: 'remote',
        sort: 'user_name'
      });
      // participantIds getting []
      console.log("participantIds", participantIds)
      const getParticipants = () => {
        console.log("participantIds inside func", participantIds)
      }

    return (
        <div>
            <button onClick={getParticipants}>Child Click</button>
            <ul>
                {participantIds.map((id) => <ParticipantRow key={id} id={id} />)}
            </ul>
        </div>
      
    )
  }
  export default Participants