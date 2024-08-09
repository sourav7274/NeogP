import Header from "../components/Header";

const Display =() =>{
    return(
        <main className="container">
            <h1 className="my-4">HR Report</h1>
            <hr/>
            <div className="row">
                <div className="col">
                    <h2>Most Worked Employee</h2>
                    <p>Name: John Doe</p>
                    <p>Hours Worked: 210</p>
                </div>
                <div className="col">
                    <h2>Highest Rated Employee</h2>
                    <p>name: Jane Smith</p>
                    <p>Performance Rate: 0.95</p>
                </div>
                <div className="col">
                    <h2>Total Overtime Hours</h2>
                    <p>Total Overtime Hours: 35</p>
                </div>
            </div>
        </main>
    )
}

const Report = () =>{
    return(
        <>
            <Header/>
            <Display/>
        </>
    )
}

export default Report;