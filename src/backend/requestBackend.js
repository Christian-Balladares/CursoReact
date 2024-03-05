export const requestAPI = async (metodo, url, body= null) => {
    const responseJson = await fetch(
        url,
        {
            method: metodo,
            body: body,
            headers: {
                // 'Content-Type': 'application/json'
            }
        }
    )

    const reponse = await responseJson.json();

    return reponse;

}