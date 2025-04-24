import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Briefcase, DollarSign } from "lucide-react"

interface JobOverviewProps {
  job: {
    type: string
    location: string
    salary: string
    posted: string
  }
}

export function JobOverview({ job }: JobOverviewProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Job Overview</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <Clock className="mr-3 text-muted-foreground mt-0.5" size={18} />
            <div>
              <h3 className="font-medium text-sm">Date Posted</h3>
              <p className="text-muted-foreground text-sm">April 15, 2023</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="mr-3 text-muted-foreground mt-0.5" size={18} />
            <div>
              <h3 className="font-medium text-sm">Expiration Date</h3>
              <p className="text-muted-foreground text-sm">May 15, 2023</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="mr-3 text-muted-foreground mt-0.5" size={18} />
            <div>
              <h3 className="font-medium text-sm">Location</h3>
              <p className="text-muted-foreground text-sm">{job.location}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Briefcase className="mr-3 text-muted-foreground mt-0.5" size={18} />
            <div>
              <h3 className="font-medium text-sm">Job Type</h3>
              <p className="text-muted-foreground text-sm">{job.type}</p>
            </div>
          </div>
          <div className="flex items-start">
            <DollarSign className="mr-3 text-muted-foreground mt-0.5" size={18} />
            <div>
              <h3 className="font-medium text-sm">Salary</h3>
              <p className="text-muted-foreground text-sm">{job.salary}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
