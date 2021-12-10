const { add } = require("../app")
// import { add } from "../app"

test("2 + 3 = 5", () => {
  expect(add(2, 3)).toEqual(5)
})
