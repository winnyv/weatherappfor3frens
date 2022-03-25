// Display wind info by using arguments passed.

const Wind = ({ speed, dir }) => {
    return (
        <div className="box">

            <img className="arrow" src="/windarrow.png" alt={`wind arrow pointing at ${dir}`} style={{ transform: `rotate(${dir}deg)` }} />

            <div className="header">Wind:</div>

            <div className="windspeed">{speed} mph</div>

        </div>
    )
}

export default Wind