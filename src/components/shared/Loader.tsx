import { cn } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

export interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const Loader = () => {
  return <LoadingSpinner />;
};

export const LoadingSpinner = ({
  size = 24,
  className,
  ...props
}: ISVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export const MeetingListLoadingSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from(["1", "2", "3", "4"]).map((value) => (
        <Skeleton
          key={value}
          className="h-44 w-full mb-4 rounded-radius border border-border"
        />
      ))}
    </div>
  );
};

export default Loader;
