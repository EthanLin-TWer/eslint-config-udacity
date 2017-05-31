import { CLIEngine } from 'eslint'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

describe('General Formatting Rules', () => {
  describe('trailing spaces', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'no-trailing-spaces': 'error',
        },
      })
    })

    it('should remove trailing white spaces', () => {
      const result = engine.executeOnText('var no = "spaces";')
      assert.equal(result.errorCount, 0)
    })

    it('should report error with trailing white spaces', () => {
      const result = engine.executeOnText('var spaces = "no allowed";  ')
      assert.equal(result.errorCount, 1)
    })
  })

  describe.skip('indentation', () => {
    it('should have consistent indentation', () => {

    })
  })

  describe.skip('action items', () => {
    it('should mark todos and actions items with TODO', () => {

    })

    it('should highlight todos by using keyword TODO only, not other formats(like @@)', () => {

    })
  })
})
