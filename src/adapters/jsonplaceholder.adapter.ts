export const useFetch = async (url: string) => {
    try {
        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });
        return await res.json();
    } catch (err) {
        console.warn(`Error found at ${url}: `, err);
    }
};
