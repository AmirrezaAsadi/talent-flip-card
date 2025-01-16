import { FlippableCard } from "@/components/FlippableCard";

const profileData = {
  name: "Sarah Anderson",
  role: "Senior UX Designer",
  avatar: "https://ui-avatars.com/api/?name=Sarah+Anderson&background=random",
  description: "Passionate UX designer with 8+ years of experience creating user-centered digital experiences. Specialized in mobile applications and web interfaces, with a strong focus on accessibility and inclusive design.",
  skills: [
    "UI/UX Design",
    "Figma",
    "User Research",
    "Prototyping",
    "Design Systems",
    "Accessibility",
    "Adobe Creative Suite",
    "Motion Design"
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <FlippableCard profile={profileData} />
    </div>
  );
};

export default Index;