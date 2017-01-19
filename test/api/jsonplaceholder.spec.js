describe('API Test: https://jsonplaceholder.typicode.com', () => {
	const request = supertest('https://jsonplaceholder.typicode.com')

	describe('End point /posts', () => {
		const postSchema = Joi.object().keys({
			id: Joi.number().positive(),
			userId: Joi.number().positive(),
			title: Joi.string(),
			body: Joi.string()
		})

		const postListSchema = Joi.array().items(postSchema)

		describe('GET /posts', () => {
			it('shoud return correct', done => {
				request.get('/posts')
					.expect(200)
					.expect('Content-Type', /json/)
					.end((error, response) => {
						joiAssert(response.body, postListSchema)
						done(error)
					})
			})
		})

		describe('GET /posts/:id', () => {
			it('shoud return correct', done => {
				request.get('/posts/1')
					.expect(200)
					.expect('Content-Type', /json/)
					.end((error, response) => {
						joiAssert(response.body, postSchema)
						done(error)
					})
			})
		})
	})
})
