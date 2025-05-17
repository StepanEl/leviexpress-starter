import './BusStops.css'

export const BusStops = ({name, station, time }) => (
    <>
        <div className="bus-stop">
            <div className="bus-stop__bullet"></div>
            <div className="bus-stop__place">
                <div className="bus-stop__city">{name}</div>
                <div className="bus-stop__station">{station}</div>
            </div>
            <div className="bus-stop__departure">{time}</div>
        </div>
   
    </>
)