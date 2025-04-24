import Link from "next/link";
import { JobCard } from "@/components/myUi/job-card";

// Sample data
const recentJobs = [
  {
    title: "Software Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K-$150K",
    posted: "2 days ago",
  },
  {
    title: "Marketing Manager",
    company: "Global Brands",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90K-$110K",
    posted: "3 days ago",
  },
  {
    title: "UX/UI Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Contract",
    salary: "$70-$85/hr",
    posted: "1 week ago",
  },
  {
    title: "Data Analyst",
    company: "Data Insights Co.",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$85K-$100K",
    posted: "Just now",
  },
];

export function RecentJobsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Jobs Available</h2>
          <Link href="/jobs" className="text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {recentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}
