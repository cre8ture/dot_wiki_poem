


export async function fetchData(val) {
    const trimVal = val.trim().toLowerCase();
    if (trimVal.length > 0) {
        const api = `https://en.wikipedia.org/w/api.php?action=quer             y&list=search&prop=info&inprop=url&utf8=&format=json&origin             =*&srlimit=20&srsearch=${trimVal}`;
        const response = await fetch(api);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        return await response.json();
    }
}
