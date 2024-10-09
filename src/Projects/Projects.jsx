import useFetchProjects from "../fetchProjects";
import Project from "../Project/Project";
const Projects = () => {
  const [loading, projects] = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <h4>Loading...</h4>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
