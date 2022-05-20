import * as api from '../api'

export const getPosts = () => async (dispatch: any) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error: any) {
        console.log("🚀 ~ file: posts.ts ~ line 8 ~ getPosts ~ error", error.message)

    }
}

export const createPosts = (post: any) => async (dispatch: any) => {
    // try {
    return api.createPosts(post).then(({ data }) => {
        dispatch({ type: 'CREATE', payload: data })
    })
    // } catch (error: any) {
    //     console.log("🚀 ~ file: posts.ts ~ line 8 ~ getPosts ~ error", error.message)
    // }
}