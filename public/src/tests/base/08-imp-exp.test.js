const { getHeroeById, getHeroesByOwner } = require("../../base/08-imp-exp");
import heroes from "../../data/heroes";
import "@testing-library/jest-dom";

describe("Pruebas em 08-imp-exp", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 1;

    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  test("Debe de retornar un undefined si heroe no existe", () => {
    const id = 10;

    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar DC si el heroe es de DC", () => {
    const ownerTest = "DC";

    const [{ id, name, owner }] = getHeroesByOwner(ownerTest);

    expect(owner).toBe(ownerTest);
  });

  test("Debe de regresar el tamaño del arreglo de dos", () => {
    const ownerTest = "Marvel";

    const owner = getHeroesByOwner(ownerTest);
    expect(owner.length).toBe(2);
  });
});
