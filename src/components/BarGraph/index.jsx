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
class BarGraph extends React.Component {
  graphClasses (index) {
    return `${graphLine} colour${index}`
  }

  labelClasses (index) {
    return `${graphLabel} colour${index}`
  }

  vote (index) {
    console.log('voted', this.props.data[index])
    this.props.data[index].votes++
  }

  getTotal () {
    return this.props.data
      .map(el => el.votes)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      }, 0)
  }

  render () {
    return (
      <div className={barGraph}>
        <div>
          {/* graph labels */}
          {this.props.data.map((voteCategory, index) => (
            <button
              type="button"
              className={this.labelClasses(index + 1)}
              key={`graphLabel_${index}`}
              data-index={index}
              onClick={() => this.vote(index)}
            >
              {Math.round(voteCategory.votes / this.getTotal() * 1000) / 10 +
                '% ' +
                voteCategory.name}
            </button>
          ))}
        </div>
        <div>
          {/* graph */}
          {this.props.data.map((voteCategory, index) => (
            <div
              key={`graphPoint_${index}`}
              className={this.graphClasses(index + 1)}
              style={{
                width: `${voteCategory.votes / this.getTotal() * 100}%`
              }}
            />
          ))}
        </div>
      </div>
    )
  }
}

BarGraph.propTypes = {
  data: PropTypes.array.isRequired
}

export default BarGraph
