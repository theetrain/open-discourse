import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

import BarGraph from '../BarGraph'

const chat = css`
  background-color: #ffffff;
  padding: 1rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const Chat = ({ meta, children, ...rest }) => (
  <div className={chat}>
    <div>{children}</div>
    <BarGraph data={meta.voteCategories} />
  </div>
)

Chat.propTypes = {
  meta: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Chat
