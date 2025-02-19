import React,{memo} from 'react'

function Child() {
    console.log("child component");
    
  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
