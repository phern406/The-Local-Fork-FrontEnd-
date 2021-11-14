import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Figure } from "react-bootstrap";
import FigureImage from "react-bootstrap/esm/FigureImage";
import { Link } from "react-router-dom";
import "../Restaurant.css";

function Restaurants() {
  const [data, setData] = useState([]);

  const { restaurantId } = useParams();
  const [restId, setRestId] = useState("");
  console.log(restId);
  const [reviewData, setReviewData] = useState([]);
  const [message, setMessage] = useState("Not signed in");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurant/${restaurantId}`)
      .then((res) => {
        setData(res.data.data);
        setRestId(res.data.data._id);
        return axios.get(
          `http://localhost:5000/review/review/${res.data.data._id}`
        );
      })
      .then((reviewDataFound) => {
        console.log(reviewDataFound);
        setReviewData(reviewDataFound.data.reviewData);
      });
    //setSignedIn = localStorage.getItem('myToken')
  }, [restaurantId]);

  return (
    <div className="container">
      <div className="main-content">
        <Figure>
          {data.image?.length > 0 && (
            <FigureImage
              src={data?.image[0]}
              style={{
                width: "30rem",
                marginTop: "5px",
                marginLeft: "5px",
              }}
            />
          )}

          <Figure.Caption>
            <h1>{data.name}</h1>
            <br />
            <h3>{data.location}</h3>
            <br />
            <h6>{data.hours} Hours a Day </h6>
            <br />
            <h6>{data.rating} Star Rating</h6>
            <br />
            {reviewData.map((review, id) => {
              return (
                <div key={id}>
                  <h3>Your Reviews: </h3>
                  
                  <h4>{review.name}</h4>

                  <h6>{review.review}</h6>
                  <br />
                </div>
              );
            })}
            <Link to={`/reviews/${restId}`} className="btn btn-primary">
              Add/Edit Review
            </Link>
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
}
export default Restaurants;
