interface Patterns {
    [key: string]: RegExp
}

interface Names {
    [key: string]: string
}

export const patterns: Patterns = {
    name: /^[a-zA-Z]+$/,
    email: /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    password: /\w{6,}/,
};

export const patternNames: Names = {
    name: 'name',
    email: 'email',
    password: 'password'
};
