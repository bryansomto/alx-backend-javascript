export default function getResponseFromAPI() {
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('true'), reject('false');
        }, 300);
    });
    return newPromise;
}
