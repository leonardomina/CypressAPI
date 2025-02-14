describe('Desafio VR - Teste da API', () => {
    it('Valida que o JSON retornado possui a chave typeOfEstablishment e exibe um valor aleatório', () => {
      cy.api('GET', 'https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')
        .then((response) => {
          // Verifica se o status da requisição é 200
          expect(response.status).to.equal(200);
  
          // Verifica se o body possui a chave "typeOfEstablishment"
          expect(response.body).to.have.property('typeOfEstablishment');
  
          // Pega o array de establishments
          const establishments = response.body.typeOfEstablishment;
          // Seleciona um aleatório
          const randomEstablishment = establishments[Math.floor(Math.random() * establishments.length)];
  
          // Exibe no log do Cypress
          cy.log('Estabelecimento aleatório:', JSON.stringify(randomEstablishment));
        });
    });
  });
  