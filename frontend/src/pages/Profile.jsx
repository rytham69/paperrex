import {
  UserProfile,
  useUser,
  useAuth,
  SignOutButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Profile = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const navigate = useNavigate();
  const containerRef = useRef();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      navigate("/login");
    }
  }, [isLoaded, isSignedIn, navigate]);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  if (!isLoaded || !isSignedIn) return null;

  return (
    <div className="min-h-screen w-[100vw] flex items-center justify-center bg-transparent px-4 py-10">
      <div
        ref={containerRef}
        className="w-full max-w-4xl  bg-transparent rounded-xl p-6 md:p-10 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-[#e3ecdb] mb-8 text-center">
          Profile Settings
        </h1>

        <UserProfile
          appearance={{
            variables: {
              colorPrimary: "#4ade80",
              colorBackground: "#1a1a1a",
              colorText: "#e3ecdb",
              colorInputBackground: "#2c2c2c",
              colorInputText: "#e3ecdb",
              borderRadius: "0.75rem",
              fontFamily: "Inter, sans-serif",
            },
            elements: {
              rootBox: "w-full text-[#e3ecdb]",
              card: "border border-[#333] bg-[#1a1a1a] p-4 rounded-xl",
              headerTitle: "text-2xl font-semibold text-[#e3ecdb]",
              headerSubtitle: "text-sm text-gray-400",
              profileSection: "py-5 border-b border-[#333]",
              profileSectionTitle: "text-lg font-medium text-[#e3ecdb]",
              profileSectionContent: "space-y-4",
              formButtonPrimary:
                "bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md transition",
              formButtonReset:
                "bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-2 rounded-md transition",
              userPreviewMainIdentifier: "text-sm text-gray-400",
              identityPreviewText: "text-[#e3ecdb]",
              badge: "bg-green-200 text-green-800 px-2 py-1 text-xs rounded-full",
              navbar: "hidden",
              footer: "hidden",
            },
          }}
        />

        <div className="flex justify-center mt-10">
          <SignOutButton redirectUrl="/login" >
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold mt-5 px-10 py-2 rounded shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
