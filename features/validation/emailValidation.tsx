
const isValidEmailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function isValidEmail(text: string): boolean {
    console.log("match:");
    console.log(text.match(isValidEmailRegEx));
    return text.match(isValidEmailRegEx)?.[0] != null
}

export default isValidEmail