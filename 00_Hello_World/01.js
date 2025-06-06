const input = require("../input.js")

async function main() {
    const name = await input("Enter your Name: ")
    console.log(`Hello ${name} Ji`);
    
}

main()