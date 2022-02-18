// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const style = {
  card: {
    margin: 20,
    background: "#BB3E03",
  }

};

const Home = [
  { clubName: "club111", id: 123, userName: "somthing ABC" },
  { clubName: "club222", id: 234, userName: "somthing BCD" },
  { clubName: "club333", id: 345, userName: "somthing CDE" },
  { clubName: "club444", id: 456, userName: "somthing DEF" },
  { clubName: "club555", id: 567, userName: "somthing EFG" },
  { clubName: "club666", id: 678, userName: "somthing FGH" }

]
function Greeting() {
  // Declare a state variable `clubPage` using `useState`
  // Give the method to update it a name, `setClubPages`

  let [WelcomLetter] = useState(
    'Welcome!');
  // Convert `group` to a state variable using the `useState` hook.
  // Set to an initial value to an array 
  // let [clubPages] = useState(["?????"]);

  return (

    <div style={style.card}>
      {/* Render the `greeting` state variable */}
      <p className="card-text">{WelcomLetter}</p>

      {/* Render each member from the `clubs` array */}
      {Home.map(club => (
        <>
          <section className="row justify-center">
            <div className="jumbotron">

              <h2 className="card-header">user num1</h2>

              <Col>
                <Card.Text>{club.clubName}</Card.Text>
              </Col>

              <Col>
                {club.userName}
              </Col>

              <Button type="Button">Go to the page</Button>

            </div>
          </section>
        </>
      ))}

    </div>
  );
}

export default Greeting;