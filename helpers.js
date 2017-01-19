import supertest from 'supertest'
import Joi       from 'joi'
import joiAssert from 'joi-assert'
import chai      from 'chai'

global.expect    = chai.expect
global.supertest = supertest
global.Joi       = Joi
global.joiAssert = joiAssert
