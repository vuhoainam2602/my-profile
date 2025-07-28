import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spec EDU",
    description: "Website bán khóa học trực tuyến.",
    image: "/projects/project4.png",
    tags: ["Spring boot", "HTML/CSS", "MySQL"],
    demoUrl: "https://spec.edu.vn/",
    githubUrl: "#",
    script: "Click vào để xem chi tiết dự án",
  },
  {
    id: 2,
    title: "Văn phòng số",
    description:
      "Quản lý văn bản, công việc và quy trình làm việc trực tuyến.",
    image: "/projects/project7.png",
    tags: ["ASP.NET MVC", "SQL Server"],
    demoUrl: "/projects/project7.png",
    githubUrl: "#",
    script: "Do tính bảo mật, tôi không thể công khai mã nguồn của dự án này.",
  },
  {
    id: 3,
    title: "PMS quản lý dự án",
    description:
      "Quản lý dự án, hợp đồng, quyết toán, thực hiệ đầu tư trong một nền tảng duy nhất.",
    image: "/projects/project6.png",
    tags: ["ASP.NET MVC", "SQL Server"],
    demoUrl: "/projects/project6.png",
    githubUrl: "#",
     script: "Do tính bảo mật, tôi không thể công khai mã nguồn của dự án này.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Dự án <span className="text-primary"> nổi bật </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Sau đây là một số dự án gần đây của tôi. Mỗi dự án đều được thiết kế cẩn thận, chú ý đến từng chi tiết, hiệu suất và trải nghiệm của người dùng.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <a
              href={project.demoUrl}
              target="_blank"
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
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${tag}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
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
                    <p
                      className="text-xs px-2 py-1 rounded bg-yellow-100 text-yellow-800 border border-yellow-300 italic"
                    >
                      {project.script}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vuhoainam2602"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
