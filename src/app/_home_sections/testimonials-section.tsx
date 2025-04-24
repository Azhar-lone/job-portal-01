import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Sample data
const testimonials = [
  {
    name: "John Smith",
    position: "Software Engineer",
    content:
      "I found my dream job within a week of using this platform. The interface is intuitive and the job recommendations were spot on!",
  },
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    content:
      "As an employer, I've been able to find qualified candidates quickly. The filtering options make it easy to find the right fit.",
  },
  {
    name: "Michael Brown",
    position: "UX Designer",
    content:
      "The platform's design is excellent and the job alerts feature helped me stay on top of new opportunities in my field.",
  },
  {
    name: "Michael Brown",
    position: "UX Designer",
    content:
      "The platform's design is excellent and the job alerts feature helped me stay on top of new opportunities in my field.",
  },

    {
    name: "Michael Brown",
    position: "UX Designer",
    content:
      "The platform's design is excellent and the job alerts feature helped me stay on top of new opportunities in my field.",
  },

]

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-primary/10 dark:bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Testimonials from Our Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
