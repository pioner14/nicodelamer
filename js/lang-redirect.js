// Французский браузер — сразу на /fr/. Остальные остаются на выборе языка.
if (/^fr/i.test(navigator.language || "")) location.replace("/fr/");
