import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, DollarSign, ChevronRight } from "lucide-react"

// Sample data
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
]

export function SimilarJobs() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Similar Jobs</h2>
        <div className="space-y-4">
          {similarJobs.map((job, index) => (
            <Link href={`/jobs/${job.id}`} key={index}>
              <div className="flex flex-col md:flex-row md:items-center p-4 border rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-md flex items-center justify-center mb-4 md:mb-0 md:mr-4">
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
  )
}
