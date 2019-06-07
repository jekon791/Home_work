
export function start() {
    let obj = new Object
    return isEmpty(obj);
}

function isEmpty(obj) {
  if (typeof obj === "object" && obj !== null) {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return console.log("true");
    }
  } else {
    return console.log("false");
  }
}
