import user from './user'
import freeze from 'deep-freeze-node'
import chai from 'chai'

import { SET_USER, LOGOUT_USER } from '../config/constants'

describe('user reducer: ', () => {
  const mockUser = {
    username: 'r2d2',
    id: 123456
  }

  const currentState = freeze({ oldState: 'oldState' })

  const action = { type: 'UNCAUGHT_ACTION' }

  it('should return the original state for any action not caught in its switch block', () => {
    const newState = user(currentState, action)

    newState.should.equal(currentState)
  })

  describe(SET_USER, () => {
    const currentState = null

    const action = { type: SET_USER, user: mockUser }

    const newState = user(currentState, action)

    it('sets the new user', () => {
      newState.should.deep.equal(mockUser)
    })
  })

  describe(LOGOUT_USER, () => {
    const currentState = freeze(mockUser)

    const action = { type: LOGOUT_USER }

    const newState = user(currentState, action)

    it('sets the user to null when logging out', () => {
      chai.should().not.exist(newState)
    })
  })
})