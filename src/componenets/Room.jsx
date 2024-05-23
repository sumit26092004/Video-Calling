import React from 'react'
import {useParams} from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {
  const{id} = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
     const appID = 388781290;
     const serverSecret = "1f137fa0c31039a21c1a1ccbb1d725c3";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, 
      serverSecret, 
      id,
      Date.now().toString(),
      "SumitRai"
     );

    // Create instance object from Kit Token.
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     // start the call
     zp.joinRoom({
       container: element,
       sharedLinks: [
         {
           name: 'Personal link',
           url: `http://localhost:5173/room/${id}`
         },
       ],
       scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
       },
       showScreenSharingButton:true,
     });


 };
  return <div className="myCallContainer"ref={myMeeting}></div>;
  
};

export default Room