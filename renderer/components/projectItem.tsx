const ProjectItem = () => {
  return (
    <li className="project projects__item">
      <div className="project__preview"></div>
      <div className="project__description">
        <h3 className="project__name">0604</h3>
        <div className="project__properties">
          <span className="project__weight">135.3k</span> |{" "}
          <span className="project__duration">00:06</span>
        </div>
      </div>
    </li>
  );
};
export default ProjectItem;
