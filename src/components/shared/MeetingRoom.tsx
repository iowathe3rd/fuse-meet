import { cn } from "@/lib/utils";
import {
  CallParticipantsList,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader } from "lucide-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import CallControls from "./CallControls";

export type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState<boolean>(true);
  const { useCallCallingState } = useCallStateHooks();

  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <section className="w-full h-screen flex flex-col justify-between">
      <div className="flex lg:flex-row flex-col w-full gap-4 h-full">
        <div className="grow">
          <CallLayout />
        </div>
        <div className="w-1/5 border-border border-l-2 p-4">
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <CallControls
        isPersonalRoom={isPersonalRoom}
        setLayout={setLayout}
        setShowParticipants={setShowParticipants}
        onLeave={() => redirect("/")}
      />
    </section>
  );
};

export default MeetingRoom;
