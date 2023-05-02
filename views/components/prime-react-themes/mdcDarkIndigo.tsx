// mdcDarkIndigo.tsx

export default function mdcDarkIndigo() {
    // -------------------------------------------------------------

    return (
        <style jsx global>
            {`
                :root {
                    --surface-a: #1e1e1e;
                    --surface-b: #121212;
                    --surface-c: hsla(0, 0%, 100%, 0.04);
                    --surface-d: hsla(0, 0%, 100%, 0.12);
                    --surface-e: #1e1e1e;
                    --surface-f: #262626;
                    --text-color: rgba(255, 255, 255, 0.87);
                    --text-color-secondary: rgba(255, 255, 255, 0.6);
                    --primary-color: #9fa8da;
                    --primary-color-text: #121212;
                    --font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                    --surface-0: #121212;
                    --surface-50: #2a2a2a;
                    --surface-100: #414141;
                    --surface-200: #595959;
                    --surface-300: #717171;
                    --surface-400: #898989;
                    --surface-500: #a0a0a0;
                    --surface-600: #b8b8b8;
                    --surface-700: #d0d0d0;
                    --surface-800: #e7e7e7;
                    --surface-900: #ffffff;
                    --gray-50: #e7e7e7;
                    --gray-100: #d0d0d0;
                    --gray-200: #b8b8b8;
                    --gray-300: #a0a0a0;
                    --gray-400: #898989;
                    --gray-500: #717171;
                    --gray-600: #595959;
                    --gray-700: #414141;
                    --gray-800: #2a2a2a;
                    --gray-900: #121212;
                    --content-padding: 1rem;
                    --inline-spacing: 0.5rem;
                    --border-radius: 4px;
                    --surface-ground: #121212;
                    --surface-section: #121212;
                    --surface-card: #1e1e1e;
                    --surface-overlay: #262626;
                    --surface-border: hsla(0, 0%, 100%, 0.12);
                    --surface-hover: hsla(0, 0%, 100%, 0.04);
                    --focus-ring: none;
                    --maskbg: rgba(0, 0, 0, 0.32);
                    --highlight-bg: rgba(159, 168, 218, 0.16);
                    --highlight-text-color: #9fa8da;
                    color-scheme: dark;
                }

                /* roboto-regular - latin-ext_latin */
                @font-face {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Roboto'), local('Roboto-Regular'),
                        url('./fonts/roboto-v20-latin-ext_latin-regular.woff2')
                            format('woff2'),
                        url('./fonts/roboto-v20-latin-ext_latin-regular.woff')
                            format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-500 - latin-ext_latin */
                @font-face {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 500;
                    src: local('Roboto Medium'), local('Roboto-Medium'),
                        url('./fonts/roboto-v20-latin-ext_latin-500.woff2')
                            format('woff2'),
                        url('./fonts/roboto-v20-latin-ext_latin-500.woff')
                            format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                /* roboto-700 - latin-ext_latin */
                @font-face {
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Roboto Bold'), local('Roboto-Bold'),
                        url('./fonts/roboto-v20-latin-ext_latin-700.woff2')
                            format('woff2'),
                        url('./fonts/roboto-v20-latin-ext_latin-700.woff')
                            format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                * {
                    box-sizing: border-box;
                }

                .p-component {
                    font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                    font-size: 1rem;
                    font-weight: normal;
                }

                .p-component-overlay {
                    background-color: rgba(0, 0, 0, 0.32);
                    transition-duration: 0.2s;
                }

                .p-disabled,
                .p-component:disabled {
                    opacity: 0.38;
                }

                .p-error {
                    color: #f44435;
                }

                .p-text-secondary {
                    color: rgba(255, 255, 255, 0.6);
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
                    font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                    border-radius: 4px;
                }
                .p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    --blue-50: #f4fafe;
                    --blue-100: #cae6fc;
                    --blue-200: #a0d2fa;
                    --blue-300: #75bef8;
                    --blue-400: #4baaf5;
                    --blue-500: #2196f3;
                    --blue-600: #1c80cf;
                    --blue-700: #1769aa;
                    --blue-800: #125386;
                    --blue-900: #0d3c61;
                    --green-50: #f7faf5;
                    --green-100: #dbe8cf;
                    --green-200: #bed6a9;
                    --green-300: #a1c384;
                    --green-400: #85b15e;
                    --green-500: #689f38;
                    --green-600: #588730;
                    --green-700: #496f27;
                    --green-800: #39571f;
                    --green-900: #2a4016;
                    --yellow-50: #fffcf5;
                    --yellow-100: #fef0cd;
                    --yellow-200: #fde4a5;
                    --yellow-300: #fdd87d;
                    --yellow-400: #fccc55;
                    --yellow-500: #fbc02d;
                    --yellow-600: #d5a326;
                    --yellow-700: #b08620;
                    --yellow-800: #8a6a19;
                    --yellow-900: #644d12;
                    --cyan-50: #f2fcfd;
                    --cyan-100: #c2eff5;
                    --cyan-200: #91e2ed;
                    --cyan-300: #61d5e4;
                    --cyan-400: #30c9dc;
                    --cyan-500: #00bcd4;
                    --cyan-600: #00a0b4;
                    --cyan-700: #008494;
                    --cyan-800: #006775;
                    --cyan-900: #004b55;
                    --pink-50: #fef4f7;
                    --pink-100: #fac9da;
                    --pink-200: #f69ebc;
                    --pink-300: #f1749e;
                    --pink-400: #ed4981;
                    --pink-500: #e91e63;
                    --pink-600: #c61a54;
                    --pink-700: #a31545;
                    --pink-800: #801136;
                    --pink-900: #5d0c28;
                    --indigo-50: #f6f7fc;
                    --indigo-100: #d5d9ef;
                    --indigo-200: #b3bae2;
                    --indigo-300: #919cd5;
                    --indigo-400: #707dc8;
                    --indigo-500: #4e5fbb;
                    --indigo-600: #42519f;
                    --indigo-700: #374383;
                    --indigo-800: #2b3467;
                    --indigo-900: #1f264b;
                    --teal-50: #f2faf9;
                    --teal-100: #c2e6e2;
                    --teal-200: #91d2cc;
                    --teal-300: #61beb5;
                    --teal-400: #30aa9f;
                    --teal-500: #009688;
                    --teal-600: #008074;
                    --teal-700: #00695f;
                    --teal-800: #00534b;
                    --teal-900: #003c36;
                    --orange-50: #fffaf2;
                    --orange-100: #ffe6c2;
                    --orange-200: #ffd391;
                    --orange-300: #ffbf61;
                    --orange-400: #ffac30;
                    --orange-500: #ff9800;
                    --orange-600: #d98100;
                    --orange-700: #b36a00;
                    --orange-800: #8c5400;
                    --orange-900: #663d00;
                    --bluegray-50: #f7f9f9;
                    --bluegray-100: #d9e0e3;
                    --bluegray-200: #bbc7cd;
                    --bluegray-300: #9caeb7;
                    --bluegray-400: #7e96a1;
                    --bluegray-500: #607d8b;
                    --bluegray-600: #526a76;
                    --bluegray-700: #435861;
                    --bluegray-800: #35454c;
                    --bluegray-900: #263238;
                    --purple-50: #faf4fb;
                    --purple-100: #e7cbec;
                    --purple-200: #d4a2dd;
                    --purple-300: #c279ce;
                    --purple-400: #af50bf;
                    --purple-500: #9c27b0;
                    --purple-600: #852196;
                    --purple-700: #6d1b7b;
                    --purple-800: #561561;
                    --purple-900: #3e1046;
                    --red-50: #fef6f5;
                    --red-100: #fcd2cf;
                    --red-200: #faaea9;
                    --red-300: #f88a82;
                    --red-400: #f6675c;
                    --red-500: #f44336;
                    --red-600: #cf392e;
                    --red-700: #ab2f26;
                    --red-800: #86251e;
                    --red-900: #621b16;
                    --primary-50: #fafbfd;
                    --primary-100: #e8eaf6;
                    --primary-200: #d6daef;
                    --primary-300: #c3c9e8;
                    --primary-400: #b1b9e1;
                    --primary-500: #9fa8da;
                    --primary-600: #878fb9;
                    --primary-700: #6f7699;
                    --primary-800: #575c78;
                    --primary-900: #404357;
                }

                .p-autocomplete .p-autocomplete-loader {
                    right: 0.75rem;
                }
                .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
                    right: 3rem;
                }
                .p-autocomplete .p-autocomplete-multiple-container {
                    padding: 0.375rem 0.75rem;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token {
                    padding: 0.375rem 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token
                    input {
                    font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0;
                    margin: 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                    border-radius: 4px;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token
                    .p-autocomplete-token-icon {
                    margin-left: 0.5rem;
                }
                .p-autocomplete.p-invalid.p-component > .p-inputtext {
                    border-color: #f44435;
                }

                .p-autocomplete-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-autocomplete-panel .p-autocomplete-items {
                    padding: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item {
                    margin: 0;
                    padding: 0.75rem 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item:hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item-group {
                    margin: 0;
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    font-weight: 400;
                }

                .p-calendar.p-invalid.p-component > .p-inputtext {
                    border-color: #f44435;
                }

                .p-datepicker {
                    padding: 0.5rem;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    border-radius: 4px;
                }
                .p-datepicker:not(.p-datepicker-inline) {
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
                    background: #2b2b2b;
                }
                .p-datepicker .p-datepicker-header {
                    padding: 0.5rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    font-weight: 500;
                    margin: 0;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev,
                .p-datepicker .p-datepicker-header .p-datepicker-next {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
                .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    color: rgba(255, 255, 255, 0.87);
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    font-weight: 500;
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
                    color: #9fa8da;
                }
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-title
                    .p-datepicker-month {
                    margin-right: 0.5rem;
                }
                .p-datepicker table {
                    font-size: 1rem;
                    margin: 0.5rem 0;
                }
                .p-datepicker table th {
                    padding: 0.5rem;
                }
                .p-datepicker table th > span {
                    width: 2.25rem;
                    height: 2.25rem;
                }
                .p-datepicker table td {
                    padding: 0.5rem;
                }
                .p-datepicker table td > span {
                    width: 2.25rem;
                    height: 2.25rem;
                    border-radius: 50%;
                    transition: none;
                    border: 1px solid transparent;
                }
                .p-datepicker table td > span.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-datepicker table td > span:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-datepicker table td.p-datepicker-today > span {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.87);
                    border-color: rgba(255, 255, 255, 0.5);
                }
                .p-datepicker table td.p-datepicker-today > span.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-datepicker .p-datepicker-buttonbar {
                    padding: 0.75rem 0;
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                }
                .p-datepicker .p-datepicker-buttonbar .p-button {
                    width: auto;
                }
                .p-datepicker .p-timepicker {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    padding: 0.5rem;
                }
                .p-datepicker .p-timepicker button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datepicker .p-timepicker button:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-datepicker .p-timepicker button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-datepicker .p-timepicker button:last-child {
                    margin-top: 0.2em;
                }
                .p-datepicker .p-timepicker span {
                    font-size: 1.25rem;
                }
                .p-datepicker .p-timepicker > div {
                    padding: 0 0.5rem;
                }
                .p-datepicker.p-datepicker-timeonly .p-timepicker {
                    border-top: 0 none;
                }
                .p-datepicker .p-monthpicker {
                    margin: 0.5rem 0;
                }
                .p-datepicker .p-monthpicker .p-monthpicker-month {
                    padding: 0.5rem;
                    transition: none;
                    border-radius: 4px;
                }
                .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-datepicker .p-yearpicker {
                    margin: 0.5rem 0;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year {
                    padding: 0.5rem;
                    transition: none;
                    border-radius: 4px;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
                    border-left: 1px solid hsla(0, 0%, 100%, 0.12);
                    padding-right: 0.5rem;
                    padding-left: 0.5rem;
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
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-datepicker:not(.p-disabled)
                    table
                    td
                    span:not(.p-highlight):not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }

                @media screen and (max-width: 769px) {
                    .p-datepicker table th,
                    .p-datepicker table td {
                        padding: 0;
                    }
                }
                .p-cascadeselect {
                    background: #1e1e1e;
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                }
                .p-cascadeselect:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-cascadeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-cascadeselect .p-cascadeselect-label {
                    background: transparent;
                    border: 0 none;
                    padding: 0.75rem 0.75rem;
                }
                .p-cascadeselect .p-cascadeselect-label.p-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-cascadeselect .p-cascadeselect-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-cascadeselect .p-cascadeselect-trigger {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-cascadeselect.p-invalid.p-component {
                    border-color: #f44435;
                }

                .p-cascadeselect-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-cascadeselect-panel .p-cascadeselect-items {
                    padding: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item {
                    margin: 0;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content {
                    padding: 0.75rem 0.75rem;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
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
                    background: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
                    background-color: hsla(0, 0%, 100%, 0.1);
                }

                .p-checkbox {
                    width: 18px;
                    height: 18px;
                }
                .p-checkbox .p-checkbox-box {
                    border: 2px solid hsla(0, 0%, 100%, 0.7);
                    background: #1e1e1e;
                    width: 18px;
                    height: 18px;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon {
                    transition-duration: 0.2s;
                    color: #121212;
                    font-size: 14px;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
                    width: 14px;
                    height: 14px;
                }
                .p-checkbox .p-checkbox-box.p-highlight {
                    border-color: #9fa8da;
                    background: #9fa8da;
                }
                .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
                    border-color: #9fa8da;
                    background: #9fa8da;
                    color: #121212;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    border-color: #9fa8da;
                    background: #9fa8da;
                    color: #121212;
                }
                .p-checkbox.p-invalid > .p-checkbox-box {
                    border-color: #f44435;
                }

                .p-input-filled .p-checkbox .p-checkbox-box {
                    background-color: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
                    background: #9fa8da;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box:hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    background: #9fa8da;
                }

                .p-chips .p-chips-multiple-container {
                    padding: 0.375rem 0.75rem;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-chips .p-chips-multiple-container .p-chips-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 16px;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-token
                    .p-chips-token-icon {
                    margin-left: 0.5rem;
                }
                .p-chips .p-chips-multiple-container .p-chips-input-token {
                    padding: 0.375rem 0;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-input-token
                    input {
                    font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0;
                    margin: 0;
                }
                .p-chips.p-invalid.p-component > .p-inputtext {
                    border-color: #f44435;
                }

                .p-colorpicker-preview {
                    width: 2rem;
                    height: 2rem;
                }

                .p-colorpicker-panel {
                    background: #2b2b2b;
                    border: 1px solid #1e1e1e;
                }
                .p-colorpicker-panel .p-colorpicker-color-handle,
                .p-colorpicker-panel .p-colorpicker-hue-handle {
                    border-color: #ffffff;
                }

                .p-colorpicker-overlay-panel {
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }

                .p-dropdown {
                    background: #1e1e1e;
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                }
                .p-dropdown:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-dropdown:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-dropdown.p-dropdown-clearable .p-dropdown-label {
                    padding-right: 1.75rem;
                }
                .p-dropdown .p-dropdown-label {
                    background: transparent;
                    border: 0 none;
                }
                .p-dropdown .p-dropdown-label.p-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-dropdown .p-dropdown-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-dropdown .p-dropdown-trigger {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-dropdown .p-dropdown-clear-icon {
                    color: rgba(255, 255, 255, 0.6);
                    right: 2.357rem;
                }
                .p-dropdown.p-invalid.p-component {
                    border-color: #f44435;
                }

                .p-dropdown-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-dropdown-panel .p-dropdown-header {
                    padding: 0.75rem;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    background: #2b2b2b;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
                    padding-right: 1.75rem;
                    margin-right: -1.75rem;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-dropdown-panel
                    .p-dropdown-header
                    .p-dropdown-clearable-filter
                    .p-dropdown-filter {
                    padding-right: 3.5rem;
                    margin-right: -3.5rem;
                }
                .p-dropdown-panel
                    .p-dropdown-header
                    .p-dropdown-clearable-filter
                    .p-dropdown-filter-clear-icon {
                    right: 2.5rem;
                }
                .p-dropdown-panel .p-dropdown-items {
                    padding: 0;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
                    margin: 0;
                    padding: 0.75rem 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
                    margin: 0;
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    font-weight: 400;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }

                .p-input-filled .p-dropdown {
                    background: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled .p-dropdown:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
                    background-color: hsla(0, 0%, 100%, 0.1);
                }
                .p-input-filled
                    .p-dropdown:not(.p-disabled).p-focus
                    .p-inputtext {
                    background-color: transparent;
                }

                .p-editor-container .p-editor-toolbar {
                    background: #1e1e1e;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-editor-container .p-editor-toolbar.ql-snow {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
                    stroke: rgba(255, 255, 255, 0.6);
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
                    fill: rgba(255, 255, 255, 0.6);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label {
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-stroke {
                    stroke: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-fill {
                    fill: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-stroke {
                    stroke: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-fill {
                    fill: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options {
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                    padding: 0;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item:hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded:not(.ql-icon-picker)
                    .ql-picker-item {
                    padding: 0.75rem 0.75rem;
                }
                .p-editor-container .p-editor-content {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-editor-container .p-editor-content.ql-snow {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .p-editor-container .p-editor-content .ql-editor {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover,
                .p-editor-container .ql-snow.ql-toolbar button:focus {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button:focus
                    .ql-stroke {
                    stroke: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
                .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
                    fill: rgba(255, 255, 255, 0.87);
                }
                .p-editor-container .ql-snow.ql-toolbar button.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected {
                    color: #9fa8da;
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
                    stroke: #9fa8da;
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
                    fill: #9fa8da;
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
                    color: #9fa8da;
                }

                .p-inputgroup-addon {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.6);
                    border-top: 1px solid hsla(0, 0%, 100%, 0.3);
                    border-left: 1px solid hsla(0, 0%, 100%, 0.3);
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
                    padding: 0.75rem 0.75rem;
                    min-width: 2.357rem;
                }
                .p-inputgroup-addon:last-child {
                    border-right: 1px solid hsla(0, 0%, 100%, 0.3);
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
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-inputgroup .p-float-label:first-child input {
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-inputgroup-addon:last-child,
                .p-inputgroup button:last-child,
                .p-inputgroup input:last-child,
                .p-inputgroup > .p-inputwrapper:last-child,
                .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }

                .p-inputgroup .p-float-label:last-child input {
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }

                .p-fluid .p-inputgroup .p-button {
                    width: auto;
                }
                .p-fluid .p-inputgroup .p-button.p-button-icon-only {
                    width: 2.25rem;
                }

                .p-inputnumber.p-invalid.p-component > .p-inputtext {
                    border-color: #f44435;
                }

                .p-inputswitch {
                    width: 2.75rem;
                    height: 1rem;
                }
                .p-inputswitch .p-inputswitch-slider {
                    background: hsla(0, 0%, 100%, 0.3);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 0.5rem;
                }
                .p-inputswitch .p-inputswitch-slider:before {
                    background: #bdbdbd;
                    width: 1.5rem;
                    height: 1.5rem;
                    left: -1px;
                    margin-top: -0.75rem;
                    border-radius: 50%;
                    transition-duration: 0.2s;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    transform: translateX(1.5rem);
                }
                .p-inputswitch.p-focus .p-inputswitch-slider {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
                    background: hsla(0, 0%, 100%, 0.3);
                }
                .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
                    background: rgba(159, 168, 218, 0.5);
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    background: #9fa8da;
                }
                .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
                    .p-inputswitch-slider {
                    background: rgba(159, 168, 218, 0.5);
                }
                .p-inputswitch.p-invalid .p-inputswitch-slider {
                    border-color: #f44435;
                }

                .p-inputtext {
                    font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    padding: 0.75rem 0.75rem;
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    appearance: none;
                    border-radius: 4px;
                }
                .p-inputtext:enabled:hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-inputtext:enabled:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-inputtext.p-invalid.p-component {
                    border-color: #f44435;
                }
                .p-inputtext.p-inputtext-sm {
                    font-size: 0.875rem;
                    padding: 0.65625rem 0.65625rem;
                }
                .p-inputtext.p-inputtext-lg {
                    font-size: 1.25rem;
                    padding: 0.9375rem 0.9375rem;
                }

                .p-float-label > label {
                    left: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    transition-duration: 0.2s;
                }

                .p-float-label > label.p-error {
                    color: #f44435;
                }

                .p-input-icon-left > i:first-of-type,
                .p-input-icon-left > svg:first-of-type,
                .p-input-icon-left > .p-input-prefix {
                    left: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-input-icon-left > .p-inputtext {
                    padding-left: 2.5rem;
                }

                .p-input-icon-left.p-float-label > label {
                    left: 2.5rem;
                }

                .p-input-icon-right > i:last-of-type,
                .p-input-icon-right > svg:last-of-type,
                .p-input-icon-right > .p-input-suffix {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-input-icon-right > .p-inputtext {
                    padding-right: 2.5rem;
                }

                ::-webkit-input-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                :-moz-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                ::-moz-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                :-ms-input-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-input-filled .p-inputtext {
                    background-color: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled .p-inputtext:enabled:hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled .p-inputtext:enabled:focus {
                    background-color: hsla(0, 0%, 100%, 0.1);
                }

                .p-inputtext-sm .p-inputtext {
                    font-size: 0.875rem;
                    padding: 0.65625rem 0.65625rem;
                }

                .p-inputtext-lg .p-inputtext {
                    font-size: 1.25rem;
                    padding: 0.9375rem 0.9375rem;
                }

                .p-listbox {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    border-radius: 4px;
                }
                .p-listbox .p-listbox-header {
                    padding: 0.75rem;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-listbox .p-listbox-header .p-listbox-filter {
                    padding-right: 1.75rem;
                }
                .p-listbox .p-listbox-header .p-listbox-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-listbox .p-listbox-list {
                    padding: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item {
                    margin: 0;
                    padding: 0.75rem 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    transition: none;
                    border-radius: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-listbox .p-listbox-list .p-listbox-item-group {
                    margin: 0;
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    font-weight: 400;
                }
                .p-listbox .p-listbox-list .p-listbox-empty-message {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }
                .p-listbox:not(.p-disabled)
                    .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-listbox.p-invalid {
                    border-color: #f44435;
                }

                .p-mention-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-mention-panel .p-mention-items {
                    padding: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item {
                    margin: 0;
                    padding: 0.75rem 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item:hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }

                .p-multiselect {
                    background: #1e1e1e;
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                }
                .p-multiselect:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-multiselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-multiselect.p-multiselect-clearable .p-multiselect-label {
                    padding-right: 1.75rem;
                }
                .p-multiselect .p-multiselect-label {
                    padding: 0.75rem 0.75rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-multiselect .p-multiselect-label.p-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-multiselect.p-multiselect-chip .p-multiselect-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 16px;
                }
                .p-multiselect.p-multiselect-chip
                    .p-multiselect-token
                    .p-multiselect-token-icon {
                    margin-left: 0.5rem;
                }
                .p-multiselect .p-multiselect-trigger {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-multiselect .p-multiselect-clear-icon {
                    color: rgba(255, 255, 255, 0.6);
                    right: 2.357rem;
                }
                .p-multiselect.p-invalid.p-component {
                    border-color: #f44435;
                }

                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label {
                    padding: 0.375rem 0.75rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label.p-multiselect-items-label {
                    padding: 0.75rem 0.75rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable
                    .p-multiselect-label {
                    padding-right: 1.75rem;
                }

                .p-multiselect-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-multiselect-panel .p-multiselect-header {
                    padding: 0.75rem;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    background: #2b2b2b;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
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
                    padding-right: 1.75rem;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-filter-container
                    .p-multiselect-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-multiselect-panel .p-multiselect-items {
                    padding: 0;
                }
                .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
                    margin: 0;
                    padding: 0.75rem 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    font-weight: 400;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-empty-message {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }

                .p-input-filled .p-multiselect {
                    background: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled .p-multiselect:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
                    background-color: hsla(0, 0%, 100%, 0.1);
                }

                .p-password.p-invalid.p-component > .p-inputtext {
                    border-color: #f44435;
                }

                .p-password-panel {
                    padding: 0.75rem;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-password-panel .p-password-meter {
                    margin-bottom: 0.5rem;
                    background: rgba(159, 168, 218, 0.32);
                }
                .p-password-panel .p-password-meter .p-password-strength.weak {
                    background: #ef9a9a;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.medium {
                    background: #fff59d;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.strong {
                    background: #c5e1a5;
                }

                .p-radiobutton {
                    width: 20px;
                    height: 20px;
                }
                .p-radiobutton .p-radiobutton-box {
                    border: 2px solid hsla(0, 0%, 100%, 0.7);
                    background: #1e1e1e;
                    width: 20px;
                    height: 20px;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 50%;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
                    width: 10px;
                    height: 10px;
                    transition-duration: 0.2s;
                    background-color: #9fa8da;
                }
                .p-radiobutton .p-radiobutton-box.p-highlight {
                    border-color: #9fa8da;
                    background: #121212;
                }
                .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    border-color: #9fa8da;
                    background: #121212;
                    color: #9fa8da;
                }
                .p-radiobutton.p-invalid > .p-radiobutton-box {
                    border-color: #f44435;
                }
                .p-radiobutton:focus {
                    outline: 0 none;
                }

                .p-input-filled .p-radiobutton .p-radiobutton-box {
                    background-color: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
                    background: #121212;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    background: #121212;
                }

                .p-rating {
                    gap: 0.5rem;
                }
                .p-rating .p-rating-item .p-rating-icon {
                    color: #9fa8da;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    font-size: 1rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-icon {
                    width: 1rem;
                    height: 1rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
                    color: #f44435;
                }
                .p-rating .p-rating-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
                    color: #9fa8da;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon {
                    color: #9fa8da;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon.p-rating-cancel {
                    color: #f44435;
                }

                .p-selectbutton .p-button {
                    background: #2f2f2f;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-selectbutton .p-button .p-button-icon-left,
                .p-selectbutton .p-button .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover {
                    background: #373737;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-left,
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-selectbutton .p-button.p-highlight {
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-selectbutton .p-button.p-highlight .p-button-icon-left,
                .p-selectbutton .p-button.p-highlight .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-selectbutton .p-button.p-highlight:hover {
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
                .p-selectbutton
                    .p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-selectbutton.p-invalid > .p-button {
                    border-color: #f44435;
                }

                .p-slider {
                    background: hsla(0, 0%, 100%, 0.3);
                    border: 0 none;
                    border-radius: 4px;
                }
                .p-slider.p-slider-horizontal {
                    height: 2px;
                }
                .p-slider.p-slider-horizontal .p-slider-handle {
                    margin-top: -10px;
                    margin-left: -10px;
                }
                .p-slider.p-slider-vertical {
                    width: 2px;
                }
                .p-slider.p-slider-vertical .p-slider-handle {
                    margin-left: -10px;
                    margin-bottom: -10px;
                }
                .p-slider .p-slider-handle {
                    height: 20px;
                    width: 20px;
                    background: #9fa8da;
                    border: 0 none;
                    border-radius: 50%;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-slider .p-slider-handle:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-slider .p-slider-range {
                    background: #9fa8da;
                }
                .p-slider:not(.p-disabled) .p-slider-handle:hover {
                    background: #9fa8da;
                    border-color: 0 none;
                }

                .p-treeselect {
                    background: #1e1e1e;
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                }
                .p-treeselect:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-treeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                    border-color: #9fa8da;
                }
                .p-treeselect .p-treeselect-label {
                    padding: 0.75rem 0.75rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-treeselect .p-treeselect-label.p-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-treeselect.p-treeselect-chip .p-treeselect-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 16px;
                }
                .p-treeselect .p-treeselect-trigger {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-treeselect.p-invalid.p-component {
                    border-color: #f44435;
                }

                .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-label {
                    padding: 0.375rem 0.75rem;
                }

                .p-treeselect-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                }
                .p-treeselect-panel .p-treeselect-header {
                    padding: 0.75rem;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    background: #2b2b2b;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
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
                    padding-right: 1.75rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container
                    .p-treeselect-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container.p-treeselect-clearable-filter
                    .p-treeselect-filter {
                    padding-right: 3.5rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container.p-treeselect-clearable-filter
                    .p-treeselect-filter-clear-icon {
                    right: 2.5rem;
                }
                .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
                    border: 0 none;
                }
                .p-treeselect-panel
                    .p-treeselect-items-wrapper
                    .p-treeselect-empty-message {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }

                .p-input-filled .p-treeselect {
                    background: hsla(0, 0%, 100%, 0.06);
                }
                .p-input-filled .p-treeselect:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                }
                .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
                    background-color: hsla(0, 0%, 100%, 0.1);
                }

                .p-togglebutton.p-button {
                    background: #2f2f2f;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-togglebutton.p-button .p-button-icon-left,
                .p-togglebutton.p-button .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #373737;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-left,
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-togglebutton.p-button.p-highlight {
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-togglebutton.p-button.p-highlight .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-togglebutton.p-button.p-highlight:hover {
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-togglebutton.p-button.p-invalid > .p-button {
                    border-color: #f44435;
                }

                .p-button {
                    color: #121212;
                    background: #9fa8da;
                    border: 0 none;
                    padding: 0.571rem 0.75rem;
                    font-size: 1rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                }
                .p-button:enabled:hover,
                .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(159, 168, 218, 0.92);
                    color: #121212;
                    border-color: transparent;
                }
                .p-button:enabled:active,
                .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 168, 218, 0.68);
                    color: #121212;
                    border-color: transparent;
                }
                .p-button.p-button-outlined {
                    background-color: transparent;
                    color: #9fa8da;
                    border: 0 none;
                }
                .p-button.p-button-outlined:enabled:hover,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(159, 168, 218, 0.04);
                    color: #9fa8da;
                    border: 0 none;
                }
                .p-button.p-button-outlined:enabled:active,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                    border: 0 none;
                }
                .p-button.p-button-outlined.p-button-plain {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-button.p-button-outlined.p-button-plain:enabled:hover,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-button.p-button-outlined.p-button-plain:enabled:active,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):active {
                    background: rgba(255, 255, 255, 0.16);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-button.p-button-text {
                    background-color: transparent;
                    color: #9fa8da;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:hover,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(159, 168, 218, 0.04);
                    color: #9fa8da;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:active,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                    border-color: transparent;
                }
                .p-button.p-button-text.p-button-plain {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-button.p-button-text.p-button-plain:enabled:hover,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-button.p-button-text.p-button-plain:enabled:active,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(255, 255, 255, 0.16);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    color: #9fa8da;
                    background-color: #121212;
                }
                .p-button.p-button-raised {
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
                .p-button.p-button-rounded {
                    border-radius: 2rem;
                }
                .p-button.p-button-icon-only {
                    width: 2.25rem;
                    padding: 0.571rem;
                }
                .p-button.p-button-icon-only .p-button-icon-left,
                .p-button.p-button-icon-only .p-button-icon-right {
                    margin: 0;
                }
                .p-button.p-button-icon-only.p-button-rounded {
                    border-radius: 50%;
                    height: 2.25rem;
                }
                .p-button.p-button-sm {
                    font-size: 0.875rem;
                    padding: 0.499625rem 0.65625rem;
                }
                .p-button.p-button-sm .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-button.p-button-lg {
                    font-size: 1.25rem;
                    padding: 0.71375rem 0.9375rem;
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
                    width: 2.25rem;
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
                    background: #f48fb1;
                    border: 0 none;
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
                    background: rgba(244, 143, 177, 0.92);
                    color: #121212;
                    border-color: transparent;
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
                    box-shadow: none;
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
                    background: rgba(244, 143, 177, 0.68);
                    color: #121212;
                    border-color: transparent;
                }
                .p-button.p-button-secondary.p-button-outlined,
                .p-buttonset.p-button-secondary > .p-button.p-button-outlined,
                .p-splitbutton.p-button-secondary > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-secondary.p-button-outlined {
                    background-color: transparent;
                    color: #f48fb1;
                    border: 0 none;
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
                    background: rgba(244, 143, 177, 0.04);
                    color: #f48fb1;
                    border: 0 none;
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
                    background: rgba(244, 143, 177, 0.16);
                    color: #f48fb1;
                    border: 0 none;
                }
                .p-button.p-button-secondary.p-button-text,
                .p-buttonset.p-button-secondary > .p-button.p-button-text,
                .p-splitbutton.p-button-secondary > .p-button.p-button-text,
                .p-fileupload-choose.p-button-secondary.p-button-text {
                    background-color: transparent;
                    color: #f48fb1;
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
                    background: rgba(244, 143, 177, 0.04);
                    border-color: transparent;
                    color: #f48fb1;
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
                    background: rgba(244, 143, 177, 0.16);
                    border-color: transparent;
                    color: #f48fb1;
                }

                .p-button.p-button-info,
                .p-buttonset.p-button-info > .p-button,
                .p-splitbutton.p-button-info > .p-button,
                .p-fileupload-choose.p-button-info {
                    color: #212121;
                    background: #90caf9;
                    border: 0 none;
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
                    background: rgba(144, 202, 249, 0.92);
                    color: #212121;
                    border-color: transparent;
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
                    box-shadow: none;
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
                    background: rgba(144, 202, 249, 0.68);
                    color: #212121;
                    border-color: transparent;
                }
                .p-button.p-button-info.p-button-outlined,
                .p-buttonset.p-button-info > .p-button.p-button-outlined,
                .p-splitbutton.p-button-info > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-info.p-button-outlined {
                    background-color: transparent;
                    color: #90caf9;
                    border: 0 none;
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
                    background: rgba(144, 202, 249, 0.04);
                    color: #90caf9;
                    border: 0 none;
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
                    background: rgba(144, 202, 249, 0.16);
                    color: #90caf9;
                    border: 0 none;
                }
                .p-button.p-button-info.p-button-text,
                .p-buttonset.p-button-info > .p-button.p-button-text,
                .p-splitbutton.p-button-info > .p-button.p-button-text,
                .p-fileupload-choose.p-button-info.p-button-text {
                    background-color: transparent;
                    color: #90caf9;
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
                    background: rgba(144, 202, 249, 0.04);
                    border-color: transparent;
                    color: #90caf9;
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
                    background: rgba(144, 202, 249, 0.16);
                    border-color: transparent;
                    color: #90caf9;
                }

                .p-button.p-button-success,
                .p-buttonset.p-button-success > .p-button,
                .p-splitbutton.p-button-success > .p-button,
                .p-fileupload-choose.p-button-success {
                    color: #212121;
                    background: #c5e1a5;
                    border: 0 none;
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
                    background: rgba(197, 225, 165, 0.92);
                    color: #212121;
                    border-color: transparent;
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
                    box-shadow: none;
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
                    background: rgba(197, 225, 165, 0.68);
                    color: #212121;
                    border-color: transparent;
                }
                .p-button.p-button-success.p-button-outlined,
                .p-buttonset.p-button-success > .p-button.p-button-outlined,
                .p-splitbutton.p-button-success > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-success.p-button-outlined {
                    background-color: transparent;
                    color: #c5e1a5;
                    border: 0 none;
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
                    background: rgba(197, 225, 165, 0.04);
                    color: #c5e1a5;
                    border: 0 none;
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
                    background: rgba(197, 225, 165, 0.16);
                    color: #c5e1a5;
                    border: 0 none;
                }
                .p-button.p-button-success.p-button-text,
                .p-buttonset.p-button-success > .p-button.p-button-text,
                .p-splitbutton.p-button-success > .p-button.p-button-text,
                .p-fileupload-choose.p-button-success.p-button-text {
                    background-color: transparent;
                    color: #c5e1a5;
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
                    background: rgba(197, 225, 165, 0.04);
                    border-color: transparent;
                    color: #c5e1a5;
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
                    background: rgba(197, 225, 165, 0.16);
                    border-color: transparent;
                    color: #c5e1a5;
                }

                .p-button.p-button-warning,
                .p-buttonset.p-button-warning > .p-button,
                .p-splitbutton.p-button-warning > .p-button,
                .p-fileupload-choose.p-button-warning {
                    color: #212121;
                    background: #fff59d;
                    border: 0 none;
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
                    background: rgba(255, 245, 157, 0.92);
                    color: #212121;
                    border-color: transparent;
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
                    box-shadow: none;
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
                    background: rgba(255, 245, 157, 0.68);
                    color: #212121;
                    border-color: transparent;
                }
                .p-button.p-button-warning.p-button-outlined,
                .p-buttonset.p-button-warning > .p-button.p-button-outlined,
                .p-splitbutton.p-button-warning > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-warning.p-button-outlined {
                    background-color: transparent;
                    color: #fff59d;
                    border: 0 none;
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
                    background: rgba(255, 245, 157, 0.04);
                    color: #fff59d;
                    border: 0 none;
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
                    background: rgba(255, 245, 157, 0.16);
                    color: #fff59d;
                    border: 0 none;
                }
                .p-button.p-button-warning.p-button-text,
                .p-buttonset.p-button-warning > .p-button.p-button-text,
                .p-splitbutton.p-button-warning > .p-button.p-button-text,
                .p-fileupload-choose.p-button-warning.p-button-text {
                    background-color: transparent;
                    color: #fff59d;
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
                    background: rgba(255, 245, 157, 0.04);
                    border-color: transparent;
                    color: #fff59d;
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
                    background: rgba(255, 245, 157, 0.16);
                    border-color: transparent;
                    color: #fff59d;
                }

                .p-button.p-button-help,
                .p-buttonset.p-button-help > .p-button,
                .p-splitbutton.p-button-help > .p-button,
                .p-fileupload-choose.p-button-help {
                    color: #212121;
                    background: #ce93d8;
                    border: 0 none;
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
                    background: rgba(206, 147, 216, 0.92);
                    color: #212121;
                    border-color: transparent;
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
                    box-shadow: none;
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
                    background: rgba(206, 147, 216, 0.68);
                    color: #212121;
                    border-color: transparent;
                }
                .p-button.p-button-help.p-button-outlined,
                .p-buttonset.p-button-help > .p-button.p-button-outlined,
                .p-splitbutton.p-button-help > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-help.p-button-outlined {
                    background-color: transparent;
                    color: #ce93d8;
                    border: 0 none;
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
                    border: 0 none;
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
                    border: 0 none;
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
                    color: #212121;
                    background: #ef9a9a;
                    border: 0 none;
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
                    background: rgba(239, 154, 154, 0.92);
                    color: #212121;
                    border-color: transparent;
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
                    box-shadow: none;
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
                    background: rgba(239, 154, 154, 0.68);
                    color: #212121;
                    border-color: transparent;
                }
                .p-button.p-button-danger.p-button-outlined,
                .p-buttonset.p-button-danger > .p-button.p-button-outlined,
                .p-splitbutton.p-button-danger > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-danger.p-button-outlined {
                    background-color: transparent;
                    color: #ef9a9a;
                    border: 0 none;
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
                    background: rgba(239, 154, 154, 0.04);
                    color: #ef9a9a;
                    border: 0 none;
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
                    background: rgba(239, 154, 154, 0.16);
                    color: #ef9a9a;
                    border: 0 none;
                }
                .p-button.p-button-danger.p-button-text,
                .p-buttonset.p-button-danger > .p-button.p-button-text,
                .p-splitbutton.p-button-danger > .p-button.p-button-text,
                .p-fileupload-choose.p-button-danger.p-button-text {
                    background-color: transparent;
                    color: #ef9a9a;
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
                    background: rgba(239, 154, 154, 0.04);
                    border-color: transparent;
                    color: #ef9a9a;
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
                    background: rgba(239, 154, 154, 0.16);
                    border-color: transparent;
                    color: #ef9a9a;
                }

                .p-button.p-button-link {
                    color: #9fa8da;
                    background: transparent;
                    border: transparent;
                }
                .p-button.p-button-link:enabled:hover,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: transparent;
                    color: #9fa8da;
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
                    box-shadow: none;
                    border-color: transparent;
                }
                .p-button.p-button-link:enabled:active,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: transparent;
                    color: #9fa8da;
                    border-color: transparent;
                }

                .p-splitbutton {
                    border-radius: 4px;
                }
                .p-splitbutton.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #9fa8da;
                    border: 0 none;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(159, 168, 218, 0.04);
                    color: #9fa8da;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 255, 255, 0.16);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-splitbutton.p-button-text > .p-button {
                    background-color: transparent;
                    color: #9fa8da;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:hover,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(159, 168, 218, 0.04);
                    color: #9fa8da;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:active,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text.p-button-plain > .p-button {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 255, 255, 0.16);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-splitbutton.p-button-raised {
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }
                .p-splitbutton.p-button-rounded {
                    border-radius: 2rem;
                }
                .p-splitbutton.p-button-rounded > .p-button {
                    border-radius: 2rem;
                }
                .p-splitbutton.p-button-sm > .p-button {
                    font-size: 0.875rem;
                    padding: 0.499625rem 0.65625rem;
                }
                .p-splitbutton.p-button-sm > .p-button .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-splitbutton.p-button-lg > .p-button {
                    font-size: 1.25rem;
                    padding: 0.71375rem 0.9375rem;
                }
                .p-splitbutton.p-button-lg > .p-button .p-button-icon {
                    font-size: 1.25rem;
                }

                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button {
                    background-color: transparent;
                    color: #f48fb1;
                    border: 0 none;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(244, 143, 177, 0.04);
                    color: #f48fb1;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(244, 143, 177, 0.16);
                    color: #f48fb1;
                }
                .p-splitbutton.p-button-secondary.p-button-text > .p-button {
                    background-color: transparent;
                    color: #f48fb1;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(244, 143, 177, 0.04);
                    border-color: transparent;
                    color: #f48fb1;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(244, 143, 177, 0.16);
                    border-color: transparent;
                    color: #f48fb1;
                }

                .p-splitbutton.p-button-info.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #90caf9;
                    border: 0 none;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(144, 202, 249, 0.04);
                    color: #90caf9;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(144, 202, 249, 0.16);
                    color: #90caf9;
                }
                .p-splitbutton.p-button-info.p-button-text > .p-button {
                    background-color: transparent;
                    color: #90caf9;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(144, 202, 249, 0.04);
                    border-color: transparent;
                    color: #90caf9;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(144, 202, 249, 0.16);
                    border-color: transparent;
                    color: #90caf9;
                }

                .p-splitbutton.p-button-success.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #c5e1a5;
                    border: 0 none;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(197, 225, 165, 0.04);
                    color: #c5e1a5;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(197, 225, 165, 0.16);
                    color: #c5e1a5;
                }
                .p-splitbutton.p-button-success.p-button-text > .p-button {
                    background-color: transparent;
                    color: #c5e1a5;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(197, 225, 165, 0.04);
                    border-color: transparent;
                    color: #c5e1a5;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(197, 225, 165, 0.16);
                    border-color: transparent;
                    color: #c5e1a5;
                }

                .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #fff59d;
                    border: 0 none;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 245, 157, 0.04);
                    color: #fff59d;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 245, 157, 0.16);
                    color: #fff59d;
                }
                .p-splitbutton.p-button-warning.p-button-text > .p-button {
                    background-color: transparent;
                    color: #fff59d;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 245, 157, 0.04);
                    border-color: transparent;
                    color: #fff59d;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 245, 157, 0.16);
                    border-color: transparent;
                    color: #fff59d;
                }

                .p-splitbutton.p-button-help.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #ce93d8;
                    border: 0 none;
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
                    color: #ef9a9a;
                    border: 0 none;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(239, 154, 154, 0.04);
                    color: #ef9a9a;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(239, 154, 154, 0.16);
                    color: #ef9a9a;
                }
                .p-splitbutton.p-button-danger.p-button-text > .p-button {
                    background-color: transparent;
                    color: #ef9a9a;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(239, 154, 154, 0.04);
                    border-color: transparent;
                    color: #ef9a9a;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(239, 154, 154, 0.16);
                    border-color: transparent;
                    color: #ef9a9a;
                }

                .p-speeddial-button.p-button.p-button-icon-only {
                    width: 4rem;
                    height: 4rem;
                }
                .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
                    font-size: 2rem;
                }
                .p-speeddial-button.p-button.p-button-icon-only
                    .p-button-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }

                .p-speeddial-action {
                    width: 3rem;
                    height: 3rem;
                    background: #f48fb1;
                    color: #212121;
                }
                .p-speeddial-action:hover {
                    background: rgba(244, 143, 177, 0.92);
                    color: #212121;
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
                    background-color: rgba(0, 0, 0, 0.32);
                }

                .p-carousel .p-carousel-content .p-carousel-prev,
                .p-carousel .p-carousel-content .p-carousel-next {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin: 0.5rem;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
                .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-carousel .p-carousel-content .p-carousel-prev:focus,
                .p-carousel .p-carousel-content .p-carousel-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    background-color: rgba(255, 255, 255, 0.3);
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
                    background: rgba(255, 255, 255, 0.6);
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }

                .p-datatable .p-paginator-top {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-datatable .p-paginator-bottom {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-datatable .p-datatable-header {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                }
                .p-datatable .p-datatable-footer {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                }
                .p-datatable .p-datatable-thead > tr > th {
                    text-align: left;
                    padding: 0.75rem 0.75rem;
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    transition: none;
                }
                .p-datatable .p-datatable-tfoot > tr > td {
                    text-align: left;
                    padding: 0.75rem 0.75rem;
                    border: 1px solid 3404040;
                    border-width: 0 0 1px 0;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                }
                .p-datatable .p-sortable-column .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-left: 0.5rem;
                }
                .p-datatable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                    margin-left: 0.5rem;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-datatable .p-sortable-column.p-highlight {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable .p-sortable-column:focus {
                    box-shadow: none;
                    outline: 0 none;
                }
                .p-datatable .p-datatable-tbody > tr {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    transition: none;
                }
                .p-datatable .p-datatable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
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
                    box-shadow: none;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
                    margin-right: 0.5rem;
                }
                .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
                    font-weight: 500;
                }
                .p-datatable .p-datatable-tbody > tr > td.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-datatable .p-datatable-tbody > tr.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 rgba(159, 168, 218, 0.16);
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 rgba(159, 168, 218, 0.16);
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:focus {
                    outline: 0.15rem solid transparent;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:focus {
                    outline: 0.15rem solid transparent;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-hoverable-rows
                    .p-datatable-tbody
                    > tr:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable .p-column-resizer-helper {
                    background: #9fa8da;
                }
                .p-datatable .p-datatable-scrollable-header,
                .p-datatable .p-datatable-scrollable-footer {
                    background: #1e1e1e;
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
                    background-color: #1e1e1e;
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
                    background: #222222;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler {
                    color: #9fa8da;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler:hover {
                    color: #9fa8da;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd
                    + .p-row-expanded {
                    background: #222222;
                }
                .p-datatable.p-datatable-sm .p-datatable-header {
                    padding: 0.375rem 0.375rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
                    padding: 0.375rem 0.375rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
                    padding: 0.375rem 0.375rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
                    padding: 0.375rem 0.375rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-footer {
                    padding: 0.375rem 0.375rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-header {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-footer {
                    padding: 0.9375rem 0.9375rem;
                }

                .p-datatable-drag-selection-helper {
                    background: rgba(159, 168, 218, 0.16);
                }

                .p-dataview .p-paginator-top {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-dataview .p-paginator-bottom {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-dataview .p-dataview-header {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                }
                .p-dataview .p-dataview-content {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    padding: 0.75rem;
                }
                .p-dataview.p-dataview-list
                    .p-dataview-content
                    > .p-grid
                    > div {
                    border: solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                }
                .p-dataview .p-dataview-footer {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-dataview .p-dataview-loading-icon {
                    font-size: 2rem;
                }
                .p-dataview .p-dataview-loading-icon.p-icon {
                    width: 2rem;
                    height: 2rem;
                }

                .p-datascroller .p-paginator-top {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-datascroller .p-paginator-bottom {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-datascroller .p-datascroller-header {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                }
                .p-datascroller .p-datascroller-content {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    padding: 0.75rem;
                }
                .p-datascroller.p-datascroller-inline
                    .p-datascroller-list
                    > li {
                    border: solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                }
                .p-datascroller .p-datascroller-footer {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }

                .p-column-filter-row .p-column-filter-menu-button,
                .p-column-filter-row .p-column-filter-clear-button {
                    margin-left: 0.5rem;
                }

                .p-column-filter-menu-button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-menu-button:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-open,
                .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-active,
                .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-column-filter-menu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }

                .p-column-filter-clear-button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-clear-button:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-column-filter-clear-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }

                .p-column-filter-overlay {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                    min-width: 12.5rem;
                }
                .p-column-filter-overlay .p-column-filter-row-items {
                    padding: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item {
                    margin: 0;
                    padding: 0.75rem 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
                }

                .p-column-filter-overlay-menu .p-column-filter-operator {
                    padding: 0.75rem;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    background: #2b2b2b;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-column-filter-overlay-menu .p-column-filter-constraint {
                    padding: 0.75rem;
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
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
                    padding: 0.75rem 0.75rem;
                }
                .p-column-filter-overlay-menu .p-column-filter-buttonbar {
                    padding: 0.75rem;
                }

                .fc {
                    /* FullCalendar 4 */
                    /* FullCalendar 5 */
                }
                .fc.fc-unthemed .fc-view-container th {
                    background: #1e1e1e;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-unthemed .fc-view-container td.fc-widget-content {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-unthemed .fc-view-container td.fc-head-container {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .fc.fc-unthemed .fc-view-container .fc-view {
                    background: #1e1e1e;
                }
                .fc.fc-unthemed .fc-view-container .fc-row {
                    border-right: 1px solid rgba(255, 255, 255, 0.12);
                }
                .fc.fc-unthemed .fc-view-container .fc-event {
                    background: rgba(159, 168, 218, 0.16);
                    border: 1px solid rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .fc.fc-unthemed .fc-view-container .fc-divider {
                    background: #1e1e1e;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                }
                .fc.fc-unthemed .fc-toolbar .fc-button {
                    color: #121212;
                    background: #9fa8da;
                    border: 0 none;
                    font-size: 1rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
                    background: rgba(159, 168, 218, 0.92);
                    color: #121212;
                    border-color: transparent;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
                    background: rgba(159, 168, 218, 0.68);
                    color: #121212;
                    border-color: transparent;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    box-shadow: none;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
                    background: #2f2f2f;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
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
                    background: #373737;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
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
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
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
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
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
                    box-shadow: none;
                    z-index: 1;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {
                    border-radius: 0;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:first-child {
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:last-child {
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .fc.fc-theme-standard .fc-view-harness th {
                    background: #1e1e1e;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-theme-standard .fc-view-harness td {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .fc.fc-theme-standard .fc-view-harness .fc-view {
                    background: #1e1e1e;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-popover {
                    background: none;
                    border: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 0.75rem;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-body {
                    padding: 0.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                    border-color: rgba(159, 168, 218, 0.16);
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event
                    .fc-event-main {
                    color: #9fa8da;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event
                    .fc-daygrid-event-dot {
                    background: rgba(159, 168, 218, 0.16);
                    border-color: rgba(159, 168, 218, 0.16);
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event:hover {
                    background: hsla(0, 0%, 100%, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
                    background: #1e1e1e;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button {
                    color: #121212;
                    background: #9fa8da;
                    border: 0 none;
                    font-size: 1rem;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                    border-radius: 4px;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
                    background: rgba(159, 168, 218, 0.92);
                    color: #121212;
                    border-color: transparent;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
                    background: rgba(159, 168, 218, 0.68);
                    color: #121212;
                    border-color: transparent;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
                    opacity: 0.38;
                    color: #121212;
                    background: #9fa8da;
                    border: 0 none;
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
                    box-shadow: none;
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
                    background: #2f2f2f;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
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
                    background: #373737;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
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
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
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
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
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
                    box-shadow: none;
                    z-index: 1;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {
                    border-radius: 0;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:first-child {
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:last-child {
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .fc.fc-theme-standard .fc-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }

                .p-orderlist .p-orderlist-controls {
                    padding: 0.75rem;
                }
                .p-orderlist .p-orderlist-controls .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-orderlist .p-orderlist-header {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 0.75rem;
                    font-weight: 500;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-orderlist .p-orderlist-filter-container {
                    padding: 0.75rem;
                    background: #1e1e1e;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-bottom: 0 none;
                }
                .p-orderlist
                    .p-orderlist-filter-container
                    .p-orderlist-filter-input {
                    padding-right: 1.75rem;
                }
                .p-orderlist
                    .p-orderlist-filter-container
                    .p-orderlist-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-orderlist .p-orderlist-list {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item {
                    padding: 0.75rem 0.75rem;
                    margin: 0;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: transform 0.2s, none;
                }
                .p-orderlist
                    .p-orderlist-list
                    .p-orderlist-item:not(.p-highlight):hover {
                    background: hsla(0, 0%, 100%, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even) {
                    background: rgba(255, 255, 255, 0.02);
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even):hover {
                    background: hsla(0, 0%, 100%, 0.04);
                }

                .p-organizationchart
                    .p-organizationchart-node-content.p-organizationchart-selectable-node:not(
                        .p-highlight
                    ):hover {
                    background: hsla(0, 0%, 100%, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight
                    .p-node-toggler
                    i {
                    color: rgba(69, 86, 180, 0.16);
                }
                .p-organizationchart .p-organizationchart-line-down {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid rgba(255, 255, 255, 0.12);
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid rgba(255, 255, 255, 0.12);
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .p-organizationchart .p-organizationchart-node-content {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.75rem;
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
                    box-shadow: none;
                }

                .p-paginator {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: solid #404040;
                    border-width: 0;
                    padding: 0.375rem 0.75rem;
                    border-radius: 4px;
                }
                .p-paginator .p-paginator-first,
                .p-paginator .p-paginator-prev,
                .p-paginator .p-paginator-next,
                .p-paginator .p-paginator-last {
                    background-color: transparent;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.6);
                    min-width: 3rem;
                    height: 3rem;
                    margin: 0.143rem;
                    transition: none;
                    border-radius: 50%;
                }
                .p-paginator
                    .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: transparent;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-paginator .p-paginator-first {
                    border-top-left-radius: 50%;
                    border-bottom-left-radius: 50%;
                }
                .p-paginator .p-paginator-last {
                    border-top-right-radius: 50%;
                    border-bottom-right-radius: 50%;
                }
                .p-paginator .p-dropdown {
                    margin-left: 0.5rem;
                    height: 3rem;
                }
                .p-paginator .p-dropdown .p-dropdown-label {
                    padding-right: 0;
                }
                .p-paginator .p-paginator-page-input {
                    margin-left: 0.5rem;
                    margin-right: 0.5rem;
                }
                .p-paginator .p-paginator-page-input .p-inputtext {
                    max-width: 3rem;
                }
                .p-paginator .p-paginator-current {
                    background-color: transparent;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.6);
                    min-width: 3rem;
                    height: 3rem;
                    margin: 0.143rem;
                    padding: 0 0.5rem;
                }
                .p-paginator .p-paginator-pages .p-paginator-page {
                    background-color: transparent;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.6);
                    min-width: 3rem;
                    height: 3rem;
                    margin: 0.143rem;
                    transition: none;
                    border-radius: 50%;
                }
                .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    border-color: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-paginator
                    .p-paginator-pages
                    .p-paginator-page:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: transparent;
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-picklist .p-picklist-buttons {
                    padding: 0.75rem;
                }
                .p-picklist .p-picklist-buttons .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-picklist .p-picklist-header {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 0.75rem;
                    font-weight: 500;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-picklist .p-picklist-filter-container {
                    padding: 0.75rem;
                    background: #1e1e1e;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-bottom: 0 none;
                }
                .p-picklist
                    .p-picklist-filter-container
                    .p-picklist-filter-input {
                    padding-right: 1.75rem;
                }
                .p-picklist
                    .p-picklist-filter-container
                    .p-picklist-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-picklist .p-picklist-list {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-picklist .p-picklist-list .p-picklist-item {
                    padding: 0.75rem 0.75rem;
                    margin: 0;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: transform 0.2s, none;
                }
                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:not(.p-highlight):hover {
                    background: hsla(0, 0%, 100%, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-picklist .p-picklist-list .p-picklist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                }

                .p-tree {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.75rem;
                    border-radius: 4px;
                }
                .p-tree .p-tree-container .p-treenode {
                    padding: 0.25rem;
                }
                .p-tree .p-tree-container .p-treenode .p-treenode-content {
                    border-radius: 4px;
                    transition: none;
                    padding: 0.25rem;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler {
                    margin-right: 0.5rem;
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-treenode-icon {
                    margin-right: 0.5rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
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
                    color: #9fa8da;
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
                    color: #9fa8da;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-selectable:not(
                        .p-highlight
                    ):hover {
                    background: hsla(0, 0%, 100%, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-dragover {
                    background: hsla(0, 0%, 100%, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tree .p-tree-filter-container {
                    margin-bottom: 0.5rem;
                }
                .p-tree .p-tree-filter-container .p-tree-filter {
                    width: 100%;
                    padding-right: 1.75rem;
                }
                .p-tree .p-tree-filter-container .p-tree-filter-icon {
                    right: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    background: rgba(105, 119, 197, 0.16);
                }

                .p-treetable .p-paginator-top {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-treetable .p-paginator-bottom {
                    border-width: 0 0 1px 0;
                    border-radius: 0;
                }
                .p-treetable .p-treetable-header {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                }
                .p-treetable .p-treetable-footer {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                    font-weight: 500;
                }
                .p-treetable .p-treetable-thead > tr > th {
                    text-align: left;
                    padding: 0.75rem 0.75rem;
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    transition: none;
                }
                .p-treetable .p-treetable-tfoot > tr > td {
                    text-align: left;
                    padding: 0.75rem 0.75rem;
                    border: 1px solid 3404040;
                    border-width: 0 0 1px 0;
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                }
                .p-treetable .p-sortable-column {
                    outline-color: transparent;
                }
                .p-treetable .p-sortable-column .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #9fa8da;
                    background: rgba(159, 168, 218, 0.16);
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable
                    .p-sortable-column:not(.p-highlight):hover
                    .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-treetable .p-sortable-column.p-highlight {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable .p-treetable-tbody > tr {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    transition: none;
                }
                .p-treetable .p-treetable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #404040;
                    border-width: 0 0 1px 0;
                    padding: 0.75rem 0.75rem;
                }
                .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable .p-treetable-tbody > tr:focus {
                    outline: 0.15rem solid transparent;
                    outline-offset: -0.15rem;
                }
                .p-treetable .p-treetable-tbody > tr.p-highlight {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler {
                    color: #9fa8da;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler:hover {
                    color: #9fa8da;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable .p-column-resizer-helper {
                    background: #9fa8da;
                }
                .p-treetable .p-treetable-scrollable-header,
                .p-treetable .p-treetable-scrollable-footer {
                    background: #1e1e1e;
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
                    padding: 0.65625rem 0.65625rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
                    padding: 0.375rem 0.375rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
                    padding: 0.375rem 0.375rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
                    padding: 0.375rem 0.375rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-footer {
                    padding: 0.375rem 0.375rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-header {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
                    padding: 0.9375rem 0.9375rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-footer {
                    padding: 0.9375rem 0.9375rem;
                }

                .p-timeline .p-timeline-event-marker {
                    border: 0 none;
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                    background-color: #bdbdbd;
                }
                .p-timeline .p-timeline-event-connector {
                    background-color: #bdbdbd;
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
                    padding: 1.25rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    font-weight: 400;
                    border-radius: 4px;
                    transition: none;
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
                    box-shadow: none;
                }
                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: transparent;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight
                    .p-accordion-header-link {
                    background: #1e1e1e;
                    border-color: transparent;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-accordion .p-accordion-content {
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-accordion .p-accordion-tab {
                    margin-bottom: 0;
                }
                .p-accordion
                    .p-accordion-tab
                    .p-accordion-header
                    .p-accordion-header-link {
                    border-radius: 0;
                }
                .p-accordion .p-accordion-tab .p-accordion-content {
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-accordion
                    .p-accordion-tab:not(:first-child)
                    .p-accordion-header
                    .p-accordion-header-link {
                    border-top: 0 none;
                }
                .p-accordion
                    .p-accordion-tab:not(:first-child)
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link,
                .p-accordion
                    .p-accordion-tab:not(:first-child)
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    border-top: 0 none;
                }
                .p-accordion
                    .p-accordion-tab:first-child
                    .p-accordion-header
                    .p-accordion-header-link {
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-accordion
                    .p-accordion-tab:last-child
                    .p-accordion-header:not(.p-highlight)
                    .p-accordion-header-link {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-accordion
                    .p-accordion-tab:last-child
                    .p-accordion-header:not(.p-highlight)
                    .p-accordion-content {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-card {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 1px 3px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-card .p-card-body {
                    padding: 0.75rem;
                }
                .p-card .p-card-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .p-card .p-card-subtitle {
                    font-weight: 400;
                    margin-bottom: 0.5rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-card .p-card-content {
                    padding: 0.75rem 0;
                }
                .p-card .p-card-footer {
                    padding: 0.75rem 0 0 0;
                }

                .p-fieldset {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                }
                .p-fieldset .p-fieldset-legend {
                    padding: 0.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    font-weight: 500;
                    border-radius: 4px;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
                    padding: 0;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                    transition: none;
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
                    box-shadow: none;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-fieldset .p-fieldset-content {
                    padding: 0.75rem;
                }

                .p-divider .p-divider-content {
                    background-color: #1e1e1e;
                }
                .p-divider.p-divider-horizontal {
                    margin: 1.25rem 0;
                    padding: 0 1.25rem;
                }
                .p-divider.p-divider-horizontal:before {
                    border-top: 1px hsla(0, 0%, 100%, 0.12);
                }
                .p-divider.p-divider-horizontal .p-divider-content {
                    padding: 0 0.5rem;
                }
                .p-divider.p-divider-vertical {
                    margin: 0 1.25rem;
                    padding: 1.25rem 0;
                }
                .p-divider.p-divider-vertical:before {
                    border-left: 1px hsla(0, 0%, 100%, 0.12);
                }
                .p-divider.p-divider-vertical .p-divider-content {
                    padding: 0.5rem 0;
                }

                .p-panel .p-panel-header {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 0.75rem;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-panel .p-panel-header .p-panel-title {
                    font-weight: 500;
                }
                .p-panel .p-panel-header .p-panel-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-panel .p-panel-header .p-panel-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-panel.p-panel-toggleable .p-panel-header {
                    padding: 0.5rem 1rem;
                }
                .p-panel .p-panel-content {
                    padding: 0.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                    border-top: 0 none;
                }
                .p-panel .p-panel-footer {
                    padding: 0.75rem 0.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0 none;
                }

                .p-splitter {
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    background: #1e1e1e;
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-splitter .p-splitter-gutter {
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    background: hsla(0, 0%, 100%, 0.04);
                }
                .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
                    background: hsla(0, 0%, 100%, 0.12);
                }
                .p-splitter .p-splitter-gutter-resizing {
                    background: hsla(0, 0%, 100%, 0.12);
                }

                .p-scrollpanel .p-scrollpanel-bar {
                    background: rgba(255, 255, 255, 0.12);
                    border: 0 none;
                }

                .p-tabview .p-tabview-nav {
                    background: transparent;
                    border: solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                }
                .p-tabview .p-tabview-nav li {
                    margin-right: 0;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    border: solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                    border-color: transparent transparent
                        rgba(255, 255, 255, 0.12) transparent;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    padding: 0.75rem 1.25rem;
                    font-weight: 500;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    transition: none;
                    margin: 0 0 -1px 0;
                }
                .p-tabview
                    .p-tabview-nav
                    li
                    .p-tabview-nav-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset none;
                }
                .p-tabview
                    .p-tabview-nav
                    li:not(.p-highlight):not(.p-disabled):hover
                    .p-tabview-nav-link {
                    background: rgba(159, 168, 218, 0.04);
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                    background: transparent;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: #9fa8da;
                }
                .p-tabview .p-tabview-close {
                    margin-left: 0.5rem;
                }
                .p-tabview .p-tabview-nav-btn.p-link {
                    background: transparent;
                    color: #9fa8da;
                    width: 2.25rem;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 0;
                }
                .p-tabview .p-tabview-nav-btn.p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset none;
                }
                .p-tabview .p-tabview-panels {
                    background: transparent;
                    padding: 0.75rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-toolbar {
                    background: #1e1e1e;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 0.75rem;
                    border-radius: 4px;
                    gap: 0.5rem;
                }
                .p-toolbar .p-toolbar-separator {
                    margin: 0 0.5rem;
                }

                .p-confirm-popup {
                    background: #262626;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0 9px 46px 8px rgba(0, 0, 0, 0.12);
                }
                .p-confirm-popup .p-confirm-popup-content {
                    padding: 1.25rem;
                }
                .p-confirm-popup .p-confirm-popup-footer {
                    text-align: right;
                    padding: 0 1.25rem 0.75rem 1.25rem;
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
                    border-color: rgba(38, 38, 38, 0);
                    border-bottom-color: #262626;
                }
                .p-confirm-popup:before {
                    border: solid transparent;
                    border-color: rgba(38, 38, 38, 0);
                    border-bottom-color: #262626;
                }
                .p-confirm-popup.p-confirm-popup-flipped:after {
                    border-top-color: #262626;
                }
                .p-confirm-popup.p-confirm-popup-flipped:before {
                    border-top-color: #262626;
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
                    border-radius: 4px;
                    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0 9px 46px 8px rgba(0, 0, 0, 0.12);
                    border: 0 none;
                }
                .p-dialog .p-dialog-header {
                    border-bottom: 0 none;
                    background: #262626;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1.25rem;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-dialog .p-dialog-header .p-dialog-title {
                    font-weight: 500;
                    font-size: 1.25rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-right: 0.5rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
                    margin-right: 0;
                }
                .p-dialog .p-dialog-content {
                    background: #262626;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0 1.25rem 1.25rem 1.25rem;
                }
                .p-dialog .p-dialog-content:last-of-type {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-dialog .p-dialog-footer {
                    border-top: 0 none;
                    background: #262626;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.75rem 1.25rem;
                    text-align: right;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
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
                    background: #262626;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0 9px 46px 8px rgba(0, 0, 0, 0.12);
                }
                .p-overlaypanel .p-overlaypanel-content {
                    padding: 0.75rem;
                }
                .p-overlaypanel .p-overlaypanel-close {
                    background: #9fa8da;
                    color: #121212;
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
                    background: rgba(159, 168, 218, 0.92);
                    color: #121212;
                }
                .p-overlaypanel:after {
                    border: solid transparent;
                    border-color: rgba(38, 38, 38, 0);
                    border-bottom-color: #262626;
                }
                .p-overlaypanel:before {
                    border: solid transparent;
                    border-color: rgba(38, 38, 38, 0);
                    border-bottom-color: #242424;
                }
                .p-overlaypanel.p-overlaypanel-flipped:after {
                    border-top-color: #262626;
                }
                .p-overlaypanel.p-overlaypanel-flipped:before {
                    border-top-color: #262626;
                }

                .p-sidebar {
                    background: #262626;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0 9px 46px 8px rgba(0, 0, 0, 0.12);
                }
                .p-sidebar .p-sidebar-header {
                    padding: 0.75rem;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close,
                .p-sidebar .p-sidebar-header .p-sidebar-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
                    color: rgba(255, 255, 255, 0.6);
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-sidebar .p-sidebar-header + .p-sidebar-content {
                    padding-top: 0;
                }
                .p-sidebar .p-sidebar-content {
                    padding: 0.75rem;
                }

                .p-tooltip .p-tooltip-text {
                    background: #444444;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.5rem;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-tooltip.p-tooltip-right .p-tooltip-arrow {
                    border-right-color: #444444;
                }
                .p-tooltip.p-tooltip-left .p-tooltip-arrow {
                    border-left-color: #444444;
                }
                .p-tooltip.p-tooltip-top .p-tooltip-arrow {
                    border-top-color: #444444;
                }
                .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
                    border-bottom-color: #444444;
                }

                .p-fileupload .p-fileupload-buttonbar {
                    background: #1e1e1e;
                    padding: 0.75rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    gap: 0.5rem;
                }
                .p-fileupload .p-fileupload-buttonbar .p-button {
                    margin-right: 0.5rem;
                }
                .p-fileupload .p-fileupload-content {
                    background: #1e1e1e;
                    padding: 2rem 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-fileupload .p-progressbar {
                    height: 4px;
                }
                .p-fileupload .p-fileupload-row > div {
                    padding: 0.75rem 0.75rem;
                }
                .p-fileupload.p-fileupload-advanced .p-message {
                    margin-top: 0;
                }

                .p-breadcrumb {
                    background: #1e1e1e;
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 4px;
                    padding: 0.75rem;
                }
                .p-breadcrumb ul li .p-menuitem-link {
                    transition: none;
                    border-radius: 4px;
                }
                .p-breadcrumb ul li .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-breadcrumb ul li.p-breadcrumb-chevron {
                    margin: 0 0.5rem 0 0.5rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-breadcrumb ul li:last-child .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-breadcrumb ul li:last-child .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-contextmenu {
                    padding: 0.5rem 0;
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-contextmenu .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-contextmenu .p-menuitem-link .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-contextmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-contextmenu .p-submenu-list {
                    padding: 0.5rem 0;
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-contextmenu .p-menu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
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
                    padding: 0.75rem;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 4px;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                    transition: none;
                    user-select: none;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-left: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
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
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-megamenu .p-menuitem-link .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-megamenu .p-megamenu-panel {
                    background: #2b2b2b;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-megamenu .p-megamenu-submenu-header {
                    margin: 0;
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    font-weight: 400;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-megamenu .p-megamenu-submenu {
                    padding: 0.5rem 0;
                    width: 12.5rem;
                }
                .p-megamenu .p-megamenu-submenu .p-menu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
                }
                .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu.p-megamenu-vertical {
                    width: 12.5rem;
                    padding: 0.5rem 0;
                }
                .p-megamenu .p-megamenu-button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-megamenu .p-megamenu-button:hover {
                    color: rgba(255, 255, 255, 0.6);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-megamenu .p-megamenu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-megamenu .p-submenu-icon {
                    transition: transform 0.2s;
                }
                .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
                    padding: 0.5rem 0;
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-menu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
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
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    padding: 0.5rem 0;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-menu .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-menu .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menu .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-menu .p-menuitem-link .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menu .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-menu.p-menu-overlay {
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-menu .p-submenu-header {
                    margin: 0;
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    background: transparent;
                    font-weight: 400;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }
                .p-menu .p-menu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
                }

                .p-menubar {
                    padding: 0.75rem;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 4px;
                }
                .p-menubar .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-menubar .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-menubar .p-menuitem-link .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menubar .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menubar .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                    transition: none;
                    user-select: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-left: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
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
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.6);
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
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-menubar .p-submenu-list {
                    padding: 0.5rem 0;
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    width: 12.5rem;
                }
                .p-menubar .p-submenu-list .p-menu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
                }
                .p-menubar .p-submenu-list .p-submenu-icon {
                    font-size: 0.875rem;
                }
                .p-menubar .p-submenu-list .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }

                @media screen and (max-width: 960px) {
                    .p-menubar {
                        position: relative;
                    }
                    .p-menubar .p-menubar-button {
                        display: flex;
                        width: 2rem;
                        height: 2rem;
                        color: rgba(255, 255, 255, 0.6);
                        border-radius: 50%;
                        transition: background-color 0.2s, color 0.2s,
                            box-shadow 0.2s;
                    }
                    .p-menubar .p-menubar-button:hover {
                        color: rgba(255, 255, 255, 0.6);
                        background: rgba(255, 255, 255, 0.04);
                    }
                    .p-menubar .p-menubar-button:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: none;
                    }
                    .p-menubar .p-menubar-root-list {
                        position: absolute;
                        display: none;
                        padding: 0.5rem 0;
                        background: #2b2b2b;
                        border: 0 none;
                        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                            0 4px 5px 0 rgba(0, 0, 0, 0.14),
                            0 1px 10px 0 rgba(0, 0, 0, 0.12);
                        width: 100%;
                    }
                    .p-menubar .p-menubar-root-list .p-menu-separator {
                        border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                        margin: 0.5rem 0;
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
                        padding: 0.75rem 0.75rem;
                        color: rgba(255, 255, 255, 0.87);
                        border-radius: 0;
                        transition: none;
                        user-select: none;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-text {
                        color: rgba(255, 255, 255, 0.87);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-icon {
                        color: rgba(255, 255, 255, 0.6);
                        margin-right: 0.5rem;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-submenu-icon {
                        color: rgba(255, 255, 255, 0.6);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover {
                        background: rgba(255, 255, 255, 0.04);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-text {
                        color: rgba(255, 255, 255, 0.87);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-icon {
                        color: rgba(255, 255, 255, 0.6);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-submenu-icon {
                        color: rgba(255, 255, 255, 0.6);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: none;
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
                        padding-left: 2.25rem;
                    }
                    .p-menubar .p-menubar-root-list ul li ul li a {
                        padding-left: 3.75rem;
                    }
                    .p-menubar .p-menubar-root-list ul li ul li ul li a {
                        padding-left: 5.25rem;
                    }
                    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {
                        padding-left: 6.75rem;
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
                        padding-left: 8.25rem;
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
                    padding: 1.25rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: #1e1e1e;
                    font-weight: 400;
                    border-radius: 4px;
                    transition: none;
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
                    box-shadow: none;
                }
                .p-panelmenu
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
                    > a:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: transparent;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu .p-panelmenu-header.p-highlight {
                    margin-bottom: 0;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight > a {
                    background: #1e1e1e;
                    border-color: transparent;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-panelmenu
                    .p-panelmenu-header.p-highlight:not(.p-disabled)
                    > a:hover {
                    border-color: transparent;
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu .p-panelmenu-content {
                    padding: 0.5rem 0;
                    border: 0 none;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    margin-bottom: 0;
                }
                .p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a {
                    border-radius: 0;
                }
                .p-panelmenu .p-panelmenu-panel .p-panelmenu-content {
                    border-radius: 0;
                }
                .p-panelmenu
                    .p-panelmenu-panel:not(:first-child)
                    .p-panelmenu-header
                    > a {
                    border-top: 0 none;
                }
                .p-panelmenu
                    .p-panelmenu-panel:not(:first-child)
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover
                    > a,
                .p-panelmenu
                    .p-panelmenu-panel:not(:first-child)
                    .p-panelmenu-header:not(.p-disabled).p-highlight:hover
                    > a {
                    border-top: 0 none;
                }
                .p-panelmenu
                    .p-panelmenu-panel:first-child
                    .p-panelmenu-header
                    > a {
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-panelmenu
                    .p-panelmenu-panel:last-child
                    .p-panelmenu-header:not(.p-highlight)
                    > a {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-panelmenu
                    .p-panelmenu-panel:last-child
                    .p-panelmenu-content {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-slidemenu {
                    padding: 0.5rem 0;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-slidemenu .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-slidemenu .p-menuitem-link .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-slidemenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-slidemenu.p-slidemenu-overlay {
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-slidemenu .p-slidemenu-list {
                    padding: 0.5rem 0;
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon,
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-slidemenu .p-slidemenu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
                }
                .p-slidemenu .p-slidemenu-icon {
                    font-size: 0.875rem;
                }
                .p-slidemenu .p-slidemenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-slidemenu .p-slidemenu-backward {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                }

                .p-steps .p-steps-item .p-menuitem-link {
                    background: transparent;
                    transition: none;
                    border-radius: 4px;
                    background: transparent;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid transparent;
                    background: transparent;
                    min-width: 2rem;
                    height: 2rem;
                    line-height: 2rem;
                    font-size: 1.143rem;
                    z-index: 1;
                    border-radius: 50%;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
                    margin-top: 0.5rem;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-number {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-title {
                    font-weight: 500;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-steps .p-steps-item:before {
                    content: ' ';
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    width: 100%;
                    top: 50%;
                    left: 0;
                    display: block;
                    position: absolute;
                    margin-top: -1rem;
                }

                .p-tabmenu .p-tabmenu-nav {
                    background: transparent;
                    border: solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
                    margin-right: 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
                    border: solid rgba(255, 255, 255, 0.12);
                    border-width: 0 0 1px 0;
                    border-color: transparent transparent
                        rgba(255, 255, 255, 0.12) transparent;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    padding: 0.75rem 1.25rem;
                    font-weight: 500;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    transition: none;
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
                    box-shadow: inset none;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
                    .p-menuitem-link {
                    background: rgba(159, 168, 218, 0.04);
                    border-color: rgba(255, 255, 255, 0.12);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem.p-highlight
                    .p-menuitem-link {
                    background: transparent;
                    border-color: rgba(255, 255, 255, 0.12);
                    color: #9fa8da;
                }

                .p-tieredmenu {
                    padding: 0.5rem 0;
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-tieredmenu .p-menuitem-link {
                    padding: 0.75rem 0.75rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                    margin-right: 0.5rem;
                }
                .p-tieredmenu .p-menuitem-link .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tieredmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }
                .p-tieredmenu.p-tieredmenu-overlay {
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-tieredmenu .p-submenu-list {
                    padding: 0.5rem 0;
                    background: #2b2b2b;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tieredmenu .p-menu-separator {
                    border-top: 1px solid hsla(0, 0%, 100%, 0.12);
                    margin: 0.5rem 0;
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
                    padding: 0.75rem 0.75rem;
                    margin: 0;
                    border-radius: 4px;
                }
                .p-inline-message.p-inline-message-info {
                    background: #b3e5fc;
                    border: solid transparent;
                    border-width: 1px;
                    color: #01579b;
                }
                .p-inline-message.p-inline-message-info .p-inline-message-icon {
                    color: #01579b;
                }
                .p-inline-message.p-inline-message-success {
                    background: #c8e6c9;
                    border: solid transparent;
                    border-width: 1px;
                    color: #1b5e20;
                }
                .p-inline-message.p-inline-message-success
                    .p-inline-message-icon {
                    color: #1b5e20;
                }
                .p-inline-message.p-inline-message-warn {
                    background: #ffecb3;
                    border: solid transparent;
                    border-width: 1px;
                    color: #7f6003;
                }
                .p-inline-message.p-inline-message-warn .p-inline-message-icon {
                    color: #7f6003;
                }
                .p-inline-message.p-inline-message-error {
                    background: #ffcdd2;
                    border: solid transparent;
                    border-width: 1px;
                    color: #b71c1c;
                }
                .p-inline-message.p-inline-message-error
                    .p-inline-message-icon {
                    color: #b71c1c;
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
                    margin: 0.75rem 0;
                    border-radius: 4px;
                }
                .p-message .p-message-wrapper {
                    padding: 1rem 1.25rem;
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
                    box-shadow: none;
                }
                .p-message.p-message-info {
                    background: #b3e5fc;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #01579b;
                }
                .p-message.p-message-info .p-message-icon {
                    color: #01579b;
                }
                .p-message.p-message-info .p-message-close {
                    color: #01579b;
                }
                .p-message.p-message-success {
                    background: #c8e6c9;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #1b5e20;
                }
                .p-message.p-message-success .p-message-icon {
                    color: #1b5e20;
                }
                .p-message.p-message-success .p-message-close {
                    color: #1b5e20;
                }
                .p-message.p-message-warn {
                    background: #ffecb3;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #7f6003;
                }
                .p-message.p-message-warn .p-message-icon {
                    color: #7f6003;
                }
                .p-message.p-message-warn .p-message-close {
                    color: #7f6003;
                }
                .p-message.p-message-error {
                    background: #ffcdd2;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #b71c1c;
                }
                .p-message.p-message-error .p-message-icon {
                    color: #b71c1c;
                }
                .p-message.p-message-error .p-message-close {
                    color: #b71c1c;
                }
                .p-message .p-message-text {
                    font-size: 1rem;
                    font-weight: 500;
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
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-toast .p-toast-message .p-toast-message-content {
                    padding: 1.25rem;
                    border-width: 0 0 0 0;
                }
                .p-toast
                    .p-toast-message
                    .p-toast-message-content
                    .p-toast-message-text {
                    margin: 0 0 0 1rem;
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
                    box-shadow: none;
                }
                .p-toast .p-toast-message.p-toast-message-info {
                    background: #b3e5fc;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #01579b;
                }
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-icon-close {
                    color: #01579b;
                }
                .p-toast .p-toast-message.p-toast-message-success {
                    background: #c8e6c9;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #1b5e20;
                }
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-icon-close {
                    color: #1b5e20;
                }
                .p-toast .p-toast-message.p-toast-message-warn {
                    background: #ffecb3;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #7f6003;
                }
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-icon-close {
                    color: #7f6003;
                }
                .p-toast .p-toast-message.p-toast-message-error {
                    background: #ffcdd2;
                    border: solid transparent;
                    border-width: 0 0 0 0;
                    color: #b71c1c;
                }
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-icon-close {
                    color: #b71c1c;
                }

                .p-galleria .p-galleria-close {
                    margin: 0.5rem;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-galleria .p-galleria-item-nav {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.87);
                    width: 4rem;
                    height: 4rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 50%;
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
                    background: rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-galleria .p-galleria-caption {
                    background: rgba(0, 0, 0, 0.5);
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1rem;
                }
                .p-galleria .p-galleria-indicators {
                    padding: 1rem;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button {
                    background-color: rgba(255, 255, 255, 0.3);
                    width: 1.25rem;
                    height: 1.25rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 50%;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button:hover {
                    background: rgba(255, 255, 255, 0.6);
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
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
                    background: rgba(255, 255, 255, 0.3);
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
                    background: rgba(159, 168, 218, 0.16);
                    color: #9fa8da;
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
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content {
                    transition: none;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
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
                    background-color: hsla(0, 0%, 100%, 0.12);
                    border-radius: 4px;
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
                    border: 2px solid #1e1e1e;
                }

                .p-chip {
                    background-color: hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 16px;
                    padding: 0 0.75rem;
                }
                .p-chip .p-chip-text {
                    line-height: 1.5;
                    margin-top: 0.375rem;
                    margin-bottom: 0.375rem;
                }
                .p-chip .p-chip-icon {
                    margin-right: 0.5rem;
                }
                .p-chip img {
                    width: 2.25rem;
                    height: 2.25rem;
                    margin-left: -0.75rem;
                    margin-right: 0.5rem;
                }
                .p-chip .p-chip-remove-icon {
                    border-radius: 4px;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-left: 0.5rem;
                }
                .p-chip .p-chip-remove-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }

                .p-scrolltop {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                        0 8px 10px 1px rgba(0, 0, 0, 0.14),
                        0 3px 14px 2px rgba(0, 0, 0, 0.12);
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-scrolltop.p-link {
                    background: #f48fb1;
                }
                .p-scrolltop.p-link:hover {
                    background: rgba(244, 143, 177, 0.92);
                }
                .p-scrolltop .p-scrolltop-icon {
                    font-size: 1.5rem;
                    color: #121212;
                }
                .p-scrolltop .p-scrolltop-icon.p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-skeleton {
                    background-color: rgba(255, 255, 255, 0.06);
                    border-radius: 4px;
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
                    background: #9fa8da;
                    color: #121212;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 4px;
                }
                .p-tag.p-tag-success {
                    background-color: #c5e1a5;
                    color: #212121;
                }
                .p-tag.p-tag-info {
                    background-color: #90caf9;
                    color: #212121;
                }
                .p-tag.p-tag-warning {
                    background-color: #fff59d;
                    color: #212121;
                }
                .p-tag.p-tag-danger {
                    background-color: #ef9a9a;
                    color: #212121;
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
                    padding: 1rem 1rem;
                    border-radius: 4px;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-inplace .p-inplace-display:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-inplace .p-inplace-display:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: none;
                }

                .p-progressbar {
                    border: 0 none;
                    height: 4px;
                    background: rgba(159, 168, 218, 0.32);
                    border-radius: 4px;
                }
                .p-progressbar .p-progressbar-value {
                    border: 0 none;
                    margin: 0;
                    background: #9fa8da;
                }
                .p-progressbar .p-progressbar-label {
                    color: #121212;
                    line-height: 4px;
                }

                .p-terminal {
                    background: #1e1e1e;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    padding: 0.75rem;
                }
                .p-terminal .p-terminal-input {
                    font-size: 1rem;
                    font-family: Roboto, Helvetica Neue Light, Helvetica Neue,
                        Helvetica, Arial, Lucida Grande, sans-serif;
                }

                .p-badge {
                    background: #9fa8da;
                    color: #121212;
                    font-size: 0.75rem;
                    font-weight: 700;
                    min-width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                .p-badge.p-badge-secondary {
                    background-color: #f48fb1;
                    color: #121212;
                }
                .p-badge.p-badge-success {
                    background-color: #c5e1a5;
                    color: #212121;
                }
                .p-badge.p-badge-info {
                    background-color: #90caf9;
                    color: #212121;
                }
                .p-badge.p-badge-warning {
                    background-color: #fff59d;
                    color: #212121;
                }
                .p-badge.p-badge-danger {
                    background-color: #ef9a9a;
                    color: #212121;
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
                    background: #9fa8da;
                    color: #121212;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 4px;
                }
                .p-tag.p-tag-success {
                    background-color: #c5e1a5;
                    color: #212121;
                }
                .p-tag.p-tag-info {
                    background-color: #90caf9;
                    color: #212121;
                }
                .p-tag.p-tag-warning {
                    background-color: #fff59d;
                    color: #212121;
                }
                .p-tag.p-tag-danger {
                    background-color: #ef9a9a;
                    color: #212121;
                }

                .p-accordion .p-accordion-tab {
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    margin-bottom: 0;
                    border-radius: 0;
                    position: relative;
                    transition: margin-bottom 225ms;
                }
                .p-accordion .p-accordion-tab:first-child {
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
                .p-accordion .p-accordion-tab:last-child {
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-accordion .p-accordion-tab .p-accordion-toggle-icon {
                    order: 1;
                    margin-left: auto;
                    transition: transform 0.2s;
                }
                .p-accordion
                    .p-accordion-tab:not(.p-accordion-tab-active)
                    .p-accordion-header-link:focus {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-accordion
                    .p-accordion-tab:not(.p-accordion-tab-active)
                    .p-accordion-toggle-icon {
                    transform: rotate(-270deg);
                }
                .p-accordion .p-accordion-tab.p-accordion-tab-active {
                    margin-bottom: 1rem;
                }
                .p-accordion
                    .p-accordion-tab.p-accordion-tab-active
                    .p-accordion-toggle-icon {
                    transform: rotate(-180deg);
                }
                .p-accordion .p-accordion-tab .p-accordion-header.p-disabled {
                    opacity: 1;
                }
                .p-accordion
                    .p-accordion-tab
                    .p-accordion-header.p-disabled
                    .p-accordion-header-link
                    > * {
                    opacity: 0.38;
                }

                .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container
                    .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container
                    .p-inputtext:enabled:hover,
                .p-input-filled
                    .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container
                    .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }

                .p-float-label
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding: 0.25rem 1rem;
                }

                .p-input-filled
                    .p-float-label
                    .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding-top: 0;
                    padding-bottom: 0;
                }
                .p-input-filled
                    .p-float-label
                    .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token
                    .p-autocomplete-token-icon {
                    font-size: 75%;
                }
                .p-input-filled
                    .p-float-label
                    .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token {
                    padding: 0;
                }
                .p-input-filled .p-autocomplete.p-invalid > .p-inputtext {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-autocomplete.p-invalid
                    > .p-inputtext:enabled:hover {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-autocomplete.p-invalid
                    > .p-inputtext:enabled:focus {
                    box-shadow: none;
                    border-color: transparent;
                }
                .p-input-filled
                    .p-autocomplete.p-invalid
                    > .p-autocomplete-multiple-container {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-autocomplete.p-invalid
                    > .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-autocomplete.p-invalid
                    > .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus,
                .p-input-filled
                    .p-autocomplete.p-invalid
                    > .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }

                .p-autocomplete.p-invalid > .p-inputtext:enabled:focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }
                .p-autocomplete.p-invalid
                    > .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-breadcrumb .p-menuitem-link {
                    padding: 0.25rem 0.5rem;
                }
                .p-breadcrumb .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-button {
                    font-weight: 500;
                    min-width: 4rem;
                }
                .p-button.p-button-icon-only {
                    min-width: auto;
                }
                .p-button:enabled:focus,
                .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(159, 168, 218, 0.76);
                }
                .p-button:enabled:active,
                .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 168, 218, 0.68);
                }
                .p-button .p-ink {
                    background-color: rgba(255, 255, 255, 0.32);
                }
                .p-button.p-button-text:enabled:focus,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-button.p-button-outlined:enabled:focus,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    background: rgba(159, 168, 218, 0.12);
                }
                .p-button.p-button-text:enabled:active,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-button.p-button-outlined:enabled:active,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-button.p-button-text .p-ink,
                .p-button.p-button-outlined .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }
                .p-button.p-button-outlined {
                    box-shadow: inset 0 0 0 1px;
                }
                .p-button.p-button-outlined:enabled:focus {
                    box-shadow: inset 0 0 0 1px;
                }
                .p-button.p-button-outlined:enabled:active {
                    box-shadow: inset 0 0 0 1px;
                }
                .p-button:disabled {
                    background-color: rgba(255, 255, 255, 0.12) !important;
                    color: rgba(255, 255, 255, 0.38) !important;
                    opacity: 1;
                }
                .p-button:disabled.p-button-text {
                    background-color: transparent !important;
                    color: rgba(255, 255, 255, 0.38) !important;
                }
                .p-button:disabled.p-button-outlined {
                    background-color: transparent !important;
                    color: rgba(255, 255, 255, 0.38) !important;
                    border-color: rgba(255, 255, 255, 0.38) !important;
                }
                .p-button.p-button-raised:enabled:focus,
                .p-button.p-button-raised:not(button):not(a):not(
                        .p-disabled
                    ):focus {
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
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
                    background: rgba(244, 143, 177, 0.76);
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
                    background: rgba(244, 143, 177, 0.68);
                }
                .p-button.p-button-secondary.p-button-text:enabled:focus,
                .p-button.p-button-secondary.p-button-text:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-button.p-button-secondary.p-button-outlined:enabled:focus,
                .p-button.p-button-secondary.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:enabled:focus,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:enabled:focus,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:enabled:focus,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:enabled:focus,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-fileupload-choose.p-button-secondary.p-button-text:enabled:focus,
                .p-fileupload-choose.p-button-secondary.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:focus,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):focus {
                    background: rgba(244, 143, 177, 0.12);
                }
                .p-button.p-button-secondary.p-button-text:enabled:active,
                .p-button.p-button-secondary.p-button-text:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-button.p-button-secondary.p-button-outlined:enabled:active,
                .p-button.p-button-secondary.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-secondary.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-secondary.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-secondary.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(244, 143, 177, 0.16);
                }
                .p-button.p-button-secondary.p-button-text .p-ink,
                .p-button.p-button-secondary.p-button-outlined .p-ink,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-text
                    .p-ink,
                .p-buttonset.p-button-secondary
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-text
                    .p-ink,
                .p-splitbutton.p-button-secondary
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-fileupload-choose.p-button-secondary.p-button-text .p-ink,
                .p-fileupload-choose.p-button-secondary.p-button-outlined
                    .p-ink {
                    background-color: rgba(244, 143, 177, 0.16);
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
                    background: rgba(144, 202, 249, 0.76);
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
                    background: rgba(144, 202, 249, 0.68);
                }
                .p-button.p-button-info.p-button-text:enabled:focus,
                .p-button.p-button-info.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-button.p-button-info.p-button-outlined:enabled:focus,
                .p-button.p-button-info.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:enabled:focus,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:enabled:focus,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:enabled:focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:enabled:focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-fileupload-choose.p-button-info.p-button-text:enabled:focus,
                .p-fileupload-choose.p-button-info.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-info.p-button-outlined:enabled:focus,
                .p-fileupload-choose.p-button-info.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):focus {
                    background: rgba(144, 202, 249, 0.12);
                }
                .p-button.p-button-info.p-button-text:enabled:active,
                .p-button.p-button-info.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-button.p-button-info.p-button-outlined:enabled:active,
                .p-button.p-button-info.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-info.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-info.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-info.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-info.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(144, 202, 249, 0.16);
                }
                .p-button.p-button-info.p-button-text .p-ink,
                .p-button.p-button-info.p-button-outlined .p-ink,
                .p-buttonset.p-button-info > .p-button.p-button-text .p-ink,
                .p-buttonset.p-button-info > .p-button.p-button-outlined .p-ink,
                .p-splitbutton.p-button-info > .p-button.p-button-text .p-ink,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-fileupload-choose.p-button-info.p-button-text .p-ink,
                .p-fileupload-choose.p-button-info.p-button-outlined .p-ink {
                    background-color: rgba(144, 202, 249, 0.16);
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
                    background: rgba(197, 225, 165, 0.76);
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
                    background: rgba(197, 225, 165, 0.68);
                }
                .p-button.p-button-success.p-button-text:enabled:focus,
                .p-button.p-button-success.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-button.p-button-success.p-button-outlined:enabled:focus,
                .p-button.p-button-success.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:enabled:focus,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:enabled:focus,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:enabled:focus,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:enabled:focus,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-fileupload-choose.p-button-success.p-button-text:enabled:focus,
                .p-fileupload-choose.p-button-success.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-success.p-button-outlined:enabled:focus,
                .p-fileupload-choose.p-button-success.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):focus {
                    background: rgba(197, 225, 165, 0.12);
                }
                .p-button.p-button-success.p-button-text:enabled:active,
                .p-button.p-button-success.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-button.p-button-success.p-button-outlined:enabled:active,
                .p-button.p-button-success.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-success.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-success.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-success.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-success.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(197, 225, 165, 0.16);
                }
                .p-button.p-button-success.p-button-text .p-ink,
                .p-button.p-button-success.p-button-outlined .p-ink,
                .p-buttonset.p-button-success > .p-button.p-button-text .p-ink,
                .p-buttonset.p-button-success
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-text
                    .p-ink,
                .p-splitbutton.p-button-success
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-fileupload-choose.p-button-success.p-button-text .p-ink,
                .p-fileupload-choose.p-button-success.p-button-outlined .p-ink {
                    background-color: rgba(197, 225, 165, 0.16);
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
                    background: rgba(255, 245, 157, 0.76);
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
                    background: rgba(255, 245, 157, 0.68);
                }
                .p-button.p-button-warning.p-button-text:enabled:focus,
                .p-button.p-button-warning.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-button.p-button-warning.p-button-outlined:enabled:focus,
                .p-button.p-button-warning.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:enabled:focus,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:enabled:focus,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:enabled:focus,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:enabled:focus,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-fileupload-choose.p-button-warning.p-button-text:enabled:focus,
                .p-fileupload-choose.p-button-warning.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:focus,
                .p-fileupload-choose.p-button-warning.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):focus {
                    background: rgba(255, 245, 157, 0.12);
                }
                .p-button.p-button-warning.p-button-text:enabled:active,
                .p-button.p-button-warning.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-button.p-button-warning.p-button-outlined:enabled:active,
                .p-button.p-button-warning.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-warning.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-warning.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-warning.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(255, 245, 157, 0.16);
                }
                .p-button.p-button-warning.p-button-text .p-ink,
                .p-button.p-button-warning.p-button-outlined .p-ink,
                .p-buttonset.p-button-warning > .p-button.p-button-text .p-ink,
                .p-buttonset.p-button-warning
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-text
                    .p-ink,
                .p-splitbutton.p-button-warning
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-fileupload-choose.p-button-warning.p-button-text .p-ink,
                .p-fileupload-choose.p-button-warning.p-button-outlined .p-ink {
                    background-color: rgba(255, 245, 157, 0.16);
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
                    background: rgba(206, 147, 216, 0.76);
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
                    background: rgba(206, 147, 216, 0.68);
                }
                .p-button.p-button-help.p-button-text:enabled:focus,
                .p-button.p-button-help.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-button.p-button-help.p-button-outlined:enabled:focus,
                .p-button.p-button-help.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:enabled:focus,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:enabled:focus,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:enabled:focus,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:enabled:focus,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-fileupload-choose.p-button-help.p-button-text:enabled:focus,
                .p-fileupload-choose.p-button-help.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-help.p-button-outlined:enabled:focus,
                .p-fileupload-choose.p-button-help.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):focus {
                    background: rgba(206, 147, 216, 0.12);
                }
                .p-button.p-button-help.p-button-text:enabled:active,
                .p-button.p-button-help.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-button.p-button-help.p-button-outlined:enabled:active,
                .p-button.p-button-help.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-help.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-help.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-help.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-help.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(206, 147, 216, 0.16);
                }
                .p-button.p-button-help.p-button-text .p-ink,
                .p-button.p-button-help.p-button-outlined .p-ink,
                .p-buttonset.p-button-help > .p-button.p-button-text .p-ink,
                .p-buttonset.p-button-help > .p-button.p-button-outlined .p-ink,
                .p-splitbutton.p-button-help > .p-button.p-button-text .p-ink,
                .p-splitbutton.p-button-help
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-fileupload-choose.p-button-help.p-button-text .p-ink,
                .p-fileupload-choose.p-button-help.p-button-outlined .p-ink {
                    background-color: rgba(206, 147, 216, 0.16);
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
                    background: rgba(239, 154, 154, 0.76);
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
                    background: rgba(239, 154, 154, 0.68);
                }
                .p-button.p-button-danger.p-button-text:enabled:focus,
                .p-button.p-button-danger.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-button.p-button-danger.p-button-outlined:enabled:focus,
                .p-button.p-button-danger.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):focus,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:enabled:focus,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:enabled:focus,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:enabled:focus,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:enabled:focus,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):focus,
                .p-fileupload-choose.p-button-danger.p-button-text:enabled:focus,
                .p-fileupload-choose.p-button-danger.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):focus,
                .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:focus,
                .p-fileupload-choose.p-button-danger.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):focus {
                    background: rgba(239, 154, 154, 0.12);
                }
                .p-button.p-button-danger.p-button-text:enabled:active,
                .p-button.p-button-danger.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-button.p-button-danger.p-button-outlined:enabled:active,
                .p-button.p-button-danger.p-button-outlined:not(button):not(
                        a
                    ):not(.p-disabled):active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:enabled:active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:enabled:active,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:enabled:active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:enabled:active,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active,
                .p-fileupload-choose.p-button-danger.p-button-text:enabled:active,
                .p-fileupload-choose.p-button-danger.p-button-text:not(
                        button
                    ):not(a):not(.p-disabled):active,
                .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:active,
                .p-fileupload-choose.p-button-danger.p-button-outlined:not(
                        button
                    ):not(a):not(.p-disabled):active {
                    background: rgba(239, 154, 154, 0.16);
                }
                .p-button.p-button-danger.p-button-text .p-ink,
                .p-button.p-button-danger.p-button-outlined .p-ink,
                .p-buttonset.p-button-danger > .p-button.p-button-text .p-ink,
                .p-buttonset.p-button-danger
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-splitbutton.p-button-danger > .p-button.p-button-text .p-ink,
                .p-splitbutton.p-button-danger
                    > .p-button.p-button-outlined
                    .p-ink,
                .p-fileupload-choose.p-button-danger.p-button-text .p-ink,
                .p-fileupload-choose.p-button-danger.p-button-outlined .p-ink {
                    background-color: rgba(239, 154, 154, 0.16);
                }

                .p-calendar-w-btn {
                    border: 1px solid hsla(0, 0%, 100%, 0.3);
                    background: #1e1e1e;
                    border-radius: 4px;
                    transition: background-color 0.2s, border-color 0.2s,
                        color 0.2s, box-shadow 0.2s,
                        background-size 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
                }
                .p-calendar-w-btn .p-inputtext {
                    background-image: none;
                    background-color: transparent;
                    border: 0 none;
                }
                .p-calendar-w-btn .p-inputtext:enabled:focus {
                    box-shadow: none;
                }
                .p-calendar-w-btn .p-datepicker-trigger.p-button {
                    background-color: transparent;
                    border: 0 none;
                }
                .p-calendar-w-btn .p-datepicker-trigger.p-button span {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-calendar-w-btn .p-datepicker-trigger.p-button:enabled:hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-calendar-w-btn .p-datepicker-trigger.p-button:enabled:active,
                .p-calendar-w-btn .p-datepicker-trigger.p-button:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-calendar-w-btn .p-datepicker-trigger.p-button:disabled {
                    background-color: transparent !important;
                }
                .p-calendar-w-btn:not(.p-disabled):hover {
                    border-color: rgba(255, 255, 255, 0.6);
                }
                .p-calendar-w-btn:not(.p-disabled).p-inputwrapper-focus {
                    border-color: #9fa8da;
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-datepicker .p-datepicker-header {
                    border-bottom: 0 none;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-title {
                    margin: 0 auto 0 0;
                    order: 1;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev {
                    order: 2;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-next {
                    order: 3;
                }
                .p-datepicker table th {
                    border-bottom: 1px solid hsla(0, 0%, 100%, 0.12);
                    color: rgba(255, 255, 255, 0.38);
                    font-weight: 400;
                    font-size: 0.875rem;
                }
                .p-datepicker table td.p-datepicker-today > span {
                    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.38);
                }
                .p-datepicker table td.p-datepicker-today.p-highlight {
                    box-shadow: 0 0 0 1px rgba(159, 168, 218, 0.16);
                }

                .p-calendar.p-invalid .p-inputtext:enabled:focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }
                .p-calendar.p-invalid.p-calendar-w-btn {
                    border-color: #f44435;
                }
                .p-calendar.p-invalid.p-calendar-w-btn
                    .p-inputtext:enabled:focus {
                    box-shadow: none;
                }
                .p-calendar.p-invalid.p-calendar-w-btn:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-input-filled .p-calendar-w-btn {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-calendar-w-btn .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-calendar-w-btn:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled .p-calendar-w-btn:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-calendar-w-btn:not(.p-disabled).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled .p-calendar-w-btn .p-inputtext:enabled:hover,
                .p-input-filled .p-calendar-w-btn .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-calendar-w-btn .p-inputtext {
                    border: 0 none;
                }
                .p-input-filled .p-calendar.p-invalid .p-inputtext {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-calendar.p-invalid
                    .p-inputtext:enabled:hover {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-calendar.p-invalid
                    .p-inputtext:enabled:focus {
                    box-shadow: none;
                    border-color: transparent;
                }
                .p-input-filled .p-calendar.p-invalid.p-calendar-w-btn {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-calendar.p-invalid.p-calendar-w-btn:not(
                        .p-disabled
                    ):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-calendar.p-invalid.p-calendar-w-btn:not(
                        .p-disabled
                    ).p-focus,
                .p-input-filled
                    .p-calendar.p-invalid.p-calendar-w-btn:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-calendar.p-invalid.p-calendar-w-btn
                    .p-inputtext,
                .p-input-filled
                    .p-calendar.p-invalid.p-calendar-w-btn
                    .p-inputtext:enabled:hover,
                .p-input-filled
                    .p-calendar.p-invalid.p-calendar-w-btn
                    .p-inputtext:enabled:focus {
                    border: 0 none;
                    background-image: none;
                }

                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: #f48fb1;
                    color: #121212;
                }

                .p-cascadeselect .p-cascadeselect-label,
                .p-cascadeselect .p-dropdown-trigger {
                    background-image: none;
                    background: transparent;
                }
                .p-cascadeselect .p-cascadeselect-label {
                    border: 0 none;
                }
                .p-cascadeselect:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-cascadeselect-item-content .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }

                .p-input-filled .p-cascadeselect {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-cascadeselect .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-cascadeselect:not(.p-disabled).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled .p-cascadeselect .p-inputtext:enabled:hover,
                .p-input-filled .p-cascadeselect .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-cascadeselect .p-cascadeselect-label:hover {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled
                    .p-float-label
                    .p-cascadeselect
                    .p-cascadeselect-label {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-cascadeselect
                    .p-cascadeselect-label {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled .p-cascadeselect.p-invalid {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-cascadeselect.p-invalid:not(.p-disabled):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-cascadeselect.p-invalid:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-cascadeselect.p-invalid:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }

                .p-cascadeselect.p-invalid:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-checkbox {
                    border-radius: 50%;
                    transition: box-shadow 0.2s;
                }
                .p-checkbox .p-checkbox-box {
                    border-color: hsla(0, 0%, 100%, 0.7);
                    border-radius: 2px;
                    position: relative;
                }
                .p-checkbox .p-checkbox-box:not(.p-disabled):hover {
                    border-color: hsla(0, 0%, 100%, 0.7);
                }
                .p-checkbox .p-checkbox-box:not(.p-disabled).p-focus {
                    border-color: hsla(0, 0%, 100%, 0.7);
                }
                .p-checkbox
                    .p-checkbox-box.p-highlight:not(.p-disabled).p-focus {
                    border-color: #9fa8da;
                }
                .p-checkbox
                    .p-checkbox-box.p-highlight
                    .p-checkbox-icon.pi-check:before {
                    content: '';
                    position: absolute;
                    top: 6px;
                    left: 1px;
                    border-right: 2px solid transparent;
                    border-bottom: 2px solid transparent;
                    transform: rotate(45deg);
                    transform-origin: 0% 100%;
                    animation: checkbox-check 125ms 50ms linear forwards;
                }
                .p-checkbox:not(.p-checkbox-disabled):hover {
                    box-shadow: 0 0 1px 10px rgba(255, 255, 255, 0.04);
                }
                .p-checkbox:not(.p-checkbox-disabled).p-checkbox-focused {
                    box-shadow: 0 0 1px 10px rgba(255, 255, 255, 0.12);
                }
                .p-checkbox.p-checkbox-checked:not(.p-checkbox-disabled):hover {
                    box-shadow: 0 0 1px 10px rgba(159, 168, 218, 0.04);
                }
                .p-checkbox.p-checkbox-checked:not(
                        .p-checkbox-disabled
                    ).p-checkbox-focused {
                    box-shadow: 0 0 1px 10px rgba(159, 168, 218, 0.12);
                }

                .p-input-filled .p-checkbox .p-checkbox-box {
                    background-color: #1e1e1e;
                }
                .p-input-filled
                    .p-checkbox
                    .p-checkbox-box:not(.p-disabled):hover {
                    background-color: #1e1e1e;
                }

                @keyframes checkbox-check {
                    0% {
                        width: 0;
                        height: 0;
                        border-color: #121212;
                        transform: translate3d(0, 0, 0) rotate(45deg);
                    }
                    33% {
                        width: 4px;
                        height: 0;
                        transform: translate3d(0, 0, 0) rotate(45deg);
                    }
                    100% {
                        width: 4px;
                        height: 10px;
                        border-color: #121212;
                        transform: translate3d(0, -10px, 0) rotate(45deg);
                    }
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-input-filled .p-chips-multiple-container {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-chips-multiple-container .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled
                    .p-chips-multiple-container:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled
                    .p-chips-multiple-container:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-chips-multiple-container:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled
                    .p-chips-multiple-container
                    .p-inputtext:enabled:hover,
                .p-input-filled
                    .p-chips-multiple-container
                    .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }

                .p-float-label .p-chips-multiple-container .p-chips-token {
                    padding: 0.25rem 1rem;
                }

                .p-input-filled
                    .p-float-label
                    .p-chips
                    .p-chips-multiple-container
                    .p-chips-token {
                    padding-top: 0;
                    padding-bottom: 0;
                }
                .p-input-filled
                    .p-float-label
                    .p-chips
                    .p-chips-multiple-container
                    .p-chips-token
                    .p-chips-token-icon {
                    font-size: 75%;
                }
                .p-input-filled
                    .p-float-label
                    .p-chips
                    .p-chips-multiple-container
                    .p-chips-input-token {
                    padding: 0;
                }
                .p-input-filled .p-chips.p-invalid .p-chips-multiple-container {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-chips.p-invalid
                    .p-chips-multiple-container:not(.p-disabled):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-chips.p-invalid
                    .p-chips-multiple-container:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-chips.p-invalid
                    .p-chips-multiple-container:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }

                .p-chips.p-invalid
                    .p-chips-multiple-container:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-datatable .p-sortable-column {
                    outline: 0 none;
                }
                .p-datatable .p-sortable-column:focus {
                    background-color: rgba(255, 255, 255, 0.03);
                }
                .p-datatable .p-datatable-tbody > tr {
                    outline: 0 none;
                }
                .p-datatable .p-datatable-tbody > tr:not(.p-highlight):focus {
                    background-color: rgba(255, 255, 255, 0.03);
                }

                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #9fa8da;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #9fa8da;
                }

                .p-dropdown .p-inputtext,
                .p-dropdown .p-dropdown-trigger {
                    background-image: none;
                    background: transparent;
                }
                .p-dropdown .p-inputtext {
                    border: 0 none;
                }
                .p-dropdown:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-dropdown-item .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }

                .p-input-filled .p-dropdown {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-dropdown .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-dropdown:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled .p-dropdown:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-dropdown:not(.p-disabled).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled .p-dropdown .p-inputtext:enabled:hover,
                .p-input-filled .p-dropdown .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-dropdown .p-inputtext {
                    border: 0 none;
                }
                .p-input-filled .p-dropdown.p-invalid {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled .p-dropdown.p-invalid:not(.p-disabled):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled .p-dropdown.p-invalid:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-dropdown.p-invalid:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }

                .p-dropdown.p-invalid:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .fc {
                    /* FullCalendar 4 */
                    /* FullCalendar 5 */
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:focus {
                    background: rgba(159, 168, 218, 0.76);
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:active {
                    background: rgba(159, 168, 218, 0.68);
                }
                .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:focus {
                    background: rgba(159, 168, 218, 0.76);
                }
                .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:active {
                    background: rgba(159, 168, 218, 0.68);
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-dayGridMonth-button:focus,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridWeek-button:focus,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridDay-button:focus {
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-dayGridMonth-button:focus.p-highlight,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridWeek-button:focus.p-highlight,
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridDay-button:focus.p-highlight {
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:focus {
                    background: rgba(159, 168, 218, 0.76);
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:active {
                    background: rgba(159, 168, 218, 0.68);
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:focus {
                    background: rgba(159, 168, 218, 0.76);
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:active {
                    background: rgba(159, 168, 218, 0.68);
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-dayGridMonth-button:focus,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridWeek-button:focus,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridDay-button:focus {
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-dayGridMonth-button:focus.p-highlight,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridWeek-button:focus.p-highlight,
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button.fc-timeGridDay-button:focus.p-highlight {
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                }

                .p-galleria .p-galleria-indicators {
                    padding: 1rem;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #f48fb1;
                    color: #121212;
                }
                .p-galleria.p-galleria-indicator-onitem
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: rgba(244, 143, 177, 0.68);
                    color: #121212;
                }

                .p-inputtext:enabled:focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }
                .p-inputtext:enabled:focus.p-invalid {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-input-filled .p-inputtext {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-inputtext:enabled:hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.6),
                            rgba(255, 255, 255, 0.6)
                        );
                }
                .p-input-filled .p-inputtext:enabled:focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled .p-inputtext.p-invalid.p-component {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-inputtext.p-invalid.p-component:enabled:hover {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-inputtext.p-invalid.p-component:enabled:focus {
                    box-shadow: none;
                    border-color: transparent;
                }

                .p-input-filled .p-inputgroup .p-inputgroup-addon {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-inputgroup .p-inputgroup-addon:last-child {
                    border-right-color: transparent;
                }
                .p-input-filled .p-inputgroup-addon:first-child,
                .p-input-filled .p-inputgroup button:first-child,
                .p-input-filled .p-inputgroup input:first-child,
                .p-input-filled .p-inputgroup > .p-inputwrapper:first-child,
                .p-input-filled
                    .p-inputgroup
                    > .p-inputwrapper:first-child
                    > .p-inputtext {
                    border-bottom-left-radius: 0;
                }
                .p-input-filled .p-inputgroup .p-float-label:first-child input {
                    border-bottom-left-radius: 0;
                }
                .p-input-filled .p-inputgroup-addon:last-child,
                .p-input-filled .p-inputgroup button:last-child,
                .p-input-filled .p-inputgroup input:last-child,
                .p-input-filled .p-inputgroup > .p-inputwrapper:last-child,
                .p-input-filled
                    .p-inputgroup
                    > .p-inputwrapper:last-child
                    > .p-inputtext {
                    border-bottom-right-radius: 0;
                }
                .p-input-filled .p-inputgroup .p-float-label:last-child input {
                    border-bottom-right-radius: 0;
                }

                .p-inputnumber.p-invalid .p-inputtext:enabled:focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-input-filled .p-inputnumber.p-invalid .p-inputtext {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-inputnumber.p-invalid
                    .p-inputtext:enabled:hover {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-inputnumber.p-invalid
                    .p-inputtext:enabled:focus {
                    box-shadow: none;
                    border-color: transparent;
                }

                .p-inputswitch .p-inputswitch-slider:before {
                    transition-property: box-shadow transform;
                    box-shadow: 0px 3px 1px -2px rgba(255, 255, 255, 0.2),
                        0px 2px 2px 0px rgba(255, 255, 255, 0.14),
                        0px 1px 5px 0px rgba(255, 255, 255, 0.12);
                }
                .p-inputswitch:not(.p-disabled):hover
                    .p-inputswitch-slider:before {
                    box-shadow: 0px 3px 1px -2px rgba(255, 255, 255, 0.2),
                        0px 2px 2px 0px rgba(255, 255, 255, 0.14),
                        0px 1px 5px 0px rgba(255, 255, 255, 0.12),
                        0 0 1px 10px rgba(255, 255, 255, 0.04);
                }
                .p-inputswitch.p-inputswitch-focus .p-inputswitch-slider:before,
                .p-inputswitch.p-inputswitch-focus:not(.p-disabled):hover
                    .p-inputswitch-slider:before {
                    box-shadow: 0 0 1px 10px rgba(255, 255, 255, 0.12),
                        0px 3px 1px -2px rgba(255, 255, 255, 0.2),
                        0px 2px 2px 0px rgba(255, 255, 255, 0.14),
                        0px 1px 5px 0px rgba(255, 255, 255, 0.12);
                }
                .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
                    .p-inputswitch-slider:before {
                    box-shadow: 0 0 1px 10px rgba(159, 168, 218, 0.04),
                        0px 3px 1px -2px rgba(255, 255, 255, 0.2),
                        0px 2px 2px 0px rgba(255, 255, 255, 0.14),
                        0px 1px 5px 0px rgba(255, 255, 255, 0.12);
                }
                .p-inputswitch.p-inputswitch-checked.p-inputswitch-focus
                    .p-inputswitch-slider:before,
                .p-inputswitch.p-inputswitch-checked.p-inputswitch-focus:not(
                        .p-disabled
                    ):hover
                    .p-inputswitch-slider:before {
                    box-shadow: 0 0 1px 10px rgba(159, 168, 218, 0.12),
                        0px 3px 1px -2px rgba(255, 255, 255, 0.2),
                        0px 2px 2px 0px rgba(255, 255, 255, 0.14),
                        0px 1px 5px 0px rgba(255, 255, 255, 0.12);
                }

                .p-fieldset .p-fieldset-legend {
                    border: 0 none;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-float-label input:focus ~ label,
                .p-float-label input.p-filled ~ label,
                .p-float-label textarea:focus ~ label,
                .p-float-label textarea.p-filled ~ label,
                .p-float-label .p-inputwrapper-focus ~ label,
                .p-float-label .p-inputwrapper-filled ~ label {
                    top: -0.5rem !important;
                    background-color: #1e1e1e;
                    padding: 2px 4px;
                    margin-left: -4px;
                    margin-top: 0;
                }

                .p-float-label textarea ~ label {
                    margin-top: 0;
                }

                .p-float-label input:focus ~ label,
                .p-float-label .p-inputwrapper-focus ~ label {
                    color: #9fa8da;
                }

                .p-input-filled .p-float-label .p-inputtext {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled .p-float-label input:focus ~ label,
                .p-input-filled .p-float-label input.p-filled ~ label,
                .p-input-filled .p-float-label textarea:focus ~ label,
                .p-input-filled .p-float-label textarea.p-filled ~ label,
                .p-input-filled .p-float-label .p-inputwrapper-focus ~ label,
                .p-input-filled .p-float-label .p-inputwrapper-filled ~ label {
                    top: 0.25rem !important;
                    margin-top: 0;
                    background: transparent;
                }

                .p-listbox .p-listbox-list .p-listbox-item .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus.p-highlight {
                    background: rgba(159, 168, 218, 0.24);
                }

                .p-megamenu .p-menuitem .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-menu .p-menuitem .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-menubar .p-menuitem .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-multiselect .p-multiselect-label,
                .p-multiselect .p-multiselect-trigger {
                    background-image: none;
                    background: transparent;
                }
                .p-multiselect .p-multiselect-label {
                    border: 0 none;
                }
                .p-multiselect:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item
                    .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus.p-highlight {
                    background: rgba(159, 168, 218, 0.24);
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-input-filled .p-multiselect {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-multiselect .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-multiselect:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled .p-multiselect:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-multiselect:not(.p-disabled).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled .p-multiselect .p-inputtext:enabled:hover,
                .p-input-filled .p-multiselect .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-multiselect .p-multiselect-label:hover {
                    background-image: none;
                    background: transparent;
                }

                .p-float-label .p-multiselect-label .p-multiselect-token {
                    padding: 0.25rem 1rem;
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }

                .p-input-filled
                    .p-float-label
                    .p-multiselect
                    .p-multiselect-label {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-multiselect
                    .p-multiselect-label {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-token {
                    padding-top: 0;
                    padding-bottom: 0;
                    margin-top: 0;
                    margin-bottom: 0;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-token
                    .p-multiselect-token-icon {
                    font-size: 75%;
                }
                .p-input-filled .p-multiselect.p-invalid {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-multiselect.p-invalid:not(.p-disabled):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-multiselect.p-invalid:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-multiselect.p-invalid:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }

                .p-multiselect.p-invalid:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-overlaypanel .p-overlaypanel-content {
                    padding: 1.5rem;
                }

                .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-orderlist
                    .p-orderlist-list
                    .p-orderlist-item:focus.p-highlight {
                    background: rgba(159, 168, 218, 0.24);
                }

                .p-paginator {
                    justify-content: flex-end;
                }
                .p-paginator .p-paginator-element:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-paginator .p-paginator-element:focus.p-highlight {
                    background: rgba(159, 168, 218, 0.24);
                }

                .p-input-filled .p-password.p-invalid > .p-inputtext {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-password.p-invalid
                    > .p-inputtext:enabled:hover {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-password.p-invalid
                    > .p-inputtext:enabled:focus {
                    box-shadow: none;
                    border-color: transparent;
                }

                .p-password.p-invalid > .p-inputtext:enabled:focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-panel {
                    border-radius: 4px;
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 1px 3px 0 rgba(0, 0, 0, 0.12);
                }
                .p-panel .p-panel-header,
                .p-panel .p-panel-content,
                .p-panel .p-panel-footer {
                    border: 0 none;
                }
                .p-panel .p-panel-content {
                    padding-top: 0;
                }
                .p-panel .p-panel-title {
                    font-size: 1.25rem;
                }
                .p-panel .p-panel-header-icon:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-panelmenu .p-panelmenu-panel {
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    margin-bottom: 0;
                    border-radius: 0;
                    position: relative;
                    transition: margin-bottom 225ms;
                }
                .p-panelmenu .p-panelmenu-panel:first-child {
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
                .p-panelmenu .p-panelmenu-panel:last-child {
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-panelmenu
                    .p-panelmenu-panel
                    .p-panelmenu-header
                    .p-panelmenu-icon {
                    order: 1;
                    margin-left: auto;
                    margin-right: 0;
                }
                .p-panelmenu .p-panelmenu-panel .p-panelmenu-header.p-disabled {
                    opacity: 1;
                }
                .p-panelmenu
                    .p-panelmenu-panel
                    .p-panelmenu-header.p-disabled
                    .p-panelmenu-header-link
                    > * {
                    opacity: 0.38;
                }
                .p-panelmenu
                    .p-panelmenu-panel
                    .p-panelmenu-header
                    .p-panelmenu-header-link:focus {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-panelmenu
                    .p-panelmenu-panel
                    .p-menuitem
                    .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-picklist .p-picklist-list .p-picklist-item:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:focus.p-highlight {
                    background: rgba(159, 168, 218, 0.24);
                }

                .p-progressbar {
                    border-radius: 0;
                }
                .p-progressbar .p-progressbar-label {
                    display: none;
                }

                .p-radiobutton {
                    border-radius: 50%;
                    transition: box-shadow 0.2s;
                }
                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    border: 2px solid hsla(0, 0%, 100%, 0.7);
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    border: 2px solid hsla(0, 0%, 100%, 0.7);
                }
                .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled).p-focus {
                    border-color: #9fa8da;
                }
                .p-radiobutton:not(.p-radiobutton-disabled):hover {
                    box-shadow: 0 0 1px 10px rgba(255, 255, 255, 0.04);
                }
                .p-radiobutton:not(
                        .p-radiobutton-disabled
                    ).p-radiobutton-focused {
                    box-shadow: 0 0 1px 10px rgba(255, 255, 255, 0.12);
                }
                .p-radiobutton.p-radiobutton-checked:not(
                        .p-radiobutton-disabled
                    ):hover {
                    box-shadow: 0 0 1px 10px rgba(159, 168, 218, 0.04);
                }
                .p-radiobutton.p-radiobutton-checked:not(
                        .p-radiobutton-disabled
                    ).p-radiobutton-focused {
                    box-shadow: 0 0 1px 10px rgba(159, 168, 218, 0.12);
                }

                .p-input-filled .p-radiobutton .p-radiobutton-box {
                    background-color: #1e1e1e;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):hover {
                    background-color: #1e1e1e;
                }

                .p-rating {
                    gap: 0;
                }
                .p-rating .p-rating-item {
                    border-radius: 50%;
                    width: 2rem;
                    height: 2rem;
                    justify-content: center;
                }
                .p-rating .p-rating-item:focus {
                    background: rgba(159, 168, 218, 0.12);
                }
                .p-rating .p-rating-item:focus.p-rating-cancel-item {
                    background: rgba(244, 68, 53, 0.12);
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover {
                    background-color: rgba(0, 0, 0, 0.04);
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover.p-rating-cancel-item {
                    background: rgba(244, 68, 53, 0.04);
                }

                .p-selectbutton .p-button:focus {
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .p-selectbutton .p-button:focus.p-highlight {
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                }

                .p-slidemenu .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-slider .p-slider-handle {
                    transition: transform 0.2s, box-shadow 0.2s;
                    transform: scale(0.7);
                }
                .p-slider .p-slider-handle:focus {
                    box-shadow: 0 0 1px 10px rgba(244, 143, 177, 0.2);
                }
                .p-slider.p-slider-sliding .p-slider-handle {
                    transform: scale(1);
                }

                .p-splitbutton.p-button-text > .p-button:enabled:focus,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-outlined > .p-button:enabled:focus,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(159, 168, 218, 0.12);
                }
                .p-splitbutton.p-button-text > .p-button:enabled:active,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-outlined > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 168, 218, 0.16);
                }
                .p-splitbutton.p-button-outlined > .p-button {
                    box-shadow: inset 0 0 0 1px;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:focus {
                    box-shadow: inset 0 0 0 1px;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:active {
                    box-shadow: inset 0 0 0 1px;
                }
                .p-splitbutton.p-button-outlined
                    > .p-button.p-splitbutton-menubutton {
                    margin-left: -1px;
                    width: calc(2.25rem + 1px);
                }
                .p-splitbutton.p-disabled.p-button-text > .p-button {
                    background-color: transparent !important;
                    color: rgba(255, 255, 255, 0.38) !important;
                }
                .p-splitbutton.p-disabled.p-button-outlined > .p-button {
                    background-color: transparent !important;
                    color: rgba(255, 255, 255, 0.38) !important;
                    border-color: rgba(255, 255, 255, 0.38) !important;
                }
                .p-splitbutton.p-button-raised > .p-button:enabled:focus,
                .p-splitbutton.p-button-raised
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                }

                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(244, 143, 177, 0.12);
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(244, 143, 177, 0.16);
                }

                .p-splitbutton.p-button-info
                    > .p-button.p-button-text
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(144, 202, 249, 0.12);
                }
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info
                    > .p-button.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(144, 202, 249, 0.16);
                }

                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(197, 225, 165, 0.12);
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(197, 225, 165, 0.16);
                }

                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(255, 245, 157, 0.12);
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 245, 157, 0.16);
                }

                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(206, 147, 216, 0.12);
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(206, 147, 216, 0.16);
                }

                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):focus,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:focus,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):focus {
                    background: rgba(239, 154, 154, 0.12);
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(239, 154, 154, 0.16);
                }

                .p-steps {
                    padding: 1rem 0;
                }
                .p-steps .p-steps-item {
                    justify-content: flex-start;
                    flex-direction: row-reverse;
                    align-items: center;
                }
                .p-steps .p-steps-item:before {
                    position: static;
                    left: auto;
                    top: auto;
                    margin-top: 0;
                }
                .p-steps .p-steps-item:last-child {
                    flex-grow: 0;
                }
                .p-steps .p-steps-item:last-child:before {
                    display: none;
                }
                .p-steps .p-steps-item .p-menuitem-link {
                    flex-direction: row;
                    flex: 1 1 auto;
                    overflow: visible;
                    padding: 1rem 0.5rem;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                    background-color: #9e9d9e;
                    color: #ffffff;
                    font-size: 0.857rem;
                    min-width: 1.714rem;
                    height: 1.714rem;
                    line-height: 1.714rem;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
                    margin: 0;
                    padding-left: 0.5rem;
                }
                .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-steps .p-steps-item.p-highlight .p-steps-number {
                    background-color: #9fa8da;
                    color: #121212;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-title {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-steps .p-steps-item.p-disabled {
                    opacity: 1;
                }

                .p-tabview .p-tabview-nav {
                    position: relative;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    transition: background-color 0.2s;
                    border-radius: 0;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link > .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link:focus {
                    background-color: rgba(159, 168, 218, 0.12);
                }
                .p-tabview .p-tabview-nav .p-tabview-ink-bar {
                    z-index: 1;
                    display: block;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    background-color: #9fa8da;
                    transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
                }

                .p-tieredmenu .p-menuitem-link:focus {
                    background: rgba(255, 255, 255, 0.12);
                }

                .p-toolbar {
                    border: 0 none;
                }

                .p-tooltip .p-tooltip-text {
                    box-shadow: none;
                    font-size: 0.875rem;
                }
                .p-tooltip .p-tooltip-arrow {
                    display: none;
                }

                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content:focus {
                    background: rgba(255, 255, 255, 0.12);
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content:focus.p-highlight {
                    background: rgba(159, 168, 218, 0.24);
                }

                .p-treeselect .p-treeselect-label,
                .p-treeselect .p-treeselect-trigger {
                    background-image: none;
                    background: transparent;
                }
                .p-treeselect .p-treeselect-label {
                    border: 0 none;
                }
                .p-treeselect:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da,
                        inset 0 0 0 1px #9fa8da, inset 0 0 0 1px #9fa8da;
                }

                .p-treeselect-item .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }

                .p-input-filled .p-treeselect {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border: 1px solid transparent;
                    background: hsla(0, 0%, 100%, 0.06) no-repeat;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            hsla(0, 0%, 100%, 0.3),
                            hsla(0, 0%, 100%, 0.3)
                        );
                    background-size: 0 2px, 100% 1px;
                    background-position: 50% 100%, 50% 100%;
                    background-origin: border-box;
                }
                .p-input-filled .p-treeselect .p-inputtext {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-treeselect:not(.p-disabled):hover {
                    background-color: hsla(0, 0%, 100%, 0.08);
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #9fa8da,
                            #9fa8da
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(255, 255, 255, 0.87),
                            rgba(255, 255, 255, 0.87)
                        );
                }
                .p-input-filled .p-treeselect:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-treeselect:not(.p-disabled).p-inputwrapper-focus {
                    box-shadow: none;
                    background-color: hsla(0, 0%, 100%, 0.1);
                    border-color: transparent;
                    background-size: 100% 2px, 100% 1px;
                }
                .p-input-filled .p-treeselect .p-inputtext:enabled:hover,
                .p-input-filled .p-treeselect .p-inputtext:enabled:focus {
                    background-image: none;
                    background: transparent;
                }
                .p-input-filled .p-treeselect .p-treeselect-label:hover {
                    background-image: none;
                    background: transparent;
                }

                .p-float-label .p-treeselect-label .p-treeselect-token {
                    padding: 0.25rem 1rem;
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }

                .p-input-filled
                    .p-float-label
                    .p-treeselect
                    .p-treeselect-label {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-treeselect
                    .p-treeselect-label {
                    padding-top: 1.25rem;
                    padding-bottom: 0.25rem;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-token {
                    padding-top: 0;
                    padding-bottom: 0;
                    margin-top: 0;
                    margin-bottom: 0;
                }
                .p-input-filled
                    .p-float-label
                    .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-token
                    .p-treeselect-token-icon {
                    font-size: 75%;
                }
                .p-input-filled .p-treeselect.p-invalid {
                    border-color: transparent;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled .p-treeselect.p-invalid:not(.p-disabled):hover {
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }
                .p-input-filled
                    .p-treeselect.p-invalid:not(.p-disabled).p-focus,
                .p-input-filled
                    .p-treeselect.p-invalid:not(
                        .p-disabled
                    ).p-inputwrapper-focus {
                    box-shadow: none;
                    background-image: linear-gradient(
                            to bottom,
                            #f44435,
                            #f44435
                        ),
                        linear-gradient(to bottom, #f44435, #f44435);
                }

                .p-treeselect.p-invalid:not(.p-disabled).p-focus {
                    box-shadow: inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435,
                        inset 0 0 0 1px #f44435, inset 0 0 0 1px #f44435;
                }

                .p-treetable .p-sortable-column {
                    outline: 0 none;
                }
                .p-treetable .p-sortable-column:focus {
                    background-color: rgba(255, 255, 255, 0.03);
                }
                .p-treetable .p-treetable-tbody > tr {
                    outline: 0 none;
                }
                .p-treetable .p-treetable-tbody > tr:not(.p-highlight):focus {
                    background-color: rgba(255, 255, 255, 0.03);
                }

                .p-tabmenu .p-tabmenu-nav {
                    position: relative;
                }
                .p-tabmenu .p-tabmenu-nav li .p-menuitem-link {
                    transition: background-color 0.2s;
                    border-radius: 0;
                }
                .p-tabmenu .p-tabmenu-nav li .p-menuitem-link > .p-ink {
                    background-color: rgba(159, 168, 218, 0.16);
                }
                .p-tabmenu .p-tabmenu-nav li .p-menuitem-link:focus {
                    background-color: rgba(159, 168, 218, 0.12);
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    li.p-highlight
                    .p-menuitem-link:focus {
                    background-color: rgba(159, 168, 218, 0.12);
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenu-ink-bar {
                    display: block;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    background-color: #9fa8da;
                    transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
                }

                .p-togglebutton.p-button:focus {
                    background: #1c1c1c;
                    border-color: rgba(255, 255, 255, 0.12);
                }
                .p-togglebutton.p-button:focus.p-highlight {
                    background: #262626;
                    border-color: rgba(255, 255, 255, 0.12);
                }

                /* Customizations to the designer theme should be defined here */
            `}
        </style>
    )
}

// EOF