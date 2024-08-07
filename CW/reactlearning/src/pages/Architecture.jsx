import Header from "../components/Header";
import Footer from "../components/Footer";

const Display =() =>{
    return(
        <main className="container">
            <h1 className="my-4">Architecture</h1>
            <p>The Taj Mahal is a remarkable blend of various architectural styles, including Mughal, Persian, and Indian. It is made of white marble, which was brought
            from different parts of India and Central Asia.</p>
            <p>The mausoleum is known for its symmetrical design, intricate carvings, and the iconic central dome. The surrounding gardens and the Yamuna River
            add to its beauty, making it a masterpiece of Islamic architecture.</p>
        </main>
    )
}

const Architecture = () =>{
    return(
        <>
            <Header/>
            <Display/>
            <Footer/>
        </>
    )
}

export default Architecture;