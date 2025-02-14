// Função em JavaScript equivalente à sua função Ruby
function removeTextAfterMarkers(inputString, markers) {
    markers.forEach(marker => {
      const index = inputString.indexOf(marker);
      if (index !== -1) {
        inputString = inputString.substring(0, index);
      }
    });
    return inputString.trim();
  }
  
  // Teste Cypress
  describe('Função removeTextAfterMarkers', () => {
  
    it('Cenário 1 - "bananas, tomates # e ventiladores"', () => {
      const input = "bananas, tomates # e ventiladores";
      const markers = ["#", "!"];
      const output = removeTextAfterMarkers(input, markers);  // Chama a função diretamente aqui
      expect(output).to.equal("bananas, tomates");
    });
  
    it('Cenário 2 - "o rato roeu a roupa $ do rei % de roma"', () => {
      const input = "o rato roeu a roupa $ do rei % de roma";
      const markers = ["%", "!"];
      const output = removeTextAfterMarkers(input, markers);  // Chama a função diretamente aqui
      expect(output).to.equal("o rato roeu a roupa $ do rei");
    });
  
    it('Cenário 3 - "the quick brown fox & jumped over * the lazy dog"', () => {
      const input = "the quick brown fox & jumped over * the lazy dog";
      const markers = ["&", "*", "%", "!"];
      const output = removeTextAfterMarkers(input, markers);  // Chama a função diretamente aqui
      expect(output).to.equal("the quick brown fox");
    });
  
  });
  