require 'httparty'

$response = nil

Given('que realizo uma requisição GET para o endpoint VR') do
  $response = HTTParty.get('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')
end

Then('verifico se existe a chave {string} no retorno') do |chave|
  json_body = $response.parsed_response
  expect(json_body).to have_key(chave),
    "Não foi encontrada a chave '#{chave}' no JSON retornado."
end

Then('imprimo aleatoriamente um dos tipos de estabelecimento') do
  json_body = $response.parsed_response
  types = json_body['typeOfEstablishment']
  random_type = types.sample
  puts "Tipo de Estabelecimento selecionado: #{random_type}"
end
