import authReducer from '../../reducers/auth'

test('should set login user id', () => {
    const action = {
        type: 'LOGIN',
        uid: 80735
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should unset login user id after logging out', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 'anything'}, action)
    expect(state).toEqual({})
})