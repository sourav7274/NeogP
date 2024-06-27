import Header from "../components/Header";
import Footer from "../components/Footer";
function Blogs(){
    return(
        <>
        <Header/>
        <main className="container py-4">
            <h1>Blogs</h1>
            <div>
                <div className="row">
                <div className="col">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h3>Blog1</h3>
                            <p className="card-text">guughdhgihdighs</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mt-3">
                        <div className="card-body">
                            <h3>Blog2</h3>
                            <p className="card-text">guughdhgihdighs</p>
                        </div>
                   </div>
                </div>
                </div>
                <div className="row">
                <div className="col">
                <div className="card mt-3">
                        <div className="card-body">
                            <h3>Blog3</h3>
                            <p className="card-text">guughdhgihdighs</p>
                        </div>
                   </div>
                </div>
                <div className="col">
                <div className="card mt-3">
                        <div className="card-body">
                            <h3>Blog4</h3>
                            <p className="card-text">guughdhgihdighs</p>
                        </div>
                   </div>
                </div>
                </div>           

            </div>
        </main>
        <Footer/>
        </>
    )
}

export default Blogs;