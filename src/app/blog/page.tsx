import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Tag } from "lucide-react";
import TagComp from "#/src/components/myUi/Tag";
import Hero from "./_sections/Hero";

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative h-60 md:h-auto">
                          <Image
                            src={`/placeholder.svg?height=400&width=300`}
                            alt={post.title}
                            fill
                            className="object-cover md:rounded-l-lg"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Tag size={14} className="mr-1" />
                              {post.category}
                            </div>
                          </div>
                          <h2 className="text-xl font-bold mb-2">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="outline">Read More</Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-primary text-white"
                  >
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="sm">
                    10
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Search */}
              <Card className="mb-6">
                <CardContent className="p-4">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={18}
                    />
                    <Input placeholder="Search articles..." className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center justify-between hover:text-primary transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="text-muted-foreground text-sm">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 relative w-16 h-16">
                          <Image
                            src={`/placeholder.svg?height=100&width=100`}
                            alt={post.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <TagComp key={index}>{tag}</TagComp>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const blogPosts = [
  {
    title: "10 Tips for a Successful Job Interview",
    excerpt:
      "Prepare for your next interview with these proven strategies that will help you stand out from other candidates and make a lasting impression on potential employers.",
    date: "April 15, 2023",
    author: "Sarah Johnson",
    category: "Career Advice",
    slug: "interview-tips",
  },
  {
    title: "How to Create a Resume That Gets Noticed",
    excerpt:
      "Learn the key elements of a standout resume that will catch the attention of hiring managers and land you more interviews in today's competitive job market.",
    date: "March 28, 2023",
    author: "Michael Chen",
    category: "Resume Tips",
    slug: "resume-tips",
  },
  {
    title: "The Future of Remote Work: Trends to Watch",
    excerpt:
      "Explore the evolving landscape of remote work and discover the emerging trends that are shaping how companies and employees approach flexible work arrangements.",
    date: "March 15, 2023",
    author: "Emily Rodriguez",
    category: "Workplace Trends",
    slug: "remote-work-trends",
  },
  {
    title: "Navigating Career Changes in 2023",
    excerpt:
      "Thinking about switching careers? This guide provides practical advice for professionals looking to make a successful transition to a new industry or role.",
    date: "February 22, 2023",
    author: "David Kim",
    category: "Career Development",
    slug: "career-changes",
  },
];

const categories = [
  { name: "Career Advice", count: 24 },
  { name: "Resume Tips", count: 18 },
  { name: "Interview Preparation", count: 15 },
  { name: "Workplace Trends", count: 12 },
  { name: "Job Search Strategies", count: 20 },
  { name: "Career Development", count: 16 },
];

const recentPosts = [
  { title: "10 Tips for a Successful Job Interview", date: "April 15, 2023" },
  { title: "How to Create a Resume That Gets Noticed", date: "March 28, 2023" },
  {
    title: "The Future of Remote Work: Trends to Watch",
    date: "March 15, 2023",
  },
  { title: "Navigating Career Changes in 2023", date: "February 22, 2023" },
];

const tags = [
  "Career Advice",
  "Resume",
  "Interview",
  "Remote Work",
  "Job Search",
  "Networking",
  "Salary Negotiation",
  "LinkedIn",
  "Skills Development",
  "Work-Life Balance",
  "Career Change",
  "Professional Growth",
];
