import { useParams } from "react-router-dom";

export const ReservationPage = () => {
  const {reservationId} = useParams()
  return (
    <main>
     <h2>Vaše e-jizdenka</h2>
    </main>
  );
};