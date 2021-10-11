
export const state = () => ({
    loginUserId: null
});

export const mutations = {
    setLoginUserId(state, loginUserId) {
        state.loginUserId = loginUserId
        console.log('コンちゃ: ', loginUserId)
    }
}
export const actions = {
    setLoginUserId({ commit }, loginUserId) {
        commit('setLoginUserId', loginUserId)
        console.log('おいっす: ', loginUserId)
    }
}
// https://qiita.com/natsumi_23/items/baff222f856167a3685a 引用しました。
