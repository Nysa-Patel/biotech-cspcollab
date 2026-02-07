const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Is the substance in solid or liquid form? ", (state) => {
    rl.question("What type of substance is in the container?", (substanceType) => {
        console.log("State: ", state);
        console.log("Type: ", substanceType);

        startProgram(state, substanceType);
        rl.close();
    });
});

const tempmodels = {
    vaccine: { min: 2, max:8},
    blood_sample: {min: 4, max: 8},
    blood_transfusion : {min: 1, max: 10},
    antibiotics_or_medication : {min: 15, max: 25}
}
function startProgram(state, substanceType) {
    const model = tempmodels[substanceType.toLowerCase()];

    console.log('\nModel selected: ', model)

    setInterval(() => {
        let temp = getTempFromSD();
        console.log('Current temp: ', temp);
    
        checkTemp(temp, model);
        }, 30000);

}
//pull temperature data from the SD card
function getTempFromSD() {
    return Math.floor(Math.random() * 15);
}

//check temp
function checkTemp(temp, model) {
    if (temp < model.min){
        heating();
    } else if (temp > model.max) {
        cooling();
    } else {
        console.log('Stable temp: ', temp);
    }
}
function heating() {
    console.log('Activating heating system');
}
function cooling() {
    console.log('Activating cooling system');
}
