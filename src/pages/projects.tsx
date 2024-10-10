
//import Layout from "@/components/template/Layout";
import Projectscard from "@/components/organism/Projectscard";
import projects from '@/data/projects/projects'

const Projects = () => {

  return (
      
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-3 gap-2 m-3">
        {projects.map((project) => (
          <Projectscard key={project.id} project={project} />
        ))}
      </div>
     
   
  );
};

export default Projects;
