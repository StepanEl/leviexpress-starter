import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker';

export const HomePage = () => {
  const[yourney, setYourney] = useState(null)
  const handleJourneyChange = (yourneyData) => {
    setYourney(yourneyData)
  }
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {yourney && `Nalezeno spojení s id ${yourney.journeyId}`}
    </main>

  );
};
