import React from "react";
import { Building2, Crown, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      color: "primary",
    },
    {
      icon: Crown,
      title: "Online activity",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      color: "secondary",
    },
    {
      icon: Settings,
      title: "Management",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      color: "accent",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services Of Demo. Ai
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div
                    className={`
                    w-32 h-32 mx-auto rounded-full border-4 bg-white shadow-lg
                    flex items-center justify-center relative
                    ${
                      service.color === "primary"
                        ? "border-primary"
                        : service.color === "secondary"
                        ? "border-secondary"
                        : "border-pink-500"
                    }
                    group-hover:scale-105 transition-transform duration-300
                  `}
                  >
                    <IconComponent
                      size={48}
                      className={`
                        ${
                          service.color === "primary"
                            ? "text-primary"
                            : service.color === "secondary"
                            ? "text-secondary"
                            : "text-pink-500"
                        }
                      `}
                    />
                    {/* Pointer */}
                    <div
                      className={`
                      absolute -bottom-4 w-6 h-6 rotate-45
                      ${
                        service.color === "primary"
                          ? "bg-primary"
                          : service.color === "secondary"
                          ? "bg-secondary"
                          : "bg-pink-500"
                      }
                    `}
                    ></div>
                  </div>

                  {/* Connection Line */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-12 bg-border"></div>
                  <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-border"></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3
                    className={`
                    text-2xl font-semibold
                    ${
                      service.color === "primary"
                        ? "text-primary"
                        : service.color === "secondary"
                        ? "text-secondary"
                        : "text-pink-500"
                    }
                  `}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Connection Line */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-border"></div>
          <div className="absolute top-0 left-1/6 w-3 h-3 rounded-full bg-border transform -translate-y-1/2"></div>
          <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-border transform -translate-y-1/2"></div>
          <div className="absolute top-0 right-1/6 w-3 h-3 rounded-full bg-border transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
