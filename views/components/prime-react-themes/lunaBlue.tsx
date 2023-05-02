// lunaBlue.tsx

export default function lunaBlue() {
    // -------------------------------------------------------------

    return (
        <style jsx global>
            {`
                :root {
                    --surface-a: #191919;
                    --surface-b: #191919;
                    --surface-c: #4c4c4c;
                    --surface-d: #4b4b4b;
                    --surface-e: #323232;
                    --surface-f: #323232;
                    --text-color: #dedede;
                    --text-color-secondary: #888888;
                    --primary-color: #81d4fa;
                    --primary-color-text: #212529;
                    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
                        Segoe UI Emoji, Segoe UI Symbol;
                    --surface-0: #191919;
                    --surface-50: #303030;
                    --surface-100: #474747;
                    --surface-200: #5e5e5e;
                    --surface-300: #757575;
                    --surface-400: #8c8c8c;
                    --surface-500: #a3a3a3;
                    --surface-600: #bababa;
                    --surface-700: #d1d1d1;
                    --surface-800: #e8e8e8;
                    --surface-900: #ffffff;
                    --gray-50: #e8e8e8;
                    --gray-100: #d1d1d1;
                    --gray-200: #bababa;
                    --gray-300: #a3a3a3;
                    --gray-400: #8c8c8c;
                    --gray-500: #757575;
                    --gray-600: #5e5e5e;
                    --gray-700: #474747;
                    --gray-800: #303030;
                    --gray-900: #191919;
                    --content-padding: 0.571rem 1rem;
                    --inline-spacing: 0.5rem;
                    --border-radius: 3px;
                    --surface-ground: #191919;
                    --surface-section: #191919;
                    --surface-card: #323232;
                    --surface-overlay: #323232;
                    --surface-border: #4b4b4b;
                    --surface-hover: #4c4c4c;
                    --focus-ring: 0 0 0 0.1rem white;
                    --maskbg: rgba(0, 0, 0, 0.4);
                    --highlight-bg: #81d4fa;
                    --highlight-text-color: #212529;
                    color-scheme: dark;
                }

                * {
                    box-sizing: border-box;
                }

                .p-component {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    font-weight: normal;
                }

                .p-component-overlay {
                    background-color: rgba(0, 0, 0, 0.4);
                    transition-duration: 0.2s;
                }

                .p-disabled,
                .p-component:disabled {
                    opacity: 0.5;
                }

                .p-error {
                    color: #e57373;
                }

                .p-text-secondary {
                    color: #888888;
                }

                .pi {
                    font-size: 1rem;
                }

                .p-icon {
                    width: 1rem;
                    height: 1rem;
                }

                .p-link {
                    font-size: 1rem;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    border-radius: 3px;
                }
                .p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-component-overlay-enter {
                    animation: p-component-overlay-enter-animation 150ms
                        forwards;
                }

                .p-component-overlay-leave {
                    animation: p-component-overlay-leave-animation 150ms
                        forwards;
                }

                @keyframes p-component-overlay-enter-animation {
                    from {
                        background-color: transparent;
                    }
                    to {
                        background-color: var(--maskbg);
                    }
                }
                @keyframes p-component-overlay-leave-animation {
                    from {
                        background-color: var(--maskbg);
                    }
                    to {
                        background-color: transparent;
                    }
                }

                :root {
                    --blue-50: #f3f8fc;
                    --blue-100: #c6dcef;
                    --blue-200: #98c1e3;
                    --blue-300: #6ba5d7;
                    --blue-400: #3d8aca;
                    --blue-500: #106ebe;
                    --blue-600: #0e5ea2;
                    --blue-700: #0b4d85;
                    --blue-800: #093d69;
                    --blue-900: #062c4c;
                    --green-50: #f7fbf6;
                    --green-100: #d6ead1;
                    --green-200: #b6d9ad;
                    --green-300: #96c889;
                    --green-400: #76b765;
                    --green-500: #56a641;
                    --green-600: #498d37;
                    --green-700: #3c742e;
                    --green-800: #2f5b24;
                    --green-900: #22421a;
                    --yellow-50: #fffcf5;
                    --yellow-100: #fdefcd;
                    --yellow-200: #fbe3a6;
                    --yellow-300: #f9d67f;
                    --yellow-400: #f8ca57;
                    --yellow-500: #f6bd30;
                    --yellow-600: #d1a129;
                    --yellow-700: #ac8422;
                    --yellow-800: #87681a;
                    --yellow-900: #624c13;
                    --cyan-50: #f4fbfd;
                    --cyan-100: #ccebf5;
                    --cyan-200: #a4dbed;
                    --cyan-300: #7ccce5;
                    --cyan-400: #54bcdd;
                    --cyan-500: #2cacd5;
                    --cyan-600: #2592b5;
                    --cyan-700: #1f7895;
                    --cyan-800: #185f75;
                    --cyan-900: #124555;
                    --pink-50: #fdf4f9;
                    --pink-100: #f6cce0;
                    --pink-200: #eea3c7;
                    --pink-300: #e77aae;
                    --pink-400: #df5296;
                    --pink-500: #d8297d;
                    --pink-600: #b8236a;
                    --pink-700: #971d58;
                    --pink-800: #771745;
                    --pink-900: #561032;
                    --indigo-50: #f4f6fd;
                    --indigo-100: #ccd3f5;
                    --indigo-200: #a4b0ed;
                    --indigo-300: #7c8de5;
                    --indigo-400: #546add;
                    --indigo-500: #2c47d5;
                    --indigo-600: #253cb5;
                    --indigo-700: #1f3295;
                    --indigo-800: #182775;
                    --indigo-900: #121c55;
                    --teal-50: #f6fbfa;
                    --teal-100: #d1eae5;
                    --teal-200: #add9d1;
                    --teal-300: #89c8bd;
                    --teal-400: #65b7a8;
                    --teal-500: #41a694;
                    --teal-600: #378d7e;
                    --teal-700: #2e7468;
                    --teal-800: #245b51;
                    --teal-900: #1a423b;
                    --orange-50: #fff9f5;
                    --orange-100: #fde4cd;
                    --orange-200: #fbcfa6;
                    --orange-300: #f9ba7f;
                    --orange-400: #f8a457;
                    --orange-500: #f68f30;
                    --orange-600: #d17a29;
                    --orange-700: #ac6422;
                    --orange-800: #874f1a;
                    --orange-900: #623913;
                    --bluegray-50: #f7f8f9;
                    --bluegray-100: #dae0e3;
                    --bluegray-200: #bdc7cd;
                    --bluegray-300: #a0aeb6;
                    --bluegray-400: #8295a0;
                    --bluegray-500: #657c8a;
                    --bluegray-600: #566975;
                    --bluegray-700: #475761;
                    --bluegray-800: #38444c;
                    --bluegray-900: #283237;
                    --purple-50: #f9f8fd;
                    --purple-100: #e1dff7;
                    --purple-200: #cac5f1;
                    --purple-300: #b2abeb;
                    --purple-400: #9b92e4;
                    --purple-500: #8378de;
                    --purple-600: #6f66bd;
                    --purple-700: #5c549b;
                    --purple-800: #48427a;
                    --purple-900: #343059;
                    --red-50: #fdf4f3;
                    --red-100: #f6ccc6;
                    --red-200: #eea39a;
                    --red-300: #e77b6d;
                    --red-400: #df5240;
                    --red-500: #d82a13;
                    --red-600: #b82410;
                    --red-700: #971d0d;
                    --red-800: #77170a;
                    --red-900: #561108;
                    --primary-50: #f9fdff;
                    --primary-100: #e1f5fe;
                    --primary-200: #c9edfd;
                    --primary-300: #b1e4fc;
                    --primary-400: #99dcfb;
                    --primary-500: #81d4fa;
                    --primary-600: #6eb4d5;
                    --primary-700: #5a94af;
                    --primary-800: #47758a;
                    --primary-900: #345564;
                }

                .p-autocomplete .p-autocomplete-loader {
                    right: 0.429rem;
                }
                .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
                    right: 2.786rem;
                }
                .p-autocomplete .p-autocomplete-multiple-container {
                    padding: 0.2145rem 0.429rem;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    border-color: #81d4fa;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token {
                    padding: 0.2145rem 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token
                    input {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: #dedede;
                    padding: 0;
                    margin: 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding: 0.2145rem 0.429rem;
                    margin-right: 0.5rem;
                    background: #81d4fa;
                    color: #212529;
                    border-radius: 3px;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token
                    .p-autocomplete-token-icon {
                    margin-left: 0.5rem;
                }
                .p-autocomplete.p-invalid.p-component > .p-inputtext {
                    border-color: #e57373;
                }

                .p-autocomplete-panel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-autocomplete-panel .p-autocomplete-items {
                    padding: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item {
                    margin: 0;
                    padding: 0.429rem 0.857rem;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item:hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item-group {
                    margin: 0;
                    padding: 0.857rem;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                }

                .p-calendar.p-invalid.p-component > .p-inputtext {
                    border-color: #e57373;
                }

                .p-datepicker {
                    padding: 0.857rem;
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #4b4b4b;
                    border-radius: 3px;
                }
                .p-datepicker:not(.p-datepicker-inline) {
                    background: #323232;
                    border: 1px solid #191919;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
                    background: #252525;
                }
                .p-datepicker .p-datepicker-header {
                    padding: 0.5rem;
                    color: #dedede;
                    background: #323232;
                    font-weight: 700;
                    margin: 0;
                    border-bottom: 0 none;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev,
                .p-datepicker .p-datepicker-header .p-datepicker-next {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-prev:enabled:hover,
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-next:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
                .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-title {
                    line-height: 2rem;
                }
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-title
                    .p-datepicker-year,
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-title
                    .p-datepicker-month {
                    color: #dedede;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    font-weight: 700;
                    padding: 0.5rem;
                }
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-title
                    .p-datepicker-year:enabled:hover,
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-title
                    .p-datepicker-month:enabled:hover {
                    color: #81d4fa;
                }
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-title
                    .p-datepicker-month {
                    margin-right: 0.5rem;
                }
                .p-datepicker table {
                    font-size: 1rem;
                    margin: 0.857rem 0;
                }
                .p-datepicker table th {
                    padding: 0.5rem;
                }
                .p-datepicker table th > span {
                    width: 2.5rem;
                    height: 2.5rem;
                }
                .p-datepicker table td {
                    padding: 0.5rem;
                }
                .p-datepicker table td > span {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border: 1px solid transparent;
                }
                .p-datepicker table td > span.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-datepicker table td > span:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-datepicker table td.p-datepicker-today > span {
                    background: #29b6f6;
                    color: #212529;
                    border-color: transparent;
                }
                .p-datepicker table td.p-datepicker-today > span.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-datepicker .p-datepicker-buttonbar {
                    padding: 0.857rem 0 0.429rem 0;
                    border-top: 1px solid #4b4b4b;
                }
                .p-datepicker .p-datepicker-buttonbar .p-button {
                    width: auto;
                }
                .p-datepicker .p-timepicker {
                    border-top: 1px solid #4b4b4b;
                    padding: 0.857rem 0 0.429rem 0;
                }
                .p-datepicker .p-timepicker button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datepicker .p-timepicker button:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-datepicker .p-timepicker button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-datepicker .p-timepicker button:last-child {
                    margin-top: 0.2em;
                }
                .p-datepicker .p-timepicker span {
                    font-size: 1.286rem;
                }
                .p-datepicker .p-timepicker > div {
                    padding: 0 0.429rem;
                }
                .p-datepicker.p-datepicker-timeonly .p-timepicker {
                    border-top: 0 none;
                }
                .p-datepicker .p-monthpicker {
                    margin: 0.857rem 0;
                }
                .p-datepicker .p-monthpicker .p-monthpicker-month {
                    padding: 0.5rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-datepicker .p-yearpicker {
                    margin: 0.857rem 0;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year {
                    padding: 0.5rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
                    border-left: 1px solid #4b4b4b;
                    padding-right: 0.857rem;
                    padding-left: 0.857rem;
                    padding-top: 0;
                    padding-bottom: 0;
                }
                .p-datepicker.p-datepicker-multiple-month
                    .p-datepicker-group:first-child {
                    padding-left: 0;
                }
                .p-datepicker.p-datepicker-multiple-month
                    .p-datepicker-group:last-child {
                    padding-right: 0;
                    border-left: 0 none;
                }
                .p-datepicker:not(.p-disabled)
                    table
                    td
                    span:not(.p-highlight):not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-datepicker:not(.p-disabled)
                    table
                    td
                    span:not(.p-highlight):not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #4c4c4c;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #4c4c4c;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                @media screen and (max-width: 769px) {
                    .p-datepicker table th,
                    .p-datepicker table td {
                        padding: 0;
                    }
                }
                .p-cascadeselect {
                    background: #191919;
                    border: 1px solid #4b4b4b;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-cascadeselect:not(.p-disabled):hover {
                    border-color: #81d4fa;
                }
                .p-cascadeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-cascadeselect .p-cascadeselect-label {
                    background: transparent;
                    border: 0 none;
                    padding: 0.429rem 0.429rem;
                }
                .p-cascadeselect .p-cascadeselect-label.p-placeholder {
                    color: #9b9b9b;
                }
                .p-cascadeselect .p-cascadeselect-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-cascadeselect .p-cascadeselect-trigger {
                    background: transparent;
                    color: #888888;
                    width: 2.357rem;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .p-cascadeselect.p-invalid.p-component {
                    border-color: #e57373;
                }

                .p-cascadeselect-panel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-cascadeselect-panel .p-cascadeselect-items {
                    padding: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item {
                    margin: 0;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content {
                    padding: 0.429rem 0.857rem;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-group-icon {
                    font-size: 0.875rem;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-group-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }

                .p-input-filled .p-cascadeselect {
                    background: #4b4b4b;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
                    background-color: #4b4b4b;
                }

                .p-checkbox {
                    width: 20px;
                    height: 20px;
                }
                .p-checkbox .p-checkbox-box {
                    border: 1px solid #4b4b4b;
                    background: #191919;
                    width: 20px;
                    height: 20px;
                    color: #dedede;
                    border-radius: 3px;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon {
                    transition-duration: 0.2s;
                    color: #212529;
                    font-size: 14px;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
                    width: 14px;
                    height: 14px;
                }
                .p-checkbox .p-checkbox-box.p-highlight {
                    border-color: #81d4fa;
                    background: #81d4fa;
                }
                .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
                    border-color: #29b6f6;
                    background: #29b6f6;
                    color: #212529;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                    border-color: #81d4fa;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    border-color: #29b6f6;
                    background: #29b6f6;
                    color: #212529;
                }
                .p-checkbox.p-invalid > .p-checkbox-box {
                    border-color: #e57373;
                }

                .p-input-filled .p-checkbox .p-checkbox-box {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
                    background: #81d4fa;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box:hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    background: #29b6f6;
                }

                .p-highlight .p-checkbox .p-checkbox-box {
                    border-color: #212529;
                }

                .p-chips .p-chips-multiple-container {
                    padding: 0.2145rem 0.429rem;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                    border-color: #81d4fa;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-chips .p-chips-multiple-container .p-chips-token {
                    padding: 0.2145rem 0.429rem;
                    margin-right: 0.5rem;
                    background: #4b4b4b;
                    color: #dedede;
                    border-radius: 16px;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-token
                    .p-chips-token-icon {
                    margin-left: 0.5rem;
                }
                .p-chips .p-chips-multiple-container .p-chips-input-token {
                    padding: 0.2145rem 0;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-input-token
                    input {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: #dedede;
                    padding: 0;
                    margin: 0;
                }
                .p-chips.p-invalid.p-component > .p-inputtext {
                    border-color: #e57373;
                }

                .p-colorpicker-preview {
                    width: 2rem;
                    height: 2rem;
                }

                .p-colorpicker-panel {
                    background: #323232;
                    border: 1px solid #191919;
                }
                .p-colorpicker-panel .p-colorpicker-color-handle,
                .p-colorpicker-panel .p-colorpicker-hue-handle {
                    border-color: #ffffff;
                }

                .p-colorpicker-overlay-panel {
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }

                .p-dropdown {
                    background: #191919;
                    border: 1px solid #4b4b4b;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-dropdown:not(.p-disabled):hover {
                    border-color: #81d4fa;
                }
                .p-dropdown:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-dropdown.p-dropdown-clearable .p-dropdown-label {
                    padding-right: 1.429rem;
                }
                .p-dropdown .p-dropdown-label {
                    background: transparent;
                    border: 0 none;
                }
                .p-dropdown .p-dropdown-label.p-placeholder {
                    color: #9b9b9b;
                }
                .p-dropdown .p-dropdown-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-dropdown .p-dropdown-trigger {
                    background: transparent;
                    color: #888888;
                    width: 2.357rem;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .p-dropdown .p-dropdown-clear-icon {
                    color: #888888;
                    right: 2.357rem;
                }
                .p-dropdown.p-invalid.p-component {
                    border-color: #e57373;
                }

                .p-dropdown-panel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-dropdown-panel .p-dropdown-header {
                    padding: 0.429rem 0.857rem;
                    border-bottom: 1px solid #191919;
                    color: #dedede;
                    background: #252525;
                    margin: 0;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
                    padding-right: 1.429rem;
                    margin-right: -1.429rem;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-dropdown-panel
                    .p-dropdown-header
                    .p-dropdown-clearable-filter
                    .p-dropdown-filter {
                    padding-right: 2.858rem;
                    margin-right: -2.858rem;
                }
                .p-dropdown-panel
                    .p-dropdown-header
                    .p-dropdown-clearable-filter
                    .p-dropdown-filter-clear-icon {
                    right: 1.858rem;
                }
                .p-dropdown-panel .p-dropdown-items {
                    padding: 0;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
                    margin: 0;
                    padding: 0.429rem 0.857rem;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
                    margin: 0;
                    padding: 0.857rem;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
                    padding: 0.429rem 0.857rem;
                    color: #dedede;
                    background: transparent;
                }

                .p-input-filled .p-dropdown {
                    background: #4b4b4b;
                }
                .p-input-filled .p-dropdown:not(.p-disabled):hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
                    background-color: #4b4b4b;
                }
                .p-input-filled
                    .p-dropdown:not(.p-disabled).p-focus
                    .p-inputtext {
                    background-color: transparent;
                }

                .p-editor-container .p-editor-toolbar {
                    background: #191919;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-editor-container .p-editor-toolbar.ql-snow {
                    border: 1px solid #191919;
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
                    stroke: #888888;
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
                    fill: #888888;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label {
                    border: 0 none;
                    color: #888888;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover {
                    color: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-stroke {
                    stroke: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-fill {
                    fill: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label {
                    color: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-stroke {
                    stroke: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-fill {
                    fill: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options {
                    background: #323232;
                    border: 1px solid #191919;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    border-radius: 3px;
                    padding: 0;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item {
                    color: #dedede;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item:hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded:not(.ql-icon-picker)
                    .ql-picker-item {
                    padding: 0.429rem 0.857rem;
                }
                .p-editor-container .p-editor-content {
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-editor-container .p-editor-content.ql-snow {
                    border: 1px solid #191919;
                }
                .p-editor-container .p-editor-content .ql-editor {
                    background: #191919;
                    color: #dedede;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover,
                .p-editor-container .ql-snow.ql-toolbar button:focus {
                    color: #dedede;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button:focus
                    .ql-stroke {
                    stroke: #dedede;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
                .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
                    fill: #dedede;
                }
                .p-editor-container .ql-snow.ql-toolbar button.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected {
                    color: #81d4fa;
                }
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button.ql-active
                    .ql-stroke,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active
                    .ql-stroke,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected
                    .ql-stroke {
                    stroke: #81d4fa;
                }
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button.ql-active
                    .ql-fill,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active
                    .ql-fill,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected
                    .ql-fill {
                    fill: #81d4fa;
                }
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button.ql-active
                    .ql-picker-label,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active
                    .ql-picker-label,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected
                    .ql-picker-label {
                    color: #81d4fa;
                }

                .p-inputgroup-addon {
                    background: #252525;
                    color: #888888;
                    border-top: 1px solid #4b4b4b;
                    border-left: 1px solid #4b4b4b;
                    border-bottom: 1px solid #4b4b4b;
                    padding: 0.429rem 0.429rem;
                    min-width: 2.357rem;
                }
                .p-inputgroup-addon:last-child {
                    border-right: 1px solid #4b4b4b;
                }

                .p-inputgroup > .p-component,
                .p-inputgroup > .p-inputwrapper > .p-inputtext,
                .p-inputgroup > .p-float-label > .p-component {
                    border-radius: 0;
                    margin: 0;
                }
                .p-inputgroup > .p-component + .p-inputgroup-addon,
                .p-inputgroup
                    > .p-inputwrapper
                    > .p-inputtext
                    + .p-inputgroup-addon,
                .p-inputgroup
                    > .p-float-label
                    > .p-component
                    + .p-inputgroup-addon {
                    border-left: 0 none;
                }
                .p-inputgroup > .p-component:focus,
                .p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
                .p-inputgroup > .p-float-label > .p-component:focus {
                    z-index: 1;
                }
                .p-inputgroup > .p-component:focus ~ label,
                .p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
                .p-inputgroup > .p-float-label > .p-component:focus ~ label {
                    z-index: 1;
                }

                .p-inputgroup-addon:first-child,
                .p-inputgroup button:first-child,
                .p-inputgroup input:first-child,
                .p-inputgroup > .p-inputwrapper:first-child,
                .p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }

                .p-inputgroup .p-float-label:first-child input {
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }

                .p-inputgroup-addon:last-child,
                .p-inputgroup button:last-child,
                .p-inputgroup input:last-child,
                .p-inputgroup > .p-inputwrapper:last-child,
                .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }

                .p-inputgroup .p-float-label:last-child input {
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }

                .p-fluid .p-inputgroup .p-button {
                    width: auto;
                }
                .p-fluid .p-inputgroup .p-button.p-button-icon-only {
                    width: 2.357rem;
                }

                .p-inputnumber.p-invalid.p-component > .p-inputtext {
                    border-color: #e57373;
                }

                .p-inputswitch {
                    width: 3rem;
                    height: 1.75rem;
                }
                .p-inputswitch .p-inputswitch-slider {
                    background: #4b4b4b;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 30px;
                }
                .p-inputswitch .p-inputswitch-slider:before {
                    background: #323232;
                    width: 1.25rem;
                    height: 1.25rem;
                    left: 0.25rem;
                    margin-top: -0.625rem;
                    border-radius: 50%;
                    transition-duration: 0.2s;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    transform: translateX(1.25rem);
                }
                .p-inputswitch.p-focus .p-inputswitch-slider {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
                    background: #4b4b4b;
                }
                .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
                    background: #81d4fa;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    background: #323232;
                }
                .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
                    .p-inputswitch-slider {
                    background: #4fc3f7;
                }
                .p-inputswitch.p-invalid .p-inputswitch-slider {
                    border-color: #e57373;
                }

                .p-inputtext {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: #dedede;
                    background: #191919;
                    padding: 0.429rem 0.429rem;
                    border: 1px solid #4b4b4b;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    appearance: none;
                    border-radius: 3px;
                }
                .p-inputtext:enabled:hover {
                    border-color: #81d4fa;
                }
                .p-inputtext:enabled:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-inputtext.p-invalid.p-component {
                    border-color: #e57373;
                }
                .p-inputtext.p-inputtext-sm {
                    font-size: 0.875rem;
                    padding: 0.375375rem 0.375375rem;
                }
                .p-inputtext.p-inputtext-lg {
                    font-size: 1.25rem;
                    padding: 0.53625rem 0.53625rem;
                }

                .p-float-label > label {
                    left: 0.429rem;
                    color: #9b9b9b;
                    transition-duration: 0.2s;
                }

                .p-float-label > label.p-error {
                    color: #e57373;
                }

                .p-input-icon-left > i:first-of-type,
                .p-input-icon-left > svg:first-of-type,
                .p-input-icon-left > .p-input-prefix {
                    left: 0.429rem;
                    color: #888888;
                }

                .p-input-icon-left > .p-inputtext {
                    padding-left: 1.858rem;
                }

                .p-input-icon-left.p-float-label > label {
                    left: 1.858rem;
                }

                .p-input-icon-right > i:last-of-type,
                .p-input-icon-right > svg:last-of-type,
                .p-input-icon-right > .p-input-suffix {
                    right: 0.429rem;
                    color: #888888;
                }

                .p-input-icon-right > .p-inputtext {
                    padding-right: 1.858rem;
                }

                ::-webkit-input-placeholder {
                    color: #9b9b9b;
                }

                :-moz-placeholder {
                    color: #9b9b9b;
                }

                ::-moz-placeholder {
                    color: #9b9b9b;
                }

                :-ms-input-placeholder {
                    color: #9b9b9b;
                }

                .p-input-filled .p-inputtext {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-inputtext:enabled:hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-inputtext:enabled:focus {
                    background-color: #4b4b4b;
                }

                .p-inputtext-sm .p-inputtext {
                    font-size: 0.875rem;
                    padding: 0.375375rem 0.375375rem;
                }

                .p-inputtext-lg .p-inputtext {
                    font-size: 1.25rem;
                    padding: 0.53625rem 0.53625rem;
                }

                .p-listbox {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #4b4b4b;
                    border-radius: 3px;
                }
                .p-listbox .p-listbox-header {
                    padding: 0.429rem 0.857rem;
                    border-bottom: 1px solid #191919;
                    color: #dedede;
                    background: #252525;
                    margin: 0;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-listbox .p-listbox-header .p-listbox-filter {
                    padding-right: 1.429rem;
                }
                .p-listbox .p-listbox-header .p-listbox-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-listbox .p-listbox-list {
                    padding: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item {
                    margin: 0;
                    padding: 0.429rem 0.857rem;
                    border: 0 none;
                    color: #dedede;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-listbox .p-listbox-list .p-listbox-item-group {
                    margin: 0;
                    padding: 0.857rem;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                }
                .p-listbox .p-listbox-list .p-listbox-empty-message {
                    padding: 0.429rem 0.857rem;
                    color: #dedede;
                    background: transparent;
                }
                .p-listbox:not(.p-disabled)
                    .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-listbox.p-invalid {
                    border-color: #e57373;
                }

                .p-mention-panel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-mention-panel .p-mention-items {
                    padding: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item {
                    margin: 0;
                    padding: 0.429rem 0.857rem;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item:hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }

                .p-multiselect {
                    background: #191919;
                    border: 1px solid #4b4b4b;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-multiselect:not(.p-disabled):hover {
                    border-color: #81d4fa;
                }
                .p-multiselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-multiselect.p-multiselect-clearable .p-multiselect-label {
                    padding-right: 1.429rem;
                }
                .p-multiselect .p-multiselect-label {
                    padding: 0.429rem 0.429rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-multiselect .p-multiselect-label.p-placeholder {
                    color: #9b9b9b;
                }
                .p-multiselect.p-multiselect-chip .p-multiselect-token {
                    padding: 0.2145rem 0.429rem;
                    margin-right: 0.5rem;
                    background: #4b4b4b;
                    color: #dedede;
                    border-radius: 16px;
                }
                .p-multiselect.p-multiselect-chip
                    .p-multiselect-token
                    .p-multiselect-token-icon {
                    margin-left: 0.5rem;
                }
                .p-multiselect .p-multiselect-trigger {
                    background: transparent;
                    color: #888888;
                    width: 2.357rem;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .p-multiselect .p-multiselect-clear-icon {
                    color: #888888;
                    right: 2.357rem;
                }
                .p-multiselect.p-invalid.p-component {
                    border-color: #e57373;
                }

                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label {
                    padding: 0.2145rem 0.429rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label.p-multiselect-items-label {
                    padding: 0.429rem 0.429rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable
                    .p-multiselect-label {
                    padding-right: 1.429rem;
                }

                .p-multiselect-panel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-multiselect-panel .p-multiselect-header {
                    padding: 0.429rem 0.857rem;
                    border-bottom: 1px solid #191919;
                    color: #dedede;
                    background: #252525;
                    margin: 0;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-filter-container {
                    margin: 0 0.5rem;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-filter-container
                    .p-inputtext {
                    padding-right: 1.429rem;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-filter-container
                    .p-multiselect-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-multiselect-panel .p-multiselect-items {
                    padding: 0;
                }
                .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
                    margin: 0;
                    padding: 0.429rem 0.857rem;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item
                    .p-checkbox {
                    margin-right: 0.5rem;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item-group {
                    margin: 0;
                    padding: 0.857rem;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-empty-message {
                    padding: 0.429rem 0.857rem;
                    color: #dedede;
                    background: transparent;
                }

                .p-input-filled .p-multiselect {
                    background: #4b4b4b;
                }
                .p-input-filled .p-multiselect:not(.p-disabled):hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
                    background-color: #4b4b4b;
                }

                .p-password.p-invalid.p-component > .p-inputtext {
                    border-color: #e57373;
                }

                .p-password-panel {
                    padding: 0.571rem 1rem;
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    border-radius: 3px;
                }
                .p-password-panel .p-password-meter {
                    margin-bottom: 0.5rem;
                    background: #eaeaea;
                }
                .p-password-panel .p-password-meter .p-password-strength.weak {
                    background: #e57373;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.medium {
                    background: #ffb74d;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.strong {
                    background: #aed581;
                }

                .p-radiobutton {
                    width: 20px;
                    height: 20px;
                }
                .p-radiobutton .p-radiobutton-box {
                    border: 1px solid #4b4b4b;
                    background: #191919;
                    width: 20px;
                    height: 20px;
                    color: #dedede;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    border-color: #81d4fa;
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
                    width: 12px;
                    height: 12px;
                    transition-duration: 0.2s;
                    background-color: #212529;
                }
                .p-radiobutton .p-radiobutton-box.p-highlight {
                    border-color: #81d4fa;
                    background: #81d4fa;
                }
                .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    border-color: #29b6f6;
                    background: #29b6f6;
                    color: #212529;
                }
                .p-radiobutton.p-invalid > .p-radiobutton-box {
                    border-color: #e57373;
                }
                .p-radiobutton:focus {
                    outline: 0 none;
                }

                .p-input-filled .p-radiobutton .p-radiobutton-box {
                    background-color: #4b4b4b;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
                    background: #81d4fa;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    background: #29b6f6;
                }

                .p-highlight .p-radiobutton .p-radiobutton-box {
                    border-color: #212529;
                }

                .p-rating {
                    gap: 0.5rem;
                }
                .p-rating .p-rating-item .p-rating-icon {
                    color: #dedede;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    font-size: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-icon {
                    width: 1.143rem;
                    height: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
                    color: #e4018d;
                }
                .p-rating .p-rating-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
                    color: #81d4fa;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon {
                    color: #81d4fa;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon.p-rating-cancel {
                    color: #b5019f;
                }

                .p-highlight
                    .p-rating
                    .p-rating-item.p-rating-item-active
                    .p-rating-icon {
                    color: #212529;
                }

                .p-selectbutton .p-button {
                    background: #252525;
                    border: 1px solid #252525;
                    color: #dedede;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-selectbutton .p-button .p-button-icon-left,
                .p-selectbutton .p-button .p-button-icon-right {
                    color: #888888;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover {
                    background: #4c4c4c;
                    border-color: #4c4c4c;
                    color: #dedede;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-left,
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-right {
                    color: #dedede;
                }
                .p-selectbutton .p-button.p-highlight {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }
                .p-selectbutton .p-button.p-highlight .p-button-icon-left,
                .p-selectbutton .p-button.p-highlight .p-button-icon-right {
                    color: #212529;
                }
                .p-selectbutton .p-button.p-highlight:hover {
                    background: #4fc3f7;
                    border-color: #4fc3f7;
                    color: #212529;
                }
                .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
                .p-selectbutton
                    .p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #212529;
                }
                .p-selectbutton.p-invalid > .p-button {
                    border-color: #e57373;
                }

                .p-slider {
                    background: #4b4b4b;
                    border: 0 none;
                    border-radius: 3px;
                }
                .p-slider.p-slider-horizontal {
                    height: 0.286rem;
                }
                .p-slider.p-slider-horizontal .p-slider-handle {
                    margin-top: -0.5715rem;
                    margin-left: -0.5715rem;
                }
                .p-slider.p-slider-vertical {
                    width: 0.286rem;
                }
                .p-slider.p-slider-vertical .p-slider-handle {
                    margin-left: -0.5715rem;
                    margin-bottom: -0.5715rem;
                }
                .p-slider .p-slider-handle {
                    height: 1.143rem;
                    width: 1.143rem;
                    background: #4c4c4c;
                    border: 2px solid #81d4fa;
                    border-radius: 100%;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-slider .p-slider-handle:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-slider .p-slider-range {
                    background: #81d4fa;
                }
                .p-slider:not(.p-disabled) .p-slider-handle:hover {
                    background: #81d4fa;
                    border-color: #81d4fa;
                }

                .p-treeselect {
                    background: #191919;
                    border: 1px solid #4b4b4b;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-treeselect:not(.p-disabled):hover {
                    border-color: #81d4fa;
                }
                .p-treeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    border-color: #81d4fa;
                }
                .p-treeselect .p-treeselect-label {
                    padding: 0.429rem 0.429rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-treeselect .p-treeselect-label.p-placeholder {
                    color: #9b9b9b;
                }
                .p-treeselect.p-treeselect-chip .p-treeselect-token {
                    padding: 0.2145rem 0.429rem;
                    margin-right: 0.5rem;
                    background: #4b4b4b;
                    color: #dedede;
                    border-radius: 16px;
                }
                .p-treeselect .p-treeselect-trigger {
                    background: transparent;
                    color: #888888;
                    width: 2.357rem;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .p-treeselect.p-invalid.p-component {
                    border-color: #e57373;
                }

                .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-label {
                    padding: 0.2145rem 0.429rem;
                }

                .p-treeselect-panel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-treeselect-panel .p-treeselect-header {
                    padding: 0.429rem 0.857rem;
                    border-bottom: 1px solid #191919;
                    color: #dedede;
                    background: #252525;
                    margin: 0;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container {
                    margin-right: 0.5rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container
                    .p-treeselect-filter {
                    padding-right: 1.429rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container
                    .p-treeselect-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container.p-treeselect-clearable-filter
                    .p-treeselect-filter {
                    padding-right: 2.858rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container.p-treeselect-clearable-filter
                    .p-treeselect-filter-clear-icon {
                    right: 1.858rem;
                }
                .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
                    border: 0 none;
                }
                .p-treeselect-panel
                    .p-treeselect-items-wrapper
                    .p-treeselect-empty-message {
                    padding: 0.429rem 0.857rem;
                    color: #dedede;
                    background: transparent;
                }

                .p-input-filled .p-treeselect {
                    background: #4b4b4b;
                }
                .p-input-filled .p-treeselect:not(.p-disabled):hover {
                    background-color: #4b4b4b;
                }
                .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
                    background-color: #4b4b4b;
                }

                .p-togglebutton.p-button {
                    background: #252525;
                    border: 1px solid #252525;
                    color: #dedede;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-togglebutton.p-button .p-button-icon-left,
                .p-togglebutton.p-button .p-button-icon-right {
                    color: #888888;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #4c4c4c;
                    border-color: #4c4c4c;
                    color: #dedede;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-left,
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-right {
                    color: #dedede;
                }
                .p-togglebutton.p-button.p-highlight {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }
                .p-togglebutton.p-button.p-highlight .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight .p-button-icon-right {
                    color: #212529;
                }
                .p-togglebutton.p-button.p-highlight:hover {
                    background: #4fc3f7;
                    border-color: #4fc3f7;
                    color: #212529;
                }
                .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #212529;
                }
                .p-togglebutton.p-button.p-invalid > .p-button {
                    border-color: #e57373;
                }

                .p-button {
                    color: #212529;
                    background: #81d4fa;
                    border: 1px solid #81d4fa;
                    padding: 0.429rem 1rem;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-button:enabled:hover,
                .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #4fc3f7;
                    color: #212529;
                    border-color: #4fc3f7;
                }
                .p-button:enabled:active,
                .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #29b6f6;
                    color: #212529;
                    border-color: #29b6f6;
                }
                .p-button.p-button-outlined {
                    background-color: transparent;
                    color: #81d4fa;
                    border: 1px solid;
                }
                .p-button.p-button-outlined:enabled:hover,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(129, 212, 250, 0.04);
                    color: #81d4fa;
                    border: 1px solid;
                }
                .p-button.p-button-outlined:enabled:active,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(129, 212, 250, 0.16);
                    color: #81d4fa;
                    border: 1px solid;
                }
                .p-button.p-button-outlined.p-button-plain {
                    color: #888888;
                    border-color: #888888;
                }
                .p-button.p-button-outlined.p-button-plain:enabled:hover,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):hover {
                    background: #4c4c4c;
                    color: #888888;
                }
                .p-button.p-button-outlined.p-button-plain:enabled:active,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):active {
                    background: #3c3c3c;
                    color: #888888;
                }
                .p-button.p-button-text {
                    background-color: transparent;
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:hover,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(129, 212, 250, 0.04);
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:active,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(129, 212, 250, 0.16);
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-button.p-button-text.p-button-plain {
                    color: #888888;
                }
                .p-button.p-button-text.p-button-plain:enabled:hover,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #4c4c4c;
                    color: #888888;
                }
                .p-button.p-button-text.p-button-plain:enabled:active,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #3c3c3c;
                    color: #888888;
                }
                .p-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-button .p-button-label {
                    transition-duration: 0.2s;
                }
                .p-button .p-button-icon-left {
                    margin-right: 0.5rem;
                }
                .p-button .p-button-icon-right {
                    margin-left: 0.5rem;
                }
                .p-button .p-button-icon-bottom {
                    margin-top: 0.5rem;
                }
                .p-button .p-button-icon-top {
                    margin-bottom: 0.5rem;
                }
                .p-button .p-badge {
                    margin-left: 0.5rem;
                    min-width: 1rem;
                    height: 1rem;
                    line-height: 1rem;
                    color: #81d4fa;
                    background-color: #212529;
                }
                .p-button.p-button-raised {
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                }
                .p-button.p-button-rounded {
                    border-radius: 2rem;
                }
                .p-button.p-button-icon-only {
                    width: 2.357rem;
                    padding: 0.429rem 0;
                }
                .p-button.p-button-icon-only .p-button-icon-left,
                .p-button.p-button-icon-only .p-button-icon-right {
                    margin: 0;
                }
                .p-button.p-button-icon-only.p-button-rounded {
                    border-radius: 50%;
                    height: 2.357rem;
                }
                .p-button.p-button-sm {
                    font-size: 0.875rem;
                    padding: 0.375375rem 0.875rem;
                }
                .p-button.p-button-sm .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-button.p-button-lg {
                    font-size: 1.25rem;
                    padding: 0.53625rem 1.25rem;
                }
                .p-button.p-button-lg .p-button-icon {
                    font-size: 1.25rem;
                }
                .p-button.p-button-loading-label-only.p-button-loading-left
                    .p-button-label {
                    margin-left: 0.5rem;
                }
                .p-button.p-button-loading-label-only.p-button-loading-right
                    .p-button-label {
                    margin-right: 0.5rem;
                }
                .p-button.p-button-loading-label-only.p-button-loading-top
                    .p-button-label {
                    margin-top: 0.5rem;
                }
                .p-button.p-button-loading-label-only.p-button-loading-bottom
                    .p-button-label {
                    margin-bottom: 0.5rem;
                }
                .p-button.p-button-loading-label-only .p-button-loading-icon {
                    margin: 0;
                }

                .p-fluid .p-button {
                    width: 100%;
                }
                .p-fluid .p-button-icon-only {
                    width: 2.357rem;
                }
                .p-fluid .p-buttonset {
                    display: flex;
                }
                .p-fluid .p-buttonset .p-button {
                    flex: 1;
                }

                .p-button.p-button-secondary,
                .p-buttonset.p-button-secondary > .p-button,
                .p-splitbutton.p-button-secondary > .p-button,
                .p-fileupload-choose.p-button-secondary {
                    color: #121212;
                    background: #b0bec5;
                    border: 1px solid #b0bec5;
                }
                .p-button.p-button-secondary:enabled:hover,
                .p-button.p-button-secondary:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-secondary > .p-button:enabled:hover,
                .p-buttonset.p-button-secondary
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-splitbutton.p-button-secondary > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-fileupload-choose.p-button-secondary:enabled:hover,
                .p-fileupload-choose.p-button-secondary:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #90a4ae;
                    color: #121212;
                    border-color: #90a4ae;
                }
                .p-button.p-button-secondary:enabled:focus,
                .p-button.p-button-secondary:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-secondary > .p-button:enabled:focus,
                .p-buttonset.p-button-secondary
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-secondary > .p-button:enabled:focus,
                .p-splitbutton.p-button-secondary
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-secondary:enabled:focus,
                .p-fileupload-choose.p-button-secondary:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 0 0 0.1rem #cfd8dc;
                }
                .p-button.p-button-secondary:enabled:active,
                .p-button.p-button-secondary:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-secondary > .p-button:enabled:active,
                .p-buttonset.p-button-secondary
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-secondary > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-secondary:enabled:active,
                .p-fileupload-choose.p-button-secondary:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #78909c;
                    color: #121212;
                    border-color: #78909c;
                }
                .p-button.p-button-secondary.p-button-outlined,
                .p-buttonset.p-button-secondary > .p-button.p-button-outlined,
                .p-splitbutton.p-button-secondary > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-secondary.p-button-outlined {
                    background-color: transparent;
                    color: #b0bec5;
                    border: 1px solid;
                }
                .p-button.p-button-secondary.p-button-outlined:enabled:hover,
                .p-button.p-button-secondary.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:enabled:hover,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:enabled:hover,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:hover,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(176, 190, 197, 0.04);
                    color: #b0bec5;
                    border: 1px solid;
                }
                .p-button.p-button-secondary.p-button-outlined:enabled:active,
                .p-button.p-button-secondary.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(176, 190, 197, 0.16);
                    color: #b0bec5;
                    border: 1px solid;
                }
                .p-button.p-button-secondary.p-button-text,
                .p-buttonset.p-button-secondary > .p-button.p-button-text,
                .p-splitbutton.p-button-secondary > .p-button.p-button-text,
                .p-fileupload-choose.p-button-secondary.p-button-text {
                    background-color: transparent;
                    color: #b0bec5;
                    border-color: transparent;
                }
                .p-button.p-button-secondary.p-button-text:enabled:hover,
                .p-button.p-button-secondary.p-button-text:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:enabled:hover,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:enabled:hover,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-secondary.p-button-text:enabled:hover,
                .p-fileupload-choose.p-button-secondary.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(176, 190, 197, 0.04);
                    border-color: transparent;
                    color: #b0bec5;
                }
                .p-button.p-button-secondary.p-button-text:enabled:active,
                .p-button.p-button-secondary.p-button-text:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-secondary.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-secondary.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(176, 190, 197, 0.16);
                    border-color: transparent;
                    color: #b0bec5;
                }

                .p-button.p-button-info,
                .p-buttonset.p-button-info > .p-button,
                .p-splitbutton.p-button-info > .p-button,
                .p-fileupload-choose.p-button-info {
                    color: #212529;
                    background: #4fc3f7;
                    border: 1px solid #4fc3f7;
                }
                .p-button.p-button-info:enabled:hover,
                .p-button.p-button-info:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-info > .p-button:enabled:hover,
                .p-buttonset.p-button-info
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-splitbutton.p-button-info > .p-button:enabled:hover,
                .p-splitbutton.p-button-info
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-fileupload-choose.p-button-info:enabled:hover,
                .p-fileupload-choose.p-button-info:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #29b6f6;
                    color: #212529;
                    border-color: #29b6f6;
                }
                .p-button.p-button-info:enabled:focus,
                .p-button.p-button-info:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-info > .p-button:enabled:focus,
                .p-buttonset.p-button-info
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-info > .p-button:enabled:focus,
                .p-splitbutton.p-button-info
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-info:enabled:focus,
                .p-fileupload-choose.p-button-info:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 0 0 0.1rem #e1f5fe;
                }
                .p-button.p-button-info:enabled:active,
                .p-button.p-button-info:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-info > .p-button:enabled:active,
                .p-buttonset.p-button-info
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-info > .p-button:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-info:enabled:active,
                .p-fileupload-choose.p-button-info:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #03a9f4;
                    color: #212529;
                    border-color: #03a9f4;
                }
                .p-button.p-button-info.p-button-outlined,
                .p-buttonset.p-button-info > .p-button.p-button-outlined,
                .p-splitbutton.p-button-info > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-info.p-button-outlined {
                    background-color: transparent;
                    color: #4fc3f7;
                    border: 1px solid;
                }
                .p-button.p-button-info.p-button-outlined:enabled:hover,
                .p-button.p-button-info.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:enabled:hover,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:enabled:hover,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-info.p-button-outlined:enabled:hover,
                .p-fileupload-choose.p-button-info.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(79, 195, 247, 0.04);
                    color: #4fc3f7;
                    border: 1px solid;
                }
                .p-button.p-button-info.p-button-outlined:enabled:active,
                .p-button.p-button-info.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-info.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-info.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(79, 195, 247, 0.16);
                    color: #4fc3f7;
                    border: 1px solid;
                }
                .p-button.p-button-info.p-button-text,
                .p-buttonset.p-button-info > .p-button.p-button-text,
                .p-splitbutton.p-button-info > .p-button.p-button-text,
                .p-fileupload-choose.p-button-info.p-button-text {
                    background-color: transparent;
                    color: #4fc3f7;
                    border-color: transparent;
                }
                .p-button.p-button-info.p-button-text:enabled:hover,
                .p-button.p-button-info.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:enabled:hover,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:enabled:hover,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-info.p-button-text:enabled:hover,
                .p-fileupload-choose.p-button-info.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(79, 195, 247, 0.04);
                    border-color: transparent;
                    color: #4fc3f7;
                }
                .p-button.p-button-info.p-button-text:enabled:active,
                .p-button.p-button-info.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-info.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-info.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(79, 195, 247, 0.16);
                    border-color: transparent;
                    color: #4fc3f7;
                }

                .p-button.p-button-success,
                .p-buttonset.p-button-success > .p-button,
                .p-splitbutton.p-button-success > .p-button,
                .p-fileupload-choose.p-button-success {
                    color: #212529;
                    background: #aed581;
                    border: 1px solid #aed581;
                }
                .p-button.p-button-success:enabled:hover,
                .p-button.p-button-success:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-success > .p-button:enabled:hover,
                .p-buttonset.p-button-success
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-splitbutton.p-button-success > .p-button:enabled:hover,
                .p-splitbutton.p-button-success
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-fileupload-choose.p-button-success:enabled:hover,
                .p-fileupload-choose.p-button-success:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #9ccc65;
                    color: #212529;
                    border-color: #9ccc65;
                }
                .p-button.p-button-success:enabled:focus,
                .p-button.p-button-success:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-success > .p-button:enabled:focus,
                .p-buttonset.p-button-success
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-success > .p-button:enabled:focus,
                .p-splitbutton.p-button-success
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-success:enabled:focus,
                .p-fileupload-choose.p-button-success:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 0 0 0.1rem #f1f8e9;
                }
                .p-button.p-button-success:enabled:active,
                .p-button.p-button-success:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-success > .p-button:enabled:active,
                .p-buttonset.p-button-success
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-success > .p-button:enabled:active,
                .p-splitbutton.p-button-success
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-success:enabled:active,
                .p-fileupload-choose.p-button-success:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #8bc34a;
                    color: #212529;
                    border-color: #8bc34a;
                }
                .p-button.p-button-success.p-button-outlined,
                .p-buttonset.p-button-success > .p-button.p-button-outlined,
                .p-splitbutton.p-button-success > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-success.p-button-outlined {
                    background-color: transparent;
                    color: #aed581;
                    border: 1px solid;
                }
                .p-button.p-button-success.p-button-outlined:enabled:hover,
                .p-button.p-button-success.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:enabled:hover,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:enabled:hover,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-success.p-button-outlined:enabled:hover,
                .p-fileupload-choose.p-button-success.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(174, 213, 129, 0.04);
                    color: #aed581;
                    border: 1px solid;
                }
                .p-button.p-button-success.p-button-outlined:enabled:active,
                .p-button.p-button-success.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-success.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-success.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(174, 213, 129, 0.16);
                    color: #aed581;
                    border: 1px solid;
                }
                .p-button.p-button-success.p-button-text,
                .p-buttonset.p-button-success > .p-button.p-button-text,
                .p-splitbutton.p-button-success > .p-button.p-button-text,
                .p-fileupload-choose.p-button-success.p-button-text {
                    background-color: transparent;
                    color: #aed581;
                    border-color: transparent;
                }
                .p-button.p-button-success.p-button-text:enabled:hover,
                .p-button.p-button-success.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:enabled:hover,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:enabled:hover,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-success.p-button-text:enabled:hover,
                .p-fileupload-choose.p-button-success.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(174, 213, 129, 0.04);
                    border-color: transparent;
                    color: #aed581;
                }
                .p-button.p-button-success.p-button-text:enabled:active,
                .p-button.p-button-success.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-success.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-success.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(174, 213, 129, 0.16);
                    border-color: transparent;
                    color: #aed581;
                }

                .p-button.p-button-warning,
                .p-buttonset.p-button-warning > .p-button,
                .p-splitbutton.p-button-warning > .p-button,
                .p-fileupload-choose.p-button-warning {
                    color: #212529;
                    background: #ffb74d;
                    border: 1px solid #ffb74d;
                }
                .p-button.p-button-warning:enabled:hover,
                .p-button.p-button-warning:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-warning > .p-button:enabled:hover,
                .p-buttonset.p-button-warning
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-splitbutton.p-button-warning > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-fileupload-choose.p-button-warning:enabled:hover,
                .p-fileupload-choose.p-button-warning:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #ffa726;
                    color: #212529;
                    border-color: #ffa726;
                }
                .p-button.p-button-warning:enabled:focus,
                .p-button.p-button-warning:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-warning > .p-button:enabled:focus,
                .p-buttonset.p-button-warning
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-warning > .p-button:enabled:focus,
                .p-splitbutton.p-button-warning
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-warning:enabled:focus,
                .p-fileupload-choose.p-button-warning:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 0 0 0.1rem #fffde7;
                }
                .p-button.p-button-warning:enabled:active,
                .p-button.p-button-warning:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-warning > .p-button:enabled:active,
                .p-buttonset.p-button-warning
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-warning > .p-button:enabled:active,
                .p-splitbutton.p-button-warning
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-warning:enabled:active,
                .p-fileupload-choose.p-button-warning:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #ff9800;
                    color: #212529;
                    border-color: #ff9800;
                }
                .p-button.p-button-warning.p-button-outlined,
                .p-buttonset.p-button-warning > .p-button.p-button-outlined,
                .p-splitbutton.p-button-warning > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-warning.p-button-outlined {
                    background-color: transparent;
                    color: #ffb74d;
                    border: 1px solid;
                }
                .p-button.p-button-warning.p-button-outlined:enabled:hover,
                .p-button.p-button-warning.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:enabled:hover,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:enabled:hover,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:hover,
                .p-fileupload-choose.p-button-warning.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(255, 183, 77, 0.04);
                    color: #ffb74d;
                    border: 1px solid;
                }
                .p-button.p-button-warning.p-button-outlined:enabled:active,
                .p-button.p-button-warning.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-warning.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(255, 183, 77, 0.16);
                    color: #ffb74d;
                    border: 1px solid;
                }
                .p-button.p-button-warning.p-button-text,
                .p-buttonset.p-button-warning > .p-button.p-button-text,
                .p-splitbutton.p-button-warning > .p-button.p-button-text,
                .p-fileupload-choose.p-button-warning.p-button-text {
                    background-color: transparent;
                    color: #ffb74d;
                    border-color: transparent;
                }
                .p-button.p-button-warning.p-button-text:enabled:hover,
                .p-button.p-button-warning.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:enabled:hover,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:enabled:hover,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-warning.p-button-text:enabled:hover,
                .p-fileupload-choose.p-button-warning.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(255, 183, 77, 0.04);
                    border-color: transparent;
                    color: #ffb74d;
                }
                .p-button.p-button-warning.p-button-text:enabled:active,
                .p-button.p-button-warning.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-warning.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-warning.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(255, 183, 77, 0.16);
                    border-color: transparent;
                    color: #ffb74d;
                }

                .p-button.p-button-help,
                .p-buttonset.p-button-help > .p-button,
                .p-splitbutton.p-button-help > .p-button,
                .p-fileupload-choose.p-button-help {
                    color: #121212;
                    background: #ce93d8;
                    border: 1px solid #ce93d8;
                }
                .p-button.p-button-help:enabled:hover,
                .p-button.p-button-help:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-help > .p-button:enabled:hover,
                .p-buttonset.p-button-help
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-splitbutton.p-button-help > .p-button:enabled:hover,
                .p-splitbutton.p-button-help
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-fileupload-choose.p-button-help:enabled:hover,
                .p-fileupload-choose.p-button-help:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #ba68c8;
                    color: #121212;
                    border-color: #ba68c8;
                }
                .p-button.p-button-help:enabled:focus,
                .p-button.p-button-help:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-help > .p-button:enabled:focus,
                .p-buttonset.p-button-help
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-help > .p-button:enabled:focus,
                .p-splitbutton.p-button-help
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-help:enabled:focus,
                .p-fileupload-choose.p-button-help:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 0 0 1px #ce93d8;
                }
                .p-button.p-button-help:enabled:active,
                .p-button.p-button-help:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-help > .p-button:enabled:active,
                .p-buttonset.p-button-help
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-help > .p-button:enabled:active,
                .p-splitbutton.p-button-help
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-help:enabled:active,
                .p-fileupload-choose.p-button-help:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #ab47bc;
                    color: #121212;
                    border-color: #ab47bc;
                }
                .p-button.p-button-help.p-button-outlined,
                .p-buttonset.p-button-help > .p-button.p-button-outlined,
                .p-splitbutton.p-button-help > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-help.p-button-outlined {
                    background-color: transparent;
                    color: #ce93d8;
                    border: 1px solid;
                }
                .p-button.p-button-help.p-button-outlined:enabled:hover,
                .p-button.p-button-help.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:enabled:hover,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:enabled:hover,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-help.p-button-outlined:enabled:hover,
                .p-fileupload-choose.p-button-help.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(206, 147, 216, 0.04);
                    color: #ce93d8;
                    border: 1px solid;
                }
                .p-button.p-button-help.p-button-outlined:enabled:active,
                .p-button.p-button-help.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-help.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-help.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(206, 147, 216, 0.16);
                    color: #ce93d8;
                    border: 1px solid;
                }
                .p-button.p-button-help.p-button-text,
                .p-buttonset.p-button-help > .p-button.p-button-text,
                .p-splitbutton.p-button-help > .p-button.p-button-text,
                .p-fileupload-choose.p-button-help.p-button-text {
                    background-color: transparent;
                    color: #ce93d8;
                    border-color: transparent;
                }
                .p-button.p-button-help.p-button-text:enabled:hover,
                .p-button.p-button-help.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:enabled:hover,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:enabled:hover,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-help.p-button-text:enabled:hover,
                .p-fileupload-choose.p-button-help.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(206, 147, 216, 0.04);
                    border-color: transparent;
                    color: #ce93d8;
                }
                .p-button.p-button-help.p-button-text:enabled:active,
                .p-button.p-button-help.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-help.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-help.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(206, 147, 216, 0.16);
                    border-color: transparent;
                    color: #ce93d8;
                }

                .p-button.p-button-danger,
                .p-buttonset.p-button-danger > .p-button,
                .p-splitbutton.p-button-danger > .p-button,
                .p-fileupload-choose.p-button-danger {
                    color: #212529;
                    background: #e57373;
                    border: 1px solid #e57373;
                }
                .p-button.p-button-danger:enabled:hover,
                .p-button.p-button-danger:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-danger > .p-button:enabled:hover,
                .p-buttonset.p-button-danger
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-splitbutton.p-button-danger > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger
                    > .p-button:not(button):not(a):not(.p-disabled):hover,
                .p-fileupload-choose.p-button-danger:enabled:hover,
                .p-fileupload-choose.p-button-danger:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #ef5350;
                    color: #212529;
                    border-color: #ef5350;
                }
                .p-button.p-button-danger:enabled:focus,
                .p-button.p-button-danger:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-danger > .p-button:enabled:focus,
                .p-buttonset.p-button-danger
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-danger > .p-button:enabled:focus,
                .p-splitbutton.p-button-danger
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-danger:enabled:focus,
                .p-fileupload-choose.p-button-danger:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 0 0 0.1rem #ffebee;
                }
                .p-button.p-button-danger:enabled:active,
                .p-button.p-button-danger:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-danger > .p-button:enabled:active,
                .p-buttonset.p-button-danger
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-danger > .p-button:enabled:active,
                .p-splitbutton.p-button-danger
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-danger:enabled:active,
                .p-fileupload-choose.p-button-danger:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #f44336;
                    color: #212529;
                    border-color: #f44336;
                }
                .p-button.p-button-danger.p-button-outlined,
                .p-buttonset.p-button-danger > .p-button.p-button-outlined,
                .p-splitbutton.p-button-danger > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-danger.p-button-outlined {
                    background-color: transparent;
                    color: #e57373;
                    border: 1px solid;
                }
                .p-button.p-button-danger.p-button-outlined:enabled:hover,
                .p-button.p-button-danger.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):hover,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:enabled:hover,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:enabled:hover,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:hover,
                .p-fileupload-choose.p-button-danger.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(229, 115, 115, 0.04);
                    color: #e57373;
                    border: 1px solid;
                }
                .p-button.p-button-danger.p-button-outlined:enabled:active,
                .p-button.p-button-danger.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-danger.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(229, 115, 115, 0.16);
                    color: #e57373;
                    border: 1px solid;
                }
                .p-button.p-button-danger.p-button-text,
                .p-buttonset.p-button-danger > .p-button.p-button-text,
                .p-splitbutton.p-button-danger > .p-button.p-button-text,
                .p-fileupload-choose.p-button-danger.p-button-text {
                    background-color: transparent;
                    color: #e57373;
                    border-color: transparent;
                }
                .p-button.p-button-danger.p-button-text:enabled:hover,
                .p-button.p-button-danger.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:enabled:hover,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:enabled:hover,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover,
                .p-fileupload-choose.p-button-danger.p-button-text:enabled:hover,
                .p-fileupload-choose.p-button-danger.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):hover {
                    background: rgba(229, 115, 115, 0.04);
                    border-color: transparent;
                    color: #e57373;
                }
                .p-button.p-button-danger.p-button-text:enabled:active,
                .p-button.p-button-danger.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-danger.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-danger.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(229, 115, 115, 0.16);
                    border-color: transparent;
                    color: #e57373;
                }

                .p-button.p-button-link {
                    color: #81d4fa;
                    background: transparent;
                    border: transparent;
                }
                .p-button.p-button-link:enabled:hover,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: transparent;
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-button.p-button-link:enabled:hover .p-button-label,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):hover
                    .p-button-label {
                    text-decoration: underline;
                }
                .p-button.p-button-link:enabled:focus,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    background: transparent;
                    box-shadow: 0 0 0 0.2rem white;
                    border-color: transparent;
                }
                .p-button.p-button-link:enabled:active,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: transparent;
                    color: #81d4fa;
                    border-color: transparent;
                }

                .p-splitbutton {
                    border-radius: 3px;
                }
                .p-splitbutton.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #81d4fa;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(129, 212, 250, 0.04);
                    color: #81d4fa;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(129, 212, 250, 0.16);
                    color: #81d4fa;
                }
                .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
                    color: #888888;
                    border-color: #888888;
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #4c4c4c;
                    color: #888888;
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #3c3c3c;
                    color: #888888;
                }
                .p-splitbutton.p-button-text > .p-button {
                    background-color: transparent;
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:hover,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(129, 212, 250, 0.04);
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:active,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(129, 212, 250, 0.16);
                    color: #81d4fa;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text.p-button-plain > .p-button {
                    color: #888888;
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #4c4c4c;
                    color: #888888;
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #3c3c3c;
                    color: #888888;
                }
                .p-splitbutton.p-button-raised {
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                }
                .p-splitbutton.p-button-rounded {
                    border-radius: 2rem;
                }
                .p-splitbutton.p-button-rounded > .p-button {
                    border-radius: 2rem;
                }
                .p-splitbutton.p-button-sm > .p-button {
                    font-size: 0.875rem;
                    padding: 0.375375rem 0.875rem;
                }
                .p-splitbutton.p-button-sm > .p-button .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-splitbutton.p-button-lg > .p-button {
                    font-size: 1.25rem;
                    padding: 0.53625rem 1.25rem;
                }
                .p-splitbutton.p-button-lg > .p-button .p-button-icon {
                    font-size: 1.25rem;
                }

                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button {
                    background-color: transparent;
                    color: #b0bec5;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(176, 190, 197, 0.04);
                    color: #b0bec5;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(176, 190, 197, 0.16);
                    color: #b0bec5;
                }
                .p-splitbutton.p-button-secondary.p-button-text > .p-button {
                    background-color: transparent;
                    color: #b0bec5;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(176, 190, 197, 0.04);
                    border-color: transparent;
                    color: #b0bec5;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(176, 190, 197, 0.16);
                    border-color: transparent;
                    color: #b0bec5;
                }

                .p-splitbutton.p-button-info.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #4fc3f7;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(79, 195, 247, 0.04);
                    color: #4fc3f7;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(79, 195, 247, 0.16);
                    color: #4fc3f7;
                }
                .p-splitbutton.p-button-info.p-button-text > .p-button {
                    background-color: transparent;
                    color: #4fc3f7;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(79, 195, 247, 0.04);
                    border-color: transparent;
                    color: #4fc3f7;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(79, 195, 247, 0.16);
                    border-color: transparent;
                    color: #4fc3f7;
                }

                .p-splitbutton.p-button-success.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #aed581;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(174, 213, 129, 0.04);
                    color: #aed581;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(174, 213, 129, 0.16);
                    color: #aed581;
                }
                .p-splitbutton.p-button-success.p-button-text > .p-button {
                    background-color: transparent;
                    color: #aed581;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(174, 213, 129, 0.04);
                    border-color: transparent;
                    color: #aed581;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(174, 213, 129, 0.16);
                    border-color: transparent;
                    color: #aed581;
                }

                .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #ffb74d;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 183, 77, 0.04);
                    color: #ffb74d;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 183, 77, 0.16);
                    color: #ffb74d;
                }
                .p-splitbutton.p-button-warning.p-button-text > .p-button {
                    background-color: transparent;
                    color: #ffb74d;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 183, 77, 0.04);
                    border-color: transparent;
                    color: #ffb74d;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 183, 77, 0.16);
                    border-color: transparent;
                    color: #ffb74d;
                }

                .p-splitbutton.p-button-help.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #ce93d8;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(206, 147, 216, 0.04);
                    color: #ce93d8;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(206, 147, 216, 0.16);
                    color: #ce93d8;
                }
                .p-splitbutton.p-button-help.p-button-text > .p-button {
                    background-color: transparent;
                    color: #ce93d8;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(206, 147, 216, 0.04);
                    border-color: transparent;
                    color: #ce93d8;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(206, 147, 216, 0.16);
                    border-color: transparent;
                    color: #ce93d8;
                }

                .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #e57373;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(229, 115, 115, 0.04);
                    color: #e57373;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(229, 115, 115, 0.16);
                    color: #e57373;
                }
                .p-splitbutton.p-button-danger.p-button-text > .p-button {
                    background-color: transparent;
                    color: #e57373;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(229, 115, 115, 0.04);
                    border-color: transparent;
                    color: #e57373;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(229, 115, 115, 0.16);
                    border-color: transparent;
                    color: #e57373;
                }

                .p-speeddial-button.p-button.p-button-icon-only {
                    width: 4rem;
                    height: 4rem;
                }
                .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
                    font-size: 1.3rem;
                }
                .p-speeddial-button.p-button.p-button-icon-only
                    .p-button-icon.p-icon {
                    width: 1.3rem;
                    height: 1.3rem;
                }

                .p-speeddial-action {
                    width: 3rem;
                    height: 3rem;
                    background: #474747;
                    color: #fff;
                }
                .p-speeddial-action:hover {
                    background: #4d4d4d;
                    color: #fff;
                }

                .p-speeddial-direction-up .p-speeddial-item {
                    margin: 0.25rem;
                }
                .p-speeddial-direction-up .p-speeddial-item:first-child {
                    margin-bottom: 0.5rem;
                }

                .p-speeddial-direction-down .p-speeddial-item {
                    margin: 0.25rem;
                }
                .p-speeddial-direction-down .p-speeddial-item:first-child {
                    margin-top: 0.5rem;
                }

                .p-speeddial-direction-left .p-speeddial-item {
                    margin: 0 0.25rem;
                }
                .p-speeddial-direction-left .p-speeddial-item:first-child {
                    margin-right: 0.5rem;
                }

                .p-speeddial-direction-right .p-speeddial-item {
                    margin: 0 0.25rem;
                }
                .p-speeddial-direction-right .p-speeddial-item:first-child {
                    margin-left: 0.5rem;
                }

                .p-speeddial-circle .p-speeddial-item,
                .p-speeddial-semi-circle .p-speeddial-item,
                .p-speeddial-quarter-circle .p-speeddial-item {
                    margin: 0;
                }
                .p-speeddial-circle .p-speeddial-item:first-child,
                .p-speeddial-circle .p-speeddial-item:last-child,
                .p-speeddial-semi-circle .p-speeddial-item:first-child,
                .p-speeddial-semi-circle .p-speeddial-item:last-child,
                .p-speeddial-quarter-circle .p-speeddial-item:first-child,
                .p-speeddial-quarter-circle .p-speeddial-item:last-child {
                    margin: 0;
                }

                .p-speeddial-mask {
                    background-color: rgba(0, 0, 0, 0.4);
                }

                .p-carousel .p-carousel-content .p-carousel-prev,
                .p-carousel .p-carousel-content .p-carousel-next {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin: 0.5rem;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
                .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:focus,
                .p-carousel .p-carousel-content .p-carousel-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-carousel .p-carousel-indicators {
                    padding: 1rem;
                }
                .p-carousel .p-carousel-indicators .p-carousel-indicator {
                    margin-right: 0.5rem;
                    margin-bottom: 0.5rem;
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator
                    button {
                    background-color: #4b4b4b;
                    width: 2rem;
                    height: 0.5rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator
                    button:hover {
                    background: #4c4c4c;
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: #81d4fa;
                    color: #212529;
                }

                .p-datatable .p-paginator-top {
                    border-width: 1px 1px 0 1px;
                    border-radius: 0;
                }
                .p-datatable .p-paginator-bottom {
                    border-width: 0 1px 1px 1px;
                    border-radius: 0;
                }
                .p-datatable .p-datatable-header {
                    background: #191919;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 1px 1px 0 1px;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                }
                .p-datatable .p-datatable-footer {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 0 1px 1px 1px;
                    padding: 0.571rem 1rem;
                    font-weight: normal;
                }
                .p-datatable .p-datatable-thead > tr > th {
                    text-align: left;
                    padding: 0.571rem 0.857rem;
                    border: 1px solid #191919;
                    border-width: 1px 1px 1px 1px;
                    font-weight: 700;
                    color: #dedede;
                    background: #252525;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datatable .p-datatable-tfoot > tr > td {
                    text-align: left;
                    padding: 0.571rem 0.857rem;
                    border: 1px solid #191919;
                    border-width: 1px;
                    font-weight: 700;
                    color: #dedede;
                    background: #252525;
                }
                .p-datatable .p-sortable-column .p-sortable-column-icon {
                    color: #888888;
                    margin-left: 0.5rem;
                }
                .p-datatable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #212529;
                    background: #81d4fa;
                    margin-left: 0.5rem;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #dedede;
                }
                .p-datatable .p-sortable-column.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-datatable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #212529;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #212529;
                }
                .p-datatable .p-sortable-column:focus {
                    box-shadow: inset 0 0 0 0.15rem white;
                    outline: 0 none;
                }
                .p-datatable .p-datatable-tbody > tr {
                    background: #323232;
                    color: #dedede;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datatable .p-datatable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #191919;
                    border-width: 1px;
                    padding: 0.571rem 0.857rem;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-toggler:enabled:hover,
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-editor-init:enabled:hover,
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-editor-save:enabled:hover,
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-editor-cancel:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus,
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-editor-init:focus,
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-editor-save:focus,
                .p-datatable
                    .p-datatable-tbody
                    > tr
                    > td
                    .p-row-editor-cancel:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
                    margin-right: 0.5rem;
                }
                .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
                    font-weight: 700;
                }
                .p-datatable .p-datatable-tbody > tr > td.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-datatable .p-datatable-tbody > tr.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #81d4fa;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #81d4fa;
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:focus {
                    outline: 0.15rem solid white;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:not(.p-highlight):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:focus {
                    outline: 0.15rem solid white;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-hoverable-rows
                    .p-datatable-tbody
                    > tr:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-datatable .p-column-resizer-helper {
                    background: #81d4fa;
                }
                .p-datatable .p-datatable-scrollable-header,
                .p-datatable .p-datatable-scrollable-footer {
                    background: #191919;
                }
                .p-datatable.p-datatable-scrollable
                    > .p-datatable-wrapper
                    > .p-datatable-table
                    > .p-datatable-thead,
                .p-datatable.p-datatable-scrollable
                    > .p-datatable-wrapper
                    > .p-datatable-table
                    > .p-datatable-tfoot,
                .p-datatable.p-datatable-scrollable
                    > .p-datatable-wrapper
                    > .p-virtualscroller
                    > .p-datatable-table
                    > .p-datatable-thead,
                .p-datatable.p-datatable-scrollable
                    > .p-datatable-wrapper
                    > .p-virtualscroller
                    > .p-datatable-table
                    > .p-datatable-tfoot {
                    background-color: #252525;
                }
                .p-datatable .p-datatable-loading-icon {
                    font-size: 2rem;
                }
                .p-datatable .p-datatable-loading-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-datatable.p-datatable-gridlines .p-datatable-header {
                    border-width: 1px 1px 0 1px;
                }
                .p-datatable.p-datatable-gridlines .p-datatable-footer {
                    border-width: 0 1px 1px 1px;
                }
                .p-datatable.p-datatable-gridlines .p-paginator-top {
                    border-width: 0 1px 0 1px;
                }
                .p-datatable.p-datatable-gridlines .p-paginator-bottom {
                    border-width: 0 1px 1px 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-thead
                    > tr
                    > th {
                    border-width: 1px 0 1px 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-thead
                    > tr
                    > th:last-child {
                    border-width: 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-tbody
                    > tr
                    > td {
                    border-width: 1px 0 0 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-tbody
                    > tr
                    > td:last-child {
                    border-width: 1px 1px 0 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-tbody
                    > tr:last-child
                    > td {
                    border-width: 1px 0 1px 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-tbody
                    > tr:last-child
                    > td:last-child {
                    border-width: 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-tfoot
                    > tr
                    > td {
                    border-width: 1px 0 1px 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-tfoot
                    > tr
                    > td:last-child {
                    border-width: 1px 1px 1px 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-thead
                    + .p-datatable-tfoot
                    > tr
                    > td {
                    border-width: 0 0 1px 1px;
                }
                .p-datatable.p-datatable-gridlines
                    .p-datatable-thead
                    + .p-datatable-tfoot
                    > tr
                    > td:last-child {
                    border-width: 0 1px 1px 1px;
                }
                .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(
                        .p-datatable-tbody
                    )
                    .p-datatable-tbody
                    > tr
                    > td {
                    border-width: 0 0 1px 1px;
                }
                .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(
                        .p-datatable-tbody
                    )
                    .p-datatable-tbody
                    > tr
                    > td:last-child {
                    border-width: 0 1px 1px 1px;
                }
                .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(
                        .p-datatable-tfoot
                    )
                    .p-datatable-tbody
                    > tr:last-child
                    > td {
                    border-width: 0 0 0 1px;
                }
                .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(
                        .p-datatable-tfoot
                    )
                    .p-datatable-tbody
                    > tr:last-child
                    > td:last-child {
                    border-width: 0 1px 0 1px;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd {
                    background: #323232;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler {
                    color: #212529;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler:hover {
                    color: #212529;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd
                    + .p-row-expanded {
                    background: #323232;
                }
                .p-datatable.p-datatable-sm .p-datatable-header {
                    padding: 0.72845rem 0.85rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
                    padding: 0.48535rem 0.72845rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
                    padding: 0.48535rem 0.72845rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
                    padding: 0.48535rem 0.85rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-footer {
                    padding: 0.48535rem 0.85rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-header {
                    padding: 1.07125rem 1.25rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
                    padding: 0.71375rem 1.07125rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
                    padding: 0.71375rem 1.07125rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
                    padding: 0.71375rem 1.25rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-footer {
                    padding: 0.71375rem 1.25rem;
                }

                .p-datatable-drag-selection-helper {
                    background: rgba(129, 212, 250, 0.16);
                }

                .p-dataview .p-paginator-top {
                    border-width: 1px 1px 0 1px;
                    border-radius: 0;
                }
                .p-dataview .p-paginator-bottom {
                    border-width: 0 1px 1px 1px;
                    border-radius: 0;
                }
                .p-dataview .p-dataview-header {
                    background: #191919;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 1px 1px 0 1px;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                }
                .p-dataview .p-dataview-content {
                    background: #323232;
                    color: #dedede;
                    border: 0 none;
                    padding: 0;
                }
                .p-dataview.p-dataview-list
                    .p-dataview-content
                    > .p-grid
                    > div {
                    border: 1px solid #4b4b4b;
                    border-width: 1px;
                }
                .p-dataview .p-dataview-footer {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 0 1px 1px 1px;
                    padding: 0.571rem 1rem;
                    font-weight: normal;
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .p-dataview .p-dataview-loading-icon {
                    font-size: 2rem;
                }
                .p-dataview .p-dataview-loading-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }

                .p-datascroller .p-paginator-top {
                    border-width: 1px 1px 0 1px;
                    border-radius: 0;
                }
                .p-datascroller .p-paginator-bottom {
                    border-width: 0 1px 1px 1px;
                    border-radius: 0;
                }
                .p-datascroller .p-datascroller-header {
                    background: #191919;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 1px 1px 0 1px;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                }
                .p-datascroller .p-datascroller-content {
                    background: #323232;
                    color: #dedede;
                    border: 0 none;
                    padding: 0;
                }
                .p-datascroller.p-datascroller-inline
                    .p-datascroller-list
                    > li {
                    border: 1px solid #4b4b4b;
                    border-width: 1px;
                }
                .p-datascroller .p-datascroller-footer {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 0 1px 1px 1px;
                    padding: 0.571rem 1rem;
                    font-weight: normal;
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 3px;
                }

                .p-column-filter-row .p-column-filter-menu-button,
                .p-column-filter-row .p-column-filter-clear-button {
                    margin-left: 0.5rem;
                }

                .p-column-filter-menu-button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-menu-button:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-open,
                .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
                    background: transparent;
                    color: #dedede;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-active,
                .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-column-filter-menu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-column-filter-clear-button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-clear-button:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-column-filter-clear-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-column-filter-overlay {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    min-width: 12.5rem;
                }
                .p-column-filter-overlay .p-column-filter-row-items {
                    padding: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item {
                    margin: 0;
                    padding: 0.429rem 0.857rem;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }

                .p-column-filter-overlay-menu .p-column-filter-operator {
                    padding: 0.429rem 0.857rem;
                    border-bottom: 1px solid #191919;
                    color: #dedede;
                    background: #252525;
                    margin: 0;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-column-filter-overlay-menu .p-column-filter-constraint {
                    padding: 0.571rem 1rem;
                    border-bottom: 1px solid #4b4b4b;
                }
                .p-column-filter-overlay-menu
                    .p-column-filter-constraint
                    .p-column-filter-matchmode-dropdown {
                    margin-bottom: 0.5rem;
                }
                .p-column-filter-overlay-menu
                    .p-column-filter-constraint
                    .p-column-filter-remove-button {
                    margin-top: 0.5rem;
                }
                .p-column-filter-overlay-menu
                    .p-column-filter-constraint:last-child {
                    border-bottom: 0 none;
                }
                .p-column-filter-overlay-menu .p-column-filter-add-rule {
                    padding: 0.571rem 1rem;
                }
                .p-column-filter-overlay-menu .p-column-filter-buttonbar {
                    padding: 0.571rem 1rem;
                }

                .fc {
                    /* FullCalendar 4 */
                    /* FullCalendar 5 */
                }
                .fc.fc-unthemed .fc-view-container th {
                    background: #191919;
                    border: 1px solid #191919;
                    color: #dedede;
                }
                .fc.fc-unthemed .fc-view-container td.fc-widget-content {
                    border: 1px solid #191919;
                    color: #dedede;
                }
                .fc.fc-unthemed .fc-view-container td.fc-head-container {
                    border: 1px solid #191919;
                }
                .fc.fc-unthemed .fc-view-container .fc-view {
                    background: #323232;
                }
                .fc.fc-unthemed .fc-view-container .fc-row {
                    border-right: 1px solid #191919;
                }
                .fc.fc-unthemed .fc-view-container .fc-event {
                    background: #4fc3f7;
                    border: 1px solid #4fc3f7;
                    color: #212529;
                }
                .fc.fc-unthemed .fc-view-container .fc-divider {
                    background: #191919;
                    border: 1px solid #191919;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button {
                    color: #212529;
                    background: #81d4fa;
                    border: 1px solid #81d4fa;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                    display: flex;
                    align-items: center;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
                    background: #4fc3f7;
                    color: #212529;
                    border-color: #4fc3f7;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
                    background: #29b6f6;
                    color: #212529;
                    border-color: #29b6f6;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left {
                    font-family: 'PrimeIcons' !important;
                    text-indent: 0;
                    font-size: 1rem;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button
                    .fc-icon-chevron-left:before {
                    content: '\e900';
                }
                .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right {
                    font-family: 'PrimeIcons' !important;
                    text-indent: 0;
                    font-size: 1rem;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button
                    .fc-icon-chevron-right:before {
                    content: '\e901';
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
                    background: #252525;
                    border: 1px solid #252525;
                    color: #dedede;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button:hover,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button:hover,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button:hover {
                    background: #4c4c4c;
                    border-color: #4c4c4c;
                    color: #dedede;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button.fc-button-active,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button.fc-button-active,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button.fc-button-active {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button.fc-button-active:hover,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button.fc-button-active:hover,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button.fc-button-active:hover {
                    background: #4fc3f7;
                    border-color: #4fc3f7;
                    color: #212529;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button:focus,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button:focus,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    z-index: 1;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {
                    border-radius: 0;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:first-child {
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:last-child {
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {
                    border-color: #191919;
                }
                .fc.fc-theme-standard .fc-view-harness th {
                    background: #191919;
                    border-color: #191919;
                    color: #dedede;
                }
                .fc.fc-theme-standard .fc-view-harness td {
                    color: #dedede;
                    border-color: #191919;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-view {
                    background: #323232;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-popover {
                    background: none;
                    border: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header {
                    border: 1px solid #191919;
                    padding: 0.857rem 1rem;
                    background: #191919;
                    color: #dedede;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close {
                    opacity: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    font-family: 'PrimeIcons' !important;
                    font-size: 1rem;
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close:before {
                    content: '\e90b';
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-body {
                    padding: 0.571rem 1rem;
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    border-top: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event {
                    color: #212529;
                    background: #4fc3f7;
                    border-color: #4fc3f7;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event
                    .fc-event-main {
                    color: #212529;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event
                    .fc-daygrid-event-dot {
                    background: #4fc3f7;
                    border-color: #4fc3f7;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event:hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
                    background: #191919;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button {
                    color: #212529;
                    background: #81d4fa;
                    border: 1px solid #81d4fa;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 3px;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
                    background: #4fc3f7;
                    color: #212529;
                    border-color: #4fc3f7;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
                    background: #29b6f6;
                    color: #212529;
                    border-color: #29b6f6;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
                    opacity: 0.5;
                    color: #212529;
                    background: #81d4fa;
                    border: 1px solid #81d4fa;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button
                    .fc-icon-chevron-left {
                    font-family: 'PrimeIcons' !important;
                    text-indent: 0;
                    font-size: 1rem;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button
                    .fc-icon-chevron-left:before {
                    content: '\e900';
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button
                    .fc-icon-chevron-right {
                    font-family: 'PrimeIcons' !important;
                    text-indent: 0;
                    font-size: 1rem;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button
                    .fc-icon-chevron-right:before {
                    content: '\e901';
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button {
                    background: #252525;
                    border: 1px solid #252525;
                    color: #dedede;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button:hover,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button:hover,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button:hover {
                    background: #4c4c4c;
                    border-color: #4c4c4c;
                    color: #dedede;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button.fc-button-active,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button.fc-button-active,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button.fc-button-active {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button.fc-button-active:hover,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button.fc-button-active:hover,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button.fc-button-active:hover {
                    background: #4fc3f7;
                    border-color: #4fc3f7;
                    color: #212529;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-dayGridMonth-button:not(:disabled):focus,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridWeek-button:not(:disabled):focus,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button.fc-timeGridDay-button:not(:disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                    z-index: 1;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {
                    border-radius: 0;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:first-child {
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:last-child {
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                }
                .fc.fc-theme-standard .fc-highlight {
                    color: #212529;
                    background: #81d4fa;
                }

                .p-orderlist .p-orderlist-controls {
                    padding: 0.571rem 1rem;
                }
                .p-orderlist .p-orderlist-controls .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-orderlist .p-orderlist-header {
                    background: #191919;
                    color: #dedede;
                    border: 1px solid #191919;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                    border-bottom: 0 none;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-orderlist .p-orderlist-filter-container {
                    padding: 0.857rem 1rem;
                    background: #323232;
                    border: 1px solid #191919;
                    border-bottom: 0 none;
                }
                .p-orderlist
                    .p-orderlist-filter-container
                    .p-orderlist-filter-input {
                    padding-right: 1.429rem;
                }
                .p-orderlist
                    .p-orderlist-filter-container
                    .p-orderlist-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-orderlist .p-orderlist-list {
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    padding: 0;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item {
                    padding: 0.429rem 0.857rem;
                    margin: 0;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: transform 0.2s, background-color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-orderlist
                    .p-orderlist-list
                    .p-orderlist-item:not(.p-highlight):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even) {
                    background: #323232;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even):hover {
                    background: #4c4c4c;
                }

                .p-organizationchart
                    .p-organizationchart-node-content.p-organizationchart-selectable-node:not(
                        .p-highlight
                    ):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight
                    .p-node-toggler
                    i {
                    color: #0aa9f2;
                }
                .p-organizationchart .p-organizationchart-line-down {
                    background: #191919;
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid #191919;
                    border-color: #191919;
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid #191919;
                    border-color: #191919;
                }
                .p-organizationchart .p-organizationchart-node-content {
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    padding: 0.571rem 1rem;
                }
                .p-organizationchart
                    .p-organizationchart-node-content
                    .p-node-toggler {
                    background: inherit;
                    color: inherit;
                    border-radius: 50%;
                }
                .p-organizationchart
                    .p-organizationchart-node-content
                    .p-node-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-paginator {
                    background: #252525;
                    color: #dedede;
                    border: solid #191919;
                    border-width: 1px;
                    padding: 0;
                    border-radius: 3px;
                }
                .p-paginator .p-paginator-first,
                .p-paginator .p-paginator-prev,
                .p-paginator .p-paginator-next,
                .p-paginator .p-paginator-last {
                    background-color: transparent;
                    border: 0 none;
                    color: #dedede;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-paginator
                    .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
                    background: #e0e0e0;
                    border-color: transparent;
                    color: #4c4c4c;
                }
                .p-paginator .p-paginator-first {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-paginator .p-paginator-last {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                .p-paginator .p-dropdown {
                    margin-left: 0.5rem;
                    height: 2.357rem;
                }
                .p-paginator .p-dropdown .p-dropdown-label {
                    padding-right: 0;
                }
                .p-paginator .p-paginator-page-input {
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
                }
                .p-paginator .p-paginator-page-input .p-inputtext {
                    max-width: 2.357rem;
                }
                .p-paginator .p-paginator-current {
                    background-color: transparent;
                    border: 0 none;
                    color: #dedede;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0;
                    padding: 0 0.5rem;
                }
                .p-paginator .p-paginator-pages .p-paginator-page {
                    background-color: transparent;
                    border: 0 none;
                    color: #dedede;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }
                .p-paginator
                    .p-paginator-pages
                    .p-paginator-page:not(.p-highlight):hover {
                    background: #e0e0e0;
                    border-color: transparent;
                    color: #4c4c4c;
                }

                .p-picklist .p-picklist-buttons {
                    padding: 0.571rem 1rem;
                }
                .p-picklist .p-picklist-buttons .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-picklist .p-picklist-header {
                    background: #191919;
                    color: #dedede;
                    border: 1px solid #191919;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                    border-bottom: 0 none;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-picklist .p-picklist-filter-container {
                    padding: 0.857rem 1rem;
                    background: #323232;
                    border: 1px solid #191919;
                    border-bottom: 0 none;
                }
                .p-picklist
                    .p-picklist-filter-container
                    .p-picklist-filter-input {
                    padding-right: 1.429rem;
                }
                .p-picklist
                    .p-picklist-filter-container
                    .p-picklist-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-picklist .p-picklist-list {
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    padding: 0;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-picklist .p-picklist-list .p-picklist-item {
                    padding: 0.429rem 0.857rem;
                    margin: 0;
                    border: 0 none;
                    color: #dedede;
                    background: transparent;
                    transition: transform 0.2s, background-color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:not(.p-highlight):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-picklist .p-picklist-list .p-picklist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
                    color: #212529;
                    background: #81d4fa;
                }

                .p-tree {
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    padding: 0.571rem 1rem;
                    border-radius: 3px;
                }
                .p-tree .p-tree-container .p-treenode {
                    padding: 0.143rem;
                }
                .p-tree .p-tree-container .p-treenode .p-treenode-content {
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    padding: 0;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler {
                    margin-right: 0.5rem;
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-treenode-icon {
                    margin-right: 0.5rem;
                    color: #888888;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-checkbox {
                    margin-right: 0.5rem;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-checkbox
                    .p-indeterminate
                    .p-checkbox-icon {
                    color: #dedede;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight
                    .p-tree-toggler,
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight
                    .p-treenode-icon {
                    color: #212529;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight
                    .p-tree-toggler:hover,
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight
                    .p-treenode-icon:hover {
                    color: #212529;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-selectable:not(
                        .p-highlight
                    ):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-dragover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-tree .p-tree-filter-container {
                    margin-bottom: 0.5rem;
                }
                .p-tree .p-tree-filter-container .p-tree-filter {
                    width: 100%;
                    padding-right: 1.429rem;
                }
                .p-tree .p-tree-filter-container .p-tree-filter-icon {
                    right: 0.429rem;
                    color: #888888;
                }
                .p-tree .p-treenode-children {
                    padding: 0 0 0 1rem;
                }
                .p-tree .p-tree-loading-icon {
                    font-size: 2rem;
                }
                .p-tree .p-tree-loading-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-tree .p-treenode-droppoint {
                    height: 0.5rem;
                }
                .p-tree .p-treenode-droppoint.p-treenode-droppoint-active {
                    background: #38bbf7;
                }

                .p-treetable .p-paginator-top {
                    border-width: 1px 1px 0 1px;
                    border-radius: 0;
                }
                .p-treetable .p-paginator-bottom {
                    border-width: 0 1px 1px 1px;
                    border-radius: 0;
                }
                .p-treetable .p-treetable-header {
                    background: #191919;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 1px 1px 0 1px;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                }
                .p-treetable .p-treetable-footer {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-width: 0 1px 1px 1px;
                    padding: 0.571rem 1rem;
                    font-weight: normal;
                }
                .p-treetable .p-treetable-thead > tr > th {
                    text-align: left;
                    padding: 0.571rem 0.857rem;
                    border: 1px solid #191919;
                    border-width: 1px 1px 1px 1px;
                    font-weight: 700;
                    color: #dedede;
                    background: #252525;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-treetable .p-treetable-tfoot > tr > td {
                    text-align: left;
                    padding: 0.571rem 0.857rem;
                    border: 1px solid #191919;
                    border-width: 1px;
                    font-weight: 700;
                    color: #dedede;
                    background: #252525;
                }
                .p-treetable .p-sortable-column {
                    outline-color: white;
                }
                .p-treetable .p-sortable-column .p-sortable-column-icon {
                    color: #888888;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #212529;
                    background: #81d4fa;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column:not(.p-highlight):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-treetable
                    .p-sortable-column:not(.p-highlight):hover
                    .p-sortable-column-icon {
                    color: #dedede;
                }
                .p-treetable .p-sortable-column.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-treetable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #212529;
                }
                .p-treetable .p-treetable-tbody > tr {
                    background: #323232;
                    color: #dedede;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-treetable .p-treetable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #191919;
                    border-width: 1px;
                    padding: 0.571rem 0.857rem;
                }
                .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-right: 0.5rem;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler
                    + .p-checkbox {
                    margin-right: 0.5rem;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler
                    + .p-checkbox
                    .p-indeterminate
                    .p-checkbox-icon {
                    color: #dedede;
                }
                .p-treetable .p-treetable-tbody > tr:focus {
                    outline: 0.15rem solid white;
                    outline-offset: -0.15rem;
                }
                .p-treetable .p-treetable-tbody > tr.p-highlight {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler {
                    color: #212529;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler:hover {
                    color: #212529;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler {
                    color: #dedede;
                }
                .p-treetable .p-column-resizer-helper {
                    background: #81d4fa;
                }
                .p-treetable .p-treetable-scrollable-header,
                .p-treetable .p-treetable-scrollable-footer {
                    background: #191919;
                }
                .p-treetable .p-treetable-loading-icon {
                    font-size: 2rem;
                }
                .p-treetable .p-treetable-loading-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-treetable.p-treetable-gridlines .p-datatable-header {
                    border-width: 1px 1px 0 1px;
                }
                .p-treetable.p-treetable-gridlines .p-treetable-footer {
                    border-width: 0 1px 1px 1px;
                }
                .p-treetable.p-treetable-gridlines .p-treetable-top {
                    border-width: 0 1px 0 1px;
                }
                .p-treetable.p-treetable-gridlines .p-treetable-bottom {
                    border-width: 0 1px 1px 1px;
                }
                .p-treetable.p-treetable-gridlines
                    .p-treetable-thead
                    > tr
                    > th {
                    border-width: 1px;
                }
                .p-treetable.p-treetable-gridlines
                    .p-treetable-tbody
                    > tr
                    > td {
                    border-width: 1px;
                }
                .p-treetable.p-treetable-gridlines
                    .p-treetable-tfoot
                    > tr
                    > td {
                    border-width: 1px;
                }
                .p-treetable.p-treetable-sm .p-treetable-header {
                    padding: 0.749875rem 0.875rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
                    padding: 0.48535rem 0.72845rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
                    padding: 0.48535rem 0.72845rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
                    padding: 0.48535rem 0.85rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-footer {
                    padding: 0.48535rem 0.85rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-header {
                    padding: 1.07125rem 1.25rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
                    padding: 0.71375rem 1.07125rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
                    padding: 0.71375rem 1.07125rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
                    padding: 0.71375rem 1.25rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-footer {
                    padding: 0.71375rem 1.25rem;
                }

                .p-timeline .p-timeline-event-marker {
                    border: 0 none;
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                    background-color: #81d4fa;
                }
                .p-timeline .p-timeline-event-connector {
                    background-color: #191919;
                }
                .p-timeline.p-timeline-vertical .p-timeline-event-opposite,
                .p-timeline.p-timeline-vertical .p-timeline-event-content {
                    padding: 0 1rem;
                }
                .p-timeline.p-timeline-vertical .p-timeline-event-connector {
                    width: 2px;
                }
                .p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
                .p-timeline.p-timeline-horizontal .p-timeline-event-content {
                    padding: 1rem 0;
                }
                .p-timeline.p-timeline-horizontal .p-timeline-event-connector {
                    height: 2px;
                }

                .p-accordion .p-accordion-header .p-accordion-header-link {
                    padding: 0.857rem 1rem;
                    border: 1px solid #191919;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-accordion
                    .p-accordion-header
                    .p-accordion-header-link
                    .p-accordion-toggle-icon {
                    margin-right: 0.5rem;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled)
                    .p-accordion-header-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link {
                    background: #191919;
                    border-color: #191919;
                    color: #81d4fa;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight
                    .p-accordion-header-link {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    border-color: #29b6f6;
                    background: #29b6f6;
                    color: #212529;
                }
                .p-accordion .p-accordion-content {
                    padding: 0.571rem 1rem;
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-accordion .p-accordion-tab {
                    margin-bottom: 2px;
                }

                .p-card {
                    background: #323232;
                    color: #dedede;
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 1px 3px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 3px;
                }
                .p-card .p-card-body {
                    padding: 1rem;
                }
                .p-card .p-card-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .p-card .p-card-subtitle {
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                    color: #888888;
                }
                .p-card .p-card-content {
                    padding: 1rem 0;
                }
                .p-card .p-card-footer {
                    padding: 1rem 0 0 0;
                }

                .p-fieldset {
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    border-radius: 3px;
                }
                .p-fieldset .p-fieldset-legend {
                    padding: 0.857rem 1rem;
                    border: 1px solid #191919;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                    border-radius: 3px;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
                    padding: 0;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
                    padding: 0.857rem 1rem;
                    color: #dedede;
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-fieldset.p-fieldset-toggleable
                    .p-fieldset-legend
                    a
                    .p-fieldset-toggler {
                    margin-right: 0.5rem;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                    background: #191919;
                    border-color: #191919;
                    color: #81d4fa;
                }
                .p-fieldset .p-fieldset-content {
                    padding: 0.571rem 1rem;
                }

                .p-divider .p-divider-content {
                    background-color: #323232;
                }
                .p-divider.p-divider-horizontal {
                    margin: 1rem 0;
                    padding: 0 1rem;
                }
                .p-divider.p-divider-horizontal:before {
                    border-top: 1px #4b4b4b;
                }
                .p-divider.p-divider-horizontal .p-divider-content {
                    padding: 0 0.5rem;
                }
                .p-divider.p-divider-vertical {
                    margin: 0 1rem;
                    padding: 1rem 0;
                }
                .p-divider.p-divider-vertical:before {
                    border-left: 1px #4b4b4b;
                }
                .p-divider.p-divider-vertical .p-divider-content {
                    padding: 0.5rem 0;
                }

                .p-panel .p-panel-header {
                    border: 1px solid #191919;
                    padding: 0.857rem 1rem;
                    background: #191919;
                    color: #dedede;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-panel .p-panel-header .p-panel-title {
                    font-weight: 700;
                }
                .p-panel .p-panel-header .p-panel-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-panel .p-panel-header .p-panel-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-panel.p-panel-toggleable .p-panel-header {
                    padding: 0.857rem 1rem;
                }
                .p-panel .p-panel-content {
                    padding: 0.571rem 1rem;
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                    border-top: 0 none;
                }
                .p-panel .p-panel-footer {
                    padding: 0.571rem 1rem;
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    border-top: 0 none;
                }

                .p-splitter {
                    border: 1px solid #191919;
                    background: #323232;
                    border-radius: 3px;
                    color: #dedede;
                }
                .p-splitter .p-splitter-gutter {
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    background: #191919;
                }
                .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
                    background: #4b4b4b;
                }
                .p-splitter .p-splitter-gutter-resizing {
                    background: #4b4b4b;
                }

                .p-scrollpanel .p-scrollpanel-bar {
                    background: #3f3f3f;
                    border: 0 none;
                }

                .p-tabview .p-tabview-nav {
                    background: transparent;
                    border: 0 none;
                    border-width: 1px;
                }
                .p-tabview .p-tabview-nav li {
                    margin-right: 2px;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    border: 1px solid #191919;
                    border-width: 1px;
                    border-color: #191919;
                    background: #191919;
                    color: #dedede;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    margin: 0 0 -1px 0;
                }
                .p-tabview
                    .p-tabview-nav
                    li
                    .p-tabview-nav-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.1rem white;
                }
                .p-tabview
                    .p-tabview-nav
                    li:not(.p-highlight):not(.p-disabled):hover
                    .p-tabview-nav-link {
                    background: #191919;
                    border-color: #191919;
                    color: #81d4fa;
                }
                .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }
                .p-tabview .p-tabview-close {
                    margin-left: 0.5rem;
                }
                .p-tabview .p-tabview-nav-btn.p-link {
                    background: #81d4fa;
                    color: #212529;
                    width: 2.357rem;
                    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                    border-radius: 0;
                }
                .p-tabview .p-tabview-nav-btn.p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.1rem white;
                }
                .p-tabview .p-tabview-panels {
                    background: #323232;
                    padding: 0.571rem 1rem;
                    border: 1px solid #191919;
                    color: #dedede;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }

                .p-toolbar {
                    background: #191919;
                    border: 1px solid #191919;
                    padding: 0.857rem 1rem;
                    border-radius: 3px;
                    gap: 0.5rem;
                }
                .p-toolbar .p-toolbar-separator {
                    margin: 0 0.5rem;
                }

                .p-confirm-popup {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-confirm-popup .p-confirm-popup-content {
                    padding: 0.571rem 1rem;
                }
                .p-confirm-popup .p-confirm-popup-footer {
                    text-align: right;
                    padding: 0 1rem 0.571rem 1rem;
                }
                .p-confirm-popup .p-confirm-popup-footer button {
                    margin: 0 0.5rem 0 0;
                    width: auto;
                }
                .p-confirm-popup .p-confirm-popup-footer button:last-child {
                    margin: 0;
                }
                .p-confirm-popup:after {
                    border: solid transparent;
                    border-color: rgba(50, 50, 50, 0);
                    border-bottom-color: #323232;
                }
                .p-confirm-popup:before {
                    border: solid transparent;
                    border-color: rgba(25, 25, 25, 0);
                    border-bottom-color: #191919;
                }
                .p-confirm-popup.p-confirm-popup-flipped:after {
                    border-top-color: #323232;
                }
                .p-confirm-popup.p-confirm-popup-flipped:before {
                    border-top-color: #191919;
                }
                .p-confirm-popup .p-confirm-popup-icon {
                    font-size: 1.5rem;
                }
                .p-confirm-popup .p-confirm-popup-icon.p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }
                .p-confirm-popup .p-confirm-popup-message {
                    margin-left: 1rem;
                }

                .p-dialog {
                    border-radius: 3px;
                    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                    border: 1px solid #191919;
                }
                .p-dialog .p-dialog-header {
                    border-bottom: 1px solid #191919;
                    background: #191919;
                    color: #dedede;
                    padding: 1rem;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-dialog .p-dialog-header .p-dialog-title {
                    font-weight: 700;
                    font-size: 1rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-right: 0.5rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
                    margin-right: 0;
                }
                .p-dialog .p-dialog-content {
                    background: #323232;
                    color: #dedede;
                    padding: 1rem;
                }
                .p-dialog .p-dialog-content:last-of-type {
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-dialog .p-dialog-footer {
                    border-top: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    padding: 0.571rem 1rem;
                    text-align: right;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-dialog .p-dialog-footer button {
                    margin: 0 0.5rem 0 0;
                    width: auto;
                }
                .p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
                    font-size: 2rem;
                }
                .p-dialog.p-confirm-dialog .p-confirm-dialog-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-dialog.p-confirm-dialog .p-confirm-dialog-message {
                    margin-left: 1rem;
                }

                .p-overlaypanel {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-overlaypanel .p-overlaypanel-content {
                    padding: 0.571rem 1rem;
                }
                .p-overlaypanel .p-overlaypanel-close {
                    background: #81d4fa;
                    color: #212529;
                    width: 2rem;
                    height: 2rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 50%;
                    position: absolute;
                    top: -1rem;
                    right: -1rem;
                }
                .p-overlaypanel .p-overlaypanel-close:enabled:hover {
                    background: #4fc3f7;
                    color: #212529;
                }
                .p-overlaypanel:after {
                    border: solid transparent;
                    border-color: rgba(50, 50, 50, 0);
                    border-bottom-color: #323232;
                }
                .p-overlaypanel:before {
                    border: solid transparent;
                    border-color: rgba(25, 25, 25, 0);
                    border-bottom-color: #181818;
                }
                .p-overlaypanel.p-overlaypanel-flipped:after {
                    border-top-color: #323232;
                }
                .p-overlaypanel.p-overlaypanel-flipped:before {
                    border-top-color: #191919;
                }

                .p-sidebar {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-sidebar .p-sidebar-header {
                    padding: 0.857rem 1rem;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close,
                .p-sidebar .p-sidebar-header .p-sidebar-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(136, 136, 136, 0.5333333333);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
                    color: #dedede;
                    border-color: transparent;
                    background: transparent;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-sidebar .p-sidebar-header + .p-sidebar-content {
                    padding-top: 0;
                }
                .p-sidebar .p-sidebar-content {
                    padding: 0.571rem 1rem;
                }

                .p-tooltip .p-tooltip-text {
                    background: #4c4c4c;
                    color: #dedede;
                    padding: 0.429rem 0.429rem;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    border-radius: 3px;
                }
                .p-tooltip.p-tooltip-right .p-tooltip-arrow {
                    border-right-color: #4c4c4c;
                }
                .p-tooltip.p-tooltip-left .p-tooltip-arrow {
                    border-left-color: #4c4c4c;
                }
                .p-tooltip.p-tooltip-top .p-tooltip-arrow {
                    border-top-color: #4c4c4c;
                }
                .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
                    border-bottom-color: #4c4c4c;
                }

                .p-fileupload .p-fileupload-buttonbar {
                    background: #191919;
                    padding: 0.857rem 1rem;
                    border: 1px solid #191919;
                    color: #dedede;
                    border-bottom: 0 none;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                    gap: 0.5rem;
                }
                .p-fileupload .p-fileupload-buttonbar .p-button {
                    margin-right: 0.5rem;
                }
                .p-fileupload .p-fileupload-content {
                    background: #323232;
                    padding: 0.571rem 1rem;
                    border: 1px solid #191919;
                    color: #dedede;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-fileupload .p-progressbar {
                    height: 0.25rem;
                }
                .p-fileupload .p-fileupload-row > div {
                    padding: 0.571rem 0.857rem;
                }
                .p-fileupload.p-fileupload-advanced .p-message {
                    margin-top: 0;
                }

                .p-breadcrumb {
                    background: #252525;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    padding: 0.571rem 1rem;
                }
                .p-breadcrumb ul li .p-menuitem-link {
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 3px;
                }
                .p-breadcrumb ul li .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                }
                .p-breadcrumb ul li.p-breadcrumb-chevron {
                    margin: 0 0.5rem 0 0.5rem;
                    color: #dedede;
                }
                .p-breadcrumb ul li:last-child .p-menuitem-text {
                    color: #dedede;
                }
                .p-breadcrumb ul li:last-child .p-menuitem-icon {
                    color: #dedede;
                }

                .p-contextmenu {
                    padding: 0;
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                    border-radius: 3px;
                    width: 12.5rem;
                }
                .p-contextmenu .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-contextmenu .p-menuitem-link .p-submenu-icon {
                    color: #dedede;
                }
                .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-contextmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-contextmenu .p-submenu-list {
                    padding: 0;
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                    border-radius: 3px;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link {
                    background: #81d4fa;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #212529;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #212529;
                }
                .p-contextmenu .p-menu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }
                .p-contextmenu .p-submenu-icon {
                    font-size: 0.875rem;
                    transition: transform 0.2s;
                }
                .p-contextmenu .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }

                .p-dock .p-dock-list {
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding: 0.5rem 0.5rem;
                    border-radius: 0.5rem;
                }
                .p-dock .p-dock-item {
                    padding: 0.5rem;
                }
                .p-dock .p-dock-action {
                    width: 4rem;
                    height: 4rem;
                }
                .p-dock.p-dock-magnification.p-dock-top
                    .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-top
                    .p-dock-item-second-next,
                .p-dock.p-dock-magnification.p-dock-bottom
                    .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-bottom
                    .p-dock-item-second-next {
                    margin: 0 0.9rem;
                }
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
                .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next {
                    margin: 0 1.3rem;
                }
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current,
                .p-dock.p-dock-magnification.p-dock-bottom
                    .p-dock-item-current {
                    margin: 0 1.5rem;
                }
                .p-dock.p-dock-magnification.p-dock-left
                    .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-left
                    .p-dock-item-second-next,
                .p-dock.p-dock-magnification.p-dock-right
                    .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-right
                    .p-dock-item-second-next {
                    margin: 0.9rem 0;
                }
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next {
                    margin: 1.3rem 0;
                }
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
                    margin: 1.5rem 0;
                }

                @media screen and (max-width: 960px) {
                    .p-dock.p-dock-top .p-dock-container,
                    .p-dock.p-dock-bottom .p-dock-container {
                        overflow-x: auto;
                        width: 100%;
                    }
                    .p-dock.p-dock-top .p-dock-container .p-dock-list,
                    .p-dock.p-dock-bottom .p-dock-container .p-dock-list {
                        margin: 0 auto;
                    }
                    .p-dock.p-dock-left .p-dock-container,
                    .p-dock.p-dock-right .p-dock-container {
                        overflow-y: auto;
                        height: 100%;
                    }
                    .p-dock.p-dock-left .p-dock-container .p-dock-list,
                    .p-dock.p-dock-right .p-dock-container .p-dock-list {
                        margin: auto 0;
                    }
                    .p-dock.p-dock-magnification.p-dock-top
                        .p-dock-item-second-prev,
                    .p-dock.p-dock-magnification.p-dock-top
                        .p-dock-item-second-next,
                    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
                    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
                    .p-dock.p-dock-magnification.p-dock-top
                        .p-dock-item-current,
                    .p-dock.p-dock-magnification.p-dock-bottom
                        .p-dock-item-second-prev,
                    .p-dock.p-dock-magnification.p-dock-bottom
                        .p-dock-item-second-next,
                    .p-dock.p-dock-magnification.p-dock-bottom
                        .p-dock-item-prev,
                    .p-dock.p-dock-magnification.p-dock-bottom
                        .p-dock-item-next,
                    .p-dock.p-dock-magnification.p-dock-bottom
                        .p-dock-item-current,
                    .p-dock.p-dock-magnification.p-dock-left
                        .p-dock-item-second-prev,
                    .p-dock.p-dock-magnification.p-dock-left
                        .p-dock-item-second-next,
                    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
                    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
                    .p-dock.p-dock-magnification.p-dock-left
                        .p-dock-item-current,
                    .p-dock.p-dock-magnification.p-dock-right
                        .p-dock-item-second-prev,
                    .p-dock.p-dock-magnification.p-dock-right
                        .p-dock-item-second-next,
                    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
                    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next,
                    .p-dock.p-dock-magnification.p-dock-right
                        .p-dock-item-current {
                        transform: none;
                        margin: 0;
                    }
                }
                .p-megamenu {
                    padding: 0.5rem;
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #dedede;
                    margin-left: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #81d4fa;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #212529;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #212529;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #212529;
                }
                .p-megamenu .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-megamenu .p-menuitem-link .p-submenu-icon {
                    color: #dedede;
                }
                .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-megamenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-megamenu .p-megamenu-panel {
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-megamenu .p-megamenu-submenu-header {
                    margin: 0;
                    padding: 0.857rem;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-megamenu .p-megamenu-submenu {
                    padding: 0;
                    width: 12.5rem;
                }
                .p-megamenu .p-megamenu-submenu .p-menu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }
                .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #81d4fa;
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #212529;
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #212529;
                }
                .p-megamenu.p-megamenu-vertical {
                    width: 12.5rem;
                    padding: 0;
                }
                .p-megamenu .p-megamenu-button {
                    width: 2rem;
                    height: 2rem;
                    color: #dedede;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-megamenu .p-megamenu-button:hover {
                    color: #dedede;
                    background: #4c4c4c;
                }
                .p-megamenu .p-megamenu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-megamenu .p-submenu-icon {
                    transition: transform 0.2s;
                }
                .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
                    padding: 0;
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-menu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-submenu-icon {
                    font-size: 0.875rem;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem {
                    width: 100%;
                    position: static;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    > .p-submenu-icon {
                    margin-left: auto;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    > .p-submenu-icon {
                    transform: rotate(-180deg);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-submenu-list {
                    width: 100%;
                    position: static;
                    box-shadow: none;
                    border: 0 none;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-submenu-list
                    .p-submenu-icon {
                    transition: transform 0.2s;
                    transform: rotate(90deg);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-submenu-list
                    .p-menuitem-active
                    > .p-menuitem-link
                    > .p-submenu-icon {
                    transform: rotate(-90deg);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-menuitem {
                    width: 100%;
                    position: static;
                }

                .p-menu {
                    padding: 0;
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    width: 12.5rem;
                }
                .p-menu .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-menu .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-menu .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-menu .p-menuitem-link .p-submenu-icon {
                    color: #dedede;
                }
                .p-menu .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-menu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-menu.p-menu-overlay {
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-menu .p-submenu-header {
                    margin: 0;
                    padding: 0.857rem;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                }
                .p-menu .p-menu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }

                .p-menubar {
                    padding: 0.5rem;
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                }
                .p-menubar .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-menubar .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-menubar .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-menubar .p-menuitem-link .p-submenu-icon {
                    color: #dedede;
                }
                .p-menubar .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-menubar .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #dedede;
                    margin-left: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #81d4fa;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #212529;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #212529;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #212529;
                }
                .p-menubar .p-submenu-list {
                    padding: 0;
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                    width: 12.5rem;
                }
                .p-menubar .p-submenu-list .p-menu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }
                .p-menubar .p-submenu-list .p-submenu-icon {
                    font-size: 0.875rem;
                }
                .p-menubar .p-submenu-list .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #81d4fa;
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #212529;
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #212529;
                }

                @media screen and (max-width: 960px) {
                    .p-menubar {
                        position: relative;
                    }
                    .p-menubar .p-menubar-button {
                        display: flex;
                        width: 2rem;
                        height: 2rem;
                        color: #dedede;
                        border-radius: 50%;
                        transition: background-color 0.2s, color 0.2s,
                            box-shadow 0.2s;
                    }
                    .p-menubar .p-menubar-button:hover {
                        color: #dedede;
                        background: #4c4c4c;
                    }
                    .p-menubar .p-menubar-button:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: 0 0 0 0.1rem white;
                    }
                    .p-menubar .p-menubar-root-list {
                        position: absolute;
                        display: none;
                        padding: 0;
                        background: #252525;
                        border: 1px solid #191919;
                        box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                        width: 100%;
                    }
                    .p-menubar .p-menubar-root-list .p-menu-separator {
                        border-top: 1px solid #4b4b4b;
                        margin: 0;
                    }
                    .p-menubar .p-menubar-root-list .p-submenu-icon {
                        font-size: 0.875rem;
                    }
                    .p-menubar .p-menubar-root-list .p-submenu-icon.p-icon {
                        width: 0.875rem;
                        height: 0.875rem;
                    }
                    .p-menubar .p-menubar-root-list > .p-menuitem {
                        width: 100%;
                        position: static;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link {
                        padding: 0.857rem;
                        color: #dedede;
                        border-radius: 0;
                        transition: background-color 0.2s, border-color 0.2s,
                            box-shadow 0.2s;
                        user-select: none;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-text {
                        color: #dedede;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-icon {
                        color: #dedede;
                        margin-right: 0.5rem;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-submenu-icon {
                        color: #dedede;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover {
                        background: #4c4c4c;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-text {
                        color: #dedede;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-icon {
                        color: #dedede;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-submenu-icon {
                        color: #dedede;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: inset 0 0 0 0.15rem white;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        > .p-submenu-icon {
                        margin-left: auto;
                        transition: transform 0.2s;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem.p-menuitem-active
                        > .p-menuitem-link
                        > .p-submenu-icon {
                        transform: rotate(-180deg);
                    }
                    .p-menubar .p-menubar-root-list .p-submenu-list {
                        width: 100%;
                        position: static;
                        box-shadow: none;
                        border: 0 none;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        .p-submenu-list
                        .p-submenu-icon {
                        transition: transform 0.2s;
                        transform: rotate(90deg);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        .p-submenu-list
                        .p-menuitem-active
                        > .p-menuitem-link
                        > .p-submenu-icon {
                        transform: rotate(-90deg);
                    }
                    .p-menubar .p-menubar-root-list .p-menuitem {
                        width: 100%;
                        position: static;
                    }
                    .p-menubar .p-menubar-root-list ul li a {
                        padding-left: 2.571rem;
                    }
                    .p-menubar .p-menubar-root-list ul li ul li a {
                        padding-left: 4.285rem;
                    }
                    .p-menubar .p-menubar-root-list ul li ul li ul li a {
                        padding-left: 5.999rem;
                    }
                    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {
                        padding-left: 7.713rem;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        ul
                        li
                        ul
                        li
                        ul
                        li
                        ul
                        li
                        ul
                        li
                        a {
                        padding-left: 9.427rem;
                    }
                    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
                        display: flex;
                        flex-direction: column;
                        top: 100%;
                        left: 0;
                        z-index: 1;
                    }
                }
                .p-panelmenu .p-panelmenu-header > a {
                    padding: 0.857rem 1rem;
                    border: 1px solid #191919;
                    color: #dedede;
                    background: #191919;
                    font-weight: 700;
                    border-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon {
                    margin-right: 0.5rem;
                }
                .p-panelmenu .p-panelmenu-header > a .p-menuitem-icon {
                    margin-right: 0.5rem;
                }
                .p-panelmenu .p-panelmenu-header > a:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-panelmenu
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
                    > a:hover {
                    background: #191919;
                    border-color: #191919;
                    color: #81d4fa;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight {
                    margin-bottom: 0;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight > a {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-panelmenu
                    .p-panelmenu-header.p-highlight:not(.p-disabled)
                    > a:hover {
                    border-color: #29b6f6;
                    background: #29b6f6;
                    color: #212529;
                }
                .p-panelmenu .p-panelmenu-content {
                    padding: 0;
                    border: 1px solid #191919;
                    background: #323232;
                    color: #dedede;
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-panelmenu-icon {
                    margin-right: 0.5rem;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-submenu-list:not(.p-panelmenu-root-submenu) {
                    padding: 0 0 0 1rem;
                }
                .p-panelmenu .p-panelmenu-panel {
                    margin-bottom: 2px;
                }

                .p-slidemenu {
                    padding: 0;
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    width: 12.5rem;
                }
                .p-slidemenu .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-slidemenu .p-menuitem-link .p-submenu-icon {
                    color: #dedede;
                }
                .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-slidemenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-slidemenu.p-slidemenu-overlay {
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-slidemenu .p-slidemenu-list {
                    padding: 0;
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link {
                    background: #81d4fa;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-text {
                    color: #212529;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon,
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon {
                    color: #212529;
                }
                .p-slidemenu .p-slidemenu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }
                .p-slidemenu .p-slidemenu-icon {
                    font-size: 0.875rem;
                }
                .p-slidemenu .p-slidemenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-slidemenu .p-slidemenu-backward {
                    padding: 0.857rem;
                    color: #dedede;
                }

                .p-steps .p-steps-item .p-menuitem-link {
                    background: transparent;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 3px;
                    background: #191919;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                    color: #dedede;
                    border: 1px solid #191919;
                    background: #191919;
                    min-width: 2rem;
                    height: 2rem;
                    line-height: 2rem;
                    font-size: 1.143rem;
                    z-index: 1;
                    border-radius: 50%;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
                    margin-top: 0.5rem;
                    color: #888888;
                }
                .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-number {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-title {
                    font-weight: 700;
                    color: #dedede;
                }
                .p-steps .p-steps-item:before {
                    content: ' ';
                    border-top: 1px solid #4b4b4b;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    display: block;
                    position: absolute;
                    margin-top: -1rem;
                }

                .p-tabmenu .p-tabmenu-nav {
                    background: transparent;
                    border: 0 none;
                    border-width: 1px;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
                    margin-right: 2px;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
                    border: 1px solid #191919;
                    border-width: 1px;
                    border-color: #191919;
                    background: #191919;
                    color: #dedede;
                    padding: 0.857rem 1rem;
                    font-weight: 700;
                    border-top-right-radius: 3px;
                    border-top-left-radius: 3px;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    margin: 0 0 -1px 0;
                    height: calc(100% + 1px);
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem
                    .p-menuitem-link
                    .p-menuitem-icon {
                    margin-right: 0.5rem;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem
                    .p-menuitem-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.1rem white;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
                    .p-menuitem-link {
                    background: #191919;
                    border-color: #191919;
                    color: #81d4fa;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem.p-highlight
                    .p-menuitem-link {
                    background: #81d4fa;
                    border-color: #81d4fa;
                    color: #212529;
                }

                .p-tieredmenu {
                    padding: 0;
                    background: #252525;
                    color: #dedede;
                    border: 1px solid #191919;
                    border-radius: 3px;
                    width: 12.5rem;
                }
                .p-tieredmenu .p-menuitem-link {
                    padding: 0.857rem;
                    color: #dedede;
                    border-radius: 0;
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                    user-select: none;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-text {
                    color: #dedede;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
                    color: #dedede;
                    margin-right: 0.5rem;
                }
                .p-tieredmenu .p-menuitem-link .p-submenu-icon {
                    color: #dedede;
                }
                .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #4c4c4c;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #dedede;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #dedede;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #dedede;
                }
                .p-tieredmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem white;
                }
                .p-tieredmenu.p-tieredmenu-overlay {
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-tieredmenu .p-submenu-list {
                    padding: 0;
                    background: #252525;
                    border: 1px solid #191919;
                    box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                }
                .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #81d4fa;
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #212529;
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #212529;
                }
                .p-tieredmenu .p-menu-separator {
                    border-top: 1px solid #4b4b4b;
                    margin: 0;
                }
                .p-tieredmenu .p-submenu-icon {
                    font-size: 0.875rem;
                    transition: transform 0.2s;
                }
                .p-tieredmenu .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }

                .p-inline-message {
                    padding: 0.5rem;
                    margin: 0;
                    border-radius: 3px;
                }
                .p-inline-message.p-inline-message-info {
                    background: #7fbcec;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-inline-message.p-inline-message-info .p-inline-message-icon {
                    color: #212121;
                }
                .p-inline-message.p-inline-message-success {
                    background: #b7d8b7;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-inline-message.p-inline-message-success
                    .p-inline-message-icon {
                    color: #212121;
                }
                .p-inline-message.p-inline-message-warn {
                    background: #ffe399;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-inline-message.p-inline-message-warn .p-inline-message-icon {
                    color: #212121;
                }
                .p-inline-message.p-inline-message-error {
                    background: #f8b7bd;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-inline-message.p-inline-message-error
                    .p-inline-message-icon {
                    color: #212121;
                }
                .p-inline-message .p-inline-message-icon {
                    font-size: 1rem;
                    margin-right: 0.5rem;
                }
                .p-inline-message .p-inline-message-icon.p-icon {
                    width: 1rem;
                    height: 1rem;
                }
                .p-inline-message .p-inline-message-text {
                    font-size: 1rem;
                }
                .p-inline-message.p-inline-message-icon-only
                    .p-inline-message-icon {
                    margin-right: 0;
                }

                .p-message {
                    margin: 1rem 0;
                    border-radius: 3px;
                }
                .p-message .p-message-wrapper {
                    padding: 1rem;
                }
                .p-message .p-message-close {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background: transparent;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-message .p-message-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                .p-message .p-message-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-message.p-message-info {
                    background: #7fbcec;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-message.p-message-info .p-message-icon {
                    color: #212121;
                }
                .p-message.p-message-info .p-message-close {
                    color: #212121;
                }
                .p-message.p-message-success {
                    background: #b7d8b7;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-message.p-message-success .p-message-icon {
                    color: #212121;
                }
                .p-message.p-message-success .p-message-close {
                    color: #212121;
                }
                .p-message.p-message-warn {
                    background: #ffe399;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-message.p-message-warn .p-message-icon {
                    color: #212121;
                }
                .p-message.p-message-warn .p-message-close {
                    color: #212121;
                }
                .p-message.p-message-error {
                    background: #f8b7bd;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-message.p-message-error .p-message-icon {
                    color: #212121;
                }
                .p-message.p-message-error .p-message-close {
                    color: #212121;
                }
                .p-message .p-message-text {
                    font-size: 1rem;
                    font-weight: normal;
                }
                .p-message .p-message-icon {
                    font-size: 1.5rem;
                    margin-right: 0.5rem;
                }
                .p-message .p-message-icon.p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-toast {
                    opacity: 0.9;
                }
                .p-toast .p-toast-message {
                    margin: 0 0 1rem 0;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    border-radius: 3px;
                }
                .p-toast .p-toast-message .p-toast-message-content {
                    padding: 1rem;
                    border-width: 0;
                }
                .p-toast
                    .p-toast-message
                    .p-toast-message-content
                    .p-toast-message-text {
                    margin: 0 0 0 0.5rem;
                }
                .p-toast
                    .p-toast-message
                    .p-toast-message-content
                    .p-toast-message-icon {
                    font-size: 2rem;
                }
                .p-toast
                    .p-toast-message
                    .p-toast-message-content
                    .p-toast-message-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-toast
                    .p-toast-message
                    .p-toast-message-content
                    .p-toast-summary {
                    font-weight: 700;
                }
                .p-toast
                    .p-toast-message
                    .p-toast-message-content
                    .p-toast-detail {
                    margin: 0.5rem 0 0 0;
                }
                .p-toast .p-toast-message .p-toast-icon-close {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background: transparent;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-toast .p-toast-message .p-toast-icon-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                .p-toast .p-toast-message .p-toast-icon-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }
                .p-toast .p-toast-message.p-toast-message-info {
                    background: #7fbcec;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-icon-close {
                    color: #212121;
                }
                .p-toast .p-toast-message.p-toast-message-success {
                    background: #b7d8b7;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-icon-close {
                    color: #212121;
                }
                .p-toast .p-toast-message.p-toast-message-warn {
                    background: #ffe399;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-icon-close {
                    color: #212121;
                }
                .p-toast .p-toast-message.p-toast-message-error {
                    background: #f8b7bd;
                    border: 0 none;
                    border-width: 0;
                    color: #212121;
                }
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-icon-close {
                    color: #212121;
                }

                .p-galleria .p-galleria-close {
                    margin: 0.5rem;
                    background: transparent;
                    color: #ebedef;
                    width: 4rem;
                    height: 4rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 50%;
                }
                .p-galleria .p-galleria-close .p-galleria-close-icon {
                    font-size: 2rem;
                }
                .p-galleria .p-galleria-close .p-galleria-close-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-galleria .p-galleria-close:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #ebedef;
                }
                .p-galleria .p-galleria-item-nav {
                    background: rgba(0, 0, 0, 0.2);
                    color: #aeb6bf;
                    width: 4rem;
                    height: 4rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 3px;
                    margin: 0 0.5rem;
                }
                .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
                .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
                    font-size: 2rem;
                }
                .p-galleria
                    .p-galleria-item-nav
                    .p-galleria-item-prev-icon.p-icon,
                .p-galleria
                    .p-galleria-item-nav
                    .p-galleria-item-next-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }
                .p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
                    background: rgba(0, 0, 0, 0.3);
                    color: #ebedef;
                }
                .p-galleria .p-galleria-caption {
                    background: rgba(0, 0, 0, 0.5);
                    color: #ebedef;
                    padding: 1rem;
                }
                .p-galleria .p-galleria-indicators {
                    padding: 1rem;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button {
                    background-color: #4b4b4b;
                    width: 1rem;
                    height: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 50%;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button:hover {
                    background: #4c4c4c;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator,
                .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
                    margin-right: 0.5rem;
                }
                .p-galleria.p-galleria-indicators-left .p-galleria-indicator,
                .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
                    margin-bottom: 0.5rem;
                }
                .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
                    background: rgba(0, 0, 0, 0.5);
                }
                .p-galleria.p-galleria-indicator-onitem
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button {
                    background: rgba(255, 255, 255, 0.4);
                }
                .p-galleria.p-galleria-indicator-onitem
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button:hover {
                    background: rgba(255, 255, 255, 0.6);
                }
                .p-galleria.p-galleria-indicator-onitem
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #81d4fa;
                    color: #212529;
                }
                .p-galleria .p-galleria-thumbnail-container {
                    background: rgba(0, 0, 0, 0.9);
                    padding: 1rem 0.25rem;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-prev,
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-next {
                    margin: 0.5rem;
                    background-color: transparent;
                    color: #aeb6bf;
                    width: 2rem;
                    height: 2rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 50%;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-prev:hover,
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-next:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: #aeb6bf;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content {
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-galleria-mask {
                    --maskbg: rgba(0, 0, 0, 0.9);
                }

                .p-image-mask {
                    --maskbg: rgba(0, 0, 0, 0.9);
                }

                .p-image-preview-indicator {
                    background-color: transparent;
                    color: #f8f9fa;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-image-preview-indicator .p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-image-preview-container:hover > .p-image-preview-indicator {
                    background-color: rgba(0, 0, 0, 0.5);
                }

                .p-image-toolbar {
                    padding: 1rem;
                }

                .p-image-action.p-link {
                    color: #f8f9fa;
                    background-color: transparent;
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-right: 0.5rem;
                }
                .p-image-action.p-link:last-child {
                    margin-right: 0;
                }
                .p-image-action.p-link:hover {
                    color: #f8f9fa;
                    background-color: rgba(255, 255, 255, 0.1);
                }
                .p-image-action.p-link span {
                    font-size: 1.5rem;
                }
                .p-image-action.p-link .p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-avatar {
                    background-color: #4b4b4b;
                    border-radius: 3px;
                }
                .p-avatar.p-avatar-lg {
                    width: 3rem;
                    height: 3rem;
                    font-size: 1.5rem;
                }
                .p-avatar.p-avatar-lg .p-avatar-icon {
                    font-size: 1.5rem;
                }
                .p-avatar.p-avatar-xl {
                    width: 4rem;
                    height: 4rem;
                    font-size: 2rem;
                }
                .p-avatar.p-avatar-xl .p-avatar-icon {
                    font-size: 2rem;
                }

                .p-avatar-group .p-avatar {
                    border: 2px solid #323232;
                }

                .p-chip {
                    background-color: #4b4b4b;
                    color: #dedede;
                    border-radius: 16px;
                    padding: 0 0.429rem;
                }
                .p-chip .p-chip-text {
                    line-height: 1.5;
                    margin-top: 0.2145rem;
                    margin-bottom: 0.2145rem;
                }
                .p-chip .p-chip-icon {
                    margin-right: 0.5rem;
                }
                .p-chip img {
                    width: 1.929rem;
                    height: 1.929rem;
                    margin-left: -0.429rem;
                    margin-right: 0.5rem;
                }
                .p-chip .p-chip-remove-icon {
                    border-radius: 3px;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-left: 0.5rem;
                }
                .p-chip .p-chip-remove-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-scrolltop {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-scrolltop.p-link {
                    background: #81d4fa;
                }
                .p-scrolltop.p-link:hover {
                    background: #4fc3f7;
                }
                .p-scrolltop .p-scrolltop-icon {
                    font-size: 1.5rem;
                    color: #212529;
                }
                .p-scrolltop .p-scrolltop-icon.p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-skeleton {
                    background-color: rgba(255, 255, 255, 0.06);
                    border-radius: 3px;
                }
                .p-skeleton:after {
                    background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0),
                        rgba(255, 255, 255, 0.04),
                        rgba(255, 255, 255, 0)
                    );
                }

                .p-tag {
                    background: #81d4fa;
                    color: #212529;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 3px;
                }
                .p-tag.p-tag-success {
                    background-color: #aed581;
                    color: #212529;
                }
                .p-tag.p-tag-info {
                    background-color: #4fc3f7;
                    color: #212529;
                }
                .p-tag.p-tag-warning {
                    background-color: #ffb74d;
                    color: #212529;
                }
                .p-tag.p-tag-danger {
                    background-color: #e57373;
                    color: #212529;
                }
                .p-tag .p-tag-icon {
                    margin-right: 0.25rem;
                    font-size: 0.75rem;
                }
                .p-tag .p-tag-icon.p-icon {
                    width: 0.75rem;
                    height: 0.75rem;
                }

                .p-inplace .p-inplace-display {
                    padding: 0.429rem 0.429rem;
                    border-radius: 3px;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-inplace .p-inplace-display:not(.p-disabled):hover {
                    background: #4c4c4c;
                    color: #dedede;
                }
                .p-inplace .p-inplace-display:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.1rem white;
                }

                .p-progressbar {
                    border: 0 none;
                    height: 24px;
                    background: #eaeaea;
                    border-radius: 3px;
                }
                .p-progressbar .p-progressbar-value {
                    border: 0 none;
                    margin: 0;
                    background: #81d4fa;
                }
                .p-progressbar .p-progressbar-label {
                    color: #212529;
                    line-height: 24px;
                }

                .p-terminal {
                    background: #323232;
                    color: #dedede;
                    border: 1px solid #191919;
                    padding: 0.571rem 1rem;
                }
                .p-terminal .p-terminal-input {
                    font-size: 1rem;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                }

                .p-badge {
                    background: #81d4fa;
                    color: #212529;
                    font-size: 0.75rem;
                    font-weight: 700;
                    min-width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                .p-badge.p-badge-secondary {
                    background-color: #b0bec5;
                    color: #121212;
                }
                .p-badge.p-badge-success {
                    background-color: #aed581;
                    color: #212529;
                }
                .p-badge.p-badge-info {
                    background-color: #4fc3f7;
                    color: #212529;
                }
                .p-badge.p-badge-warning {
                    background-color: #ffb74d;
                    color: #212529;
                }
                .p-badge.p-badge-danger {
                    background-color: #e57373;
                    color: #212529;
                }
                .p-badge.p-badge-lg {
                    font-size: 1.125rem;
                    min-width: 2.25rem;
                    height: 2.25rem;
                    line-height: 2.25rem;
                }
                .p-badge.p-badge-xl {
                    font-size: 1.5rem;
                    min-width: 3rem;
                    height: 3rem;
                    line-height: 3rem;
                }

                .p-tag {
                    background: #81d4fa;
                    color: #212529;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 3px;
                }
                .p-tag.p-tag-success {
                    background-color: #aed581;
                    color: #212529;
                }
                .p-tag.p-tag-info {
                    background-color: #4fc3f7;
                    color: #212529;
                }
                .p-tag.p-tag-warning {
                    background-color: #ffb74d;
                    color: #212529;
                }
                .p-tag.p-tag-danger {
                    background-color: #e57373;
                    color: #212529;
                }

                /* Customizations to the designer theme should be defined here */
            `}
        </style>
    )
}

// EOF
