import React from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import "./style.css"
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button"
import home2 from "../../assets/images/home2.png"
import about1 from "../../assets/images/about1.png"
import about2  from "../../assets/images/about2.png"
import { Col, Row } from "react-bootstrap";


function Home() {

  return ( 

    <Container fluid> 
     
      <div className="container-fluid" id="hero"> </div>
        
   
      <div className="float-right"> 
        <a href="/signup"> <Button className="signup"  variant="outline-danger">Sign Up</Button>{' '}</a> 
        <a href="/login"><Button className="login"  variant="outline-danger">Log In</Button>{' '} </a>
      </div>

    
      
      <img className="home2 mx-auto d-block" src={home2} /> 
      
     
      <h2 className="text-center font-weight-bold" id="quote1"> "Voting is the foundation stone for political action" </h2> 

     
      <h2 className="display-3 text-center font-weight-bold" id="aboutus">About Us</h2>

     
      <Row className="justify-content-md-center"> 
        <Col xs="12" sm="12" lg="7">
           <img className="about1" src={about1}/> 
        </Col>
        <Col xs sm="12" lg="5" className="pl-4">
          <p>
            Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
            Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
            pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
             tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
             posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec
             metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula.
             Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora
             torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
             Etiam vel condimentum magna, quis tempor nulla.
                    
          </p>
        </Col>
      </Row>

     
          <img className="about2 mx-auto d-block" id="about2" src={about2} /> 
          
       
          <p className="display-4 text-center font-weight-bold" id="unitevote" >UnifyingOurVote</p>
       

          <hr/>
              <h3 className="text-center font-weight-bold" id="quote2"> "Injustice anywhere is a threat to justice everywhere" </h3> 
              <h6 className="text-center font-weight-bold" > "Martin Luther King Jr." </h6>
          <hr/>
       
    </Container> 

  
  );
}

export default Home;