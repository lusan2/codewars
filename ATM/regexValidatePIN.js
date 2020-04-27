function validatePIN (pin) {
 if ((pin.length === 6 || pin.length === 4) && pin == pin.match(/^\d{4,6}$/)){
   return true;
 }
  else {
    return false;
 }
}

// expresión regular: Encuentra solo números y coincide con un solo carácter que no sea el espacio en blanco.

