const { getHeroeByIdAsync } = require("../../base/09-promesas");
import "@testing-library/jest-dom";
import heroes from "../../data/heroes";
describe("Pruebas con promesas", () => {
  test("getHeroeByIdAsync debe de retornar un Heroe ", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test("Error si el heroe por id no existe ", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
