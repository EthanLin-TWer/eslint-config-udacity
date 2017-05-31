import { CLIEngine } from 'eslint'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

describe('JavaScript Language Rules', () => {
  describe('vars', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'no-undef': 'error',
        },
      })
    })

    it('should always declare variables with var', () => {
      const result = engine.executeOnText('var b = 20;')
      assert.equal(result.errorCount, 0)
    })

    it('should report error when declare variables without using keyword var', () => {
      const result = engine.executeOnText('b = 20;')
      assert.equal(result.errorCount, 1)
    })

    it('should be fine to assign value to variable after declaration', () => {
      const result = engine.executeOnText(`
        var b;
        b = 20;
      `)
      assert.equal(result.errorCount, 0)
    })
  })

  describe('constants', () => {
    it('should capital all letters if a variable is intended to be immutable', () => {

    })

    it('should report error when a immutable variable is not named with all letters capitalised', () => {

    })

    it('should never use the const keyword as it\'s not supported by all browsers at this time', () => {

    })
  })

  describe('semicolons', () => {
    it('should use semicolons on variable assignments', () => {

    })

    it('should use semicolons on variable evaluations', () => {

    })

    it('should use semicolons on simple statements', () => {

    })

    it('should use semicolons on function declaration and variable assignment', () => {

    })

    it('should not use semicolons on function execution only', () => {

    })

    it('should not use semicolons on end of condition blocks(if, if-else, etc)', () => {

    })
  })

  describe('wrapper objects for primitive types', () => {
    it('should not use wrapper Boolean object for primitive boolean types', () => {

    })

    it('should not use wrapper String object for primitive string types', () => {

    })

    it('should not use wrapper Number object for primitive number types', () => {

    })
  })

  describe('closures', () => {
    it('not recommended to attach a closure to a DOM element that can create a circular reference', () => {

    })
  })

  describe('for, for-in and forEach', () => {
    it('forEach loops are preferred over for-in loops when iterating over an array', () => {

    })

    it('for loops are preferred over for-in loops when iterating over an array', () => {

    })

    it('not recommended to use for-in to iterate over an array', () => {

    })

    it('not recommended to use for-in to iterate over an object cause the prototype chain will also be visited', () => {

    })

    it('should wrap the content of the for-in loop on an object in a conditional statement to prevent iterating over the prototype chain', () => {

    })
  })

  describe('multiline string literals', () => {
    it('should use string concatenation for multiline string literals', () => {

    })

    it('should report error when having whitespaces at the beginning of each line of a multiline string literal', () => {

    })
  })

  describe('array and object literals', () => {
    it('should use array literals', () => {

    })

    it('should use object literals', () => {

    })

    it('should not use array constructors', () => {

    })

    it('should not use object constructors', () => {

    })
  })
})
