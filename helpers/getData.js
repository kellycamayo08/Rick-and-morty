export const getData = async ( url ) => {
    const res = await fetch ( url )
    // console.log(res)
    const data = await res.json()

    return data.results
    
}