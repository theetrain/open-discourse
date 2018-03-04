import React from 'react'
import ReactDOM from 'react-dom'

import ChatWrapper from './components/ChatWrapper'
import Chat from './components/Chat'

/**
 * Vote options:
 * 1. Fully disagree
 * 2. Somewhat disagree
 * 3. Somewhat agree
 * 4. Fully agree
 */

const chats = [
  {
    body: `Nothing is free.`,
    voteCategories: [
      {
        name: `Fully Disagree`,
        votes: 2
      },
      {
        name: `Somewhat Disagree`,
        votes: 3
      },
      {
        name: `Somewhat Agree`,
        votes: 5
      },
      {
        name: `Fully Agree`,
        votes: 4
      }
    ]
  },
  {
    body: `Do you agree that everyone should have access to fast, efficient, and affordable public transportation?`,
    voteCategories: [
      {
        name: `Fully Disagree`,
        votes: 5
      },
      {
        name: `Somewhat Disagree`,
        votes: 15
      },
      {
        name: `Somewhat Agree`,
        votes: 109
      },
      {
        name: `Fully Agree`,
        votes: 1014
      }
    ]
  }
]

const App = props => (
  <div>
    <ChatWrapper>
      {chats.map((chat, index) => (
        <Chat key={index} meta={chats[index]}>
          {chat.body}
        </Chat>
      ))}
    </ChatWrapper>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
