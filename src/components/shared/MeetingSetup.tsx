"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ban, Camera, Mic } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Switch } from "../ui/switch";
import { useToast } from "../ui/use-toast";
import Alert from "./Alert";
import DisableVidePreview from "./video/DisableVideoPreview";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const { toast } = useToast();
  const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  const callStartsAt = useCallStartsAt();
  const callEndedAt = useCallEndedAt();
  const [isCamToggled, setIsCamToggled] = useState<boolean>(false);
  const [isMicToggled, setIsMicToggled] = useState<boolean>(false);

  const callTimeNotArrived =
    callStartsAt && new Date(callStartsAt) > new Date();
  const callHasEnded = !!callEndedAt;

  const call = useCall();

  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component.",
    );
  }

  const handleToggleChange = (name: "cam" | "mic") => (isChecked: boolean) => {
    switch (name) {
      case "cam":
        setIsCamToggled(isChecked);
        toast({
          title: "Cam is enabled",
          description:
            "You will continue to receive important security notifications.",
        });
        break;
      case "mic":
        setIsMicToggled(isChecked);
        toast({
          title: "Mic is enabled",
          description:
            "You will continue to receive important security notifications.",
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (isCamToggled) {
      call.camera.enable();
    } else {
      call.camera.disable();
    }

    if (isMicToggled) {
      call.microphone.enable();
    } else {
      call.microphone.disable();
    }
  }, [isCamToggled, isMicToggled, call.camera, call.microphone]);

  if (callTimeNotArrived)
    return (
      <Alert
        title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
      />
    );

  if (callHasEnded)
    return <Alert title="The call has been ended by the host" Icon={Ban} />;

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Setup</CardTitle>
          <CardDescription>
            Configure your devices before meetign
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VideoPreview
            className="rounded-lg border-border border-2 overflow-hidden w-full"
            DisabledVideoPreview={DisableVidePreview}
          />
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5 hidden md:block">
                <div className="text-base">Enable cam?</div>
                <span className="">
                  You will enter in this meetings with enabled cam.
                </span>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <Camera className="md:hidden h-8 w-8" />
                <Badge
                  className={cn(
                    "h-8 px-4",
                    isCamToggled ? "bg-destructive" : "Disabled",
                  )}
                >
                  {isCamToggled ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  className={cn(
                    "h-8 px-4 hidden md:flex items-center",
                    isCamToggled ? "bg-destructive" : "Disabled",
                  )}
                >
                  {isCamToggled ? "Enabled" : "Disabled"}
                </Badge>
                <Switch
                  checked={isCamToggled}
                  onCheckedChange={handleToggleChange("cam")}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5 hidden md:block">
                <div className="text-base">Enable mic?</div>
                <span>You will enter in this meetings with enabled mic.</span>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <Mic className="md:hidden h-8 w-8" />
                <Badge
                  className={cn(
                    "h-8 px-4",
                    isMicToggled ? "bg-destructive" : "Disabled",
                  )}
                >
                  {isMicToggled ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  className={cn(
                    "h-8 px-4 hidden md:flex items-center",
                    isMicToggled ? "bg-destructive" : "Disabled",
                  )}
                >
                  {isMicToggled ? "Enabled" : "Disabled"}
                </Badge>
                <Switch
                  checked={isMicToggled}
                  onCheckedChange={handleToggleChange("mic")}
                />
              </div>
            </div>
            <div className="text-right">
              <DeviceSettings />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={() => {
              call.join();

              setIsSetupComplete(true);
            }}
          >
            Join meeting
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default MeetingSetup;
