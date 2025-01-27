import { render } from "@ember/test-helpers";
import { setupRenderingTest } from "dummy/tests/helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupIntl } from "ember-intl/test-support";
import { module, test } from "qunit";

module("Integration | Component | empty-icon", function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, "en");

  test("it renders", async function (assert) {
    await render(hbs`<EmptyIcon />`);

    assert.dom(this.element).hasText("We found nothing...");
    assert.dom(this.element).hasStyle({ color: "rgb(102, 102, 102)" });
  });
});
