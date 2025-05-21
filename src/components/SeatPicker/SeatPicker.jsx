import { SeatRow } from '../SeatRow/SeatRow'
import './SeatPicker.css'

export const SeatPicker = ({seats}) => {

    return (
        <div className="seat-picker container">
            <h2>Vyberte sedadlo</h2>
            <div className="seats">
                {seats.map((row, i) => 
                 <SeatRow key={i} row={row} />
                )}
            </div>
        </div>
    )
}