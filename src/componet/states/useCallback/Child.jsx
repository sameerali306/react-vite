import React from 'react'
import { memo } from 'react';
function Child(Learning) {
console.log("child component render");

  return (
    <div>
      
    </div>
  )
}

export default memo(Child)
