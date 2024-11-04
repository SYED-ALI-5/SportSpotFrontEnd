import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import Calendar from "./Calender";
import edit_icon from "../Assets/Edit.svg";
import std_icon from "../Assets/sign_Bg.jpeg";
import stdd_icon from "../Assets/login_Bg.jpeg";

export default function Ground_Owner() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className="container mt-5 mb-2">
        <div className="owner-img-name-edit-aprove-revenue">
          <div className="owner-img-name-edit-aprove">
            <div className="owner-img-name-edit">
              <div className="owner-image">
                <img src={require("../Assets/owner.jpeg")} alt="Owner-Image" />
              </div>
              <div className="no-class">
                <h2 className="owner-name">Syed Ahmad Ali</h2>
                <Link to="./editor" className="btn-edit-owner">
                  Edit Personal Details
                  <img src={edit_icon} alt="Edit Icon" />
                </Link>
              </div>
            </div>
            <div className="upcoming-bookings mt-5 px-2 py-2">
              <div
                className="upcoming-bookings-info p-2"
                style={{
                  borderRight: "2px solid #55ad9b",
                }}
              >
                <h5 style={{ color: "#55ad9b" }}>
                  Pitch 20/100 M<br />
                </h5>
                <span>
                  <b>Timing :</b> 2:00 Pm - 4:00 Pm
                  <br />
                </span>
                <span>
                  <b>Date :</b> 24th Oct 2024
                  <br />
                </span>
                <span>
                  <b>Booked By :</b> Syed Ahmad Ali
                  <br />
                </span>
                <span>
                  <b>Status :</b> Approved
                  <br />
                </span>
                <span>
                  <strong>After 2 Days</strong>
                </span>
              </div>
              <div
                className="upcoming-bookings-info p-2"
                style={{
                  borderRight: "2px solid #55ad9b",
                }}
              >
                <h5 style={{ color: "#55ad9b" }}>
                  Pitch 50/80 M<br />
                </h5>
                <span>
                  <b>Timing :</b> 6:00 Pm - 8:00 Pm
                  <br />
                </span>
                <span>
                  <b>Date :</b> 26th Oct 2024
                  <br />
                </span>
                <span>
                  <b>Booked By :</b> Muhammad Sameer
                  <br />
                </span>
                <span>
                  <b>Status :</b> Pending
                  <br />
                </span>
                <span>
                  <strong>After 4 Days</strong>
                </span>
              </div>
              <div className="upcoming-bookings-info p-2">
                <h5 style={{ color: "#55ad9b" }}>
                  Pitch 40/90 M<br />
                </h5>
                <span>
                  <b>Timing :</b> 10:00 Pm - 12:00 Am
                  <br />
                </span>
                <span>
                  <b>Date :</b> 27th Oct 2024
                  <br />
                </span>
                <span>
                  <b>Booked By :</b> Abdul Haseeb
                  <br />
                </span>
                <span>
                  <b>Status :</b> Approved
                  <br />
                </span>
                <span>
                  <strong>After 5 Days</strong>
                </span>
              </div>
            </div>
          </div>
          {/* <div className="revenue">
            <h2>Revenue Details</h2>
            <div className="revenue-data">
              {pitches.map((pitch, index) => (
                <div
                  className="revenue-data-specific pt-1 pb-1"
                  key={index}
                  style={{
                    borderBottom:
                      index === pitches.length - 1
                        ? "none"
                        : "2px solid #55ad9b",
                  }}
                >
                  <span>
                    {pitch.name}
                    <br />({pitch.location})
                  </span>
                  <span>
                    Last Month : {pitch.lastMonth}
                    <br />
                    Total : {pitch.total}
                  </span>
                </div>
              ))}
            </div>
            <h3 className="pt-2" style={{ borderTop: "2px solid #55ad9b" }}>
              Total Last Month: 9000
            </h3>
            <h3 className="pt-1">Total Revenue: 30000</h3>
          </div> */}

          <div className="revenue">
            <h2>Revenue Details</h2>
            <div className="revenue-data">
              <div className="revenue-data-specific pt-1 pb-1">
                <span>
                  Pitch 50/20 M<br />
                  (Buptian Chowk)
                </span>
                <span>
                  Last Month : 3000
                  <br />
                  Total : 10000
                </span>
              </div>
              <div className="revenue-data-specific pt-1 pb-1">
                <span>
                  Pitch 80/40 M<br />
                  (Buptian Chowk)
                </span>
                <span>
                  Last Month : 3000
                  <br />
                  Total : 10000
                </span>
              </div>
              <div className="revenue-data-specific pt-1 pb-1">
                <span>
                  Pitch 100/50 M<br />
                  (Buptian Chowk)
                </span>
                <span>
                  Last Month : 3000
                  <br />
                  Total : 10000
                </span>
              </div>
            </div>
            <h3 className="py-1">Total Last Month: 9000</h3>
            <h3 className="py-1">Total Revenue: 30000</h3>
          </div>
        </div>

        <div className="edit-ground-details-calender my-5">
          <div className="edit-ground-details px-4">
            <h2 style={{ color: "#3c8a74"}}>Stadium Details</h2>
            <div className="name-loc">
              <h3 style={{ color: "#55ad9b"}}>Boys Pitch</h3>
              <div className="loc">
                <FaMapMarkerAlt className="icon" />
                <span>Bhuptian Chow, Raiwind</span>
              </div>
            </div>
            <div className="pitch-pictures-edit">
              <div id="carouselExampleIndicators" className="carousel slide">
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active image-slide">
                    <img src={std_icon} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item image-slide">
                    <img src={stdd_icon} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item image-slide">
                    <img src={std_icon} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="pitch-data p-2">
              <div className="pitch-dimen-price">
                <span style={{ color: "#55ad9b", fontWeight: 500 }}>
                  Pitch 50/20 M
                </span>
                <span style={{ fontWeight: 500 }}>Rs.1500/H</span>
              </div>
              <div className="pitch-dimen-price">
                <span style={{ color: "#55ad9b", fontWeight: 500 }}>
                  Pitch 80/40 M
                </span>
                <span style={{ fontWeight: 500 }}>Rs.1700/H</span>
              </div>
              <div className="pitch-dimen-price">
                <span style={{ color: "#55ad9b", fontWeight: 500 }}>
                  Pitch 100/50 M
                </span>
                <span style={{ fontWeight: 500 }}>Rs.1900/H</span>
              </div>
            </div>
            <div className="p-3">
              <button className="edit-ground">
                <FaEdit /> Edit
              </button>
            </div>
          </div>

          <div className="calender">
            <h2 className="mb-5">Check Upcoming Bookings</h2>
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
            <div className="booked-slots">
              <button
                className="slots-button dropdown btn-back"
                type="button"
                // aria-expanded={showSlots}
                // onClick={handleShowSlotsClick}
              >
                SHOW SLOTS STATUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
