require_relative '../support/string_cleaner'
require 'json'

Given('a string de entrada {string}') do |texto|
  @texto_entrada = texto
end

Given('os marcadores {string}') do |array_str|
  # Convertemos a string (ex: '["#", "!"]') em array
  @marcadores = JSON.parse(array_str.gsub("'", '"'))
end

Then('a saída esperada deve ser {string}') do |saida_esperada|
  resultado = remove_text_after_markers(@texto_entrada, @marcadores)
  expect(resultado).to eq(saida_esperada)
end
