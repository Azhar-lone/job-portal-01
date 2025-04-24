import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Share2,
  Bookmark,
  ChevronRight,
} from "lucide-react";

export default function JobDetailsPage() {
  // In a real app, you would fetch the job details based on the ID
  const job = {
    id: 1,
    title: "Software Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120K-$150K",
    posted: "2 days ago",
    description:
      "We are looking for a skilled Software Developer to join our dynamic team. The ideal candidate will have experience in developing high-quality applications and be proficient in modern programming languages and frameworks.",
    responsibilities: [
      "Design, develop, and maintain high-performance, reusable, and reliable code",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Identify and correct bottlenecks and fix bugs",
      "Help maintain code quality, organization, and automatization",
      "Participate in code reviews and provide constructive feedback to other developers",
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript, TypeScript, and React",
      "Experience with RESTful APIs and modern frontend frameworks",
      "Familiarity with version control systems (Git)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork skills",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "401(k) with company match",
      "Flexible work schedule and remote options",
      "Professional development budget",
      "Paid time off and parental leave",
    ],
  };

  const similarJobs = [
    {
      id: "2",
      title: "Frontend Developer",
      company: "Web Solutions",
      location: "San Francisco, CA",
      salary: "$100K-$130K",
    },
    {
      id: "3",
      title: "Full Stack Engineer",
      company: "Tech Innovators",
      location: "Remote",
      salary: "$110K-$140K",
    },
    {
      id: "4",
      title: "React Developer",
      company: "App Creators",
      location: "New York, NY",
      salary: "$95K-$120K",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="lg:w-2/3 w-full">
          {/* Job Header */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                  <Building2 className="text-primary" size={32} />
                </div>
                <div className="flex-grow">
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <div className="flex flex-wrap gap-y-2 gap-x-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building2 size={16} className="mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {job.posted}
                    </div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 md:mt-0">
                  <Button variant="outline" size="icon">
                    <Share2 size={18} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Bookmark size={18} />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full md:w-auto">Apply Now</Button>
              </div>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Job Description</h2>
              <p className="mb-6 text-muted-foreground">{job.description}</p>

              <h3 className="text-lg font-bold mb-3">Responsibilities</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mb-3">Requirements</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-bold mb-3">Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Similar Jobs */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Similar Jobs</h2>
              <div className="space-y-4">
                {similarJobs.map((job, index) => (
                  <Link href={`/jobs/${job.id}`} key={index}>
                    <div className="flex flex-col md:flex-row md:items-center p-4 border rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mb-4 md:mb-0 md:mr-4">
                        <Building2 className="text-primary" size={24} />
                      </div>

                      <div className="flex-grow md:mr-4">
                        <h3 className="font-medium">{job.title}</h3>
                        <div className="flex flex-wrap gap-y-1 gap-x-4 mt-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Building2 size={14} className="mr-1" />
                            {job.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign size={14} className="mr-1" />
                            {job.salary}
                          </div>
                        </div>
                      </div>

                      <ChevronRight className="ml-auto text-muted-foreground hidden md:block" />
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 w-full">
          {/* Company Info */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Company Information</h2>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  <Building2 className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="font-bold">{job.company}</h3>
                  <Link
                    href="#"
                    className="text-primary text-sm hover:underline"
                  >
                    View Company Profile
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Tech Solutions Inc. is a leading technology company specializing
                in innovative software solutions for businesses of all sizes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-muted-foreground" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <div className="flex items-center">
                  <Briefcase size={16} className="mr-2 text-muted-foreground" />
                  <span className="text-sm">Technology</span>
                </div>
                <div className="flex items-center">
                  <Building2 size={16} className="mr-2 text-muted-foreground" />
                  <span className="text-sm">501-1000 employees</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Overview */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Job Overview</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock
                    className="mr-3 text-muted-foreground mt-0.5"
                    size={18}
                  />
                  <div>
                    <h3 className="font-medium text-sm">Date Posted</h3>
                    <p className="text-muted-foreground text-sm">
                      April 15, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock
                    className="mr-3 text-muted-foreground mt-0.5"
                    size={18}
                  />
                  <div>
                    <h3 className="font-medium text-sm">Expiration Date</h3>
                    <p className="text-muted-foreground text-sm">
                      May 15, 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin
                    className="mr-3 text-muted-foreground mt-0.5"
                    size={18}
                  />
                  <div>
                    <h3 className="font-medium text-sm">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      {job.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Briefcase
                    className="mr-3 text-muted-foreground mt-0.5"
                    size={18}
                  />
                  <div>
                    <h3 className="font-medium text-sm">Job Type</h3>
                    <p className="text-muted-foreground text-sm">{job.type}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign
                    className="mr-3 text-muted-foreground mt-0.5"
                    size={18}
                  />
                  <div>
                    <h3 className="font-medium text-sm">Salary</h3>
                    <p className="text-muted-foreground text-sm">
                      {job.salary}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Apply Now */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Apply for this Job</h2>
              <p className="text-muted-foreground mb-4">
                Submit your application now and take the next step in your
                career journey.
              </p>
              <Button className="w-full mb-4">Apply Now</Button>
              <div className="flex items-center justify-center text-sm text-muted-foreground">
                <Clock size={14} className="mr-1" />
                <span>Quick application process</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
