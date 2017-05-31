import { CLIEngine } from 'eslint'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('linter', () => {
  it('first test', () => {
    const engine = new CLIEngine({
      useEslintrc: false,
      rules: {
        semi: 2,
      },
    })
    const result = engine.executeOnText('var foo = 23')
    assert.equal(result.errorCount, 0, result.results[0].messages[0].message)
  })
})
