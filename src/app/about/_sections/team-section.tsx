import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Sarah Johnson", position: "CEO & Co-Founder" },
  { name: "Michael Chen", position: "CTO & Co-Founder" },
  { name: "Emily Rodriguez", position: "Head of Product" },
  { name: "David Kim", position: "Head of Marketing" },
];

const TeamSection = () => {
  return (
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
  );
};

export default TeamSection;
