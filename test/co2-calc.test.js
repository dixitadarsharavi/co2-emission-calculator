
//------------------------------------------------------------------------------------------------------------------------------
/*
 *   Author: Adarsha Dixit
 *   Testing Framework : Mocha
 * 
 *   Unit test cases
*/
//------------------------------------------------------------------------------------------------------------------------------

// Assert-module: to make use of assert functions.
const assert = require('assert');

// Pull the required functions from index.js
const index = require('../src/index');


describe('CO2 emission calculator:', function() {
    
    describe('Validation for the input arguments passed', function(){

        describe('Exit the process with warning message if invalid argument is passed for transportation-method',function(){
            //instance 1
            it('It should fail if incorrect words used', function() {
                assert.strictEqual(index.validMeansOfTransport("traine"), 0);
            });
            //instance 2
            it('It should fail if numbers are used', function() {
                assert.strictEqual(index.validMeansOfTransport("123"), 0);
            });
            //instance 2
            it('It should fail if special characters are used', function() {
                assert.strictEqual(index.validMeansOfTransport("!!train"), 0);
            });

        });
        describe('Exit the process with warning message if invalid argument is passed for distance or unit-of-distance',function() {
            //instance 1
            it('If wrong distance is passed', function() {
                assert.strictEqual(index.validDistance("-3","km"),0);
            });
            //instance 2
            it('If wrong unit of measurement is passed', function() {
                assert.strictEqual(index.validDistance("3","g"),0);
            });
            //instance 3
            it('If wrong distance and unit-of-measurement is passed', function() {
                assert.strictEqual(index.validDistance("as","12"),0);
            });
        });
        describe('Exit the process with warning message if invalid argument is passed for invalid output argument',function(){
            //instance 1
            it('If wrong output type is passed', function() {
                assert.strictEqual(index.validOutputType("123"),"Not a valid output type");
            });
            //instance 2
            it('If wrong output type is passed', function() {
                assert.strictEqual(index.validOutputType("gkg"),"Not a valid output type");
            });
        });
        
    });

    describe('It should consider default value for unit-of-measurement as \'km\' if user doesn\'t pass anything',function(){
        //instance 1
        it('If unit-of-distance is empty', function() {
            assert.strictEqual(index.validDistance(15,'km'),15);
        });
        //instance 1
        it('If unit-of-distance is meters', function() {
            assert.strictEqual(index.validDistance(15,'m'),0.015);
        });
    });
    
    describe('Should return expected co2-emitted if valid inputs are passed',function(){
        
        describe('For short means of transport',function(){
            
            it('Correctly return value of co2-emitted per journey in grams ', function() {
                // small-diesel-car 
                const expected = 142 * 15;
                assert.strictEqual(index.calculateCo2(142,15),expected);
            });

        });

        describe('For medium means of transport',function(){
           
            it('Correctly return value of co2-emitted per journey in grams ', function() {
                // medium-diesel-car
                const expected = 171 * 15;
                assert.strictEqual(index.calculateCo2(171,15),expected);
            });

        });
        
        describe('For large means of transport',function(){
            
            it('Correctly return value of co2-emitted per journey in grams ', function() {
                // large-diesel-car
                const expected = 209 * 15;
                assert.strictEqual(index.calculateCo2(209,15),expected);
            });

        });

        describe('For travelling in train',function(){
            
            it('Correctly return value of co2-emitted per journey in grams ', function() {
                // train
                const expected = 6 * 15;
                assert.strictEqual(index.calculateCo2(6,15),expected);
            });

        });

        describe('For travelling in bus',function(){
            
            it('Correctly return value of co2-emitted per journey in grams ', function() {
                //  bus
                const expected = 27 * 15;
                assert.strictEqual(index.calculateCo2(27,15),expected);
            });

        });

        describe('Display output in kg(kilograms)',function(){
            
            it('Correctly return value of co2-emitted per journey in kg', function() {
                //  large-petrol-car
                const expected = 507.7;
                assert.strictEqual(Math.round((282 * 1800.5/1000)*10)/10,expected);
            });

        });

        describe('Display output in g(grams)',function(){
            
            it('Correctly return value of co2-emitted per journey in kg', function() {
                //  train
                const expected = 87;
                assert.strictEqual(Math.round(6 * 14.5*10)/10,expected);
            });

        });
    });

});