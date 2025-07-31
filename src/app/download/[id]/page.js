"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Star,
  Users,
  Shield,
  Smartphone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Page() {
  const { id } = useParams();
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchContent = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/content/${id}`,
          { cache: "no-store" }
        );
        const data = await res.json();
        if (data.success) setContentData(data.data);
      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [id]);

  const handleDownloadClick = () => {
    setShowModal(true);
  };

  const handleContinue = () => {
    setShowModal(false);
    window.open(contentData.lockerLink, "_blank");
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (!contentData)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load content.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={contentData.image}
                  alt={contentData.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {contentData.category}
                    </Badge>
                    {contentData.featured && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold">{contentData.title}</h1>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{contentData.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{contentData.downloads} downloads</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span>About {contentData.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {contentData.about}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(Array.isArray(contentData?.keyFeatures)
                    ? contentData.keyFeatures
                    : []
                  ).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                      <span className="text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
          <script async="async" data-cfasync="false" src="//pl27312282.profitableratecpm.com/01e0471042dcbaf4c645f523329b51ba/invoke.js"></script>
          <div id="container-01e0471042dcbaf4c645f523329b51ba"></div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-center">
                  Download {contentData.title}
                </CardTitle>
                <CardDescription className="text-center">
                  {contentData.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-gray-900">
                    {contentData.rating}/5
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(contentData.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    {contentData.downloads} downloads
                  </p>
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{contentData.category}</span>
                  </div>
                </div>

                <Separator />

                <Button
                  onClick={handleDownloadClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
                <div className="flex items-center justify-center space-x-1 mt-3 text-xs text-gray-500">
                  <Shield className="w-3 h-3" />
                  <span>Safe & Secure Download</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Confirm Human Verification</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            To access the download, please complete a quick offer to prove you are not a robot. You’ll be redirected to the download after verification.
          </p>
          
          <DialogFooter className="mt-4">
            <Button onClick={handleContinue}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >Complete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
