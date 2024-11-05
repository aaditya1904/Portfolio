import React from "react";
const handleClickLinkedIn = () => {
  let url = "https://www.linkedin.com/in/adityarajput0404";
  window.open(url, '_blank'); 
};
const handleClickResume = () => {
  let url = "https://drive.google.com/file/d/1gbOmfIIirtaLkstXGRQlQTsE32a-0Avt/view?usp=sharing";
  window.open(url, '_blank'); 
};
function Home() {
  return (
    <>
      <div className="name">
        <section className="name-container">
          <p className="fname">Aditya</p>
          <p className="lname">Rajput</p>
          <div className="btn">
            <button onClick={handleClickLinkedIn}>LinkedIn</button>
            <button onClick={handleClickResume}>Resume</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
