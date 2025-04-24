import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-primary/10 dark:bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Find Your Dream Job Today!</h1>
          <div className="bg-background p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <Input placeholder="Job title, keywords, or company" className="pl-10" />
              </div>
              <div className="relative flex-1">
                <MapPin
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  size={18}
                />
                <Input placeholder="City, state, or zip code" className="pl-10" />
              </div>
              <Button className="md:w-auto w-full">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
