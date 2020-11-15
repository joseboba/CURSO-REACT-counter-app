import "@testing-library/jest-dom";
import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-wait y fetch", () => {
  test("Debe de retornar el link con la imagen", async () => {
    const url = await getImagen();
    // console.log(url);
    expect(url.includes("https://")).toBe(true);
  });
});
