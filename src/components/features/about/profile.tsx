import { ImageWithFallback } from "@/components/common/image-with-fallback";
import { FeatureCard } from "@/components/common";

/**
 * Profile section component displaying profile image and introduction text
 * Used in the About page
 */
export function ProfileSection(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
      <div className="animate-fadeInLeft">
        <FeatureCard variant="default" hover className="h-full">
          <div className="relative w-full h-80 rounded-lg mb-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-400/20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </FeatureCard>
      </div>

      <div className="flex flex-col justify-center animate-fadeInRight">
        <h2 className="text-3xl mb-6 font-bold">Who am I?</h2>
        <div className="space-y-4 text-gray-400 font-normal leading-relaxed">
          <p>
            I&apos;m{" "}
            <span className="text-teal-500 font-semibold">Mathieu Nguyen</span>,
            a Freelance Front-End Web Developer with 7 years of experience
            creating high-performance, intuitive, and maintainable web
            interfaces.
          </p>
          <p>
            I began coding driven by a love for problem-solving and building
            things that people can use and enjoy. Over time, I focused on
            front-end development and learned to master modern JavaScript
            ecosystems, full-stack frameworks, and advanced tooling.
          </p>
          <p>
            From my early roles at Alain Afflelou and Extia to my current
            freelance work, I&apos;ve designed and maintained web applications
            that prioritize speed, accessibility, and reliability, while
            participating in architecture discussions, code reviews, and
            performance optimizations.
          </p>
          <p>
            When I&apos;m not building websites, I enjoy exploring web
            technologies, experimenting with automation tools or contributing to
            personal projects. Outside work, I focus on sports, particularly
            CrossFit and boxing, nurture my passion for history and geopolitics,
            and unwind with video games from time to time.
          </p>
        </div>
      </div>
    </div>
  );
}
