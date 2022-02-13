import './style/index.css'
import PIC1 from '../../../../assets/images/1.jpg'
import PIC2 from '../../../../assets/images/2.jpg'
import PIC3 from '../../../../assets/images/3.jpg'
import PIC4 from '../../../../assets/images/5.jpg'
// import PIC5 from '../../../../assets/images/.jpg'
// import PIC6 from '../../../../assets/images/f5.jpg'

function GuestSection() {
    return (
        <>
            <div className='guest_container'>
                <div className='left_container_for_heading'>
                    <h3>SilverBack Legends</h3>
                </div>
                <div>
                    <div className='right_container_for_contain'>
                        <p className='golden_guest_content'>The SilverBack Legends edition by the Billiaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.</p>
                        <button onClick={()=>{window.location = 'https://discord.com/invite/VwKsk7ktsp'}} className='golden_guest_button '>JOIN US TO REGISTER FOR PRESALE</button>
                    </div>
                </div>
            </div>

            <div className='images_container'>
                <div className='_image_card_ ' >
                    <img src={PIC1} alt='' />
                    {/* <small>BILLY</small> */}

                </div>
                <div className='_image_card_ ' >
                    <img src={PIC2} alt='' />
                </div>
                <div className='_image_card_' >
                    <img src={PIC3} alt='' />
                </div>
                <div className='_image_card_ ' >
                    <img src={PIC4} alt='' />
                </div>
            </div>
        </>

    )
}
export default GuestSection