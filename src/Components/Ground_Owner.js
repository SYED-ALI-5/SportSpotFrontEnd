import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import Calendar from "./Calender";
import axios from "axios";

export default function Ground_Owner() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showBookings, setShowBookings] = useState(false);
  const [showFilteredBookings, setShowFilteredBookings] = useState(false);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [bookings, setBookings] = useState([]);
  const [revenueDetails, setRevenueDetails] = useState(null);
  const [ownerDetails, setOwnerDetails] = useState(null);

  useEffect(() => {
    // Fetch data for bookings, revenue, and owner details when the component mounts
    const fetchData = async () => {
      try {
        const bookingsResponse = await axios.get("/api/bookings");
        const revenueResponse = await axios.get("/api/revenue");
        const ownerResponse = await axios.get("/api/owner");

        setBookings(bookingsResponse.data);
        setRevenueDetails(revenueResponse.data);
        setOwnerDetails(ownerResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter bookings based on status
  const filteredBookingsByStatus = bookings.filter(
    (booking) => statusFilter === "All" || booking.status === statusFilter
  );

  const filteredSlotsByStatus = filteredBookings.filter(
    (booking) => statusFilter === "All" || booking.status === statusFilter
  );

  const handleFilterChange = (filter) => {
    setStatusFilter(filter);
  };

  const formatDate = (date) => {
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  const handleShowSlotsClick = () => {
    if (selectedDate) {
      const formattedSelectedDate = formatDate(selectedDate);
      const filtered = bookings.filter(
        (booking) => booking.date === formattedSelectedDate
      );
      setFilteredBookings(filtered);
    } else {
      setFilteredBookings([]);
    }
    setShowFilteredBookings(true); // Show the filtered bookings overlay
    setShowBookings(false); // Hide the upcoming bookings overlay
  };

  const handleViewUpcomingBookingsClick = () => {
    setShowBookings(true); // Show the upcoming bookings overlay
    setShowFilteredBookings(false); // Hide the filtered bookings overlay
  };

  return (
    <>
      <div className="container mt-5 mb-2 first-portion">
        <div className="owner-img-name-edit-aprove-revenue">
          <div className="owner-img-name-edit">
            <div className="owner-image">
              <img
                src={ownerDetails.imageUrl}
                alt="Owner-Image"
              />
            </div>
            <div className="owner-name-edit">
              <h2 className="owner-name">
                {ownerDetails ? ownerDetails.name : "Loading..."}
              </h2>
              <Link to="./editor" className="btn-edit-owner custom-edit-css">
                Edit Personal Details <FaEdit />
              </Link>
            </div>
          </div>

          <div className="pt-3">
            <button
              className="slots-button dropdown btn-back mt-5"
              onClick={handleViewUpcomingBookingsClick}
            >
              View Upcoming Bookings
            </button>

            {showBookings && (
              <div className="overlay-bookings">
                <div className="dropdown-bookings mt-3">
                  <button
                    className="close-button"
                    onClick={() => setShowBookings(false)}
                  >
                    &times;
                  </button>

                  {filteredBookingsByStatus.length > 0 && (
                    <div className="filter-buttons">
                      <button
                        className="filteration px-3 py-2"
                        onClick={() => handleFilterChange("All")}
                      >
                        All
                      </button>
                      <button
                        className="filteration px-3"
                        onClick={() => handleFilterChange("Approved")}
                      >
                        Approved
                      </button>
                      <button
                        className="filteration px-3"
                        onClick={() => handleFilterChange("Pending")}
                      >
                        Pending
                      </button>
                    </div>
                  )}

                  {filteredBookingsByStatus.map((booking, index) => (
                    <div key={index} className="upcoming-booking p-2 border">
                      <h5 style={{ color: "#55ad9b" }}>{booking.pitch}</h5>
                      <span>
                        <b>Timing:</b> {booking.timing}
                        <br />
                      </span>
                      <span>
                        <b>Date:</b> {booking.date}
                        <br />
                      </span>
                      <span>
                        <b>Booked By:</b> {booking.bookedBy}
                        <br />
                      </span>
                      <span>
                        <b>Status:</b> {booking.status}
                        <br />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="revenue">
          <h2>Revenue Details</h2>
          {revenueDetails ? (
            <>
              {revenueDetails.pitches.map((pitch, index) => (
                <div key={index} className="revenue-data-specific pt-1 pb-1">
                  <span>
                    {pitch.name}
                    <br />({pitch.location})
                  </span>
                  <span>
                    Last Month : {pitch.lastMonthRevenue}
                    <br />
                    Total : {pitch.totalRevenue}
                  </span>
                </div>
              ))}
              <h3 className="py-1">
                Total Last Month: {revenueDetails.totalLastMonth}
              </h3>
              <h3 className="py-1">
                Total Revenue: {revenueDetails.totalRevenue}
              </h3>
            </>
          ) : (
            <p>Loading revenue details...</p>
          )}
        </div>
      </div>

      <div className="container edit-ground-details-calender my-5">
        <div className="edit-ground-details px-4">
          <h2 style={{ color: "#55ad9b" }}>Stadium Details</h2>
          {ownerDetails ? (
            <>
              <div className="name-loc">
                <h3 style={{ color: "#55ad9b" }}>{ownerDetails.stadiumName}</h3>
                <div className="loc">
                  <FaMapMarkerAlt className="icon" />
                  <span>{ownerDetails.stadiumLocation}</span>
                </div>
              </div>
              <div className="pitch-pictures-edit">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
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
                    {images.length > 0 ? (
                      <>
                        <div className="carousel-item active">
                          <img
                            src={images[0]}
                            className="d-block w-100"
                            alt="Ground Picture"
                          />
                        </div>
                        {images.slice(1).map((img, index) => (
                          <div key={index} className="carousel-item">
                            <img
                              src={img}
                              className="d-block w-100"
                              alt="Ground Picture"
                            />
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>No images available</p>
                    )}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="pitch-data p-2">
                {ownerDetails && ownerDetails.pitches ? (
                  ownerDetails.pitches.map((pitch, index) => (
                    <div key={index} className="pitch-dimen-price">
                      <span style={{ color: "#55ad9b", fontWeight: 500 }}>
                        {pitch.name} ({pitch.dimension})
                      </span>
                      <span style={{ fontWeight: 500 }}>
                        Rs.{pitch.price}/H
                      </span>
                    </div>
                  ))
                ) : (
                  <p>Loading pitch details...</p>
                )}
              </div>

              <div className="p-3">
                <button className="edit-ground">
                  <FaEdit /> Edit
                </button>
              </div>
              {/* Render additional pitch and pricing details dynamically */}
            </>
          ) : (
            <p>Loading stadium details...</p>
          )}
        </div>

        <div className="calender">
          <h2 className="mb-5" style={{ color: "#55ad9b" }}>
            Check Upcoming Bookings
          </h2>
          <Calendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <div className="booked-slots">
            <button
              className="slots-button dropdown btn-back"
              onClick={handleShowSlotsClick}
            >
              SHOW SLOTS STATUS
            </button>
          </div>
          {showFilteredBookings && (
            <div className="overlay-bookings">
              <div className="dropdown-bookings mt-3">
                <button
                  className="close-button"
                  onClick={() => setShowFilteredBookings(false)}
                >
                  &times;
                </button>

                {filteredSlotsByStatus.length > 0 ? (
                  filteredSlotsByStatus.map((booking, index) => (
                    <div key={index} className="upcoming-booking p-2 border">
                      <h5 style={{ color: "#55ad9b" }}>{booking.pitch}</h5>
                      <span>
                        <b>Timing:</b> {booking.timing}
                        <br />
                      </span>
                      <span>
                        <b>Date:</b> {booking.date}
                        <br />
                      </span>
                      <span>
                        <b>Booked By:</b> {booking.bookedBy}
                        <br />
                      </span>
                      <span>
                        <b>Status:</b> {booking.status}
                        <br />
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No bookings found for the selected date and filter.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
