import { updateUI } from "../src/client/js/uiUpdater";

/** test function gets 2 argums the string that will be returned
 * and a callback function.
 */
test("the input for the function with the desired output", () => {
  /** expect function takes the function to be tested,
   *  with specific input, toBe func takes the desired
   * output.
   */
  expect(updateUI("some response", "flag value | true/false")).toBe(
    "desired output"
  );
});
