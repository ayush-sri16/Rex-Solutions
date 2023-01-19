import React from 'react';
import VG from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";


const Home = () => {
    return (
        <>
            <div className='home' id='home'>
                <main>
                    <h1>REX SOLUTIONS</h1>
                    <p>Solution to all your Development issues.</p>
                </main>
            </div>

            <div className="home2">
                <img src={VG} alt="Graphics" />
                <div>
                    <p>Rex solutions is your one and only development problems you face every day. We are leading tech company whose aim is to inrease the problem solving ability in children.</p>
                </div>
            </div>
            <div className="home3" id='about'>
                <div>
                    <h1>Who are we?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis ullam quia natus eius rem ipsa est excepturi inventore quibusdam quod, doloribus dolor consequuntur autem ipsum? Sit, aut ducimus inventore, fugiat suscipit  error sequi possimus dolore repellendus, vero consequatur nam quis. Vitae reiciendis quidem adipisci sed laudantium, fuga corrupti iusto quia provident consequuntur dolor qui. Beatae accusamus tempora sit a, sint doloribus veritatis quis cupiditate neque vitae minus optio nihil iste quos cumque temporibus aspernatur. Fugit voluptas laborum voluptates harum tempora, magnam a at est animi voluptate? Hic sunt quaerat expedita accusamus saepe perferendis, eligendi.</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:"0.5s"}}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                        <div style={{animationDelay:"1s"}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
