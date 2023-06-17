import { Box, Button } from "@chakra-ui/react"
import { useRef } from "react"


const VedioPlayer = () => {
    let videoRef=useRef(null)

    let handlePlay=()=>{
        videoRef.current.play()
    }
   let handlePause=()=>{
    videoRef.current.pause()

    }
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
    <video  ref={videoRef} src="https://player.vimeo.com/external/275837601.sd.mp4?s=a2a62ce6a2f9cbf513b99f619824a01f3a71274e&profile_id=164&oauth2_token_id=57447761">

    </video>
    <Button onClick={handlePlay}>Play</Button>
    <Button onClick={handlePause} >Pause</Button>


    
    </Box>
  )
}

export default VedioPlayer