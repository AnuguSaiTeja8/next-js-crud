import axios from "axios"

const baseURL= 'http://localhost:3000'

// export  async function getTopics(){
//    let data = await fetch(`http://localhost:3000/api/topic`)
//    let conv = await data.json()
//    console.log(conv);
//    return conv
// }

export async function getTopics() {
    try {
        let data = await fetch(`http://localhost:3000/api/topic`, {
            cache: 'no-store'
        })
        let conv = await data.json()
      
        return conv
    }
    catch (err) {
        console.log('err', err);
    }


}

export async function getSingleTopics(id) {
    console.log(id);
    try {
        let data = await fetch(`http://localhost:3000/api/topic/${id}`, {
            cache:'reload',
        })
        let conv = await data.json()
      
        return conv
    }
    catch (err) {
        console.log('err', err);
    }


}

export async function updateTopic(id,values) {
    console.log('id',id);
    console.log('values',values);
    try {
    let {data} = await axios.put(`http://localhost:3000/api/topic/${id}`,  values)

       return data
    }
    catch (err) {
        console.log('err', err);
    }
}

export async function createTopic(values) {
 
    console.log('values',values);
    try {
    let {data} = await axios.post(`http://localhost:3000/api/topic`,  values)

       return data
    }
    catch (err) {
        console.log('err', err);
    }
}

export async function deleteTopic(id) {
 
    console.log('id',id);
    try {
    let {data} = await axios.delete(`http://localhost:3000/api/topic?id=${id}`)

       return data
    }
    catch (err) {
        console.log('err', err);
    }
}