module.exports['TATUHUB - Home Search'] = client => {
	client.url('https://www.tatuhub.com/')
		.waitForElementVisible('body', 500) // O body deve carregar em menos de 0.5s

		.assert.visible('.search') // o formulário de busca deve estar visível
		.assert.visible('.search .cities') // o campo de seleção de cidade deve estar visivel
		.assert.visible('.search .categories') // o campo de seleção de categoria deve estar visivel
		.assert.visible('.search .filters-content-date-datepicker') // o campo de seleção de data deve estar visivel
		.assert.visible('.search #attendees') // o campo de seleção de quantidade de pessoas deve estar visivel
		.assert.visible('.search .filters-button button') // o botão buscar deve estar visivel

		.click('.search .cities') // click no campo de seleção de cidades
		.assert.visible('[list="cities"] .start-list.tt-menu') // a lista de cidades deve ser exibida
		.assert.visible('[list="cities"] .tt-suggestion:first-child') // deve existir pelo menos uma sugestão
		.click('[list="cities"] .tt-suggestion:first-child') // click na primeira sugestão

		.click('.search .categories') // click no campo de seleção de categorias
		.assert.visible('[categories="categories"] .start-list.tt-menu') // a lista de categorias deve ser exibida
		.assert.visible('[categories="categories"] .tt-suggestion:first-child') // deve existir pelo menos uma sugestão
		.click('[categories="categories"] .tt-suggestion:first-child') // click na primeira sugestão

		.click('.search .filters-content-date-datepicker') // click no campo de seleção de data
		.assert.visible('.pika-single') // o calendario deve ser exibido
		.assert.visible('.pika-single .is-today') // a data de hoje deve estar destacada
		.click('.pika-single .is-today') // click na data de hoje

		.click('.search #attendees') // click no campo de seleção de quantidade de pessoas
		.assert.visible('attendees-selector .attendees-list.tt-menu') // a lista sugestões
		.assert.visible('attendees-selector .attendees-list.tt-menu li:first-child') // deve existir pelo menos uma sugestão
		.click('attendees-selector .attendees-list.tt-menu li:first-child') // click na primeira sugestão

		.click('.search .filters-button button') // click em buscar
		.waitForElementVisible('.filters-list', 300) //espere por 300ms até a pagina de resultado
		.assert.urlContains('www.tatuhub.com/places/') // validar url
		.end() // fim do teste
	}
