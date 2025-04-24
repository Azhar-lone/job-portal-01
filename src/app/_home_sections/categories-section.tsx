import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

// Sample data
const categories = [
  { name: "Technology", count: 235, icon: <Briefcase className="text-primary" size={24} /> },
  { name: "Marketing", count: 152, icon: <Briefcase className="text-primary" size={24} /> },
  { name: "Finance", count: 189, icon: <Briefcase className="text-primary" size={24} /> },
  { name: "Healthcare", count: 204, icon: <Briefcase className="text-primary" size={24} /> },
]

export function CategoriesSection() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {category.icon}
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{category.count} Jobs</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
