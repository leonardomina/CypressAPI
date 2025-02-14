Feature: Remoção de texto após símbolos

  Scenario: Cenário 1
    Given a string de entrada "bananas, tomates # e ventiladores"
    And os marcadores ["#", "!"]
    Then a saída esperada deve ser "bananas, tomates"

  Scenario: Cenário 2
    Given a string de entrada "o rato roeu a roupa $ do rei % de roma"
    And os marcadores ["%", "!"]
    Then a saída esperada deve ser "o rato roeu a roupa $ do rei"

  Scenario: Cenário 3
    Given a string de entrada "the quick brown fox & jumped over * the lazy dog"
    And os marcadores ["&", "*", "%", "!"]
    Then a saída esperada deve ser "the quick brown fox"
