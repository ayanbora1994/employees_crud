// simulates network delay

const fake_delay = (state) => {
    state.commit('SET_LOADING', true)
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve()
            state.commit('SET_LOADING', false)
        }, 2000)        
    })
}

export default fake_delay