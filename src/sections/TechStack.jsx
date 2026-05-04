import {
  SiReact, SiAngular, SiVuedotjs, SiNextdotjs,
  SiJavascript, SiTailwindcss, SiHtml5,
  SiPython, SiMongodb, SiMysql, SiNodedotjs,
  SiDocker, SiKubernetes, SiGithub, SiFigma,
  SiDjango, SiFastapi, SiFlask, SiExpress,
  SiSpring, SiHibernate,
  SiJenkins, SiCanva
} from "react-icons/si";

import { 
  FaJava, FaDatabase, FaCloud, FaPaintBrush 
} from "react-icons/fa";

import { MdAnimation } from "react-icons/md";
import { FiCode, FiPenTool } from "react-icons/fi";

const techData = [
  {
    category: "Frontend Development",
    direction: "left",
    items: [
      { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FiCode />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Vue", icon: <SiVuedotjs />, color: "#4FC08D" },
      { name: "Angular", icon: <SiAngular />, color: "#DD0031" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    ]
  },
  {
    category: "Backend Development",
    direction: "right",
    items: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
      { name: "Java", icon: <FaJava />, color: "#007396" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
      { name: "Flask", icon: <SiFlask />, color: "#000000" },
      { name: "Express", icon: <SiExpress />, color: "#000000" },
      { name: "Spring", icon: <SiSpring />, color: "#6DB33F" },
      { name: "Spring Boot", icon: <FaJava />, color: "#6DB33F" },
      { name: "Hibernate", icon: <SiHibernate />, color: "#59666C" },
    ]
  },
  {
    category: "Database Systems",
    direction: "left",
    items: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "SQL Databases", icon: <FaDatabase />, color: "#F29111" },
      { name: "PL/SQL", icon: <FaDatabase />, color: "#F00000" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "NoSQL Databases", icon: <FaDatabase />, color: "#2E2E2E" },
    ]
  },
  {
    category: "DevOps & Cloud",
    direction: "right",
    items: [
      { name: "GitHub", icon: <SiGithub />, color: "#181717" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "CI/CD Pipelines", icon: <SiJenkins />, color: "#D24939" },
      { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
      { name: "Cloud Platforms", icon: <FaCloud />, color: "#2C3E50" },
    ]
  },
  {
    category: "UI/UX & Design",
    direction: "left",
    items: [
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Adobe XD", icon: <FiPenTool />, color: "#FF61F6" },
      { name: "Canva", icon: <SiCanva />, color: "#00C4CC" },
      { name: "UI/UX Principles", icon: <FaPaintBrush />, color: "#E83E8C" },
      { name: "Motion Design", icon: <MdAnimation />, color: "#6F42C1" },
    ]
  }
];

const TechStack = () => {
  return (
    <section className="tech-stack-container">
      <style>{`
        .tech-stack-container {
          font-family: 'Inter', system-ui, sans-serif;
          padding: 100px 0;
          background: radial-gradient(circle at center top, #ffffff, #f1f5f9);
          overflow: hidden;
        }

        .tech-header {
          margin-bottom: 70px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 8%;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #2563eb;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 20px;
          background: rgba(37, 99, 235, 0.08);
          padding: 8px 16px;
          border-radius: 30px;
        }

        .tech-badge::before {
          content: "";
          width: 8px;
          height: 8px;
          background: #2563eb;
          border-radius: 50%;
          box-shadow: 0 0 10px #2563eb;
        }

        .tech-title {
          font-size: 52px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 24px;
          letter-spacing: -1px;
        }

        .tech-desc {
          color: #64748b;
          font-size: 18px;
          line-height: 1.6;
          max-width: 700px;
        }

        .tech-sections {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }

        .tech-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .tech-category-name {
          font-size: 24px;
          font-weight: 800;
          color: #1e293b;
          margin-bottom: 30px;
          text-align: center;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          padding: 10px 0;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 24px;
        }

        .marquee-track.left {
          animation: scroll-left 40s linear infinite;
        }

        .marquee-track.right {
          animation: scroll-right 40s linear infinite;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }

        .tech-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          font-size: 16px;
          font-weight: 700;
          color: #334155;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .tech-pill:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          border-color: #cbd5e1;
          background: #ffffff;
        }

        .tech-icon {
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .tech-pill:hover .tech-icon {
          transform: scale(1.15);
        }

        @media (max-width: 768px) {
          .tech-title {
            font-size: 36px;
          }
          .tech-category-name {
            font-size: 20px;
          }
          .tech-pill {
            padding: 12px 20px;
            font-size: 14px;
          }
          .tech-icon {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="tech-header">
        <div className="tech-badge">Our Tech Stack</div>
        <h2 className="tech-title">Technologies We Work With</h2>
        <p className="tech-desc">
          We leverage modern, scalable, and industry-standard technologies to build secure, high-performance, and user-friendly digital solutions across platforms.
        </p>
      </div>

      <div className="tech-sections">
        {techData.map((section) => (
          <div className="tech-row" key={section.category}>
            <div className="tech-category-name">{section.category}</div>

            <div className="marquee-wrapper">
              <div className={`marquee-track ${section.direction}`}>
                {[...section.items, ...section.items, ...section.items, ...section.items].map((tech, i) => (
                  <div className="tech-pill" key={i}>
                    <span className="tech-icon" style={{ color: tech.color }}>
                      {tech.icon}
                    </span>
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};


export default TechStack;