import './style/index.css'
import AVATAR1 from '../../assets/images/1.jpg'
import AVATAR2 from '../../assets/images/2.jpg'
import AVATAR3 from '../../assets/images/3.jpg'
import AVATAR4 from '../../assets/images/or.jpg'
import { Fade } from "react-awesome-reveal";

function UniqueAvatar() {
    return (

        <div id='about' className='sub_container'>
            <div className='small_container'>
                <div className='all_wrapper'>
                    <div className='unique_section_text'>
                        <Fade triggerOnce={true} direction='left'>
                            <h2 className='heading'>WHAT IS SILVERBACK LEGENDS?  </h2>
                        </Fade>
                        <Fade delay={ 1000} triggerOnce={true} direction='left'>
                            <p className='content'>
                                <br />
                                Silverback Legends is a collection of 7,474 super unique 3D NFTs untied and hanging out together on the Ethereum Blockchain
                                <br />
                                <br />
                                Each Silverback Legend is unique and exclusive based on over one hundred traits. The objective is to build the best community and project around NFTs
                                <br />
                                <br />
                                Entering into the Silverback Legends Community means joining a family full of investors and NFT enthusiasts who believe in the future of cryptocurrencies and blockchain technology.
                            </p>
                        </Fade>

                    </div>
                    <div className='image_container'>
                        <div className='sub_image_container' >
                            <div>
                                <img className='avatar_img' src={AVATAR3} alt='Avatar' />
                            </div>
                            <div>
                                <img className='avatar_img' src={AVATAR2} alt='Avatar' />
                            </div>
                        </div>

                        <div className='sub_image_container'>
                            <div>
                                <img className='avatar_img' src={AVATAR4} alt='Avatar' />
                            </div>
                            <div>
                                <img className='avatar_img' src={AVATAR1} alt='Avatar' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default UniqueAvatar;