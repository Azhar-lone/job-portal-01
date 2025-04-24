import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-light py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
              <p className="text-lg mb-6">
                We connect talented professionals with their dream careers and help companies find the perfect
                candidates.
              </p>
              <Button>Join Our Team</Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team working together"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To create a platform that transforms how people find jobs and how companies hire talent, making the
              process more efficient, transparent, and rewarding for everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
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
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
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
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our journey"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                JobPortal was founded in 2015 by a team of HR professionals and tech enthusiasts who saw the need for a
                more efficient and user-friendly job search platform.
              </p>
              <p className="mb-4 text-muted-foreground">
                What started as a small startup has grown into a leading job marketplace, connecting millions of
                professionals with their dream careers and helping thousands of companies build strong teams.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to innovate and improve our platform, always keeping our focus on creating the best
                possible experience for job seekers and employers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-primary font-bold text-xl">1</span>
                <div className="absolute w-full h-1 bg-primary-light right-0 top-1/2 -z-10 md:w-full md:left-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-muted-foreground">
                Sign up for free and complete your profile with your skills, experience, and job preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-primary font-bold text-xl">2</span>
                <div className="absolute w-full h-1 bg-primary-light right-0 top-1/2 -z-10 md:w-full md:left-1/2"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Discover Opportunities</h3>
              <p className="text-muted-foreground">
                Browse thousands of job listings or receive personalized job recommendations based on your profile.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply and Connect</h3>
              <p className="text-muted-foreground">
                Apply to jobs with just a few clicks and connect directly with employers through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">5M+</h3>
                <p className="text-muted-foreground">Registered Users</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">100K+</h3>
                <p className="text-muted-foreground">Companies</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">250K+</h3>
                <p className="text-muted-foreground">Jobs Posted</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
                <p className="text-muted-foreground">Successful Hires</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Whether you're looking for your next career move or searching for top talent, JobPortal is here to help you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="text-primary">
              Find Jobs
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              For Employers
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  { name: "Sarah Johnson", position: "CEO & Co-Founder" },
  { name: "Michael Chen", position: "CTO & Co-Founder" },
  { name: "Emily Rodriguez", position: "Head of Product" },
  { name: "David Kim", position: "Head of Marketing" },
]
