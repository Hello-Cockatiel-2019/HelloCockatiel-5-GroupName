import React from 'react';
import '../App.css'
import Navbar from './Nav';
import Textbox from './textbox';
import styled from 'styled-components'
import { Container, Row, Col,} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about';
import Category from './pages/category';
import Gender from './pages/gender';
import Other from './pages/other';
import Other2 from './pages/other2';
import Contact from './pages/contact';
import Background from './background';


export default class index extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <Navbar />
        <About />
        <Category />
        <Other />
        <Other2 />
        <Gender />
      </div>
    )
  }
}