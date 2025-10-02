import AppButton from "./AppButtons"
import AppCard from "./AppCard"
export default function AppManin() {

    return (

        //insert buttons 

        <div className="container">
            <div className="row">
                <div className="col">
                    <AppButton />
                </div>
            </div >
            <div className="row">
                <div className="col">
                    <AppCard />
                </div>
            </div >

        </div >

    )
}