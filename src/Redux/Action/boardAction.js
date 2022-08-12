import useFetch from "../../Module/fetch"

export const BOARD_TITLE_TEXT = "BOARD_TITLE_TEXT"
export const BOARD_ADDRESS_TEXT = "BOARD_ADDRESS_TEXT"
export const BOARD_RECRUIT_TEXT = "BOARD_RECRUIT_TEXT"
export const BOARD_CONTENT_TEXT = "BOARD_CONTENT_TEXT"
export const BOARD_UPLOAD = "BOARD_UPLOAD"
export const BOARD_GET = "BOARD_GET"

const boardGet = () => async dispatch => {
    const result = await useFetch("http://3.35.16.191:3000/board")
    console.log(result)
    return dispatch({
        type: BOARD_GET,
        result: result.data
    })
}

const boardTitleText = (text) => {
    return{
        type: BOARD_TITLE_TEXT,
        text: text,
    }
}
const boardAddressText = (text) => {
    return{
        type: BOARD_ADDRESS_TEXT,
        text: text,
    }
}
const boardRecruitText = (text) => {
    return{
        type: BOARD_RECRUIT_TEXT,
        text: text,
    }
}
const boardContentText = (text) => {
    return{
        type: BOARD_CONTENT_TEXT,
        text: text,
    }
}
const boardUpload = (userId) => {
    return{
        type: BOARD_UPLOAD,
        userId: userId
    }
}

export { boardTitleText, boardAddressText, boardContentText, boardRecruitText, boardUpload, boardGet}