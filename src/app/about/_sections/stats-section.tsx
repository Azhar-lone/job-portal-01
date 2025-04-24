import { Card, CardContent } from "#/src/components/ui/card";
import React from "react";

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
