import { Card, CardContent } from "#/src/components/ui/card";
import React from "react";
import Image from "next/image";
const Map = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-0">
            <div className="relative h-96 w-full">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Map;
