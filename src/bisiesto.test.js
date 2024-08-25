import es_bisiesto from "./bisiesto.js";

describe("Calcular", () => {
  it("1: Deberia marcar 2000 como bisiesto", () => {
    expect(es_bisiesto(2000)).toEqual(true);
  });
});