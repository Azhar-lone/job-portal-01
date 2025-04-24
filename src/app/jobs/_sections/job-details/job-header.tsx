import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, Briefcase, Clock, DollarSign, Share2, Bookmark } from "lucide-react"

interface JobHeaderProps {
  job: {
    title: string
    company: string
    location: string
    type: string
    salary: string
    posted: string
  }
}

export function JobHeader({ job }: JobHeaderProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center">
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
  )
}
