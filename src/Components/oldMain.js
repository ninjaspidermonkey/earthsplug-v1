
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import Vector from '../Images/Vector.png';
//import Navbar from './Navbar';
import Navbar from './NewNavbar';
import jarpic1 from '../Images/IMG_4158.jpg';

const MainWrapper = styled.div`
    margin-inline: auto;
    //width: min(70%, 70.5rem);

    .hero {
        width: 100vw;
        min-width: 290px;
        height: 90vh;
        padding-top: 8vh;
        background: url(${Vector});
        background-size: cover;
        //overflow: hidden;
    }
    .hero-container {
        max-width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-inline: auto;
        padding: 20% 0;
    }
    .hero-text {
        display: flex;
        flex-direction: column;
        height: 80%;
        justify-content: center;
        h1, p {
            padding: 2.5% 0;
        }
    }
    .hero-btns {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 20%;
        justify-content: start;
        button {
            margin-right: 4%;
        }
    }
    //
    .product-section {
        display: flex;
        flex-direction: column;
        max-width: 90%;
        height: auto;
        margin-inline: auto;
        margin: auto;
        padding: 30% 0;
        background-color: #e1e1e1;
        align-content: center;
        align-items: center;
        text-align: center;
        h1, h2, h3, p {
            color: #260101;
            margin: auto;
        }
        .jar-pic {
            background: url(${jarpic1}) no-repeat;
            background-size: cover;
            width: 100%;
            height: 50vh;
            margin: 10% 0;
            border-radius: 8px;
            box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.25);
        }
        .jar-buy {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            button {
                margin-top: 10%;
            }
        }
    }
    //
    #benefits {
        background-color: #f1f1f1;
    }
    .benefits-section {
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        max-width: 90%;
        height: auto;
        margin-inline: auto;
        padding: 30% 0;
        align-content: end;
        align-items: end;
        text-align: start;
        h1, h2, h3, p, ul, li {
            color: #260101;
            margin: auto;
        }
        ul {
            margin-top: 5%;
        }
        li {
            padding: .5rem 0;
        }
    }
    //
    #uses {
        background-color: #f1f1f1;
    }
    .uses-section {
        background-color: #f1f1f1;
        display: flex;
        flex-direction: column;
        max-width: 90%;
        height: auto;
        margin-inline: auto;
        padding-bottom: 30%;
        align-content: start;
        align-items: start;
        text-align: start;
        h1, h2, h3, p, ul, li {
            color: #260101;
        }
        ul {
            margin-top: 5%;
        }
        li {
            padding: .25rem 0;
        }
    }
    //
    #about {
        background-color: #e5e5e5;
    }
    .about-section {
        background-color: #e5e5e5;
        display: flex;
        flex-direction: column;
        max-width: 90%;
        height: auto;
        margin-inline: auto;
        padding: 30% 0;
        align-content: start;
        align-items: start;
        text-align: start;
        h1, h2, h3, p, ul, li {
            color: #2b2b2b;
            padding: 5% 0;
        }
    }
`;

const Main = () => {

    return (
        <MainWrapper>
            <Navbar />
            <section id="hero" className="hero">
                <div className='hero-container'>
                    <div className="hero-text">
                        <h1 className=''>Unleash your body's potential</h1>
                        <p className=''>Earth's Plug's natural & organic Chondrus Crispus rejuvenates your body using 92
                            of the body's 102 essential vitamins & minerals.
                        </p>
                    </div>
                    <div className='hero-btns'>
                        <Link
                            activeClass="active"
                            to="product"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <button className='btn btn-sec buy-btn'>
                                EXPLORE
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section id="product">
                <div className="product-section">
                    <h1 className=''>Purple Chondrus Crispus</h1>
                    <div className="jar-pic"></div>
                    <div className="jar-buy">
                        <h2>$19.99</h2>
                        <a href="https://buy.stripe.com/4gwfZL8SocJk8WA6oo" alt="link to checkout"><button className='btn btn-pri'>PURCHASE</button></a>
                    </div>
                </div>
            </section>
            <section id="benefits">
                <div className="benefits-section">
                    <h1>Just a few benefits...</h1>
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
                        <p>and more...</p>
                    </ul>
                </div>
            </section>
            <section id="uses">
                <div className="uses-section">
                    <h1>Uses</h1>
                    <ul>
                        <li>smoothies</li>
                        <li>teas</li>
                        <li>shakes</li>
                        <li>juices</li>
                        <li>skin care</li>
                        <li>oatmeal</li>
                        <li>stews</li>
                        <p>and more...</p>
                    </ul>
                </div>
            </section>
            <section id="about">
                <div className="about-section">
                    <h1>About</h1>
                    <p>Earth’s Plug’s Chondrus Crispus is a natural red algae that grows along the rocky parts of the Atlantic coast of North America and continental Europe. Its color varies depending on sun exposure, but usually resembles a purplish color.
                    </p>
                    <p>
                        Chondrus Crispus is known for the 92 essential vitamins and minerals that it provides the human body alongside the benefits that come with it.
                    </p>
                    <p>
                        Chondrus Crispus has been used for centuries and originally received the name “Irish Moss” from Ireland during the 1800s when the moss was used to survive the potato famine.
                    </p>
                    <h1>Our Goal</h1>
                    <p>Earth’s Plug aims to create a healthier & more natural lifestyle for the body. The body thrives in a natural state, and a natural state makes it significantly easier to ingest and apply nourishment that contributes to the longevity and vitality of our lives.</p>
                    <p>The human body was not created to get sick. Our bodies are self-sustainable cars that operate better for longer distances when properly fueled.</p>
                    <p>With that, Earth’s Plug offers a variety of natural products that are hand-crafted with longevity and nourishment in mind. Our main product at the moment is a purple Irish moss gel that is entirely edible. We also provide other strands of sea moss, such as Jamaican moss, or gracilaria. These natural products are superfoods in themselves and offer a plethora of benefits!</p>
                </div>
            </section>
        </MainWrapper>
    );
};

export default Main;