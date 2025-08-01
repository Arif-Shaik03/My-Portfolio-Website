import { BarChart2Icon, LineChartIcon, Code,} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate <span className="text-primary"> AI-Driven Data Analyst & Web Developer</span>
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in data analysis, I specialize in transforming raw data into meaningful insights using Python, Power BI, Excel,MySQL—enhanced with AI-powered automation and modern web technologies to extract insights, create dynamic dashboards.
            </p>
            
            <p className="text-muted-foreground">
              My expertise spans data cleaning, modeling, visualization, storytelling, and predictive analytics. I focus on helping businesses make smarter, faster, and more informed decisions through data.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about combining AI and analytics to solve real-world problems, and I continuously explore emerging technologies to stay ahead in both the data and web development landscapes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/113kLmhBvFXTUwzJ6DdYncBbq2YEvo0fL/view?usp=sharing"   target = "_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart2Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analyst</h4>
                  <p className="text-muted-foreground">
                    Transforming data into actionable insights through analysis, visualization, and reporting.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LineChartIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Intelligence Analyst</h4>
                  <p className="text-muted-foreground">
                    Building dashboards and reports to support data-driven business decisions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites Specializing in front-end development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
