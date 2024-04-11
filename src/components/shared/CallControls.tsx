import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  CallStatsButton,
  CancelCallButton,
  ReactionsButton,
  RecordCallButton,
  ScreenShareButton,
  SpeakingWhileMutedNotification,
  ToggleAudioPublishingButton,
  ToggleVideoPublishingButton,
} from "@stream-io/video-react-sdk";
import { LayoutList, Users } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";
import EndCallButton from "./EndCallButton";
import { CallLayoutType } from "./MeetingRoom";

export type CallControlsProps = {
  onLeave?: () => void;
  setLayout: (layout: CallLayoutType) => void;
  setShowParticipants: Dispatch<SetStateAction<boolean>>;
  isPersonalRoom: boolean;
};

const CallControls: React.FC<CallControlsProps> = ({
  onLeave,
  setLayout,
  setShowParticipants,
  isPersonalRoom,
}) => {
  return (
    <div className="h-[100px] flex items-center justify-center gap-2 border-border border-2 w-full">
      <RecordCallButton />
      <ReactionsButton />
      <ScreenShareButton />
      <SpeakingWhileMutedNotification>
        <ToggleAudioPublishingButton />
      </SpeakingWhileMutedNotification>
      <ToggleVideoPublishingButton />
      <CancelCallButton onLeave={onLeave} />
      <DropdownMenu>
        <div className="flex items-center">
          <DropdownMenuTrigger>
            <Button variant={"outline"}>
              <LayoutList size={20} />
            </Button>
          </DropdownMenuTrigger>
        </div>
        <DropdownMenuContent>
          {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
            <div key={index}>
              <DropdownMenuItem
                onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}
              >
                {item}
              </DropdownMenuItem>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <CallStatsButton />
      <Button
        onClick={() => setShowParticipants((prev) => !prev)}
        variant={"outline"}
      >
        <Users size={20} />
      </Button>
      {!isPersonalRoom && <EndCallButton />}
    </div>
  );
};

export default CallControls;
