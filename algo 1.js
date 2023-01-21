function isAnagram(str1, str2) {
    str1 = str1.replaceAll(' ', '')
    str2 = str2.replaceAll(' ', '')
    const strArr1 = removeNonAlphanumeric(str1.toLowerCase().split(''))
    const strArr2 = removeNonAlphanumeric(str2.toLowerCase().split(''))
    if (strArr1.length !== strArr2.length) {
        return false
    }

    while (strArr1.length > 0) {
        const foundIndex = strArr2.indexOf(strArr1[0])
        if (foundIndex === -1) {
            return false
        } else {
            strArr1.splice(0, 1)
            strArr2.splice(foundIndex, 1)
        }
    }
    if (strArr2.length === 0) {
        return true
    } else return false
}

function removeNonAlphanumeric(strArr) {
    let code, i;
  
    for (i = 0; i <= strArr.length - 1; i++) {
      code = strArr[i].charCodeAt(0);
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
          strArr.splice(i)
      }
    }
    return strArr;
}