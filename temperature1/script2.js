// 1. DECLARACIÓN GLOBAL: Buscamos los elementos una sola vez.
// Ahora estas variables están disponibles para todas las funciones.
const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");

/**
 * 2. FUNCIÓN DE AYUDA (Helper): 
 * Esta función hace el "trabajo sucio" de validar.
 * Recibe un "elemento" de input y nos devuelve el número limpio.
 */
function validarYObtener(inputElemento) {
    const valor = parseFloat(inputElemento.value);

    if (Number.isNaN(valor)) {
        alert("Por favor, ingresa un número válido.");
        return null; // Devolvemos null para avisar que algo salió mal
    }
    
    return valor; // Si todo está bien, devolvemos el número
}

/**
 * 3. FUNCIÓN: De Fahrenheit a Celsius
 */
function f2c() {
    // Le pedimos a nuestra ayuda que limpie el valor de Fahrenheit
    const fahrenheit = validarYObtener(fahrenheitEl);

    // Si la validación falló (es null), detenemos la función aquí
    if (fahrenheit === null) {
        celsiusEl.value = "";
        return;
    }

    // Si llegó aquí, es un número válido. Hacemos el cálculo.
    const resultadoCelsius = (fahrenheit - 32) * 5 / 9;
    celsiusEl.value = resultadoCelsius.toFixed(2);
}

/**
 * 4. FUNCIÓN: De Celsius a Fahrenheit
 */
function c2f() {
    // Le pedimos a nuestra ayuda que limpie el valor de Celsius
    const celsius = validarYObtener(celsiusEl);

    // Si la validación falló, detenemos la función
    if (celsius === null) {
        fahrenheitEl.value = "";
        return;
    }

    // Hacemos el cálculo inverso
    const resultadoFahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitEl.value = resultadoFahrenheit.toFixed(2);
}
