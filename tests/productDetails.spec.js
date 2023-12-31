/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Cerveja', 'Whisky')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Cerveja', 'Whisky').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('Cerveja', 'Whisky')[0], 'object')
    assert.deepStrictEqual(typeof productDetails('Cerveja', 'Whisky')[1], 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Cerveja', 'Whisky')[0], productDetails('Cerveja', 'Whisky')[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    const str1 = productDetails('Cerveja', 'Whisky')[0].details.productId;
    const str2 = productDetails('Cerveja', 'Whisky')[1].details.productId;
    assert.strictEqual(str1.substring(str1.length - 3), str2.substring(str2.length - 3));
  });
});


