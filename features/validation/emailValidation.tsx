
const isValidEmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function isValidEmail(text: string): boolean {
    return text.match(isValidEmailRegEx)?.[0] != null
}

export default isValidEmail