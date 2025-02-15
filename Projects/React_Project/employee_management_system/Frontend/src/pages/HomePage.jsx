import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Briefcase, Users, PlusCircle } from "lucide-react";
import Navbar from "../components/Others/Navbar";
import HeroSection from "../components/Others/HeroSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Quick Links */}
      <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Briefcase size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              Assign Tasks
            </h3>
            <p className="text-gray-600">Manage all the employees</p>
            <Button asChild className="mt-4">
              <Link to="/admin">Admin HomePage</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users size={40} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-neutral-800">
              See all Tasks
            </h3>
            <p className="text-gray-600">Check the progress</p>
            <Button asChild className="mt-4">
              <Link to="/employee">Employee HomePage</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
