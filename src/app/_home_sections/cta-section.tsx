import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-12  text-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Find Your Dream Job?
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Join thousands of job seekers who have found their perfect career
          match through our platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button  >
            Post a Job
          </Button>
          <Button variant="outline" >Browse Jobs</Button>
        </div>
      </div>
    </section>
  );
}
