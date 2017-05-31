import { CLIEngine } from 'eslint'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

describe('JavaScript Style Rules', () => {
  describe('naming', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          camelcase: 'error',
        },
      })
    })

    it.skip('function names should be like this: capitaliseAllLettersExceptTheFirst()', () => {
      const result = engine.executeOnText('')
      assert.equal(result.errorCount, 0)
    })

    it('variable names should be like this: capitaliseAllLettersExceptTheFirst', () => {
      const camelCase = engine.executeOnText('var legalName = "legal";')
      assert.equal(camelCase.errorCount, 0)

      const underscoreStyle = engine.executeOnText('var not_legal = "illegal";')
      assert.equal(underscoreStyle.errorCount, 1)
    })

    it.skip('variable names should not start with capitalised letters like: var ThisIsIllegal', () => {
      const notCamelCase = engine.executeOnText('var IllegalName = "illegal";')
      assert.equal(notCamelCase.errorCount, 1)
    })

    it('class names should be like this: AllLettersCapitalised', () => {

    })

    it('method names should be like this: capitaliseAllLetterExceptTheFirst', () => {

    })

    it('constant names should be like this: ALL_LETTERS_CAPITALISED', () => {

    })

    it('file names should be like this: alllettersdecapitalised.js', () => {

    })
  })

  describe('code formatting', () => {
    it('should always start your curly braces on the same line', () => {

    })

    it('single-line array initializers are allowed when they fit on one line', () => {

    })

    it('single-line array initializers should have no spaces after the opening bracket or before the closing bracket', () => {

    })

    it('single-line object initializers are allowed when they fit on one line', () => {

    })

    it('single-line object initializers should have no spaces after the opening bracket or before the closing bracket', () => {

    })

    it('multiline array initializers are indented one level, with braces on their own lines, just like blocks', () => {

    })

    it('multiline object initializers are indented one level, with braces on their own lines, just like blocks', () => {

    })
  })

  describe('parentheses', () => {
    it('only where required = = (nick young questions)', () => {

    })
  })

  describe('strings', () => {
    it('should always use single-quotes(\') for JavaScript related syntax for consistency', () => {

    })

    it('should report error when use double quote(") for JavaScript related changes', () => {

    })
  })
})
