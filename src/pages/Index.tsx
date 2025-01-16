import { FlippableCard } from "@/components/FlippableCard";

const profileData = {
  name: "Sarah Anderson",
  role: "Developer",
  avatar: "https://ui-avatars.com/api/?name=Sarah+Anderson&background=random",
  description: "Passionate developer with 8+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies, with a strong focus on building scalable and maintainable applications.",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
    "GraphQL",
    "MongoDB",
    "Git"
  ],
  match: 90
};

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <FlippableCard profile={profileData} />
    </div>
  );
};

export default Index;