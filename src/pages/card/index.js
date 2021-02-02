import { BsFillClockFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import "./styles.css";

let cardData = [
  {
    airtime: 200,
    starrate: 50,
  },
  {
    airtime: 280,
    starrate: 50,
  },
  {
    airtime: 200,
    starrate: 50,
  },
  {
    airtime: 200,
    starrate: 50,
  },
  {
    airtime: 200,
    starrate: 50,
  },
  {
    airtime: 200,
    starrate: 50,
  },
];
function Card() {
  return (
    <div className="Card">
      <div className="  grid grid-cols-3 gap-5" id="grid-container">
        {cardData.map(({ airtime, starrate }) => (
          <div
            className="bg-white p-7 flex flex-col justify-center items-center"
            id="card"
          >
            <div className="star-rate">
              <span>
                <AiFillStar />
              </span>
              <small>{starrate}k</small>
            </div>

            <div className="icon w-max" id="card-icon">
              <BsFillClockFill color="#36A6DE" className="h-5 w-5" />
            </div>

            <h3 className="amount">Airtime N{airtime}</h3>

            <div className="w-full">
              <button className="w-full border  p-1.5 ">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
