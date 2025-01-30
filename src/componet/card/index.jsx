import './componet/Card.css';

function Card() {
    return(
        <div className="card">
            <h1>Medium</h1>
            <p>Sign up to discover human stories that deepen your understanding of the world</p>
            <div className="inner card" >
                <h3>free</h3>
                <ul>
                    <li>Destruction free reading no adds</li>
                    <li>Organized your knowledage with lists and highlights </li>
                    <li>Tell your story find your audience</li>
                    <button>Sign up for free</button>
                </ul>
            </div>
            <div className="inner card2">
                <h3>Membership</h3>
                <ul>
                    <li>Read member only story</li>
                    <li>Support writers you read most</li>
                    <li>Earn money for your writing</li>
                    <li>listen to audio narratons</li>
                    <li>Read offline with the medium App </li>
                    <button>Try up for $5/month</button>
                </ul>
            </div>
        </div>
    
    )
}
export default Card