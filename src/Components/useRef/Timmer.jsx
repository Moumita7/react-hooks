import { Button,Box,Heading} from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"


const Timmer = () => {
  const [timmer,setTimmer]=useState(0)
  const timmerRef=useRef(null)
  // console.log(timmerRef)

  const handleStart=()=>{
    if(timmerRef.current != null) return 
    timmerRef.current=setInterval(()=>{
      setTimmer((prev)=>prev+1)
    },1000)

  }

  const handleReset=()=>{
    handleStop()
    setTimmer(0)
  }

  const handleStop=()=>{
    clearInterval(timmerRef.current)
    timmerRef.current=null
    
  }

  useEffect(()=>{
    //clean up function [if we not remove setInterval it will keep running]
    return handleStop;
  },[])

  return (
    <Box display={"flex"} flexDir={"column"} border={"3px solid red"} w="100%" h="100vh"justifyContent={"center"} alignItems={"center"}>
    <Box display={"flex"} flexDir={"column"} gap="20px" p="20px" border={"1px solid blue"} justifyContent={"center"} alignItems={"center"} >
      <Heading>{timmer}</Heading>
        <Box display={"flex"} gap="10px">
            <Button bg={"blue.400"}  onClick={handleStart}>Start</Button>
            <Button onClick={handleStop}>Stop</Button>
            <Button onClick={handleReset}>reset</Button>
            
            </Box>
        </Box>
    </Box>
  )
}

export default Timmer