
//import Layout from "@/components/template/Layout";
import Projectscard from "@/components/organism/Projectscard";
import projects from '@/data/projects/projects'

const Projects = () => {

  return (
      
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-2 m-3">
        {projects.map((project) => (
          <Projectscard key={project.id} project={project} />
        ))}
      </div>
     
   
  );
};

export default Projects;
