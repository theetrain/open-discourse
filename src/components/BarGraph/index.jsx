import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const barGraph = css`
  margin-top: 1rem;
`

const graphPoint = css`
  display: inline-block;
  height: 10px;
`

const graphLabel = css`
  margin-right: 0.5rem;
`

const BarGraph = ({ data, ...rest }) => {
  // todo make bar graph
  var total = data.map(el => el.votes).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
  console.log('Total is', total)

  var graphClasses = index => {
    return `${graphPoint} colour${index}`
  }

  var labelClasses = index => {
    return `${graphLabel} colour${index}`
  }

  return (
    <div className={barGraph}>
      <div>
        {/* graph labels */}
        {data.map((voteCategory, index) => (
          <span className={labelClasses(index + 1)} key={`graphLabel_${index}`}>
            {Math.round(voteCategory.votes / total * 1000) / 10 +
              '% ' +
              voteCategory.name}
          </span>
        ))}
      </div>
      <div>
        {/* graph */}
        {data.map((voteCategory, index) => (
          <div
            key={`graphPoint_${index}`}
            className={graphClasses(index + 1)}
            style={{
              width: `${voteCategory.votes / total * 100}%`
            }}
          />
        ))}
      </div>
    </div>
  )
}

BarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

export default BarGraph
