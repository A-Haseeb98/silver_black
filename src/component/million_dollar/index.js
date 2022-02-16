import './style/index.css'
import CHARITY from '../../assets/images/or.jpg'
import { Fade } from "react-awesome-reveal";

function MillionDollar() {
    return (
        <div id='charity' className='logo_container'>
            <div className='small_container'>
                <div className='million_dollar_wrapper'>
                    <div className='logo_section'>
                        <Fade direction='left' triggerOnce={true}>
                            <img className='logo_img' src={CHARITY} alt='logo' />
                        </Fade>
                    </div>
                    <div className='content_section'>
                        <Fade direction='right' cascade={true} triggerOnce={true}>
                            <h2 className='heading'> BENEFITS & UTILITIES   </h2>
                            <p className='content'>
                                When you buy a Silverback Legend, you’re not just buying an NFT, you are getting access to a community where benefits and utilities will begin immediately and also increase over time.
                                <br />
                                <br />
                                Together, let’s build the best exclusive club never seen before. And show to the world how strong and influent we are. Become a Legend in the Metaverse!
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MillionDollar;