import React from 'react'

const WorksSection = () => {
  return (
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
            Sign up for free and complete your profile with your skills,
            experience, and job preferences.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4 relative">
            <span className="text-primary font-bold text-xl">2</span>
            <div className="absolute w-full h-1 bg-primary-light right-0 top-1/2 -z-10 md:w-full md:left-1/2"></div>
          </div>
          <h3 className="text-xl font-bold mb-2">Discover Opportunities</h3>
          <p className="text-muted-foreground">
            Browse thousands of job listings or receive personalized job
            recommendations based on your profile.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-primary font-bold text-xl">3</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Apply and Connect</h3>
          <p className="text-muted-foreground">
            Apply to jobs with just a few clicks and connect directly with
            employers through our platform.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default WorksSection