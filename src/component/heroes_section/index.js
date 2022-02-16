import './style/index.css'
import Noah from '../../assets/images/Noah.jpg'
import Jay from '../../assets/images/Jay.jpg'
import David from '../../assets/images/David.jpeg'
import Anton from '../../assets/images/Anton.jpg'
import Angelina from '../../assets/images/Angelina.jpg'
import Card from "./component/card"
import { Zoom } from 'react-awesome-reveal'


function Heroes() {
    return (
        <div id='team_container' className='team_container'>
            <div className='small_container'>

                <div className='hero_content'>
                    <div className='center_heading'>
                        <h3 className='who_we_are'>OUR TEAM</h3>
                    </div>
                    {/* <p className='team_content'>We are Sabrina and Manija, 2 women entrepreneurs.
                        <br />
                        We have respectively 10 years and 4 years of experience in ecommerce and have generated millions of sales on our stores. <br />
                        Accompanied by Ken, our best friend and artist for 10 years who has worked for call of Duty, Final Fantasy, Red Bull and many others ...
                    </p> */}
                </div>
                <div className='Team_members_container'>
                    <Zoom triggerOnce = {true} duration={500}>
                        <Card name="David " img_url={David} twitter='#' instagram='#' linkedin='#'
                            position="The founder, father, passionate golf player, Legend One in charge and responsible for everything around and about the SILVERBACK LEGENDS. From project direction to design to lifting up employees who are stuck in quarantine. David is deeply involved in investment strategies, e-commerce and 3D Design production and development in the Interior Design sector." />
                        <Card name="Angelina" img_url={Angelina} twitter='#' instagram='#' linkedin='#'
                            position="Our female co-founder brings to the table over 15 years of experience in creating art and contributing to multiple high-design / fashion projects globally and yet keeping her privacy behind closed doors accessible for the high society only. If she is not in her studio creating the next unique item that brings joy to the customers, she is with us. She connects her network with the team, leading and guiding the 3d artists to bring her very own fashion vision to life. " />


                        <Card name="JP" img_url={Anton} twitter='#' instagram='#' linkedin='#'
                            position="He may be dressed fashionable and gives the impression he has something to do with fashion, but his professional life far away from that. But when it comes to digital security, he and his team are the ones you want to be on your side. On top of being an early crypto investor, he is not only an expert Blockchain & Web3 Developer, he is also a master of Smarts Contracts and cryptography. Our security front man to keep this project protected and safe." />


                        <Card name="Jay " img_url={Jay} twitter='#' instagram='#' linkedin='https://www.linkedin.com/in/raphaël-sultan-4917a0123/'
                            position="Yes, he is actually a real human, even though we always see him like a cyborg working non-stop in front of his computer and screens where he turns all of our visual dreams into reality. Our talented 3D designer worked his way up in the industry over the past 8 years and contributed to well known VR and AAA video game productions. When it comes to games like Star Wars VR, Modern Warfare, Warzone, he was part of the creation of these fantastic characters." />


                        <Card name="Noah" img_url={Noah} twitter='#' instagram='#' linkedin='#'
                            position="Noah is a mix of the cool Mr-T from the A-Team, wise like Yoda, but with a sense of humour to brighten anyone's day. When it comes to Silverback Legends he rolls up his sleeves and dives into his tasks. He is setting up, organizing and bringing the behind the scenes together like a perfect fitting puzzle. From getting the right equipment, to managing marketing strategies, to briefing the different departments of the project, he is the heart of our team." />
                    </Zoom>
                </div>
                <div className='team_content_bellow'>
                    SILVERBACK LEGENDS has been KYC Verified by IDO.
                    <br />
                    Link below:
                    <br />
                    <a href='https://idopresales.com/kyc-service/silverback-legends-kyc-verification/'>https://idopresales.com/kyc-service/silverback-legends-kyc-verification/</a>
                </div>
            </div>
        </div >
    )
}

export default Heroes