import React from "react";
import Movies from "../Movie/movie";

function NavBar() {
  return (
    <>  
    <div id="nav">
<ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none rounded-5" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
            Popular
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none rounded-5" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">
            Top Rated
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link d-inline-flex focus-ring focus-ring-light py-1 px-2 text-decoration-none rounded-5" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="true">
            Upcoming
          </button>
        </li>
      </ul>
        </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <Movies type="popular" title="Popular Movies" />
        </div>
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
          <Movies type="top_rated" title="Top Rated Movies" />
        </div>
        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
          <Movies type="upcoming" title="Upcoming Movies" />
        </div>
      </div>
   
      
    </>
  );
}

export default NavBar;
