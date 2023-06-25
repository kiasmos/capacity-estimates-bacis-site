import { AiOutlinePlusCircle } from "react-icons/ai";
import interfaceCalendar from "../assets/interface-calendar--blank-calendar-date-day-month.svg";
import trashIcon from "../assets/lucide_trash-2.svg";
import { Link } from "react-router-dom";
import ContentApi from "../components/ContentApi";
import { useContext } from "react";

export default function Home() {
  const { mainData, setMainData } = useContext(ContentApi);


  // function newSprint(e) {
  //   let lastSprintId = mainData[mainData.length - 1].id;
  //   setMainData([
  //     ...mainData,
  //     {
  //       id: lastSprintId + 1,
  //       dataCells: [
  //         {
  //           title: "Corporate overhead",
  //           inputs: [
  //             {
  //               id: 1,
  //               name: "Standups",
  //               value: 0,
  //             },
  //             {
  //               id: 2,
  //               name: "Planning",
  //               value: 0,
  //             },
  //             {
  //               id: 3,
  //               name: "Refinement",
  //               value: 0,
  //             },
  //             {
  //               id: 4,
  //               name: "Chapter sync",
  //               value: 0,
  //             },
  //             {
  //               id: 5,
  //               name: "Digər görüşlər",
  //               value: 0,
  //             },
  //             {
  //               id: 6,
  //               name: "Təlim",
  //               value: 0,
  //             },
  //             {
  //               id: 7,
  //               name: "Şəxsi ehtiyaclar",
  //               value: 0,
  //             },
  //           ],
  //         },
  //         {
  //           title: "Unplanned time",
  //           inputs: [
  //             {
  //               id: 1,
  //               name: "İclaslar",
  //               value: 0,
  //             },
  //             {
  //               id: 2,
  //               name: "Sorğular",
  //               value: 0,
  //             },
  //             {
  //               id: 3,
  //               name: "İcazələr",
  //               value: 0,
  //             },
  //           ],
  //         },
  //         {
  //           title: "Tasks",
  //           inputs: [
  //             {
  //               id: 1,
  //               name: "Task 1",
  //               value: 0,
  //             },
  //             {
  //               id: 2,
  //               name: "Task 2",
  //               value: 0,
  //             },
  //             {
  //               id: 3,
  //               name: "Task 3",
  //               value: 0,
  //             },
  //             {
  //               id: 4,
  //               name: "Task 4",
  //               value: 0,
  //             },
  //             {
  //               id: 5,
  //               name: "Task 5",
  //               value: 0,
  //             },
  //             {
  //               id: 6,
  //               name: "Task 6",
  //               value: 0,
  //             },
  //             {
  //               id: 7,
  //               name: "Task 7",
  //               value: 0,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ]);
  //   e.target.classList.add("newSprintAnimation");
  //   setTimeout(() => {
  //     e.target.classList.remove("newSprintAnimation");
  //   }, 500);
  // }

  function deleteSprint(del, id) {
    del.preventDefault();
    setMainData(mainData.filter((e) => e.id !== id));
  }

  return (
    <div className="main-div">
      <p className="title">CAPASITY ESTIMATES</p>

      <button onClick={(e) => newSprint(e)}>
        <AiOutlinePlusCircle />
        <span>Yeni sprint</span>
      </button>

      <div className="all-sprints">
        {mainData.length &&
          mainData.map((e, i) => {
            return (
              <Link key={e.id} to={`/sprint/${e.id}`} className="sprint-frame">
                <img src={interfaceCalendar} alt="interfaceCalendar" />
                Sprint {e.id}
                <img
                  src={trashIcon}
                  alt="trashIcon"
                  className="trash-icon"
                  onClick={(del) => deleteSprint(del, e.id)}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
