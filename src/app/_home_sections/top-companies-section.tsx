import { Card, CardContent } from "@/components/ui/card"
import { Building2 } from "lucide-react"

// Sample data
const topCompanies = [
  { name: "Tech Solutions", jobCount: 42 },
  { name: "Global Brands", jobCount: 36 },
  { name: "Creative Studio", jobCount: 28 },
  { name: "Data Insights", jobCount: 31 },
]

export function TopCompaniesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Top Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {topCompanies.map((company, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="text-primary" size={24} />
                </div>
                <h3 className="font-medium">{company.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{company.jobCount} Jobs</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
