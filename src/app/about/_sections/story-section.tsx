import React from "react";
import Image from "next/image";
const StorySection = () => {
  return (
    <section className="py-16 bg-secondary">
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
              JobPortal was founded in 2015 by a team of HR professionals and
              tech enthusiasts who saw the need for a more efficient and
              user-friendly job search platform.
            </p>
            <p className="mb-4 text-muted-foreground">
              What started as a small startup has grown into a leading job
              marketplace, connecting millions of professionals with their dream
              careers and helping thousands of companies build strong teams.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to innovate and improve our platform, always
              keeping our focus on creating the best possible experience for job
              seekers and employers alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
