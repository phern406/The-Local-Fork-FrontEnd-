import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Figure } from "react-bootstrap";
import FigureImage from "react-bootstrap/esm/FigureImage";
import { Link } from "react-router-dom";


function Restaurants() {
  const [data, setData] = useState([]);
  const { restaurantId } = useParams();
  const [restId, setRestId] = useState("");
  console.log(restId)
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
  }, [restaurantId]);


  return (
    <div>
      <Figure>

        {data.image?.length > 0 &&
          <FigureImage
            width={171}
            height={180}
            alt="171x180"
            src={data?.image[0]}
            style={{ width: "20rem" }}
          />}

        <Figure.Caption>

          {data.name}
          <br />
          {data.hours} Hours a Day
          <br />
          Address: {data.location}
          <br />
          Rating {data.rating} stars
          <br />
          {reviewData.map((review, id) => {
            return (
              <div key={id}>
                <h3>{review.title}</h3>
                <br />
                <h5>{review.review}</h5>

              </div>
            );
          })}
          <Link to={`/reviews/${restId}`} className="btn btn-primary">Add/Edit Review</Link>
        </Figure.Caption>
      </Figure>


    </div>
  );
}
export default Restaurants;
