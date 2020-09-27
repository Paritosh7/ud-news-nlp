/** Import the JS file to be tested */
import { isValid } from "../src/client/js/formValidator";

/** test function gets 2 argums the string that will be returned
 * and a callback function.
 */
test("1234 should return false", () => {
  /** expect function takes the function to be tested,
   *  with specific input, toBe func takes the desired
   * output.
   */
  expect(handleSubmit("12")).toBe(false);
});
