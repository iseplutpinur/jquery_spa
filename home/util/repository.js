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
    setUser: (name, foto) => {
        return storage.set('repo_user', {
            name: name,
            foto: foto,
        });
    },
    getUser: () => {
        return storage.get('repo_user', {
            name: 'Isep Lutpi Nur',
            foto: 'https://picsum.photos/200/200',
        });
    },
    resetUser: () => {
        return storage.delete('repo_user');
    }
};