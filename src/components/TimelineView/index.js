import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderProjects = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimeLineCard key={each.id} CourseList={each} />
    }
    return <ProjectTimelineCard key={each.id} ProjectList={each} />
  }

  return (
    <div>
      <h1 className="heading">
        MY JOURNEY OF <br /> CCBP 4.0
      </h1>
      <Chrono
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{primary: 'blue', secondary: '#ffffff'}}
      >
        {timelineItemsList.map(each => renderProjects(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
