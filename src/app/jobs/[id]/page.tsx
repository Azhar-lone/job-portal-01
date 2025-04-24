import { JobHeader } from "../_sections/job-details/job-header"
import { JobDescription } from "../_sections/job-details/job-description"
import { SimilarJobs } from "../_sections/job-details/similar-jobs"
import { CompanyInfo } from "../_sections/job-details/company-info"
import { JobOverview } from "../_sections/job-details/job-overview"
import { ApplyNow } from "../_sections/job-details/apply-now"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job details based on the ID
  const job = {
    id: params.id,
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
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <div className="lg:w-2/3 w-full">
          <JobHeader job={job} />
          <JobDescription job={job} />
          <SimilarJobs />
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 w-full">
          <CompanyInfo company={job.company} location={job.location} />
          <JobOverview job={job} />
          <ApplyNow />
        </div>
      </div>
    </div>
  )
}
