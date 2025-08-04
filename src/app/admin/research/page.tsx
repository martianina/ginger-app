'use client';


import projectsData from 'data/projectsData';
import ProjectCard from 'components/card/ProjectCard';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            href={project.href}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        
      </div>
    </div>
  );
};

export default Dashboard;
