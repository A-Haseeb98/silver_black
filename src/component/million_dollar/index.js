import './style/index.css'
import LOGO from '../../assets/images/logo.png'
import CHARITY from '../../assets/images/new_charity_image.jpeg'

function MillionDollar() {
    return (
        <div id='charity' className='logo_container'>
            <div className='small_container'>
                <div className='million_dollar_wrapper'>
                    <div className='logo_section'>
                        <img className='logo_img' src={CHARITY} alt='logo' />
                    </div>
                    <div className='content_section'>
                        <h2 className='heading'> The first collection<img  className='small_logo_img' src={LOGO} alt='logo' />  <br />  with such a big heart.   </h2>
                        <p className='content'>
                            1.000.000$ given to Charities.
                            <br />
                            <br />
                            Once the collection is sold out, we will donate 1.000.000$ to 10 different charities foundations chosen by the community.
                            We will also draw lots for 2 people who will accompany us (all expenses paid)  when we will go to meet one or multiple charities to give them the money.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MillionDollar;