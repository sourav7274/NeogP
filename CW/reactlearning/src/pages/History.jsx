import Header from "../components/Header";
import Footer from "../components/Footer";

const Display =() =>{
    return(
        <main className="container">
            <h1 className="my-4">History</h1>
            <p>The Taj Mahal was built between 1631 and 1648 and is the result of the profound love Emperor Shah Jahan had for his wife Mumtaz Mahal, who died
            during childbirth. It took over 20,000 workers and artisans to complete this magnificent structure.</p>
            <p>The Taj Mahal is a testament to the artistry of Mughal architecture and has a rich history, including surviving wars and natural disasters.</p>
        </main>
    )
}

const History =() =>{
    return(
        <>
           <Header/>
            <Display/>
           <Footer/> 
        </>
    )
}
export default History