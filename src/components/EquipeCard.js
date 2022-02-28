import React from "react";
import { Card } from "react-bootstrap";

const EquipeCard = ({ user }) => {
  return (
    <div className="EquipeCard">
      <Card
        style={{
          width: "13rem",
          height: "25rem",
          margin: "2rem",
          boxShadow: "0 10px 30px 0 rgba(172, 168, 168, 0.43)",
          borderRadius: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={user.img}
          width="50px"
          style={{ padding: "10px" }}
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.role}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EquipeCard;
