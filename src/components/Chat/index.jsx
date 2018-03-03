import React from 'react'
import PropTypes from 'prop-types'

import BarGraph from '../BarGraph'

const Chat = ({ chats, children, ...rest }) => (
  <div className="chat">
    <div>{children}</div>
    <BarGraph data={chats[0].voteCategories} />
  </div>
)

Chat.propTypes = {
  chats: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}

export default Chat
