import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { JobCard } from "@/components/myUi/job-card";
import { ChevronDown } from "lucide-react";
// Sample data
const jobTypes = [
  { name: "Full-time", count: 142 },
  { name: "Part-time", count: 56 },
  { name: "Contract", count: 38 },
  { name: "Internship", count: 24 },
  { name: "Remote", count: 65 },
];

const experienceLevels = [
  { name: "Entry Level", count: 87 },
  { name: "Mid Level", count: 103 },
  { name: "Senior Level", count: 67 },
  { name: "Director", count: 21 },
  { name: "Executive", count: 9 },
];

const salaryRanges = [
  { name: "Under $50K", count: 45 },
  { name: "$50K - $80K", count: 82 },
  { name: "$80K - $100K", count: 75 },
  { name: "$100K - $150K", count: 43 },
  { name: "Over $150K", count: 11 },
];

const locations = [
  { name: "Remote", count: 65 },
  { name: "San Francisco, CA", count: 42 },
  { name: "New York, NY", count: 38 },
  { name: "Seattle, WA", count: 29 },
  { name: "Austin, TX", count: 26 },
];

const jobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K-$150K",
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "Product Marketing Manager",
    company: "Global Brands",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90K-$110K",
    posted: "3 days ago",
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Contract",
    salary: "$70-$85/hr",
    posted: "1 week ago",
  },
  {
    id: "4",
    title: "Data Scientist",
    company: "Data Insights Co.",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$100K-$130K",
    posted: "Just now",
  },
  {
    id: "5",
    title: "Frontend Developer",
    company: "Web Solutions",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85K-$105K",
    posted: "3 days ago",
  },
  {
    id: "6",
    title: "DevOps Engineer",
    company: "Cloud Systems",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110K-$140K",
    posted: "1 week ago",
  },
  {
    id: "7",
    title: "Content Marketing Specialist",
    company: "Media Group",
    location: "Remote",
    type: "Part-time",
    salary: "$40-$50/hr",
    posted: "5 days ago",
  },
  {
    id: "8",
    title: "HR Manager",
    company: "Corporate Services",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$80K-$95K",
    posted: "2 weeks ago",
  },
];

export function JobsContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Filters Sidebar */}
      <div className="lg:w-1/4 w-full">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filters</h3>
              <Button variant="ghost" size="sm" className="h-8 text-primary">
                Clear All
              </Button>
            </div>

            {/* Job Type Filter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">Job Type</h4>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {jobTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`job-type-${index}`} />
                    <label htmlFor={`job-type-${index}`} className="text-sm">
                      {type.name}{" "}
                      <span className="text-muted-foreground">
                        ({type.count})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Level Filter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">Experience Level</h4>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {experienceLevels.map((level, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`exp-level-${index}`} />
                    <label htmlFor={`exp-level-${index}`} className="text-sm">
                      {level.name}{" "}
                      <span className="text-muted-foreground">
                        ({level.count})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Salary Range Filter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">Salary Range</h4>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {salaryRanges.map((range, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`salary-range-${index}`} />
                    <label
                      htmlFor={`salary-range-${index}`}
                      className="text-sm"
                    >
                      {range.name}{" "}
                      <span className="text-muted-foreground">
                        ({range.count})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-sm">Location</h4>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={`location-${index}`} />
                    <label htmlFor={`location-${index}`} className="text-sm">
                      {location.name}{" "}
                      <span className="text-muted-foreground">
                        ({location.count})
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </CardContent>
        </Card>
      </div>

      {/* Job Listings */}
      <div className="lg:w-3/4 w-full">
        <div className="flex justify-between items-center mb-4">
          <p className="text-muted-foreground">Showing 1-10 of 256 jobs</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <select className="text-sm border rounded-md px-2 py-1 bg-background">
              <option>Most Relevant</option>
              <option>Newest</option>
              <option>Highest Salary</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <Link href={`/jobs/${job.id}`} key={index} className="block">
              <JobCard job={job} />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-primary text-white"
            >
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <span>...</span>
            <Button variant="outline" size="sm">
              10
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
