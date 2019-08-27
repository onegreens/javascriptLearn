function createXHR() {
    if (typeof XMLHtppRequest != "undefined") {

    } else {
        throw new Error("No XHR object available");
    }
}