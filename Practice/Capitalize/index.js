function capitalize(text) {
  if (text) {
    const textArr = text.split(" ");
    let capitalizedArr = [];
    for (let i = 0; i < textArr.length; i++) {
      capitalizedArr.push(
        [
          textArr[i][0].toUpperCase(),
          ...textArr[i].slice(1, textArr[i].length).toLowerCase(),
        ].join("")
      );
    }
    return capitalizedArr.join(" ");
  }
  return;
}

const result = capitalize("HELLO THERE");
console.log(result);
