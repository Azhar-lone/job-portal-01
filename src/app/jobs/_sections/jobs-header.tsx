import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function JobsHeader() {
  return (
    <div className="bg-background p-4 rounded-lg shadow-sm border mb-6">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input placeholder="Job title, keywords, or company" className="pl-10" />
        </div>
        <div className="relative flex-1">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input placeholder="City, state, or zip code" className="pl-10" />
        </div>
        <Button className="md:w-auto w-full">Search</Button>
      </div>
    </div>
  )
}
