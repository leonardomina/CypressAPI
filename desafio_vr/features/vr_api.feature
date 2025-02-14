Feature: Consulta a API da VR
  Como um testador de QA
  Quero validar que o JSON retornado possui a chave "typeOfEstablishment"
  E imprimir um tipo de estabelecimento aleatório

  Scenario: Validar retorno da API e printar tipo de estabelecimento
    Given que realizo uma requisição GET para o endpoint VR
    Then verifico se existe a chave "typeOfEstablishment" no retorno
    And imprimo aleatoriamente um dos tipos de estabelecimento
