import App from "./App"
import { mount } from 'enzyme'
import React from 'react'

describe("the truth", () => {
  it("can't handle the truth", () => {
    const app = mount(<App />)
    expect((app).find("h1").length).toEqual(1)
    console.log(app)
    expect(true).toEqual(true)
  })
})