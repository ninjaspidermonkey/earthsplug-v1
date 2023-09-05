
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../Images/EarthsPlugLogoNav.png';
import heroImg from '../Images/seamoss-pic-rawmoss-1.jpeg';
import jarpic1 from '../Images/IMG_4158.jpg';
import benefitsImg from '../Images/undraw_healthy_lifestyle_re_ifwg 1.svg';
import usesImg from '../Images/undraw_diet_ghvw.svg';
import bowlImg from '../Images/bowlImg.jpeg';

const MainWrapper = styled.div`
    #hero {
        width: 100%;
        height: 90vh;
        box-shadow: 0px 10px 30px #ccc;
        background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .95)),
            url(${heroImg}) no-repeat left / cover;
        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        h1, p {
            color: #f1f1f1;
            text-align: center;
        }
        h1 {
        }
        p {
            max-width: 600px;
            margin-inline: auto;
            padding: 5vh 0;
        }
        .btn {
            display: flex;
            justify-content: center;
        }
    }
    #products {
        width: 100%;
        background: linear-gradient(180deg, #F5F5F5 0%, #F1F1F1 100%);
        li {
        }
        .two-col {
        }
        .col1 {
        }
        .col2 {
            display: flex;
        }
        button {
            margin-right: 1vw;
            margin-bottom: 1vh;
        }
        img {
            width: 100%;
            max-width: 300px;
            height: auto;
            margin: auto;
            box-shadow: 0px 20px 100px rgba(38, 1, 1, 0.5);
            filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.5));
            border-radius: 12px;
        }
    }
    #benefits {
        width: 100%;
        background: linear-gradient(180deg, #F1F1F1 0%, #e5e5e5 100%);
        li {
            padding: 2% 0;
        }
    }
    #uses {
        width: 100%;
        //background: linear-gradient(180deg, #e5e5e5 0%, #e9e9e9 100%);
        background-color: #e1e1e1;
        li {
            padding: 1% 0;
        }
        img {
            width: 75%;
            margin: auto;
        }
        .col2 {
            display: flex;
        }
    }
    #about {
        width: 100%;
        background-color: #e9e9e9;
        .col1 {
        }
        .col2 {
        }
        img {
            width: 100%;
            height: auto;
            box-shadow: 0px 5px 50px 10px rgba(0, 0, 0, 0.5);
            border-radius: 12px;
            margin: auto;
        }
    }
    #goal {
        display: flex;
        flex-direction: column;
        padding: 20% 0;
        background-color: #1b1b1b;
        color: #f1f1f1;
        h2 {
            text-align: center;
        } 
        p {
            margin: auto;
            max-width: 600px;
        }
    }
    #footer {
        display: flex;
        background-color: #f5f5f5;
        h4,
        p {
            font-size: .8rem;
            text-align: center;
        }
        .col {
            padding: 5%;
            margin: auto;
        }
    }
    #nav {
        .navbar-toggler {
            width: 50px;
        }
        .navbar-toggler-icon {
            width: 20px;
        }
        .pad-link {
            margin: 0 20px;
        }
    }
`;

const Main = () => {

    return (
        <MainWrapper>
            <section id="nav">
                <Navbar fixed="top" bg="light" variant="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/"><img width="40px" src={logo} alt="Earth's Plug logo" href="/"></img></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav
                                className='ms-auto' 
                            >
                                <Link
                                    className='pad-link'
                                    activeClass='active style'
                                    to="products"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Products
                                </Link>
                                <Link
                                    className='pad-link'
                                    activeClass='active'
                                    to="benefits"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >About
                                </Link>
                                <Link
                                    className='pad-link'
                                    activeClass='active'
                                    to="footer"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >Contact
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </section>
            <section id="hero">
                <div className='container'>
                    <h1 className=''>Made by nature</h1>
                    <p className=''>Earth’s Plug’s natural & organic Chondrus Crispus rejuvenates your 
                        body using 92 of the body’s 102 essential vitamins & minerals.
                    </p>
                    <div className='btn'>
                        <Link
                            className=""
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >
                            <button>
                                explore
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="products">
                <div className="container">
                    <div className="two-col">
                        <div className="col1">
                        <h3>Purple Chondrus Crispus</h3>
                        <br/>
                        <p>Earth's Plug's signature hand-picked natural & organic Irish moss</p>
                        <br/>
                        <p>Our moss is delivered to you already washed, prepared in a jar, and ready for consumption.</p>
                        <br/>
                        <a href="https://buy.stripe.com/bIY9Bnc4A9x85KobIV"><button className="btn-pri">Purchase</button></a>
                        <br/><br/><br/>
                        <h4>Shop flavors</h4>
                        <br/>
                        <ul>
                            <li><a href="https://buy.stripe.com/5kAaFr2u07p06Os8wI">Ginger & Cinnamon</a></li>
                            <li><a href="https://buy.stripe.com/9AQ3cZd8EfVw4Gk4gq">Ginger & Honey</a></li>
                            <li><a href="https://buy.stripe.com/9AQ6pbfgMcJk1u8cMX">Honey & Cinnamon</a></li>
                            <li><a href="https://buy.stripe.com/dR66pbfgM10C1u83cl">Ginger infused</a></li>
                            <li><a href="https://buy.stripe.com/9AQ6pbd8E5gS8WA28g">Cinnamon infused</a></li>
                            <li><a href="https://buy.stripe.com/28ocNzecIaBcdcQbIP">Honey infused</a></li>
                        </ul>
                        </div>
                        <div className="col2">
                            <img src={jarpic1} alt="Earth's Plug's jar of organic Chondrus Crispus" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="benefits">
                <div className="container">
                    <div className="two-col">
                        <div className="col1">
                            <h4>What our moss does for you...</h4>
                            <br/>
                            <ul>
                                <li>natural anti-inflammatory</li>
                                <li>mucus emulsifier</li>
                                <li>converts white fat to water</li>
                                <li>supports healthy digestion & gut health</li>
                                <li>anti-viral & anti-fungal properties</li>
                                <li>strengthens immune system</li>
                                <li>rejuvenates and moisturizes skin, treating acne and dark spots</li>
                                <li>helps balance thyroid for hormone health</li>
                                <li>improves sex quality</li>
                                <li>great for cognitive recognition and brain health</li>
                                <p className='small-p'>and more...</p>
                            </ul>
                        </div>
                        <div className="col2">
                            <img src={benefitsImg} alt="man eating apple with checkmarks" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="uses">
                <div className="container">
                    <div className="two-col">
                        <div className="col1">
                            <h4>Consume it how you want it</h4>
                            <br/>
                            <ul>
                                <li>smoothies</li>
                                <li>teas</li>
                                <li>shakes</li>
                                <li>juices</li>
                                <li>skin care</li>
                                <li>oatmeal</li>
                                <li>stews</li>
                                <p className='small-p'>and more...</p>
                            </ul>
                        </div>
                        <div className="col2">
                            <img src={usesImg} alt="list of foods woman likes" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="two-col">
                        <div className="col1">
                            <h3>What is it?</h3>
                            <br/>
                            <p>Earth’s Plug’s Chondrus Crispus is a natural red algae that grows along
                                 the rocky parts of the Atlantic coast of North America and continental 
                                 Europe. Its color varies depending on sun exposure, but usually 
                                 resembles a purplish color.
                            </p>
                            <br/>
                            <p>
                                Chondrus Crispus is known for the 92 essential vitamins and minerals 
                                that it provides the human body alongside the benefits that come with it.
                            </p>
                            <br/>
                            <p>
                                Chondrus Crispus has been used for centuries and originally received the 
                                name “Irish Moss” from Ireland during the 1800s when the moss was used to 
                                survive the potato famine.
                            </p>
                        </div>
                        <div className="col2">
                            <img src={bowlImg} alt="bowl of Earth's Plug's Chondrus Crispus" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="goal">
                <div className="container">
                    <h2>Our goal</h2>
                    <br/>
                    <p>Earth’s Plug aims to create a healthier & more natural lifestyle.
                        The human body was not created to get sick. Our bodies are 
                        self-sustainable cars that operate better and more optimal when properly fueled.
                    </p>
                    <br/>
                    <p>With that, Earth’s Plug offers a variety of natural products that are 
                        hand-crafted with longevity and nourishment in mind!
                    </p>
                </div>
            </section>
            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>Earth's Plug</h4>
                            <p>© 2022 - 2023</p>
                            <p className='half-opacity small-p'>All sales are final</p>
                        </div>
                        <div className="col">
                            <h4>Contact us</h4>
                            <p>vic@earthsplug.com</p>
                        </div>
                        <div className="col">
                            <p>Newsletter coming soon!</p>
                            <p>Stay tuned!</p>
                        </div>
                    </div>
                </div>
            </section>
        </MainWrapper>
    )
};

export default Main;