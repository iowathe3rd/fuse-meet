import { Badge } from "@/components/ui/badge";
import MeetingActionsList from "@/sections/home/MeetingActionsList";

const Home: React.FC = () => {
  const now = new Date();

  const time = now.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now,
  );
  return (
    <section className="flex size-full flex-col gap-5">
      <div className="h-[303px] w-full rounded-lg border-border border p-4">
        <div className="flex h-full flex-col justify-between md:px-5 md:py-8 lg:p-11">
          <Badge className="h-10 border-border border-2 bg-background text-foreground hover:bg-muted w-fit text-md cursor-pointer">
            Upcoming Meeting at: 12:30 PM
          </Badge>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingActionsList />
    </section>
  );
};

export default Home;
