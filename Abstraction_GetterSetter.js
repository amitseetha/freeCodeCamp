/*
Abstraction using Getter and Setter Functions

Use classkeyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getterand setterin the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32)and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

Note

When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer.
*/



function makeClass() {
"use strict";
class Thermostat {constructor(temp_Fahrenheit){
this._temp=temp_Fahrenheit;
}
get checkTemp(){
return (this._temp-32)*5/9;
}
set setTemp(tempCelsius){
this._temp=tempCelsius*9/5+32;
}
}
return Thermostat;
}
