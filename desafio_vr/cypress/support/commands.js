Cypress.Commands.add('removeTextAfterMarkers', (inputString, markers) => {
    let result = inputString;
  
    markers.forEach(marker => {
      const index = result.indexOf(marker);
      if (index !== -1) {
        // Corta tudo antes do marcador
        result = result.substring(0, index);
      }
    });
  
    return result.trim();
  });
  