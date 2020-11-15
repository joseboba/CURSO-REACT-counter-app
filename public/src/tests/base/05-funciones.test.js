import "@testing-library/jest-dom";
const { getUser, getUsuarioActivo } = require("../../base/05-funciones");

describe("Pruebas en el archivo 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  //getUsusarioActivo
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Jose Enrique";

    const userTest = {
      uid: "ABC567",
      username: nombre,
    };

    const user = getUsuarioActivo(nombre);

    expect(user).toEqual(userTest);
  });
});
