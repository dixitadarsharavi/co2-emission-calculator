#!/usr/bin/env node


//------------------------------------------------------------------------------------------------------------------------------
/*
 *   Author: Adarsha Dixit
 *   Programming Language: JavaScript
 * 
 *   A Node.js command line app that calculates amount of CO2 emitted for a journey
*/
//------------------------------------------------------------------------------------------------------------------------------


// Pull the required functions from index.js
const index = require('./index');

// Parse the command-line to get the required and optional elements
const argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 -t <command> -d <command> -u <command> -o <command>')
    .option("t",{alias: "transportation-method", describe:"Refer README.md file for valid values.",type:"string"})
    .option("d",{alias: "distance", describe:"Enter distance travelled",type:"string"})
    .option("u",{alias: "unit-of-distance", describe:"km or m",type:"string",default:"km"})
    .option("o",{alias: "output", describe:"g or kg",type:"string",default:""})
    .demandOption(['t','d'])
    .example('node $0 --transportation-method train --distance 14500')
    .argv;

// Check if the inputs from the use is valid.
const co2ePerPassengerPerKm = index.validMeansOfTransport(argv.t);
const distance = index.validDistance(argv.d,argv.u);
const outputType = index.validOutputType(argv.o);

// Calculate the co2 emitted for the particular journey
const resultOfCo2 = index.calculateCo2(co2ePerPassengerPerKm,distance);

// Exit terminal if entered arguments is inavlid
if(co2ePerPassengerPerKm == 0 || distance == 0 || outputType == "Not a valid output type")
{
    console.log("Please enter valid arguments");
}

// Exit terminal by printing the co2-emitted in terms of grams or kilograms
else
{
    if(argv.u == "m" && outputType == "")
    {
        console.log("Your trip caused " + Math.round(resultOfCo2 * 10) /10 + "g of CO2-equivalent.");
    }
    else if(outputType == "g")
    {
        console.log("Your trip caused " + Math.round(resultOfCo2 * 10) /10 + "g of CO2-equivalent.");
    }
    else
    {
        console.log("Your trip caused " + Math.round((resultOfCo2 / 1000)*10) / 10 + "kg of CO2-equivalent.");
    }
}
