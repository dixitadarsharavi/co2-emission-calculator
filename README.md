# CO2 emission calculator:

A command line tool that returns the amount of CO2-equivalent that will be caused when traveling a given distance using a given transportation method.

## Prerequisites:

- Please have latest version of 'nodejs' and 'npm' installed.
- Minimum version of nodejs (v10.23.0)
- Minimum version of npm (6.14.8)

## Setting up the environment:

- Extract the zip folder.
- Please install JavaScript testing framework - 'Mocha' and 'yargs' - a command-line parsing libraray for nodejs, using the below command
 
``` sh      
 npm install --save-dev mocha yargs
```
Now the project is set-up with testing environment as well as dependecies required.

- Navigate to the /src folder.


Compile and run the interface using below command,

``` sh
node co2-calculator.js -t <command> -d <command> -u <command> -o <command>
```
Example:
``` sh
$ node co2-calculator.js --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car
Your trip caused 2.6kg of CO2-equivalent.
```
Here,

- -t (or) --transportation-method tells the CLI what kind of transportation is used. It is a mandatory field to be provided by user.
- -d (or) --distance provides the distance travelled using the above mentioned trasportation. It is a mandatory field to be provided by user.
- -u (or) --unit-of-distance provides to options(km denotes kilometer and m denotes meter). It is an optional command. However the default value is 'km'.
- -o (or) --output is used to obtain the result either in g(stands for grams) or in kg(stands for kilograms).

Unit Test: In order to carry out unit tests, execute the below command

``` sh
npm test
```

### Valid commands for user inputs:

1) transportation-method: small-diesel-car,small-petrol-car,small-plugin-hybrid-car,small-electric-car,
                          medium-diesel-car,medium-petrol-car,medium-plugin-hybrid-car,medium-electric-car,
                          large-diesel-car,large-petrol-car,large-plugin-hybrid-car,large-electric-car,
                          bus,train
2) distance: Enter a positive number(greater than or equal to 0)
3) unit-of-distance: 'km' or 'm' (Default: km)
4) output: 'kg' or 'g'