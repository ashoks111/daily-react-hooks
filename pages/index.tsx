import type { NextPage } from 'next'
import DailyIframe from '@daily-co/daily-js';
import { DailyProvider } from '@daily-co/daily-react-hooks';
import { useEffect, useState } from 'react';
import Participants from '../component/participants';

const DAILY_URL = 'https://loungesnextdemo.daily.co/textdemo';

const Home: NextPage = () => {
  const [callObject, setCallObject] = useState<any>(null);
  const [data, setData] = useState('');

  useEffect(() => {
    if (!DailyIframe) return;

    const newCallObject = DailyIframe.createCallObject();
    
    setCallObject(newCallObject);
    newCallObject.join({ url: DAILY_URL });
  }, []);

  console.log('newCallObject', callObject)

  return (
    <DailyProvider callObject={callObject}>
      <button onClick={()=>{setData('1')}}>Parent Click</button>
      {callObject && <Participants />}
    </DailyProvider>
  )
}

export default Home
