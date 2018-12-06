"use strict";

// see https://github.com/evcohen/eslint-plugin-jsx-a11y

module.exports = {
  // Enforce emojis are wrapped in and provide screenreader access.
  // In recommended
  // "jsx-a11y/accessible-emoji": "error",
  // Enforce all elements that require alternative text have meaningful information to relay back to end user.
  // In recommended
  // "jsx-a11y/alt-text": "error",
  // Enforce all anchors to contain accessible content.
  // In recommended
  // "jsx-a11y/anchor-has-content": "error",
  // Enforce all anchors are valid, navigable elements.
  // In recommended
  // "jsx-a11y/anchor-is-valid": "error",
  // Enforce elements with aria-activedescendant are tabbable.
  // In recommended
  // "jsx-a11y/aria-activedescendant-has-tabindex": "error",
  // Enforce all aria-* props are valid.
  // In recommended
  // "jsx-a11y/aria-props": "error",
  // Enforce ARIA state and property values are valid.
  // In recommended
  // "jsx-a11y/aria-proptypes": "error",
  // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
  // In recommended
  // "jsx-a11y/aria-role": "error",
  // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
  // In recommended
  // "jsx-a11y/aria-unsupported-elements": "error",
  // Enforce a clickable non-interactive element has at least one keyboard event listener.
  // In recommended
  // "jsx-a11y/click-events-have-key-events": "error",
  //  Enforce heading (h1, h2, etc) elements contain accessible content.
  // In recommended
  // "jsx-a11y/heading-has-content": "error",
  // Enforce an anchor element's href prop value is not just #.
  // In recommended
  // "jsx-a11y/href-no-hash": "off",
  // Enforce <html> element has lang prop.
  // In recommended
  // "jsx-a11y/html-has-lang": "error",
  //  Enforce iframe elements have a title attribute.
  // In recommended
  // "jsx-a11y/iframe-has-title": "error",
  // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
  // In recommended
  // "jsx-a11y/img-redundant-alt": "error",
  // Elements with an interactive role and interaction handlers (mouse or key press) must be focusable.
  // In recommended
  // "jsx-a11y/interactive-supports-focus": [
  //  "error",
  //  {
  //    tabbable: [
  //      'button',
  //      'checkbox',
  //      'link',
  //      'progressbar',
  //      'searchbox',
  //      'slider',
  //      'spinbutton',
  //      'switch',
  //      'textbox'
  //    ]
  //  }
  // ],
  // Enforce that <label> elements have the htmlFor prop.
  // In recommended
  // "jsx-a11y/label-has-for": "error",
  // Enforce that a label tag has a text label and an associated control.
  // In recommended
  // "jsx-a11y/label-has-associated-control": "error",
  // Enforce lang attribute has a valid value.
  "jsx-a11y/lang": "error"
  // Providing captions for media is essential for deaf users to follow along.
  // In recommended
  // "jsx-a11y/media-has-caption": "error",
  // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
  // In recommended
  // "jsx-a11y/mouse-events-have-key-events": "error",
  // Enforce that the accessKey prop is not used on any element
  // to avoid complications with keyboard commands used by a screenreader.
  // In recommended
  // "jsx-a11y/no-access-key": "error",
  // Enforce autoFocus prop is not used.
  // In recommended
  // "jsx-a11y/no-autofocus": "error",
  // Enforce distracting elements are not used.
  // In recommended
  // "jsx-a11y/no-distracting-elements": "error",
  // Interactive elements should not be assigned non-interactive roles.
  // In recommended
  // "jsx-a11y/no-interactive-element-to-noninteractive-role": [
  //    error',
  //    {
  //      tr: ['none', 'presentation']
  //    }
  // ],

  // Non-interactive elements should not be assigned mouse or keyboard event listeners.
  // In recommended
  // "jsx-a11y/no-noninteractive-element-interactions": [
  //  "error",
  //  {
  //    handlers: [
  //      "onClick",
  //      "onError",
  //      "onLoad",
  //      "onMouseDown",
  //      "onMouseUp",
  //      "onKeyPress",
  //      "onKeyDown",
  //      "onKeyUp"
  //    ],
  //    alert: ["onKeyUp", "onKeyDown", "onKeyPress"],
  //    body: ["onError", "onLoad"],
  //    dialog: ["onKeyUp", "onKeyDown", "onKeyPress"],
  //    iframe: ["onError", "onLoad"],
  //    img: ["onError", "onLoad"]
  //  }
  // ],
  // In recommended
  // "jsx-a11y/no-noninteractive-element-to-interactive-role": [
  //  "error",
  //  {
  //    ul: [
  //      "listbox",
  //      "menu",
  //      "menubar",
  //      "radiogroup",
  //      "tablist",
  //      "tree",
  //      "treegrid"
  //    ],
  //    ol: [
  //      "listbox",
  //      "menu",
  //      "menubar",
  //      "radiogroup",
  //      "tablist",
  //      "tree",
  //      "treegrid"
  //    ],
  //    li: ["menuitem", "option", "row", "tab", "treeitem"],
  //    table: ["grid"],
  //    td: ["gridcell"]
  //  }
  // ],
  // `tabIndex` should only be declared on interactive elements.
  // In recommended
  // "jsx-a11y/no-noninteractive-tabindex": [
  //  "error",
  //  {
  //    tags: [],
  //    roles: ["tabpanel"]
  //  }
  // ],
  // Enforce that onBlur is used instead of onChange.
  // In recommended
  // "jsx-a11y/no-onchange": "error",
  // Enforce explicit role property is not the same as implicit/default role property on element.
  // In recommended
  // "jsx-a11y/no-redundant-roles": "error",
  // Enforce non-interactive elements have no interactive handlers.
  // In recommended
  // "jsx-a11y/no-static-element-interactions": [
  //  "error",
  //  {
  //    handlers: [
  //      "onClick",
  //      "onMouseDown",
  //      "onMouseUp",
  //      "onKeyPress",
  //      "onKeyDown",
  //      "onKeyUp"
  //    ]
  //  }
  // ]
  // Enforce that elements with ARIA roles must have all required attributes for that role.
  // In recommended
  // "jsx-a11y/role-has-required-aria-props": "error",
  // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
  // In recommended
  // "jsx-a11y/role-supports-aria-props": "error",
  // Enforce scope prop is only used on <th> elements.
  // In recommended
  // "jsx-a11y/scope": "error",
  // Enforce tabIndex value is not greater than zero.
  // In recommended
  // "jsx-a11y/tabindex-no-positive": "error"
};
