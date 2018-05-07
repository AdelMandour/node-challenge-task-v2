
var operation = process.argv[2];
var fs = require('fs');
try {
    data = fs.readFileSync('mynewfile1.txt')
    try {
        dictionary = JSON.parse(data)
        doOperation();
    } catch (error) {
        fs.writeFileSync('mynewfile1.txt', "{}")
        data = fs.readFileSync('mynewfile1.txt')
        dictionary = JSON.parse(data)
        doOperation();
    }
} catch (error) {
    fs.writeFileSync('mynewfile1.txt', "{}")
    data = fs.readFileSync('mynewfile1.txt')
    dictionary = JSON.parse(data)
    doOperation();
}
function doOperation() {
    switch (operation) {
        case "add":
            if (process.argv[3] && process.argv[4]) {
                value = []
                if (dictionary[process.argv[3]]) {
                    value = dictionary[process.argv[3]];
                }
                value.push(process.argv[4])
                dictionary[process.argv[3]] = value;
                fs.writeFileSync('mynewfile1.txt', JSON.stringify(dictionary))
                console.log("added!")
            } else if (process.argv[3]) {
                console.log("please enter value to add");
            } else {
                console.log("please enter key to add");
            }
            break;
        case "list":
            console.log(dictionary);
            break;
        case "get":
            if (process.argv[3]) {
                if (dictionary[process.argv[3]]) {
                    console.log(process.argv[3] + " => " + dictionary[process.argv[3]])
                } else {
                    console.log("your key is not found");
                }
            } else {
                console.log("please enter the key to get");
            }
            break;
        case "remove":
            if (process.argv[3]) {
                if (dictionary[process.argv[3]]) {
                    delete dictionary[process.argv[3]];
                    fs.writeFileSync('mynewfile1.txt', JSON.stringify(dictionary))
                    console.log("deleted!")
                } else {
                    console.log("your key is not found");
                }
            } else {
                console.log("please enter the key to remove");
            }
            break;
        case "clear":
            fs.writeFileSync('mynewfile1.txt', "{}")
            break;
        default:
            console.log("please enter your choice from:\nadd key value \nlist \nremove key \nget key \nclear");
            break;
    }
}



