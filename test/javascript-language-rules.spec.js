import { CLIEngine } from 'eslint'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

// TODO: [Linesh][5/31/17] refactor tests with eslint rule tester: https://github.com/RichardIvan/eslint-plugin-constant-check/blob/master/tests/src/rules/suggest-constant.spec.js
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
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          camelcase: 'error',
        },
        parser: 'babel-eslint',
        plugins: [
          'eslint-plugin-constant-check',
        ],
      })
    })

    it.skip('should capital all letters if a variable is intended to be immutable', () => {
      const result = engine.executeOnText('var JASMINE_TIMEOUT_INTERVAL = 20000')
      assert.equal(result.errorCount, 0)
    })

    it.skip('should report error when a immutable variable is not named with all letters capitalised', () => {
      const result = engine.executeOnText('var shouldBeCapitalised = 222')
      assert.equal(result.errorCount, 0)
    })

    it.skip('should never use the const keyword as it\'s not supported by all browsers at this time', () => {

    })
  })

  describe('semicolons', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          semi: 'error',
          'no-extra-semi': 'error',
        },
      })
    })

    it('should use semicolons on variable assignments', () => {
      const withSemicolon = engine.executeOnText('var b = 300;')
      assert.equal(withSemicolon.errorCount, 0)

      const withoutSemicolon = engine.executeOnText('var b = 300')
      assert.equal(withoutSemicolon.errorCount, 1)
    })

    it('should use semicolons on function assignments', () => {
      const result = engine.executeOnText(`
        var add = function(a, b) { return a + b; };
      `)
      assert.equal(result.errorCount, 0)
    })

    it('should use semicolons on simple statements', () => {
      const result = engine.executeOnText('var sum = 1 + 2;')
      assert.equal(result.errorCount, 0)
    })

    it('should use semicolons on function call evaluation and value assignment', () => {
      const result = engine.executeOnText(`
        var add = function(a, b) {
          return a + b;        
        };
        var sum = add(1, 2);
      `)
      assert.equal(result.errorCount, 0)
    })

    it('should not use semicolons on function declaration only', () => {
      const result = engine.executeOnText(`
        function foo() {
          return true;        
        }
      `)
      assert.equal(result.errorCount, 0)
    })

    it('should not use semicolons on end of condition blocks(if, if-else, etc)', () => {
      const noSemicolonsOnBlockEnds = engine.executeOnText(`
        if (isManager()) {
          salary += 200;
        }
      `)
      assert.equal(noSemicolonsOnBlockEnds.errorCount, 0)

      const semicolonsOnBlockEnds = engine.executeOnText(`
        if (isManager()) {
          salary += 200;
        };
      `)
      assert.equal(semicolonsOnBlockEnds.errorCount, 1)
    })
  })

  describe('wrapper objects for primitive types', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'no-new-wrappers': 'error',
        },
      })
    })

    it('should not use wrapper Boolean object for primitive boolean types', () => {
      const result = engine.executeOnText('var x = new Boolean(false);')
      assert.equal(result.errorCount, 1)
    })

    it('should not use wrapper String object for primitive string types', () => {
      const result = engine.executeOnText('var x = new String(\'string\');')
      assert.equal(result.errorCount, 1)
    })

    it('should not use wrapper Number object for primitive number types', () => {
      const result = engine.executeOnText('var x = new Number(0);')
      assert.equal(result.errorCount, 1)
    })
  })

  describe('closures', () => {
    it.skip('not recommended to attach a closure to a DOM element that can create a circular reference', () => {

    })
  })

  describe('for, for-in and forEach', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'guard-for-in': 'error',
        },
      })
    })
    it.skip('forEach loops are preferred over for-in loops when iterating over an array', () => {

    })

    it.skip('for loops are preferred over for-in loops when iterating over an array', () => {

    })

    it.skip('not recommended to use for-in to iterate over an array', () => {

    })

    it.skip('not recommended to use for-in to iterate over an object cause the prototype chain will also be visited', () => {
      const result = engine.executeOnText(`
        var obj = {
          one: 1,
          two: 2,
          three: 3
        };
        var sum = 0;
        for (key in obj) {
          sum += obj[key];
        }
      `)
      assert.equal(result.errorCount, 1)
    })

    it('should wrap the content of the for-in loop on an object in a conditional statement to prevent iterating over the prototype chain', () => {
      const result = engine.executeOnText(`
        var obj = {
          one: 1,
          two: 2
        };
        var sum = 0;
        for (key in obj) {
          if (Object.prorotype.hasOwnProperty.call(obj, key)) {
            sum += obj[key];
          }
        }
      `)
      assert.equal(result.errorCount, 0)
    })
  })

  describe('multiline string literals', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'no-multi-str': 'error',
        },
      })
    })

    it('should use string concatenation for multiline string literals', () => {
      const result = engine.executeOnText(`
        var poems = 'Truth may seem but cannot be;' + 
              'Beauty brag but ’tis not she;' + 
              'Truth and beauty buried be.';
      `)
      assert.equal(result.errorCount, 0)
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
