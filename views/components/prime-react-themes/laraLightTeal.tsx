// laraLightTeal.tsx

export default function laraLightTeal() {
    // -------------------------------------------------------------

    return (
        <style jsx global>
            {`
                :root {
                    --surface-a: #ffffff;
                    --surface-b: #f8f9fa;
                    --surface-c: #e9ecef;
                    --surface-d: #dee2e6;
                    --surface-e: #ffffff;
                    --surface-f: #ffffff;
                    --text-color: #495057;
                    --text-color-secondary: #6c757d;
                    --primary-color: #14b8a6;
                    --primary-color-text: #ffffff;
                    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
                        Segoe UI Emoji, Segoe UI Symbol;
                    --surface-0: #ffffff;
                    --surface-50: #fafafa;
                    --surface-100: #f5f5f5;
                    --surface-200: #eeeeee;
                    --surface-300: #e0e0e0;
                    --surface-400: #bdbdbd;
                    --surface-500: #9e9e9e;
                    --surface-600: #757575;
                    --surface-700: #616161;
                    --surface-800: #424242;
                    --surface-900: #212121;
                    --gray-50: #fafafa;
                    --gray-100: #f5f5f5;
                    --gray-200: #eeeeee;
                    --gray-300: #e0e0e0;
                    --gray-400: #bdbdbd;
                    --gray-500: #9e9e9e;
                    --gray-600: #757575;
                    --gray-700: #616161;
                    --gray-800: #424242;
                    --gray-900: #212121;
                    --content-padding: 1.25rem;
                    --inline-spacing: 0.5rem;
                    --border-radius: 6px;
                    --surface-ground: #eff3f8;
                    --surface-section: #ffffff;
                    --surface-card: #ffffff;
                    --surface-overlay: #ffffff;
                    --surface-border: #dfe7ef;
                    --surface-hover: #f6f9fc;
                    --focus-ring: 0 0 0 0.2rem #99f6e4;
                    --maskbg: rgba(0, 0, 0, 0.4);
                    --highlight-bg: #f0fdfa;
                    --highlight-text-color: #0f766e;
                    color-scheme: light;
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
                    opacity: 0.6;
                }

                .p-error {
                    color: #e24c4c;
                }

                .p-text-secondary {
                    color: #6c757d;
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
                    border-radius: 6px;
                }
                .p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    --blue-50: #f5f9ff;
                    --blue-100: #d0e1fd;
                    --blue-200: #abc9fb;
                    --blue-300: #85b2f9;
                    --blue-400: #609af8;
                    --blue-500: #3b82f6;
                    --blue-600: #326fd1;
                    --blue-700: #295bac;
                    --blue-800: #204887;
                    --blue-900: #183462;
                    --green-50: #f4fcf7;
                    --green-100: #caf1d8;
                    --green-200: #a0e6ba;
                    --green-300: #76db9b;
                    --green-400: #4cd07d;
                    --green-500: #22c55e;
                    --green-600: #1da750;
                    --green-700: #188a42;
                    --green-800: #136c34;
                    --green-900: #0e4f26;
                    --yellow-50: #fefbf3;
                    --yellow-100: #faedc4;
                    --yellow-200: #f6de95;
                    --yellow-300: #f2d066;
                    --yellow-400: #eec137;
                    --yellow-500: #eab308;
                    --yellow-600: #c79807;
                    --yellow-700: #a47d06;
                    --yellow-800: #816204;
                    --yellow-900: #5e4803;
                    --cyan-50: #f3fbfd;
                    --cyan-100: #c3edf5;
                    --cyan-200: #94e0ed;
                    --cyan-300: #65d2e4;
                    --cyan-400: #35c4dc;
                    --cyan-500: #06b6d4;
                    --cyan-600: #059bb4;
                    --cyan-700: #047f94;
                    --cyan-800: #036475;
                    --cyan-900: #024955;
                    --pink-50: #fef6fa;
                    --pink-100: #fad3e7;
                    --pink-200: #f7b0d3;
                    --pink-300: #f38ec0;
                    --pink-400: #f06bac;
                    --pink-500: #ec4899;
                    --pink-600: #c93d82;
                    --pink-700: #a5326b;
                    --pink-800: #822854;
                    --pink-900: #5e1d3d;
                    --indigo-50: #f7f7fe;
                    --indigo-100: #dadafc;
                    --indigo-200: #bcbdf9;
                    --indigo-300: #9ea0f6;
                    --indigo-400: #8183f4;
                    --indigo-500: #6366f1;
                    --indigo-600: #5457cd;
                    --indigo-700: #4547a9;
                    --indigo-800: #363885;
                    --indigo-900: #282960;
                    --teal-50: #f3fbfb;
                    --teal-100: #c7eeea;
                    --teal-200: #9ae0d9;
                    --teal-300: #6dd3c8;
                    --teal-400: #41c5b7;
                    --teal-500: #14b8a6;
                    --teal-600: #119c8d;
                    --teal-700: #0e8174;
                    --teal-800: #0b655b;
                    --teal-900: #084a42;
                    --orange-50: #fff8f3;
                    --orange-100: #feddc7;
                    --orange-200: #fcc39b;
                    --orange-300: #fba86f;
                    --orange-400: #fa8e42;
                    --orange-500: #f97316;
                    --orange-600: #d46213;
                    --orange-700: #ae510f;
                    --orange-800: #893f0c;
                    --orange-900: #642e09;
                    --bluegray-50: #f7f8f9;
                    --bluegray-100: #dadee3;
                    --bluegray-200: #bcc3cd;
                    --bluegray-300: #9fa9b7;
                    --bluegray-400: #818ea1;
                    --bluegray-500: #64748b;
                    --bluegray-600: #556376;
                    --bluegray-700: #465161;
                    --bluegray-800: #37404c;
                    --bluegray-900: #282e38;
                    --purple-50: #fbf7ff;
                    --purple-100: #ead6fd;
                    --purple-200: #dab6fc;
                    --purple-300: #c996fa;
                    --purple-400: #b975f9;
                    --purple-500: #a855f7;
                    --purple-600: #8f48d2;
                    --purple-700: #763cad;
                    --purple-800: #5c2f88;
                    --purple-900: #432263;
                    --red-50: #fff5f5;
                    --red-100: #ffd0ce;
                    --red-200: #ffaca7;
                    --red-300: #ff8780;
                    --red-400: #ff6259;
                    --red-500: #ff3d32;
                    --red-600: #d9342b;
                    --red-700: #b32b23;
                    --red-800: #8c221c;
                    --red-900: #661814;
                    --primary-50: #f3fbfb;
                    --primary-100: #c7eeea;
                    --primary-200: #9ae0d9;
                    --primary-300: #6dd3c8;
                    --primary-400: #41c5b7;
                    --primary-500: #14b8a6;
                    --primary-600: #119c8d;
                    --primary-700: #0e8174;
                    --primary-800: #0b655b;
                    --primary-900: #084a42;
                }

                .p-autocomplete .p-autocomplete-loader {
                    right: 0.75rem;
                }
                .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
                    right: 3.75rem;
                }
                .p-autocomplete .p-autocomplete-multiple-container {
                    padding: 0.375rem 0.75rem;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(.p-disabled):hover {
                    border-color: #14b8a6;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container:not(
                        .p-disabled
                    ).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: #495057;
                    padding: 0;
                    margin: 0;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #f0fdfa;
                    color: #0f766e;
                    border-radius: 6px;
                }
                .p-autocomplete
                    .p-autocomplete-multiple-container
                    .p-autocomplete-token
                    .p-autocomplete-token-icon {
                    margin-left: 0.5rem;
                }
                .p-autocomplete.p-invalid.p-component > .p-inputtext {
                    border-color: #e24c4c;
                }

                .p-autocomplete-panel {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-autocomplete-panel .p-autocomplete-items {
                    padding: 0.75rem 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item:hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-autocomplete-panel
                    .p-autocomplete-items
                    .p-autocomplete-item-group {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    color: #343a40;
                    background: #ffffff;
                    font-weight: 700;
                }

                .p-calendar.p-invalid.p-component > .p-inputtext {
                    border-color: #e24c4c;
                }

                .p-datepicker {
                    padding: 0.5rem;
                    background: #ffffff;
                    color: #495057;
                    border: 1px solid #ced4da;
                    border-radius: 6px;
                }
                .p-datepicker:not(.p-datepicker-inline) {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
                    background: #ffffff;
                }
                .p-datepicker .p-datepicker-header {
                    padding: 0.5rem;
                    color: #495057;
                    background: #ffffff;
                    font-weight: 600;
                    margin: 0;
                    border-bottom: 1px solid #dee2e6;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev,
                .p-datepicker .p-datepicker-header .p-datepicker-next {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
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
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
                .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    color: #495057;
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
                    color: #14b8a6;
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
                    border-radius: 50%;
                    transition: box-shadow 0.2s;
                    border: 1px solid transparent;
                }
                .p-datepicker table td > span.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-datepicker table td > span:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-datepicker table td.p-datepicker-today > span {
                    background: #ced4da;
                    color: #495057;
                    border-color: transparent;
                }
                .p-datepicker table td.p-datepicker-today > span.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-datepicker .p-datepicker-buttonbar {
                    padding: 1rem 0;
                    border-top: 1px solid #dee2e6;
                }
                .p-datepicker .p-datepicker-buttonbar .p-button {
                    width: auto;
                }
                .p-datepicker .p-timepicker {
                    border-top: 1px solid #dee2e6;
                    padding: 0.5rem;
                }
                .p-datepicker .p-timepicker button {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-datepicker .p-timepicker button:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-datepicker .p-timepicker button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    transition: box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-datepicker .p-yearpicker {
                    margin: 0.5rem 0;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year {
                    padding: 0.5rem;
                    transition: box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
                    border-left: 1px solid #dee2e6;
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
                    background: #e9ecef;
                }
                .p-datepicker:not(.p-disabled)
                    table
                    td
                    span:not(.p-highlight):not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #e9ecef;
                }
                .p-datepicker:not(.p-disabled)
                    .p-monthpicker
                    .p-monthpicker-month:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #e9ecef;
                }
                .p-datepicker:not(.p-disabled)
                    .p-yearpicker
                    .p-yearpicker-year:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }

                @media screen and (max-width: 769px) {
                    .p-datepicker table th,
                    .p-datepicker table td {
                        padding: 0;
                    }
                }
                .p-cascadeselect {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-cascadeselect:not(.p-disabled):hover {
                    border-color: #14b8a6;
                }
                .p-cascadeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-cascadeselect .p-cascadeselect-label {
                    background: transparent;
                    border: 0 none;
                    padding: 0.75rem 0.75rem;
                }
                .p-cascadeselect .p-cascadeselect-label.p-placeholder {
                    color: #6c757d;
                }
                .p-cascadeselect .p-cascadeselect-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-cascadeselect .p-cascadeselect-trigger {
                    background: transparent;
                    color: #6c757d;
                    width: 3rem;
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                .p-cascadeselect.p-invalid.p-component {
                    border-color: #e24c4c;
                }

                .p-cascadeselect-panel {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-cascadeselect-panel .p-cascadeselect-items {
                    padding: 0.75rem 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item {
                    margin: 0;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content {
                    padding: 0.75rem 1.25rem;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item
                    .p-cascadeselect-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-cascadeselect-panel
                    .p-cascadeselect-items
                    .p-cascadeselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #495057;
                    background: #e9ecef;
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
                    background: #e9ecef;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-checkbox {
                    width: 22px;
                    height: 22px;
                }
                .p-checkbox .p-checkbox-box {
                    border: 2px solid #ced4da;
                    background: #ffffff;
                    width: 22px;
                    height: 22px;
                    color: #495057;
                    border-radius: 6px;
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
                    border-color: #14b8a6;
                    background: #14b8a6;
                }
                .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
                    border-color: #0f766e;
                    background: #0f766e;
                    color: #ffffff;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                    border-color: #14b8a6;
                }
                .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    border-color: #0f766e;
                    background: #0f766e;
                    color: #ffffff;
                }
                .p-checkbox.p-invalid > .p-checkbox-box {
                    border-color: #e24c4c;
                }

                .p-input-filled .p-checkbox .p-checkbox-box {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
                    background: #14b8a6;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box:hover {
                    background-color: #e9ecef;
                }
                .p-input-filled
                    .p-checkbox:not(.p-checkbox-disabled)
                    .p-checkbox-box.p-highlight:hover {
                    background: #0f766e;
                }

                .p-chips .p-chips-multiple-container {
                    padding: 0.375rem 0.75rem;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                    border-color: #14b8a6;
                }
                .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-chips .p-chips-multiple-container .p-chips-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #dee2e6;
                    color: #495057;
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: #495057;
                    padding: 0;
                    margin: 0;
                }
                .p-chips.p-invalid.p-component > .p-inputtext {
                    border-color: #e24c4c;
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
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }

                .p-dropdown {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-dropdown:not(.p-disabled):hover {
                    border-color: #14b8a6;
                }
                .p-dropdown:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-dropdown.p-dropdown-clearable .p-dropdown-label {
                    padding-right: 1.75rem;
                }
                .p-dropdown .p-dropdown-label {
                    background: transparent;
                    border: 0 none;
                }
                .p-dropdown .p-dropdown-label.p-placeholder {
                    color: #6c757d;
                }
                .p-dropdown .p-dropdown-label:enabled:focus {
                    outline: 0 none;
                    box-shadow: none;
                }
                .p-dropdown .p-dropdown-trigger {
                    background: transparent;
                    color: #6c757d;
                    width: 3rem;
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                .p-dropdown .p-dropdown-clear-icon {
                    color: #6c757d;
                    right: 3rem;
                }
                .p-dropdown.p-invalid.p-component {
                    border-color: #e24c4c;
                }

                .p-dropdown-panel {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-dropdown-panel .p-dropdown-header {
                    padding: 0.75rem 1.25rem;
                    border-bottom: 1px solid #dee2e6;
                    color: #343a40;
                    background: #f8f9fa;
                    margin: 0;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
                    padding-right: 1.75rem;
                    margin-right: -1.75rem;
                }
                .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
                    right: 0.75rem;
                    color: #6c757d;
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
                    padding: 0.75rem 0;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-dropdown-panel
                    .p-dropdown-items
                    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    color: #343a40;
                    background: #ffffff;
                    font-weight: 700;
                }
                .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    background: transparent;
                }

                .p-input-filled .p-dropdown {
                    background: #e9ecef;
                }
                .p-input-filled .p-dropdown:not(.p-disabled):hover {
                    background-color: #e9ecef;
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
                    background: #f8f9fa;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-editor-container .p-editor-toolbar.ql-snow {
                    border: 1px solid #dee2e6;
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
                    stroke: #6c757d;
                }
                .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
                    fill: #6c757d;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label {
                    border: 0 none;
                    color: #6c757d;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover {
                    color: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-stroke {
                    stroke: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker
                    .ql-picker-label:hover
                    .ql-fill {
                    fill: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label {
                    color: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-stroke {
                    stroke: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-label
                    .ql-fill {
                    fill: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                    padding: 0.75rem 0;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item {
                    color: #495057;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded
                    .ql-picker-options
                    .ql-picker-item:hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-editor-container
                    .p-editor-toolbar.ql-snow
                    .ql-picker.ql-expanded:not(.ql-icon-picker)
                    .ql-picker-item {
                    padding: 0.75rem 1.25rem;
                }
                .p-editor-container .p-editor-content {
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-editor-container .p-editor-content.ql-snow {
                    border: 1px solid #dee2e6;
                }
                .p-editor-container .p-editor-content .ql-editor {
                    background: #ffffff;
                    color: #495057;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover,
                .p-editor-container .ql-snow.ql-toolbar button:focus {
                    color: #495057;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    button:focus
                    .ql-stroke {
                    stroke: #495057;
                }
                .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
                .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
                    fill: #495057;
                }
                .p-editor-container .ql-snow.ql-toolbar button.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-label.ql-active,
                .p-editor-container
                    .ql-snow.ql-toolbar
                    .ql-picker-item.ql-selected {
                    color: #14b8a6;
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
                    stroke: #14b8a6;
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
                    fill: #14b8a6;
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
                    color: #14b8a6;
                }

                .p-inputgroup-addon {
                    background: #e9ecef;
                    color: #6c757d;
                    border-top: 1px solid #ced4da;
                    border-left: 1px solid #ced4da;
                    border-bottom: 1px solid #ced4da;
                    padding: 0.75rem 0.75rem;
                    min-width: 3rem;
                }
                .p-inputgroup-addon:last-child {
                    border-right: 1px solid #ced4da;
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
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                }

                .p-inputgroup .p-float-label:first-child input {
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                }

                .p-inputgroup-addon:last-child,
                .p-inputgroup button:last-child,
                .p-inputgroup input:last-child,
                .p-inputgroup > .p-inputwrapper:last-child,
                .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                .p-inputgroup .p-float-label:last-child input {
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                .p-fluid .p-inputgroup .p-button {
                    width: auto;
                }
                .p-fluid .p-inputgroup .p-button.p-button-icon-only {
                    width: 3rem;
                }

                .p-inputnumber.p-invalid.p-component > .p-inputtext {
                    border-color: #e24c4c;
                }

                .p-inputswitch {
                    width: 3rem;
                    height: 1.75rem;
                }
                .p-inputswitch .p-inputswitch-slider {
                    background: #ced4da;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 30px;
                }
                .p-inputswitch .p-inputswitch-slider:before {
                    background: #ffffff;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
                    background: #b6bfc8;
                }
                .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
                    background: #14b8a6;
                }
                .p-inputswitch.p-inputswitch-checked
                    .p-inputswitch-slider:before {
                    background: #ffffff;
                }
                .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
                    .p-inputswitch-slider {
                    background: #0d9488;
                }
                .p-inputswitch.p-invalid .p-inputswitch-slider {
                    border-color: #e24c4c;
                }

                .p-inputtext {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                    font-size: 1rem;
                    color: #495057;
                    background: #ffffff;
                    padding: 0.75rem 0.75rem;
                    border: 1px solid #ced4da;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    appearance: none;
                    border-radius: 6px;
                }
                .p-inputtext:enabled:hover {
                    border-color: #14b8a6;
                }
                .p-inputtext:enabled:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-inputtext.p-invalid.p-component {
                    border-color: #e24c4c;
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
                    color: #6c757d;
                    transition-duration: 0.2s;
                }

                .p-float-label > label.p-error {
                    color: #e24c4c;
                }

                .p-input-icon-left > i:first-of-type,
                .p-input-icon-left > svg:first-of-type,
                .p-input-icon-left > .p-input-prefix {
                    left: 0.75rem;
                    color: #6c757d;
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
                    color: #6c757d;
                }

                .p-input-icon-right > .p-inputtext {
                    padding-right: 2.5rem;
                }

                ::-webkit-input-placeholder {
                    color: #6c757d;
                }

                :-moz-placeholder {
                    color: #6c757d;
                }

                ::-moz-placeholder {
                    color: #6c757d;
                }

                :-ms-input-placeholder {
                    color: #6c757d;
                }

                .p-input-filled .p-inputtext {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-inputtext:enabled:hover {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-inputtext:enabled:focus {
                    background-color: #ffffff;
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
                    background: #ffffff;
                    color: #495057;
                    border: 1px solid #ced4da;
                    border-radius: 6px;
                }
                .p-listbox .p-listbox-header {
                    padding: 0.75rem 1.25rem;
                    border-bottom: 1px solid #dee2e6;
                    color: #343a40;
                    background: #f8f9fa;
                    margin: 0;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-listbox .p-listbox-header .p-listbox-filter {
                    padding-right: 1.75rem;
                }
                .p-listbox .p-listbox-header .p-listbox-filter-icon {
                    right: 0.75rem;
                    color: #6c757d;
                }
                .p-listbox .p-listbox-list {
                    padding: 0.75rem 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    color: #495057;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-listbox .p-listbox-list .p-listbox-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-listbox .p-listbox-list .p-listbox-item-group {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    color: #343a40;
                    background: #ffffff;
                    font-weight: 700;
                }
                .p-listbox .p-listbox-list .p-listbox-empty-message {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    background: transparent;
                }
                .p-listbox:not(.p-disabled)
                    .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-listbox.p-invalid {
                    border-color: #e24c4c;
                }

                .p-mention-panel {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-mention-panel .p-mention-items {
                    padding: 0.75rem 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-mention-panel .p-mention-items .p-mention-item:hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }

                .p-multiselect {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-multiselect:not(.p-disabled):hover {
                    border-color: #14b8a6;
                }
                .p-multiselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-multiselect.p-multiselect-clearable .p-multiselect-label {
                    padding-right: 1.75rem;
                }
                .p-multiselect .p-multiselect-label {
                    padding: 0.75rem 0.75rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-multiselect .p-multiselect-label.p-placeholder {
                    color: #6c757d;
                }
                .p-multiselect.p-multiselect-chip .p-multiselect-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #dee2e6;
                    color: #495057;
                    border-radius: 16px;
                }
                .p-multiselect.p-multiselect-chip
                    .p-multiselect-token
                    .p-multiselect-token-icon {
                    margin-left: 0.5rem;
                }
                .p-multiselect .p-multiselect-trigger {
                    background: transparent;
                    color: #6c757d;
                    width: 3rem;
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                .p-multiselect .p-multiselect-clear-icon {
                    color: #6c757d;
                    right: 3rem;
                }
                .p-multiselect.p-invalid.p-component {
                    border-color: #e24c4c;
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
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-multiselect-panel .p-multiselect-header {
                    padding: 0.75rem 1.25rem;
                    border-bottom: 1px solid #dee2e6;
                    color: #343a40;
                    background: #f8f9fa;
                    margin: 0;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
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
                    color: #6c757d;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-multiselect-panel
                    .p-multiselect-header
                    .p-multiselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-multiselect-panel .p-multiselect-items {
                    padding: 0.75rem 0;
                }
                .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
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
                    padding: 0.75rem 1.25rem;
                    color: #343a40;
                    background: #ffffff;
                    font-weight: 700;
                }
                .p-multiselect-panel
                    .p-multiselect-items
                    .p-multiselect-empty-message {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    background: transparent;
                }

                .p-input-filled .p-multiselect {
                    background: #e9ecef;
                }
                .p-input-filled .p-multiselect:not(.p-disabled):hover {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-password.p-invalid.p-component > .p-inputtext {
                    border-color: #e24c4c;
                }

                .p-password-panel {
                    padding: 1.25rem;
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                }
                .p-password-panel .p-password-meter {
                    margin-bottom: 0.5rem;
                    background: #dee2e6;
                }
                .p-password-panel .p-password-meter .p-password-strength.weak {
                    background: #ea5455;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.medium {
                    background: #ff9f42;
                }
                .p-password-panel
                    .p-password-meter
                    .p-password-strength.strong {
                    background: #29c76f;
                }

                .p-radiobutton {
                    width: 22px;
                    height: 22px;
                }
                .p-radiobutton .p-radiobutton-box {
                    border: 2px solid #ced4da;
                    background: #ffffff;
                    width: 22px;
                    height: 22px;
                    color: #495057;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    border-color: #14b8a6;
                }
                .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
                    width: 12px;
                    height: 12px;
                    transition-duration: 0.2s;
                    background-color: #ffffff;
                }
                .p-radiobutton .p-radiobutton-box.p-highlight {
                    border-color: #14b8a6;
                    background: #14b8a6;
                }
                .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    border-color: #0f766e;
                    background: #0f766e;
                    color: #ffffff;
                }
                .p-radiobutton.p-invalid > .p-radiobutton-box {
                    border-color: #e24c4c;
                }
                .p-radiobutton:focus {
                    outline: 0 none;
                }

                .p-input-filled .p-radiobutton .p-radiobutton-box {
                    background-color: #e9ecef;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box:not(.p-disabled):hover {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
                    background: #14b8a6;
                }
                .p-input-filled
                    .p-radiobutton
                    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                    background: #0f766e;
                }

                .p-rating {
                    gap: 0.5rem;
                }
                .p-rating .p-rating-item .p-rating-icon {
                    color: #495057;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    font-size: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-icon {
                    width: 1.143rem;
                    height: 1.143rem;
                }
                .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
                    color: #ea5455;
                }
                .p-rating .p-rating-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
                    color: #14b8a6;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon {
                    color: #14b8a6;
                }
                .p-rating:not(.p-disabled):not(.p-readonly)
                    .p-rating-item:hover
                    .p-rating-icon.p-rating-cancel {
                    color: #e73d3e;
                }

                .p-selectbutton .p-button {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    color: #495057;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-selectbutton .p-button .p-button-icon-left,
                .p-selectbutton .p-button .p-button-icon-right {
                    color: #6c757d;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover {
                    background: #e9ecef;
                    border-color: #ced4da;
                    color: #495057;
                }
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-left,
                .p-selectbutton
                    .p-button:not(.p-disabled):not(.p-highlight):hover
                    .p-button-icon-right {
                    color: #343a40;
                }
                .p-selectbutton .p-button.p-highlight {
                    background: #14b8a6;
                    border-color: #14b8a6;
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight .p-button-icon-left,
                .p-selectbutton .p-button.p-highlight .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight:hover {
                    background: #0d9488;
                    border-color: #0d9488;
                    color: #ffffff;
                }
                .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
                .p-selectbutton
                    .p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-selectbutton.p-invalid > .p-button {
                    border-color: #e24c4c;
                }

                .p-slider {
                    background: #dee2e6;
                    border: 0 none;
                    border-radius: 6px;
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
                    border: 2px solid #14b8a6;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-slider .p-slider-handle:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-slider .p-slider-range {
                    background: #14b8a6;
                }
                .p-slider:not(.p-disabled) .p-slider-handle:hover {
                    background: #14b8a6;
                    border-color: #14b8a6;
                }

                .p-treeselect {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-treeselect:not(.p-disabled):hover {
                    border-color: #14b8a6;
                }
                .p-treeselect:not(.p-disabled).p-focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: #14b8a6;
                }
                .p-treeselect .p-treeselect-label {
                    padding: 0.75rem 0.75rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-treeselect .p-treeselect-label.p-placeholder {
                    color: #6c757d;
                }
                .p-treeselect.p-treeselect-chip .p-treeselect-token {
                    padding: 0.375rem 0.75rem;
                    margin-right: 0.5rem;
                    background: #dee2e6;
                    color: #495057;
                    border-radius: 16px;
                }
                .p-treeselect .p-treeselect-trigger {
                    background: transparent;
                    color: #6c757d;
                    width: 3rem;
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                .p-treeselect.p-invalid.p-component {
                    border-color: #e24c4c;
                }

                .p-inputwrapper-filled.p-treeselect.p-treeselect-chip
                    .p-treeselect-label {
                    padding: 0.375rem 0.75rem;
                }

                .p-treeselect-panel {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-treeselect-panel .p-treeselect-header {
                    padding: 0.75rem 1.25rem;
                    border-bottom: 1px solid #dee2e6;
                    color: #343a40;
                    background: #f8f9fa;
                    margin: 0;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
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
                    color: #6c757d;
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
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-treeselect-panel
                    .p-treeselect-header
                    .p-treeselect-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
                    border: 0 none;
                }
                .p-treeselect-panel
                    .p-treeselect-items-wrapper
                    .p-treeselect-empty-message {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    background: transparent;
                }

                .p-input-filled .p-treeselect {
                    background: #e9ecef;
                }
                .p-input-filled .p-treeselect:not(.p-disabled):hover {
                    background-color: #e9ecef;
                }
                .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
                    background-color: #ffffff;
                }

                .p-togglebutton.p-button {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    color: #495057;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-togglebutton.p-button .p-button-icon-left,
                .p-togglebutton.p-button .p-button-icon-right {
                    color: #6c757d;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover {
                    background: #e9ecef;
                    border-color: #ced4da;
                    color: #495057;
                }
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-left,
                .p-togglebutton.p-button:not(.p-disabled):not(
                        .p-highlight
                    ):hover
                    .p-button-icon-right {
                    color: #343a40;
                }
                .p-togglebutton.p-button.p-highlight {
                    background: #14b8a6;
                    border-color: #14b8a6;
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight:hover {
                    background: #0d9488;
                    border-color: #0d9488;
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
                .p-togglebutton.p-button.p-highlight:hover
                    .p-button-icon-right {
                    color: #ffffff;
                }
                .p-togglebutton.p-button.p-invalid > .p-button {
                    border-color: #e24c4c;
                }

                .p-button {
                    color: #ffffff;
                    background: #14b8a6;
                    border: 1px solid #14b8a6;
                    padding: 0.75rem 1.25rem;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-button:enabled:hover,
                .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #0d9488;
                    color: #ffffff;
                    border-color: #0d9488;
                }
                .p-button:enabled:active,
                .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #0f766e;
                    color: #ffffff;
                    border-color: #0f766e;
                }
                .p-button.p-button-outlined {
                    background-color: transparent;
                    color: #14b8a6;
                    border: 1px solid;
                }
                .p-button.p-button-outlined:enabled:hover,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(20, 184, 166, 0.04);
                    color: #14b8a6;
                    border: 1px solid;
                }
                .p-button.p-button-outlined:enabled:active,
                .p-button.p-button-outlined:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(20, 184, 166, 0.16);
                    color: #14b8a6;
                    border: 1px solid;
                }
                .p-button.p-button-outlined.p-button-plain {
                    color: #6c757d;
                    border-color: #6c757d;
                }
                .p-button.p-button-outlined.p-button-plain:enabled:hover,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):hover {
                    background: #e9ecef;
                    color: #6c757d;
                }
                .p-button.p-button-outlined.p-button-plain:enabled:active,
                .p-button.p-button-outlined.p-button-plain:not(button):not(
                        a
                    ):not(.p-disabled):active {
                    background: #dee2e6;
                    color: #6c757d;
                }
                .p-button.p-button-text {
                    background-color: transparent;
                    color: #14b8a6;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:hover,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: rgba(20, 184, 166, 0.04);
                    color: #14b8a6;
                    border-color: transparent;
                }
                .p-button.p-button-text:enabled:active,
                .p-button.p-button-text:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: rgba(20, 184, 166, 0.16);
                    color: #14b8a6;
                    border-color: transparent;
                }
                .p-button.p-button-text.p-button-plain {
                    color: #6c757d;
                }
                .p-button.p-button-text.p-button-plain:enabled:hover,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: #e9ecef;
                    color: #6c757d;
                }
                .p-button.p-button-text.p-button-plain:enabled:active,
                .p-button.p-button-text.p-button-plain:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: #dee2e6;
                    color: #6c757d;
                }
                .p-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    color: #14b8a6;
                    background-color: #ffffff;
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
                    width: 3rem;
                    padding: 0.75rem 0;
                }
                .p-button.p-button-icon-only .p-button-icon-left,
                .p-button.p-button-icon-only .p-button-icon-right {
                    margin: 0;
                }
                .p-button.p-button-icon-only.p-button-rounded {
                    border-radius: 50%;
                    height: 3rem;
                }
                .p-button.p-button-sm {
                    font-size: 0.875rem;
                    padding: 0.65625rem 1.09375rem;
                }
                .p-button.p-button-sm .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-button.p-button-lg {
                    font-size: 1.25rem;
                    padding: 0.9375rem 1.5625rem;
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
                    width: 3rem;
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
                    background: #64748b;
                    border: 1px solid #64748b;
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
                    background: #475569;
                    color: #ffffff;
                    border-color: #475569;
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
                    box-shadow: 0 0 0 0.2rem #e2e8f0;
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
                    background: #334155;
                    color: #ffffff;
                    border-color: #334155;
                }
                .p-button.p-button-secondary.p-button-outlined,
                .p-buttonset.p-button-secondary > .p-button.p-button-outlined,
                .p-splitbutton.p-button-secondary > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-secondary.p-button-outlined {
                    background-color: transparent;
                    color: #64748b;
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
                    background: rgba(100, 116, 139, 0.04);
                    color: #64748b;
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
                    background: rgba(100, 116, 139, 0.16);
                    color: #64748b;
                    border: 1px solid;
                }
                .p-button.p-button-secondary.p-button-text,
                .p-buttonset.p-button-secondary > .p-button.p-button-text,
                .p-splitbutton.p-button-secondary > .p-button.p-button-text,
                .p-fileupload-choose.p-button-secondary.p-button-text {
                    background-color: transparent;
                    color: #64748b;
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
                    background: rgba(100, 116, 139, 0.04);
                    border-color: transparent;
                    color: #64748b;
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
                    background: rgba(100, 116, 139, 0.16);
                    border-color: transparent;
                    color: #64748b;
                }

                .p-button.p-button-info,
                .p-buttonset.p-button-info > .p-button,
                .p-splitbutton.p-button-info > .p-button,
                .p-fileupload-choose.p-button-info {
                    color: #ffffff;
                    background: #3b82f6;
                    border: 1px solid #3b82f6;
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
                    background: #2563eb;
                    color: #ffffff;
                    border-color: #2563eb;
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
                    box-shadow: 0 0 0 0.2rem #bfdbfe;
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
                    background: #1d4ed8;
                    color: #ffffff;
                    border-color: #1d4ed8;
                }
                .p-button.p-button-info.p-button-outlined,
                .p-buttonset.p-button-info > .p-button.p-button-outlined,
                .p-splitbutton.p-button-info > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-info.p-button-outlined {
                    background-color: transparent;
                    color: #3b82f6;
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
                    background: rgba(59, 130, 246, 0.04);
                    color: #3b82f6;
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
                    background: rgba(59, 130, 246, 0.16);
                    color: #3b82f6;
                    border: 1px solid;
                }
                .p-button.p-button-info.p-button-text,
                .p-buttonset.p-button-info > .p-button.p-button-text,
                .p-splitbutton.p-button-info > .p-button.p-button-text,
                .p-fileupload-choose.p-button-info.p-button-text {
                    background-color: transparent;
                    color: #3b82f6;
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
                    background: rgba(59, 130, 246, 0.04);
                    border-color: transparent;
                    color: #3b82f6;
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
                    background: rgba(59, 130, 246, 0.16);
                    border-color: transparent;
                    color: #3b82f6;
                }

                .p-button.p-button-success,
                .p-buttonset.p-button-success > .p-button,
                .p-splitbutton.p-button-success > .p-button,
                .p-fileupload-choose.p-button-success {
                    color: #ffffff;
                    background: #22c55e;
                    border: 1px solid #22c55e;
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
                    background: #16a34a;
                    color: #ffffff;
                    border-color: #16a34a;
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
                    box-shadow: 0 0 0 0.2rem #bbf7d0;
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
                    background: #15803d;
                    color: #ffffff;
                    border-color: #15803d;
                }
                .p-button.p-button-success.p-button-outlined,
                .p-buttonset.p-button-success > .p-button.p-button-outlined,
                .p-splitbutton.p-button-success > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-success.p-button-outlined {
                    background-color: transparent;
                    color: #22c55e;
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
                    background: rgba(34, 197, 94, 0.04);
                    color: #22c55e;
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
                    background: rgba(34, 197, 94, 0.16);
                    color: #22c55e;
                    border: 1px solid;
                }
                .p-button.p-button-success.p-button-text,
                .p-buttonset.p-button-success > .p-button.p-button-text,
                .p-splitbutton.p-button-success > .p-button.p-button-text,
                .p-fileupload-choose.p-button-success.p-button-text {
                    background-color: transparent;
                    color: #22c55e;
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
                    background: rgba(34, 197, 94, 0.04);
                    border-color: transparent;
                    color: #22c55e;
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
                    background: rgba(34, 197, 94, 0.16);
                    border-color: transparent;
                    color: #22c55e;
                }

                .p-button.p-button-warning,
                .p-buttonset.p-button-warning > .p-button,
                .p-splitbutton.p-button-warning > .p-button,
                .p-fileupload-choose.p-button-warning {
                    color: #ffffff;
                    background: #f59e0b;
                    border: 1px solid #f59e0b;
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
                    background: #d97706;
                    color: #ffffff;
                    border-color: #d97706;
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
                    box-shadow: 0 0 0 0.2rem #fde68a;
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
                    background: #b45309;
                    color: #ffffff;
                    border-color: #b45309;
                }
                .p-button.p-button-warning.p-button-outlined,
                .p-buttonset.p-button-warning > .p-button.p-button-outlined,
                .p-splitbutton.p-button-warning > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-warning.p-button-outlined {
                    background-color: transparent;
                    color: #f59e0b;
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
                    background: rgba(245, 158, 11, 0.04);
                    color: #f59e0b;
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
                    background: rgba(245, 158, 11, 0.16);
                    color: #f59e0b;
                    border: 1px solid;
                }
                .p-button.p-button-warning.p-button-text,
                .p-buttonset.p-button-warning > .p-button.p-button-text,
                .p-splitbutton.p-button-warning > .p-button.p-button-text,
                .p-fileupload-choose.p-button-warning.p-button-text {
                    background-color: transparent;
                    color: #f59e0b;
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
                    background: rgba(245, 158, 11, 0.04);
                    border-color: transparent;
                    color: #f59e0b;
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
                    background: rgba(245, 158, 11, 0.16);
                    border-color: transparent;
                    color: #f59e0b;
                }

                .p-button.p-button-help,
                .p-buttonset.p-button-help > .p-button,
                .p-splitbutton.p-button-help > .p-button,
                .p-fileupload-choose.p-button-help {
                    color: #ffffff;
                    background: #a855f7;
                    border: 1px solid #a855f7;
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
                    background: #9333ea;
                    color: #ffffff;
                    border-color: #9333ea;
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
                    box-shadow: 0 0 0 0.2rem #e9d5ff;
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
                    background: #7e22ce;
                    color: #ffffff;
                    border-color: #7e22ce;
                }
                .p-button.p-button-help.p-button-outlined,
                .p-buttonset.p-button-help > .p-button.p-button-outlined,
                .p-splitbutton.p-button-help > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-help.p-button-outlined {
                    background-color: transparent;
                    color: #a855f7;
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
                    background: rgba(168, 85, 247, 0.04);
                    color: #a855f7;
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
                    background: rgba(168, 85, 247, 0.16);
                    color: #a855f7;
                    border: 1px solid;
                }
                .p-button.p-button-help.p-button-text,
                .p-buttonset.p-button-help > .p-button.p-button-text,
                .p-splitbutton.p-button-help > .p-button.p-button-text,
                .p-fileupload-choose.p-button-help.p-button-text {
                    background-color: transparent;
                    color: #a855f7;
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
                    background: rgba(168, 85, 247, 0.04);
                    border-color: transparent;
                    color: #a855f7;
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
                    background: rgba(168, 85, 247, 0.16);
                    border-color: transparent;
                    color: #a855f7;
                }

                .p-button.p-button-danger,
                .p-buttonset.p-button-danger > .p-button,
                .p-splitbutton.p-button-danger > .p-button,
                .p-fileupload-choose.p-button-danger {
                    color: #ffffff;
                    background: #ef4444;
                    border: 1px solid #ef4444;
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
                    background: #dc2626;
                    color: #ffffff;
                    border-color: #dc2626;
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
                    box-shadow: 0 0 0 0.2rem #fecaca;
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
                    background: #b91c1c;
                    color: #ffffff;
                    border-color: #b91c1c;
                }
                .p-button.p-button-danger.p-button-outlined,
                .p-buttonset.p-button-danger > .p-button.p-button-outlined,
                .p-splitbutton.p-button-danger > .p-button.p-button-outlined,
                .p-fileupload-choose.p-button-danger.p-button-outlined {
                    background-color: transparent;
                    color: #ef4444;
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
                    background: rgba(239, 68, 68, 0.04);
                    color: #ef4444;
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
                    background: rgba(239, 68, 68, 0.16);
                    color: #ef4444;
                    border: 1px solid;
                }
                .p-button.p-button-danger.p-button-text,
                .p-buttonset.p-button-danger > .p-button.p-button-text,
                .p-splitbutton.p-button-danger > .p-button.p-button-text,
                .p-fileupload-choose.p-button-danger.p-button-text {
                    background-color: transparent;
                    color: #ef4444;
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
                    background: rgba(239, 68, 68, 0.04);
                    border-color: transparent;
                    color: #ef4444;
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
                    background: rgba(239, 68, 68, 0.16);
                    border-color: transparent;
                    color: #ef4444;
                }

                .p-button.p-button-link {
                    color: #0f766e;
                    background: transparent;
                    border: transparent;
                }
                .p-button.p-button-link:enabled:hover,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):hover {
                    background: transparent;
                    color: #0f766e;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    border-color: transparent;
                }
                .p-button.p-button-link:enabled:active,
                .p-button.p-button-link:not(button):not(a):not(
                        .p-disabled
                    ):active {
                    background: transparent;
                    color: #0f766e;
                    border-color: transparent;
                }

                .p-splitbutton {
                    border-radius: 6px;
                }
                .p-splitbutton.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #14b8a6;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(20, 184, 166, 0.04);
                    color: #14b8a6;
                }
                .p-splitbutton.p-button-outlined > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(20, 184, 166, 0.16);
                    color: #14b8a6;
                }
                .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
                    color: #6c757d;
                    border-color: #6c757d;
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #e9ecef;
                    color: #6c757d;
                }
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-outlined.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #dee2e6;
                    color: #6c757d;
                }
                .p-splitbutton.p-button-text > .p-button {
                    background-color: transparent;
                    color: #14b8a6;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:hover,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(20, 184, 166, 0.04);
                    color: #14b8a6;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text > .p-button:enabled:active,
                .p-splitbutton.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(20, 184, 166, 0.16);
                    color: #14b8a6;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-text.p-button-plain > .p-button {
                    color: #6c757d;
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: #e9ecef;
                    color: #6c757d;
                }
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-text.p-button-plain
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: #dee2e6;
                    color: #6c757d;
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
                    padding: 0.65625rem 1.09375rem;
                }
                .p-splitbutton.p-button-sm > .p-button .p-button-icon {
                    font-size: 0.875rem;
                }
                .p-splitbutton.p-button-lg > .p-button {
                    font-size: 1.25rem;
                    padding: 0.9375rem 1.5625rem;
                }
                .p-splitbutton.p-button-lg > .p-button .p-button-icon {
                    font-size: 1.25rem;
                }

                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button {
                    background-color: transparent;
                    color: #64748b;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(100, 116, 139, 0.04);
                    color: #64748b;
                }
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(100, 116, 139, 0.16);
                    color: #64748b;
                }
                .p-splitbutton.p-button-secondary.p-button-text > .p-button {
                    background-color: transparent;
                    color: #64748b;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(100, 116, 139, 0.04);
                    border-color: transparent;
                    color: #64748b;
                }
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-secondary.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(100, 116, 139, 0.16);
                    border-color: transparent;
                    color: #64748b;
                }

                .p-splitbutton.p-button-info.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #3b82f6;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(59, 130, 246, 0.04);
                    color: #3b82f6;
                }
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(59, 130, 246, 0.16);
                    color: #3b82f6;
                }
                .p-splitbutton.p-button-info.p-button-text > .p-button {
                    background-color: transparent;
                    color: #3b82f6;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(59, 130, 246, 0.04);
                    border-color: transparent;
                    color: #3b82f6;
                }
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-info.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(59, 130, 246, 0.16);
                    border-color: transparent;
                    color: #3b82f6;
                }

                .p-splitbutton.p-button-success.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #22c55e;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(34, 197, 94, 0.04);
                    color: #22c55e;
                }
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(34, 197, 94, 0.16);
                    color: #22c55e;
                }
                .p-splitbutton.p-button-success.p-button-text > .p-button {
                    background-color: transparent;
                    color: #22c55e;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(34, 197, 94, 0.04);
                    border-color: transparent;
                    color: #22c55e;
                }
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-success.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(34, 197, 94, 0.16);
                    border-color: transparent;
                    color: #22c55e;
                }

                .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #f59e0b;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(245, 158, 11, 0.04);
                    color: #f59e0b;
                }
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(245, 158, 11, 0.16);
                    color: #f59e0b;
                }
                .p-splitbutton.p-button-warning.p-button-text > .p-button {
                    background-color: transparent;
                    color: #f59e0b;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(245, 158, 11, 0.04);
                    border-color: transparent;
                    color: #f59e0b;
                }
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-warning.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(245, 158, 11, 0.16);
                    border-color: transparent;
                    color: #f59e0b;
                }

                .p-splitbutton.p-button-help.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #a855f7;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(168, 85, 247, 0.04);
                    color: #a855f7;
                }
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(168, 85, 247, 0.16);
                    color: #a855f7;
                }
                .p-splitbutton.p-button-help.p-button-text > .p-button {
                    background-color: transparent;
                    color: #a855f7;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(168, 85, 247, 0.04);
                    border-color: transparent;
                    color: #a855f7;
                }
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-help.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(168, 85, 247, 0.16);
                    border-color: transparent;
                    color: #a855f7;
                }

                .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
                    background-color: transparent;
                    color: #ef4444;
                    border: 1px solid;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(239, 68, 68, 0.04);
                    color: #ef4444;
                }
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-outlined
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(239, 68, 68, 0.16);
                    color: #ef4444;
                }
                .p-splitbutton.p-button-danger.p-button-text > .p-button {
                    background-color: transparent;
                    color: #ef4444;
                    border-color: transparent;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:hover,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):hover {
                    background: rgba(239, 68, 68, 0.04);
                    border-color: transparent;
                    color: #ef4444;
                }
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:enabled:active,
                .p-splitbutton.p-button-danger.p-button-text
                    > .p-button:not(button):not(a):not(.p-disabled):active {
                    background: rgba(239, 68, 68, 0.16);
                    border-color: transparent;
                    color: #ef4444;
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
                    background: #495057;
                    color: #fff;
                }
                .p-speeddial-action:hover {
                    background: #022354;
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
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin: 0.5rem;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
                .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-carousel .p-carousel-content .p-carousel-prev:focus,
                .p-carousel .p-carousel-content .p-carousel-next:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    background-color: #ced4da;
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
                    background: #adb5bd;
                }
                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background: #f0fdfa;
                    color: #0f766e;
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
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                }
                .p-datatable .p-datatable-footer {
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                }
                .p-datatable .p-datatable-thead > tr > th {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    font-weight: 700;
                    color: #343a40;
                    background: #f8f9fa;
                    transition: box-shadow 0.2s;
                }
                .p-datatable .p-datatable-tfoot > tr > td {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    font-weight: 700;
                    color: #343a40;
                    background: #f8f9fa;
                }
                .p-datatable .p-sortable-column .p-sortable-column-icon {
                    color: #343a40;
                    margin-left: 0.5rem;
                }
                .p-datatable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #0f766e;
                    background: #f0fdfa;
                    margin-left: 0.5rem;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover {
                    background: #e9ecef;
                    color: #343a40;
                }
                .p-datatable
                    .p-sortable-column:not(.p-highlight):not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #343a40;
                }
                .p-datatable .p-sortable-column.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-datatable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #0f766e;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-datatable
                    .p-sortable-column.p-highlight:not(
                        .p-sortable-disabled
                    ):hover
                    .p-sortable-column-icon {
                    color: #0f766e;
                }
                .p-datatable .p-sortable-column:focus {
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                    outline: 0 none;
                }
                .p-datatable .p-datatable-tbody > tr {
                    background: #ffffff;
                    color: #495057;
                    transition: box-shadow 0.2s;
                }
                .p-datatable .p-datatable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
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
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
                    margin-right: 0.5rem;
                }
                .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
                    font-weight: 700;
                }
                .p-datatable .p-datatable-tbody > tr > td.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-datatable .p-datatable-tbody > tr.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #f0fdfa;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #f0fdfa;
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-datatable.p-datatable-selectable
                    .p-datatable-tbody
                    > tr.p-selectable-row:focus {
                    outline: 0.15rem solid #99f6e4;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:not(.p-highlight):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-datatable.p-datatable-selectable-cell
                    .p-datatable-tbody
                    > tr.p-selectable-row
                    > td.p-selectable-cell:focus {
                    outline: 0.15rem solid #99f6e4;
                    outline-offset: -0.15rem;
                }
                .p-datatable.p-datatable-hoverable-rows
                    .p-datatable-tbody
                    > tr:not(.p-highlight):not(
                        .p-datatable-emptymessage
                    ):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-datatable .p-column-resizer-helper {
                    background: #14b8a6;
                }
                .p-datatable .p-datatable-scrollable-header,
                .p-datatable .p-datatable-scrollable-footer {
                    background: #f8f9fa;
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
                    background-color: #f8f9fa;
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
                    background: #fcfcfc;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler {
                    color: #0f766e;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd.p-highlight
                    .p-row-toggler:hover {
                    color: #0f766e;
                }
                .p-datatable.p-datatable-striped
                    .p-datatable-tbody
                    > tr.p-row-odd
                    + .p-row-expanded {
                    background: #fcfcfc;
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
                    background: rgba(20, 184, 166, 0.16);
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
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                }
                .p-dataview .p-dataview-content {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    padding: 0;
                }
                .p-dataview.p-dataview-list
                    .p-dataview-content
                    > .p-grid
                    > div {
                    border: solid #dee2e6;
                    border-width: 0 0 1px 0;
                }
                .p-dataview .p-dataview-footer {
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
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
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                }
                .p-datascroller .p-datascroller-content {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    padding: 0;
                }
                .p-datascroller.p-datascroller-inline
                    .p-datascroller-list
                    > li {
                    border: solid #dee2e6;
                    border-width: 0 0 1px 0;
                }
                .p-datascroller .p-datascroller-footer {
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                    border-bottom-left-radius: 6px;
                    border-bottom-right-radius: 6px;
                }

                .p-column-filter-row .p-column-filter-menu-button,
                .p-column-filter-row .p-column-filter-clear-button {
                    margin-left: 0.5rem;
                }

                .p-column-filter-menu-button {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-menu-button:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-open,
                .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
                    background: #e9ecef;
                    color: #343a40;
                }
                .p-column-filter-menu-button.p-column-filter-menu-button-active,
                .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-column-filter-menu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }

                .p-column-filter-clear-button {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-column-filter-clear-button:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-column-filter-clear-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }

                .p-column-filter-overlay {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    min-width: 12.5rem;
                }
                .p-column-filter-overlay .p-column-filter-row-items {
                    padding: 0.75rem 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 0;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:not(.p-highlight):not(
                        .p-disabled
                    ):hover {
                    color: #495057;
                    background: #e9ecef;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-row-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-column-filter-overlay
                    .p-column-filter-row-items
                    .p-column-filter-separator {
                    border-top: 1px solid #dee2e6;
                    margin: 0.25rem 0;
                }

                .p-column-filter-overlay-menu .p-column-filter-operator {
                    padding: 0.75rem 1.25rem;
                    border-bottom: 1px solid #dee2e6;
                    color: #343a40;
                    background: #f8f9fa;
                    margin: 0;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-column-filter-overlay-menu .p-column-filter-constraint {
                    padding: 1.25rem;
                    border-bottom: 1px solid #dee2e6;
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
                    padding: 0.75rem 1.25rem;
                }
                .p-column-filter-overlay-menu .p-column-filter-buttonbar {
                    padding: 1.25rem;
                }

                .fc {
                    /* FullCalendar 4 */
                    /* FullCalendar 5 */
                }
                .fc.fc-unthemed .fc-view-container th {
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    color: #343a40;
                }
                .fc.fc-unthemed .fc-view-container td.fc-widget-content {
                    border: 1px solid #dee2e6;
                    color: #495057;
                }
                .fc.fc-unthemed .fc-view-container td.fc-head-container {
                    border: 1px solid #dee2e6;
                }
                .fc.fc-unthemed .fc-view-container .fc-view {
                    background: #ffffff;
                }
                .fc.fc-unthemed .fc-view-container .fc-row {
                    border-right: 1px solid #dee2e6;
                }
                .fc.fc-unthemed .fc-view-container .fc-event {
                    background: #0d9488;
                    border: 1px solid #0d9488;
                    color: #ffffff;
                }
                .fc.fc-unthemed .fc-view-container .fc-divider {
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button {
                    color: #ffffff;
                    background: #14b8a6;
                    border: 1px solid #14b8a6;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
                    background: #0d9488;
                    color: #ffffff;
                    border-color: #0d9488;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
                    background: #0f766e;
                    color: #ffffff;
                    border-color: #0f766e;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button,
                .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
                    background: #ffffff;
                    border: 1px solid #ced4da;
                    color: #495057;
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
                    background: #e9ecef;
                    border-color: #ced4da;
                    color: #495057;
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
                    background: #14b8a6;
                    border-color: #14b8a6;
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
                    background: #0d9488;
                    border-color: #0d9488;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    z-index: 1;
                }
                .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {
                    border-radius: 0;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:first-child {
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .fc.fc-unthemed
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:last-child {
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {
                    border-color: #dee2e6;
                }
                .fc.fc-theme-standard .fc-view-harness th {
                    background: #f8f9fa;
                    border-color: #dee2e6;
                    color: #343a40;
                }
                .fc.fc-theme-standard .fc-view-harness td {
                    color: #495057;
                    border-color: #dee2e6;
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
                    border: 1px solid #dee2e6;
                    padding: 1.25rem;
                    background: #f8f9fa;
                    color: #343a40;
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
                    color: #6c757d;
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
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-header
                    .fc-popover-close:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-popover
                    .fc-popover-body {
                    padding: 1.25rem;
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    border-top: 0 none;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-block-event {
                    color: #ffffff;
                    background: #0d9488;
                    border-color: #0d9488;
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
                    background: #0d9488;
                    border-color: #0d9488;
                }
                .fc.fc-theme-standard
                    .fc-view-harness
                    .fc-event.fc-daygrid-dot-event:hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
                    background: #f8f9fa;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button {
                    color: #ffffff;
                    background: #14b8a6;
                    border: 1px solid #14b8a6;
                    font-size: 1rem;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                    border-radius: 6px;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
                    background: #0d9488;
                    color: #ffffff;
                    border-color: #0d9488;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
                    background: #0f766e;
                    color: #ffffff;
                    border-color: #0f766e;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button:enabled:active:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
                    opacity: 0.6;
                    color: #ffffff;
                    background: #14b8a6;
                    border: 1px solid #14b8a6;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    border: 1px solid #ced4da;
                    color: #495057;
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
                    background: #e9ecef;
                    border-color: #ced4da;
                    color: #495057;
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
                    background: #14b8a6;
                    border-color: #14b8a6;
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
                    background: #0d9488;
                    border-color: #0d9488;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                    z-index: 1;
                }
                .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {
                    border-radius: 0;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:first-child {
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .fc.fc-theme-standard
                    .fc-toolbar
                    .fc-button-group
                    .fc-button:last-child {
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                .fc.fc-theme-standard .fc-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }

                .p-orderlist .p-orderlist-controls {
                    padding: 1.25rem;
                }
                .p-orderlist .p-orderlist-controls .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-orderlist .p-orderlist-header {
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    padding: 1.25rem;
                    font-weight: 700;
                    border-bottom: 0 none;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-orderlist .p-orderlist-filter-container {
                    padding: 1.25rem;
                    background: #ffffff;
                    border: 1px solid #dee2e6;
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
                    color: #6c757d;
                }
                .p-orderlist .p-orderlist-list {
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    padding: 0.75rem 0;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item {
                    padding: 0.75rem 1.25rem;
                    margin: 0;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .p-orderlist
                    .p-orderlist-list
                    .p-orderlist-item:not(.p-highlight):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even) {
                    background: #fcfcfc;
                }
                .p-orderlist.p-orderlist-striped
                    .p-orderlist-list
                    .p-orderlist-item:nth-child(even):hover {
                    background: #e9ecef;
                }

                .p-organizationchart
                    .p-organizationchart-node-content.p-organizationchart-selectable-node:not(
                        .p-highlight
                    ):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-organizationchart
                    .p-organizationchart-node-content.p-highlight
                    .p-node-toggler
                    i {
                    color: #80eed5;
                }
                .p-organizationchart .p-organizationchart-line-down {
                    background: #dee2e6;
                }
                .p-organizationchart .p-organizationchart-line-left {
                    border-right: 1px solid #dee2e6;
                    border-color: #dee2e6;
                }
                .p-organizationchart .p-organizationchart-line-top {
                    border-top: 1px solid #dee2e6;
                    border-color: #dee2e6;
                }
                .p-organizationchart .p-organizationchart-node-content {
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }

                .p-paginator {
                    background: #ffffff;
                    color: #6c757d;
                    border: solid #e9ecef;
                    border-width: 0;
                    padding: 0.5rem 1rem;
                    border-radius: 6px;
                }
                .p-paginator .p-paginator-first,
                .p-paginator .p-paginator-prev,
                .p-paginator .p-paginator-next,
                .p-paginator .p-paginator-last {
                    background-color: transparent;
                    border: 0 none;
                    color: #6c757d;
                    min-width: 3rem;
                    height: 3rem;
                    margin: 0.143rem;
                    transition: box-shadow 0.2s;
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
                    background: #e9ecef;
                    border-color: transparent;
                    color: #343a40;
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
                    color: #6c757d;
                    min-width: 3rem;
                    height: 3rem;
                    margin: 0.143rem;
                    padding: 0 0.5rem;
                }
                .p-paginator .p-paginator-pages .p-paginator-page {
                    background-color: transparent;
                    border: 0 none;
                    color: #6c757d;
                    min-width: 3rem;
                    height: 3rem;
                    margin: 0.143rem;
                    transition: box-shadow 0.2s;
                    border-radius: 50%;
                }
                .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                    background: #f0fdfa;
                    border-color: #f0fdfa;
                    color: #0f766e;
                }
                .p-paginator
                    .p-paginator-pages
                    .p-paginator-page:not(.p-highlight):hover {
                    background: #e9ecef;
                    border-color: transparent;
                    color: #343a40;
                }

                .p-picklist .p-picklist-buttons {
                    padding: 1.25rem;
                }
                .p-picklist .p-picklist-buttons .p-button {
                    margin-bottom: 0.5rem;
                }
                .p-picklist .p-picklist-header {
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    padding: 1.25rem;
                    font-weight: 700;
                    border-bottom: 0 none;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-picklist .p-picklist-filter-container {
                    padding: 1.25rem;
                    background: #ffffff;
                    border: 1px solid #dee2e6;
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
                    color: #6c757d;
                }
                .p-picklist .p-picklist-list {
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    padding: 0.75rem 0;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-picklist .p-picklist-list .p-picklist-item {
                    padding: 0.75rem 1.25rem;
                    margin: 0;
                    border: 0 none;
                    color: #495057;
                    background: transparent;
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .p-picklist
                    .p-picklist-list
                    .p-picklist-item:not(.p-highlight):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-picklist .p-picklist-list .p-picklist-item:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
                    color: #0f766e;
                    background: #f0fdfa;
                }

                .p-tree {
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    padding: 1.25rem;
                    border-radius: 6px;
                }
                .p-tree .p-tree-container .p-treenode {
                    padding: 0.143rem;
                }
                .p-tree .p-tree-container .p-treenode .p-treenode-content {
                    border-radius: 6px;
                    transition: box-shadow 0.2s;
                    padding: 0.5rem;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler {
                    margin-right: 0.5rem;
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
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
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-tree-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content
                    .p-treenode-icon {
                    margin-right: 0.5rem;
                    color: #6c757d;
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
                    color: #495057;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
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
                    color: #0f766e;
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
                    color: #0f766e;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-selectable:not(
                        .p-highlight
                    ):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-tree
                    .p-tree-container
                    .p-treenode
                    .p-treenode-content.p-treenode-dragover {
                    background: #e9ecef;
                    color: #495057;
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
                    color: #6c757d;
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
                    background: #99f1dd;
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
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 1px 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                }
                .p-treetable .p-treetable-footer {
                    background: #f8f9fa;
                    color: #343a40;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                    font-weight: 700;
                }
                .p-treetable .p-treetable-thead > tr > th {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    font-weight: 700;
                    color: #343a40;
                    background: #f8f9fa;
                    transition: box-shadow 0.2s;
                }
                .p-treetable .p-treetable-tfoot > tr > td {
                    text-align: left;
                    padding: 1rem 1rem;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    font-weight: 700;
                    color: #343a40;
                    background: #f8f9fa;
                }
                .p-treetable .p-sortable-column {
                    outline-color: #99f6e4;
                }
                .p-treetable .p-sortable-column .p-sortable-column-icon {
                    color: #343a40;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column .p-sortable-column-badge {
                    border-radius: 50%;
                    height: 1.143rem;
                    min-width: 1.143rem;
                    line-height: 1.143rem;
                    color: #0f766e;
                    background: #f0fdfa;
                    margin-left: 0.5rem;
                }
                .p-treetable .p-sortable-column:not(.p-highlight):hover {
                    background: #e9ecef;
                    color: #343a40;
                }
                .p-treetable
                    .p-sortable-column:not(.p-highlight):hover
                    .p-sortable-column-icon {
                    color: #343a40;
                }
                .p-treetable .p-sortable-column.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-treetable
                    .p-sortable-column.p-highlight
                    .p-sortable-column-icon {
                    color: #0f766e;
                }
                .p-treetable .p-treetable-tbody > tr {
                    background: #ffffff;
                    color: #495057;
                    transition: box-shadow 0.2s;
                }
                .p-treetable .p-treetable-tbody > tr > td {
                    text-align: left;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 1px 0;
                    padding: 1rem 1rem;
                }
                .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
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
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr
                    > td
                    .p-treetable-toggler:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    color: #495057;
                }
                .p-treetable .p-treetable-tbody > tr:focus {
                    outline: 0.15rem solid #99f6e4;
                    outline-offset: -0.15rem;
                }
                .p-treetable .p-treetable-tbody > tr.p-highlight {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler {
                    color: #0f766e;
                }
                .p-treetable
                    .p-treetable-tbody
                    > tr.p-highlight
                    .p-treetable-toggler:hover {
                    color: #0f766e;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-treetable.p-treetable-selectable
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler,
                .p-treetable.p-treetable-hoverable-rows
                    .p-treetable-tbody
                    > tr:not(.p-highlight):hover
                    .p-treetable-toggler {
                    color: #495057;
                }
                .p-treetable .p-column-resizer-helper {
                    background: #14b8a6;
                }
                .p-treetable .p-treetable-scrollable-header,
                .p-treetable .p-treetable-scrollable-footer {
                    background: #f8f9fa;
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
                    border: 2px solid #14b8a6;
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                    background-color: #ffffff;
                }
                .p-timeline .p-timeline-event-connector {
                    background-color: #dee2e6;
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
                    border: 1px solid #dee2e6;
                    color: #6c757d;
                    background: #f8f9fa;
                    font-weight: 700;
                    border-radius: 6px;
                    transition: box-shadow 0.2s;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-accordion
                    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
                    .p-accordion-header-link {
                    background: #e9ecef;
                    border-color: #dee2e6;
                    color: #343a40;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight
                    .p-accordion-header-link {
                    background: #f8f9fa;
                    border-color: #dee2e6;
                    color: #343a40;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-accordion
                    .p-accordion-header:not(.p-disabled).p-highlight:hover
                    .p-accordion-header-link {
                    border-color: #dee2e6;
                    background: #e9ecef;
                    color: #343a40;
                }
                .p-accordion .p-accordion-content {
                    padding: 1.25rem;
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-accordion .p-accordion-tab {
                    margin-bottom: 4px;
                }

                .p-card {
                    background: #ffffff;
                    color: #495057;
                    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
                        0 1px 1px 0 rgba(0, 0, 0, 0.14),
                        0 1px 3px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 6px;
                }
                .p-card .p-card-body {
                    padding: 1.25rem;
                }
                .p-card .p-card-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-bottom: 0.5rem;
                }
                .p-card .p-card-subtitle {
                    font-weight: 400;
                    margin-bottom: 0.5rem;
                    color: #6c757d;
                }
                .p-card .p-card-content {
                    padding: 1.25rem 0;
                }
                .p-card .p-card-footer {
                    padding: 1.25rem 0 0 0;
                }

                .p-fieldset {
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    border-radius: 6px;
                }
                .p-fieldset .p-fieldset-legend {
                    padding: 1.25rem;
                    border: 1px solid #dee2e6;
                    color: #343a40;
                    background: #f8f9fa;
                    font-weight: 700;
                    border-radius: 6px;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
                    padding: 0;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
                    padding: 1.25rem;
                    color: #343a40;
                    border-radius: 6px;
                    transition: box-shadow 0.2s;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                    background: #e9ecef;
                    border-color: #dee2e6;
                    color: #343a40;
                }
                .p-fieldset .p-fieldset-content {
                    padding: 1.25rem;
                }

                .p-divider .p-divider-content {
                    background-color: #ffffff;
                }
                .p-divider.p-divider-horizontal {
                    margin: 1.25rem 0;
                    padding: 0 1.25rem;
                }
                .p-divider.p-divider-horizontal:before {
                    border-top: 1px #dee2e6;
                }
                .p-divider.p-divider-horizontal .p-divider-content {
                    padding: 0 0.5rem;
                }
                .p-divider.p-divider-vertical {
                    margin: 0 1.25rem;
                    padding: 1.25rem 0;
                }
                .p-divider.p-divider-vertical:before {
                    border-left: 1px #dee2e6;
                }
                .p-divider.p-divider-vertical .p-divider-content {
                    padding: 0.5rem 0;
                }

                .p-panel .p-panel-header {
                    border: 1px solid #dee2e6;
                    padding: 1.25rem;
                    background: #f8f9fa;
                    color: #343a40;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-panel .p-panel-header .p-panel-title {
                    font-weight: 700;
                }
                .p-panel .p-panel-header .p-panel-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-panel .p-panel-header .p-panel-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-panel.p-panel-toggleable .p-panel-header {
                    padding: 0.75rem 1.25rem;
                }
                .p-panel .p-panel-content {
                    padding: 1.25rem;
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                    border-top: 0 none;
                }
                .p-panel .p-panel-footer {
                    padding: 0.75rem 1.25rem;
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    border-top: 0 none;
                }

                .p-splitter {
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    border-radius: 6px;
                    color: #495057;
                }
                .p-splitter .p-splitter-gutter {
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    background: #f8f9fa;
                }
                .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
                    background: #dee2e6;
                }
                .p-splitter .p-splitter-gutter-resizing {
                    background: #dee2e6;
                }

                .p-scrollpanel .p-scrollpanel-bar {
                    background: #f8f9fa;
                    border: 0 none;
                }

                .p-tabview .p-tabview-nav {
                    background: #ffffff;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 2px 0;
                }
                .p-tabview .p-tabview-nav li {
                    margin-right: 0;
                }
                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    border: solid #dee2e6;
                    border-width: 0 0 2px 0;
                    border-color: transparent transparent #dee2e6 transparent;
                    background: #ffffff;
                    color: #6c757d;
                    padding: 1.25rem;
                    font-weight: 700;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                    transition: box-shadow 0.2s;
                    margin: 0 0 -2px 0;
                }
                .p-tabview
                    .p-tabview-nav
                    li
                    .p-tabview-nav-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.2rem #99f6e4;
                }
                .p-tabview
                    .p-tabview-nav
                    li:not(.p-highlight):not(.p-disabled):hover
                    .p-tabview-nav-link {
                    background: #ffffff;
                    border-color: #adb5bd;
                    color: #6c757d;
                }
                .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                    background: #ffffff;
                    border-color: #14b8a6;
                    color: #14b8a6;
                }
                .p-tabview .p-tabview-close {
                    margin-left: 0.5rem;
                }
                .p-tabview .p-tabview-nav-btn.p-link {
                    background: #ffffff;
                    color: #14b8a6;
                    width: 3rem;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
                        0 2px 2px 0 rgba(0, 0, 0, 0.14),
                        0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    border-radius: 0;
                }
                .p-tabview .p-tabview-nav-btn.p-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.2rem #99f6e4;
                }
                .p-tabview .p-tabview-panels {
                    background: #ffffff;
                    padding: 1.25rem;
                    border: 0 none;
                    color: #495057;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }

                .p-toolbar {
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    padding: 1.25rem;
                    border-radius: 6px;
                    gap: 0.5rem;
                }
                .p-toolbar .p-toolbar-separator {
                    margin: 0 0.5rem;
                }

                .p-confirm-popup {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
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
                    border-radius: 6px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                    border: 0 none;
                }
                .p-dialog .p-dialog-header {
                    border-bottom: 0 none;
                    background: #ffffff;
                    color: #343a40;
                    padding: 1.5rem;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-dialog .p-dialog-header .p-dialog-title {
                    font-weight: 700;
                    font-size: 1.25rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-right: 0.5rem;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
                    margin-right: 0;
                }
                .p-dialog .p-dialog-content {
                    background: #ffffff;
                    color: #495057;
                    padding: 0 1.5rem 2rem 1.5rem;
                }
                .p-dialog .p-dialog-content:last-of-type {
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-dialog .p-dialog-footer {
                    border-top: 0 none;
                    background: #ffffff;
                    color: #495057;
                    padding: 0 1.5rem 1.5rem 1.5rem;
                    text-align: right;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
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
                    color: #495057;
                    border: 0 none;
                    border-radius: 6px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                }
                .p-overlaypanel .p-overlaypanel-content {
                    padding: 1.25rem;
                }
                .p-overlaypanel .p-overlaypanel-close {
                    background: #14b8a6;
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
                    background: #0d9488;
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
                    color: #495057;
                    border: 0 none;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                }
                .p-sidebar .p-sidebar-header {
                    padding: 1.25rem;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close,
                .p-sidebar .p-sidebar-header .p-sidebar-icon {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border: 0 none;
                    background: transparent;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
                    color: #343a40;
                    border-color: transparent;
                    background: #e9ecef;
                }
                .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
                .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-sidebar .p-sidebar-header + .p-sidebar-content {
                    padding-top: 0;
                }
                .p-sidebar .p-sidebar-content {
                    padding: 1.25rem;
                }

                .p-tooltip .p-tooltip-text {
                    background: #495057;
                    color: #ffffff;
                    padding: 0.75rem 0.75rem;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                }
                .p-tooltip.p-tooltip-right .p-tooltip-arrow {
                    border-right-color: #495057;
                }
                .p-tooltip.p-tooltip-left .p-tooltip-arrow {
                    border-left-color: #495057;
                }
                .p-tooltip.p-tooltip-top .p-tooltip-arrow {
                    border-top-color: #495057;
                }
                .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
                    border-bottom-color: #495057;
                }

                .p-fileupload .p-fileupload-buttonbar {
                    background: #f8f9fa;
                    padding: 1.25rem;
                    border: 1px solid #dee2e6;
                    color: #343a40;
                    border-bottom: 0 none;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                    gap: 0.5rem;
                }
                .p-fileupload .p-fileupload-buttonbar .p-button {
                    margin-right: 0.5rem;
                }
                .p-fileupload .p-fileupload-content {
                    background: #ffffff;
                    padding: 2rem 1rem;
                    border: 1px solid #dee2e6;
                    color: #495057;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
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
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    padding: 1rem;
                }
                .p-breadcrumb ul li .p-menuitem-link {
                    transition: box-shadow 0.2s;
                    border-radius: 6px;
                }
                .p-breadcrumb ul li .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-breadcrumb ul li.p-breadcrumb-chevron {
                    margin: 0 0.5rem 0 0.5rem;
                    color: #495057;
                }
                .p-breadcrumb ul li:last-child .p-menuitem-text {
                    color: #495057;
                }
                .p-breadcrumb ul li:last-child .p-menuitem-icon {
                    color: #6c757d;
                }

                .p-contextmenu {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                    width: 12.5rem;
                }
                .p-contextmenu .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-contextmenu .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-contextmenu .p-menuitem-link .p-submenu-icon {
                    color: #6c757d;
                }
                .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-contextmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-contextmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-contextmenu .p-submenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link {
                    background: #f0fdfa;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f766e;
                }
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-contextmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #0f766e;
                }
                .p-contextmenu .p-menu-separator {
                    border-top: 1px solid #dee2e6;
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
                    background: #f8f9fa;
                    color: #495057;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 6px;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #6c757d;
                    margin-left: 0.5rem;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-megamenu
                    .p-megamenu-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #f0fdfa;
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
                    color: #0f766e;
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
                    color: #0f766e;
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
                    color: #0f766e;
                }
                .p-megamenu .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-megamenu .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-megamenu .p-menuitem-link .p-submenu-icon {
                    color: #6c757d;
                }
                .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-megamenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-megamenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-megamenu .p-megamenu-panel {
                    background: #ffffff;
                    color: #495057;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-megamenu .p-megamenu-submenu-header {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    color: #343a40;
                    background: #ffffff;
                    font-weight: 700;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                }
                .p-megamenu .p-megamenu-submenu {
                    padding: 0.25rem 0;
                    width: 12.5rem;
                }
                .p-megamenu .p-megamenu-submenu .p-menu-separator {
                    border-top: 1px solid #dee2e6;
                    margin: 0.25rem 0;
                }
                .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #f0fdfa;
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f766e;
                }
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-megamenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #0f766e;
                }
                .p-megamenu.p-megamenu-vertical {
                    width: 12.5rem;
                    padding: 0.25rem 0;
                }
                .p-megamenu .p-megamenu-button {
                    width: 2rem;
                    height: 2rem;
                    color: #6c757d;
                    border-radius: 50%;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                }
                .p-megamenu .p-megamenu-button:hover {
                    color: #6c757d;
                    background: #e9ecef;
                }
                .p-megamenu .p-megamenu-button:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-megamenu .p-submenu-icon {
                    transition: transform 0.2s;
                }
                .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    .p-menu-separator {
                    border-top: 1px solid #dee2e6;
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
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-megamenu.p-megamenu-mobile-active
                    .p-megamenu-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
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
                    color: #495057;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    width: 12.5rem;
                }
                .p-menu .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-menu .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-menu .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-menu .p-menuitem-link .p-submenu-icon {
                    color: #6c757d;
                }
                .p-menu .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-menu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-menu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-menu.p-menu-overlay {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-menu .p-submenu-header {
                    margin: 0;
                    padding: 0.75rem 1.25rem;
                    color: #343a40;
                    background: #ffffff;
                    font-weight: 700;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }
                .p-menu .p-menu-separator {
                    border-top: 1px solid #dee2e6;
                    margin: 0.25rem 0;
                }

                .p-menubar {
                    padding: 0.5rem;
                    background: #f8f9fa;
                    color: #495057;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                }
                .p-menubar .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-menubar .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-menubar .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-menubar .p-menuitem-link .p-submenu-icon {
                    color: #6c757d;
                }
                .p-menubar .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-menubar
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-menubar .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 6px;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #6c757d;
                    margin-left: 0.5rem;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem
                    > .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link,
                .p-menubar
                    .p-menubar-root-list
                    > .p-menuitem.p-menuitem-active
                    > .p-menuitem-link:not(.p-disabled):hover {
                    background: #f0fdfa;
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
                    color: #0f766e;
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
                    color: #0f766e;
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
                    color: #0f766e;
                }
                .p-menubar .p-submenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    width: 12.5rem;
                }
                .p-menubar .p-submenu-list .p-menu-separator {
                    border-top: 1px solid #dee2e6;
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
                    background: #f0fdfa;
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f766e;
                }
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-menubar
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #0f766e;
                }

                @media screen and (max-width: 960px) {
                    .p-menubar {
                        position: relative;
                    }
                    .p-menubar .p-menubar-button {
                        display: flex;
                        width: 2rem;
                        height: 2rem;
                        color: #6c757d;
                        border-radius: 50%;
                        transition: background-color 0.2s, color 0.2s,
                            box-shadow 0.2s;
                    }
                    .p-menubar .p-menubar-button:hover {
                        color: #6c757d;
                        background: #e9ecef;
                    }
                    .p-menubar .p-menubar-button:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: 0 0 0 0.2rem #99f6e4;
                    }
                    .p-menubar .p-menubar-root-list {
                        position: absolute;
                        display: none;
                        padding: 0.25rem 0;
                        background: #ffffff;
                        border: 0 none;
                        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                        width: 100%;
                    }
                    .p-menubar .p-menubar-root-list .p-menu-separator {
                        border-top: 1px solid #dee2e6;
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
                        padding: 0.75rem 1.25rem;
                        color: #495057;
                        border-radius: 0;
                        transition: box-shadow 0.2s;
                        user-select: none;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-text {
                        color: #495057;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-menuitem-icon {
                        color: #6c757d;
                        margin-right: 0.5rem;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link
                        .p-submenu-icon {
                        color: #6c757d;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover {
                        background: #e9ecef;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-text {
                        color: #495057;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-menuitem-icon {
                        color: #6c757d;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:not(.p-disabled):hover
                        .p-submenu-icon {
                        color: #6c757d;
                    }
                    .p-menubar
                        .p-menubar-root-list
                        > .p-menuitem
                        > .p-menuitem-link:focus {
                        outline: 0 none;
                        outline-offset: 0;
                        box-shadow: inset 0 0 0 0.15rem #99f6e4;
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
                    border: 1px solid #dee2e6;
                    color: #6c757d;
                    background: #f8f9fa;
                    font-weight: 700;
                    border-radius: 6px;
                    transition: box-shadow 0.2s;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-panelmenu
                    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
                    > a:hover {
                    background: #e9ecef;
                    border-color: #dee2e6;
                    color: #343a40;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight {
                    margin-bottom: 0;
                }
                .p-panelmenu .p-panelmenu-header.p-highlight > a {
                    background: #f8f9fa;
                    border-color: #dee2e6;
                    color: #343a40;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
                .p-panelmenu
                    .p-panelmenu-header.p-highlight:not(.p-disabled)
                    > a:hover {
                    border-color: #dee2e6;
                    background: #e9ecef;
                    color: #343a40;
                }
                .p-panelmenu .p-panelmenu-content {
                    padding: 0.25rem 0;
                    border: 1px solid #dee2e6;
                    background: #ffffff;
                    color: #495057;
                    border-top: 0;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                    border-bottom-right-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-panelmenu
                    .p-panelmenu-content
                    .p-menuitem
                    .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
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
                    margin-bottom: 4px;
                }

                .p-slidemenu {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #495057;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    width: 12.5rem;
                }
                .p-slidemenu .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-slidemenu .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-slidemenu .p-menuitem-link .p-submenu-icon {
                    color: #6c757d;
                }
                .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-slidemenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-slidemenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-slidemenu.p-slidemenu-overlay {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-slidemenu .p-slidemenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link {
                    background: #f0fdfa;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-text {
                    color: #0f766e;
                }
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon,
                .p-slidemenu
                    .p-slidemenu.p-slidemenu-active
                    > .p-slidemenu-link
                    .p-slidemenu-icon {
                    color: #0f766e;
                }
                .p-slidemenu .p-slidemenu-separator {
                    border-top: 1px solid #dee2e6;
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
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                }

                .p-steps .p-steps-item .p-menuitem-link {
                    background: transparent;
                    transition: box-shadow 0.2s;
                    border-radius: 6px;
                    background: #ffffff;
                }
                .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                    color: #495057;
                    border: 1px solid #e9ecef;
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
                    color: #6c757d;
                }
                .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-number {
                    background: #f0fdfa;
                    color: #0f766e;
                }
                .p-steps .p-steps-item.p-highlight .p-steps-title {
                    font-weight: 700;
                    color: #495057;
                }
                .p-steps .p-steps-item:before {
                    content: ' ';
                    border-top: 1px solid #dee2e6;
                    width: 100%;
                    top: 50%;
                    left: 0;
                    display: block;
                    position: absolute;
                    margin-top: -1rem;
                }

                .p-tabmenu .p-tabmenu-nav {
                    background: #ffffff;
                    border: 1px solid #dee2e6;
                    border-width: 0 0 2px 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
                    margin-right: 0;
                }
                .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
                    border: solid #dee2e6;
                    border-width: 0 0 2px 0;
                    border-color: transparent transparent #dee2e6 transparent;
                    background: #ffffff;
                    color: #6c757d;
                    padding: 1.25rem;
                    font-weight: 700;
                    border-top-right-radius: 6px;
                    border-top-left-radius: 6px;
                    transition: box-shadow 0.2s;
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
                    box-shadow: inset 0 0 0 0.2rem #99f6e4;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
                    .p-menuitem-link {
                    background: #ffffff;
                    border-color: #adb5bd;
                    color: #6c757d;
                }
                .p-tabmenu
                    .p-tabmenu-nav
                    .p-tabmenuitem.p-highlight
                    .p-menuitem-link {
                    background: #ffffff;
                    border-color: #14b8a6;
                    color: #14b8a6;
                }

                .p-tieredmenu {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    color: #495057;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    width: 12.5rem;
                }
                .p-tieredmenu .p-menuitem-link {
                    padding: 0.75rem 1.25rem;
                    color: #495057;
                    border-radius: 0;
                    transition: box-shadow 0.2s;
                    user-select: none;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-text {
                    color: #495057;
                }
                .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
                    color: #6c757d;
                    margin-right: 0.5rem;
                }
                .p-tieredmenu .p-menuitem-link .p-submenu-icon {
                    color: #6c757d;
                }
                .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
                    background: #e9ecef;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-text {
                    color: #495057;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-menuitem-icon {
                    color: #6c757d;
                }
                .p-tieredmenu
                    .p-menuitem-link:not(.p-disabled):hover
                    .p-submenu-icon {
                    color: #6c757d;
                }
                .p-tieredmenu .p-menuitem-link:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: inset 0 0 0 0.15rem #99f6e4;
                }
                .p-tieredmenu.p-tieredmenu-overlay {
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-tieredmenu .p-submenu-list {
                    padding: 0.25rem 0;
                    background: #ffffff;
                    border: 0 none;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                }
                .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                    background: #f0fdfa;
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-text {
                    color: #0f766e;
                }
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-menuitem-icon,
                .p-tieredmenu
                    .p-menuitem.p-menuitem-active
                    > .p-menuitem-link
                    .p-submenu-icon {
                    color: #0f766e;
                }
                .p-tieredmenu .p-menu-separator {
                    border-top: 1px solid #dee2e6;
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
                    padding: 0.75rem 0.75rem;
                    margin: 0;
                    border-radius: 6px;
                }
                .p-inline-message.p-inline-message-info {
                    background: #e9e9ff;
                    border: solid #696cff;
                    border-width: 0px;
                    color: #696cff;
                }
                .p-inline-message.p-inline-message-info .p-inline-message-icon {
                    color: #696cff;
                }
                .p-inline-message.p-inline-message-success {
                    background: #e4f8f0;
                    border: solid #1ea97c;
                    border-width: 0px;
                    color: #1ea97c;
                }
                .p-inline-message.p-inline-message-success
                    .p-inline-message-icon {
                    color: #1ea97c;
                }
                .p-inline-message.p-inline-message-warn {
                    background: #fff2e2;
                    border: solid #cc8925;
                    border-width: 0px;
                    color: #cc8925;
                }
                .p-inline-message.p-inline-message-warn .p-inline-message-icon {
                    color: #cc8925;
                }
                .p-inline-message.p-inline-message-error {
                    background: #ffe7e6;
                    border: solid #ff5757;
                    border-width: 0px;
                    color: #ff5757;
                }
                .p-inline-message.p-inline-message-error
                    .p-inline-message-icon {
                    color: #ff5757;
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
                    border-radius: 6px;
                }
                .p-message .p-message-wrapper {
                    padding: 1.25rem 1.75rem;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-message.p-message-info {
                    background: #e9e9ff;
                    border: solid #696cff;
                    border-width: 0 0 0 6px;
                    color: #696cff;
                }
                .p-message.p-message-info .p-message-icon {
                    color: #696cff;
                }
                .p-message.p-message-info .p-message-close {
                    color: #696cff;
                }
                .p-message.p-message-success {
                    background: #e4f8f0;
                    border: solid #1ea97c;
                    border-width: 0 0 0 6px;
                    color: #1ea97c;
                }
                .p-message.p-message-success .p-message-icon {
                    color: #1ea97c;
                }
                .p-message.p-message-success .p-message-close {
                    color: #1ea97c;
                }
                .p-message.p-message-warn {
                    background: #fff2e2;
                    border: solid #cc8925;
                    border-width: 0 0 0 6px;
                    color: #cc8925;
                }
                .p-message.p-message-warn .p-message-icon {
                    color: #cc8925;
                }
                .p-message.p-message-warn .p-message-close {
                    color: #cc8925;
                }
                .p-message.p-message-error {
                    background: #ffe7e6;
                    border: solid #ff5757;
                    border-width: 0 0 0 6px;
                    color: #ff5757;
                }
                .p-message.p-message-error .p-message-icon {
                    color: #ff5757;
                }
                .p-message.p-message-error .p-message-close {
                    color: #ff5757;
                }
                .p-message .p-message-text {
                    font-size: 1rem;
                    font-weight: 400;
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
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
                    border-radius: 6px;
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
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }
                .p-toast .p-toast-message.p-toast-message-info {
                    background: #e9e9ff;
                    border: solid #696cff;
                    border-width: 0 0 0 6px;
                    color: #696cff;
                }
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-info
                    .p-toast-icon-close {
                    color: #696cff;
                }
                .p-toast .p-toast-message.p-toast-message-success {
                    background: #e4f8f0;
                    border: solid #1ea97c;
                    border-width: 0 0 0 6px;
                    color: #1ea97c;
                }
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-success
                    .p-toast-icon-close {
                    color: #1ea97c;
                }
                .p-toast .p-toast-message.p-toast-message-warn {
                    background: #fff2e2;
                    border: solid #cc8925;
                    border-width: 0 0 0 6px;
                    color: #cc8925;
                }
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-warn
                    .p-toast-icon-close {
                    color: #cc8925;
                }
                .p-toast .p-toast-message.p-toast-message-error {
                    background: #ffe7e6;
                    border: solid #ff5757;
                    border-width: 0 0 0 6px;
                    color: #ff5757;
                }
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-message-icon,
                .p-toast
                    .p-toast-message.p-toast-message-error
                    .p-toast-icon-close {
                    color: #ff5757;
                }

                .p-galleria .p-galleria-close {
                    margin: 0.5rem;
                    background: transparent;
                    color: #f8f9fa;
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
                    color: #f8f9fa;
                }
                .p-galleria .p-galleria-item-nav {
                    background: transparent;
                    color: #f8f9fa;
                    width: 4rem;
                    height: 4rem;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    border-radius: 6px;
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
                    color: #f8f9fa;
                }
                .p-galleria .p-galleria-caption {
                    background: rgba(0, 0, 0, 0.5);
                    color: #f8f9fa;
                    padding: 1rem;
                }
                .p-galleria .p-galleria-indicators {
                    padding: 1rem;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator
                    button {
                    background-color: #ced4da;
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
                    background: #adb5bd;
                }
                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background: #f0fdfa;
                    color: #0f766e;
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
                    background: #f0fdfa;
                    color: #0f766e;
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
                    color: #f8f9fa;
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
                    color: #f8f9fa;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content {
                    transition: box-shadow 0.2s;
                }
                .p-galleria
                    .p-galleria-thumbnail-container
                    .p-galleria-thumbnail-item-content:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
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
                    background-color: #dee2e6;
                    border-radius: 6px;
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
                    background-color: #dee2e6;
                    color: #495057;
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
                    border-radius: 6px;
                    transition: background-color 0.2s, color 0.2s,
                        box-shadow 0.2s;
                    margin-left: 0.5rem;
                }
                .p-chip .p-chip-remove-icon:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }

                .p-scrolltop {
                    width: 3rem;
                    height: 3rem;
                    border-radius: 50%;
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
                    color: #f8f9fa;
                }
                .p-scrolltop .p-scrolltop-icon.p-icon {
                    width: 1.5rem;
                    height: 1.5rem;
                }

                .p-skeleton {
                    background-color: #dee2e6;
                    border-radius: 6px;
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
                    background: #14b8a6;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 6px;
                }
                .p-tag.p-tag-success {
                    background-color: #22c55e;
                    color: #ffffff;
                }
                .p-tag.p-tag-info {
                    background-color: #3b82f6;
                    color: #ffffff;
                }
                .p-tag.p-tag-warning {
                    background-color: #f59e0b;
                    color: #ffffff;
                }
                .p-tag.p-tag-danger {
                    background-color: #ef4444;
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
                    padding: 0.75rem 0.75rem;
                    border-radius: 6px;
                    transition: background-color 0.2s, color 0.2s,
                        border-color 0.2s, box-shadow 0.2s;
                }
                .p-inplace .p-inplace-display:not(.p-disabled):hover {
                    background: #e9ecef;
                    color: #495057;
                }
                .p-inplace .p-inplace-display:focus {
                    outline: 0 none;
                    outline-offset: 0;
                    box-shadow: 0 0 0 0.2rem #99f6e4;
                }

                .p-progressbar {
                    border: 0 none;
                    height: 1.5rem;
                    background: #dee2e6;
                    border-radius: 6px;
                }
                .p-progressbar .p-progressbar-value {
                    border: 0 none;
                    margin: 0;
                    background: #14b8a6;
                }
                .p-progressbar .p-progressbar-label {
                    color: #ffffff;
                    line-height: 1.5rem;
                }

                .p-terminal {
                    background: #ffffff;
                    color: #495057;
                    border: 1px solid #dee2e6;
                    padding: 1.25rem;
                }
                .p-terminal .p-terminal-input {
                    font-size: 1rem;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                        Roboto, Helvetica, Arial, sans-serif,
                        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
                }

                .p-badge {
                    background: #14b8a6;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    min-width: 1.5rem;
                    height: 1.5rem;
                    line-height: 1.5rem;
                }
                .p-badge.p-badge-secondary {
                    background-color: #64748b;
                    color: #ffffff;
                }
                .p-badge.p-badge-success {
                    background-color: #22c55e;
                    color: #ffffff;
                }
                .p-badge.p-badge-info {
                    background-color: #3b82f6;
                    color: #ffffff;
                }
                .p-badge.p-badge-warning {
                    background-color: #f59e0b;
                    color: #ffffff;
                }
                .p-badge.p-badge-danger {
                    background-color: #ef4444;
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
                    background: #14b8a6;
                    color: #ffffff;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.25rem 0.4rem;
                    border-radius: 6px;
                }
                .p-tag.p-tag-success {
                    background-color: #22c55e;
                    color: #ffffff;
                }
                .p-tag.p-tag-info {
                    background-color: #3b82f6;
                    color: #ffffff;
                }
                .p-tag.p-tag-warning {
                    background-color: #f59e0b;
                    color: #ffffff;
                }
                .p-tag.p-tag-danger {
                    background-color: #ef4444;
                    color: #ffffff;
                }

                .p-button-label {
                    font-weight: 700;
                }

                .p-accordion .p-accordion-header .p-accordion-header-link {
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }

                .p-tabview .p-tabview-nav li .p-tabview-nav-link {
                    transition: background-color 0.2s, border-color 0.2s,
                        box-shadow 0.2s;
                }
                .p-tabview .p-tabview-nav .p-tabview-ink-bar {
                    z-index: 1;
                    display: block;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    background-color: #14b8a6;
                    transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
                }

                .p-carousel
                    .p-carousel-indicators
                    .p-carousel-indicator.p-highlight
                    button {
                    background-color: #14b8a6;
                }

                .p-galleria
                    .p-galleria-indicators
                    .p-galleria-indicator.p-highlight
                    button {
                    background-color: #14b8a6;
                }

                .p-button:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #75f0e3,
                        0 1px 2px 0 rgb(0, 0, 0);
                }
                .p-button.p-button-secondary:enabled:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #b0b9c6,
                        0 1px 2px 0 rgb(0, 0, 0);
                }
                .p-button.p-button-success:enabled:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #88eaac,
                        0 1px 2px 0 rgb(0, 0, 0);
                }
                .p-button.p-button-info:enabled:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #9dc1fb,
                        0 1px 2px 0 rgb(0, 0, 0);
                }
                .p-button.p-button-warning:enabled:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #facf85,
                        0 1px 2px 0 rgb(0, 0, 0);
                }
                .p-button.p-button-help:enabled:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #d4aafb,
                        0 1px 2px 0 rgb(0, 0, 0);
                }
                .p-button.p-button-danger:enabled:focus {
                    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #f7a2a2,
                        0 1px 2px 0 rgb(0, 0, 0);
                }

                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-top
                    > td {
                    box-shadow: inset 0 2px 0 0 #14b8a6;
                }
                .p-datatable
                    .p-datatable-tbody
                    > tr.p-datatable-dragpoint-bottom
                    > td {
                    box-shadow: inset 0 -2px 0 0 #14b8a6;
                }
            `}
        </style>
    )
}

// EOF
