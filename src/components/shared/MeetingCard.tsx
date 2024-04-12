"use client";

import { CirclePlay, Copy, LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: ReactNode;
  isPreviousMeeting?: boolean;
  buttonIcon1?: LucideIcon;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

const MeetingCard = ({
  icon,
  title,
  date,
  isPreviousMeeting,
  handleClick,
  link,
  buttonText,
}: MeetingCardProps) => {
  const { toast } = useToast();

  return (
    <section className="flex border-border border-2 min-h-[258px] w-full flex-col justify-between rounded-lg bg-card p-4 marker:xl:max-w-[568px]">
      <article className="flex  justify-between gap-5">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="font-normal">{date}</p>
          </div>
        </div>

        {icon}
      </article>
      <article className="flex justify-end">
        {!isPreviousMeeting && (
          <div className="flex gap-2">
            <Button onClick={handleClick}>
              <CirclePlay />
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast({
                  title: "Link Copied",
                });
              }}
            >
              <Copy />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
