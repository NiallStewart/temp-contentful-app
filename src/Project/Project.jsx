const Project = ({ project }) => {
  const { title, url, img } = project;
  return (
    <a href={url} className="project">
      <h5>{title}</h5>
      <img className="img" src={img} alt={title} />
    </a>
  );
};
export default Project;
