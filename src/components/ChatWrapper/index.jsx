import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

const wrapper = css`
  background-color: #ddd;
  margin: 1rem;
  padding: 2rem;
`

const ChatWrapper = ({ children, ...rest }) => (
  <div className={wrapper}>{children}</div>
)

ChatWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ChatWrapper
