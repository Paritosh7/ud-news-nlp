/** Import the JS file to be tested */
import { handleSubmit } from "../src/client/js/formHandler";

/** test function gets 2 argums the string that will be returned
 * and a callback function.
 */
test("the input for the function with the desired output", () => {
  /** expect function takes the function to be tested,
   *  with specific input, toBe func takes the desired
   * output.
   */
  expect(handleSubmit("some event")).toBe("desired output");
});
