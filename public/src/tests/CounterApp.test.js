import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";
import React from "react";

describe("Pruebas en el <CounterApp />", () => {
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de hacer match con un snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto de 100", () => {
    const value = 100;

    const wrapper = shallow(<CounterApp value={value} />);

    const texto = wrapper.find("h2").text().trim();

    expect(texto).toBe("100");
  });

  test("Debe de incrementear con el boton +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const texto = wrapper.find("h2").text().trim();
    expect(texto).toBe("11");
  });
  test("Debe de decrementar con el boton -1", () => {
    wrapper.find("button").at(1).simulate("click");
    const texto = wrapper.find("h2").text().trim();
    expect(texto).toBe("9");
  });

  test("Debe de resetear el numero con el boton Reset", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(2).simulate("click");
    const texto = wrapper.find("h2").text().trim();
    expect(texto).toBe("105");
  });
});
