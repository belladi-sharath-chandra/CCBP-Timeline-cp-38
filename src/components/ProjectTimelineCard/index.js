import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {ProjectList} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = ProjectList

  return (
    <div className="card">
      <img src={imageUrl} className="image" alt="project" />
      <div className="row">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="row1">
          <AiFillCalendar className="time-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="btn">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
