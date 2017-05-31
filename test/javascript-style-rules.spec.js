import { CLIEngine } from 'eslint'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

describe('JavaScript Style Rules', () => {
  describe('naming', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        parser: 'babel-eslint',
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
      const result = engine.executeOnText('var IllegalName = "illegal";')
      assert.equal(result.errorCount, 1)
    })

    it('class names should be like this: AllLettersCapitalised', () => {
      const result = engine.executeOnText('class Animal {}')
      assert.equal(result.errorCount, 0)
    })

    it.skip('class names should not start with lower cases like: class animal {}', () => {
      const lowercaseClassName = engine.executeOnText('class animal {}')
      assert.equal(lowercaseClassName.errorCount, 1)

      const firstWordLowercaseClassName = engine.executeOnText('class shibaInu {}')
      assert.equal(firstWordLowercaseClassName.errorCount, 1)
    })

    it('constant names should be like this: ALL_LETTERS_CAPITALISED', () => {
      const withConst = engine.executeOnText('const EXECUTORS = 6')
      assert.equal(withConst.errorCount, 0)

      const withVars = engine.executeOnText('var EXECUTORS = 6')
      assert.equal(withVars.errorCount, 0)
    })

    it.skip('file names should be like this: alllettersdecapitalised.js', () => {

    })
  })

  describe('code formatting', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'brace-style': 'error',
          'object-curly-spacing': 'error',
          'object-property-newline': 'error',
          'array-bracket-spacing': 'error',
        },
      })
    })

    it('should always start your curly braces on the same line', () => {
      const curlyBracesOnTheSameLine = engine.executeOnText(`
        if (isManager()) {
          addSalary();
        }
      `)
      assert.equal(curlyBracesOnTheSameLine.errorCount, 0)

      const curlyBracesOnNextLine = engine.executeOnText(`
        if (isManager())
        {
          addSalary();
        }
      `)
      assert.equal(curlyBracesOnNextLine.errorCount, 1)
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
