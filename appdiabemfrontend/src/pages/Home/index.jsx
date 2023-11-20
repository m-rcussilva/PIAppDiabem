import Form from "../../components/Form"
import GlucoseReferenceValues from "../../components/GlucoseReferenceValues"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Form />
            <GlucoseReferenceValues />
        </div>
    )
}

export default Home
