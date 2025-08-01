import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hospital Management Dashboard",
    description: "A modern Power BI dashboard for real-time hospital performance monitoring.",
    image: "/projects/project1.png",
    tags: ["Excel", "MYSQL", "Power BI"],
    
    githubUrl: "https://github.com/Arif-Shaik03/HealthCare-Dashboard.git",
  },
  {
    id: 2,
    title: "Smart Weather & AQI Dashboard",
    description:
      "An interactive Power BI dashboard displaying real-time weather, air quality, and 7-day forecasts with a modern UI.",
    image: "/projects/project2.png",
    tags: ["Web API", "MYSQL", "Power BI"],
    
    githubUrl: "https://github.com/Arif-Shaik03/Weather-Dashboard.git",
  },
  {
    id: 3,
    title: "BlinkIt Sales & Retail Performance Dashboard",
    description:
      "An interactive Power BI dashboard analyzing BlinkIt's sales, outlet types, item categories, and customer ratings for actionable retail insights.",
    image: "/projects/project3.png",
    tags: ["Excel", "MYSQL", "Power BI", "Python"],
    
    githubUrl: "https://github.com/Arif-Shaik03/BlinkIt-Dashboard.git",
  },
  {
    id: 4,
    title: "Eloura Modern Fashion & Lifestyle Clothing Store",
    description:
      "A sleek and responsive clothing website built to showcase fashion products with smooth user interactions.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "JavaScript",],
    
    githubUrl: "https://github.com/Arif-Shaik03/Eloura-Website.git",
  },
  {
    id: 5,
    title: "Secure Semantic Communication for AI-Generated Content Using Blockchain",
    description:
      "A blockchain-powered framework ensuring secure, trustworthy transmission and interpretation of     AI-generated content through semantic protocols.",
    image: "/projects/project5.png",
    tags: ["AI", "NLP", "Python",],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Arif-Shaik03"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
