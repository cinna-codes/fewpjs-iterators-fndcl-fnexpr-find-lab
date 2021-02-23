superbowlWin = (record) => {
    let result = record.find( record => record.result === "W" ) // `record.find` will just return the matching record in question. you cannot change this. do not spend 50 minutes trying to fight this fact.
    return !!result ? result.year : undefined // `!!result` refers to the boolean value of `result`, AKA its truthy or falsyness. if it's TRUTHY, return `result.year`; if it's FALSY, return `undefined`
  }