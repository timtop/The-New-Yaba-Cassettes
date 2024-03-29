import React from "react";
import downloadbtn from "./imgs/Download icon.svg";
import "./styles/sermons.css";

function Sermons1({ sermons }) {
  const render2021 = () => {
    return sermons.map((sermon) => {
      return (
        <div className="sermon_card">
          <img src={sermon.img} alt="Avatar" className="sermon_img" />
          <div className="sermon_container">
            <div className="sermon_title">
              <b>{sermon.title}</b>
            </div>
            <div className="sermon_preacher">{sermon.preacher}</div>
            <div className="sermon_date">{sermon.date}</div>
            <a href={sermon.link} download={sermon.name}>
              <div className="download_btn">
                <img src={downloadbtn} alt="Avatar" className="download_icon" />
                Download
              </div>
            </a>
          </div>
        </div>
      );
    });
  };

  // const render2022 = () => {
  //   return sermons2022.map((sermon) => {
  //     return (
  //       <div className="sermon_card">
  //         <img src={sermon.img} alt="Avatar" className="sermon_img" />
  //         <div className="sermon_container">
  //           <div className="sermon_title">
  //             <b>{sermon.title}</b>
  //           </div>
  //           <div className="sermon_preacher">{sermon.preacher}</div>
  //           <div className="sermon_date">{sermon.date}</div>
  //           <a href={sermon.link} download={sermon.name}>
  //             <div className="download_btn">
  //               <img src={downloadbtn} alt="Avatar" className="download_icon" />
  //               Download
  //             </div>
  //           </a>
  //         </div>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div className="sermon">
      <h1>Sermons</h1>
      <div className="card_display">{render2021()}</div>

      {/* <h1>Sermons 2021</h1> */}
      {/* <div className="card_display">{render2022()}</div> */}
    </div>
  );
}

export default Sermons1;
