import React,{memo} from "react";


const HomeChild = () => {
  console.log("child called")
  return (
    <div>HomeChild </div>
  )
}

export default memo(HomeChild);