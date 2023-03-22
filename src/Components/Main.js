
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import heroImg from '../Images/seamoss-pic-rawmoss-1.jpeg';
import jarpic1 from '../Images/IMG_4158.jpg';

const MainWrapper = styled.div`
    #hero {
        width: 100%;
        height: 100vh;
        padding-top: 20vh;
        background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .95)),
            url(${heroImg}) no-repeat left / cover;
        h1, p {
            color: #f1f1f1;
            max-width: 400px;
        }
    }

    #products {
        background-color: #f5f5f5;
        color: #401F25;
        width: 100%;
        padding: 20vh 0;
        .wrapper {
            text-align: center;
        }
        img {
            width: 100%;
            max-width: 400px;
            border-radius: 2rem;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, .75);
        }
        .two-col {
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
        }
        button {
            background-color: #401F25;
            color: #f1f1f1;
            margin-inline: auto;
        }
    }

    #benefits {
        background-color: #f1f1f1;
        background: linear-gradient(rgba(0,0,0,.4), rgba());
        color: #1b1b1b;
        width: 100%;
        padding: 20vh 0;
    }

    #uses {
        background-color: #f5f5f5;
        color: #1b1b1b;
        width: 100%;
        padding: 20vh 0;
    }

    #about {
        background-color: #1b1b1b;
        color: #f1f1f1;
        width: 100%;
        padding: 20vh 0;
        .space {
            padding: 2rem;
        }
    }
`;

const Main = () => {

    return (
        <MainWrapper>
            <section id="hero">
                <div className='container'>
                    <h1 className='pad-v'>Unleash your body's potential</h1>
                    <p className='pad-v'>Earth’s Plug’s natural & organic Chondrus Crispus rejuvenates your 
                        body using 92 of the body’s 102 essential vitamins & minerals.
                    </p>
                    <div className='pad-v marg-v'>
                        <Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={110}
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
                <div className='container'>
                    <div className='wrapper'>
                        <h2>Purple Chondrus Crispus</h2>
                        <div className='two-col'>
                            <h3 className='pad-v'>$17.99</h3>
                            <button
                                className=''
                                onClick={ () => window.location.href='https://buy.stripe.com/4gwfZL8SocJk8WA6oo'}>
                                shop now
                            </button>
                        </div>
                        <img className='marg-v' src={jarpic1} alt="Earth's Plug's Irish sea moss jar" />
                    </div>
                </div>
            </section>
            <section id="benefits">
                <div className="container">
                    <h2 className=''>Just a few benefits...</h2>
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
                <div className="container">
                    <h2>Uses</h2>
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
                <div className="container">
                    <div className='marg-v space'>
                        <h2>About</h2>
                        <p>Earth’s Plug’s Chondrus Crispus is a natural red algae that grows along the rocky parts of the Atlantic coast of North America and continental Europe. Its color varies depending on sun exposure, but usually resembles a purplish color.
                        </p>
                        <p>
                            Chondrus Crispus is known for the 92 essential vitamins and minerals that it provides the human body alongside the benefits that come with it.
                        </p>
                        <p>
                            Chondrus Crispus has been used for centuries and originally received the name “Irish Moss” from Ireland during the 1800s when the moss was used to survive the potato famine.
                        </p>
                    </div>
                    <div className='marg-v space'>
                        <h2>Our Goal</h2>
                        <p>Earth’s Plug aims to create a healthier & more natural lifestyle for the body. The body thrives in a natural state, and a natural state makes it significantly easier to ingest and apply nourishment that contributes to the longevity and vitality of our lives.</p>
                        <p>The human body was not created to get sick. Our bodies are self-sustainable cars that operate better for longer distances when properly fueled.</p>
                        <p>With that, Earth’s Plug offers a variety of natural products that are hand-crafted with longevity and nourishment in mind. Our main product at the moment is a purple Irish moss gel that is entirely edible. We also provide other strands of sea moss, such as Jamaican moss, or gracilaria. These natural products are superfoods in themselves and offer a plethora of benefits!</p>
                    </div>
                </div>
            </section>
        </MainWrapper>
    )
};

export default Main;