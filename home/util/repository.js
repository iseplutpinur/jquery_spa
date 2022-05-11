const storage = {
    delete: (key) => {
        return localStorage.removeItem(key)
    },
    set: (key, data) => {
        return localStorage.setItem(key, JSON.stringify(data));
    },
    get: (key, def = null) => {
        let local = localStorage.getItem(key);
        if (local) return JSON.parse(local);
        else return def;
    },
};

const repo = {
    setUser: (data) => {
        return storage.set('repo_user', data);
    },
    getUser: () => {
        return storage.get('repo_user');
    },
    resetUser: () => {
        return storage.delete('repo_user');
    }
};