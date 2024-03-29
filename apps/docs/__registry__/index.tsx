/* eslint-disable prettier/prettier */
// @ts-nocheck
// This file is autogenerated by scripts/build-registry.ts
// Do not edit this file directly.
import * as React from "react"

type ComponentRegistry = Record<
  string,
  Record<
    string,
    {
      name: string
      story: string
      component: string
      file: string
    }
  >
>

export const Index: ComponentRegistry = {
  "breadcrumbs": {
    "default": {
      name: "breadcrumbs-default",
      story: "default",
      component: React.lazy(() => import("@/registry/breadcrumbs/default")),
      file: "registry/breadcrumbs/default.tsx"
    },
  },
  "button": {
    "default": {
      name: "button-default",
      story: "default",
      component: React.lazy(() => import("@/registry/button/default")),
      file: "registry/button/default.tsx"
    },
    "disabled": {
      name: "button-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/button/disabled")),
      file: "registry/button/disabled.tsx"
    },
    "sizes": {
      name: "button-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/button/sizes")),
      file: "registry/button/sizes.tsx"
    },
    "theme": {
      name: "button-theme",
      story: "theme",
      component: React.lazy(() => import("@/registry/button/theme")),
      file: "registry/button/theme.tsx"
    },
  },
  "calendar": {
    "default": {
      name: "calendar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/calendar/default")),
      file: "registry/calendar/default.tsx"
    },
  },
  "checkbox": {
    "default": {
      name: "checkbox-default",
      story: "default",
      component: React.lazy(() => import("@/registry/checkbox/default")),
      file: "registry/checkbox/default.tsx"
    },
    "disabled": {
      name: "checkbox-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/checkbox/disabled")),
      file: "registry/checkbox/disabled.tsx"
    },
    "sizes": {
      name: "checkbox-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/checkbox/sizes")),
      file: "registry/checkbox/sizes.tsx"
    },
  },
  "checkbox-group": {
    "default": {
      name: "checkbox-group-default",
      story: "default",
      component: React.lazy(() => import("@/registry/checkbox-group/default")),
      file: "registry/checkbox-group/default.tsx"
    },
    "disabled": {
      name: "checkbox-group-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/checkbox-group/disabled")),
      file: "registry/checkbox-group/disabled.tsx"
    },
    "horizontal": {
      name: "checkbox-group-horizontal",
      story: "horizontal",
      component: React.lazy(() => import("@/registry/checkbox-group/horizontal")),
      file: "registry/checkbox-group/horizontal.tsx"
    },
  },
  "combobox": {
    "default": {
      name: "combobox-default",
      story: "default",
      component: React.lazy(() => import("@/registry/combobox/default")),
      file: "registry/combobox/default.tsx"
    },
    "disabled-keys": {
      name: "combobox-disabled-keys",
      story: "disabled-keys",
      component: React.lazy(() => import("@/registry/combobox/disabled-keys")),
      file: "registry/combobox/disabled-keys.tsx"
    },
    "disabled": {
      name: "combobox-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/combobox/disabled")),
      file: "registry/combobox/disabled.tsx"
    },
    "with-button": {
      name: "combobox-with-button",
      story: "with-button",
      component: React.lazy(() => import("@/registry/combobox/with-button")),
      file: "registry/combobox/with-button.tsx"
    },
  },
  "date-field": {
    "default": {
      name: "date-field-default",
      story: "default",
      component: React.lazy(() => import("@/registry/date-field/default")),
      file: "registry/date-field/default.tsx"
    },
    "disabled": {
      name: "date-field-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/date-field/disabled")),
      file: "registry/date-field/disabled.tsx"
    },
  },
  "date-input": {
    "default": {
      name: "date-input-default",
      story: "default",
      component: React.lazy(() => import("@/registry/date-input/default")),
      file: "registry/date-input/default.tsx"
    },
    "sizes": {
      name: "date-input-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/date-input/sizes")),
      file: "registry/date-input/sizes.tsx"
    },
  },
  "date-picker": {
    "default": {
      name: "date-picker-default",
      story: "default",
      component: React.lazy(() => import("@/registry/date-picker/default")),
      file: "registry/date-picker/default.tsx"
    },
    "disabled": {
      name: "date-picker-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/date-picker/disabled")),
      file: "registry/date-picker/disabled.tsx"
    },
  },
  "date-range-picker": {
    "default": {
      name: "date-range-picker-default",
      story: "default",
      component: React.lazy(() => import("@/registry/date-range-picker/default")),
      file: "registry/date-range-picker/default.tsx"
    },
    "disabled": {
      name: "date-range-picker-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/date-range-picker/disabled")),
      file: "registry/date-range-picker/disabled.tsx"
    },
  },
  "grid-list": {
    "default": {
      name: "grid-list-default",
      story: "default",
      component: React.lazy(() => import("@/registry/grid-list/default")),
      file: "registry/grid-list/default.tsx"
    },
  },
  "icon-button": {
    "default": {
      name: "icon-button-default",
      story: "default",
      component: React.lazy(() => import("@/registry/icon-button/default")),
      file: "registry/icon-button/default.tsx"
    },
    "disabled": {
      name: "icon-button-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/icon-button/disabled")),
      file: "registry/icon-button/disabled.tsx"
    },
    "sizes": {
      name: "icon-button-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/icon-button/sizes")),
      file: "registry/icon-button/sizes.tsx"
    },
    "theme": {
      name: "icon-button-theme",
      story: "theme",
      component: React.lazy(() => import("@/registry/icon-button/theme")),
      file: "registry/icon-button/theme.tsx"
    },
  },
  "input": {
    "default": {
      name: "input-default",
      story: "default",
      component: React.lazy(() => import("@/registry/input/default")),
      file: "registry/input/default.tsx"
    },
    "disabled": {
      name: "input-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/input/disabled")),
      file: "registry/input/disabled.tsx"
    },
    "sizes": {
      name: "input-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/input/sizes")),
      file: "registry/input/sizes.tsx"
    },
  },
  "label": {
    "default": {
      name: "label-default",
      story: "default",
      component: React.lazy(() => import("@/registry/label/default")),
      file: "registry/label/default.tsx"
    },
  },
  "menu": {
    "as-checkbox": {
      name: "menu-as-checkbox",
      story: "as-checkbox",
      component: React.lazy(() => import("@/registry/menu/as-checkbox")),
      file: "registry/menu/as-checkbox.tsx"
    },
    "as-radio": {
      name: "menu-as-radio",
      story: "as-radio",
      component: React.lazy(() => import("@/registry/menu/as-radio")),
      file: "registry/menu/as-radio.tsx"
    },
    "default": {
      name: "menu-default",
      story: "default",
      component: React.lazy(() => import("@/registry/menu/default")),
      file: "registry/menu/default.tsx"
    },
    "disabled": {
      name: "menu-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/menu/disabled")),
      file: "registry/menu/disabled.tsx"
    },
    "with-sections": {
      name: "menu-with-sections",
      story: "with-sections",
      component: React.lazy(() => import("@/registry/menu/with-sections")),
      file: "registry/menu/with-sections.tsx"
    },
  },
  "meter": {
    "default": {
      name: "meter-default",
      story: "default",
      component: React.lazy(() => import("@/registry/meter/default")),
      file: "registry/meter/default.tsx"
    },
  },
  "modal": {
    "default": {
      name: "modal-default",
      story: "default",
      component: React.lazy(() => import("@/registry/modal/default")),
      file: "registry/modal/default.tsx"
    },
    "dismissable-false": {
      name: "modal-dismissable-false",
      story: "dismissable-false",
      component: React.lazy(() => import("@/registry/modal/dismissable-false")),
      file: "registry/modal/dismissable-false.tsx"
    },
    "set-autofocus": {
      name: "modal-set-autofocus",
      story: "set-autofocus",
      component: React.lazy(() => import("@/registry/modal/set-autofocus")),
      file: "registry/modal/set-autofocus.tsx"
    },
    "sizes": {
      name: "modal-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/modal/sizes")),
      file: "registry/modal/sizes.tsx"
    },
  },
  "number-field": {
    "default": {
      name: "number-field-default",
      story: "default",
      component: React.lazy(() => import("@/registry/number-field/default")),
      file: "registry/number-field/default.tsx"
    },
    "disabled": {
      name: "number-field-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/number-field/disabled")),
      file: "registry/number-field/disabled.tsx"
    },
    "with-mobile-stepper": {
      name: "number-field-with-mobile-stepper",
      story: "with-mobile-stepper",
      component: React.lazy(() => import("@/registry/number-field/with-mobile-stepper")),
      file: "registry/number-field/with-mobile-stepper.tsx"
    },
    "with-stepper": {
      name: "number-field-with-stepper",
      story: "with-stepper",
      component: React.lazy(() => import("@/registry/number-field/with-stepper")),
      file: "registry/number-field/with-stepper.tsx"
    },
  },
  "progress-bar": {
    "default": {
      name: "progress-bar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/progress-bar/default")),
      file: "registry/progress-bar/default.tsx"
    },
  },
  "radio": {
    "default": {
      name: "radio-default",
      story: "default",
      component: React.lazy(() => import("@/registry/radio/default")),
      file: "registry/radio/default.tsx"
    },
    "disabled": {
      name: "radio-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/radio/disabled")),
      file: "registry/radio/disabled.tsx"
    },
    "sizes": {
      name: "radio-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/radio/sizes")),
      file: "registry/radio/sizes.tsx"
    },
  },
  "radio-group": {
    "default": {
      name: "radio-group-default",
      story: "default",
      component: React.lazy(() => import("@/registry/radio-group/default")),
      file: "registry/radio-group/default.tsx"
    },
    "disabled": {
      name: "radio-group-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/radio-group/disabled")),
      file: "registry/radio-group/disabled.tsx"
    },
    "horizontal": {
      name: "radio-group-horizontal",
      story: "horizontal",
      component: React.lazy(() => import("@/registry/radio-group/horizontal")),
      file: "registry/radio-group/horizontal.tsx"
    },
  },
  "range-calendar": {
    "default": {
      name: "range-calendar-default",
      story: "default",
      component: React.lazy(() => import("@/registry/range-calendar/default")),
      file: "registry/range-calendar/default.tsx"
    },
  },
  "search-field": {
    "default": {
      name: "search-field-default",
      story: "default",
      component: React.lazy(() => import("@/registry/search-field/default")),
      file: "registry/search-field/default.tsx"
    },
    "with-clear-button": {
      name: "search-field-with-clear-button",
      story: "with-clear-button",
      component: React.lazy(() => import("@/registry/search-field/with-clear-button")),
      file: "registry/search-field/with-clear-button.tsx"
    },
  },
  "select": {
    "default": {
      name: "select-default",
      story: "default",
      component: React.lazy(() => import("@/registry/select/default")),
      file: "registry/select/default.tsx"
    },
    "disabled": {
      name: "select-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/select/disabled")),
      file: "registry/select/disabled.tsx"
    },
  },
  "slider": {
    "default": {
      name: "slider-default",
      story: "default",
      component: React.lazy(() => import("@/registry/slider/default")),
      file: "registry/slider/default.tsx"
    },
    "vertical": {
      name: "slider-vertical",
      story: "vertical",
      component: React.lazy(() => import("@/registry/slider/vertical")),
      file: "registry/slider/vertical.tsx"
    },
  },
  "switch": {
    "alignment": {
      name: "switch-alignment",
      story: "alignment",
      component: React.lazy(() => import("@/registry/switch/alignment")),
      file: "registry/switch/alignment.tsx"
    },
    "default": {
      name: "switch-default",
      story: "default",
      component: React.lazy(() => import("@/registry/switch/default")),
      file: "registry/switch/default.tsx"
    },
    "disabled": {
      name: "switch-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/switch/disabled")),
      file: "registry/switch/disabled.tsx"
    },
    "sizes": {
      name: "switch-sizes",
      story: "sizes",
      component: React.lazy(() => import("@/registry/switch/sizes")),
      file: "registry/switch/sizes.tsx"
    },
  },
  "tabs": {
    "default": {
      name: "tabs-default",
      story: "default",
      component: React.lazy(() => import("@/registry/tabs/default")),
      file: "registry/tabs/default.tsx"
    },
    "disabled-keys": {
      name: "tabs-disabled-keys",
      story: "disabled-keys",
      component: React.lazy(() => import("@/registry/tabs/disabled-keys")),
      file: "registry/tabs/disabled-keys.tsx"
    },
    "disabled": {
      name: "tabs-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/tabs/disabled")),
      file: "registry/tabs/disabled.tsx"
    },
    "vertical": {
      name: "tabs-vertical",
      story: "vertical",
      component: React.lazy(() => import("@/registry/tabs/vertical")),
      file: "registry/tabs/vertical.tsx"
    },
  },
  "text-field": {
    "default": {
      name: "text-field-default",
      story: "default",
      component: React.lazy(() => import("@/registry/text-field/default")),
      file: "registry/text-field/default.tsx"
    },
    "disabled": {
      name: "text-field-disabled",
      story: "disabled",
      component: React.lazy(() => import("@/registry/text-field/disabled")),
      file: "registry/text-field/disabled.tsx"
    },
    "with-error": {
      name: "text-field-with-error",
      story: "with-error",
      component: React.lazy(() => import("@/registry/text-field/with-error")),
      file: "registry/text-field/with-error.tsx"
    },
  },
  "tooltip": {
    "default": {
      name: "tooltip-default",
      story: "default",
      component: React.lazy(() => import("@/registry/tooltip/default")),
      file: "registry/tooltip/default.tsx"
    },
    "placement": {
      name: "tooltip-placement",
      story: "placement",
      component: React.lazy(() => import("@/registry/tooltip/placement")),
      file: "registry/tooltip/placement.tsx"
    },
  },
};
