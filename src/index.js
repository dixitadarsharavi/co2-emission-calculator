
//------------------------------------------------------------------------------------------------------------------------------
/*
 *   Author: Adarsha Dixit
 *   Programming Language: JavaScript
*/
//------------------------------------------------------------------------------------------------------------------------------

//--------------------------------- Functions for checking if user entered valid arguments ---------------------------------------

// Function to check valid means of transport
function validMeansOfTransport(transportationMethod)
{
    var co2ePerPassengerPerKm = 0;
    switch(transportationMethod)
    {
        
        // Small cars options
        case "small-diesel-car":
            co2ePerPassengerPerKm = 142;
            break;
        case "small-petrol-car":
            co2ePerPassengerPerKm = 154;
            break;
        case "small-plugin-hybrid-car":
            co2ePerPassengerPerKm = 73;
            break;
        case "small-electric-car":
            co2ePerPassengerPerKm = 50;
            break;

        // Medium car options    
        case "medium-diesel-car":
            co2ePerPassengerPerKm = 171;
            break;
        case "medium-petrol-car":
            co2ePerPassengerPerKm = 192;
            break;
        case "medium-plugin-hybrid-car":
            co2ePerPassengerPerKm = 110;
            break;
        case "medium-electric-car":
            co2ePerPassengerPerKm = 58;
            break;

        // Large car options
        case "large-diesel-car":
            co2ePerPassengerPerKm = 209;
            break;
        case "large-petrol-car":
            co2ePerPassengerPerKm = 282;
            break;
        case "large-plugin-hybrid-car":
            co2ePerPassengerPerKm = 126;
            break;
        case "large-electric-car":
            co2ePerPassengerPerKm = 73;
            break;

        // Other means
        case "bus":
            co2ePerPassengerPerKm = 27;
            break;
        case "train":
            co2ePerPassengerPerKm = 6;
            break;
        
        // Default / error condition   
        default:
            co2ePerPassengerPerKm = 0;

    }
    return co2ePerPassengerPerKm;
}

// Function to check valid distance and unit-of-distance
function validDistance(distanceStr,unitOfDistance)
{
    var distance = +distanceStr;
    if(isNaN(distance) || distance <= 0 )
    {   
        distance = 0;   
    }
    else
    {
        switch(unitOfDistance)
        {
            // converts meter to km
            case "m":
                distance = distance / 1000;
                break;
            
            case "km":
                break;
            
            // For any other string return 0   
            default:
                distance = 0;
                
        }
    } 
    return distance;
}

// Function to check valid output type
function validOutputType(outputType)
{
    var valid = "Not a valid output type";
    if(outputType == "" || outputType == "g" || outputType == "kg")
    {
        valid = outputType;
    }
    return valid;
}

//--------------------------------- Function to calculate-co2 emitted per journey in grams ---------------------------------------

function calculateCo2(co2ePerPassengerPerKm,distance)
{          
    var result = (distance * co2ePerPassengerPerKm);
    return result;
}

//--------------------------------- Export functions for unit tesing purposes ----------------------------------------------------
module.exports = {
    validMeansOfTransport,
    validDistance,
    validOutputType,
    calculateCo2 
};
