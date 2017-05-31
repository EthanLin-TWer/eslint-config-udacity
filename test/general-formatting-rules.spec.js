import { CLIEngine } from 'eslint'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

describe('General Formatting Rules', () => {
  describe('trailing spaces', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {},
      })
    })

    it('should remove trailing white spaces', () => {
      const result = engine.executeOnText('')
      assert.equal(result.errorCount, 0)
    })

    it('should report error with trailing white spaces', () => {
      const result = engine.executeOnText('')
      assert.equal(result.errorCount, 0)
    })
  })

  describe('indentation', () => {
    it('should have consistent indentation', () => {

    })
  })

  describe('action items', () => {
    it('should mark todos and actions items with TODO', () => {

    })

    it('should highlight todos by using keyword TODO only, not other formats(like @@)', () => {

    })
  })
})
