import { describe, it } from 'mocha'
import assert from 'assert'

const inBooleanExpression = value => !!value

describe('Tips and Tricks', () => {
  it('should null be false in boolean expressions', () => {
    assert.equal(inBooleanExpression(null), false)
  })

  it('should undefined be false in boolean expressions', () => {
    assert.equal(inBooleanExpression(undefined), false)
  })

  it('should empty string \'\' be false in boolean expressions', () => {
    assert.equal(inBooleanExpression(''), false)
  })

  it('should number 0 be false in boolean expressions', () => {
    assert.equal(inBooleanExpression(0), false)
  })
})
