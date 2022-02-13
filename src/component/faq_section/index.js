import './style/index.css'
import { BsArrowDownCircle } from 'react-icons/bs';

function FrequentlyAskQuestion() {
    return (
        <div id='faq' className='faq_container'>
            <div className='small_container'>
                <div className='faq_heading'>
                    FREQUENTLY ASKED QUESTIONS:
                </div>

                <div className="faqcontainer">
                    <div className="panel-group" id="buffy-stuff-accordion-group">
                        <div className="panel">
                            <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#one">
                                <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                <h4 className='faq-heading'>WHERE CAN I VIEW MY NFTS ?</h4>
                            </div> 
                            <div className="collapse in" id="one">
                                <div className="panel-body">
                                    <p>Once your NFT is minted simply connect to your open sea account to view your Nft’s.</p>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#two">
                                <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                <h4 className='faq-heading'>How can I use my nft ?</h4>
                            </div> 
                            <div className="collapse in" id="two">
                                <div className="panel-body">
                                    <p>You will be able to use your NFT as an SilverBack Legend in the metaverse and in our future projects.</p>
                                </div>
                            </div>
                        </div>

                        <div className="panel">
                            <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#four">
                                <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>
                                <h4 className='faq-heading'>How many SilverBack Legends can I mint? </h4>
                            </div> 
                            <div className="collapse in" id="four">
                                <div className="panel-body">
                                    <p>3 per wallet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="panel-heading collapsed" data-toggle="collapse" data-parent="#buffy-stuff-accordion-group" href="#five">
                                <i className="fa fa-chevron-circle-down fa-lg pull-right" ><BsArrowDownCircle /></i>

                                <h4 className='faq-heading'>What are your secondary royalties fees?</h4>
                            </div> {/* panel-heading */}
                            <div className="collapse in" id="five">
                                <div className="panel-body">
                                    <p>Our secondary royalties fees are 10%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default FrequentlyAskQuestion;