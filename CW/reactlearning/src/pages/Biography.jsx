import Header from "../components/Header";
import Footer from "../components/Footer";

const Display =() =>{
    return(
        <main className="container">
            <h1 className="my-4">Biography</h1>
            <p>Virat Kohli was born on November 5, 1988, in Delhi, India. He made his debut for the Indian cricket team in August 2008 and quickly established
himself as a prolific run-scorer. Known for his aggressive batting style and strong leadership, he has set numerous records and achieved great success
as the captain of the Indian cricket team.</p>
            <p>Discover more about his life, career, and journey in this biography section.</p>
        </main>
    )
}

const Records =() =>{
    return(
        <>
           <Header/>
            <Display/>
           <Footer/> 
        </>
    )
}
export default Records