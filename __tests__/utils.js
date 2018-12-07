import test from "ava";
import { utils } from "..";

test("modifyPresetRules", t => {
  const modifiedNodePresetRules = utils.modifyPresetRules("node", () => false);

  // Specify rule
  t.true(modifiedNodePresetRules["global-require"] === false);
  // From extend plugin
  t.true(modifiedNodePresetRules["node/no-deprecated-api"] === false);

  const modifiedEsnextPresetRules = utils.modifyPresetRules(
    "esnext",
    () => false
  );

  // Specify rule
  t.true(modifiedEsnextPresetRules["consistent-return"] === false);
  // From extend plugin
  t.true(modifiedEsnextPresetRules["promise/catch-or-return"] === false);
  // From `eslint:recommended`
  t.true(modifiedEsnextPresetRules["no-unreachable"] === false);
});
