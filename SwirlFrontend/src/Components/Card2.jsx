import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import Context1 from "../Context/Context1";
const Card2 = ({ img, title, text }) => {
  const { DarkLight } = useContext(Context1);

  let Textcolor = DarkLight ? "black" : "white";
  let bgcolor = DarkLight ? "#F4EFFF" : "#230646";

  return (
    <Card2Div>
      <Card style={{ width: "185px", backgroundColor: `${bgcolor}` }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title
            style={{ fontWeight: "700", fontSize: "12px", lineHeight: "22px" }}
            className={`text-${Textcolor}`}
          >
            {title}
          </Card.Title>
          <Card.Text
            style={{ fontWeight: "400", fontSize: "12px", lineHeight: "24px" }}
            className={`text-${Textcolor} `}
          >
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    </Card2Div>
  );
};

export default Card2;

const Card2Div = styled.div`
  .card {
    @media (max-width: 665px) {
      width: 330px !important;
      /* height: 40vh; */
    }
    @media (max-width: 380px) {
      width: 280px !important;
      /* height: 40vh; */
    }
  }
`;
