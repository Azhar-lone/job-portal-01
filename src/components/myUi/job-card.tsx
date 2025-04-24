import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, MapPin, Briefcase, Clock } from "lucide-react"

interface JobCardProps {
  job: {
    title: string
    company: string
    location: string
    type: string
    salary: string
    posted: string
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row md:items-center p-4">
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
                <Briefcase size={14} className="mr-1" />
                {job.type}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {job.posted}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <div className="text-sm font-medium text-primary">{job.salary}</div>
            <Button size="sm" className="ml-auto">
              Apply
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
