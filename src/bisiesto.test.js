import es_bisiesto from "./bisiesto.js";

describe("Calcular", () => {
  it("1: Deberia marcar 2000 como bisiesto", () => {
    expect(es_bisiesto(2000)).toEqual(true);
  });
  it("2: Deberia marcar cualquier año dividido por 400 como bisiesto", () => {
    expect(es_bisiesto(1600)).toEqual(true);
  });
  it("3: Deberia marcar 1700 como NO bisiesto", () => {
    expect(es_bisiesto(1700)).toEqual(false);
  });
  it("4: Deberia marcar 2016 como bisiesto", () => {
    expect(es_bisiesto(2016)).toEqual(true);
  });
  it("5: Deberia marcar 2019 como NO bisiesto", () => {
    expect(es_bisiesto(2019)).toEqual(false);
  });
});