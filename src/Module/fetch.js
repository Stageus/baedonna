import { setCookie, getCookie } from "./cookie"

const basic = "http://3.35.16.191:3000"

const loginPost = (id, pw) => {

    fetch(`${basic}/account/login`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            "id": id,
            "pw": pw,
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(result.message)
            setCookie("access-token", result.token)
        }
            console.log(result.message)
    })
}

async function profileGet(){

    const data = await fetch(`${basic}/account?id=${getCookie("id")}`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "token": getCookie("access-token")
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(result.message)
            console.log(result.data)
            return result.data
        }
        console.log(result.message)
    })
    return data
}

async function duplicateIdPost(id){

    if(id === ""){
        return false
    }
    const bool = await fetch(`${basic}/account/duplicate/id`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json" // 내가 요청에 담아서 보내는 데이터들의 형태 & 자료형을 설정
        },
        "body": JSON.stringify({ // api에서 요구하는 값을 넣어줌
            "id": id,
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(result.message)
            return false
        }
        console.log(result.message)
        return true
    })

    return bool
}

const joinPost = (id, pw, name, phonenum) => {
    
    fetch(`${basic}/account`, {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json" // 내가 요청에 담아서 보내는 데이터들의 형태 & 자료형을 설정
        },
        "body": JSON.stringify({ // api에서 요구하는 값을 넣어줌
            "id": id,
            "pw": pw,
            "name": name,
            "phonenum": phonenum,
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result.message)
    })
}

async function addressGet(){
    const data = await fetch(`${basic}/place?id=${getCookie("id")}`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "token": getCookie("access-token")
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(result.message)
            console.log(result.data)
            return result.data
        }
        console.log(result.message)
    })
    return data
}
const addressPut = (address) => {
    fetch(`${basic}/place`, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json",
            "token": getCookie("access-token")
        },
        "body": JSON.stringify({
            "id": getCookie("id"),
            "place": address,
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(result.message)
            return true
        }
        console.log(result.message)
        return false
    })
}



async function boardGet(){
    const data = await fetch(`${basic}/board?offset=0`, {
        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
            "token": getCookie("access-token")
        }
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            console.log(result.message)
            console.log(result.data)
            return result.data
        }
        console.log(result.message)
    })
    return data
}

const boardPost = (title, contents, address, joinCount) => {
    fetch("http://3.35.16.191:3000/board", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "token": getCookie("access-token")
        },
        "body": JSON.stringify({
            "title": title,
            "contents": contents,
            "place": address,
            "id": getCookie("id"),
            "is_end": 0,
            "join_count": joinCount,
        })
    })
    .then(response => response.json())
    .then(result => {
        if(result.success){
            console.log(result.message)
            return
        }
        console.log(result.message)
    })
}

async function useFetch(url){
    const data = await fetch(url)
    .then(response => response.json())
    .then(result => {
        return result
    })

    return data
}

export { loginPost, profileGet, duplicateIdPost, joinPost, addressPut, addressGet, boardGet, boardPost }

export default useFetch