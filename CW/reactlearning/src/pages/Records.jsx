import Header from "../components/Header";
import Footer from "../components/Footer";

const Display =() =>{
    return(
        <main className="container">
            <h1 className="my-4">Records</h1>
            <p>Virat Kohli has achieved numerous records in international cricket. He holds records for the fastest centuries, most centuries in ODIS, and many more.
            His consistency and remarkable performances have made him one of the greatest batsmen of all time.</p>
            <p>Explore his incredible records and statistics in this section,</p>
        </main>
    )
}

const Records = () =>{
    return(
        <>
            <Header/>
            <Display/>
            <Footer/>
        </>
    )
}

export default Records;