/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    let match = input.match(/[A-Za-z]/);
    let toEval = input.slice(0, input.indexOf(match));
    if (toEval) {
      if (toEval.match(/\//g)) {
        if (toEval.match(/\//g).length > 1) {
          return "invalid number";
        }
      } else if (toEval.match(/\./g)) {
        if (toEval.match(/\./g).length > 1) {
          return "invalid number";
        }
      }
      try {
        let result = eval(toEval);
        return result;
      } catch (err) {
        return "invalid number";
      }
    } else {
      return 1;
    }
  };

  this.getUnit = function(input) {
    let match = input.match(/[A-Za-z]/);
    let result = input.slice(input.indexOf(match)).toLowerCase();
    let validUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
    if (validUnits.includes(result)) {
      return result;
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
        break;
      case "l":
        return "gal";
        break;
      case "lbs":
        return "kg";
        break;
      case "kg":
        return "lbs";
        break;
      case "mi":
        return "km";
        break;
      case "km":
        return "mi";
        break;
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit.toLowerCase()) {
      case "gal":
        return "gallons";
        break;
      case "l":
        return "liters";
        break;
      case "lbs":
        return "pounds";
        break;
      case "kg":
        return "kilograms";
        break;
      case "mi":
        return "miles";
        break;
      case "km":
        return "kilometers";
        break;
    }
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    switch (initUnit) {
      case "gal":
        return parseFloat((initNum * galToL).toFixed(5));
        break;
      case "l":
        return parseFloat((initNum / galToL).toFixed(5));
        break;
      case "lbs":
        return parseFloat((initNum * lbsToKg).toFixed(5));
        break;
      case "kg":
        return parseFloat((initNum / lbsToKg).toFixed(5));
        break;
      case "mi":
        return parseFloat((initNum * miToKm).toFixed(5));
        break;
      case "km":
        return parseFloat((initNum / miToKm).toFixed(5));
        break;
    }
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(initUnit)}`;
  };
}

module.exports = ConvertHandler;
