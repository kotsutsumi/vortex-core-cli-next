// mira.tsx

export default function mira() {
    // -------------------------------------------------------------

    return (
        <style jsx global>
            {`
                :root {
                    --surface-a: #ffffff;
                    --surface-b: #eceff4;
                    --surface-c: #d8dee9;
                    --surface-d: #e5e9f0;
                    --surface-e: #ffffff;
                    --surface-f: #ffffff;
                    --text-color: #4c566a;
                    --text-color-secondary: #81a1c1;
                    --primary-color: #5e81ac;
                    --primary-color-text: #ffffff;
                    --font-family: Inter, sans-serif;
                    --surface-0: #ffffff;
                    --surface-50: #edeef0;
                    --surface-100: #dbdde1;
                    --surface-200: #b7bbc3;
                    --surface-300: #949aa6;
                    --surface-400: #707888;
                    --surface-500: #4c566a;
                    --surface-600: #3d4555;
                    --surface-700: #2e3440;
                    --surface-800: #1e222a;
                    --surface-900: #0f1115;
                    --gray-50: #edeef0;
                    --gray-100: #dbdde1;
                    --gray-200: #b7bbc3;
                    --gray-300: #949aa6;
                    --gray-400: #707888;
                    --gray-500: #4c566a;
                    --gray-600: #3d4555;
                    --gray-700: #2e3440;
                    --gray-800: #1e222a;
                    --gray-900: #0f1115;
                    --content-padding: 1rem;
                    --inline-spacing: 0.5rem;
                    --border-radius: 4px;
                    --surface-ground: #eceff4;
                    --surface-section: #ffffff;
                    --surface-card: #ffffff;
                    --surface-overlay: #ffffff;
                    --surface-border: #e5e9f0;
                    --surface-hover: #d8dee9;
                    --focus-ring: 0 0 0 0.2rem #c0d0e0;
                    --maskbg: rgba(112, 120, 136, 0.5);
                    --highlight-bg: #d8dee9;
                    --highlight-text-color: #2e3440;
                    color-scheme: light;
                }

                @font-face {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 400;
                    src: local('Inter'), local('Inter-Regular'),
                        url('./fonts/Inter-Regular.woff2') format('woff2'),
                        url('./fonts/Inter-Regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                @font-face {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    src: local('Inter Medium'), local('Inter-Medium'),
                        url('./fonts/Inter-Medium.woff2') format('woff2'),
                        url('./fonts/Inter-Medium.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                @font-face {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    src: local('Inter SemiBold'), local('Inter-SemiBold'),
                        url('./fonts/Inter-SemiBold.woff2') format('woff2'),
                        url('./fonts/Inter-SemiBold.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                @font-face {
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 700;
                    src: local('Inter Bold'), local('Inter-Bold'),
                        url('./fonts/Inter-Bold.woff2') format('woff2'),
                        url('./fonts/Inter-Bold.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                }
                * {
                    box-sizing: border-box;
                }

                .p-component {
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    font-weight: normal;
                }

                .p-component-overlay {
                    background-color: rgba(112, 120, 136, 0.5);
                    transition-duration: 0.2s;
                }

                .p-disabled,
                .p-component:disabled {
                    opacity: 0.6;
                }

                .p-error {
                    color: #bf616a;
                }

                .p-text-secondary {
                    color: #81a1c1;
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
                    font-family: 'Inter', sans-serif;
                    border-radius: 4px;
                }
                .p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    --blue-50: #f7f9fb;
                    --blue-100: #d8e1eb;
                    --blue-200: #bac9db;
                    --blue-300: #9bb1cc;
                    --blue-400: #7d99bc;
                    --blue-500: #5e81ac;
                    --blue-600: #506e92;
                    --blue-700: #425a78;
                    --blue-800: #34475f;
                    --blue-900: #263445;
                    --green-50: #f9faf7;
                    --green-100: #e0e9da;
                    --green-200: #c8d7bd;
                    --green-300: #b0c6a0;
                    --green-400: #97b483;
                    --green-500: #7fa366;
                    --green-600: #6c8b57;
                    --green-700: #597247;
                    --green-800: #465a38;
                    --green-900: #334129;
                    --yellow-50: #fdfcf8;
                    --yellow-100: #f6f1df;
                    --yellow-200: #efe6c6;
                    --yellow-300: #e8dbad;
                    --yellow-400: #e1d093;
                    --yellow-500: #dac57a;
                    --yellow-600: #b9a768;
                    --yellow-700: #998a55;
                    --yellow-800: #786c43;
                    --yellow-900: #574f31;
                    --cyan-50: #f8fbfc;
                    --cyan-100: #ddebf0;
                    --cyan-200: #c2dbe5;
                    --cyan-300: #a7cbd9;
                    --cyan-400: #8cbbce;
                    --cyan-500: #71abc2;
                    --cyan-600: #6091a5;
                    --cyan-700: #4f7888;
                    --cyan-800: #3e5e6b;
                    --cyan-900: #2d444e;
                    --pink-50: #fcf7f9;
                    --pink-100: #f0d9e2;
                    --pink-200: #e3bbcb;
                    --pink-300: #d79db3;
                    --pink-400: #cb7f9c;
                    --pink-500: #bf6185;
                    --pink-600: #a25271;
                    --pink-700: #86445d;
                    --pink-800: #693549;
                    --pink-900: #4c2735;
                    --indigo-50: #f6f8fa;
                    --indigo-100: #d5dbe9;
                    --indigo-200: #b3bfd8;
                    --indigo-300: #91a3c7;
                    --indigo-400: #7086b5;
                    --indigo-500: #4e6aa4;
                    --indigo-600: #425a8b;
                    --indigo-700: #374a73;
                    --indigo-800: #2b3a5a;
                    --indigo-900: #1f2a42;
                    --teal-50: #f7fbf9;
                    --teal-100: #d8ebe4;
                    --teal-200: #badbcf;
                    --teal-300: #9bccba;
                    --teal-400: #7dbca5;
                    --teal-500: #5eac90;
                    --teal-600: #50927a;
                    --teal-700: #427865;
                    --teal-800: #345f4f;
                    --teal-900: #26453a;
                    --orange-50: #fdf9f8;
                    --orange-100: #f4e2dd;
                    --orange-200: #ebcbc2;
                    --orange-300: #e2b5a6;
                    --orange-400: #d99e8b;
                    --orange-500: #d08770;
                    --orange-600: #b1735f;
                    --orange-700: #925f4e;
                    --orange-800: #724a3e;
                    --orange-900: #53362d;
                    --bluegray-50: #f9f9fa;
                    --bluegray-100: #e0e4e8;
                    --bluegray-200: #c8ced6;
                    --bluegray-300: #afb8c3;
                    --bluegray-400: #97a3b1;
                    --bluegray-500: #7e8d9f;
                    --bluegray-600: #6b7887;
                    --bluegray-700: #58636f;
                    --bluegray-800: #454e57;
                    --bluegray-900: #323840;
                    --purple-50: #faf7fa;
                    --purple-100: #e7dbe6;
                    --purple-200: #d4bed2;
                    --purple-300: #c0a1be;
                    --purple-400: #ad84aa;
                    --purple-500: #9a6796;
                    --purple-600: #835880;
                    --purple-700: #6c4869;
                    --purple-800: #553953;
                    --purple-900: #3e293c;
                    --red-50: #fcf7f8;
                    --red-100: #f0d9db;
                    --red-200: #e3bbbf;
                    --red-300: #d79da3;
                    --red-400: #cb7f86;
                    --red-500: #bf616a;
                    --red-600: #a2525a;
                    --red-700: #86444a;
                    --red-800: #69353a;
                    --red-900: #4c272a;
                    --primary-50: #f7f9fb;
                    --primary-100: #d8e1eb;
                    --primary-200: #bac9db;
                    --primary-300: #9bb1cc;
                    --primary-400: #7d99bc;
                    --primary-500: #5e81ac;
                    --primary-600: #506e92;
                    --primary-700: #425a78;
                    --primary-800: #34475f;
                    --primary-900: #263445;
                }

                .p-autocomplete .p-autocomplete-loader {
                    right: 0.5rem;
                }
                .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
                    right: 2.857rem;
                }
                .p-autocomplete .p-autocomplete-multiple-container {
                    padding: 0.25rem 0.5rem;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    border-color: #81a1c1;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token {
                    padding: 0.25rem 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-input-token
                    input {
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    color: #4c566a;
                    padding: 0;
                    margin: 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding: 0.25rem 0.5rem;
                    margin-right: 0.5rem;
                    background: #d8dee9;
                    color: #2e3440;
                    border-radius: 4px;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token
                    .p-autocomplete-token-icon {
                    margin-left: 0.5rem;
                }
                .p-autocomplete.p-invalid.p-component > .p-inputtext {
                    border-color: #bf616a;
                }

                .p-autocomplete-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-autocomplete-panel .p-autocomplete-items {
                    padding: 0.5rem 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item {
                    margin: 0;
                    padding: 0.5rem 1rem;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item:hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item-group {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                }

                .p-calendar.p-invalid.p-component > .p-inputtext {
                    border-color: #bf616a;
                }

                .p-datepicker {
                    padding: 0.5rem;
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #d8dee9;
                    border-radius: 4px;
                }
                .p-datepicker:not(.p-datepicker-inline) {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
                    background: #ffffff;
                }
                .p-datepicker .p-datepicker-header {
                    padding: 0.5rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                    margin: 0;
                    border-bottom: 1px solid #e5e9f0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev,
                .p-datepicker .p-datepicker-header .p-datepicker-next {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
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
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
                .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    color: #4c566a;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    font-weight: 600;
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
                    color: #5e81ac;
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
                    width: 2.5rem;
                    height: 2.5rem;
                }
                .p-datepicker table td {
                    padding: 0.5rem;
                }
                .p-datepicker table td > span {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 4px;
                    transition: none;
                    border: 1px solid transparent;
                }
                .p-datepicker table td > span.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-datepicker table td > span:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-datepicker table td.p-datepicker-today > span {
                    background: #ebcb8b;
                    color: #2e3440;
                    border-color: transparent;
                }
                .p-datepicker table td.p-datepicker-today > span.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-datepicker .p-datepicker-buttonbar {
                    padding: 1rem 0;
                    border-top: 1px solid #e5e9f0;
                }
                .p-datepicker .p-datepicker-buttonbar .p-button {
                    width: auto;
                }
                .p-datepicker .p-timepicker {
                    border-top: 1px solid #e5e9f0;
                    padding: 0.5rem;
                }
                .p-datepicker .p-timepicker button {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datepicker .p-timepicker button:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-datepicker .p-timepicker button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    color: #2e3440;
                    background: #d8dee9;
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
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
                    border-left: 1px solid #e5e9f0;
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
                    background: #d8dee9;
                }
                .p-datepicker:not(.p-disabled)
                    table
                    td
                    span:not(.p-highlight):not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #d8dee9;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #d8dee9;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }

                @media screen and (max-width: 769px) {
                    .p-datepicker table th,
                    .p-datepicker table td {
                        padding: 0;
                    }
                }
                .p-cascadeselect {
                    background: #ffffff;
                    border: 1px solid #d8dee9;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                }
                .p-cascadeselect:not(.p-disabled):hover {
                    border-color: #81a1c1;
                }
                .p-cascadeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-cascadeselect .p-cascadeselect-label {
                    background: transparent;
                    border: 0 none;
                    padding: 0.5rem 0.5rem;
                }
                .p-cascadeselect .p-cascadeselect-label.p-placeholder {
                    color: #4c566a;
                }
                .p-cascadeselect .p-cascadeselect-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-cascadeselect .p-cascadeselect-trigger {
                    background: transparent;
                    color: #81a1c1;
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-cascadeselect.p-invalid.p-component {
                    border-color: #bf616a;
                }

                .p-cascadeselect-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-cascadeselect-panel .p-cascadeselect-items {
                    padding: 0.5rem 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item {
                    margin: 0;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content {
                    padding: 0.5rem 1rem;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #4c566a;
                    background: transparent;
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
                    background: #eceff4;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                    background-color: #eceff4;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-checkbox {
                    width: 20px;
                    height: 20px;
                }
                .p-checkbox .p-checkbox-box {
                    border: 2px solid #d8dee9;
                    background: #ffffff;
                    width: 20px;
                    height: 20px;
                    color: #4c566a;
                    border-radius: 4px;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon {
                    transition-duration: 0.2s;
                    color: #ffffff;
                    font-size: 14px;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
                    width: 14px;
                    height: 14px;
                }
                .p-checkbox .p-checkbox-box.p-highlight {
                    border-color: #5e81ac;
                    background: #5e81ac;
                }
                .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
                    border-color: #48678c;
                    background: #81a1c1;
                    color: #ffffff;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                    border-color: #81a1c1;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    border-color: #48678c;
                    background: #81a1c1;
                    color: #ffffff;
                }
                .p-checkbox.p-invalid > .p-checkbox-box {
                    border-color: #bf616a;
                }

                .p-input-filled .p-checkbox .p-checkbox-box {
                    background-color: #eceff4;
                }
                .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
                    background: #5e81ac;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box:hover {
                    background-color: #eceff4;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    background: #81a1c1;
                }

                .p-chips .p-chips-multiple-container {
                    padding: 0.25rem 0.5rem;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                    border-color: #81a1c1;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-chips .p-chips-multiple-container .p-chips-token {
                    padding: 0.25rem 0.5rem;
                    margin-right: 0.5rem;
                    background: #e5e9f0;
                    color: #4c566a;
                    border-radius: 16px;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-token
                    .p-chips-token-icon {
                    margin-left: 0.5rem;
                }
                .p-chips .p-chips-multiple-container .p-chips-input-token {
                    padding: 0.25rem 0;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-input-token
                    input {
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    color: #4c566a;
                    padding: 0;
                    margin: 0;
                }
                .p-chips.p-invalid.p-component > .p-inputtext {
                    border-color: #bf616a;
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
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }

                .p-dropdown {
                    background: #ffffff;
                    border: 1px solid #d8dee9;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                }
                .p-dropdown:not(.p-disabled):hover {
                    border-color: #81a1c1;
                }
                .p-dropdown:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-dropdown.p-dropdown-clearable .p-dropdown-label {
                    padding-right: 1.5rem;
                }
                .p-dropdown .p-dropdown-label {
                    background: transparent;
                    border: 0 none;
                }
                .p-dropdown .p-dropdown-label.p-placeholder {
                    color: #4c566a;
                }
                .p-dropdown .p-dropdown-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-dropdown .p-dropdown-trigger {
                    background: transparent;
                    color: #81a1c1;
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-dropdown .p-dropdown-clear-icon {
                    color: #81a1c1;
                    right: 2.357rem;
                }
                .p-dropdown.p-invalid.p-component {
                    border-color: #bf616a;
                }

                .p-dropdown-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-dropdown-panel .p-dropdown-header {
                    padding: 0.5rem 1rem;
                    border-bottom: 0 none;
                    color: #4c566a;
                    background: #eceff4;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
                    padding-right: 1.5rem;
                    margin-right: -1.5rem;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
                }
                .p-dropdown-panel
                    .p-dropdown-header
                    .p-dropdown-clearable-filter
                    .p-dropdown-filter {
                    padding-right: 3rem;
                    margin-right: -3rem;
                }
                .p-dropdown-panel
                    .p-dropdown-header
                    .p-dropdown-clearable-filter
                    .p-dropdown-filter-clear-icon {
                    right: 2rem;
                }
                .p-dropdown-panel .p-dropdown-items {
                    padding: 0.5rem 0;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
                    margin: 0;
                    padding: 0.5rem 1rem;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
                    padding: 0.5rem 1rem;
                    color: #4c566a;
                    background: transparent;
                }

                .p-input-filled .p-dropdown {
                    background: #eceff4;
                }
                .p-input-filled .p-dropdown:not(.p-disabled):hover {
                    background-color: #eceff4;
                }
                .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }
                .p-input-filled
                    .p-dropdown:not(.p-disabled).p-focus
                    .p-inputtext {
                    background-color: transparent;
                }

                .p-editor-container .p-editor-toolbar {
                    background: #ffffff;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-editor-container .p-editor-toolbar.ql-snow {
                    border: 1px solid #e5e9f0;
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
                    stroke: #81a1c1;
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
                    fill: #81a1c1;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label {
                    border: 0 none;
                    color: #81a1c1;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover {
                    color: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-stroke {
                    stroke: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-fill {
                    fill: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label {
                    color: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-stroke {
                    stroke: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-fill {
                    fill: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                    padding: 0.5rem 0;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item {
                    color: #4c566a;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item:hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded:not(.ql-icon-picker)
                    .ql-picker-item {
                    padding: 0.5rem 1rem;
                }
                .p-editor-container .p-editor-content {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-editor-container .p-editor-content.ql-snow {
                    border: 1px solid #e5e9f0;
                }
                .p-editor-container .p-editor-content .ql-editor {
                    background: #ffffff;
                    color: #4c566a;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover,
                .p-editor-container .ql-snow.ql-toolbar button:focus {
                    color: #4c566a;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button:focus
                    .ql-stroke {
                    stroke: #4c566a;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
                .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
                    fill: #4c566a;
                }
                .p-editor-container .ql-snow.ql-toolbar button.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected {
                    color: #5e81ac;
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
                    stroke: #5e81ac;
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
                    fill: #5e81ac;
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
                    color: #5e81ac;
                }

                .p-inputgroup-addon {
                    background: #ffffff;
                    color: #81a1c1;
                    border-top: 1px solid #d8dee9;
                    border-left: 1px solid #d8dee9;
                    border-bottom: 1px solid #d8dee9;
                    padding: 0.5rem 0.5rem;
                    min-width: 2.357rem;
                }
                .p-inputgroup-addon:last-child {
                    border-right: 1px solid #d8dee9;
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
                    width: 2.357rem;
                }

                .p-inputnumber.p-invalid.p-component > .p-inputtext {
                    border-color: #bf616a;
                }

                .p-inputswitch {
                    width: 3rem;
                    height: 1.75rem;
                }
                .p-inputswitch .p-inputswitch-slider {
                    background: #d8dee9;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 30px;
                }
                .p-inputswitch .p-inputswitch-slider:before {
                    background: #5e81ac;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
                    background: #eceff4;
                }
                .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
                    background: #5e81ac;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    background: #ffffff;
                }
                .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
                    .p-inputswitch-slider {
                    background: #81a1c1;
                }
                .p-inputswitch.p-invalid .p-inputswitch-slider {
                    border-color: #bf616a;
                }

                .p-inputtext {
                    font-family: 'Inter', sans-serif;
                    font-size: 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    padding: 0.5rem 0.5rem;
                    border: 1px solid #d8dee9;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    appearance: none;
                    border-radius: 4px;
                }
                .p-inputtext:enabled:hover {
                    border-color: #81a1c1;
                }
                .p-inputtext:enabled:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-inputtext.p-invalid.p-component {
                    border-color: #bf616a;
                }
                .p-inputtext.p-inputtext-sm {
                    font-size: 0.875rem;
                    padding: 0.4375rem 0.4375rem;
                }
                .p-inputtext.p-inputtext-lg {
                    font-size: 1.25rem;
                    padding: 0.625rem 0.625rem;
                }

                .p-float-label > label {
                    left: 0.5rem;
                    color: #4c566a;
                    transition-duration: 0.2s;
                }

                .p-float-label > label.p-error {
                    color: #bf616a;
                }

                .p-input-icon-left > i:first-of-type,
                .p-input-icon-left > svg:first-of-type,
                .p-input-icon-left > .p-input-prefix {
                    left: 0.5rem;
                    color: #81a1c1;
                }

                .p-input-icon-left > .p-inputtext {
                    padding-left: 2rem;
                }

                .p-input-icon-left.p-float-label > label {
                    left: 2rem;
                }

                .p-input-icon-right > i:last-of-type,
                .p-input-icon-right > svg:last-of-type,
                .p-input-icon-right > .p-input-suffix {
                    right: 0.5rem;
                    color: #81a1c1;
                }

                .p-input-icon-right > .p-inputtext {
                    padding-right: 2rem;
                }

                ::-webkit-input-placeholder {
                    color: #4c566a;
                }

                :-moz-placeholder {
                    color: #4c566a;
                }

                ::-moz-placeholder {
                    color: #4c566a;
                }

                :-ms-input-placeholder {
                    color: #4c566a;
                }

                .p-input-filled .p-inputtext {
                    background-color: #eceff4;
                }
                .p-input-filled .p-inputtext:enabled:hover {
                    background-color: #eceff4;
                }
                .p-input-filled .p-inputtext:enabled:focus {
                    background-color: #ffffff;
                }

                .p-inputtext-sm .p-inputtext {
                    font-size: 0.875rem;
                    padding: 0.4375rem 0.4375rem;
                }

                .p-inputtext-lg .p-inputtext {
                    font-size: 1.25rem;
                    padding: 0.625rem 0.625rem;
                }

                .p-listbox {
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #d8dee9;
                    border-radius: 4px;
                }
                .p-listbox .p-listbox-header {
                    padding: 0.5rem 1rem;
                    border-bottom: 0 none;
                    color: #4c566a;
                    background: #eceff4;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-listbox .p-listbox-header .p-listbox-filter {
                    padding-right: 1.5rem;
                }
                .p-listbox .p-listbox-header .p-listbox-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
                }
                .p-listbox .p-listbox-list {
                    padding: 0.5rem 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item {
                    margin: 0;
                    padding: 0.5rem 1rem;
                    border: 0 none;
                    color: #4c566a;
                    transition: none;
                    border-radius: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-listbox .p-listbox-list .p-listbox-item-group {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                }
                .p-listbox .p-listbox-list .p-listbox-empty-message {
                    padding: 0.5rem 1rem;
                    color: #4c566a;
                    background: transparent;
                }
                .p-listbox:not(.p-disabled)
                    .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-listbox.p-invalid {
                    border-color: #bf616a;
                }

                .p-mention-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-mention-panel .p-mention-items {
                    padding: 0.5rem 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item {
                    margin: 0;
                    padding: 0.5rem 1rem;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item:hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }

                .p-multiselect {
                    background: #ffffff;
                    border: 1px solid #d8dee9;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                }
                .p-multiselect:not(.p-disabled):hover {
                    border-color: #81a1c1;
                }
                .p-multiselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-multiselect.p-multiselect-clearable .p-multiselect-label {
                    padding-right: 1.5rem;
                }
                .p-multiselect .p-multiselect-label {
                    padding: 0.5rem 0.5rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-multiselect .p-multiselect-label.p-placeholder {
                    color: #4c566a;
                }
                .p-multiselect.p-multiselect-chip .p-multiselect-token {
                    padding: 0.25rem 0.5rem;
                    margin-right: 0.5rem;
                    background: #e5e9f0;
                    color: #4c566a;
                    border-radius: 16px;
                }
                .p-multiselect.p-multiselect-chip
                    .p-multiselect-token
                    .p-multiselect-token-icon {
                    margin-left: 0.5rem;
                }
                .p-multiselect .p-multiselect-trigger {
                    background: transparent;
                    color: #81a1c1;
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-multiselect .p-multiselect-clear-icon {
                    color: #81a1c1;
                    right: 2.357rem;
                }
                .p-multiselect.p-invalid.p-component {
                    border-color: #bf616a;
                }

                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label {
                    padding: 0.25rem 0.5rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label.p-multiselect-items-label {
                    padding: 0.5rem 0.5rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable
                    .p-multiselect-label {
                    padding-right: 1.5rem;
                }

                .p-multiselect-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-multiselect-panel .p-multiselect-header {
                    padding: 0.5rem 1rem;
                    border-bottom: 0 none;
                    color: #4c566a;
                    background: #eceff4;
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
                    padding-right: 1.5rem;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-filter-container
                    .p-multiselect-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-multiselect-panel .p-multiselect-items {
                    padding: 0.5rem 0;
                }
                .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
                    margin: 0;
                    padding: 0.5rem 1rem;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
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
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-empty-message {
                    padding: 0.5rem 1rem;
                    color: #4c566a;
                    background: transparent;
                }

                .p-input-filled .p-multiselect {
                    background: #eceff4;
                }
                .p-input-filled .p-multiselect:not(.p-disabled):hover {
                    background-color: #eceff4;
                }
                .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-password.p-invalid.p-component > .p-inputtext {
                    border-color: #bf616a;
                }

                .p-password-panel {
                    padding: 1rem;
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-password-panel .p-password-meter {
                    margin-bottom: 0.5rem;
                    background: #e5e9f0;
                }
                .p-password-panel .p-password-meter .p-password-strength.weak {
                    background: #bf616a;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.medium {
                    background: #d08770;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.strong {
                    background: #7fa366;
                }

                .p-radiobutton {
                    width: 20px;
                    height: 20px;
                }
                .p-radiobutton .p-radiobutton-box {
                    border: 2px solid #d8dee9;
                    background: #ffffff;
                    width: 20px;
                    height: 20px;
                    color: #4c566a;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    border-color: #81a1c1;
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
                    width: 10px;
                    height: 10px;
                    transition-duration: 0.2s;
                    background-color: #ffffff;
                }
                .p-radiobutton .p-radiobutton-box.p-highlight {
                    border-color: #5e81ac;
                    background: #5e81ac;
                }
                .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    border-color: #5e81ac;
                    background: #81a1c1;
                    color: #ffffff;
                }
                .p-radiobutton.p-invalid > .p-radiobutton-box {
                    border-color: #bf616a;
                }
                .p-radiobutton:focus {
                    outline: 0 none;
                }

                .p-input-filled .p-radiobutton .p-radiobutton-box {
                    background-color: #eceff4;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):hover {
                    background-color: #eceff4;
                }
                .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
                    background: #5e81ac;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    background: #81a1c1;
                }

                .p-rating {
                    gap: 0.5rem;
                }
                .p-rating .p-rating-item .p-rating-icon {
                    color: #4c566a;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    font-size: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-icon {
                    width: 1.143rem;
                    height: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
                    color: #bf616a;
                }
                .p-rating .p-rating-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
                    color: #5e81ac;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon {
                    color: #5e81ac;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon.p-rating-cancel {
                    color: #d88889;
                }

                .p-selectbutton .p-button {
                    background: #ffffff;
                    border: 2px solid #d8dee9;
                    color: #4c566a;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-selectbutton .p-button .p-button-icon-left,
                .p-selectbutton .p-button .p-button-icon-right {
                    color: #81a1c1;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover {
                    background: #eceff4;
                    border-color: #81a1c1;
                    color: #4c566a;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-left,
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-right {
                    color: #81a1c1;
                }
                .p-selectbutton .p-button.p-highlight {
                    background: #5e81ac;
                    border-color: #5e81ac;
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight .p-button-icon-left,
                .p-selectbutton .p-button.p-highlight .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight:hover {
                    background: #81a1c1;
                    border-color: #5e81ac;
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
                .p-selectbutton
                    .p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton.p-invalid > .p-button {
                    border-color: #bf616a;
                }

                .p-slider {
                    background: #e5e9f0;
                    border: 0 none;
                    border-radius: 4px;
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
                    background: #ffffff;
                    border: 2px solid #5e81ac;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-slider .p-slider-handle:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-slider .p-slider-range {
                    background: #5e81ac;
                }
                .p-slider:not(.p-disabled) .p-slider-handle:hover {
                    background: #5e81ac;
                    border-color: #5e81ac;
                }

                .p-treeselect {
                    background: #ffffff;
                    border: 1px solid #d8dee9;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                }
                .p-treeselect:not(.p-disabled):hover {
                    border-color: #81a1c1;
                }
                .p-treeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: #81a1c1;
                }
                .p-treeselect .p-treeselect-label {
                    padding: 0.5rem 0.5rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-treeselect .p-treeselect-label.p-placeholder {
                    color: #4c566a;
                }
                .p-treeselect.p-treeselect-chip .p-treeselect-token {
                    padding: 0.25rem 0.5rem;
                    margin-right: 0.5rem;
                    background: #e5e9f0;
                    color: #4c566a;
                    border-radius: 16px;
                }
                .p-treeselect .p-treeselect-trigger {
                    background: transparent;
                    color: #81a1c1;
                    width: 2.357rem;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                .p-treeselect.p-invalid.p-component {
                    border-color: #bf616a;
                }

                .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-label {
                    padding: 0.25rem 0.5rem;
                }

                .p-treeselect-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-treeselect-panel .p-treeselect-header {
                    padding: 0.5rem 1rem;
                    border-bottom: 0 none;
                    color: #4c566a;
                    background: #eceff4;
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
                    padding-right: 1.5rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container
                    .p-treeselect-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container.p-treeselect-clearable-filter
                    .p-treeselect-filter {
                    padding-right: 3rem;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-filter-container.p-treeselect-clearable-filter
                    .p-treeselect-filter-clear-icon {
                    right: 2rem;
                }
                .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
                    border: 0 none;
                }
                .p-treeselect-panel
                    .p-treeselect-items-wrapper
                    .p-treeselect-empty-message {
                    padding: 0.5rem 1rem;
                    color: #4c566a;
                    background: transparent;
                }

                .p-input-filled .p-treeselect {
                    background: #eceff4;
                }
                .p-input-filled .p-treeselect:not(.p-disabled):hover {
                    background-color: #eceff4;
                }
                .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-togglebutton.p-button {
                    background: #ffffff;
                    border: 2px solid #d8dee9;
                    color: #4c566a;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-togglebutton.p-button .p-button-icon-left,
                .p-togglebutton.p-button .p-button-icon-right {
                    color: #81a1c1;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #eceff4;
                    border-color: #81a1c1;
                    color: #4c566a;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-left,
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-right {
                    color: #81a1c1;
                }
                .p-togglebutton.p-button.p-highlight {
                    background: #5e81ac;
                    border-color: #5e81ac;
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight:hover {
                    background: #81a1c1;
                    border-color: #5e81ac;
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-invalid > .p-button {
                    border-color: #bf616a;
                }

                .p-button {
                    color: #ffffff;
                    background: #5e81ac;
                    border: 2px solid #5e81ac;
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                }
                .p-button:enabled:hover,
                .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #81a1c1;
                    color: #ffffff;
                    border-color: #51749e;
                }
                .p-button:enabled:active,
                .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #48678c;
                    color: #ffffff;
                    border-color: #48678c;
                }
                .p-button.p-button-outlined {
                    background-color: transparent;
                    color: #5e81ac;
                    border: 2px solid;
                }
                .p-button.p-button-outlined:enabled:hover,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(94, 129, 172, 0.12);
                    color: #5e81ac;
                    border: 2px solid;
                }
                .p-button.p-button-outlined:enabled:active,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(94, 129, 172, 0.24);
                    color: #5e81ac;
                    border: 2px solid;
                }
                .p-button.p-button-outlined.p-button-plain {
                    color: #81a1c1;
                    border-color: #81a1c1;
                }
                .p-button.p-button-outlined.p-button-plain:enabled:hover,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):hover {
                    background: #ffffff;
                    color: #81a1c1;
                }
                .p-button.p-button-outlined.p-button-plain:enabled:active,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):active {
                    background: #e5e9f0;
                    color: #81a1c1;
                }
                .p-button.p-button-text {
                    background-color: transparent;
                    color: #5e81ac;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:hover,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(94, 129, 172, 0.12);
                    color: #5e81ac;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:active,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(94, 129, 172, 0.24);
                    color: #5e81ac;
                    border-color: transparent;
                }
                .p-button.p-button-text.p-button-plain {
                    color: #81a1c1;
                }
                .p-button.p-button-text.p-button-plain:enabled:hover,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #ffffff;
                    color: #81a1c1;
                }
                .p-button.p-button-text.p-button-plain:enabled:active,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #e5e9f0;
                    color: #81a1c1;
                }
                .p-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    color: #5e81ac;
                    background-color: #ffffff;
                }
                .p-button.p-button-raised {
                    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.2),
                        0 12px 10px 0 rgba(0, 0, 0, 0.06);
                }
                .p-button.p-button-rounded {
                    border-radius: 2rem;
                }
                .p-button.p-button-icon-only {
                    width: 2.357rem;
                    padding: 0.5rem 0;
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
                    padding: 0.4375rem 0.875rem;
                }
                .p-button.p-button-sm .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-button.p-button-lg {
                    font-size: 1.25rem;
                    padding: 0.625rem 1.25rem;
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
                    color: #ffffff;
                    background: #4c566a;
                    border: 2px solid #4c566a;
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
                    background: #707888;
                    color: #ffffff;
                    border-color: #4c566a;
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
                    box-shadow: 0 0 0 0.2rem #b3bac8;
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
                    background: #2e3440;
                    color: #ffffff;
                    border-color: #2e3440;
                }
                .p-button.p-button-secondary.p-button-outlined,
                .p-buttonset.p-button-secondary > .p-button.p-button-outlined,
                .p-splitbutton.p-button-secondary > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-secondary.p-button-outlined {
                    background-color: transparent;
                    color: #4c566a;
                    border: 2px solid;
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
                    background: rgba(76, 86, 106, 0.12);
                    color: #4c566a;
                    border: 2px solid;
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
                    background: rgba(76, 86, 106, 0.24);
                    color: #4c566a;
                    border: 2px solid;
                }
                .p-button.p-button-secondary.p-button-text,
                .p-buttonset.p-button-secondary > .p-button.p-button-text,
                .p-splitbutton.p-button-secondary > .p-button.p-button-text,
                .p-fileupload-choose.p-button-secondary.p-button-text {
                    background-color: transparent;
                    color: #4c566a;
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
                    background: rgba(76, 86, 106, 0.12);
                    border-color: transparent;
                    color: #4c566a;
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
                    background: rgba(76, 86, 106, 0.24);
                    border-color: transparent;
                    color: #4c566a;
                }

                .p-button.p-button-info,
                .p-buttonset.p-button-info > .p-button,
                .p-splitbutton.p-button-info > .p-button,
                .p-fileupload-choose.p-button-info {
                    color: #ffffff;
                    background: #639bb2;
                    border: 2px solid #639bb2;
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
                    background: #88c0d0;
                    color: #ffffff;
                    border-color: #639bb2;
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
                    box-shadow: 0 0 0 0.2rem #c1d7e0;
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
                    background: #497e94;
                    color: #ffffff;
                    border-color: #497e94;
                }
                .p-button.p-button-info.p-button-outlined,
                .p-buttonset.p-button-info > .p-button.p-button-outlined,
                .p-splitbutton.p-button-info > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-info.p-button-outlined {
                    background-color: transparent;
                    color: #639bb2;
                    border: 2px solid;
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
                    background: rgba(99, 155, 178, 0.12);
                    color: #639bb2;
                    border: 2px solid;
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
                    background: rgba(99, 155, 178, 0.24);
                    color: #639bb2;
                    border: 2px solid;
                }
                .p-button.p-button-info.p-button-text,
                .p-buttonset.p-button-info > .p-button.p-button-text,
                .p-splitbutton.p-button-info > .p-button.p-button-text,
                .p-fileupload-choose.p-button-info.p-button-text {
                    background-color: transparent;
                    color: #639bb2;
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
                    background: rgba(99, 155, 178, 0.12);
                    border-color: transparent;
                    color: #639bb2;
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
                    background: rgba(99, 155, 178, 0.24);
                    border-color: transparent;
                    color: #639bb2;
                }

                .p-button.p-button-success,
                .p-buttonset.p-button-success > .p-button,
                .p-splitbutton.p-button-success > .p-button,
                .p-fileupload-choose.p-button-success {
                    color: #ffffff;
                    background: #7fa366;
                    border: 2px solid #7fa366;
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
                    background: #a3be8c;
                    color: #ffffff;
                    border-color: #7fa366;
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
                    box-shadow: 0 0 0 0.2rem #ccdac2;
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
                    background: #658450;
                    color: #ffffff;
                    border-color: #658450;
                }
                .p-button.p-button-success.p-button-outlined,
                .p-buttonset.p-button-success > .p-button.p-button-outlined,
                .p-splitbutton.p-button-success > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-success.p-button-outlined {
                    background-color: transparent;
                    color: #7fa366;
                    border: 2px solid;
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
                    background: rgba(127, 163, 102, 0.12);
                    color: #7fa366;
                    border: 2px solid;
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
                    background: rgba(127, 163, 102, 0.24);
                    color: #7fa366;
                    border: 2px solid;
                }
                .p-button.p-button-success.p-button-text,
                .p-buttonset.p-button-success > .p-button.p-button-text,
                .p-splitbutton.p-button-success > .p-button.p-button-text,
                .p-fileupload-choose.p-button-success.p-button-text {
                    background-color: transparent;
                    color: #7fa366;
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
                    background: rgba(127, 163, 102, 0.12);
                    border-color: transparent;
                    color: #7fa366;
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
                    background: rgba(127, 163, 102, 0.24);
                    border-color: transparent;
                    color: #7fa366;
                }

                .p-button.p-button-warning,
                .p-buttonset.p-button-warning > .p-button,
                .p-splitbutton.p-button-warning > .p-button,
                .p-fileupload-choose.p-button-warning {
                    color: #ffffff;
                    background: #d08770;
                    border: 2px solid #d08770;
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
                    background: #e2ac94;
                    color: #ffffff;
                    border-color: #d08770;
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
                    box-shadow: 0 0 0 0.2rem #eccfc6;
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
                    background: #c05f40;
                    color: #ffffff;
                    border-color: #c05f40;
                }
                .p-button.p-button-warning.p-button-outlined,
                .p-buttonset.p-button-warning > .p-button.p-button-outlined,
                .p-splitbutton.p-button-warning > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-warning.p-button-outlined {
                    background-color: transparent;
                    color: #d08770;
                    border: 2px solid;
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
                    background: rgba(208, 135, 112, 0.12);
                    color: #d08770;
                    border: 2px solid;
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
                    background: rgba(208, 135, 112, 0.24);
                    color: #d08770;
                    border: 2px solid;
                }
                .p-button.p-button-warning.p-button-text,
                .p-buttonset.p-button-warning > .p-button.p-button-text,
                .p-splitbutton.p-button-warning > .p-button.p-button-text,
                .p-fileupload-choose.p-button-warning.p-button-text {
                    background-color: transparent;
                    color: #d08770;
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
                    background: rgba(208, 135, 112, 0.12);
                    border-color: transparent;
                    color: #d08770;
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
                    background: rgba(208, 135, 112, 0.24);
                    border-color: transparent;
                    color: #d08770;
                }

                .p-button.p-button-help,
                .p-buttonset.p-button-help > .p-button,
                .p-splitbutton.p-button-help > .p-button,
                .p-fileupload-choose.p-button-help {
                    color: #ffffff;
                    background: #9a6796;
                    border: 2px solid #9a6796;
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
                    background: #b48ead;
                    color: #ffffff;
                    border-color: #9a6796;
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
                    box-shadow: 0 0 0 0.2rem #d7c2d5;
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
                    background: #7c5278;
                    color: #ffffff;
                    border-color: #7c5278;
                }
                .p-button.p-button-help.p-button-outlined,
                .p-buttonset.p-button-help > .p-button.p-button-outlined,
                .p-splitbutton.p-button-help > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-help.p-button-outlined {
                    background-color: transparent;
                    color: #9a6796;
                    border: 2px solid;
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
                    background: rgba(154, 103, 150, 0.12);
                    color: #9a6796;
                    border: 2px solid;
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
                    background: rgba(154, 103, 150, 0.24);
                    color: #9a6796;
                    border: 2px solid;
                }
                .p-button.p-button-help.p-button-text,
                .p-buttonset.p-button-help > .p-button.p-button-text,
                .p-splitbutton.p-button-help > .p-button.p-button-text,
                .p-fileupload-choose.p-button-help.p-button-text {
                    background-color: transparent;
                    color: #9a6796;
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
                    background: rgba(154, 103, 150, 0.12);
                    border-color: transparent;
                    color: #9a6796;
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
                    background: rgba(154, 103, 150, 0.24);
                    border-color: transparent;
                    color: #9a6796;
                }

                .p-button.p-button-danger,
                .p-buttonset.p-button-danger > .p-button,
                .p-splitbutton.p-button-danger > .p-button,
                .p-fileupload-choose.p-button-danger {
                    color: #ffffff;
                    background: #bf616a;
                    border: 2px solid #bf616a;
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
                    background: #d88889;
                    color: #ffffff;
                    border-color: #bf616a;
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
                    box-shadow: 0 0 0 0.2rem #e5c0c3;
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
                    background: #a4424c;
                    color: #ffffff;
                    border-color: #a4424c;
                }
                .p-button.p-button-danger.p-button-outlined,
                .p-buttonset.p-button-danger > .p-button.p-button-outlined,
                .p-splitbutton.p-button-danger > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-danger.p-button-outlined {
                    background-color: transparent;
                    color: #bf616a;
                    border: 2px solid;
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
                    background: rgba(191, 97, 106, 0.12);
                    color: #bf616a;
                    border: 2px solid;
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
                    background: rgba(191, 97, 106, 0.24);
                    color: #bf616a;
                    border: 2px solid;
                }
                .p-button.p-button-danger.p-button-text,
                .p-buttonset.p-button-danger > .p-button.p-button-text,
                .p-splitbutton.p-button-danger > .p-button.p-button-text,
                .p-fileupload-choose.p-button-danger.p-button-text {
                    background-color: transparent;
                    color: #bf616a;
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
                    background: rgba(191, 97, 106, 0.12);
                    border-color: transparent;
                    color: #bf616a;
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
                    background: rgba(191, 97, 106, 0.24);
                    border-color: transparent;
                    color: #bf616a;
                }

                .p-button.p-button-link {
                    color: #48678c;
                    background: transparent;
                    border: transparent;
                }
                .p-button.p-button-link:enabled:hover,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: transparent;
                    color: #48678c;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                    border-color: transparent;
                }
                .p-button.p-button-link:enabled:active,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: transparent;
                    color: #48678c;
                    border-color: transparent;
                }

                .p-splitbutton {
                    border-radius: 4px;
                }
                .p-splitbutton.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #5e81ac;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(94, 129, 172, 0.12);
                    color: #5e81ac;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(94, 129, 172, 0.24);
                    color: #5e81ac;
                }
                .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
                    color: #81a1c1;
                    border-color: #81a1c1;
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #ffffff;
                    color: #81a1c1;
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #e5e9f0;
                    color: #81a1c1;
                }
                .p-splitbutton.p-button-text > .p-button {
                    background-color: transparent;
                    color: #5e81ac;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:hover,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(94, 129, 172, 0.12);
                    color: #5e81ac;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:active,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(94, 129, 172, 0.24);
                    color: #5e81ac;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text.p-button-plain > .p-button {
                    color: #81a1c1;
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #ffffff;
                    color: #81a1c1;
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #e5e9f0;
                    color: #81a1c1;
                }
                .p-splitbutton.p-button-raised {
                    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.2),
                        0 12px 10px 0 rgba(0, 0, 0, 0.06);
                }
                .p-splitbutton.p-button-rounded {
                    border-radius: 2rem;
                }
                .p-splitbutton.p-button-rounded > .p-button {
                    border-radius: 2rem;
                }
                .p-splitbutton.p-button-sm > .p-button {
                    font-size: 0.875rem;
                    padding: 0.4375rem 0.875rem;
                }
                .p-splitbutton.p-button-sm > .p-button .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-splitbutton.p-button-lg > .p-button {
                    font-size: 1.25rem;
                    padding: 0.625rem 1.25rem;
                }
                .p-splitbutton.p-button-lg > .p-button .p-button-icon {
                    font-size: 1.25rem;
                }

                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button {
                    background-color: transparent;
                    color: #4c566a;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(76, 86, 106, 0.12);
                    color: #4c566a;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(76, 86, 106, 0.24);
                    color: #4c566a;
                }
                .p-splitbutton.p-button-secondary.p-button-text > .p-button {
                    background-color: transparent;
                    color: #4c566a;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(76, 86, 106, 0.12);
                    border-color: transparent;
                    color: #4c566a;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(76, 86, 106, 0.24);
                    border-color: transparent;
                    color: #4c566a;
                }

                .p-splitbutton.p-button-info.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #639bb2;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(99, 155, 178, 0.12);
                    color: #639bb2;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(99, 155, 178, 0.24);
                    color: #639bb2;
                }
                .p-splitbutton.p-button-info.p-button-text > .p-button {
                    background-color: transparent;
                    color: #639bb2;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(99, 155, 178, 0.12);
                    border-color: transparent;
                    color: #639bb2;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(99, 155, 178, 0.24);
                    border-color: transparent;
                    color: #639bb2;
                }

                .p-splitbutton.p-button-success.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #7fa366;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(127, 163, 102, 0.12);
                    color: #7fa366;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(127, 163, 102, 0.24);
                    color: #7fa366;
                }
                .p-splitbutton.p-button-success.p-button-text > .p-button {
                    background-color: transparent;
                    color: #7fa366;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(127, 163, 102, 0.12);
                    border-color: transparent;
                    color: #7fa366;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(127, 163, 102, 0.24);
                    border-color: transparent;
                    color: #7fa366;
                }

                .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #d08770;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(208, 135, 112, 0.12);
                    color: #d08770;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(208, 135, 112, 0.24);
                    color: #d08770;
                }
                .p-splitbutton.p-button-warning.p-button-text > .p-button {
                    background-color: transparent;
                    color: #d08770;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(208, 135, 112, 0.12);
                    border-color: transparent;
                    color: #d08770;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(208, 135, 112, 0.24);
                    border-color: transparent;
                    color: #d08770;
                }

                .p-splitbutton.p-button-help.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #9a6796;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(154, 103, 150, 0.12);
                    color: #9a6796;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(154, 103, 150, 0.24);
                    color: #9a6796;
                }
                .p-splitbutton.p-button-help.p-button-text > .p-button {
                    background-color: transparent;
                    color: #9a6796;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(154, 103, 150, 0.12);
                    border-color: transparent;
                    color: #9a6796;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(154, 103, 150, 0.24);
                    border-color: transparent;
                    color: #9a6796;
                }

                .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #bf616a;
                    border: 2px solid;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(191, 97, 106, 0.12);
                    color: #bf616a;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(191, 97, 106, 0.24);
                    color: #bf616a;
                }
                .p-splitbutton.p-button-danger.p-button-text > .p-button {
                    background-color: transparent;
                    color: #bf616a;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(191, 97, 106, 0.12);
                    border-color: transparent;
                    color: #bf616a;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(191, 97, 106, 0.24);
                    border-color: transparent;
                    color: #bf616a;
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
                    background: #4c566a;
                    color: #fff;
                }
                .p-speeddial-action:hover {
                    background: #3b4252;
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
                    background-color: rgba(112, 120, 136, 0.5);
                }

                .p-carousel .p-carousel-content .p-carousel-prev,
                .p-carousel .p-carousel-content .p-carousel-next {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin: 0.5rem;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
                .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:focus,
                .p-carousel .p-carousel-content .p-carousel-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    background-color: #e5e9f0;
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
                    background: #81a1c1;
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: #d8dee9;
                    color: #2e3440;
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
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-datatable .p-datatable-footer {
                    background: #eceff4;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-datatable .p-datatable-thead > tr > th {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    font-weight: 600;
                    color: #4c566a;
                    background: #eceff4;
                    transition: none;
                }
                .p-datatable .p-datatable-tfoot > tr > td {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    font-weight: 600;
                    color: #4c566a;
                    background: #eceff4;
                }
                .p-datatable .p-sortable-column .p-sortable-column-icon {
                    color: #81a1c1;
                    margin-left: 0.5rem;
                }
                .p-datatable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #2e3440;
                    background: #d8dee9;
                    margin-left: 0.5rem;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #81a1c1;
                }
                .p-datatable .p-sortable-column.p-highlight {
                    background: #eceff4;
                    color: #4c566a;
                }
                .p-datatable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #4c566a;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #4c566a;
                }
                .p-datatable .p-sortable-column:focus {
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                    outline: 0 none;
                }
                .p-datatable .p-datatable-tbody > tr {
                    background: #ffffff;
                    color: #4c566a;
                    transition: none;
                }
                .p-datatable .p-datatable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #eceff4;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
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
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
                    margin-right: 0.5rem;
                }
                .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
                    font-weight: 600;
                }
                .p-datatable .p-datatable-tbody > tr > td.p-highlight {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-datatable .p-datatable-tbody > tr.p-highlight {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #d8dee9;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #d8dee9;
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:focus {
                    outline: 0.15rem solid #c0d0e0;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:not(.p-highlight):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:focus {
                    outline: 0.15rem solid #c0d0e0;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-hoverable-rows
                    .p-datatable-tbody
                    > tr:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-datatable .p-column-resizer-helper {
                    background: #5e81ac;
                }
                .p-datatable .p-datatable-scrollable-header,
                .p-datatable .p-datatable-scrollable-footer {
                    background: #ffffff;
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
                    background-color: #eceff4;
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
                    background: #f6f7fa;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler {
                    color: #2e3440;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler:hover {
                    color: #2e3440;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd
                    + .p-row-expanded {
                    background: #f6f7fa;
                }
                .p-datatable.p-datatable-sm .p-datatable-header {
                    padding: 0.5rem 0.5rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
                    padding: 0.5rem 0.5rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
                    padding: 0.5rem 0.5rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
                    padding: 0.5rem 0.5rem;
                }
                .p-datatable.p-datatable-sm .p-datatable-footer {
                    padding: 0.5rem 0.5rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-header {
                    padding: 1.25rem 1.25rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
                    padding: 1.25rem 1.25rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
                    padding: 1.25rem 1.25rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
                    padding: 1.25rem 1.25rem;
                }
                .p-datatable.p-datatable-lg .p-datatable-footer {
                    padding: 1.25rem 1.25rem;
                }

                .p-datatable-drag-selection-helper {
                    background: rgba(94, 129, 172, 0.16);
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
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-dataview .p-dataview-content {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    padding: 0;
                }
                .p-dataview.p-dataview-list
                    .p-dataview-content
                    > .p-grid
                    > div {
                    border: solid #ffffff;
                    border-width: 0 0 1px 0;
                }
                .p-dataview .p-dataview-footer {
                    background: #eceff4;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
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
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-datascroller .p-datascroller-content {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    padding: 0;
                }
                .p-datascroller.p-datascroller-inline
                    .p-datascroller-list
                    > li {
                    border: solid #ffffff;
                    border-width: 0 0 1px 0;
                }
                .p-datascroller .p-datascroller-footer {
                    background: #eceff4;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
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
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-menu-button:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-open,
                .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-active,
                .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-column-filter-menu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }

                .p-column-filter-clear-button {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-clear-button:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-column-filter-clear-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }

                .p-column-filter-overlay {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    min-width: 12.5rem;
                }
                .p-column-filter-overlay .p-column-filter-row-items {
                    padding: 0.5rem 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item {
                    margin: 0;
                    padding: 0.5rem 1rem;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: none;
                    border-radius: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #4c566a;
                    background: transparent;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
                }

                .p-column-filter-overlay-menu .p-column-filter-operator {
                    padding: 0.5rem 1rem;
                    border-bottom: 0 none;
                    color: #4c566a;
                    background: #eceff4;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-column-filter-overlay-menu .p-column-filter-constraint {
                    padding: 1rem;
                    border-bottom: 1px solid #e5e9f0;
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
                    padding: 0.5rem 1rem;
                }
                .p-column-filter-overlay-menu .p-column-filter-buttonbar {
                    padding: 1rem;
                }

                .fc {
                    /* FullCalendar 4 */
                    /* FullCalendar 5 */
                }
                .fc.fc-unthemed .fc-view-container th {
                    background: #ffffff;
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                }
                .fc.fc-unthemed .fc-view-container td.fc-widget-content {
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                }
                .fc.fc-unthemed .fc-view-container td.fc-head-container {
                    border: 1px solid #e5e9f0;
                }
                .fc.fc-unthemed .fc-view-container .fc-view {
                    background: #ffffff;
                }
                .fc.fc-unthemed .fc-view-container .fc-row {
                    border-right: 1px solid #e5e9f0;
                }
                .fc.fc-unthemed .fc-view-container .fc-event {
                    background: #51749e;
                    border: 1px solid #51749e;
                    color: #ffffff;
                }
                .fc.fc-unthemed .fc-view-container .fc-divider {
                    background: #ffffff;
                    border: 1px solid #e5e9f0;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button {
                    color: #ffffff;
                    background: #5e81ac;
                    border: 2px solid #5e81ac;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
                    background: #81a1c1;
                    color: #ffffff;
                    border-color: #51749e;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
                    background: #48678c;
                    color: #ffffff;
                    border-color: #48678c;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
                    background: #ffffff;
                    border: 2px solid #d8dee9;
                    color: #4c566a;
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
                    background: #eceff4;
                    border-color: #81a1c1;
                    color: #4c566a;
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
                    background: #5e81ac;
                    border-color: #5e81ac;
                    color: #ffffff;
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
                    background: #81a1c1;
                    border-color: #5e81ac;
                    color: #ffffff;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    border-color: #e5e9f0;
                }
                .fc.fc-theme-standard .fc-view-harness th {
                    background: #ffffff;
                    border-color: #e5e9f0;
                    color: #4c566a;
                }
                .fc.fc-theme-standard .fc-view-harness td {
                    color: #4c566a;
                    border-color: #e5e9f0;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-view {
                    background: #ffffff;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-popover {
                    background: none;
                    border: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header {
                    border: 1px solid #e5e9f0;
                    padding: 1rem;
                    background: #ffffff;
                    color: #4c566a;
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
                    color: #81a1c1;
                    border: 2px solid transparent;
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
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-body {
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    border-top: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event {
                    color: #ffffff;
                    background: #51749e;
                    border-color: #51749e;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event
                    .fc-event-main {
                    color: #ffffff;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event
                    .fc-daygrid-event-dot {
                    background: #51749e;
                    border-color: #51749e;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event:hover {
                    background: transparent;
                    color: #4c566a;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
                    background: #ffffff;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button {
                    color: #ffffff;
                    background: #5e81ac;
                    border: 2px solid #5e81ac;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 4px;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
                    background: #81a1c1;
                    color: #ffffff;
                    border-color: #51749e;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
                    background: #48678c;
                    color: #ffffff;
                    border-color: #48678c;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
                    opacity: 0.6;
                    color: #ffffff;
                    background: #5e81ac;
                    border: 2px solid #5e81ac;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    background: #ffffff;
                    border: 2px solid #d8dee9;
                    color: #4c566a;
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
                    background: #eceff4;
                    border-color: #81a1c1;
                    color: #4c566a;
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
                    background: #5e81ac;
                    border-color: #5e81ac;
                    color: #ffffff;
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
                    background: #81a1c1;
                    border-color: #5e81ac;
                    color: #ffffff;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    color: #2e3440;
                    background: #d8dee9;
                }

                .p-orderlist .p-orderlist-controls {
                    padding: 1rem;
                }
                .p-orderlist .p-orderlist-controls .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-orderlist .p-orderlist-header {
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    padding: 1rem;
                    font-weight: 600;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-orderlist .p-orderlist-filter-container {
                    padding: 1rem;
                    background: #ffffff;
                    border: 1px solid #e5e9f0;
                    border-bottom: 0 none;
                }
                .p-orderlist
                    .p-orderlist-filter-container
                    .p-orderlist-filter-input {
                    padding-right: 1.5rem;
                }
                .p-orderlist
                    .p-orderlist-filter-container
                    .p-orderlist-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
                }
                .p-orderlist .p-orderlist-list {
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 0.5rem 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item {
                    padding: 0.5rem 1rem;
                    margin: 0;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: transform 0.2s, none;
                }
                .p-orderlist
                    .p-orderlist-list
                    .p-orderlist-item:not(.p-highlight):hover {
                    background: transparent;
                    color: #4c566a;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even) {
                    background: #f6f7fa;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even):hover {
                    background: transparent;
                }

                .p-organizationchart
                    .p-organizationchart-node-content.p-organizationchart-selectable-node:not(
                        .p-highlight
                    ):hover {
                    background: transparent;
                    color: #4c566a;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight
                    .p-node-toggler
                    i {
                    color: #8699bb;
                }
                .p-organizationchart .p-organizationchart-line-down {
                    background: #e5e9f0;
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid #e5e9f0;
                    border-color: #e5e9f0;
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid #e5e9f0;
                    border-color: #e5e9f0;
                }
                .p-organizationchart .p-organizationchart-node-content {
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 1rem;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }

                .p-paginator {
                    background: #ffffff;
                    color: #4c566a;
                    border: solid #ffffff;
                    border-width: 0;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                }
                .p-paginator .p-paginator-first,
                .p-paginator .p-paginator-prev,
                .p-paginator .p-paginator-next,
                .p-paginator .p-paginator-last {
                    background-color: transparent;
                    border: 0 none;
                    color: #4c566a;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0.143rem;
                    transition: none;
                    border-radius: 4px;
                }
                .p-paginator
                    .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
                    background: #eceff4;
                    border-color: #5e81ac;
                    color: #4c566a;
                }
                .p-paginator .p-paginator-first {
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-paginator .p-paginator-last {
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
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
                    color: #4c566a;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0.143rem;
                    padding: 0 0.5rem;
                }
                .p-paginator .p-paginator-pages .p-paginator-page {
                    background-color: transparent;
                    border: 0 none;
                    color: #4c566a;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0.143rem;
                    transition: none;
                    border-radius: 4px;
                }
                .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                    background: #d8dee9;
                    border-color: #d8dee9;
                    color: #2e3440;
                }
                .p-paginator
                    .p-paginator-pages
                    .p-paginator-page:not(.p-highlight):hover {
                    background: #eceff4;
                    border-color: #5e81ac;
                    color: #4c566a;
                }

                .p-picklist .p-picklist-buttons {
                    padding: 1rem;
                }
                .p-picklist .p-picklist-buttons .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-picklist .p-picklist-header {
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    padding: 1rem;
                    font-weight: 600;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-picklist .p-picklist-filter-container {
                    padding: 1rem;
                    background: #ffffff;
                    border: 1px solid #e5e9f0;
                    border-bottom: 0 none;
                }
                .p-picklist
                    .p-picklist-filter-container
                    .p-picklist-filter-input {
                    padding-right: 1.5rem;
                }
                .p-picklist
                    .p-picklist-filter-container
                    .p-picklist-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
                }
                .p-picklist .p-picklist-list {
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 0.5rem 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-picklist .p-picklist-list .p-picklist-item {
                    padding: 0.5rem 1rem;
                    margin: 0;
                    border: 0 none;
                    color: #4c566a;
                    background: transparent;
                    transition: transform 0.2s, none;
                }
                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:not(.p-highlight):hover {
                    background: transparent;
                    color: #4c566a;
                }
                .p-picklist .p-picklist-list .p-picklist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
                    color: #2e3440;
                    background: #d8dee9;
                }

                .p-tree {
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 1rem;
                    border-radius: 4px;
                }
                .p-tree .p-tree-container .p-treenode {
                    padding: 0.143rem;
                }
                .p-tree .p-tree-container .p-treenode .p-treenode-content {
                    border-radius: 4px;
                    transition: none;
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
                    color: #81a1c1;
                    border: 2px solid transparent;
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
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-treenode-icon {
                    margin-right: 0.5rem;
                    color: #81a1c1;
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
                    color: #4c566a;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight {
                    background: #d8dee9;
                    color: #2e3440;
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
                    color: #2e3440;
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
                    color: #2e3440;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-selectable:not(
                        .p-highlight
                    ):hover {
                    background: transparent;
                    color: #4c566a;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-dragover {
                    background: transparent;
                    color: #4c566a;
                }
                .p-tree .p-tree-filter-container {
                    margin-bottom: 0.5rem;
                }
                .p-tree .p-tree-filter-container .p-tree-filter {
                    width: 100%;
                    padding-right: 1.5rem;
                }
                .p-tree .p-tree-filter-container .p-tree-filter-icon {
                    right: 0.5rem;
                    color: #81a1c1;
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
                    background: #9fadc9;
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
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-treetable .p-treetable-footer {
                    background: #eceff4;
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-treetable .p-treetable-thead > tr > th {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    font-weight: 600;
                    color: #4c566a;
                    background: #eceff4;
                    transition: none;
                }
                .p-treetable .p-treetable-tfoot > tr > td {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #ffffff;
                    border-width: 0 0 1px 0;
                    font-weight: 600;
                    color: #4c566a;
                    background: #eceff4;
                }
                .p-treetable .p-sortable-column {
                    outline-color: #c0d0e0;
                }
                .p-treetable .p-sortable-column .p-sortable-column-icon {
                    color: #81a1c1;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #2e3440;
                    background: #d8dee9;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column:not(.p-highlight):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-treetable
                    .p-sortable-column:not(.p-highlight):hover
                    .p-sortable-column-icon {
                    color: #81a1c1;
                }
                .p-treetable .p-sortable-column.p-highlight {
                    background: #eceff4;
                    color: #4c566a;
                }
                .p-treetable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #4c566a;
                }
                .p-treetable .p-treetable-tbody > tr {
                    background: #ffffff;
                    color: #4c566a;
                    transition: none;
                }
                .p-treetable .p-treetable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #eceff4;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                }
                .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
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
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    color: #4c566a;
                }
                .p-treetable .p-treetable-tbody > tr:focus {
                    outline: 0.15rem solid #c0d0e0;
                    outline-offset: -0.15rem;
                }
                .p-treetable .p-treetable-tbody > tr.p-highlight {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler {
                    color: #2e3440;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler:hover {
                    color: #2e3440;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler {
                    color: #4c566a;
                }
                .p-treetable .p-column-resizer-helper {
                    background: #5e81ac;
                }
                .p-treetable .p-treetable-scrollable-header,
                .p-treetable .p-treetable-scrollable-footer {
                    background: #ffffff;
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
                    padding: 0.875rem 0.875rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
                    padding: 0.5rem 0.5rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
                    padding: 0.5rem 0.5rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
                    padding: 0.5rem 0.5rem;
                }
                .p-treetable.p-treetable-sm .p-treetable-footer {
                    padding: 0.5rem 0.5rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-header {
                    padding: 1.25rem 1.25rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
                    padding: 1.25rem 1.25rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
                    padding: 1.25rem 1.25rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
                    padding: 1.25rem 1.25rem;
                }
                .p-treetable.p-treetable-lg .p-treetable-footer {
                    padding: 1.25rem 1.25rem;
                }

                .p-timeline .p-timeline-event-marker {
                    border: 0 none;
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                    background-color: #5e81ac;
                }
                .p-timeline .p-timeline-event-connector {
                    background-color: #e5e9f0;
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
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link {
                    background: #ffffff;
                    border-color: #e5e9f0;
                    color: #4c566a;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight
                    .p-accordion-header-link {
                    background: #ffffff;
                    border-color: #e5e9f0;
                    color: #4c566a;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    border-color: #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-accordion .p-accordion-content {
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
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
                    background: #ffffff;
                    color: #4c566a;
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 1px 3px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
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
                    font-weight: 400;
                    margin-bottom: 0.5rem;
                    color: #81a1c1;
                }
                .p-card .p-card-content {
                    padding: 1rem 0;
                }
                .p-card .p-card-footer {
                    padding: 1rem 0 0 0;
                }

                .p-fieldset {
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    border-radius: 4px;
                }
                .p-fieldset .p-fieldset-legend {
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                    border-radius: 4px;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
                    padding: 0;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
                    padding: 1rem;
                    color: #4c566a;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                    background: #ffffff;
                    border-color: #e5e9f0;
                    color: #4c566a;
                }
                .p-fieldset .p-fieldset-content {
                    padding: 1rem;
                }

                .p-divider .p-divider-content {
                    background-color: #ffffff;
                }
                .p-divider.p-divider-horizontal {
                    margin: 1rem 0;
                    padding: 0 1rem;
                }
                .p-divider.p-divider-horizontal:before {
                    border-top: 1px #e5e9f0;
                }
                .p-divider.p-divider-horizontal .p-divider-content {
                    padding: 0 0.5rem;
                }
                .p-divider.p-divider-vertical {
                    margin: 0 1rem;
                    padding: 1rem 0;
                }
                .p-divider.p-divider-vertical:before {
                    border-left: 1px #e5e9f0;
                }
                .p-divider.p-divider-vertical .p-divider-content {
                    padding: 0.5rem 0;
                }

                .p-panel .p-panel-header {
                    border: 1px solid #e5e9f0;
                    padding: 1rem;
                    background: #ffffff;
                    color: #4c566a;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-panel .p-panel-header .p-panel-title {
                    font-weight: 600;
                }
                .p-panel .p-panel-header .p-panel-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-panel .p-panel-header .p-panel-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-panel.p-panel-toggleable .p-panel-header {
                    padding: 0.5rem 1rem;
                }
                .p-panel .p-panel-content {
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                    border-top: 0 none;
                }
                .p-panel .p-panel-footer {
                    padding: 0.5rem 1rem;
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    border-top: 0 none;
                }

                .p-splitter {
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    border-radius: 4px;
                    color: #4c566a;
                }
                .p-splitter .p-splitter-gutter {
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    background: #eceff4;
                }
                .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
                    background: #c2c7d1;
                }
                .p-splitter .p-splitter-gutter-resizing {
                    background: #c2c7d1;
                }

                .p-scrollpanel .p-scrollpanel-bar {
                    background: #eceff4;
                    border: 0 none;
                }

                .p-tabview .p-tabview-nav {
                    background: #ffffff;
                    border: 2px solid #e5e9f0;
                    border-width: 0 0 2px 0;
                }
                .p-tabview .p-tabview-nav li {
                    margin-right: 0;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    border: solid #e5e9f0;
                    border-width: 0 0 2px 0;
                    border-color: transparent transparent #e5e9f0 transparent;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 1rem;
                    font-weight: 600;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    transition: none;
                    margin: 0 0 -2px 0;
                }
                .p-tabview
                    .p-tabview-nav
                    li
                    .p-tabview-nav-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.2rem #c0d0e0;
                }
                .p-tabview
                    .p-tabview-nav
                    li:not(.p-highlight):not(.p-disabled):hover
                    .p-tabview-nav-link {
                    background: #ffffff;
                    border-color: #81a1c1;
                    color: #4c566a;
                }
                .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                    background: #ffffff;
                    border-color: #5e81ac;
                    color: #4c566a;
                }
                .p-tabview .p-tabview-close {
                    margin-left: 0.5rem;
                }
                .p-tabview .p-tabview-nav-btn.p-link {
                    background: #ffffff;
                    color: #4c566a;
                    width: 2.357rem;
                    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.2),
                        0 12px 10px 0 rgba(0, 0, 0, 0.06);
                    border-radius: 0;
                }
                .p-tabview .p-tabview-nav-btn.p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.2rem #c0d0e0;
                }
                .p-tabview .p-tabview-panels {
                    background: #ffffff;
                    padding: 1rem;
                    border: 0 none;
                    color: #4c566a;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-toolbar {
                    background: #ffffff;
                    border: 1px solid #e5e9f0;
                    padding: 1rem;
                    border-radius: 4px;
                    gap: 0.5rem;
                }
                .p-toolbar .p-toolbar-separator {
                    margin: 0 0.5rem;
                }

                .p-confirm-popup {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
                }
                .p-confirm-popup .p-confirm-popup-content {
                    padding: 1rem;
                }
                .p-confirm-popup .p-confirm-popup-footer {
                    text-align: right;
                    padding: 0 1rem 1rem 1rem;
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
                    border-color: rgba(255, 255, 255, 0);
                    border-bottom-color: #ffffff;
                }
                .p-confirm-popup:before {
                    border: solid transparent;
                    border-color: rgba(255, 255, 255, 0);
                    border-bottom-color: #ffffff;
                }
                .p-confirm-popup.p-confirm-popup-flipped:after {
                    border-top-color: #ffffff;
                }
                .p-confirm-popup.p-confirm-popup-flipped:before {
                    border-top-color: #ffffff;
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
                    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
                    border: 0 none;
                }
                .p-dialog .p-dialog-header {
                    border-bottom: 0 none;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 1.5rem;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-dialog .p-dialog-header .p-dialog-title {
                    font-weight: 600;
                    font-size: 1.25rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-right: 0.5rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
                    margin-right: 0;
                }
                .p-dialog .p-dialog-content {
                    background: #ffffff;
                    color: #4c566a;
                    padding: 0 1.5rem 2rem 1.5rem;
                }
                .p-dialog .p-dialog-content:last-of-type {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-dialog .p-dialog-footer {
                    border-top: 0 none;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 0 1.5rem 1.5rem 1.5rem;
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
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    border-radius: 4px;
                    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
                }
                .p-overlaypanel .p-overlaypanel-content {
                    padding: 1rem;
                }
                .p-overlaypanel .p-overlaypanel-close {
                    background: #5e81ac;
                    color: #ffffff;
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
                    background: #81a1c1;
                    color: #ffffff;
                }
                .p-overlaypanel:after {
                    border: solid transparent;
                    border-color: rgba(255, 255, 255, 0);
                    border-bottom-color: #ffffff;
                }
                .p-overlaypanel:before {
                    border: solid transparent;
                    border-color: rgba(255, 255, 255, 0);
                    border-bottom-color: #f2f2f2;
                }
                .p-overlaypanel.p-overlaypanel-flipped:after {
                    border-top-color: #ffffff;
                }
                .p-overlaypanel.p-overlaypanel-flipped:before {
                    border-top-color: #ffffff;
                }

                .p-sidebar {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0px 9px 46px 8px rgba(0, 0, 0, 0.12);
                }
                .p-sidebar .p-sidebar-header {
                    padding: 1rem;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close,
                .p-sidebar .p-sidebar-header .p-sidebar-icon {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border: 2px solid transparent;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
                    color: #4c566a;
                    border-color: #5e81ac;
                    background: #ffffff;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-sidebar .p-sidebar-header + .p-sidebar-content {
                    padding-top: 0;
                }
                .p-sidebar .p-sidebar-content {
                    padding: 1rem;
                }

                .p-tooltip .p-tooltip-text {
                    background: #4c566a;
                    color: #ffffff;
                    padding: 0.5rem 0.5rem;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-tooltip.p-tooltip-right .p-tooltip-arrow {
                    border-right-color: #4c566a;
                }
                .p-tooltip.p-tooltip-left .p-tooltip-arrow {
                    border-left-color: #4c566a;
                }
                .p-tooltip.p-tooltip-top .p-tooltip-arrow {
                    border-top-color: #4c566a;
                }
                .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
                    border-bottom-color: #4c566a;
                }

                .p-fileupload .p-fileupload-buttonbar {
                    background: #ffffff;
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    gap: 0.5rem;
                }
                .p-fileupload .p-fileupload-buttonbar .p-button {
                    margin-right: 0.5rem;
                }
                .p-fileupload .p-fileupload-content {
                    background: #ffffff;
                    padding: 2rem 1rem;
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-fileupload .p-progressbar {
                    height: 0.25rem;
                }
                .p-fileupload .p-fileupload-row > div {
                    padding: 1rem 1rem;
                }
                .p-fileupload.p-fileupload-advanced .p-message {
                    margin-top: 0;
                }

                .p-breadcrumb {
                    background: #ffffff;
                    border: 1px solid #e5e9f0;
                    border-radius: 4px;
                    padding: 1rem;
                }
                .p-breadcrumb ul li .p-menuitem-link {
                    transition: none;
                    border-radius: 4px;
                }
                .p-breadcrumb ul li .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-breadcrumb ul li.p-breadcrumb-chevron {
                    margin: 0 0.5rem 0 0.5rem;
                    color: #4c566a;
                }
                .p-breadcrumb ul li:last-child .p-menuitem-text {
                    color: #4c566a;
                }
                .p-breadcrumb ul li:last-child .p-menuitem-icon {
                    color: #81a1c1;
                }

                .p-contextmenu {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-contextmenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-contextmenu .p-menuitem-link .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-contextmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-contextmenu .p-submenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link {
                    background: #ffffff;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-contextmenu .p-menu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
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
                    background: #eceff4;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    border-radius: 4px;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 4px;
                    transition: none;
                    user-select: none;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                    margin-left: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
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
                    color: #4c566a;
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
                    color: #81a1c1;
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
                    color: #81a1c1;
                }
                .p-megamenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-megamenu .p-menuitem-link .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-megamenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-megamenu .p-megamenu-panel {
                    background: #ffffff;
                    color: #4c566a;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-megamenu .p-megamenu-submenu-header {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-megamenu .p-megamenu-submenu {
                    padding: 0.25rem 0;
                    width: 12.5rem;
                }
                .p-megamenu .p-megamenu-submenu .p-menu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
                }
                .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #ffffff;
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-megamenu.p-megamenu-vertical {
                    width: 12.5rem;
                    padding: 0.25rem 0;
                }
                .p-megamenu .p-megamenu-button {
                    width: 2rem;
                    height: 2rem;
                    color: #81a1c1;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-megamenu .p-megamenu-button:hover {
                    color: #81a1c1;
                    background: #ffffff;
                }
                .p-megamenu .p-megamenu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-megamenu .p-submenu-icon {
                    transition: transform 0.2s;
                }
                .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-menu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
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
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
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
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-menu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-menu .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menu .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-menu .p-menuitem-link .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-menu .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-menu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-menu.p-menu-overlay {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-menu .p-submenu-header {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }
                .p-menu .p-menu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
                }

                .p-menubar {
                    padding: 0.5rem;
                    background: #eceff4;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    border-radius: 4px;
                }
                .p-menubar .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-menubar .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menubar .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-menubar .p-menuitem-link .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-menubar .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-menubar .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 4px;
                    transition: none;
                    user-select: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                    margin-left: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
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
                    color: #4c566a;
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
                    color: #81a1c1;
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
                    color: #81a1c1;
                }
                .p-menubar .p-submenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    width: 12.5rem;
                }
                .p-menubar .p-submenu-list .p-menu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
                }
                .p-menubar .p-submenu-list .p-submenu-icon {
                    font-size: 0.875rem;
                }
                .p-menubar .p-submenu-list .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #ffffff;
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                }

                @media screen and (max-width: 960px) {
                    .p-menubar {
                        position: relative;
                    }
                    .p-menubar .p-menubar-button {
                        display: flex;
                        width: 2rem;
                        height: 2rem;
                        color: #81a1c1;
                        border-radius: 50%;
                        transition: background-color 0.2s, color 0.2s,
                            box-shadow 0.2s;
                    }
                    .p-menubar .p-menubar-button:hover {
                        color: #81a1c1;
                        background: #ffffff;
                    }
                    .p-menubar .p-menubar-button:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: 0 0 0 0.2rem #c0d0e0;
                    }
                    .p-menubar .p-menubar-root-list {
                        position: absolute;
                        display: none;
                        padding: 0.25rem 0;
                        background: #ffffff;
                        border: 0 none;
                        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                            0 4px 5px 0 rgba(0, 0, 0, 0.14),
                            0 1px 10px 0 rgba(0, 0, 0, 0.12);
                        width: 100%;
                    }
                    .p-menubar .p-menubar-root-list .p-menu-separator {
                        border-top: 1px solid #e5e9f0;
                        margin: 0.25rem 0;
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
                        padding: 0.75rem 1rem;
                        color: #4c566a;
                        border-radius: 0;
                        transition: none;
                        user-select: none;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-text {
                        color: #4c566a;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-icon {
                        color: #81a1c1;
                        margin-right: 0.5rem;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-submenu-icon {
                        color: #81a1c1;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover {
                        background: #ffffff;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-text {
                        color: #4c566a;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-icon {
                        color: #81a1c1;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-submenu-icon {
                        color: #81a1c1;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: inset 0 0 0 0.15rem #c0d0e0;
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
                    padding: 1rem;
                    border: 1px solid #e5e9f0;
                    color: #4c566a;
                    background: #ffffff;
                    font-weight: 600;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-panelmenu
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
                    > a:hover {
                    background: #ffffff;
                    border-color: #e5e9f0;
                    color: #4c566a;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight {
                    margin-bottom: 0;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight > a {
                    background: #ffffff;
                    border-color: #e5e9f0;
                    color: #4c566a;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-panelmenu
                    .p-panelmenu-header.p-highlight:not(.p-disabled)
                    > a:hover {
                    border-color: #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-panelmenu .p-panelmenu-content {
                    padding: 0.25rem 0;
                    border: 1px solid #e5e9f0;
                    background: #ffffff;
                    color: #4c566a;
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
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
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-slidemenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-slidemenu .p-menuitem-link .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-slidemenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-slidemenu.p-slidemenu-overlay {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-slidemenu .p-slidemenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link {
                    background: #ffffff;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-text {
                    color: #4c566a;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon,
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon {
                    color: #81a1c1;
                }
                .p-slidemenu .p-slidemenu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
                }
                .p-slidemenu .p-slidemenu-icon {
                    font-size: 0.875rem;
                }
                .p-slidemenu .p-slidemenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }
                .p-slidemenu .p-slidemenu-backward {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                }

                .p-steps .p-steps-item .p-menuitem-link {
                    background: transparent;
                    transition: none;
                    border-radius: 4px;
                    background: #ffffff;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                    color: #4c566a;
                    border: 1px solid #ffffff;
                    background: #ffffff;
                    min-width: 2rem;
                    height: 2rem;
                    line-height: 2rem;
                    font-size: 1.143rem;
                    z-index: 1;
                    border-radius: 50%;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
                    margin-top: 0.5rem;
                    color: #81a1c1;
                }
                .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-number {
                    background: #d8dee9;
                    color: #2e3440;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-title {
                    font-weight: 600;
                    color: #4c566a;
                }
                .p-steps .p-steps-item:before {
                    content: ' ';
                    border-top: 1px solid #e5e9f0;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    display: block;
                    position: absolute;
                    margin-top: -1rem;
                }

                .p-tabmenu .p-tabmenu-nav {
                    background: #ffffff;
                    border: 2px solid #e5e9f0;
                    border-width: 0 0 2px 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
                    margin-right: 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
                    border: solid #e5e9f0;
                    border-width: 0 0 2px 0;
                    border-color: transparent transparent #e5e9f0 transparent;
                    background: #ffffff;
                    color: #4c566a;
                    padding: 1rem;
                    font-weight: 600;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    transition: none;
                    margin: 0 0 -2px 0;
                    height: calc(100% + 2px);
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
                    box-shadow: inset 0 0 0 0.2rem #c0d0e0;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
                    .p-menuitem-link {
                    background: #ffffff;
                    border-color: #81a1c1;
                    color: #4c566a;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem.p-highlight
                    .p-menuitem-link {
                    background: #ffffff;
                    border-color: #5e81ac;
                    color: #4c566a;
                }

                .p-tieredmenu {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-tieredmenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: #4c566a;
                    border-radius: 0;
                    transition: none;
                    user-select: none;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-text {
                    color: #4c566a;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
                    color: #81a1c1;
                    margin-right: 0.5rem;
                }
                .p-tieredmenu .p-menuitem-link .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #ffffff;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #81a1c1;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-tieredmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #c0d0e0;
                }
                .p-tieredmenu.p-tieredmenu-overlay {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-tieredmenu .p-submenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                }
                .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #ffffff;
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #4c566a;
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #81a1c1;
                }
                .p-tieredmenu .p-menu-separator {
                    border-top: 1px solid #e5e9f0;
                    margin: 0.25rem 0;
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
                    padding: 0.5rem 0.5rem;
                    margin: 0;
                    border-radius: 4px;
                }
                .p-inline-message.p-inline-message-info {
                    background: #b8d9e3;
                    border: solid #2e4f5d;
                    border-width: 0px;
                    color: #2e4f5d;
                }
                .p-inline-message.p-inline-message-info .p-inline-message-icon {
                    color: #17282e;
                }
                .p-inline-message.p-inline-message-success {
                    background: #c8d8ba;
                    border: solid #3f5332;
                    border-width: 0px;
                    color: #202919;
                }
                .p-inline-message.p-inline-message-success
                    .p-inline-message-icon {
                    color: #202919;
                }
                .p-inline-message.p-inline-message-warn {
                    background: #f1d6ca;
                    border: solid #783b28;
                    border-width: 0px;
                    color: #3c1d14;
                }
                .p-inline-message.p-inline-message-warn .p-inline-message-icon {
                    color: #3c1d14;
                }
                .p-inline-message.p-inline-message-error {
                    background: #e8b8b8;
                    border: solid #662a2f;
                    border-width: 0px;
                    color: #331518;
                }
                .p-inline-message.p-inline-message-error
                    .p-inline-message-icon {
                    color: #331518;
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
                    border-radius: 4px;
                }
                .p-message .p-message-wrapper {
                    padding: 1rem 1.5rem;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-message.p-message-info {
                    background: #b8d9e3;
                    border: solid #2e4f5d;
                    border-width: 0 0 0 6px;
                    color: #2e4f5d;
                }
                .p-message.p-message-info .p-message-icon {
                    color: #17282e;
                }
                .p-message.p-message-info .p-message-close {
                    color: #17282e;
                }
                .p-message.p-message-success {
                    background: #c8d8ba;
                    border: solid #3f5332;
                    border-width: 0 0 0 6px;
                    color: #202919;
                }
                .p-message.p-message-success .p-message-icon {
                    color: #202919;
                }
                .p-message.p-message-success .p-message-close {
                    color: #202919;
                }
                .p-message.p-message-warn {
                    background: #f1d6ca;
                    border: solid #783b28;
                    border-width: 0 0 0 6px;
                    color: #3c1d14;
                }
                .p-message.p-message-warn .p-message-icon {
                    color: #3c1d14;
                }
                .p-message.p-message-warn .p-message-close {
                    color: #3c1d14;
                }
                .p-message.p-message-error {
                    background: #e8b8b8;
                    border: solid #662a2f;
                    border-width: 0 0 0 6px;
                    color: #331518;
                }
                .p-message.p-message-error .p-message-icon {
                    color: #331518;
                }
                .p-message.p-message-error .p-message-close {
                    color: #331518;
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
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-toast .p-toast-message .p-toast-message-content {
                    padding: 1rem;
                    border-width: 0 0 0 6px;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }
                .p-toast .p-toast-message.p-toast-message-info {
                    background: #b8d9e3;
                    border: solid #2e4f5d;
                    border-width: 0 0 0 6px;
                    color: #2e4f5d;
                }
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-icon-close {
                    color: #17282e;
                }
                .p-toast .p-toast-message.p-toast-message-success {
                    background: #c8d8ba;
                    border: solid #3f5332;
                    border-width: 0 0 0 6px;
                    color: #202919;
                }
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-icon-close {
                    color: #202919;
                }
                .p-toast .p-toast-message.p-toast-message-warn {
                    background: #f1d6ca;
                    border: solid #783b28;
                    border-width: 0 0 0 6px;
                    color: #3c1d14;
                }
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-icon-close {
                    color: #3c1d14;
                }
                .p-toast .p-toast-message.p-toast-message-error {
                    background: #e8b8b8;
                    border: solid #662a2f;
                    border-width: 0 0 0 6px;
                    color: #331518;
                }
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-icon-close {
                    color: #331518;
                }

                .p-galleria .p-galleria-close {
                    margin: 0.5rem;
                    background: transparent;
                    color: #eceff4;
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
                    color: #eceff4;
                }
                .p-galleria .p-galleria-item-nav {
                    background: transparent;
                    color: #eceff4;
                    width: 4rem;
                    height: 4rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 4px;
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
                    color: #eceff4;
                }
                .p-galleria .p-galleria-caption {
                    background: rgba(0, 0, 0, 0.5);
                    color: #eceff4;
                    padding: 1rem;
                }
                .p-galleria .p-galleria-indicators {
                    padding: 1rem;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button {
                    background-color: #d8dee9;
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
                    background: #81a1c1;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #d8dee9;
                    color: #2e3440;
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
                    background: #d8dee9;
                    color: #2e3440;
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
                    color: #eceff4;
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
                    color: #eceff4;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
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
                    background-color: #e5e9f0;
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
                    border: 2px solid #ffffff;
                }

                .p-chip {
                    background-color: #e5e9f0;
                    color: #4c566a;
                    border-radius: 16px;
                    padding: 0 0.5rem;
                }
                .p-chip .p-chip-text {
                    line-height: 1.5;
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                }
                .p-chip .p-chip-icon {
                    margin-right: 0.5rem;
                }
                .p-chip img {
                    width: 2rem;
                    height: 2rem;
                    margin-left: -0.5rem;
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
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }

                .p-scrolltop {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0 4px 5px 0 rgba(0, 0, 0, 0.14),
                        0 1px 10px 0 rgba(0, 0, 0, 0.12);
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-scrolltop.p-link {
                    background: rgba(0, 0, 0, 0.7);
                }
                .p-scrolltop.p-link:hover {
                    background: rgba(0, 0, 0, 0.8);
                }
                .p-scrolltop .p-scrolltop-icon {
                    font-size: 1.5rem;
                    color: #eceff4;
                }
                .p-scrolltop .p-scrolltop-icon.p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-skeleton {
                    background-color: #e5e9f0;
                    border-radius: 4px;
                }
                .p-skeleton:after {
                    background: linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0),
                        rgba(255, 255, 255, 0.4),
                        rgba(255, 255, 255, 0)
                    );
                }

                .p-tag {
                    background: #5e81ac;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 4px;
                }
                .p-tag.p-tag-success {
                    background-color: #7fa366;
                    color: #ffffff;
                }
                .p-tag.p-tag-info {
                    background-color: #639bb2;
                    color: #ffffff;
                }
                .p-tag.p-tag-warning {
                    background-color: #d08770;
                    color: #ffffff;
                }
                .p-tag.p-tag-danger {
                    background-color: #bf616a;
                    color: #ffffff;
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
                    padding: 0.5rem 0.5rem;
                    border-radius: 4px;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-inplace .p-inplace-display:not(.p-disabled):hover {
                    background: #ffffff;
                    color: #4c566a;
                }
                .p-inplace .p-inplace-display:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #c0d0e0;
                }

                .p-progressbar {
                    border: 0 none;
                    height: 1.5rem;
                    background: #e5e9f0;
                    border-radius: 4px;
                }
                .p-progressbar .p-progressbar-value {
                    border: 0 none;
                    margin: 0;
                    background: #5e81ac;
                }
                .p-progressbar .p-progressbar-label {
                    color: #ffffff;
                    line-height: 1.5rem;
                }

                .p-terminal {
                    background: #ffffff;
                    color: #4c566a;
                    border: 1px solid #e5e9f0;
                    padding: 1rem;
                }
                .p-terminal .p-terminal-input {
                    font-size: 1rem;
                    font-family: 'Inter', sans-serif;
                }

                .p-badge {
                    background: #5e81ac;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    min-width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                .p-badge.p-badge-secondary {
                    background-color: #4c566a;
                    color: #ffffff;
                }
                .p-badge.p-badge-success {
                    background-color: #7fa366;
                    color: #ffffff;
                }
                .p-badge.p-badge-info {
                    background-color: #639bb2;
                    color: #ffffff;
                }
                .p-badge.p-badge-warning {
                    background-color: #d08770;
                    color: #ffffff;
                }
                .p-badge.p-badge-danger {
                    background-color: #bf616a;
                    color: #ffffff;
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
                    background: #5e81ac;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 4px;
                }
                .p-tag.p-tag-success {
                    background-color: #7fa366;
                    color: #ffffff;
                }
                .p-tag.p-tag-info {
                    background-color: #639bb2;
                    color: #ffffff;
                }
                .p-tag.p-tag-warning {
                    background-color: #d08770;
                    color: #ffffff;
                }
                .p-tag.p-tag-danger {
                    background-color: #bf616a;
                    color: #ffffff;
                }

                /* Customizations to the designer theme should be defined here */
                .p-inputtext:enabled:hover {
                    background-color: #eceff4;
                }
                .p-inputtext:enabled:focus {
                    background-color: #ffffff;
                }

                .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                    background-color: #eceff4;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-autocomplete
                    .p-autocomplete-panel
                    .p-autocomplete-item:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-autocomplete.p-autocomplete-multiple
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    background-color: #eceff4;
                }

                .p-dropdown:not(.p-disabled):hover {
                    background-color: #eceff4;
                }

                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-listbox:not(.p-disabled)
                    .p-listbox-item:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-multiselect:not(.p-disabled):hover {
                    background-color: #eceff4;
                }

                .p-button {
                    font-weight: 500;
                }

                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background-color: #d8dee9;
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    border-color: transparent;
                }

                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                    background-color: #d8dee9;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                    border-color: transparent;
                }

                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(
                        .p-disabled
                    ):hover:not(.p-disabled)
                    .p-accordion-header-link:focus {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-datepicker table td > span.p-highlight {
                    color: #ffffff;
                    background: #5e81ac;
                }
                .p-datepicker table td > span.p-highlight:hover {
                    background-color: #81a1c1;
                    border: 2px solid #5e81ac;
                }
                .p-datepicker table td.p-datepicker-today > span.p-highlight {
                    color: #ffffff;
                    background: #5e81ac;
                }

                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-menubar .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-menu .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-paginator
                    .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
                .p-paginator
                    .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
                    border: 1px solid #5e81ac;
                }
                .p-paginator
                    .p-paginator-pages
                    .p-paginator-page:not(.p-highlight):hover {
                    border: 1px solid #5e81ac;
                }

                .p-datatable .p-sortable-column:not(.p-highlight):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-datatable .p-sortable-column.p-highlight {
                    background-color: #d8dee9;
                }
                .p-datatable .p-sortable-column.p-highlight:hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-datatable.p-datatable-hoverable-rows
                    .p-datatable-tbody
                    > tr:not(.p-highlight):hover {
                    outline: 1px solid #81a1c1;
                }

                .p-overlaypanel .p-overlaypanel-close:enabled:hover {
                    background: #81a1c1;
                    color: #ffffff;
                    border: 2px solid #51749e;
                }

                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:not(.p-highlight):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-tree.p-tree-horizontal
                    .p-treenode
                    .p-treenode-content.p-treenode-selectable:not(
                        .p-highlight
                    ):hover {
                    background: #ffffff;
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-treetable .p-sortable-column:not(.p-highlight):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-treetable .p-sortable-column.p-highlight {
                    background-color: #d8dee9;
                }
                .p-treetable .p-sortable-column.p-highlight:hover {
                    background-color: #ffffff;
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-treetable .p-sortable-column:focus {
                    box-shadow: inset 0 0 0 0.2rem #c0d0e0;
                    outline: 0 none;
                }
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover {
                    outline: 1px solid #81a1c1;
                }

                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-panelmenu
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
                    > a:hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-panelmenu
                    .p-panelmenu-header.p-highlight:not(.p-disabled)
                    > a:hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
                    box-shadow: inset 0 0 0 0.1rem #81a1c1;
                }

                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: #5e81ac;
                    color: #ffffff;
                }

                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #5e81ac;
                    color: #ffffff;
                }

                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #5e81ac;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #5e81ac;
                }
            `}
        </style>
    )
}

// EOF