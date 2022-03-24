const Wind = ({ speed, direction }) => {
    return (
        <div className="box">

            <img className="arrow" src="/windarrow.png" alt={`wind arrow pointing at ${direction}`} style={{ transform: `rotate(${direction}deg)` }} />

            <div className="header">Wind:</div>

            <div className="windspeed">{speed} mph</div>

        </div>
    )
}

export default Wind