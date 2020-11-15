import PrimeraApp from "../PrimeraApp";
import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("Pruebas en <PrimeraApp />", () => {
  // test("Debe de mostrar el mensaje Hola soy Aang", () => {
  //   const saludo = "Hola soy Aang";
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //   expect(getByText(saludo)).toBeInTheDocument();
  // });

  test("debe de mostrar <PrimeraApp /> correctamente", () => {
    const saludo = "Hola soy Aang";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el subtitulo enviado por props", () => {
    const saludo = "Hola soy Aang";
    const subTitulo = "Soy un subtitulo";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    const textoParrafo = wrapper.find("p").text();

    expect(textoParrafo).toBe(subTitulo);
  });
});
