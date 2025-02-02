

// function Card() {
//     return(
//         <div className="card">
//             <h1>Medium</h1>
//             <p>Sign up to discover human stories that deepen your understanding of the world</p>
//             <div className="inner " >
//                 <h3>free</h3>
//                 <ul>
//                     <li>Destruction free reading no adds</li>
//                     <li>Organized your knowledage with lists and highlights </li>
//                     <li>Tell your story find your audience</li>
//                     <button>Sign up for free</button>
//                 </ul>
                
           
//                 </div>
//             <div className=" card2">
//                 <h3>Membership</h3>
//                 <ul>
//                     <li>Read member only story</li>
//                     <li>Support writers you read most</li>
//                     <li>Earn money for your writing</li>
//                     <li>listen to audio narratons</li>
//                     <li>Read offline with the medium App </li>
//                     <button>Try up for $5/month</button>
//                 </ul>
//             </div>
            
//         </div>
    
//     )
// }
// export default Card


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// function Card({header,para,btnIcon}) {
//     return(
//         <div className="card">
//             <h1>{header}</h1>
//             <p>{para}</p>
//             <button><FontAwesomeIcon icon={btnIcon}/></button>
            

           


//         </div>


//     )
    
// }
// export default Card


function Card({}) {
    return(
        <div className="main">
    <div className="cantainer">
        <div className="para">
            <h1>The modern landing page for <span className="highlight">React developer</span></h1>
            <p>The easiest way to build a React page in seconds your time and focus on your products</p>
            <button>Start your 14-days Free Trail</button>
            </div>
            <div className="box">
                
                <div className="inner"></div>
                <h2>Screenshot</h2>
            </div>
            
    </div>
    <div className="center">
        <h1>Trusted by over 8000+ customers</h1>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam exercitationem, perspiciatis repellat quaerat veniam maiores molestias corrupti debitis.</p>
        <div className="inner-center">
            <h1>$500k+</h1>
            <h1>10+</h1>
            <h1>150+</h1>
            <h1>10+</h1>
        </div>
        <div className="outer">
            <p>Revenus</p>
            <p>Products</p>
            <p>Components</p>
            <p>Employees</p>
        </div>
    </div>
    <div className="last-cantainer">
        <p><span className="span">Features</span></p>
        <h1>Your Title here</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, distinctio voluptatum nesciunt nisi cum voluptatem et debitis explicabo ducimus! Harum? ipsum dolor sit amet consectetur adipisicing elit. Eveniet placeat aspernatur, officia distinctio sunt non sit sed officiis.</p>
        {/* <div className="second"> */}
            <div className="card">
                <div className="card1">
                    <h1>Your Title here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi fuga nemo saepe in minima!</p>
                    </div>
                    <div className="card2">
                    <h1>Your Title here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi fuga nemo saepe in minima!</p>
                    </div>
                    <div className="card3">
                    <h1>Your Title here</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nisi fuga nemo saepe in minima!</p>
                    </div>
            </div>
        </div>
    </div>
    // </div>

    )
}
export default Card