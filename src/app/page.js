'use client';

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Star, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [contentCards, setContentCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/content`, {
        cache: "no-store",
      });
      const data = await res.json();
      setContentCards(data.success ? data.data : []);
    };

    fetchContent();
  }, []);

  const filteredContent = contentCards.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Mods & Apps</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Download the latest modified apps and games with enhanced features, unlimited resources, and premium unlocks.
          </p>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for a game or app..."
            className="w-full max-w-md mx-auto border border-gray-300 rounded px-4 py-2 mt-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Content Cards */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredContent.length === 0 ? (
            <p className="text-center text-gray-500">No results found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((content) => (
                <Card
                  key={content._id}
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
                >
                  <div className="relative">
                    <img
                      src={content.image || "/placeholder.svg"}
                      alt={content.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    {content.featured && (
                      <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500">
                        Featured
                      </Badge>
                    )}
                    <Badge variant="secondary" className="absolute top-3 right-3">
                      {content.category}
                    </Badge>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {content.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{content.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{content.downloads}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {content.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Link href={`download/${content._id}`} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Download
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          <div className="m-10">

          <script async="async" data-cfasync="false" src="//pl27312282.profitableratecpm.com/01e0471042dcbaf4c645f523329b51ba/invoke.js"></script>
          <div id="container-01e0471042dcbaf4c645f523329b51ba"></div>
          </div>
        </div>
       
      </section>
    </div>
  );
}
