import LiveChat from "@/components/LiveChat";
import VideoJSSynced from "@/components/VideoJSSynced";
import { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { useParams } from "react-router";

const WatchPartyPage = () => {
  const params = useParams();

  // console.log(params.sessionId);

  const sessionId = params.sessionId ? params.sessionId.toString() : "1";

  const videoJsOptions = {
    sources: [
      {
        // replace src with videoSource once that functionality has been created
        src: "http://localhost:8080/encoded/steamboatwillie_001/master.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const [roomID, setRoomID] = useState(sessionId);

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-3">
        <VideoJSSynced
          options={videoJsOptions}
          roomID={roomID}
          setRoomID={setRoomID}
        />
      </div>

      <LiveChat roomID={roomID} />
    </div>
  );
};

export default WatchPartyPage;
