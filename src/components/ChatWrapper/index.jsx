import React from 'react'
import PropTypes from 'prop-types'

const ChatWrapper = ({ children, ...rest }) => (
  <div className="chatWrapper">{children}</div>
)

ChatWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ChatWrapper
