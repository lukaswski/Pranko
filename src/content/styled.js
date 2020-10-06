import styled from 'styled-components';
import {
  Container, Card, Table, Jumbotron, Button,
} from 'react-bootstrap';
import sofa from '../img/sofa.jpg';
import sofaMobile from '../img/sofaMobile.jpg';
import girl from '../img/girl.jpg';
import girlMid from '../img/girlMid.jpg';

export const SofaCover = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${sofa}');
    @media (max-width: 600px) {
      background-image: url('${sofaMobile}');
        }
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export const StyledContainer = styled(Container)`
background: rgba(255, 255, 255, 0.44);
border-radius: 20px;
margin-top: 80px;
text-align: center;
font-family: Wire One, Helvetica, sans-serif;
letter-spacing: 1.5rem;
font-size: 8rem;
width: 85%;
  .underline{
          font-family: Helvetica, sans-serif;
          font-size: 1rem;
          padding-bottom: 2rem;
          letter-spacing: 0.2rem;
        }
        @media (max-width: 450px){
          letter-spacing: 1rem;
          font-size: 4rem;
          .underline{
            font-size: 0.7rem;
          }
        }
        @media (max-width: 300px){
          .underline{
            font-size: 12px;
          }
        }
`;

export const DesignerContainer = styled.div`
  margin-top: 200px;
`;

export const SectionContainer = styled(Container)`
margin-top: 5vh;
font-family: Helvetica;
width: 100%;
height: 100%;
`;

export const StyledCard = styled(Card)`
box-shadow: 2px 2px 5px dimgray;
text-align: center;
font-size: 12px;
height: 280px;
width: 100%;
margin-top: 5%;
        @media(max-width: 991px){
          width:280px;
          height: 350px;
        };
        @media(max-width: 768px){
          width: 90%;
          height: 300px;
        };
        @media(max-width: 580px){
          width: 120%;
          height: 100%;
          margin: 20px auto;
        }
`;

export const StyledImg = styled(Card.Img)`
  width: 100%;
  height: 80%;
`;

export const StyledTable = styled(Table)`
  text-align: center;
  max-width: 60%;
  margin: 6vh auto;
  padding-top:50%;
    &.Cars{
      max-width: 80%;
      margin: 6vh auto;
    }
    @media(max-width: 991px){
      max-width: 80%;
    };

`;

export const StyledJumbotron = styled(Jumbotron)`
  background: linear-gradient(
    45deg,
    rgba(182,228,251,0.31416316526610644) 9%,
    rgba(182,228,251,0.804359243697479) 57%,
    rgba(182,228,251,0) 100%);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    margin-top: 80px;
    padding: 5% 10%;
      &.photoCover{
        background-image: url('${girl}');
        background-size: cover;
        background-attachment: fixed;
        opacity: 90%;
        @media(max-width: 768px){
          background-image: url('${girlMid}');
          background-attachment: unset;
        }
      }
      &.footer{
        height:550px;
        margin: 140px 0 0 0;
        background: rgb(255,255,255);
        background: linear-gradient(
          180deg,
          rgba(255,255,255,0.9528186274509804) 15%,
          rgba(234,255,251,0.896796218487395) 30%,
          rgba(134,190,255,0.5942752100840336) 55%,
          rgba(123,177,255,0.8603816526610644) 70%,
          rgba(107,159,255,0.804359243697479) 80%,
          rgba(103,142,255,1) 100%);
      }
      &.blanc{
        background: white;
        margin: 10px auto;
      }`;

export const StyledButton = styled(Button)`
  height: 45px;
  width: 45px;
  box-shadow: 5px 5px 7px dimgray;
  border-radius: 20%;
  position: fixed;
  right: 10%; 
  bottom: 10%;
  opacity: 60%;
  animation-name: example;
  animation-duration: 1.5s;
}
    @keyframes example {
      from {opacity: 0;}
      to {opacity: .6;}
    }
        :hover {
        opacity:100%;
        
      }
    @media(max-width: 768px){
      left: calc(50% - 22.5px);
      bottom: 5%;
    }`
;
