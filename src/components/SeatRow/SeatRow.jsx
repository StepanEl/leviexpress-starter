import { Seat } from "../Seat/Seat"

export const SeatRow = ({ row, rowSelectedSeat, onSelect }) => {
   
    return (
        <div className="seat-row">
            {row.map((seat) =>
             <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied} isSelected={rowSelectedSeat === seat.number} onSelect={onSelect} />
            )}
        </div>
    )
}