import { AiOutlinePlusCircle } from "react-icons/ai";
import interfaceCalendar from "../assets/interface-calendar--blank-calendar-date-day-month.svg";

export default function Home() {
  


  return (
    <div className="main-div">
      <p className="title">CAPASITY ESTIMATES</p>

      <button>
        <AiOutlinePlusCircle />
        <span>Yeni sprint</span>
      </button>

      <div className="all-sprints">
        <div className="sprint-frame">
          <img src={interfaceCalendar} alt="#" />
          Sprint {id}
        </div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
        <div className="sprint-frame">dd</div>
      </div>
    </div>
  );
}
