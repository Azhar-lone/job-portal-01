import { Card, CardContent } from "@/components/ui/card"

interface JobDescriptionProps {
  job: {
    description: string
    responsibilities: string[]
    requirements: string[]
    benefits: string[]
  }
}

export function JobDescription({ job }: JobDescriptionProps) {
  return (
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
  )
}
