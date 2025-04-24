import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-primary/10 dark:bg-primary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-6">
              We connect talented professionals with their dream careers and help companies find the perfect candidates.
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
  )
}
