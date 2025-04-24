import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"

export function ApplyNow() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Apply for this Job</h2>
        <p className="text-muted-foreground mb-4">
          Submit your application now and take the next step in your career journey.
        </p>
        <Button className="w-full mb-4">Apply Now</Button>
        <div className="flex items-center justify-center text-sm text-muted-foreground">
          <Clock size={14} className="mr-1" />
          <span>Quick application process</span>
        </div>
      </CardContent>
    </Card>
  )
}
