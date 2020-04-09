import { hello } from '../src/main'

describe(':: main ', () => {
  it("Should return H3LL0 FR0M FRANC3", () => {
    expect(hello()).toBe('H3LL0 FR0M FRANC3')
  })
})