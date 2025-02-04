
function Student({fname,age,isStudent}) {
    return(
        <>
        <div className="data">
            <p>Name:{fname}</p>
            <p>age:{age}</p>
            <p>Student:{isStudent ? "yes" : "No"}</p>
        </div>
        </>
    )
    
}
export default Student