import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, MapPin, Briefcase } from "lucide-react"

interface CompanyInfoProps {
  company: string
  location: string
}

export function CompanyInfo({ company, location }: CompanyInfoProps) {
  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Company Information</h2>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-muted rounded-md flex items-center justify-center mr-4">
            <Building2 className="text-primary" size={32} />
          </div>
          <div>
            <h3 className="font-bold">{company}</h3>
            <Link href="#" className="text-primary text-sm hover:underline">
              View Company Profile
            </Link>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">
          {company} is a leading technology company specializing in innovative software solutions for businesses of all
          sizes.
        </p>
        <div className="space-y-2">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 text-muted-foreground" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase size={16} className="mr-2 text-muted-foreground" />
            <span className="text-sm">Technology</span>
          </div>
          <div className="flex items-center">
            <Building2 size={16} className="mr-2 text-muted-foreground" />
            <span className="text-sm">501-1000 employees</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
