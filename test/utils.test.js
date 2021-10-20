const { gerarNumeroAleatorio, acharCaracter } = require("../lib/utils");

describe("Utils", () => {
  describe("gerarNumeroAleatorio", () => {
    test("fim nao pode ser negativo", () => {
      expect(gerarNumeroAleatorio(20, -5)).toBe(-1);
    });

    test("inicio nao pode ser negativo", () => {
      expect(gerarNumeroAleatorio(-20, -5)).toBe(-2);
    });

    test("numero entre intervalo", () => {
      expect(gerarNumeroAleatorio(1, 5)).toBeGreaterThan(0);
      expect(gerarNumeroAleatorio(1, 5)).toBeLessThan(6);
    });
  });

  describe("acharCaracter", () => {
    test("comprimento invalido", () => {
      expect(acharCaracter(-4, "abcde", "c")).toBe("comprimento invalido");
    });

    test("caracter não encontrado", () => {
      expect(acharCaracter(5, "abcde", "f")).toBe("caracter não encontrado");
    });
  });
});
