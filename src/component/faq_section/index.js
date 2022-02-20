import './style/index.css'
import { BsArrowDownCircle } from 'react-icons/bs';
import { Fade } from 'react-awesome-reveal';

function FrequentlyAskQuestion() {
    return (
        <div id='faq' className='faq_container'>
            <Fade triggerOnce={true} direction='up'>
                <div className='small_container'>
                    <div className='faq_heading'>
                        FREQUENTLY ASKED QUESTIONS:
                    </div>

                    <div className="faqcontainer">
                        <div className="panel-group" id="buffy-stuff-accordion-group">
                            <div className="panel">
                                <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#one">
                                    <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                    <h4 className='faq-heading'>WHEN WILL THE OFFICIAL SILVERBACK LEGENDS LAUNCH TAKE PLACE?</h4>
                                </div>
                                <div className="collapse in" id="one">
                                    <div className="panel-body">
                                        <p>The Official Silverback Legends launch date is March 8th, 2022. Join our Discord for more information.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel">
                                <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#two">
                                    <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                    <h4 className='faq-heading'>HOW CAN I JOIN?</h4>
                                </div>
                                <div className="collapse in" id="two">
                                    <div className="panel-body">
                                        <p>Over 60,000 members compete for a White List spot on our Discord. We still have spots left. But they will all be filled by early supporters of the project who are ready to mint. </p>
                                    </div>
                                </div>
                            </div>

                            <div className="panel">
                                <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#four">
                                    <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                    <h4 className='faq-heading'>WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?</h4>
                                </div>
                                <div className="collapse in" id="four">
                                    <div className="panel-body">
                                        <p>Silverback Legends are on the Ethereum Blockchain. Once your NFT is minted, simply connect to your Opensea account to view your NFTs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#five">
                                    <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>

                                    <h4 className='faq-heading'>HOW MANY SILVERBACK LEGENDS CAN I MINT?</h4>
                                </div> {/* panel-heading */}
                                <div className="collapse in" id="five">
                                    <div className="panel-body">
                                        <p>2 per wallet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#six">
                                    <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                    <h4 className='faq-heading'>DOES SILVERBACK LEGENDS HAVE ANY UTILITY?</h4>
                                </div> {/* panel-heading */}
                                <div className="collapse in" id="six">
                                    <div className="panel-body">
                                        <p>Yes! Silverback Legends is one of the only projects in the NFT space that actually offer a wide array of utilities.<br/>
Silverback Legends holders will get to partake in exclusive real-life events as well as virtual events and also have a chance once a month to win a share of the secondary sales royalties. On top, they will help us make donations to charity that protects endangered gorillas around the world. AND all the Silverback Legends models are equipped to be used in games, meet-ups & more in the Metaverse.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Fade>
        </div>

    )
}

export default FrequentlyAskQuestion;