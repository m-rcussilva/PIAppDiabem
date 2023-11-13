import Form from "../../components/Form"
import GlucoseAverage from "../../components/GlucoseAverage"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Form />
            <GlucoseAverage />
        </div>
    )
}

export default Home
