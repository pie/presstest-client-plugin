import React from "react"


function TestingTab(){


    return(
        <form>
            <fieldset class="form-field add-domain">
                <label for="new-domain">Add Domain</label>
                <input type="url" name="new-domain" vlaue=""></input>
                <button id="add-domain">Add</button>
            </fieldset>
            <fieldset>
                <label for="test-domain">Select domain to test</label>
                <select id="test-domain" name="test-domain">
                    <option value="new-site">New site</option>
                </select>
                <button id="remove-domain">Remove</button>
            </fieldset>
            <fieldset>
                <input type="checkbox" id="woocommerce" name="woocommerce" value="Woocmerece"></input>
                <label for="woocommerce"> Woocmmerce </label>
                <input type="checkbox" id="wp_forms" name="wp_forms" value="WP Forms"></input>
                <label for="wp_forms"> WP Forms </label>
            </fieldset>
            <fieldset>
            <label for="test-domain">Select domain to test</label>
                <select id="test-domain" name="test-domain">
                    <option value="Chrome">Chrome</option>
                    <option value="Safari">Safari</option>
                    <option value="Firefox">Firefox</option>
                </select>
            </fieldset>
        </form>
    )
}

export default TestingTab;