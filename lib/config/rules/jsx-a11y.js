"use strict";

// see https://github.com/evcohen/eslint-plugin-jsx-a11y

module.exports = {
    // Enforce emojis are wrapped in and provide screenreader access.
    "jsx-a11y/accessible-emoji": "error",
    // Enforce all anchors to contain accessible content.
    "jsx-a11y/anchor-has-content": "error",
    // Enforce elements with aria-activedescendant are tabbable.
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    // Enforce all aria-* props are valid.
    "jsx-a11y/aria-props": "error",
    // Enforce ARIA state and property values are valid.
    "jsx-a11y/aria-proptypes": "error",
    // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
    "jsx-a11y/aria-role": "error",
    // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
    "jsx-a11y/aria-unsupported-elements": "error",
    // Enforce a clickable non-interactive element has at least one keyboard event listener.
    "jsx-a11y/click-events-have-key-events": "error",
    //  Enforce heading (h1, h2, etc) elements contain accessible content.
    "jsx-a11y/heading-has-content": "error",
    // Enforce an anchor element's href prop value is not just #.
    "jsx-a11y/href-no-hash": "error",
    // Enforce <html> element has lang prop.
    "jsx-a11y/html-has-lang": "error",
    //  Enforce iframe elements have a title attribute.
    "jsx-a11y/iframe-has-title": "error",
    // Enforce that <img> JSX elements use the alt prop.
    "jsx-a11y/img-has-alt": "error",
    // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
    "jsx-a11y/img-redundant-alt": "error",
    // Enforce that <label> elements have the htmlFor prop.
    "jsx-a11y/label-has-for": "error",
    // Enforce lang attribute has a valid value.
    "jsx-a11y/lang": "error",
    // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
    "jsx-a11y/mouse-events-have-key-events": "error",
    // Enforce that the accessKey prop is not used on any element
    // to avoid complications with keyboard commands used by a screenreader.
    "jsx-a11y/no-access-key": "error",
    // Enforce autoFocus prop is not used.
    "jsx-a11y/no-autofocus": "error",
    // Enforce distracting elements are not used.
    "jsx-a11y/no-distracting-elements": [
        "error",
        {
            "elements": [
                "marquee",
                "blink"
            ]
        }
    ],
    // Enforce that onBlur is used instead of onChange.
    "jsx-a11y/no-onchange": "error",
    // Enforce explicit role property is not the same as implicit/default role property on element.
    "jsx-a11y/no-redundant-roles": "error",
    // Enforce non-interactive elements have no interactive handlers.
    "jsx-a11y/no-static-element-interactions": "error",
    // Enforce that elements with onClick handlers must be focusable.
    "jsx-a11y/onclick-has-focus": "error",
    // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
    "jsx-a11y/onclick-has-role": "error",
    // Enforce that elements with ARIA roles must have all required attributes for that role.
    "jsx-a11y/role-has-required-aria-props": "error",
    // Enforce that elements with explicit or implicit roles
    // defined contain only aria-* properties supported by that role.
    "jsx-a11y/role-supports-aria-props": "error",
    // Enforce scope prop is only used on <th> elements.
    "jsx-a11y/scope": "error",
    // Enforce tabIndex value is not greater than zero.
    "jsx-a11y/tabindex-no-positive": "error"
};
