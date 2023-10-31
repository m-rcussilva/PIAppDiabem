import Form from "../../components/Form"
import GlucoseAverage from "../../components/GlucoseAverage"
import GlucoseGraph from "../../components/GlucoseGraph"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import OldResults from "../OldResults"

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Form />
            <GlucoseGraph />
            <GlucoseAverage />
            {/* <OldResults /> */}
        </div>
    )
}

export default Home
