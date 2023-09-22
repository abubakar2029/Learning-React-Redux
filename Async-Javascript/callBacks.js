/* 
* Browser function will be starting point 
* Each setTimout will call next
* Process is terminated by clearInterval
*/
const input_found = true;
const openBrowser = () => {
    console.log("Browser is opening");
    setTimeout(() => {
        console.log("Searching Input");
        let intervalId = setInterval(() => {
            if (input_found) {
                setTimeout(() => {
                    console.log("Display UI");
                }, 1000)
            } else {
                console.log("Input not Found");
            }
            clearInterval(intervalId)
        }, 1000)
    }, 2000)
}
openBrowser()