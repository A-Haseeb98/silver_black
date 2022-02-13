import './style/index.css'
import Card from "./component/steps/card"
import DESIGN from "../../assets/images/dotted-line.png"
import GuestSection from './component/guest_section'
function RoadMap() {
    return (
        <div id='road_map' className='roadmap_container'>
            <div className='row small_container'>
            <div className='for_right_design'>
                <div>
                    <h1 className='main-heading-roadmap'>RoadMap</h1>
                </div>
                <Card />
                {/* <div className='right_design'>
                    <img src={DESIGN} alt='right design' />
                </div> */}
            </div>
            </div>
            <GuestSection />

        </div>

    )
}

export default RoadMap