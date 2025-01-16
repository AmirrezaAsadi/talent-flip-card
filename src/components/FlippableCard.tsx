import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface ProfileData {
  name: string;
  role: string;
  avatar: string;
  description: string;
  skills: string[];
  match: number;
}

interface FlippableCardProps {
  profile: ProfileData;
}

export const FlippableCard = ({ profile }: FlippableCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        if (cardRef.current) {
          const rect = cardRef.current.getBoundingClientRect();
          document.documentElement.style.setProperty('--card-top', `${rect.top}px`);
          document.documentElement.style.setProperty('--card-left', `${rect.left}px`);
          document.documentElement.style.setProperty('--card-width', `${rect.width}px`);
          document.documentElement.style.setProperty('--card-height', `${rect.height}px`);
          setIsExpanded(true);
        }
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  const handleClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsFlipped(false);
  };

  return (
    <div
      ref={cardRef}
      className={`
        preserve-3d cursor-pointer
        ${isExpanded ? 'fixed top-4 left-4 right-4 bottom-4 z-50 m-4' : 'w-[300px] h-[400px]'}
        ${isFlipped ? 'animate-card-flip' : 'animate-card-flip-back'}
      `}
      onClick={handleClick}
      style={{ perspective: "1000px" }}
    >
      {/* Front of card */}
      <div
        className={`
          absolute w-full h-full backface-hidden rounded-xl p-6
          bg-gradient-to-br from-[#9b87f5] to-[#7E69AB]
          flex flex-col items-center justify-center gap-4
          shadow-lg
        `}
      >
        <Avatar className="w-24 h-24">
          <AvatarImage src={profile.avatar} />
          <AvatarFallback>{profile.name[0]}</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
        <p className="text-white/90">{profile.role}</p>
        <div className="bg-white/20 px-3 py-1 rounded-full">
          <span className="text-white font-semibold">{profile.match}% Match</span>
        </div>
        <p className="text-sm text-white/80">Click to view profile</p>
      </div>

      {/* Back of card */}
      <div
        className={`
          absolute w-full h-full backface-hidden rounded-xl
          bg-white/95 shadow-lg rotate-y-180
          ${isExpanded ? 'animate-expand-card' : ''}
          overflow-auto
        `}
      >
        <div className="relative p-8 max-w-6xl mx-auto bg-white/80 rounded-xl backdrop-blur-sm shadow-xl m-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={profile.avatar} />
              <AvatarFallback>{profile.name[0]}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{profile.role}</p>
            <div className="bg-purple-100 px-4 py-2 rounded-full mb-6">
              <span className="text-purple-800 font-semibold">{profile.match}% Match</span>
            </div>
            <p className="text-gray-700 max-w-2xl text-center mb-8">
              {profile.description}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};