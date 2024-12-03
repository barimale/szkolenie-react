const useLocalStorage = () => {
    const save = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const load = (key) => {
        const result = localStorage.getItem(key);
        return JSON.parse(result);
    }

    return [save, load];
}

export default useLocalStorage;