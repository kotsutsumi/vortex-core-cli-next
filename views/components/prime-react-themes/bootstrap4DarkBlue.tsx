// bootstrap4DarkBlue.tsx

export default function bootstrap4DarkBlue() {
    // -------------------------------------------------------------

    return (
        <style jsx global>
            {`
                :root {
                    --surface-a: #2a323d;
                    --surface-b: #20262e;
                    --surface-c: rgba(255, 255, 255, 0.04);
                    --surface-d: #3f4b5b;
                    --surface-e: #2a323d;
                    --surface-f: #2a323d;
                    --text-color: rgba(255, 255, 255, 0.87);
                    --text-color-secondary: rgba(255, 255, 255, 0.6);
                    --primary-color: #8dd0ff;
                    --primary-color-text: #151515;
                    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
                        Segoe UI Emoji, Segoe UI Symbol;
                    --surface-0: #20262e;
                    --surface-50: #363c43;
                    --surface-100: #4d5158;
                    --surface-200: #63676d;
                    --surface-300: #797d82;
                    --surface-400: #909397;
                    --surface-500: #a6a8ab;
                    --surface-600: #bcbec0;
                    --surface-700: #d2d4d5;
                    --surface-800: #e9e9ea;
                    --surface-900: #ffffff;
                    --gray-50: #e9e9ea;
                    --gray-100: #d2d4d5;
                    --gray-200: #bcbec0;
                    --gray-300: #a6a8ab;
                    --gray-400: #909397;
                    --gray-500: #797d82;
                    --gray-600: #63676d;
                    --gray-700: #4d5158;
                    --gray-800: #363c43;
                    --gray-900: #20262e;
                    --content-padding: 1.25rem;
                    --inline-spacing: 0.5rem;
                    --border-radius: 4px;
                    --surface-ground: #20262e;
                    --surface-section: #20262e;
                    --surface-card: #2a323d;
                    --surface-overlay: #2a323d;
                    --surface-border: #3f4b5b;
                    --surface-hover: rgba(255, 255, 255, 0.04);
                    --focus-ring: 0 0 0 1px #e3f3fe;
                    --maskbg: rgba(0, 0, 0, 0.4);
                    --highlight-bg: #8dd0ff;
                    --highlight-text-color: #151515;
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
                    transition-duration: 0.15s;
                }

                .p-disabled,
                .p-component:disabled {
                    opacity: 0.65;
                }

                .p-error {
                    color: #f19ea6;
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    border-radius: 4px;
                }
                .p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    --blue-50: #f3f8ff;
                    --blue-100: #c5dcff;
                    --blue-200: #97c1fe;
                    --blue-300: #69a5fe;
                    --blue-400: #3b8afd;
                    --blue-500: #0d6efd;
                    --blue-600: #0b5ed7;
                    --blue-700: #094db1;
                    --blue-800: #073d8b;
                    --blue-900: #052c65;
                    --green-50: #f4f9f6;
                    --green-100: #c8e2d6;
                    --green-200: #9ccbb5;
                    --green-300: #70b595;
                    --green-400: #459e74;
                    --green-500: #198754;
                    --green-600: #157347;
                    --green-700: #125f3b;
                    --green-800: #0e4a2e;
                    --green-900: #0a3622;
                    --yellow-50: #fffcf3;
                    --yellow-100: #fff0c3;
                    --yellow-200: #ffe494;
                    --yellow-300: #ffd965;
                    --yellow-400: #ffcd36;
                    --yellow-500: #ffc107;
                    --yellow-600: #d9a406;
                    --yellow-700: #b38705;
                    --yellow-800: #8c6a04;
                    --yellow-900: #664d03;
                    --cyan-50: #f3fcfe;
                    --cyan-100: #c5f2fb;
                    --cyan-200: #97e8f9;
                    --cyan-300: #69def6;
                    --cyan-400: #3bd4f3;
                    --cyan-500: #0dcaf0;
                    --cyan-600: #0baccc;
                    --cyan-700: #098da8;
                    --cyan-800: #076f84;
                    --cyan-900: #055160;
                    --pink-50: #fdf5f9;
                    --pink-100: #f5cee1;
                    --pink-200: #eda7ca;
                    --pink-300: #e681b3;
                    --pink-400: #de5a9b;
                    --pink-500: #d63384;
                    --pink-600: #b62b70;
                    --pink-700: #96245c;
                    --pink-800: #761c49;
                    --pink-900: #561435;
                    --indigo-50: #f7f3fe;
                    --indigo-100: #dac6fc;
                    --indigo-200: #bd98f9;
                    --indigo-300: #a06bf7;
                    --indigo-400: #833df4;
                    --indigo-500: #6610f2;
                    --indigo-600: #570ece;
                    --indigo-700: #470ba9;
                    --indigo-800: #380985;
                    --indigo-900: #290661;
                    --teal-50: #f4fcfa;
                    --teal-100: #c9f2e6;
                    --teal-200: #9fe8d2;
                    --teal-300: #75debf;
                    --teal-400: #4ad3ab;
                    --teal-500: #20c997;
                    --teal-600: #1bab80;
                    --teal-700: #168d6a;
                    --teal-800: #126f53;
                    --teal-900: #0d503c;
                    --orange-50: #fff9f3;
                    --orange-100: #ffe0c7;
                    --orange-200: #fec89a;
                    --orange-300: #feaf6d;
                    --orange-400: #fd9741;
                    --orange-500: #fd7e14;
                    --orange-600: #d76b11;
                    --orange-700: #b1580e;
                    --orange-800: #8b450b;
                    --orange-900: #653208;
                    --bluegray-50: #f8f9fb;
                    --bluegray-100: #e0e4ea;
                    --bluegray-200: #c7ced9;
                    --bluegray-300: #aeb9c8;
                    --bluegray-400: #95a3b8;
                    --bluegray-500: #7c8ea7;
                    --bluegray-600: #69798e;
                    --bluegray-700: #576375;
                    --bluegray-800: #444e5c;
                    --bluegray-900: #323943;
                    --purple-50: #f8f6fc;
                    --purple-100: #dcd2f0;
                    --purple-200: #c1aee4;
                    --purple-300: #a68ad9;
                    --purple-400: #8a66cd;
                    --purple-500: #6f42c1;
                    --purple-600: #5e38a4;
                    --purple-700: #4e2e87;
                    --purple-800: #3d246a;
                    --purple-900: #2c1a4d;
                    --red-50: #fdf5f6;
                    --red-100: #f7cfd2;
                    --red-200: #f0a8af;
                    --red-300: #e9828c;
                    --red-400: #e35b68;
                    --red-500: #dc3545;
                    --red-600: #bb2d3b;
                    --red-700: #9a2530;
                    --red-800: #791d26;
                    --red-900: #58151c;
                    --primary-50: #f9fdff;
                    --primary-100: #e4f4ff;
                    --primary-200: #ceebff;
                    --primary-300: #b8e2ff;
                    --primary-400: #a3d9ff;
                    --primary-500: #8dd0ff;
                    --primary-600: #78b1d9;
                    --primary-700: #6392b3;
                    --primary-800: #4e728c;
                    --primary-900: #385366;
                }

                .p-autocomplete .p-autocomplete-loader {
                    right: 0.75rem;
                }
                .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
                    right: 3.107rem;
                }
                .p-autocomplete .p-autocomplete-multiple-container {
                    padding: 0.25rem 0.75rem;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    border-color: #3f4b5b;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0;
                    margin: 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding: 0.25rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #8dd0ff;
                    color: #151515;
                    border-radius: 4px;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token
                    .p-autocomplete-token-icon {
                    margin-left: 0.5rem;
                }
                .p-autocomplete.p-invalid.p-component > .p-inputtext {
                    border-color: #f19ea6;
                }

                .p-autocomplete-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-autocomplete-panel .p-autocomplete-items {
                    padding: 0.5rem 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item {
                    margin: 0;
                    padding: 0.5rem 1.5rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item:hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item-group {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                }

                .p-calendar.p-invalid.p-component > .p-inputtext {
                    border-color: #f19ea6;
                }

                .p-datepicker {
                    padding: 0;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                }
                .p-datepicker:not(.p-datepicker-inline) {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
                    background: #2a323d;
                }
                .p-datepicker .p-datepicker-header {
                    padding: 0.5rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                    margin: 0;
                    border-bottom: 1px solid #3f4b5b;
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
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-prev:enabled:hover,
                .p-datepicker
                    .p-datepicker-header
                    .p-datepicker-next:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
                .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    transition: color 0.15s, box-shadow 0.15s;
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
                    color: #8dd0ff;
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
                    transition: box-shadow 0.15s;
                    border: 1px solid transparent;
                }
                .p-datepicker table td > span.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-datepicker table td > span:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-datepicker table td.p-datepicker-today > span {
                    background: transparent;
                    color: #8dd0ff;
                    border-color: transparent;
                }
                .p-datepicker table td.p-datepicker-today > span.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-datepicker .p-datepicker-buttonbar {
                    padding: 1rem 0;
                    border-top: 1px solid #3f4b5b;
                }
                .p-datepicker .p-datepicker-buttonbar .p-button {
                    width: auto;
                }
                .p-datepicker .p-timepicker {
                    border-top: 1px solid #3f4b5b;
                    padding: 0.5rem;
                }
                .p-datepicker .p-timepicker button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-datepicker .p-timepicker button:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-datepicker .p-timepicker button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    transition: box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-datepicker .p-yearpicker {
                    margin: 0.5rem 0;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year {
                    padding: 0.5rem;
                    transition: box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
                    border-left: 1px solid #3f4b5b;
                    padding-right: 0;
                    padding-left: 0;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }

                @media screen and (max-width: 769px) {
                    .p-datepicker table th,
                    .p-datepicker table td {
                        padding: 0;
                    }
                }
                .p-cascadeselect {
                    background: #20262e;
                    border: 1px solid #3f4b5b;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-cascadeselect:not(.p-disabled):hover {
                    border-color: #3f4b5b;
                }
                .p-cascadeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-cascadeselect .p-cascadeselect-label {
                    background: transparent;
                    border: 0 none;
                    padding: 0.5rem 0.75rem;
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
                    border-color: #f19ea6;
                }

                .p-cascadeselect-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-cascadeselect-panel .p-cascadeselect-items {
                    padding: 0.5rem 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item {
                    margin: 0;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content {
                    padding: 0.5rem 1.5rem;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
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
                    background: #3f4b5b;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
                    background-color: #3f4b5b;
                }

                .p-checkbox {
                    width: 20px;
                    height: 20px;
                }
                .p-checkbox .p-checkbox-box {
                    border: 1px solid #3f4b5b;
                    background: #20262e;
                    width: 20px;
                    height: 20px;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon {
                    transition-duration: 0.15s;
                    color: #151515;
                    font-size: 14px;
                }
                .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
                    width: 14px;
                    height: 14px;
                }
                .p-checkbox .p-checkbox-box.p-highlight {
                    border-color: #8dd0ff;
                    background: #8dd0ff;
                }
                .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
                    border-color: #1dadff;
                    background: #1dadff;
                    color: #151515;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                    border-color: #3f4b5b;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    border-color: #1dadff;
                    background: #1dadff;
                    color: #151515;
                }
                .p-checkbox.p-invalid > .p-checkbox-box {
                    border-color: #f19ea6;
                }

                .p-input-filled .p-checkbox .p-checkbox-box {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
                    background: #8dd0ff;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box:hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    background: #1dadff;
                }

                .p-highlight .p-checkbox .p-checkbox-box {
                    border-color: #151515;
                }

                .p-chips .p-chips-multiple-container {
                    padding: 0.25rem 0.75rem;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                    border-color: #3f4b5b;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-chips .p-chips-multiple-container .p-chips-token {
                    padding: 0.25rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #3f4b5b;
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
                    padding: 0.25rem 0;
                }
                .p-chips
                    .p-chips-multiple-container
                    .p-chips-input-token
                    input {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0;
                    margin: 0;
                }
                .p-chips.p-invalid.p-component > .p-inputtext {
                    border-color: #f19ea6;
                }

                .p-colorpicker-preview {
                    width: 2rem;
                    height: 2rem;
                }

                .p-colorpicker-panel {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                }
                .p-colorpicker-panel .p-colorpicker-color-handle,
                .p-colorpicker-panel .p-colorpicker-hue-handle {
                    border-color: rgba(255, 255, 255, 0.87);
                }

                .p-colorpicker-overlay-panel {
                    box-shadow: none;
                }

                .p-dropdown {
                    background: #20262e;
                    border: 1px solid #3f4b5b;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-dropdown:not(.p-disabled):hover {
                    border-color: #3f4b5b;
                }
                .p-dropdown:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
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
                    border-color: #f19ea6;
                }

                .p-dropdown-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-dropdown-panel .p-dropdown-header {
                    padding: 0.75rem 1.5rem;
                    border-bottom: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
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
                    padding: 0.5rem 0;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
                    margin: 0;
                    padding: 0.5rem 1.5rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
                    padding: 0.5rem 1.5rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }

                .p-input-filled .p-dropdown {
                    background: #3f4b5b;
                }
                .p-input-filled .p-dropdown:not(.p-disabled):hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
                    background-color: #3f4b5b;
                }
                .p-input-filled
                    .p-dropdown:not(.p-disabled).p-focus
                    .p-inputtext {
                    background-color: transparent;
                }

                .p-editor-container .p-editor-toolbar {
                    background: #2a323d;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-editor-container .p-editor-toolbar.ql-snow {
                    border: 1px solid #3f4b5b;
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
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                    border-radius: 4px;
                    padding: 0.5rem 0;
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
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded:not(.ql-icon-picker)
                    .ql-picker-item {
                    padding: 0.5rem 1.5rem;
                }
                .p-editor-container .p-editor-content {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-editor-container .p-editor-content.ql-snow {
                    border: 1px solid #3f4b5b;
                }
                .p-editor-container .p-editor-content .ql-editor {
                    background: #20262e;
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
                    color: #8dd0ff;
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
                    stroke: #8dd0ff;
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
                    fill: #8dd0ff;
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
                    color: #8dd0ff;
                }

                .p-inputgroup-addon {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    border-top: 1px solid #3f4b5b;
                    border-left: 1px solid #3f4b5b;
                    border-bottom: 1px solid #3f4b5b;
                    padding: 0.5rem 0.75rem;
                    min-width: 2.357rem;
                }
                .p-inputgroup-addon:last-child {
                    border-right: 1px solid #3f4b5b;
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
                    border-color: #f19ea6;
                }

                .p-inputswitch {
                    width: 3rem;
                    height: 1.75rem;
                }
                .p-inputswitch .p-inputswitch-slider {
                    background: #3f4b5b;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-inputswitch .p-inputswitch-slider:before {
                    background: rgba(255, 255, 255, 0.6);
                    width: 1.25rem;
                    height: 1.25rem;
                    left: 0.25rem;
                    margin-top: -0.625rem;
                    border-radius: 4px;
                    transition-duration: 0.15s;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    transform: translateX(1.25rem);
                }
                .p-inputswitch.p-focus .p-inputswitch-slider {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
                    background: #3f4b5b;
                }
                .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
                    background: #8dd0ff;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    background: #151515;
                }
                .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
                    .p-inputswitch-slider {
                    background: #8dd0ff;
                }
                .p-inputswitch.p-invalid .p-inputswitch-slider {
                    border-color: #f19ea6;
                }

                .p-inputtext {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #20262e;
                    padding: 0.5rem 0.75rem;
                    border: 1px solid #3f4b5b;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    appearance: none;
                    border-radius: 4px;
                }
                .p-inputtext:enabled:hover {
                    border-color: #3f4b5b;
                }
                .p-inputtext:enabled:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-inputtext.p-invalid.p-component {
                    border-color: #f19ea6;
                }
                .p-inputtext.p-inputtext-sm {
                    font-size: 0.875rem;
                    padding: 0.4375rem 0.65625rem;
                }
                .p-inputtext.p-inputtext-lg {
                    font-size: 1.25rem;
                    padding: 0.625rem 0.9375rem;
                }

                .p-float-label > label {
                    left: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                    transition-duration: 0.15s;
                }

                .p-float-label > label.p-error {
                    color: #f19ea6;
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
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-inputtext:enabled:hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-inputtext:enabled:focus {
                    background-color: #3f4b5b;
                }

                .p-inputtext-sm .p-inputtext {
                    font-size: 0.875rem;
                    padding: 0.4375rem 0.65625rem;
                }

                .p-inputtext-lg .p-inputtext {
                    font-size: 1.25rem;
                    padding: 0.625rem 0.9375rem;
                }

                .p-listbox {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                }
                .p-listbox .p-listbox-header {
                    padding: 0.75rem 1.5rem;
                    border-bottom: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
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
                    padding: 0.5rem 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item {
                    margin: 0;
                    padding: 0.5rem 1.5rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-listbox .p-listbox-list .p-listbox-item-group {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                }
                .p-listbox .p-listbox-list .p-listbox-empty-message {
                    padding: 0.5rem 1.5rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }
                .p-listbox:not(.p-disabled)
                    .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-listbox.p-invalid {
                    border-color: #f19ea6;
                }

                .p-mention-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-mention-panel .p-mention-items {
                    padding: 0.5rem 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item {
                    margin: 0;
                    padding: 0.5rem 1.5rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item:hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }

                .p-multiselect {
                    background: #20262e;
                    border: 1px solid #3f4b5b;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-multiselect:not(.p-disabled):hover {
                    border-color: #3f4b5b;
                }
                .p-multiselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-multiselect.p-multiselect-clearable .p-multiselect-label {
                    padding-right: 1.75rem;
                }
                .p-multiselect .p-multiselect-label {
                    padding: 0.5rem 0.75rem;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-multiselect .p-multiselect-label.p-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-multiselect.p-multiselect-chip .p-multiselect-token {
                    padding: 0.25rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #3f4b5b;
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
                    border-color: #f19ea6;
                }

                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label {
                    padding: 0.25rem 0.75rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
                    .p-multiselect-label.p-multiselect-items-label {
                    padding: 0.5rem 0.75rem;
                }
                .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable
                    .p-multiselect-label {
                    padding-right: 1.75rem;
                }

                .p-multiselect-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-multiselect-panel .p-multiselect-header {
                    padding: 0.75rem 1.5rem;
                    border-bottom: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
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
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-multiselect-panel .p-multiselect-items {
                    padding: 0.5rem 0;
                }
                .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
                    margin: 0;
                    padding: 0.5rem 1.5rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
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
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-empty-message {
                    padding: 0.5rem 1.5rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }

                .p-input-filled .p-multiselect {
                    background: #3f4b5b;
                }
                .p-input-filled .p-multiselect:not(.p-disabled):hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
                    background-color: #3f4b5b;
                }

                .p-password.p-invalid.p-component > .p-inputtext {
                    border-color: #f19ea6;
                }

                .p-password-panel {
                    padding: 1.25rem;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                    border-radius: 4px;
                }
                .p-password-panel .p-password-meter {
                    margin-bottom: 0.5rem;
                    background: #3f4b5b;
                }
                .p-password-panel .p-password-meter .p-password-strength.weak {
                    background: #f19ea6;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.medium {
                    background: #ffe082;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.strong {
                    background: #9fdaa8;
                }

                .p-radiobutton {
                    width: 20px;
                    height: 20px;
                }
                .p-radiobutton .p-radiobutton-box {
                    border: 1px solid #3f4b5b;
                    background: #20262e;
                    width: 20px;
                    height: 20px;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 50%;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    border-color: #3f4b5b;
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
                    width: 12px;
                    height: 12px;
                    transition-duration: 0.15s;
                    background-color: #151515;
                }
                .p-radiobutton .p-radiobutton-box.p-highlight {
                    border-color: #8dd0ff;
                    background: #8dd0ff;
                }
                .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    border-color: #1dadff;
                    background: #1dadff;
                    color: #151515;
                }
                .p-radiobutton.p-invalid > .p-radiobutton-box {
                    border-color: #f19ea6;
                }
                .p-radiobutton:focus {
                    outline: 0 none;
                }

                .p-input-filled .p-radiobutton .p-radiobutton-box {
                    background-color: #3f4b5b;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
                    background: #8dd0ff;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    background: #1dadff;
                }

                .p-highlight .p-radiobutton .p-radiobutton-box {
                    border-color: #151515;
                }

                .p-rating {
                    gap: 0.5rem;
                }
                .p-rating .p-rating-item .p-rating-icon {
                    color: rgba(255, 255, 255, 0.87);
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    font-size: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-icon {
                    width: 1.143rem;
                    height: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
                    color: #f19ea6;
                }
                .p-rating .p-rating-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
                    color: #8dd0ff;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon {
                    color: #8dd0ff;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon.p-rating-cancel {
                    color: #f19ea6;
                }

                .p-highlight
                    .p-rating
                    .p-rating-item.p-rating-item-active
                    .p-rating-icon {
                    color: #151515;
                }

                .p-selectbutton .p-button {
                    background: #6c757d;
                    border: 1px solid #6c757d;
                    color: #ffffff;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-selectbutton .p-button .p-button-icon-left,
                .p-selectbutton .p-button .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover {
                    background: #5a6268;
                    border-color: #545b62;
                    color: #ffffff;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-left,
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight {
                    background: #545b62;
                    border-color: #4e555b;
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight .p-button-icon-left,
                .p-selectbutton .p-button.p-highlight .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight:hover {
                    background: #545b62;
                    border-color: #4e555b;
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
                .p-selectbutton
                    .p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton.p-invalid > .p-button {
                    border-color: #f19ea6;
                }

                .p-slider {
                    background: #3f4b5b;
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
                    background: #8dd0ff;
                    border: 2px solid #8dd0ff;
                    border-radius: 4px;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-slider .p-slider-handle:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-slider .p-slider-range {
                    background: #8dd0ff;
                }
                .p-slider:not(.p-disabled) .p-slider-handle:hover {
                    background: #56bdff;
                    border-color: #56bdff;
                }

                .p-treeselect {
                    background: #20262e;
                    border: 1px solid #3f4b5b;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-treeselect:not(.p-disabled):hover {
                    border-color: #3f4b5b;
                }
                .p-treeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: #8dd0ff;
                }
                .p-treeselect .p-treeselect-label {
                    padding: 0.5rem 0.75rem;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-treeselect .p-treeselect-label.p-placeholder {
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-treeselect.p-treeselect-chip .p-treeselect-token {
                    padding: 0.25rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #3f4b5b;
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
                    border-color: #f19ea6;
                }

                .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-label {
                    padding: 0.25rem 0.75rem;
                }

                .p-treeselect-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-treeselect-panel .p-treeselect-header {
                    padding: 0.75rem 1.5rem;
                    border-bottom: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
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
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
                    border: 0 none;
                }
                .p-treeselect-panel
                    .p-treeselect-items-wrapper
                    .p-treeselect-empty-message {
                    padding: 0.5rem 1.5rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }

                .p-input-filled .p-treeselect {
                    background: #3f4b5b;
                }
                .p-input-filled .p-treeselect:not(.p-disabled):hover {
                    background-color: #3f4b5b;
                }
                .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
                    background-color: #3f4b5b;
                }

                .p-togglebutton.p-button {
                    background: #6c757d;
                    border: 1px solid #6c757d;
                    color: #ffffff;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-togglebutton.p-button .p-button-icon-left,
                .p-togglebutton.p-button .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #5a6268;
                    border-color: #545b62;
                    color: #ffffff;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-left,
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight {
                    background: #545b62;
                    border-color: #4e555b;
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight:hover {
                    background: #545b62;
                    border-color: #4e555b;
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-invalid > .p-button {
                    border-color: #f19ea6;
                }

                .p-button {
                    color: #151515;
                    background: #8dd0ff;
                    border: 1px solid #8dd0ff;
                    padding: 0.5rem 0.75rem;
                    font-size: 1rem;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-button:enabled:hover,
                .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #56bdff;
                    color: #151515;
                    border-color: #56bdff;
                }
                .p-button:enabled:active,
                .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #1dadff;
                    color: #151515;
                    border-color: #1dadff;
                }
                .p-button.p-button-outlined {
                    background-color: transparent;
                    color: #8dd0ff;
                    border: 1px solid;
                }
                .p-button.p-button-outlined:enabled:hover,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(141, 208, 255, 0.04);
                    color: #8dd0ff;
                    border: 1px solid;
                }
                .p-button.p-button-outlined:enabled:active,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(141, 208, 255, 0.16);
                    color: #8dd0ff;
                    border: 1px solid;
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
                    color: #8dd0ff;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:hover,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(141, 208, 255, 0.04);
                    color: #8dd0ff;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:active,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(141, 208, 255, 0.16);
                    color: #8dd0ff;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-button .p-button-label {
                    transition-duration: 0.15s;
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
                    color: #8dd0ff;
                    background-color: #151515;
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
                    padding: 0.4375rem 0.65625rem;
                }
                .p-button.p-button-sm .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-button.p-button-lg {
                    font-size: 1.25rem;
                    padding: 0.625rem 0.9375rem;
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
                    background: #6c757d;
                    border: 1px solid #6c757d;
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
                    background: #5a6268;
                    color: #ffffff;
                    border-color: #5a6268;
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
                    box-shadow: 0 0 0 1px rgba(130, 138, 145, 0.5);
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
                    background: #545b62;
                    color: #ffffff;
                    border-color: #4e555b;
                }
                .p-button.p-button-secondary.p-button-outlined,
                .p-buttonset.p-button-secondary > .p-button.p-button-outlined,
                .p-splitbutton.p-button-secondary > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-secondary.p-button-outlined {
                    background-color: transparent;
                    color: #6c757d;
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
                    background: rgba(108, 117, 125, 0.04);
                    color: #6c757d;
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
                    background: rgba(108, 117, 125, 0.16);
                    color: #6c757d;
                    border: 1px solid;
                }
                .p-button.p-button-secondary.p-button-text,
                .p-buttonset.p-button-secondary > .p-button.p-button-text,
                .p-splitbutton.p-button-secondary > .p-button.p-button-text,
                .p-fileupload-choose.p-button-secondary.p-button-text {
                    background-color: transparent;
                    color: #6c757d;
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
                    background: rgba(108, 117, 125, 0.04);
                    border-color: transparent;
                    color: #6c757d;
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
                    background: rgba(108, 117, 125, 0.16);
                    border-color: transparent;
                    color: #6c757d;
                }

                .p-button.p-button-info,
                .p-buttonset.p-button-info > .p-button,
                .p-splitbutton.p-button-info > .p-button,
                .p-fileupload-choose.p-button-info {
                    color: #151515;
                    background: #7fd8e6;
                    border: 1px solid #4cc8db;
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
                    background: #4cc8db;
                    color: #151515;
                    border-color: #26bdd3;
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
                    box-shadow: 0 0 0 1px #b1e8f0;
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
                    background: #26bdd3;
                    color: #151515;
                    border-color: #00b2cc;
                }
                .p-button.p-button-info.p-button-outlined,
                .p-buttonset.p-button-info > .p-button.p-button-outlined,
                .p-splitbutton.p-button-info > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-info.p-button-outlined {
                    background-color: transparent;
                    color: #7fd8e6;
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
                    background: rgba(127, 216, 230, 0.04);
                    color: #7fd8e6;
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
                    background: rgba(127, 216, 230, 0.16);
                    color: #7fd8e6;
                    border: 1px solid;
                }
                .p-button.p-button-info.p-button-text,
                .p-buttonset.p-button-info > .p-button.p-button-text,
                .p-splitbutton.p-button-info > .p-button.p-button-text,
                .p-fileupload-choose.p-button-info.p-button-text {
                    background-color: transparent;
                    color: #7fd8e6;
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
                    background: rgba(127, 216, 230, 0.04);
                    border-color: transparent;
                    color: #7fd8e6;
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
                    background: rgba(127, 216, 230, 0.16);
                    border-color: transparent;
                    color: #7fd8e6;
                }

                .p-button.p-button-success,
                .p-buttonset.p-button-success > .p-button,
                .p-splitbutton.p-button-success > .p-button,
                .p-fileupload-choose.p-button-success {
                    color: #151515;
                    background: #9fdaa8;
                    border: 1px solid #78cc86;
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
                    background: #78cc86;
                    color: #151515;
                    border-color: #5ac06c;
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
                    box-shadow: 0 0 0 1px #c5e8ca;
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
                    background: #5ac06c;
                    color: #151515;
                    border-color: #3cb553;
                }
                .p-button.p-button-success.p-button-outlined,
                .p-buttonset.p-button-success > .p-button.p-button-outlined,
                .p-splitbutton.p-button-success > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-success.p-button-outlined {
                    background-color: transparent;
                    color: #9fdaa8;
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
                    background: rgba(159, 218, 168, 0.04);
                    color: #9fdaa8;
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
                    background: rgba(159, 218, 168, 0.16);
                    color: #9fdaa8;
                    border: 1px solid;
                }
                .p-button.p-button-success.p-button-text,
                .p-buttonset.p-button-success > .p-button.p-button-text,
                .p-splitbutton.p-button-success > .p-button.p-button-text,
                .p-fileupload-choose.p-button-success.p-button-text {
                    background-color: transparent;
                    color: #9fdaa8;
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
                    background: rgba(159, 218, 168, 0.04);
                    border-color: transparent;
                    color: #9fdaa8;
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
                    background: rgba(159, 218, 168, 0.16);
                    border-color: transparent;
                    color: #9fdaa8;
                }

                .p-button.p-button-warning,
                .p-buttonset.p-button-warning > .p-button,
                .p-splitbutton.p-button-warning > .p-button,
                .p-fileupload-choose.p-button-warning {
                    color: #151515;
                    background: #ffe082;
                    border: 1px solid #ffd54f;
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
                    background: #ffd54f;
                    color: #151515;
                    border-color: #ffca28;
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
                    box-shadow: 0 0 0 1px #ffecb3;
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
                    background: #ffca28;
                    color: #151515;
                    border-color: #ffc107;
                }
                .p-button.p-button-warning.p-button-outlined,
                .p-buttonset.p-button-warning > .p-button.p-button-outlined,
                .p-splitbutton.p-button-warning > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-warning.p-button-outlined {
                    background-color: transparent;
                    color: #ffe082;
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
                    background: rgba(255, 224, 130, 0.04);
                    color: #ffe082;
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
                    background: rgba(255, 224, 130, 0.16);
                    color: #ffe082;
                    border: 1px solid;
                }
                .p-button.p-button-warning.p-button-text,
                .p-buttonset.p-button-warning > .p-button.p-button-text,
                .p-splitbutton.p-button-warning > .p-button.p-button-text,
                .p-fileupload-choose.p-button-warning.p-button-text {
                    background-color: transparent;
                    color: #ffe082;
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
                    background: rgba(255, 224, 130, 0.04);
                    border-color: transparent;
                    color: #ffe082;
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
                    background: rgba(255, 224, 130, 0.16);
                    border-color: transparent;
                    color: #ffe082;
                }

                .p-button.p-button-help,
                .p-buttonset.p-button-help > .p-button,
                .p-splitbutton.p-button-help > .p-button,
                .p-fileupload-choose.p-button-help {
                    color: #151515;
                    background: #b7a2e0;
                    border: 1px solid #9a7cd4;
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
                    background: #9a7cd4;
                    color: #151515;
                    border-color: #845fca;
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
                    box-shadow: 0 0 0 1px #d3c7ec;
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
                    background: #845fca;
                    color: #151515;
                    border-color: #6d43c0;
                }
                .p-button.p-button-help.p-button-outlined,
                .p-buttonset.p-button-help > .p-button.p-button-outlined,
                .p-splitbutton.p-button-help > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-help.p-button-outlined {
                    background-color: transparent;
                    color: #b7a2e0;
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
                    background: rgba(183, 162, 224, 0.04);
                    color: #b7a2e0;
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
                    background: rgba(183, 162, 224, 0.16);
                    color: #b7a2e0;
                    border: 1px solid;
                }
                .p-button.p-button-help.p-button-text,
                .p-buttonset.p-button-help > .p-button.p-button-text,
                .p-splitbutton.p-button-help > .p-button.p-button-text,
                .p-fileupload-choose.p-button-help.p-button-text {
                    background-color: transparent;
                    color: #b7a2e0;
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
                    background: rgba(183, 162, 224, 0.04);
                    border-color: transparent;
                    color: #b7a2e0;
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
                    background: rgba(183, 162, 224, 0.16);
                    border-color: transparent;
                    color: #b7a2e0;
                }

                .p-button.p-button-danger,
                .p-buttonset.p-button-danger > .p-button,
                .p-splitbutton.p-button-danger > .p-button,
                .p-fileupload-choose.p-button-danger {
                    color: #151515;
                    background: #f19ea6;
                    border: 1px solid #e97984;
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
                    background: #e97984;
                    color: #151515;
                    border-color: #f75965;
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
                    box-shadow: 0 0 0 1px #ffd0d9;
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
                    background: #f75965;
                    color: #151515;
                    border-color: #fd464e;
                }
                .p-button.p-button-danger.p-button-outlined,
                .p-buttonset.p-button-danger > .p-button.p-button-outlined,
                .p-splitbutton.p-button-danger > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-danger.p-button-outlined {
                    background-color: transparent;
                    color: #f19ea6;
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
                    background: rgba(241, 158, 166, 0.04);
                    color: #f19ea6;
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
                    background: rgba(241, 158, 166, 0.16);
                    color: #f19ea6;
                    border: 1px solid;
                }
                .p-button.p-button-danger.p-button-text,
                .p-buttonset.p-button-danger > .p-button.p-button-text,
                .p-splitbutton.p-button-danger > .p-button.p-button-text,
                .p-fileupload-choose.p-button-danger.p-button-text {
                    background-color: transparent;
                    color: #f19ea6;
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
                    background: rgba(241, 158, 166, 0.04);
                    border-color: transparent;
                    color: #f19ea6;
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
                    background: rgba(241, 158, 166, 0.16);
                    border-color: transparent;
                    color: #f19ea6;
                }

                .p-button.p-button-link {
                    color: #8dd0ff;
                    background: transparent;
                    border: transparent;
                }
                .p-button.p-button-link:enabled:hover,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: transparent;
                    color: #56bdff;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                    border-color: transparent;
                }
                .p-button.p-button-link:enabled:active,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: transparent;
                    color: #8dd0ff;
                    border-color: transparent;
                }

                .p-splitbutton {
                    border-radius: 4px;
                }
                .p-splitbutton.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #8dd0ff;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(141, 208, 255, 0.04);
                    color: #8dd0ff;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(141, 208, 255, 0.16);
                    color: #8dd0ff;
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
                    color: #8dd0ff;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:hover,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(141, 208, 255, 0.04);
                    color: #8dd0ff;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:active,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(141, 208, 255, 0.16);
                    color: #8dd0ff;
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
                    padding: 0.4375rem 0.65625rem;
                }
                .p-splitbutton.p-button-sm > .p-button .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-splitbutton.p-button-lg > .p-button {
                    font-size: 1.25rem;
                    padding: 0.625rem 0.9375rem;
                }
                .p-splitbutton.p-button-lg > .p-button .p-button-icon {
                    font-size: 1.25rem;
                }

                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button {
                    background-color: transparent;
                    color: #6c757d;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(108, 117, 125, 0.04);
                    color: #6c757d;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(108, 117, 125, 0.16);
                    color: #6c757d;
                }
                .p-splitbutton.p-button-secondary.p-button-text > .p-button {
                    background-color: transparent;
                    color: #6c757d;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(108, 117, 125, 0.04);
                    border-color: transparent;
                    color: #6c757d;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(108, 117, 125, 0.16);
                    border-color: transparent;
                    color: #6c757d;
                }

                .p-splitbutton.p-button-info.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #7fd8e6;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(127, 216, 230, 0.04);
                    color: #7fd8e6;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(127, 216, 230, 0.16);
                    color: #7fd8e6;
                }
                .p-splitbutton.p-button-info.p-button-text > .p-button {
                    background-color: transparent;
                    color: #7fd8e6;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(127, 216, 230, 0.04);
                    border-color: transparent;
                    color: #7fd8e6;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(127, 216, 230, 0.16);
                    border-color: transparent;
                    color: #7fd8e6;
                }

                .p-splitbutton.p-button-success.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #9fdaa8;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(159, 218, 168, 0.04);
                    color: #9fdaa8;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 218, 168, 0.16);
                    color: #9fdaa8;
                }
                .p-splitbutton.p-button-success.p-button-text > .p-button {
                    background-color: transparent;
                    color: #9fdaa8;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(159, 218, 168, 0.04);
                    border-color: transparent;
                    color: #9fdaa8;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(159, 218, 168, 0.16);
                    border-color: transparent;
                    color: #9fdaa8;
                }

                .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #ffe082;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 224, 130, 0.04);
                    color: #ffe082;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 224, 130, 0.16);
                    color: #ffe082;
                }
                .p-splitbutton.p-button-warning.p-button-text > .p-button {
                    background-color: transparent;
                    color: #ffe082;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(255, 224, 130, 0.04);
                    border-color: transparent;
                    color: #ffe082;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(255, 224, 130, 0.16);
                    border-color: transparent;
                    color: #ffe082;
                }

                .p-splitbutton.p-button-help.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #b7a2e0;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(183, 162, 224, 0.04);
                    color: #b7a2e0;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(183, 162, 224, 0.16);
                    color: #b7a2e0;
                }
                .p-splitbutton.p-button-help.p-button-text > .p-button {
                    background-color: transparent;
                    color: #b7a2e0;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(183, 162, 224, 0.04);
                    border-color: transparent;
                    color: #b7a2e0;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(183, 162, 224, 0.16);
                    border-color: transparent;
                    color: #b7a2e0;
                }

                .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #f19ea6;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(241, 158, 166, 0.04);
                    color: #f19ea6;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(241, 158, 166, 0.16);
                    color: #f19ea6;
                }
                .p-splitbutton.p-button-danger.p-button-text > .p-button {
                    background-color: transparent;
                    color: #f19ea6;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(241, 158, 166, 0.04);
                    border-color: transparent;
                    color: #f19ea6;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(241, 158, 166, 0.16);
                    border-color: transparent;
                    color: #f19ea6;
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
                    background: #343e4d;
                    color: #fff;
                }
                .p-speeddial-action:hover {
                    background: #3f4b5b;
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
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                    margin: 0.5rem;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
                .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:focus,
                .p-carousel .p-carousel-content .p-carousel-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    background-color: #3f4b5b;
                    width: 2rem;
                    height: 0.5rem;
                    transition: color 0.15s, box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator
                    button:hover {
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: #8dd0ff;
                    color: #151515;
                }

                .p-datatable .p-paginator-top {
                    border-width: 0;
                    border-radius: 0;
                }
                .p-datatable .p-paginator-bottom {
                    border-width: 1px 0 0 0;
                    border-radius: 0;
                }
                .p-datatable .p-datatable-header {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    border: solid #3f4b5b;
                    border-width: 1px 0 0 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-datatable .p-datatable-footer {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-datatable .p-datatable-thead > tr > th {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 2px 0;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    transition: box-shadow 0.15s;
                }
                .p-datatable .p-datatable-tfoot > tr > td {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 1px 0;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
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
                    color: #151515;
                    background: #8dd0ff;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-datatable .p-sortable-column.p-highlight {
                    background: #2a323d;
                    color: #8dd0ff;
                }
                .p-datatable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #8dd0ff;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: #8dd0ff;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #8dd0ff;
                }
                .p-datatable .p-sortable-column:focus {
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                    outline: 0 none;
                }
                .p-datatable .p-datatable-tbody > tr {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    transition: box-shadow 0.15s;
                }
                .p-datatable .p-datatable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 0 0;
                    padding: 1rem 1rem;
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
                    transition: color 0.15s, box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
                    margin-right: 0.5rem;
                }
                .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
                    font-weight: 600;
                }
                .p-datatable .p-datatable-tbody > tr > td.p-highlight {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-datatable .p-datatable-tbody > tr.p-highlight {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #8dd0ff;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #8dd0ff;
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
                    outline: 0.15rem solid #e3f3fe;
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
                    outline: 0.15rem solid #e3f3fe;
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
                    background: #8dd0ff;
                }
                .p-datatable .p-datatable-scrollable-header,
                .p-datatable .p-datatable-scrollable-footer {
                    background: #2a323d;
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
                    background-color: #2a323d;
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
                    background: #2f3641;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler {
                    color: #151515;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler:hover {
                    color: #151515;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd
                    + .p-row-expanded {
                    background: #2f3641;
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
                    background: rgba(141, 208, 255, 0.16);
                }

                .p-dataview .p-paginator-top {
                    border-width: 0;
                    border-radius: 0;
                }
                .p-dataview .p-paginator-bottom {
                    border-width: 1px 0 0 0;
                    border-radius: 0;
                }
                .p-dataview .p-dataview-header {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    border: solid #3f4b5b;
                    border-width: 1px 0 0 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-dataview .p-dataview-content {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    padding: 0;
                }
                .p-dataview.p-dataview-list
                    .p-dataview-content
                    > .p-grid
                    > div {
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 0 0;
                }
                .p-dataview .p-dataview-footer {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 1px 0;
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
                    border-width: 0;
                    border-radius: 0;
                }
                .p-datascroller .p-paginator-bottom {
                    border-width: 1px 0 0 0;
                    border-radius: 0;
                }
                .p-datascroller .p-datascroller-header {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    border: solid #3f4b5b;
                    border-width: 1px 0 0 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-datascroller .p-datascroller-content {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 0 none;
                    padding: 0;
                }
                .p-datascroller.p-datascroller-inline
                    .p-datascroller-list
                    > li {
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 0 0;
                }
                .p-datascroller .p-datascroller-footer {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 1px 0;
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
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-column-filter-menu-button:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-open,
                .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
                    background: transparent;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-active,
                .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-column-filter-menu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }

                .p-column-filter-clear-button {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-column-filter-clear-button:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-column-filter-clear-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }

                .p-column-filter-overlay {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                    min-width: 12.5rem;
                }
                .p-column-filter-overlay .p-column-filter-row-items {
                    padding: 0.5rem 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item {
                    margin: 0;
                    padding: 0.5rem 1.5rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-separator {
                    border-top: 1px solid #3f4b5b;
                    margin: 0.5rem 0;
                }

                .p-column-filter-overlay-menu .p-column-filter-operator {
                    padding: 0.75rem 1.5rem;
                    border-bottom: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    margin: 0;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-column-filter-overlay-menu .p-column-filter-constraint {
                    padding: 1.25rem;
                    border-bottom: 1px solid #3f4b5b;
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
                    padding: 0.5rem 1.25rem;
                }
                .p-column-filter-overlay-menu .p-column-filter-buttonbar {
                    padding: 1.25rem;
                }

                .fc {
                    /* FullCalendar 4 */
                    /* FullCalendar 5 */
                }
                .fc.fc-unthemed .fc-view-container th {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-unthemed .fc-view-container td.fc-widget-content {
                    border: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-unthemed .fc-view-container td.fc-head-container {
                    border: 1px solid #3f4b5b;
                }
                .fc.fc-unthemed .fc-view-container .fc-view {
                    background: #2a323d;
                }
                .fc.fc-unthemed .fc-view-container .fc-row {
                    border-right: 1px solid #3f4b5b;
                }
                .fc.fc-unthemed .fc-view-container .fc-event {
                    background: #56bdff;
                    border: 1px solid #56bdff;
                    color: #151515;
                }
                .fc.fc-unthemed .fc-view-container .fc-divider {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button {
                    color: #151515;
                    background: #8dd0ff;
                    border: 1px solid #8dd0ff;
                    font-size: 1rem;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
                    background: #56bdff;
                    color: #151515;
                    border-color: #56bdff;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
                    background: #1dadff;
                    color: #151515;
                    border-color: #1dadff;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
                    background: #6c757d;
                    border: 1px solid #6c757d;
                    color: #ffffff;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
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
                    background: #5a6268;
                    border-color: #545b62;
                    color: #ffffff;
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
                    background: #545b62;
                    border-color: #4e555b;
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
                    background: #545b62;
                    border-color: #4e555b;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    border-color: #3f4b5b;
                }
                .fc.fc-theme-standard .fc-view-harness th {
                    background: #2a323d;
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-theme-standard .fc-view-harness td {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: #3f4b5b;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-view {
                    background: #2a323d;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-popover {
                    background: none;
                    border: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header {
                    border: 1px solid #3f4b5b;
                    padding: 1rem 1.25rem;
                    background: #2a323d;
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
                    transition: color 0.15s, box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-body {
                    padding: 1.25rem;
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event {
                    color: #151515;
                    background: #56bdff;
                    border-color: #56bdff;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event
                    .fc-event-main {
                    color: #151515;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event
                    .fc-daygrid-event-dot {
                    background: #56bdff;
                    border-color: #56bdff;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event:hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
                    background: #2a323d;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button {
                    color: #151515;
                    background: #8dd0ff;
                    border: 1px solid #8dd0ff;
                    font-size: 1rem;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                    border-radius: 4px;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
                    background: #56bdff;
                    color: #151515;
                    border-color: #56bdff;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
                    background: #1dadff;
                    color: #151515;
                    border-color: #1dadff;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
                    opacity: 0.65;
                    color: #151515;
                    background: #8dd0ff;
                    border: 1px solid #8dd0ff;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    background: #6c757d;
                    border: 1px solid #6c757d;
                    color: #ffffff;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
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
                    background: #5a6268;
                    border-color: #545b62;
                    color: #ffffff;
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
                    background: #545b62;
                    border-color: #4e555b;
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
                    background: #545b62;
                    border-color: #4e555b;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    color: #151515;
                    background: #8dd0ff;
                }

                .p-orderlist .p-orderlist-controls {
                    padding: 1.25rem;
                }
                .p-orderlist .p-orderlist-controls .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-orderlist .p-orderlist-header {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    padding: 1rem 1.25rem;
                    font-weight: 600;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-orderlist .p-orderlist-filter-container {
                    padding: 1rem 1.25rem;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
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
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.5rem 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item {
                    padding: 0.5rem 1.5rem;
                    margin: 0;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: transform 0.15s, box-shadow 0.15s;
                }
                .p-orderlist
                    .p-orderlist-list
                    .p-orderlist-item:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even) {
                    background: rgba(255, 255, 255, 0.02);
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even):hover {
                    background: rgba(255, 255, 255, 0.04);
                }

                .p-organizationchart
                    .p-organizationchart-node-content.p-organizationchart-selectable-node:not(
                        .p-highlight
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight
                    .p-node-toggler
                    i {
                    color: #0e9bff;
                }
                .p-organizationchart .p-organizationchart-line-down {
                    background: #3f4b5b;
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid #3f4b5b;
                    border-color: #3f4b5b;
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid #3f4b5b;
                    border-color: #3f4b5b;
                }
                .p-organizationchart .p-organizationchart-node-content {
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1.25rem;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }

                .p-paginator {
                    background: #2a323d;
                    color: #8dd0ff;
                    border: solid #3f4b5b;
                    border-width: 0;
                    padding: 0.75rem;
                    border-radius: 4px;
                }
                .p-paginator .p-paginator-first,
                .p-paginator .p-paginator-prev,
                .p-paginator .p-paginator-next,
                .p-paginator .p-paginator-last {
                    background-color: transparent;
                    border: 1px solid #3f4b5b;
                    color: #8dd0ff;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0 0 0 -1px;
                    transition: box-shadow 0.15s;
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
                    background: rgba(255, 255, 255, 0.04);
                    border-color: #3f4b5b;
                    color: #8dd0ff;
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
                    border: 1px solid #3f4b5b;
                    color: #8dd0ff;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0 0 0 -1px;
                    padding: 0 0.5rem;
                }
                .p-paginator .p-paginator-pages .p-paginator-page {
                    background-color: transparent;
                    border: 1px solid #3f4b5b;
                    color: #8dd0ff;
                    min-width: 2.357rem;
                    height: 2.357rem;
                    margin: 0 0 0 -1px;
                    transition: box-shadow 0.15s;
                    border-radius: 0;
                }
                .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                    background: #8dd0ff;
                    border-color: #8dd0ff;
                    color: #151515;
                }
                .p-paginator
                    .p-paginator-pages
                    .p-paginator-page:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: #3f4b5b;
                    color: #8dd0ff;
                }

                .p-picklist .p-picklist-buttons {
                    padding: 1.25rem;
                }
                .p-picklist .p-picklist-buttons .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-picklist .p-picklist-header {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    padding: 1rem 1.25rem;
                    font-weight: 600;
                    border-bottom: 0 none;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-picklist .p-picklist-filter-container {
                    padding: 1rem 1.25rem;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
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
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.5rem 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-picklist .p-picklist-list .p-picklist-item {
                    padding: 0.5rem 1.5rem;
                    margin: 0;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                    transition: transform 0.15s, box-shadow 0.15s;
                }
                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-picklist .p-picklist-list .p-picklist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
                    color: #151515;
                    background: #8dd0ff;
                }

                .p-tree {
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1.25rem;
                    border-radius: 4px;
                }
                .p-tree .p-tree-container .p-treenode {
                    padding: 0.143rem;
                }
                .p-tree .p-tree-container .p-treenode .p-treenode-content {
                    border-radius: 4px;
                    transition: box-shadow 0.15s;
                    padding: 0.286rem;
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
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight {
                    background: #8dd0ff;
                    color: #151515;
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
                    color: #151515;
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
                    color: #151515;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-selectable:not(
                        .p-highlight
                    ):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-dragover {
                    background: rgba(255, 255, 255, 0.04);
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
                    background: #3eafff;
                }

                .p-treetable .p-paginator-top {
                    border-width: 0;
                    border-radius: 0;
                }
                .p-treetable .p-paginator-bottom {
                    border-width: 1px 0 0 0;
                    border-radius: 0;
                }
                .p-treetable .p-treetable-header {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    border: solid #3f4b5b;
                    border-width: 1px 0 0 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-treetable .p-treetable-footer {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 600;
                }
                .p-treetable .p-treetable-thead > tr > th {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 2px 0;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    transition: box-shadow 0.15s;
                }
                .p-treetable .p-treetable-tfoot > tr > td {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 1px 0;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                }
                .p-treetable .p-sortable-column {
                    outline-color: #e3f3fe;
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
                    color: #151515;
                    background: #8dd0ff;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column:not(.p-highlight):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable
                    .p-sortable-column:not(.p-highlight):hover
                    .p-sortable-column-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-treetable .p-sortable-column.p-highlight {
                    background: #2a323d;
                    color: #8dd0ff;
                }
                .p-treetable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #8dd0ff;
                }
                .p-treetable .p-treetable-tbody > tr {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    transition: box-shadow 0.15s;
                }
                .p-treetable .p-treetable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #3f4b5b;
                    border-width: 1px 0 0 0;
                    padding: 1rem 1rem;
                }
                .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                    margin-right: 0.5rem;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
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
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    outline: 0.15rem solid #e3f3fe;
                    outline-offset: -0.15rem;
                }
                .p-treetable .p-treetable-tbody > tr.p-highlight {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler {
                    color: #151515;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler:hover {
                    color: #151515;
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
                    background: #8dd0ff;
                }
                .p-treetable .p-treetable-scrollable-header,
                .p-treetable .p-treetable-scrollable-footer {
                    background: #2a323d;
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
                    background-color: #8dd0ff;
                }
                .p-timeline .p-timeline-event-connector {
                    background-color: #3f4b5b;
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
                    padding: 1rem 1.25rem;
                    border: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                    border-radius: 4px;
                    transition: box-shadow 0.15s;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight
                    .p-accordion-header-link {
                    background: #2a323d;
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    border-color: #3f4b5b;
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-accordion .p-accordion-content {
                    padding: 1.25rem;
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
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
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 1px 3px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 4px;
                }
                .p-card .p-card-body {
                    padding: 1.5rem;
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
                    padding: 1rem 0;
                }
                .p-card .p-card-footer {
                    padding: 1rem 0 0 0;
                }

                .p-fieldset {
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                }
                .p-fieldset .p-fieldset-legend {
                    padding: 1rem 1.25rem;
                    border: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                    border-radius: 4px;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
                    padding: 0;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
                    padding: 1rem 1.25rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 4px;
                    transition: box-shadow 0.15s;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-fieldset .p-fieldset-content {
                    padding: 1.25rem;
                }

                .p-divider .p-divider-content {
                    background-color: #2a323d;
                }
                .p-divider.p-divider-horizontal {
                    margin: 1rem 0;
                    padding: 0 1rem;
                }
                .p-divider.p-divider-horizontal:before {
                    border-top: 1px #3f4b5b;
                }
                .p-divider.p-divider-horizontal .p-divider-content {
                    padding: 0 0.5rem;
                }
                .p-divider.p-divider-vertical {
                    margin: 0 1rem;
                    padding: 1rem 0;
                }
                .p-divider.p-divider-vertical:before {
                    border-left: 1px #3f4b5b;
                }
                .p-divider.p-divider-vertical .p-divider-content {
                    padding: 0.5rem 0;
                }

                .p-panel .p-panel-header {
                    border: 1px solid #3f4b5b;
                    padding: 1rem 1.25rem;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-panel .p-panel-header .p-panel-title {
                    font-weight: 600;
                }
                .p-panel .p-panel-header .p-panel-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-panel .p-panel-header .p-panel-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-panel.p-panel-toggleable .p-panel-header {
                    padding: 0.5rem 1.25rem;
                }
                .p-panel .p-panel-content {
                    padding: 1.25rem;
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                    border-top: 0 none;
                }
                .p-panel .p-panel-footer {
                    padding: 0.5rem 1.25rem;
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0 none;
                }

                .p-splitter {
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    border-radius: 4px;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-splitter .p-splitter-gutter {
                    transition: color 0.15s, box-shadow 0.15s;
                    background: rgba(255, 255, 255, 0.04);
                }
                .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
                    background: #3f4b5b;
                }
                .p-splitter .p-splitter-gutter-resizing {
                    background: #3f4b5b;
                }

                .p-scrollpanel .p-scrollpanel-bar {
                    background: #3f4b5b;
                    border: 0 none;
                }

                .p-tabview .p-tabview-nav {
                    background: transparent;
                    border: 1px solid #3f4b5b;
                    border-width: 0 0 1px 0;
                }
                .p-tabview .p-tabview-nav li {
                    margin-right: 0;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    border: solid;
                    border-width: 1px;
                    border-color: #2a323d #2a323d #3f4b5b #2a323d;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    padding: 0.75rem 1rem;
                    font-weight: 600;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    transition: box-shadow 0.15s;
                    margin: 0 0 -1px 0;
                }
                .p-tabview
                    .p-tabview-nav
                    li
                    .p-tabview-nav-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 1px #e3f3fe;
                }
                .p-tabview
                    .p-tabview-nav
                    li:not(.p-highlight):not(.p-disabled):hover
                    .p-tabview-nav-link {
                    background: #2a323d;
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                    background: #2a323d;
                    border-color: #3f4b5b #3f4b5b #2a323d #3f4b5b;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-tabview .p-tabview-close {
                    margin-left: 0.5rem;
                }
                .p-tabview .p-tabview-nav-btn.p-link {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    width: 2.357rem;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 0;
                }
                .p-tabview .p-tabview-nav-btn.p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 1px #e3f3fe;
                }
                .p-tabview .p-tabview-panels {
                    background: #2a323d;
                    padding: 1.25rem;
                    border: 0 none;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }

                .p-toolbar {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    padding: 1rem 1.25rem;
                    border-radius: 4px;
                    gap: 0.5rem;
                }
                .p-toolbar .p-toolbar-separator {
                    margin: 0 0.5rem;
                }

                .p-confirm-popup {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-confirm-popup .p-confirm-popup-content {
                    padding: 1.25rem;
                }
                .p-confirm-popup .p-confirm-popup-footer {
                    text-align: right;
                    padding: 0 1.25rem 1.25rem 1.25rem;
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
                    border-color: rgba(42, 50, 61, 0);
                    border-bottom-color: #2a323d;
                }
                .p-confirm-popup:before {
                    border: solid transparent;
                    border-color: rgba(63, 75, 91, 0);
                    border-bottom-color: #3f4b5b;
                }
                .p-confirm-popup.p-confirm-popup-flipped:after {
                    border-top-color: #2a323d;
                }
                .p-confirm-popup.p-confirm-popup-flipped:before {
                    border-top-color: #3f4b5b;
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
                    box-shadow: none;
                    border: 1px solid #3f4b5b;
                }
                .p-dialog .p-dialog-header {
                    border-bottom: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1rem;
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
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                    margin-right: 0.5rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
                    margin-right: 0;
                }
                .p-dialog .p-dialog-content {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1rem;
                }
                .p-dialog .p-dialog-content:last-of-type {
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-dialog .p-dialog-footer {
                    border-top: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 1rem;
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
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    box-shadow: none;
                }
                .p-overlaypanel .p-overlaypanel-content {
                    padding: 1.25rem;
                }
                .p-overlaypanel .p-overlaypanel-close {
                    background: #8dd0ff;
                    color: #151515;
                    width: 2rem;
                    height: 2rem;
                    transition: color 0.15s, box-shadow 0.15s;
                    border-radius: 50%;
                    position: absolute;
                    top: -1rem;
                    right: -1rem;
                }
                .p-overlaypanel .p-overlaypanel-close:enabled:hover {
                    background: #56bdff;
                    color: #151515;
                }
                .p-overlaypanel:after {
                    border: solid transparent;
                    border-color: rgba(42, 50, 61, 0);
                    border-bottom-color: #2a323d;
                }
                .p-overlaypanel:before {
                    border: solid transparent;
                    border-color: rgba(63, 75, 91, 0);
                    border-bottom-color: #3c4756;
                }
                .p-overlaypanel.p-overlaypanel-flipped:after {
                    border-top-color: #2a323d;
                }
                .p-overlaypanel.p-overlaypanel-flipped:before {
                    border-top-color: #3f4b5b;
                }

                .p-sidebar {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-sidebar .p-sidebar-header {
                    padding: 1rem 1.25rem;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close,
                .p-sidebar .p-sidebar-header .p-sidebar-icon {
                    width: 2rem;
                    height: 2rem;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
                    color: rgba(255, 255, 255, 0.87);
                    border-color: transparent;
                    background: transparent;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-sidebar .p-sidebar-header + .p-sidebar-content {
                    padding-top: 0;
                }
                .p-sidebar .p-sidebar-content {
                    padding: 1.25rem;
                }

                .p-tooltip .p-tooltip-text {
                    background: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    padding: 0.5rem 0.75rem;
                    box-shadow: none;
                    border-radius: 4px;
                }
                .p-tooltip.p-tooltip-right .p-tooltip-arrow {
                    border-right-color: #3f4b5b;
                }
                .p-tooltip.p-tooltip-left .p-tooltip-arrow {
                    border-left-color: #3f4b5b;
                }
                .p-tooltip.p-tooltip-top .p-tooltip-arrow {
                    border-top-color: #3f4b5b;
                }
                .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
                    border-bottom-color: #3f4b5b;
                }

                .p-fileupload .p-fileupload-buttonbar {
                    background: #2a323d;
                    padding: 1rem 1.25rem;
                    border: 1px solid #3f4b5b;
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
                    background: #2a323d;
                    padding: 2rem 1rem;
                    border: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
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
                    background: #343e4d;
                    border: 0 none;
                    border-radius: 4px;
                    padding: 1rem;
                }
                .p-breadcrumb ul li .p-menuitem-link {
                    transition: box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-breadcrumb ul li .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {
                    color: #8dd0ff;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
                    color: #8dd0ff;
                }
                .p-breadcrumb ul li.p-breadcrumb-chevron {
                    margin: 0 0.5rem 0 0.5rem;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-breadcrumb ul li:last-child .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-breadcrumb ul li:last-child .p-menuitem-icon {
                    color: rgba(255, 255, 255, 0.87);
                }

                .p-contextmenu {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-contextmenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-contextmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-contextmenu .p-submenu-list {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                    border-radius: 4px;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link {
                    background: #20262e;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-contextmenu .p-menu-separator {
                    border-top: 1px solid #3f4b5b;
                    margin: 0.5rem 0;
                }
                .p-contextmenu .p-submenu-icon {
                    font-size: 0.875rem;
                    transition: transform 0.15s;
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
                    padding: 0.5rem 1rem;
                    background: #343e4d;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    border-radius: 4px;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    border-radius: 4px;
                    transition: box-shadow 0.15s;
                    user-select: none;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.6);
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
                    background: transparent;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: transparent;
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
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-megamenu .p-megamenu-panel {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-megamenu .p-megamenu-submenu-header {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .p-megamenu .p-megamenu-submenu {
                    padding: 0.5rem 0;
                    width: 12.5rem;
                }
                .p-megamenu .p-megamenu-submenu .p-menu-separator {
                    border-top: 1px solid #3f4b5b;
                    margin: 0.5rem 0;
                }
                .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #20262e;
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
                    color: rgba(255, 255, 255, 0.87);
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
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-megamenu .p-megamenu-button:hover {
                    color: rgba(255, 255, 255, 0.87);
                    background: transparent;
                }
                .p-megamenu .p-megamenu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-megamenu .p-submenu-icon {
                    transition: transform 0.15s;
                }
                .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-menu-separator {
                    border-top: 1px solid #3f4b5b;
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
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
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
                    transition: transform 0.15s;
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
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-menu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-menu.p-menu-overlay {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-menu .p-submenu-header {
                    margin: 0;
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }
                .p-menu .p-menu-separator {
                    border-top: 1px solid #3f4b5b;
                    margin: 0.5rem 0;
                }

                .p-menubar {
                    padding: 0.5rem 1rem;
                    background: #343e4d;
                    color: rgba(255, 255, 255, 0.6);
                    border: 0 none;
                    border-radius: 4px;
                }
                .p-menubar .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 1rem;
                    color: rgba(255, 255, 255, 0.6);
                    border-radius: 4px;
                    transition: box-shadow 0.15s;
                    user-select: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: rgba(255, 255, 255, 0.6);
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
                    background: transparent;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: transparent;
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
                    color: rgba(255, 255, 255, 0.87);
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-menubar .p-submenu-list {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                    width: 12.5rem;
                }
                .p-menubar .p-submenu-list .p-menu-separator {
                    border-top: 1px solid #3f4b5b;
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
                    background: #20262e;
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
                    color: rgba(255, 255, 255, 0.87);
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
                        transition: color 0.15s, box-shadow 0.15s;
                    }
                    .p-menubar .p-menubar-button:hover {
                        color: rgba(255, 255, 255, 0.87);
                        background: transparent;
                    }
                    .p-menubar .p-menubar-button:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: 0 0 0 1px #e3f3fe;
                    }
                    .p-menubar .p-menubar-root-list {
                        position: absolute;
                        display: none;
                        padding: 0.5rem 0;
                        background: #2a323d;
                        border: 1px solid #3f4b5b;
                        box-shadow: none;
                        width: 100%;
                    }
                    .p-menubar .p-menubar-root-list .p-menu-separator {
                        border-top: 1px solid #3f4b5b;
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
                        padding: 0.75rem 1rem;
                        color: rgba(255, 255, 255, 0.87);
                        border-radius: 0;
                        transition: box-shadow 0.15s;
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
                        color: rgba(255, 255, 255, 0.87);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-submenu-icon {
                        color: rgba(255, 255, 255, 0.87);
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        > .p-submenu-icon {
                        margin-left: auto;
                        transition: transform 0.15s;
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
                        transition: transform 0.15s;
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
                    padding: 1rem 1.25rem;
                    border: 1px solid #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    background: #2a323d;
                    font-weight: 600;
                    border-radius: 4px;
                    transition: box-shadow 0.15s;
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
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-panelmenu
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
                    > a:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu .p-panelmenu-header.p-highlight {
                    margin-bottom: 0;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight > a {
                    background: #2a323d;
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-panelmenu
                    .p-panelmenu-header.p-highlight:not(.p-disabled)
                    > a:hover {
                    border-color: #3f4b5b;
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu .p-panelmenu-content {
                    padding: 0.5rem 0;
                    border: 1px solid #3f4b5b;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
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
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-slidemenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-slidemenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-slidemenu.p-slidemenu-overlay {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-slidemenu .p-slidemenu-list {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link {
                    background: #20262e;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-slidemenu .p-slidemenu-separator {
                    border-top: 1px solid #3f4b5b;
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
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                }

                .p-steps .p-steps-item .p-menuitem-link {
                    background: transparent;
                    transition: box-shadow 0.15s;
                    border-radius: 4px;
                    background: transparent;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    background: transparent;
                    min-width: 2rem;
                    height: 2rem;
                    line-height: 2rem;
                    font-size: 1.143rem;
                    z-index: 1;
                    border-radius: 4px;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
                    margin-top: 0.5rem;
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-number {
                    background: #8dd0ff;
                    color: #151515;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-title {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-steps .p-steps-item:before {
                    content: ' ';
                    border-top: 1px solid #3f4b5b;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    display: block;
                    position: absolute;
                    margin-top: -1rem;
                }

                .p-tabmenu .p-tabmenu-nav {
                    background: transparent;
                    border: 1px solid #3f4b5b;
                    border-width: 0 0 1px 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
                    margin-right: 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
                    border: solid;
                    border-width: 1px;
                    border-color: #2a323d #2a323d #3f4b5b #2a323d;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.6);
                    padding: 0.75rem 1rem;
                    font-weight: 600;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                    transition: box-shadow 0.15s;
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
                    box-shadow: inset 0 0 0 1px #e3f3fe;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
                    .p-menuitem-link {
                    background: #2a323d;
                    border-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem.p-highlight
                    .p-menuitem-link {
                    background: #2a323d;
                    border-color: #3f4b5b #3f4b5b #2a323d #3f4b5b;
                    color: rgba(255, 255, 255, 0.6);
                }

                .p-tieredmenu {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    border-radius: 4px;
                    width: 12.5rem;
                }
                .p-tieredmenu .p-menuitem-link {
                    padding: 0.75rem 1rem;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 0;
                    transition: box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tieredmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
                }
                .p-tieredmenu.p-tieredmenu-overlay {
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-tieredmenu .p-submenu-list {
                    padding: 0.5rem 0;
                    background: #2a323d;
                    border: 1px solid #3f4b5b;
                    box-shadow: none;
                }
                .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #20262e;
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
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-tieredmenu .p-menu-separator {
                    border-top: 1px solid #3f4b5b;
                    margin: 0.5rem 0;
                }
                .p-tieredmenu .p-submenu-icon {
                    font-size: 0.875rem;
                    transition: transform 0.15s;
                }
                .p-tieredmenu .p-submenu-icon.p-icon {
                    width: 0.875rem;
                    height: 0.875rem;
                }

                .p-inline-message {
                    padding: 0.5rem 0.75rem;
                    margin: 0;
                    border-radius: 4px;
                }
                .p-inline-message.p-inline-message-info {
                    background: #cce5ff;
                    border: solid #b8daff;
                    border-width: 0px;
                    color: #004085;
                }
                .p-inline-message.p-inline-message-info .p-inline-message-icon {
                    color: #004085;
                }
                .p-inline-message.p-inline-message-success {
                    background: #d4edda;
                    border: solid #c3e6cb;
                    border-width: 0px;
                    color: #155724;
                }
                .p-inline-message.p-inline-message-success
                    .p-inline-message-icon {
                    color: #155724;
                }
                .p-inline-message.p-inline-message-warn {
                    background: #fff3cd;
                    border: solid #ffeeba;
                    border-width: 0px;
                    color: #856404;
                }
                .p-inline-message.p-inline-message-warn .p-inline-message-icon {
                    color: #856404;
                }
                .p-inline-message.p-inline-message-error {
                    background: #f8d7da;
                    border: solid #f5c6cb;
                    border-width: 0px;
                    color: #721c24;
                }
                .p-inline-message.p-inline-message-error
                    .p-inline-message-icon {
                    color: #721c24;
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
                    padding: 1rem 1.25rem;
                }
                .p-message .p-message-close {
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background: transparent;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-message .p-message-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                .p-message .p-message-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-message.p-message-info {
                    background: #cce5ff;
                    border: solid #b8daff;
                    border-width: 1px;
                    color: #004085;
                }
                .p-message.p-message-info .p-message-icon {
                    color: #004085;
                }
                .p-message.p-message-info .p-message-close {
                    color: #004085;
                }
                .p-message.p-message-success {
                    background: #d4edda;
                    border: solid #c3e6cb;
                    border-width: 1px;
                    color: #155724;
                }
                .p-message.p-message-success .p-message-icon {
                    color: #155724;
                }
                .p-message.p-message-success .p-message-close {
                    color: #155724;
                }
                .p-message.p-message-warn {
                    background: #fff3cd;
                    border: solid #ffeeba;
                    border-width: 1px;
                    color: #856404;
                }
                .p-message.p-message-warn .p-message-icon {
                    color: #856404;
                }
                .p-message.p-message-warn .p-message-close {
                    color: #856404;
                }
                .p-message.p-message-error {
                    background: #f8d7da;
                    border: solid #f5c6cb;
                    border-width: 1px;
                    color: #721c24;
                }
                .p-message.p-message-error .p-message-icon {
                    color: #721c24;
                }
                .p-message.p-message-error .p-message-close {
                    color: #721c24;
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
                    opacity: 1;
                }
                .p-toast .p-toast-message {
                    margin: 0 0 1rem 0;
                    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
                    border-radius: 4px;
                }
                .p-toast .p-toast-message .p-toast-message-content {
                    padding: 1rem;
                    border-width: 0;
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
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-toast .p-toast-message .p-toast-icon-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                .p-toast .p-toast-message .p-toast-icon-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }
                .p-toast .p-toast-message.p-toast-message-info {
                    background: #cce5ff;
                    border: solid #b8daff;
                    border-width: 1px;
                    color: #004085;
                }
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-icon-close {
                    color: #004085;
                }
                .p-toast .p-toast-message.p-toast-message-success {
                    background: #d4edda;
                    border: solid #c3e6cb;
                    border-width: 1px;
                    color: #155724;
                }
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-icon-close {
                    color: #155724;
                }
                .p-toast .p-toast-message.p-toast-message-warn {
                    background: #fff3cd;
                    border: solid #ffeeba;
                    border-width: 1px;
                    color: #856404;
                }
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-icon-close {
                    color: #856404;
                }
                .p-toast .p-toast-message.p-toast-message-error {
                    background: #f8d7da;
                    border: solid #f5c6cb;
                    border-width: 1px;
                    color: #721c24;
                }
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-icon-close {
                    color: #721c24;
                }

                .p-galleria .p-galleria-close {
                    margin: 0.5rem;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    width: 4rem;
                    height: 4rem;
                    transition: color 0.15s, box-shadow 0.15s;
                    border-radius: 4px;
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
                    color: rgba(255, 255, 255, 0.6);
                    width: 4rem;
                    height: 4rem;
                    transition: color 0.15s, box-shadow 0.15s;
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
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-galleria .p-galleria-caption {
                    background: rgba(0, 0, 0, 0.5);
                    color: rgba(255, 255, 255, 0.6);
                    padding: 1rem;
                }
                .p-galleria .p-galleria-indicators {
                    padding: 1rem;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button {
                    background-color: #7789a1;
                    width: 1rem;
                    height: 1rem;
                    transition: color 0.15s, box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button:hover {
                    background: #687c97;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #8dd0ff;
                    color: #151515;
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
                    background: #8dd0ff;
                    color: #151515;
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
                    color: rgba(255, 255, 255, 0.6);
                    width: 2rem;
                    height: 2rem;
                    transition: color 0.15s, box-shadow 0.15s;
                    border-radius: 4px;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-prev:hover,
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-next:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.6);
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content {
                    transition: box-shadow 0.15s;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
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
                    transition: color 0.15s, box-shadow 0.15s;
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
                    transition: color 0.15s, box-shadow 0.15s;
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
                    background-color: #3f4b5b;
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
                    border: 2px solid #2a323d;
                }

                .p-chip {
                    background-color: #3f4b5b;
                    color: rgba(255, 255, 255, 0.87);
                    border-radius: 16px;
                    padding: 0 0.75rem;
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
                    margin-left: -0.75rem;
                    margin-right: 0.5rem;
                }
                .p-chip .p-chip-remove-icon {
                    border-radius: 4px;
                    transition: color 0.15s, box-shadow 0.15s;
                    margin-left: 0.5rem;
                }
                .p-chip .p-chip-remove-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }

                .p-scrolltop {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 4px;
                    box-shadow: none;
                    transition: color 0.15s, box-shadow 0.15s;
                }
                .p-scrolltop.p-link {
                    background: #8dd0ff;
                }
                .p-scrolltop.p-link:hover {
                    background: #56bdff;
                }
                .p-scrolltop .p-scrolltop-icon {
                    font-size: 1.5rem;
                    color: #151515;
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
                    background: #8dd0ff;
                    color: #151515;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 4px;
                }
                .p-tag.p-tag-success {
                    background-color: #9fdaa8;
                    color: #151515;
                }
                .p-tag.p-tag-info {
                    background-color: #7fd8e6;
                    color: #151515;
                }
                .p-tag.p-tag-warning {
                    background-color: #ffe082;
                    color: #151515;
                }
                .p-tag.p-tag-danger {
                    background-color: #f19ea6;
                    color: #151515;
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
                    padding: 0.5rem 0.75rem;
                    border-radius: 4px;
                    transition: background-color 0.15s, border-color 0.15s,
                        box-shadow 0.15s;
                }
                .p-inplace .p-inplace-display:not(.p-disabled):hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.87);
                }
                .p-inplace .p-inplace-display:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 1px #e3f3fe;
                }

                .p-progressbar {
                    border: 0 none;
                    height: 1.5rem;
                    background: #3f4b5b;
                    border-radius: 4px;
                }
                .p-progressbar .p-progressbar-value {
                    border: 0 none;
                    margin: 0;
                    background: #8dd0ff;
                }
                .p-progressbar .p-progressbar-label {
                    color: #151515;
                    line-height: 1.5rem;
                }

                .p-terminal {
                    background: #2a323d;
                    color: rgba(255, 255, 255, 0.87);
                    border: 1px solid #3f4b5b;
                    padding: 1.25rem;
                }
                .p-terminal .p-terminal-input {
                    font-size: 1rem;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                }

                .p-badge {
                    background: #8dd0ff;
                    color: #151515;
                    font-size: 0.75rem;
                    font-weight: 700;
                    min-width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                .p-badge.p-badge-secondary {
                    background-color: #6c757d;
                    color: #ffffff;
                }
                .p-badge.p-badge-success {
                    background-color: #9fdaa8;
                    color: #151515;
                }
                .p-badge.p-badge-info {
                    background-color: #7fd8e6;
                    color: #151515;
                }
                .p-badge.p-badge-warning {
                    background-color: #ffe082;
                    color: #151515;
                }
                .p-badge.p-badge-danger {
                    background-color: #f19ea6;
                    color: #151515;
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
                    background: #8dd0ff;
                    color: #151515;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 4px;
                }
                .p-tag.p-tag-success {
                    background-color: #9fdaa8;
                    color: #151515;
                }
                .p-tag.p-tag-info {
                    background-color: #7fd8e6;
                    color: #151515;
                }
                .p-tag.p-tag-warning {
                    background-color: #ffe082;
                    color: #151515;
                }
                .p-tag.p-tag-danger {
                    background-color: #f19ea6;
                    color: #151515;
                }

                /* Vendor extensions to the designer enhanced bootstrap compatibility */
                .p-breadcrumb .p-breadcrumb-chevron {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                }
                .p-breadcrumb .p-breadcrumb-chevron:before {
                    content: '/';
                }

                /* Customizations to the designer theme should be defined here */
            `}
        </style>
    )
}

// EOF