import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export function MissionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To create a platform that transforms how people find jobs and how companies hire talent, making the process
            more efficient, transparent, and rewarding for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Connect People</h3>
              <p className="text-muted-foreground">
                We bring together job seekers and employers, creating meaningful professional connections.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Empower Careers</h3>
              <p className="text-muted-foreground">
                We provide the tools and resources needed for professionals to advance their careers.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Foster Growth</h3>
              <p className="text-muted-foreground">
                We help businesses find the talent they need to innovate and grow in today's competitive market.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
