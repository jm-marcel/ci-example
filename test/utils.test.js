const { gerarNumeroAleatorio, acharCaracter } = require("../lib/utils");

describe("Utils", () => {
  describe("gerarNumeroAleatorio", () => {
    test("fim nao pode ser negativo", () => {
      expect(gerarNumeroAleatorio(20, -5)).toBe(-1);
    });
  });

  describe("acharCaracter", () => {
    test("caracter não encontrado", () => {
      expect(acharCaracter(5, "abcde", "f")).toBe("caracter não encontrado");
    });
  });
});
