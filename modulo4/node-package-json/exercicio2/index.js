// 2-
const math = () => {
    switch (process.argv[2]) {
        case "add":
            console.log("Resposta:", Number(process.argv[3]) + Number(process.argv[4]));
            break;
        case "sub":
            console.log("Resposta:", Number(process.argv[3]) - Number(process.argv[4]));
            break;
        case "mult":
            console.log("Resposta:", Number(process.argv[3]) * Number(process.argv[4]));
            break;
        case "div":
            console.log("Resposta:", Number(process.argv[3])/Number(process.argv[4]));
            break;
    }
}

math()