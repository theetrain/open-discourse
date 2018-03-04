import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const barGraph = css`
  margin-top: 1rem;
`

const graphLine = css`
  display: inline-block;
  height: 20px;
  margin-top: 1rem;
`

const graphLabel = css`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const BarGraph = ({ data, ...rest }) => {
  // todo make bar graph
  const total = data.map(el => el.votes).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
  console.log('Total is', total)

  const graphClasses = index => {
    return `${graphLine} colour${index}`
  }

  const labelClasses = index => {
    return `${graphLabel} colour${index}`
  }

  const vote = i => {
    console.log('voted', data[i])
    data[i].votes++
  }

  return (
    <div className={barGraph}>
      <div>
        {/* graph labels */}
        {data.map((voteCategory, index) => (
          <button
            type="button"
            className={labelClasses(index + 1)}
            key={`graphLabel_${index}`}
            data-index={index}
            onClick={() => vote(index)}
          >
            {Math.round(voteCategory.votes / total * 1000) / 10 +
              '% ' +
              voteCategory.name}
          </button>
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
