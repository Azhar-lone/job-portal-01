import { JobsHeader } from "./_sections/jobs-header"
import { JobsContent } from "./_sections/jobs-content"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>
      <JobsHeader />
      <JobsContent />
    </div>
  )
}
