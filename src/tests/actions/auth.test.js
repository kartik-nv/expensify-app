import { login, logout } from '../../actions/auth'

test('should set login action object correctly', () => {
    const action = login(547884)
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 547884
    })
})

test('should set logout action onject correctly', () => {
    const action = logout()
    expect(action).toEqual({
        type:'LOGOUT'
    })
})