import { CLIEngine } from 'eslint'
import iconv from 'iconv-lite'
import { describe, it, beforeEach } from 'mocha'
import assert from 'assert'

describe('General Meta Rules', () => {
  describe('encoding', () => {
    let engine

    beforeEach(() => {
      engine = new CLIEngine({
        useEslintrc: false,
        rules: {
          'unicode-bom': ['error', 'always'],
        },
      })
    })

    it('should use UTF-8 with no BOM', () => {
      const utf8WithNoBOM = iconv.encode('var foobar = 3;', 'utf8')
      const result = engine.executeOnText(utf8WithNoBOM)
      assert.equal(result.errorCount, 0)
    })

    it.skip('should not use UTF-8 with BOM', () => {
      const utf8WithBOMs = iconv.encode('var foobar = 3;', 'utf8', { addBOM: true })
      const result = engine.executeOnText(utf8WithBOMs)

      assert.equal(result.errorCount, 1)
    })

    it.skip('should not use other encodings except UTF-8', () => {
      const asciiEncoding = iconv.encode('var foobar = 3;', 'ascii')
      const result = engine.executeOnText(asciiEncoding)
      assert.equal(result.errorCount, 1)
    })
  })

  describe('comments', () => {
    it('should use comments whenever possible', () => {

    })
  })
})
