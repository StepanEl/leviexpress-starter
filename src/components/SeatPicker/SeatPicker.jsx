import { Seat } from '../Seat/Seat'
import './SeatPicker.css'
export const SeatPicker = () => {

    return(
        <div className="seat-picker container">
            <h2>Vyberte sedadlo</h2>
            <div className="seats">
                <div className="seat-row">
                       <Seat number={1}/>
                        <Seat number={17}/>
                         <Seat number={10}/>
                </div>
            </div>
        </div>
    )
}