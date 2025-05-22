import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';
import { SeatPicker } from '../../components/SeatPicker/SeatPicker';

export const HomePage = () => {
  let navigate = useNavigate();
  const [journey, setJourney] = useState(null)
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData)
  }

  const handleBuy = async () => {
    const fetchTicket = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    });

    const data = await fetchTicket.json();
    const reservationId = data.results.reservationId
    navigate(`/reservation/${reservationId}`)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <JourneyDetail journey={journey} />}
      {journey && <SeatPicker seats={journey.seats} selectedSeat={journey.autoSeat}/>}

      <div className="controls container">
        <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
      </div>
    </main>
  );
};
