// rhea.tsx

export default function rhea() {
    // -------------------------------------------------------------

    return (
        <style jsx global>
            {`
            :root {
                --surface-a: #ffffff;
                --surface-b: #f4f4f4;
                --surface-c: #eaeaea;
                --surface-d: #dadada;
                --surface-e: #ffffff;
                --surface-f: #ffffff;
                --text-color: #495057;
                --text-color-secondary: #6c757d;
                --primary-color: #7B95A3;
                --primary-color-text: #ffffff;
                --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
                --surface-0: #ffffff;
                --surface-50: #eef1f2;
                --surface-100: #dde2e4;
                --surface-200: #bbc5ca;
                --surface-300: #98a8af;
                --surface-400: #768b95;
                --surface-500: #546e7a;
                --surface-600: #435862;
                --surface-700: #324249;
                --surface-800: #222c31;
                --surface-900: #111618;
                --gray-50: #eef1f2;
                --gray-100: #dde2e4;
                --gray-200: #bbc5ca;
                --gray-300: #98a8af;
                --gray-400: #768b95;
                --gray-500: #546e7a;
                --gray-600: #435862;
                --gray-700: #324249;
                --gray-800: #222c31;
                --gray-900: #111618;
                --content-padding:0.571rem 1rem;
                --inline-spacing:0.5rem;
                --border-radius:2px;
                --surface-ground:#f4f4f4;
                --surface-section:#ffffff;
                --surface-card:#ffffff;
                --surface-overlay:#ffffff;
                --surface-border:#dadada;
                --surface-hover: #eaeaea;
                --focus-ring: 0 0 0 0.2rem #e4e9ec;
                --maskbg: rgba(0, 0, 0, 0.4);
                --highlight-bg: #AFD3C8;
                --highlight-text-color: #385048;
                color-scheme: light;
              }
              
              * {
                box-sizing: border-box;
              }
              
              .p-component {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 1rem;
                font-weight: normal;
              }
              
              .p-component-overlay {
                background-color: rgba(0, 0, 0, 0.4);
                transition-duration: 0.2s;
              }
              
              .p-disabled, .p-component:disabled {
                opacity: 0.5;
              }
              
              .p-error {
                color: #e7a3a3;
              }
              
              .p-text-secondary {
                color: #a6a6a6;
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
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                border-radius: 2px;
              }
              .p-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              .p-component-overlay-enter {
                animation: p-component-overlay-enter-animation 150ms forwards;
              }
              
              .p-component-overlay-leave {
                animation: p-component-overlay-leave-animation 150ms forwards;
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
                --blue-50:#f6fbfe;
                --blue-100:#d4edfb;
                --blue-200:#b2e0f7;
                --blue-300:#91d2f4;
                --blue-400:#6fc4f0;
                --blue-500:#4db6ed;
                --blue-600:#419bc9;
                --blue-700:#367fa6;
                --blue-800:#2a6482;
                --blue-900:#1f495f;
                --green-50:#f7fcf9;
                --green-100:#daeee4;
                --green-200:#bce1ce;
                --green-300:#9fd4b8;
                --green-400:#81c7a3;
                --green-500:#64ba8d;
                --green-600:#559e78;
                --green-700:#468263;
                --green-800:#37664e;
                --green-900:#284a38;
                --yellow-50:#fffdf6;
                --yellow-100:#fef4d5;
                --yellow-200:#fdecb4;
                --yellow-300:#fce493;
                --yellow-400:#fbdb71;
                --yellow-500:#fad350;
                --yellow-600:#d5b344;
                --yellow-700:#af9438;
                --yellow-800:#8a742c;
                --yellow-900:#645420;
                --cyan-50:#f7fefe;
                --cyan-100:#daf8fa;
                --cyan-200:#bdf3f6;
                --cyan-300:#a0edf2;
                --cyan-400:#83e8ee;
                --cyan-500:#66e2ea;
                --cyan-600:#57c0c7;
                --cyan-700:#479ea4;
                --cyan-800:#387c81;
                --cyan-900:#295a5e;
                --pink-50:#fef8fc;
                --pink-100:#fadeef;
                --pink-200:#f7c4e2;
                --pink-300:#f3a9d5;
                --pink-400:#f08fc9;
                --pink-500:#ec75bc;
                --pink-600:#c963a0;
                --pink-700:#a55284;
                --pink-800:#824067;
                --pink-900:#5e2f4b;
                --indigo-50:#f7f9fe;
                --indigo-100:#d6e4f8;
                --indigo-200:#b6cef2;
                --indigo-300:#96b8ec;
                --indigo-400:#75a3e7;
                --indigo-500:#558de1;
                --indigo-600:#4878bf;
                --indigo-700:#3c639e;
                --indigo-800:#2f4e7c;
                --indigo-900:#22385a;
                --teal-50:#f6fbfa;
                --teal-100:#d4ebe7;
                --teal-200:#b2dbd4;
                --teal-300:#90ccc1;
                --teal-400:#6ebcae;
                --teal-500:#4cac9b;
                --teal-600:#419284;
                --teal-700:#35786d;
                --teal-800:#2a5f55;
                --teal-900:#1e453e;
                --orange-50:#fefbf6;
                --orange-100:#fbebd2;
                --orange-200:#f9dbae;
                --orange-300:#f6cb8a;
                --orange-400:#f3bb67;
                --orange-500:#f0ab43;
                --orange-600:#cc9139;
                --orange-700:#a8782f;
                --orange-800:#845e25;
                --orange-900:#60441b;
                --bluegray-50:#f9fafa;
                --bluegray-100:#e0e5e9;
                --bluegray-200:#c8d1d7;
                --bluegray-300:#b0bdc5;
                --bluegray-400:#97a8b4;
                --bluegray-500:#7f94a2;
                --bluegray-600:#6c7e8a;
                --bluegray-700:#596871;
                --bluegray-800:#465159;
                --bluegray-900:#333b41;
                --purple-50:#fbf8fc;
                --purple-100:#ecddf1;
                --purple-200:#ddc2e6;
                --purple-300:#cea7dc;
                --purple-400:#bf8cd1;
                --purple-500:#b071c6;
                --purple-600:#9660a8;
                --purple-700:#7b4f8b;
                --purple-800:#613e6d;
                --purple-900:#462d4f;
                --red-50:#fff7f5;
                --red-100:#ffd7cf;
                --red-200:#ffb7a8;
                --red-300:#ff9782;
                --red-400:#ff775b;
                --red-500:#ff5735;
                --red-600:#d94a2d;
                --red-700:#b33d25;
                --red-800:#8c301d;
                --red-900:#662315;
                --primary-50:#f8fafa;
                --primary-100:#dfe6e9;
                --primary-200:#c6d1d7;
                --primary-300:#adbdc6;
                --primary-400:#94a9b4;
                --primary-500:#7b95a3;
                --primary-600:#697f8b;
                --primary-700:#566872;
                --primary-800:#44525a;
                --primary-900:#313c41;
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
              .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {
                border-color: #a6a6a6;
              }
              .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
                padding: 0.2145rem 0;
              }
              .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 1rem;
                color: #666666;
                padding: 0;
                margin: 0;
              }
              .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
                padding: 0.2145rem 0.429rem;
                margin-right: 0.5rem;
                background: #AFD3C8;
                color: #385048;
                border-radius: 2px;
              }
              .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
                margin-left: 0.5rem;
              }
              .p-autocomplete.p-invalid.p-component > .p-inputtext {
                border-color: #e7a3a3;
              }
              
              .p-autocomplete-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-autocomplete-panel .p-autocomplete-items {
                padding: 0;
              }
              .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
                margin: 0;
                padding: 0.429rem 0.857rem;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
                margin: 0;
                padding: 0.857rem;
                color: #666666;
                background: #f4f4f4;
                font-weight: 700;
              }
              
              .p-calendar.p-invalid.p-component > .p-inputtext {
                border-color: #e7a3a3;
              }
              
              .p-datepicker {
                padding: 0.857rem;
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                border-radius: 2px;
              }
              .p-datepicker:not(.p-datepicker-inline) {
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
                background: #ffffff;
              }
              .p-datepicker .p-datepicker-header {
                padding: 0.5rem;
                color: #666666;
                background: #ffffff;
                font-weight: 700;
                margin: 0;
                border-bottom: 0 none;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-prev,
              .p-datepicker .p-datepicker-header .p-datepicker-next {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
              .p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
              .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-title {
                line-height: 2rem;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
              .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
                color: #666666;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                font-weight: 700;
                padding: 0.5rem;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
              .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
                color: #7B95A3;
              }
              .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
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
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border: 1px solid transparent;
              }
              .p-datepicker table td > span.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-datepicker table td > span:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-datepicker table td.p-datepicker-today > span {
                background: #d0d0d0;
                color: #666666;
                border-color: transparent;
              }
              .p-datepicker table td.p-datepicker-today > span.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-datepicker .p-datepicker-buttonbar {
                padding: 0.857rem 0 0.429rem 0;
                border-top: 1px solid #dadada;
              }
              .p-datepicker .p-datepicker-buttonbar .p-button {
                width: auto;
              }
              .p-datepicker .p-timepicker {
                border-top: 1px solid #dadada;
                padding: 0.857rem 0 0.429rem 0;
              }
              .p-datepicker .p-timepicker button {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-datepicker .p-timepicker button:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-datepicker .p-timepicker button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
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
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-datepicker .p-yearpicker {
                margin: 0.857rem 0;
              }
              .p-datepicker .p-yearpicker .p-yearpicker-year {
                padding: 0.5rem;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
                border-left: 1px solid #dadada;
                padding-right: 0.857rem;
                padding-left: 0.857rem;
                padding-top: 0;
                padding-bottom: 0;
              }
              .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
                padding-left: 0;
              }
              .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
                padding-right: 0;
                border-left: 0 none;
              }
              .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
                background: #f4f4f4;
              }
              .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
                background: #f4f4f4;
              }
              .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
                background: #f4f4f4;
              }
              .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              @media screen and (max-width: 769px) {
                .p-datepicker table th, .p-datepicker table td {
                  padding: 0.25rem;
                }
              }
              .p-cascadeselect {
                background: #ffffff;
                border: 1px solid #dadada;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-cascadeselect:not(.p-disabled):hover {
                border-color: #a6a6a6;
              }
              .p-cascadeselect:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-cascadeselect .p-cascadeselect-label {
                background: transparent;
                border: 0 none;
                padding: 0.429rem 0.429rem;
              }
              .p-cascadeselect .p-cascadeselect-label.p-placeholder {
                color: #a6a6a6;
              }
              .p-cascadeselect .p-cascadeselect-label:enabled:focus {
                outline: 0 none;
                box-shadow: none;
              }
              .p-cascadeselect .p-cascadeselect-trigger {
                background: transparent;
                color: #a6a6a6;
                width: 2.357rem;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              .p-cascadeselect.p-invalid.p-component {
                border-color: #e7a3a3;
              }
              
              .p-cascadeselect-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-cascadeselect-panel .p-cascadeselect-items {
                padding: 0;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
                margin: 0;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
                padding: 0.429rem 0.857rem;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
                font-size: 0.875rem;
              }
              .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon.p-icon {
                width: 0.875rem;
                height: 0.875rem;
              }
              
              .p-input-filled .p-cascadeselect {
                background: #f4f4f4;
              }
              .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
                background-color: #f4f4f4;
              }
              
              .p-checkbox {
                width: 20px;
                height: 20px;
              }
              .p-checkbox .p-checkbox-box {
                border: 1px solid #dadada;
                background: #ffffff;
                width: 20px;
                height: 20px;
                color: #666666;
                border-radius: 2px;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
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
                border-color: #7B95A3;
                background: #7B95A3;
              }
              .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
                border-color: #617c8a;
                background: #617c8a;
                color: #ffffff;
              }
              .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                border-color: #a6a6a6;
              }
              .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
                border-color: #617c8a;
                background: #617c8a;
                color: #ffffff;
              }
              .p-checkbox.p-invalid > .p-checkbox-box {
                border-color: #e7a3a3;
              }
              
              .p-input-filled .p-checkbox .p-checkbox-box {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
                background: #7B95A3;
              }
              .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
                background: #617c8a;
              }
              
              .p-chips .p-chips-multiple-container {
                padding: 0.2145rem 0.429rem;
              }
              .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
                border-color: #a6a6a6;
              }
              .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-chips .p-chips-multiple-container .p-chips-token {
                padding: 0.2145rem 0.429rem;
                margin-right: 0.5rem;
                background: #dadada;
                color: #666666;
                border-radius: 16px;
              }
              .p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
                margin-left: 0.5rem;
              }
              .p-chips .p-chips-multiple-container .p-chips-input-token {
                padding: 0.2145rem 0;
              }
              .p-chips .p-chips-multiple-container .p-chips-input-token input {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 1rem;
                color: #666666;
                padding: 0;
                margin: 0;
              }
              .p-chips.p-invalid.p-component > .p-inputtext {
                border-color: #e7a3a3;
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
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              
              .p-dropdown {
                background: #ffffff;
                border: 1px solid #dadada;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-dropdown:not(.p-disabled):hover {
                border-color: #a6a6a6;
              }
              .p-dropdown:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-dropdown.p-dropdown-clearable .p-dropdown-label {
                padding-right: 1.429rem;
              }
              .p-dropdown .p-dropdown-label {
                background: transparent;
                border: 0 none;
              }
              .p-dropdown .p-dropdown-label.p-placeholder {
                color: #a6a6a6;
              }
              .p-dropdown .p-dropdown-label:enabled:focus {
                outline: 0 none;
                box-shadow: none;
              }
              .p-dropdown .p-dropdown-trigger {
                background: transparent;
                color: #a6a6a6;
                width: 2.357rem;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              .p-dropdown .p-dropdown-clear-icon {
                color: #a6a6a6;
                right: 2.357rem;
              }
              .p-dropdown.p-invalid.p-component {
                border-color: #e7a3a3;
              }
              
              .p-dropdown-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-dropdown-panel .p-dropdown-header {
                padding: 0.429rem 0.857rem;
                border-bottom: 1px solid #dadada;
                color: #666666;
                background: #ffffff;
                margin: 0;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
                padding-right: 1.429rem;
                margin-right: -1.429rem;
              }
              .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
                right: 0.429rem;
                color: #a6a6a6;
              }
              .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter {
                padding-right: 2.858rem;
                margin-right: -2.858rem;
              }
              .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter-clear-icon {
                right: 1.858rem;
              }
              .p-dropdown-panel .p-dropdown-items {
                padding: 0;
              }
              .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
                margin: 0;
                padding: 0.429rem 0.857rem;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
                margin: 0;
                padding: 0.857rem;
                color: #666666;
                background: #f4f4f4;
                font-weight: 700;
              }
              .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
                padding: 0.429rem 0.857rem;
                color: #666666;
                background: transparent;
              }
              
              .p-input-filled .p-dropdown {
                background: #f4f4f4;
              }
              .p-input-filled .p-dropdown:not(.p-disabled):hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
                background-color: transparent;
              }
              
              .p-editor-container .p-editor-toolbar {
                background: #7B95A3;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-editor-container .p-editor-toolbar.ql-snow {
                border: 1px solid #7B95A3;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
                stroke: #a6a6a6;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
                fill: #a6a6a6;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
                border: 0 none;
                color: #a6a6a6;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
                color: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
                stroke: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
                fill: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
                color: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
                stroke: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
                fill: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                border-radius: 2px;
                padding: 0;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
                color: #666666;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
                padding: 0.429rem 0.857rem;
              }
              .p-editor-container .p-editor-content {
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-editor-container .p-editor-content.ql-snow {
                border: 1px solid #dadada;
              }
              .p-editor-container .p-editor-content .ql-editor {
                background: #ffffff;
                color: #666666;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-editor-container .ql-snow.ql-toolbar button:hover,
              .p-editor-container .ql-snow.ql-toolbar button:focus {
                color: #666666;
              }
              .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
              .p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
                stroke: #666666;
              }
              .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
              .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
                fill: #666666;
              }
              .p-editor-container .ql-snow.ql-toolbar button.ql-active,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
                color: #7B95A3;
              }
              .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
                stroke: #7B95A3;
              }
              .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
                fill: #7B95A3;
              }
              .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
              .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
                color: #7B95A3;
              }
              
              .p-inputgroup-addon {
                background: #dbdbdb;
                color: #666666;
                border-top: 1px solid #dadada;
                border-left: 1px solid #dadada;
                border-bottom: 1px solid #dadada;
                padding: 0.429rem 0.429rem;
                min-width: 2.357rem;
              }
              .p-inputgroup-addon:last-child {
                border-right: 1px solid #dadada;
              }
              
              .p-inputgroup > .p-component,
              .p-inputgroup > .p-inputwrapper > .p-inputtext,
              .p-inputgroup > .p-float-label > .p-component {
                border-radius: 0;
                margin: 0;
              }
              .p-inputgroup > .p-component + .p-inputgroup-addon,
              .p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
              .p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
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
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              
              .p-inputgroup .p-float-label:first-child input {
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              
              .p-inputgroup-addon:last-child,
              .p-inputgroup button:last-child,
              .p-inputgroup input:last-child,
              .p-inputgroup > .p-inputwrapper:last-child,
              .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              
              .p-inputgroup .p-float-label:last-child input {
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              
              .p-fluid .p-inputgroup .p-button {
                width: auto;
              }
              .p-fluid .p-inputgroup .p-button.p-button-icon-only {
                width: 2.357rem;
              }
              
              .p-inputnumber.p-invalid.p-component > .p-inputtext {
                border-color: #e7a3a3;
              }
              
              .p-inputswitch {
                width: 3rem;
                height: 1.75rem;
              }
              .p-inputswitch .p-inputswitch-slider {
                background: #ffffff;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 30px;
              }
              .p-inputswitch .p-inputswitch-slider:before {
                background: #7B95A3;
                width: 1.25rem;
                height: 1.25rem;
                left: 0.25rem;
                margin-top: -0.625rem;
                border-radius: 50%;
                transition-duration: 0.2s;
              }
              .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
                transform: translateX(1.25rem);
              }
              .p-inputswitch.p-focus .p-inputswitch-slider {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
                background: #d8dae2;
              }
              .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
                background: #AFD3C8;
              }
              .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
                background: #385048;
              }
              .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
                background: #AFD3C8;
              }
              .p-inputswitch.p-invalid .p-inputswitch-slider {
                border-color: #e7a3a3;
              }
              
              .p-inputtext {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                font-size: 1rem;
                color: #666666;
                background: #ffffff;
                padding: 0.429rem 0.429rem;
                border: 1px solid #dadada;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                appearance: none;
                border-radius: 2px;
              }
              .p-inputtext:enabled:hover {
                border-color: #a6a6a6;
              }
              .p-inputtext:enabled:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-inputtext.p-invalid.p-component {
                border-color: #e7a3a3;
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
                color: #a6a6a6;
                transition-duration: 0.2s;
              }
              
              .p-float-label > label.p-error {
                color: #e7a3a3;
              }
              
              .p-input-icon-left > i:first-of-type,
              .p-input-icon-left > svg:first-of-type,
              .p-input-icon-left > .p-input-prefix {
                left: 0.429rem;
                color: #a6a6a6;
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
                color: #a6a6a6;
              }
              
              .p-input-icon-right > .p-inputtext {
                padding-right: 1.858rem;
              }
              
              ::-webkit-input-placeholder {
                color: #a6a6a6;
              }
              
              :-moz-placeholder {
                color: #a6a6a6;
              }
              
              ::-moz-placeholder {
                color: #a6a6a6;
              }
              
              :-ms-input-placeholder {
                color: #a6a6a6;
              }
              
              .p-input-filled .p-inputtext {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-inputtext:enabled:hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-inputtext:enabled:focus {
                background-color: #f4f4f4;
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
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                border-radius: 2px;
              }
              .p-listbox .p-listbox-header {
                padding: 0.429rem 0.857rem;
                border-bottom: 1px solid #dadada;
                color: #666666;
                background: #ffffff;
                margin: 0;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-listbox .p-listbox-header .p-listbox-filter {
                padding-right: 1.429rem;
              }
              .p-listbox .p-listbox-header .p-listbox-filter-icon {
                right: 0.429rem;
                color: #a6a6a6;
              }
              .p-listbox .p-listbox-list {
                padding: 0;
              }
              .p-listbox .p-listbox-list .p-listbox-item {
                margin: 0;
                padding: 0.429rem 0.857rem;
                border: 0 none;
                color: #666666;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-listbox .p-listbox-list .p-listbox-item:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-listbox .p-listbox-list .p-listbox-item-group {
                margin: 0;
                padding: 0.857rem;
                color: #666666;
                background: #f4f4f4;
                font-weight: 700;
              }
              .p-listbox .p-listbox-list .p-listbox-empty-message {
                padding: 0.429rem 0.857rem;
                color: #666666;
                background: transparent;
              }
              .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-listbox.p-invalid {
                border-color: #e7a3a3;
              }
              
              .p-mention-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-mention-panel .p-mention-items {
                padding: 0;
              }
              .p-mention-panel .p-mention-items .p-mention-item {
                margin: 0;
                padding: 0.429rem 0.857rem;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-mention-panel .p-mention-items .p-mention-item:hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              
              .p-multiselect {
                background: #ffffff;
                border: 1px solid #dadada;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-multiselect:not(.p-disabled):hover {
                border-color: #a6a6a6;
              }
              .p-multiselect:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-multiselect.p-multiselect-clearable .p-multiselect-label {
                padding-right: 1.429rem;
              }
              .p-multiselect .p-multiselect-label {
                padding: 0.429rem 0.429rem;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-multiselect .p-multiselect-label.p-placeholder {
                color: #a6a6a6;
              }
              .p-multiselect.p-multiselect-chip .p-multiselect-token {
                padding: 0.2145rem 0.429rem;
                margin-right: 0.5rem;
                background: #dadada;
                color: #666666;
                border-radius: 16px;
              }
              .p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
                margin-left: 0.5rem;
              }
              .p-multiselect .p-multiselect-trigger {
                background: transparent;
                color: #a6a6a6;
                width: 2.357rem;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              .p-multiselect .p-multiselect-clear-icon {
                color: #a6a6a6;
                right: 2.357rem;
              }
              .p-multiselect.p-invalid.p-component {
                border-color: #e7a3a3;
              }
              
              .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
                padding: 0.2145rem 0.429rem;
              }
              .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label.p-multiselect-items-label {
                padding: 0.429rem 0.429rem;
              }
              .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable .p-multiselect-label {
                padding-right: 1.429rem;
              }
              
              .p-multiselect-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-multiselect-panel .p-multiselect-header {
                padding: 0.429rem 0.857rem;
                border-bottom: 1px solid #dadada;
                color: #666666;
                background: #ffffff;
                margin: 0;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container {
                margin: 0 0.5rem;
              }
              .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
                padding-right: 1.429rem;
              }
              .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
                right: 0.429rem;
                color: #a6a6a6;
              }
              .p-multiselect-panel .p-multiselect-header .p-multiselect-close {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-multiselect-panel .p-multiselect-items {
                padding: 0;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
                margin: 0;
                padding: 0.429rem 0.857rem;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-item:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
                margin-right: 0.5rem;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
                margin: 0;
                padding: 0.857rem;
                color: #666666;
                background: #f4f4f4;
                font-weight: 700;
              }
              .p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
                padding: 0.429rem 0.857rem;
                color: #666666;
                background: transparent;
              }
              
              .p-input-filled .p-multiselect {
                background: #f4f4f4;
              }
              .p-input-filled .p-multiselect:not(.p-disabled):hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
                background-color: #f4f4f4;
              }
              
              .p-password.p-invalid.p-component > .p-inputtext {
                border-color: #e7a3a3;
              }
              
              .p-password-panel {
                padding: 0.571rem 1rem;
                background: #ffffff;
                color: #666666;
                border: 1px solid #f1f1f1;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                border-radius: 2px;
              }
              .p-password-panel .p-password-meter {
                margin-bottom: 0.5rem;
                background: #efefef;
              }
              .p-password-panel .p-password-meter .p-password-strength.weak {
                background: #F4B6B6;
              }
              .p-password-panel .p-password-meter .p-password-strength.medium {
                background: #ffe38e;
              }
              .p-password-panel .p-password-meter .p-password-strength.strong {
                background: #A3E2C6;
              }
              
              .p-radiobutton {
                width: 20px;
                height: 20px;
              }
              .p-radiobutton .p-radiobutton-box {
                border: 1px solid #dadada;
                background: #ffffff;
                width: 20px;
                height: 20px;
                color: #666666;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
                border-color: #a6a6a6;
              }
              .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
                width: 12px;
                height: 12px;
                transition-duration: 0.2s;
                background-color: #ffffff;
              }
              .p-radiobutton .p-radiobutton-box.p-highlight {
                border-color: #7B95A3;
                background: #7B95A3;
              }
              .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                border-color: #617c8a;
                background: #617c8a;
                color: #ffffff;
              }
              .p-radiobutton.p-invalid > .p-radiobutton-box {
                border-color: #e7a3a3;
              }
              .p-radiobutton:focus {
                outline: 0 none;
              }
              
              .p-input-filled .p-radiobutton .p-radiobutton-box {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
                background: #7B95A3;
              }
              .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
                background: #617c8a;
              }
              
              .p-rating {
                gap: 0.5rem;
              }
              .p-rating .p-rating-item .p-rating-icon {
                color: #666666;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                font-size: 1.143rem;
              }
              .p-rating .p-rating-item .p-rating-icon.p-icon {
                width: 1.143rem;
                height: 1.143rem;
              }
              .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
                color: #f3b9b9;
              }
              .p-rating .p-rating-item:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
                color: #7B95A3;
              }
              .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
                color: #7B95A3;
              }
              .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
                color: #d66161;
              }
              
              .p-selectbutton .p-button {
                background: #eaeaea;
                border: 1px solid #eaeaea;
                color: #333333;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-selectbutton .p-button .p-button-icon-left,
              .p-selectbutton .p-button .p-button-icon-right {
                color: #666666;
              }
              .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
                background: #c8c8c8;
                border-color: #c8c8c8;
                color: #333333;
              }
              .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
              .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
                color: #666666;
              }
              .p-selectbutton .p-button.p-highlight {
                background: #AFD3C8;
                border-color: #AFD3C8;
                color: #385048;
              }
              .p-selectbutton .p-button.p-highlight .p-button-icon-left,
              .p-selectbutton .p-button.p-highlight .p-button-icon-right {
                color: #385048;
              }
              .p-selectbutton .p-button.p-highlight:hover {
                background: #8DC8B5;
                border-color: #8DC8B5;
                color: #385048;
              }
              .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
              .p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
                color: #385048;
              }
              .p-selectbutton.p-invalid > .p-button {
                border-color: #e7a3a3;
              }
              
              .p-slider {
                background: #c4c4c4;
                border: 0 none;
                border-radius: 2px;
              }
              .p-slider.p-slider-horizontal {
                height: 0.286rem;
              }
              .p-slider.p-slider-horizontal .p-slider-handle {
                margin-top: -0.7145rem;
                margin-left: -0.7145rem;
              }
              .p-slider.p-slider-vertical {
                width: 0.286rem;
              }
              .p-slider.p-slider-vertical .p-slider-handle {
                margin-left: -0.7145rem;
                margin-bottom: -0.7145rem;
              }
              .p-slider .p-slider-handle {
                height: 1.429rem;
                width: 1.429rem;
                background: #ffffff;
                border: 2px solid #7f7f7f;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-slider .p-slider-handle:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-slider .p-slider-range {
                background: #7B95A3;
              }
              .p-slider:not(.p-disabled) .p-slider-handle:hover {
                background: 2px solid #7f7f7f;
                border-color: #7B95A3;
              }
              
              .p-treeselect {
                background: #ffffff;
                border: 1px solid #dadada;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-treeselect:not(.p-disabled):hover {
                border-color: #a6a6a6;
              }
              .p-treeselect:not(.p-disabled).p-focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: #7B95A3;
              }
              .p-treeselect .p-treeselect-label {
                padding: 0.429rem 0.429rem;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-treeselect .p-treeselect-label.p-placeholder {
                color: #a6a6a6;
              }
              .p-treeselect.p-treeselect-chip .p-treeselect-token {
                padding: 0.2145rem 0.429rem;
                margin-right: 0.5rem;
                background: #dadada;
                color: #666666;
                border-radius: 16px;
              }
              .p-treeselect .p-treeselect-trigger {
                background: transparent;
                color: #a6a6a6;
                width: 2.357rem;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              .p-treeselect.p-invalid.p-component {
                border-color: #e7a3a3;
              }
              
              .p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
                padding: 0.2145rem 0.429rem;
              }
              
              .p-treeselect-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-treeselect-panel .p-treeselect-header {
                padding: 0.429rem 0.857rem;
                border-bottom: 1px solid #dadada;
                color: #666666;
                background: #ffffff;
                margin: 0;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container {
                margin-right: 0.5rem;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter {
                padding-right: 1.429rem;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter-icon {
                right: 0.429rem;
                color: #a6a6a6;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter {
                padding-right: 2.858rem;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter-clear-icon {
                right: 1.858rem;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-close:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-treeselect-panel .p-treeselect-header .p-treeselect-close:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
                border: 0 none;
              }
              .p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
                padding: 0.429rem 0.857rem;
                color: #666666;
                background: transparent;
              }
              
              .p-input-filled .p-treeselect {
                background: #f4f4f4;
              }
              .p-input-filled .p-treeselect:not(.p-disabled):hover {
                background-color: #f4f4f4;
              }
              .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
                background-color: #f4f4f4;
              }
              
              .p-togglebutton.p-button {
                background: #eaeaea;
                border: 1px solid #eaeaea;
                color: #333333;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-togglebutton.p-button .p-button-icon-left,
              .p-togglebutton.p-button .p-button-icon-right {
                color: #666666;
              }
              .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
                background: #c8c8c8;
                border-color: #c8c8c8;
                color: #333333;
              }
              .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
              .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
                color: #666666;
              }
              .p-togglebutton.p-button.p-highlight {
                background: #AFD3C8;
                border-color: #AFD3C8;
                color: #385048;
              }
              .p-togglebutton.p-button.p-highlight .p-button-icon-left,
              .p-togglebutton.p-button.p-highlight .p-button-icon-right {
                color: #385048;
              }
              .p-togglebutton.p-button.p-highlight:hover {
                background: #8DC8B5;
                border-color: #8DC8B5;
                color: #385048;
              }
              .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
              .p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
                color: #385048;
              }
              .p-togglebutton.p-button.p-invalid > .p-button {
                border-color: #e7a3a3;
              }
              
              .p-button {
                color: #ffffff;
                background: #7B95A3;
                border: 1px solid #7B95A3;
                padding: 0.429rem 1rem;
                font-size: 1rem;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-button:enabled:hover, .p-button:not(button):not(a):not(.p-disabled):hover {
                background: #6c8999;
                color: #ffffff;
                border-color: #6c8999;
              }
              .p-button:enabled:active, .p-button:not(button):not(a):not(.p-disabled):active {
                background: #617c8a;
                color: #ffffff;
                border-color: #617c8a;
              }
              .p-button.p-button-outlined {
                background-color: transparent;
                color: #7B95A3;
                border: 1px solid;
              }
              .p-button.p-button-outlined:enabled:hover, .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(123, 149, 163, 0.04);
                color: #7B95A3;
                border: 1px solid;
              }
              .p-button.p-button-outlined:enabled:active, .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(123, 149, 163, 0.16);
                color: #7B95A3;
                border: 1px solid;
              }
              .p-button.p-button-outlined.p-button-plain {
                color: #a6a6a6;
                border-color: #a6a6a6;
              }
              .p-button.p-button-outlined.p-button-plain:enabled:hover, .p-button.p-button-outlined.p-button-plain:not(button):not(a):not(.p-disabled):hover {
                background: #f4f4f4;
                color: #a6a6a6;
              }
              .p-button.p-button-outlined.p-button-plain:enabled:active, .p-button.p-button-outlined.p-button-plain:not(button):not(a):not(.p-disabled):active {
                background: #dbdbdb;
                color: #a6a6a6;
              }
              .p-button.p-button-text {
                background-color: transparent;
                color: #7B95A3;
                border-color: transparent;
              }
              .p-button.p-button-text:enabled:hover, .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(123, 149, 163, 0.04);
                color: #7B95A3;
                border-color: transparent;
              }
              .p-button.p-button-text:enabled:active, .p-button.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(123, 149, 163, 0.16);
                color: #7B95A3;
                border-color: transparent;
              }
              .p-button.p-button-text.p-button-plain {
                color: #a6a6a6;
              }
              .p-button.p-button-text.p-button-plain:enabled:hover, .p-button.p-button-text.p-button-plain:not(button):not(a):not(.p-disabled):hover {
                background: #f4f4f4;
                color: #a6a6a6;
              }
              .p-button.p-button-text.p-button-plain:enabled:active, .p-button.p-button-text.p-button-plain:not(button):not(a):not(.p-disabled):active {
                background: #dbdbdb;
                color: #a6a6a6;
              }
              .p-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
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
                color: #7B95A3;
                background-color: #ffffff;
              }
              .p-button.p-button-raised {
                box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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
              .p-button.p-button-loading-label-only.p-button-loading-left .p-button-label {
                margin-left: 0.5rem;
              }
              .p-button.p-button-loading-label-only.p-button-loading-right .p-button-label {
                margin-right: 0.5rem;
              }
              .p-button.p-button-loading-label-only.p-button-loading-top .p-button-label {
                margin-top: 0.5rem;
              }
              .p-button.p-button-loading-label-only.p-button-loading-bottom .p-button-label {
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
              
              .p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button, .p-fileupload-choose.p-button-secondary {
                color: #ffffff;
                background: #a3897b;
                border: 1px solid #8e6f5f;
              }
              .p-button.p-button-secondary:enabled:hover, .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-secondary > .p-button:enabled:hover, .p-buttonset.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-secondary > .p-button:enabled:hover, .p-splitbutton.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-secondary:enabled:hover, .p-fileupload-choose.p-button-secondary:not(button):not(a):not(.p-disabled):hover {
                background: #8e6f5f;
                color: #ffffff;
                border-color: #7a5743;
              }
              .p-button.p-button-secondary:enabled:focus, .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-secondary > .p-button:enabled:focus, .p-buttonset.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-secondary > .p-button:enabled:focus, .p-splitbutton.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-secondary:enabled:focus, .p-fileupload-choose.p-button-secondary:not(button):not(a):not(.p-disabled):focus {
                box-shadow: 0 0 0 0.2rem #bfaaa0;
              }
              .p-button.p-button-secondary:enabled:active, .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-secondary > .p-button:enabled:active, .p-buttonset.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-secondary > .p-button:enabled:active, .p-splitbutton.p-button-secondary > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-secondary:enabled:active, .p-fileupload-choose.p-button-secondary:not(button):not(a):not(.p-disabled):active {
                background: #7a5743;
                color: #ffffff;
                border-color: #6e4e3c;
              }
              .p-button.p-button-secondary.p-button-outlined, .p-buttonset.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined, .p-fileupload-choose.p-button-secondary.p-button-outlined {
                background-color: transparent;
                color: #a3897b;
                border: 1px solid;
              }
              .p-button.p-button-secondary.p-button-outlined:enabled:hover, .p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 137, 123, 0.04);
                color: #a3897b;
                border: 1px solid;
              }
              .p-button.p-button-secondary.p-button-outlined:enabled:active, .p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 137, 123, 0.16);
                color: #a3897b;
                border: 1px solid;
              }
              .p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text, .p-fileupload-choose.p-button-secondary.p-button-text {
                background-color: transparent;
                color: #a3897b;
                border-color: transparent;
              }
              .p-button.p-button-secondary.p-button-text:enabled:hover, .p-button.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-text:enabled:hover, .p-fileupload-choose.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 137, 123, 0.04);
                border-color: transparent;
                color: #a3897b;
              }
              .p-button.p-button-secondary.p-button-text:enabled:active, .p-button.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-secondary.p-button-text:enabled:active, .p-fileupload-choose.p-button-secondary.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 137, 123, 0.16);
                border-color: transparent;
                color: #a3897b;
              }
              
              .p-button.p-button-info, .p-buttonset.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button, .p-fileupload-choose.p-button-info {
                color: #3D4447;
                background: #A3DEF8;
                border: 1px solid #79C8EB;
              }
              .p-button.p-button-info:enabled:hover, .p-button.p-button-info:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-info > .p-button:enabled:hover, .p-buttonset.p-button-info > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-info > .p-button:enabled:hover, .p-splitbutton.p-button-info > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-info:enabled:hover, .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):hover {
                background: #81CBEC;
                color: #3D4447;
                border-color: #60B7DE;
              }
              .p-button.p-button-info:enabled:focus, .p-button.p-button-info:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-info > .p-button:enabled:focus, .p-buttonset.p-button-info > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-info > .p-button:enabled:focus, .p-splitbutton.p-button-info > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-info:enabled:focus, .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):focus {
                box-shadow: 0 0 0 0.2rem #d2effc;
              }
              .p-button.p-button-info:enabled:active, .p-button.p-button-info:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-info > .p-button:enabled:active, .p-buttonset.p-button-info > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-info > .p-button:enabled:active, .p-splitbutton.p-button-info > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-info:enabled:active, .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):active {
                background: #3ea9db;
                color: #3D4447;
                border-color: #2987B1;
              }
              .p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined, .p-fileupload-choose.p-button-info.p-button-outlined {
                background-color: transparent;
                color: #A3DEF8;
                border: 1px solid;
              }
              .p-button.p-button-info.p-button-outlined:enabled:hover, .p-button.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-info.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 222, 248, 0.04);
                color: #A3DEF8;
                border: 1px solid;
              }
              .p-button.p-button-info.p-button-outlined:enabled:active, .p-button.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-info.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-info.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 222, 248, 0.16);
                color: #A3DEF8;
                border: 1px solid;
              }
              .p-button.p-button-info.p-button-text, .p-buttonset.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text, .p-fileupload-choose.p-button-info.p-button-text {
                background-color: transparent;
                color: #A3DEF8;
                border-color: transparent;
              }
              .p-button.p-button-info.p-button-text:enabled:hover, .p-button.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-info.p-button-text:enabled:hover, .p-fileupload-choose.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 222, 248, 0.04);
                border-color: transparent;
                color: #A3DEF8;
              }
              .p-button.p-button-info.p-button-text:enabled:active, .p-button.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-info > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-info > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-info.p-button-text:enabled:active, .p-fileupload-choose.p-button-info.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 222, 248, 0.16);
                border-color: transparent;
                color: #A3DEF8;
              }
              
              .p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button, .p-fileupload-choose.p-button-success {
                color: #323E39;
                background: #A3E2C6;
                border: 1px solid #80CAAA;
              }
              .p-button.p-button-success:enabled:hover, .p-button.p-button-success:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button:enabled:hover, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button:enabled:hover, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success:enabled:hover, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):hover {
                background: #80CAAA;
                color: #323E39;
                border-color: #5EA285;
              }
              .p-button.p-button-success:enabled:focus, .p-button.p-button-success:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-success > .p-button:enabled:focus, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-success > .p-button:enabled:focus, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-success:enabled:focus, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):focus {
                box-shadow: 0 0 0 0.2rem #caeede;
              }
              .p-button.p-button-success:enabled:active, .p-button.p-button-success:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button:enabled:active, .p-buttonset.p-button-success > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button:enabled:active, .p-splitbutton.p-button-success > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success:enabled:active, .p-fileupload-choose.p-button-success:not(button):not(a):not(.p-disabled):active {
                background: #31B57C;
                color: #323E39;
                border-color: #5EA285;
              }
              .p-button.p-button-success.p-button-outlined, .p-buttonset.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined, .p-fileupload-choose.p-button-success.p-button-outlined {
                background-color: transparent;
                color: #A3E2C6;
                border: 1px solid;
              }
              .p-button.p-button-success.p-button-outlined:enabled:hover, .p-button.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 226, 198, 0.04);
                color: #A3E2C6;
                border: 1px solid;
              }
              .p-button.p-button-success.p-button-outlined:enabled:active, .p-button.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-success.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 226, 198, 0.16);
                color: #A3E2C6;
                border: 1px solid;
              }
              .p-button.p-button-success.p-button-text, .p-buttonset.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text, .p-fileupload-choose.p-button-success.p-button-text {
                background-color: transparent;
                color: #A3E2C6;
                border-color: transparent;
              }
              .p-button.p-button-success.p-button-text:enabled:hover, .p-button.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-success.p-button-text:enabled:hover, .p-fileupload-choose.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 226, 198, 0.04);
                border-color: transparent;
                color: #A3E2C6;
              }
              .p-button.p-button-success.p-button-text:enabled:active, .p-button.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-success > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-success > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-success.p-button-text:enabled:active, .p-fileupload-choose.p-button-success.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 226, 198, 0.16);
                border-color: transparent;
                color: #A3E2C6;
              }
              
              .p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button, .p-fileupload-choose.p-button-warning {
                color: #333333;
                background: #ffe38e;
                border: 1px solid #ffd95e;
              }
              .p-button.p-button-warning:enabled:hover, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button:enabled:hover, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button:enabled:hover, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning:enabled:hover, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):hover {
                background: #ffd95e;
                color: #333333;
                border-color: #ffce3c;
              }
              .p-button.p-button-warning:enabled:focus, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-warning > .p-button:enabled:focus, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-warning > .p-button:enabled:focus, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-warning:enabled:focus, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):focus {
                box-shadow: 0 0 0 0.2rem #ffe9a8;
              }
              .p-button.p-button-warning:enabled:active, .p-button.p-button-warning:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button:enabled:active, .p-buttonset.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button:enabled:active, .p-splitbutton.p-button-warning > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning:enabled:active, .p-fileupload-choose.p-button-warning:not(button):not(a):not(.p-disabled):active {
                background: #ffce3c;
                color: #333333;
                border-color: #ffc62a;
              }
              .p-button.p-button-warning.p-button-outlined, .p-buttonset.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined, .p-fileupload-choose.p-button-warning.p-button-outlined {
                background-color: transparent;
                color: #ffe38e;
                border: 1px solid;
              }
              .p-button.p-button-warning.p-button-outlined:enabled:hover, .p-button.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(255, 227, 142, 0.04);
                color: #ffe38e;
                border: 1px solid;
              }
              .p-button.p-button-warning.p-button-outlined:enabled:active, .p-button.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-warning.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(255, 227, 142, 0.16);
                color: #ffe38e;
                border: 1px solid;
              }
              .p-button.p-button-warning.p-button-text, .p-buttonset.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text, .p-fileupload-choose.p-button-warning.p-button-text {
                background-color: transparent;
                color: #ffe38e;
                border-color: transparent;
              }
              .p-button.p-button-warning.p-button-text:enabled:hover, .p-button.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-warning.p-button-text:enabled:hover, .p-fileupload-choose.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(255, 227, 142, 0.04);
                border-color: transparent;
                color: #ffe38e;
              }
              .p-button.p-button-warning.p-button-text:enabled:active, .p-button.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-warning.p-button-text:enabled:active, .p-fileupload-choose.p-button-warning.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(255, 227, 142, 0.16);
                border-color: transparent;
                color: #ffe38e;
              }
              
              .p-button.p-button-help, .p-buttonset.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button, .p-fileupload-choose.p-button-help {
                color: #333333;
                background: #e9bef1;
                border: 1px solid #de9eea;
              }
              .p-button.p-button-help:enabled:hover, .p-button.p-button-help:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-help > .p-button:enabled:hover, .p-buttonset.p-button-help > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-help > .p-button:enabled:hover, .p-splitbutton.p-button-help > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-help:enabled:hover, .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):hover {
                background: #de9eea;
                color: #333333;
                border-color: #d37de3;
              }
              .p-button.p-button-help:enabled:focus, .p-button.p-button-help:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-help > .p-button:enabled:focus, .p-buttonset.p-button-help > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-help > .p-button:enabled:focus, .p-splitbutton.p-button-help > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-help:enabled:focus, .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):focus {
                box-shadow: 0 0 0 0.2rem #f0d3f6;
              }
              .p-button.p-button-help:enabled:active, .p-button.p-button-help:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-help > .p-button:enabled:active, .p-buttonset.p-button-help > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-help > .p-button:enabled:active, .p-splitbutton.p-button-help > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-help:enabled:active, .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):active {
                background: #d37de3;
                color: #333333;
                border-color: #c85ddc;
              }
              .p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined, .p-fileupload-choose.p-button-help.p-button-outlined {
                background-color: transparent;
                color: #e9bef1;
                border: 1px solid;
              }
              .p-button.p-button-help.p-button-outlined:enabled:hover, .p-button.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-help.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(233, 190, 241, 0.04);
                color: #e9bef1;
                border: 1px solid;
              }
              .p-button.p-button-help.p-button-outlined:enabled:active, .p-button.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-help.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-help.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(233, 190, 241, 0.16);
                color: #e9bef1;
                border: 1px solid;
              }
              .p-button.p-button-help.p-button-text, .p-buttonset.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text, .p-fileupload-choose.p-button-help.p-button-text {
                background-color: transparent;
                color: #e9bef1;
                border-color: transparent;
              }
              .p-button.p-button-help.p-button-text:enabled:hover, .p-button.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-help.p-button-text:enabled:hover, .p-fileupload-choose.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(233, 190, 241, 0.04);
                border-color: transparent;
                color: #e9bef1;
              }
              .p-button.p-button-help.p-button-text:enabled:active, .p-button.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-help > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-help > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-help.p-button-text:enabled:active, .p-fileupload-choose.p-button-help.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(233, 190, 241, 0.16);
                border-color: transparent;
                color: #e9bef1;
              }
              
              .p-button.p-button-danger, .p-buttonset.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button, .p-fileupload-choose.p-button-danger {
                color: #262222;
                background: #F4B6B6;
                border: 1px solid #E38787;
              }
              .p-button.p-button-danger:enabled:hover, .p-button.p-button-danger:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-danger > .p-button:enabled:hover, .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-danger > .p-button:enabled:hover, .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-danger:enabled:hover, .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):hover {
                background: #EF9999;
                color: #262222;
                border-color: #CB5858;
              }
              .p-button.p-button-danger:enabled:focus, .p-button.p-button-danger:not(button):not(a):not(.p-disabled):focus, .p-buttonset.p-button-danger > .p-button:enabled:focus, .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):focus, .p-splitbutton.p-button-danger > .p-button:enabled:focus, .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):focus, .p-fileupload-choose.p-button-danger:enabled:focus, .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):focus {
                box-shadow: 0 0 0 0.2rem #fbe2e2;
              }
              .p-button.p-button-danger:enabled:active, .p-button.p-button-danger:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-danger > .p-button:enabled:active, .p-buttonset.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-danger > .p-button:enabled:active, .p-splitbutton.p-button-danger > .p-button:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-danger:enabled:active, .p-fileupload-choose.p-button-danger:not(button):not(a):not(.p-disabled):active {
                background: #EB5656;
                color: #262222;
                border-color: #B73737;
              }
              .p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined, .p-fileupload-choose.p-button-danger.p-button-outlined {
                background-color: transparent;
                color: #F4B6B6;
                border: 1px solid;
              }
              .p-button.p-button-danger.p-button-outlined:enabled:hover, .p-button.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:hover, .p-fileupload-choose.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
                background: rgba(244, 182, 182, 0.04);
                color: #F4B6B6;
                border: 1px solid;
              }
              .p-button.p-button-danger.p-button-outlined:enabled:active, .p-button.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:active, .p-fileupload-choose.p-button-danger.p-button-outlined:not(button):not(a):not(.p-disabled):active {
                background: rgba(244, 182, 182, 0.16);
                color: #F4B6B6;
                border: 1px solid;
              }
              .p-button.p-button-danger.p-button-text, .p-buttonset.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text, .p-fileupload-choose.p-button-danger.p-button-text {
                background-color: transparent;
                color: #F4B6B6;
                border-color: transparent;
              }
              .p-button.p-button-danger.p-button-text:enabled:hover, .p-button.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:hover, .p-buttonset.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover, .p-fileupload-choose.p-button-danger.p-button-text:enabled:hover, .p-fileupload-choose.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):hover {
                background: rgba(244, 182, 182, 0.04);
                border-color: transparent;
                color: #F4B6B6;
              }
              .p-button.p-button-danger.p-button-text:enabled:active, .p-button.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:active, .p-buttonset.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:active, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active, .p-fileupload-choose.p-button-danger.p-button-text:enabled:active, .p-fileupload-choose.p-button-danger.p-button-text:not(button):not(a):not(.p-disabled):active {
                background: rgba(244, 182, 182, 0.16);
                border-color: transparent;
                color: #F4B6B6;
              }
              
              .p-button.p-button-link {
                color: #617c8a;
                background: transparent;
                border: transparent;
              }
              .p-button.p-button-link:enabled:hover, .p-button.p-button-link:not(button):not(a):not(.p-disabled):hover {
                background: transparent;
                color: #617c8a;
                border-color: transparent;
              }
              .p-button.p-button-link:enabled:hover .p-button-label, .p-button.p-button-link:not(button):not(a):not(.p-disabled):hover .p-button-label {
                text-decoration: underline;
              }
              .p-button.p-button-link:enabled:focus, .p-button.p-button-link:not(button):not(a):not(.p-disabled):focus {
                background: transparent;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                border-color: transparent;
              }
              .p-button.p-button-link:enabled:active, .p-button.p-button-link:not(button):not(a):not(.p-disabled):active {
                background: transparent;
                color: #617c8a;
                border-color: transparent;
              }
              
              .p-splitbutton {
                border-radius: 2px;
              }
              .p-splitbutton.p-button-outlined > .p-button {
                background-color: transparent;
                color: #7B95A3;
                border: 1px solid;
              }
              .p-splitbutton.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(123, 149, 163, 0.04);
                color: #7B95A3;
              }
              .p-splitbutton.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(123, 149, 163, 0.16);
                color: #7B95A3;
              }
              .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
                color: #a6a6a6;
                border-color: #a6a6a6;
              }
              .p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:hover, .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: #f4f4f4;
                color: #a6a6a6;
              }
              .p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:active, .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):active {
                background: #dbdbdb;
                color: #a6a6a6;
              }
              .p-splitbutton.p-button-text > .p-button {
                background-color: transparent;
                color: #7B95A3;
                border-color: transparent;
              }
              .p-splitbutton.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(123, 149, 163, 0.04);
                color: #7B95A3;
                border-color: transparent;
              }
              .p-splitbutton.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(123, 149, 163, 0.16);
                color: #7B95A3;
                border-color: transparent;
              }
              .p-splitbutton.p-button-text.p-button-plain > .p-button {
                color: #a6a6a6;
              }
              .p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:hover, .p-splitbutton.p-button-text.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: #f4f4f4;
                color: #a6a6a6;
              }
              .p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:active, .p-splitbutton.p-button-text.p-button-plain > .p-button:not(button):not(a):not(.p-disabled):active {
                background: #dbdbdb;
                color: #a6a6a6;
              }
              .p-splitbutton.p-button-raised {
                box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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
              
              .p-splitbutton.p-button-secondary.p-button-outlined > .p-button {
                background-color: transparent;
                color: #a3897b;
                border: 1px solid;
              }
              .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 137, 123, 0.04);
                color: #a3897b;
              }
              .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 137, 123, 0.16);
                color: #a3897b;
              }
              .p-splitbutton.p-button-secondary.p-button-text > .p-button {
                background-color: transparent;
                color: #a3897b;
                border-color: transparent;
              }
              .p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 137, 123, 0.04);
                border-color: transparent;
                color: #a3897b;
              }
              .p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 137, 123, 0.16);
                border-color: transparent;
                color: #a3897b;
              }
              
              .p-splitbutton.p-button-info.p-button-outlined > .p-button {
                background-color: transparent;
                color: #A3DEF8;
                border: 1px solid;
              }
              .p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 222, 248, 0.04);
                color: #A3DEF8;
              }
              .p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 222, 248, 0.16);
                color: #A3DEF8;
              }
              .p-splitbutton.p-button-info.p-button-text > .p-button {
                background-color: transparent;
                color: #A3DEF8;
                border-color: transparent;
              }
              .p-splitbutton.p-button-info.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-info.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 222, 248, 0.04);
                border-color: transparent;
                color: #A3DEF8;
              }
              .p-splitbutton.p-button-info.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-info.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 222, 248, 0.16);
                border-color: transparent;
                color: #A3DEF8;
              }
              
              .p-splitbutton.p-button-success.p-button-outlined > .p-button {
                background-color: transparent;
                color: #A3E2C6;
                border: 1px solid;
              }
              .p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 226, 198, 0.04);
                color: #A3E2C6;
              }
              .p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 226, 198, 0.16);
                color: #A3E2C6;
              }
              .p-splitbutton.p-button-success.p-button-text > .p-button {
                background-color: transparent;
                color: #A3E2C6;
                border-color: transparent;
              }
              .p-splitbutton.p-button-success.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-success.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(163, 226, 198, 0.04);
                border-color: transparent;
                color: #A3E2C6;
              }
              .p-splitbutton.p-button-success.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-success.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(163, 226, 198, 0.16);
                border-color: transparent;
                color: #A3E2C6;
              }
              
              .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
                background-color: transparent;
                color: #ffe38e;
                border: 1px solid;
              }
              .p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(255, 227, 142, 0.04);
                color: #ffe38e;
              }
              .p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(255, 227, 142, 0.16);
                color: #ffe38e;
              }
              .p-splitbutton.p-button-warning.p-button-text > .p-button {
                background-color: transparent;
                color: #ffe38e;
                border-color: transparent;
              }
              .p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-warning.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(255, 227, 142, 0.04);
                border-color: transparent;
                color: #ffe38e;
              }
              .p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-warning.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(255, 227, 142, 0.16);
                border-color: transparent;
                color: #ffe38e;
              }
              
              .p-splitbutton.p-button-help.p-button-outlined > .p-button {
                background-color: transparent;
                color: #e9bef1;
                border: 1px solid;
              }
              .p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(233, 190, 241, 0.04);
                color: #e9bef1;
              }
              .p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(233, 190, 241, 0.16);
                color: #e9bef1;
              }
              .p-splitbutton.p-button-help.p-button-text > .p-button {
                background-color: transparent;
                color: #e9bef1;
                border-color: transparent;
              }
              .p-splitbutton.p-button-help.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-help.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(233, 190, 241, 0.04);
                border-color: transparent;
                color: #e9bef1;
              }
              .p-splitbutton.p-button-help.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-help.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(233, 190, 241, 0.16);
                border-color: transparent;
                color: #e9bef1;
              }
              
              .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
                background-color: transparent;
                color: #F4B6B6;
                border: 1px solid;
              }
              .p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:hover, .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(244, 182, 182, 0.04);
                color: #F4B6B6;
              }
              .p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:active, .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(244, 182, 182, 0.16);
                color: #F4B6B6;
              }
              .p-splitbutton.p-button-danger.p-button-text > .p-button {
                background-color: transparent;
                color: #F4B6B6;
                border-color: transparent;
              }
              .p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:hover, .p-splitbutton.p-button-danger.p-button-text > .p-button:not(button):not(a):not(.p-disabled):hover {
                background: rgba(244, 182, 182, 0.04);
                border-color: transparent;
                color: #F4B6B6;
              }
              .p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:active, .p-splitbutton.p-button-danger.p-button-text > .p-button:not(button):not(a):not(.p-disabled):active {
                background: rgba(244, 182, 182, 0.16);
                border-color: transparent;
                color: #F4B6B6;
              }
              
              .p-speeddial-button.p-button.p-button-icon-only {
                width: 4rem;
                height: 4rem;
              }
              .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
                font-size: 1.3rem;
              }
              .p-speeddial-button.p-button.p-button-icon-only .p-button-icon.p-icon {
                width: 1.3rem;
                height: 1.3rem;
              }
              
              .p-speeddial-action {
                width: 3rem;
                height: 3rem;
                background: #324249;
                color: #fff;
              }
              .p-speeddial-action:hover {
                background: #222c31;
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
              .p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,
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
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                margin: 0.5rem;
              }
              .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
              .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-carousel .p-carousel-content .p-carousel-prev:focus,
              .p-carousel .p-carousel-content .p-carousel-next:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-carousel .p-carousel-indicators {
                padding: 1rem;
              }
              .p-carousel .p-carousel-indicators .p-carousel-indicator {
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
              }
              .p-carousel .p-carousel-indicators .p-carousel-indicator button {
                background-color: #7B95A3;
                width: 2rem;
                height: 0.5rem;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
                background: #617c8a;
              }
              .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
                background: #AFD3C8;
                color: #385048;
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
                background: #7B95A3;
                color: #ffffff;
                border: 1px solid #7B95A3;
                border-width: 1px 1px 0 1px;
                padding: 0.857rem 1rem;
                font-weight: 700;
              }
              .p-datatable .p-datatable-footer {
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                border-width: 0 1px 1px 1px;
                padding: 0.571rem 1rem;
                font-weight: normal;
              }
              .p-datatable .p-datatable-thead > tr > th {
                text-align: left;
                padding: 0.571rem 0.857rem;
                border: 1px solid #dadada;
                border-width: 1px 1px 1px 1px;
                font-weight: 700;
                color: #666666;
                background: #ffffff;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-datatable .p-datatable-tfoot > tr > td {
                text-align: left;
                padding: 0.571rem 0.857rem;
                border: 1px solid #dadada;
                border-width: 1px;
                font-weight: 700;
                color: #666666;
                background: #ffffff;
              }
              .p-datatable .p-sortable-column .p-sortable-column-icon {
                color: #666666;
                margin-left: 0.5rem;
              }
              .p-datatable .p-sortable-column .p-sortable-column-badge {
                border-radius: 50%;
                height: 1.143rem;
                min-width: 1.143rem;
                line-height: 1.143rem;
                color: #385048;
                background: #AFD3C8;
                margin-left: 0.5rem;
              }
              .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
                background: #eaeaea;
                color: #666666;
              }
              .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover .p-sortable-column-icon {
                color: #666666;
              }
              .p-datatable .p-sortable-column.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
                color: #385048;
              }
              .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
                background: #AFD3C8;
                color: #385048;
              }
              .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
                color: #385048;
              }
              .p-datatable .p-sortable-column:focus {
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
                outline: 0 none;
              }
              .p-datatable .p-datatable-tbody > tr {
                background: #ffffff;
                color: #666666;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-datatable .p-datatable-tbody > tr > td {
                text-align: left;
                border: 1px solid #dadada;
                border-width: 1px;
                padding: 0.571rem 0.857rem;
              }
              .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus,
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
                margin-right: 0.5rem;
              }
              .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
                font-weight: 700;
              }
              .p-datatable .p-datatable-tbody > tr > td.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-datatable .p-datatable-tbody > tr.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
                box-shadow: inset 0 2px 0 0 #AFD3C8;
              }
              .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
                box-shadow: inset 0 -2px 0 0 #AFD3C8;
              }
              .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:not(.p-highlight):not(.p-datatable-emptymessage):hover {
                background: #eaeaea;
                color: #666666;
              }
              .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:focus {
                outline: 0.15rem solid #e4e9ec;
                outline-offset: -0.15rem;
              }
              .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover {
                background: #eaeaea;
                color: #666666;
              }
              .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:focus {
                outline: 0.15rem solid #e4e9ec;
                outline-offset: -0.15rem;
              }
              .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
                background: #eaeaea;
                color: #666666;
              }
              .p-datatable .p-column-resizer-helper {
                background: #7B95A3;
              }
              .p-datatable .p-datatable-scrollable-header,
              .p-datatable .p-datatable-scrollable-footer {
                background: #7B95A3;
              }
              .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
              .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot, .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead,
              .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
                background-color: #ffffff;
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
              .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
                border-width: 1px 0 1px 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
                border-width: 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
                border-width: 1px 0 0 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
                border-width: 1px 1px 0 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
                border-width: 1px 0 1px 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
                border-width: 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
                border-width: 1px 0 1px 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
                border-width: 1px 1px 1px 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
                border-width: 0 0 1px 1px;
              }
              .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
                border-width: 0 1px 1px 1px;
              }
              .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
                border-width: 0 0 1px 1px;
              }
              .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
                border-width: 0 1px 1px 1px;
              }
              .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
                border-width: 0 0 0 1px;
              }
              .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
                border-width: 0 1px 0 1px;
              }
              .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
                background: #f8f8f8;
              }
              .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
                color: #385048;
              }
              .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
                color: #385048;
              }
              .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd + .p-row-expanded {
                background: #f8f8f8;
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
                background: rgba(123, 149, 163, 0.16);
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
                background: #7B95A3;
                color: #ffffff;
                border: 1px solid #7B95A3;
                border-width: 1px 1px 0 1px;
                padding: 0.857rem 1rem;
                font-weight: 700;
              }
              .p-dataview .p-dataview-content {
                background: #ffffff;
                color: #666666;
                border: 0 none;
                padding: 0;
              }
              .p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {
                border: 1px solid #dadada;
                border-width: 0 0 1px 0;
              }
              .p-dataview .p-dataview-footer {
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                border-width: 0 1px 1px 1px;
                padding: 0.571rem 1rem;
                font-weight: normal;
                border-bottom-left-radius: 2px;
                border-bottom-right-radius: 2px;
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
                background: #7B95A3;
                color: #ffffff;
                border: 1px solid #7B95A3;
                border-width: 1px 1px 0 1px;
                padding: 0.857rem 1rem;
                font-weight: 700;
              }
              .p-datascroller .p-datascroller-content {
                background: #ffffff;
                color: #666666;
                border: 0 none;
                padding: 0;
              }
              .p-datascroller.p-datascroller-inline .p-datascroller-list > li {
                border: 1px solid #dadada;
                border-width: 0 0 1px 0;
              }
              .p-datascroller .p-datascroller-footer {
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                border-width: 0 1px 1px 1px;
                padding: 0.571rem 1rem;
                font-weight: normal;
                border-bottom-left-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              
              .p-column-filter-row .p-column-filter-menu-button,
              .p-column-filter-row .p-column-filter-clear-button {
                margin-left: 0.5rem;
              }
              
              .p-column-filter-menu-button {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-column-filter-menu-button:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
                background: transparent;
                color: #666666;
              }
              .p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
                background: #AFD3C8;
                color: #385048;
              }
              .p-column-filter-menu-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              .p-column-filter-clear-button {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-column-filter-clear-button:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-column-filter-clear-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              .p-column-filter-overlay {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                min-width: 12.5rem;
              }
              .p-column-filter-overlay .p-column-filter-row-items {
                padding: 0;
              }
              .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {
                margin: 0;
                padding: 0.429rem 0.857rem;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
                color: #666666;
                background: #f4f4f4;
              }
              .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
                border-top: 1px solid #dadada;
                margin: 0;
              }
              
              .p-column-filter-overlay-menu .p-column-filter-operator {
                padding: 0.429rem 0.857rem;
                border-bottom: 1px solid #dadada;
                color: #666666;
                background: #ffffff;
                margin: 0;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-column-filter-overlay-menu .p-column-filter-constraint {
                padding: 0.571rem 1rem;
                border-bottom: 1px solid #dadada;
              }
              .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {
                margin-bottom: 0.5rem;
              }
              .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {
                margin-top: 0.5rem;
              }
              .p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
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
                background: #7B95A3;
                border: 1px solid #7B95A3;
                color: #ffffff;
              }
              .fc.fc-unthemed .fc-view-container td.fc-widget-content {
                border: 1px solid #dadada;
                color: #666666;
              }
              .fc.fc-unthemed .fc-view-container td.fc-head-container {
                border: 1px solid #7B95A3;
              }
              .fc.fc-unthemed .fc-view-container .fc-view {
                background: #ffffff;
              }
              .fc.fc-unthemed .fc-view-container .fc-row {
                border-right: 1px solid #7B95A3;
              }
              .fc.fc-unthemed .fc-view-container .fc-event {
                background: #AFD3C8;
                border: 1px solid #6c8999;
                color: #385048;
              }
              .fc.fc-unthemed .fc-view-container .fc-divider {
                background: #7B95A3;
                border: 1px solid #7B95A3;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button {
                color: #ffffff;
                background: #7B95A3;
                border: 1px solid #7B95A3;
                font-size: 1rem;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
                display: flex;
                align-items: center;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
                background: #6c8999;
                color: #ffffff;
                border-color: #6c8999;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
                background: #617c8a;
                color: #ffffff;
                border-color: #617c8a;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left {
                font-family: "PrimeIcons" !important;
                text-indent: 0;
                font-size: 1rem;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left:before {
                content: "\e900";
              }
              .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right {
                font-family: "PrimeIcons" !important;
                text-indent: 0;
                font-size: 1rem;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right:before {
                content: "\e901";
              }
              .fc.fc-unthemed .fc-toolbar .fc-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
                background: #eaeaea;
                border: 1px solid #eaeaea;
                color: #333333;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:hover {
                background: #c8c8c8;
                border-color: #c8c8c8;
                color: #333333;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {
                background: #AFD3C8;
                border-color: #AFD3C8;
                color: #385048;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {
                background: #8DC8B5;
                border-color: #8DC8B5;
                color: #385048;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:focus, .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                z-index: 1;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {
                border-radius: 0;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:first-child {
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:last-child {
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {
                border-color: #dadada;
              }
              .fc.fc-theme-standard .fc-view-harness th {
                background: #7B95A3;
                border-color: #7B95A3;
                color: #ffffff;
              }
              .fc.fc-theme-standard .fc-view-harness td {
                color: #666666;
                border-color: #dadada;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-view {
                background: #ffffff;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover {
                background: none;
                border: 0 none;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header {
                border: 1px solid #7B95A3;
                padding: 0.857rem 1rem;
                background: #7B95A3;
                color: #ffffff;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close {
                opacity: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                font-family: "PrimeIcons" !important;
                font-size: 1rem;
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:before {
                content: "\e90b";
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header .fc-popover-close:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-body {
                padding: 0.571rem 1rem;
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                border-top: 0 none;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event {
                color: #385048;
                background: #AFD3C8;
                border-color: #6c8999;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event .fc-event-main {
                color: #385048;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event .fc-daygrid-event-dot {
                background: #AFD3C8;
                border-color: #6c8999;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event:hover {
                background: #f4f4f4;
                color: #666666;
              }
              .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
                background: #7B95A3;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button {
                color: #ffffff;
                background: #7B95A3;
                border: 1px solid #7B95A3;
                font-size: 1rem;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
                background: #6c8999;
                color: #ffffff;
                border-color: #6c8999;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
                background: #617c8a;
                color: #ffffff;
                border-color: #617c8a;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
                opacity: 0.5;
                color: #ffffff;
                background: #7B95A3;
                border: 1px solid #7B95A3;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left {
                font-family: "PrimeIcons" !important;
                text-indent: 0;
                font-size: 1rem;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left:before {
                content: "\e900";
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right {
                font-family: "PrimeIcons" !important;
                text-indent: 0;
                font-size: 1rem;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right:before {
                content: "\e901";
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {
                background: #eaeaea;
                border: 1px solid #eaeaea;
                color: #333333;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:hover {
                background: #c8c8c8;
                border-color: #c8c8c8;
                color: #333333;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active {
                background: #AFD3C8;
                border-color: #AFD3C8;
                color: #385048;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button.fc-button-active:hover, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button.fc-button-active:hover {
                background: #8DC8B5;
                border-color: #8DC8B5;
                color: #385048;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:not(:disabled):focus, .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:not(:disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
                z-index: 1;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {
                border-radius: 0;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:first-child {
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:last-child {
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
              }
              .fc.fc-theme-standard .fc-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              
              .p-orderlist .p-orderlist-controls {
                padding: 0.571rem 1rem;
              }
              .p-orderlist .p-orderlist-controls .p-button {
                margin-bottom: 0.5rem;
              }
              .p-orderlist .p-orderlist-header {
                background: #7B95A3;
                color: #ffffff;
                border: 1px solid #7B95A3;
                padding: 0.857rem 1rem;
                font-weight: 700;
                border-bottom: 0 none;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-orderlist .p-orderlist-filter-container {
                padding: 0.857rem 1rem;
                background: #ffffff;
                border: 1px solid #7B95A3;
                border-bottom: 0 none;
              }
              .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-input {
                padding-right: 1.429rem;
              }
              .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {
                right: 0.429rem;
                color: #a6a6a6;
              }
              .p-orderlist .p-orderlist-list {
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                padding: 0;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-orderlist .p-orderlist-list .p-orderlist-item {
                padding: 0.429rem 0.857rem;
                margin: 0;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: transform 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
                background: #f4f4f4;
                color: #666666;
              }
              .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
                background: #f8f8f8;
              }
              .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
                background: #f4f4f4;
              }
              
              .p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
                background: #f4f4f4;
                color: #666666;
              }
              .p-organizationchart .p-organizationchart-node-content.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
                color: #5da68f;
              }
              .p-organizationchart .p-organizationchart-line-down {
                background: #c8c8c8;
              }
              .p-organizationchart .p-organizationchart-line-left {
                border-right: 1px solid #dadada;
                border-color: #c8c8c8;
              }
              .p-organizationchart .p-organizationchart-line-top {
                border-top: 1px solid #dadada;
                border-color: #c8c8c8;
              }
              .p-organizationchart .p-organizationchart-node-content {
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                padding: 0.571rem 1rem;
              }
              .p-organizationchart .p-organizationchart-node-content .p-node-toggler {
                background: inherit;
                color: inherit;
                border-radius: 50%;
              }
              .p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              .p-paginator {
                background: #ffffff;
                color: #666666;
                border: solid #dadada;
                border-width: 1px;
                padding: 0;
                border-radius: 2px;
              }
              .p-paginator .p-paginator-first,
              .p-paginator .p-paginator-prev,
              .p-paginator .p-paginator-next,
              .p-paginator .p-paginator-last {
                background-color: transparent;
                border: 0 none;
                color: #666666;
                min-width: 2.357rem;
                height: 2.357rem;
                margin: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
              .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
              .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
              .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
                background: #f4f4f4;
                border-color: transparent;
                color: #666666;
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
                color: #666666;
                min-width: 2.357rem;
                height: 2.357rem;
                margin: 0;
                padding: 0 0.5rem;
              }
              .p-paginator .p-paginator-pages .p-paginator-page {
                background-color: transparent;
                border: 0 none;
                color: #666666;
                min-width: 2.357rem;
                height: 2.357rem;
                margin: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 0;
              }
              .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                background: #AFD3C8;
                border-color: #AFD3C8;
                color: #385048;
              }
              .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
                background: #f4f4f4;
                border-color: transparent;
                color: #666666;
              }
              
              .p-picklist .p-picklist-buttons {
                padding: 0.571rem 1rem;
              }
              .p-picklist .p-picklist-buttons .p-button {
                margin-bottom: 0.5rem;
              }
              .p-picklist .p-picklist-header {
                background: #7B95A3;
                color: #ffffff;
                border: 1px solid #7B95A3;
                padding: 0.857rem 1rem;
                font-weight: 700;
                border-bottom: 0 none;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-picklist .p-picklist-filter-container {
                padding: 0.857rem 1rem;
                background: #ffffff;
                border: 1px solid #7B95A3;
                border-bottom: 0 none;
              }
              .p-picklist .p-picklist-filter-container .p-picklist-filter-input {
                padding-right: 1.429rem;
              }
              .p-picklist .p-picklist-filter-container .p-picklist-filter-icon {
                right: 0.429rem;
                color: #a6a6a6;
              }
              .p-picklist .p-picklist-list {
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                padding: 0;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-picklist .p-picklist-list .p-picklist-item {
                padding: 0.429rem 0.857rem;
                margin: 0;
                border: 0 none;
                color: #666666;
                background: transparent;
                transition: transform 0.2s, background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
                background: #f4f4f4;
                color: #666666;
              }
              .p-picklist .p-picklist-list .p-picklist-item:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
                color: #385048;
                background: #AFD3C8;
              }
              
              .p-tree {
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                padding: 0.571rem 1rem;
                border-radius: 2px;
              }
              .p-tree .p-tree-container .p-treenode {
                padding: 0.143rem;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content {
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                padding: 0;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
                margin-right: 0.5rem;
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
                margin-right: 0.5rem;
                color: #a6a6a6;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
                margin-right: 0.5rem;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {
                color: #666666;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
                color: #385048;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
                color: #385048;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
                background: #f4f4f4;
                color: #666666;
              }
              .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-dragover {
                background: #f4f4f4;
                color: #666666;
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
                color: #a6a6a6;
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
                background: #7db8a6;
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
                background: #7B95A3;
                color: #ffffff;
                border: 1px solid #7B95A3;
                border-width: 1px 1px 0 1px;
                padding: 0.857rem 1rem;
                font-weight: 700;
              }
              .p-treetable .p-treetable-footer {
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                border-width: 0 1px 1px 1px;
                padding: 0.571rem 1rem;
                font-weight: normal;
              }
              .p-treetable .p-treetable-thead > tr > th {
                text-align: left;
                padding: 0.571rem 0.857rem;
                border: 1px solid #dadada;
                border-width: 1px 1px 1px 1px;
                font-weight: 700;
                color: #666666;
                background: #ffffff;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-treetable .p-treetable-tfoot > tr > td {
                text-align: left;
                padding: 0.571rem 0.857rem;
                border: 1px solid #dadada;
                border-width: 1px;
                font-weight: 700;
                color: #666666;
                background: #ffffff;
              }
              .p-treetable .p-sortable-column {
                outline-color: #e4e9ec;
              }
              .p-treetable .p-sortable-column .p-sortable-column-icon {
                color: #666666;
                margin-left: 0.5rem;
              }
              .p-treetable .p-sortable-column .p-sortable-column-badge {
                border-radius: 50%;
                height: 1.143rem;
                min-width: 1.143rem;
                line-height: 1.143rem;
                color: #385048;
                background: #AFD3C8;
                margin-left: 0.5rem;
              }
              .p-treetable .p-sortable-column:not(.p-highlight):hover {
                background: #eaeaea;
                color: #666666;
              }
              .p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
                color: #666666;
              }
              .p-treetable .p-sortable-column.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
                color: #385048;
              }
              .p-treetable .p-treetable-tbody > tr {
                background: #ffffff;
                color: #666666;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-treetable .p-treetable-tbody > tr > td {
                text-align: left;
                border: 1px solid #dadada;
                border-width: 1px;
                padding: 0.571rem 0.857rem;
              }
              .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                margin-right: 0.5rem;
              }
              .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
                margin-right: 0.5rem;
              }
              .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {
                color: #666666;
              }
              .p-treetable .p-treetable-tbody > tr:focus {
                outline: 0.15rem solid #e4e9ec;
                outline-offset: -0.15rem;
              }
              .p-treetable .p-treetable-tbody > tr.p-highlight {
                background: #AFD3C8;
                color: #385048;
              }
              .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
                color: #385048;
              }
              .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
                color: #385048;
              }
              .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
                background: #eaeaea;
                color: #666666;
              }
              .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
                color: #666666;
              }
              .p-treetable .p-column-resizer-helper {
                background: #7B95A3;
              }
              .p-treetable .p-treetable-scrollable-header,
              .p-treetable .p-treetable-scrollable-footer {
                background: #7B95A3;
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
              .p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
                border-width: 1px;
              }
              .p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
                border-width: 1px;
              }
              .p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
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
                background-color: #AFD3C8;
              }
              .p-timeline .p-timeline-event-connector {
                background-color: #c8c8c8;
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
                border: 1px solid #7B95A3;
                color: #ffffff;
                background: #7B95A3;
                font-weight: 700;
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
                margin-right: 0.5rem;
              }
              .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
                background: #617c8a;
                border-color: #617c8a;
                color: #ffffff;
              }
              .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
                background: #AFD3C8;
                border-color: #dadada;
                color: #385048;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
              }
              .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
                border-color: #8DC8B5;
                background: #8DC8B5;
                color: #385048;
              }
              .p-accordion .p-accordion-content {
                padding: 0.571rem 1rem;
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                border-top: 0;
                border-top-right-radius: 0;
                border-top-left-radius: 0;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-accordion .p-accordion-tab {
                margin-bottom: 2px;
              }
              
              .p-card {
                background: #ffffff;
                color: #666666;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                border-radius: 2px;
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
                color: #a6a6a6;
              }
              .p-card .p-card-content {
                padding: 1rem 0;
              }
              .p-card .p-card-footer {
                padding: 1rem 0 0 0;
              }
              
              .p-fieldset {
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                border-radius: 2px;
              }
              .p-fieldset .p-fieldset-legend {
                padding: 0.857rem 1rem;
                border: 1px solid #7B95A3;
                color: #ffffff;
                background: #7B95A3;
                font-weight: 700;
                border-radius: 2px;
              }
              .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
                padding: 0;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
                padding: 0.857rem 1rem;
                color: #ffffff;
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
                margin-right: 0.5rem;
              }
              .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
                background: #617c8a;
                border-color: #617c8a;
                color: #ffffff;
              }
              .p-fieldset .p-fieldset-content {
                padding: 0.571rem 1rem;
              }
              
              .p-divider .p-divider-content {
                background-color: #ffffff;
              }
              .p-divider.p-divider-horizontal {
                margin: 1rem 0;
                padding: 0 1rem;
              }
              .p-divider.p-divider-horizontal:before {
                border-top: 1px #dadada;
              }
              .p-divider.p-divider-horizontal .p-divider-content {
                padding: 0 0.5rem;
              }
              .p-divider.p-divider-vertical {
                margin: 0 1rem;
                padding: 1rem 0;
              }
              .p-divider.p-divider-vertical:before {
                border-left: 1px #dadada;
              }
              .p-divider.p-divider-vertical .p-divider-content {
                padding: 0.5rem 0;
              }
              
              .p-panel .p-panel-header {
                border: 1px solid #7B95A3;
                padding: 0.857rem 1rem;
                background: #7B95A3;
                color: #ffffff;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-panel .p-panel-header .p-panel-title {
                font-weight: 700;
              }
              .p-panel .p-panel-header .p-panel-header-icon {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-panel .p-panel-header .p-panel-header-icon:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-panel.p-panel-toggleable .p-panel-header {
                padding: 0.857rem 1rem;
              }
              .p-panel .p-panel-content {
                padding: 0.571rem 1rem;
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
                border-top: 0 none;
              }
              .p-panel .p-panel-footer {
                padding: 0.571rem 1rem;
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                border-top: 0 none;
              }
              
              .p-splitter {
                border: 1px solid #dadada;
                background: #ffffff;
                border-radius: 2px;
                color: #666666;
              }
              .p-splitter .p-splitter-gutter {
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                background: #eaeaea;
              }
              .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
                background: #dadada;
              }
              .p-splitter .p-splitter-gutter-resizing {
                background: #dadada;
              }
              
              .p-scrollpanel .p-scrollpanel-bar {
                background: #f8f8f8;
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
                border: 1px solid #7B95A3;
                border-width: 1px;
                border-color: #7B95A3;
                background: #7B95A3;
                color: #ffffff;
                padding: 0.857rem 1rem;
                font-weight: 700;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                margin: 0 0 -1px 0;
              }
              .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.2rem #e4e9ec;
              }
              .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
                background: #617c8a;
                border-color: #617c8a;
                color: #ffffff;
              }
              .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
                background: #AFD3C8;
                border-color: #dadada;
                color: #385048;
              }
              .p-tabview .p-tabview-close {
                margin-left: 0.5rem;
              }
              .p-tabview .p-tabview-nav-btn.p-link {
                background: #AFD3C8;
                color: #385048;
                width: 2.357rem;
                box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
                border-radius: 0;
              }
              .p-tabview .p-tabview-nav-btn.p-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.2rem #e4e9ec;
              }
              .p-tabview .p-tabview-panels {
                background: #ffffff;
                padding: 0.571rem 1rem;
                border: 1px solid #dadada;
                color: #666666;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              
              .p-toolbar {
                background: #7B95A3;
                border: 1px solid #7B95A3;
                padding: 0.857rem 1rem;
                border-radius: 2px;
                gap: 0.5rem;
              }
              .p-toolbar .p-toolbar-separator {
                margin: 0 0.5rem;
              }
              
              .p-confirm-popup {
                background: #ffffff;
                color: #666666;
                border: 1px solid #f1f1f1;
                border-radius: 2px;
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
                border-color: rgba(255, 255, 255, 0);
                border-bottom-color: #ffffff;
              }
              .p-confirm-popup:before {
                border: solid transparent;
                border-color: rgba(241, 241, 241, 0);
                border-bottom-color: #f1f1f1;
              }
              .p-confirm-popup.p-confirm-popup-flipped:after {
                border-top-color: #ffffff;
              }
              .p-confirm-popup.p-confirm-popup-flipped:before {
                border-top-color: #f1f1f1;
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
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                border: 1px solid #f1f1f1;
              }
              .p-dialog .p-dialog-header {
                border-bottom: 1px solid #7B95A3;
                background: #7B95A3;
                color: #ffffff;
                padding: 1rem;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-dialog .p-dialog-header .p-dialog-title {
                font-weight: 700;
                font-size: 1rem;
              }
              .p-dialog .p-dialog-header .p-dialog-header-icon {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                margin-right: 0.5rem;
              }
              .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
                margin-right: 0;
              }
              .p-dialog .p-dialog-content {
                background: #ffffff;
                color: #666666;
                padding: 1rem;
              }
              .p-dialog .p-dialog-content:last-of-type {
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-dialog .p-dialog-footer {
                border-top: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                padding: 0.571rem 1rem;
                text-align: right;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
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
                color: #666666;
                border: 1px solid #f1f1f1;
                border-radius: 2px;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-overlaypanel .p-overlaypanel-content {
                padding: 0.571rem 1rem;
              }
              .p-overlaypanel .p-overlaypanel-close {
                background: #7B95A3;
                color: #ffffff;
                width: 2rem;
                height: 2rem;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                border-radius: 50%;
                position: absolute;
                top: -1rem;
                right: -1rem;
              }
              .p-overlaypanel .p-overlaypanel-close:enabled:hover {
                background: #6c8999;
                color: #ffffff;
              }
              .p-overlaypanel:after {
                border: solid transparent;
                border-color: rgba(255, 255, 255, 0);
                border-bottom-color: #ffffff;
              }
              .p-overlaypanel:before {
                border: solid transparent;
                border-color: rgba(241, 241, 241, 0);
                border-bottom-color: #e5e5e5;
              }
              .p-overlaypanel.p-overlaypanel-flipped:after {
                border-top-color: #ffffff;
              }
              .p-overlaypanel.p-overlaypanel-flipped:before {
                border-top-color: #f1f1f1;
              }
              
              .p-sidebar {
                background: #ffffff;
                color: #666666;
                border: 1px solid #f1f1f1;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-sidebar .p-sidebar-header {
                padding: 0.857rem 1rem;
              }
              .p-sidebar .p-sidebar-header .p-sidebar-close,
              .p-sidebar .p-sidebar-header .p-sidebar-icon {
                width: 2rem;
                height: 2rem;
                color: #a6a6a6;
                border: 0 none;
                background: transparent;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
              .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
                color: #666666;
                border-color: transparent;
                background: transparent;
              }
              .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
              .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-sidebar .p-sidebar-header + .p-sidebar-content {
                padding-top: 0;
              }
              .p-sidebar .p-sidebar-content {
                padding: 0.571rem 1rem;
              }
              
              .p-tooltip .p-tooltip-text {
                background: #AFD3C8;
                color: #385048;
                padding: 0.429rem 0.429rem;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                border-radius: 2px;
              }
              .p-tooltip.p-tooltip-right .p-tooltip-arrow {
                border-right-color: #AFD3C8;
              }
              .p-tooltip.p-tooltip-left .p-tooltip-arrow {
                border-left-color: #AFD3C8;
              }
              .p-tooltip.p-tooltip-top .p-tooltip-arrow {
                border-top-color: #AFD3C8;
              }
              .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
                border-bottom-color: #AFD3C8;
              }
              
              .p-fileupload .p-fileupload-buttonbar {
                background: #7B95A3;
                padding: 0.857rem 1rem;
                border: 1px solid #7B95A3;
                color: #ffffff;
                border-bottom: 0 none;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
                gap: 0.5rem;
              }
              .p-fileupload .p-fileupload-buttonbar .p-button {
                margin-right: 0.5rem;
              }
              .p-fileupload .p-fileupload-content {
                background: #ffffff;
                padding: 0.571rem 1rem;
                border: 1px solid #dadada;
                color: #666666;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
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
                background: #ffffff;
                border: 1px solid #c8c8c8;
                border-radius: 2px;
                padding: 0.571rem 1rem;
              }
              .p-breadcrumb ul li .p-menuitem-link {
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
              }
              .p-breadcrumb ul li .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-breadcrumb ul li .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
                color: #666666;
              }
              .p-breadcrumb ul li.p-breadcrumb-chevron {
                margin: 0 0.5rem 0 0.5rem;
                color: #666666;
              }
              .p-breadcrumb ul li:last-child .p-menuitem-text {
                color: #666666;
              }
              .p-breadcrumb ul li:last-child .p-menuitem-icon {
                color: #666666;
              }
              
              .p-contextmenu {
                padding: 0;
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                border-radius: 2px;
                width: 12.5rem;
              }
              .p-contextmenu .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-contextmenu .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-contextmenu .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-contextmenu .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-contextmenu .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-contextmenu .p-submenu-list {
                padding: 0;
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                border-radius: 2px;
              }
              .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                background: #eaeaea;
              }
              .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-contextmenu .p-menu-separator {
                border-top: 1px solid #dadada;
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
              .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
              .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
              .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next {
                margin: 0 0.9rem;
              }
              .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
              .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
              .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next {
                margin: 0 1.3rem;
              }
              .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current {
                margin: 0 1.5rem;
              }
              .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
              .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
              .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next {
                margin: 0.9rem 0;
              }
              .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
              .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
              .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next {
                margin: 1.3rem 0;
              }
              .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
                margin: 1.5rem 0;
              }
              
              @media screen and (max-width: 960px) {
                .p-dock.p-dock-top .p-dock-container, .p-dock.p-dock-bottom .p-dock-container {
                  overflow-x: auto;
                  width: 100%;
                }
                .p-dock.p-dock-top .p-dock-container .p-dock-list, .p-dock.p-dock-bottom .p-dock-container .p-dock-list {
                  margin: 0 auto;
                }
                .p-dock.p-dock-left .p-dock-container, .p-dock.p-dock-right .p-dock-container {
                  overflow-y: auto;
                  height: 100%;
                }
                .p-dock.p-dock-left .p-dock-container .p-dock-list, .p-dock.p-dock-right .p-dock-container .p-dock-list {
                  margin: auto 0;
                }
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next,
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
                .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next,
                .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next,
                .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next,
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
                .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next,
                .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
                  transform: none;
                  margin: 0;
                }
              }
              .p-megamenu {
                padding: 0.5rem;
                background: #ffffff;
                color: #666666;
                border: 1px solid #c8c8c8;
                border-radius: 2px;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
                color: #666666;
                margin-left: 0.5rem;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,
              .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-megamenu .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-megamenu .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-megamenu .p-megamenu-panel {
                background: #ffffff;
                color: #666666;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-megamenu .p-megamenu-submenu-header {
                margin: 0;
                padding: 0.857rem;
                color: #666666;
                background: #f4f4f4;
                font-weight: 700;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-megamenu .p-megamenu-submenu {
                padding: 0;
                width: 12.5rem;
              }
              .p-megamenu .p-megamenu-submenu .p-menu-separator {
                border-top: 1px solid #dadada;
                margin: 0;
              }
              .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                background: #eaeaea;
              }
              .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu.p-megamenu-vertical {
                width: 12.5rem;
                padding: 0;
              }
              .p-megamenu .p-megamenu-button {
                width: 2rem;
                height: 2rem;
                color: #666666;
                border-radius: 50%;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-megamenu .p-megamenu-button:hover {
                color: #666666;
                background: #eaeaea;
              }
              .p-megamenu .p-megamenu-button:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-megamenu .p-submenu-icon {
                transition: transform 0.2s;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
                padding: 0;
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menu-separator {
                border-top: 1px solid #dadada;
                margin: 0;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon {
                font-size: 0.875rem;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon.p-icon {
                width: 0.875rem;
                height: 0.875rem;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem {
                width: 100%;
                position: static;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
                margin-left: auto;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
                transform: rotate(-180deg);
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list {
                width: 100%;
                position: static;
                box-shadow: none;
                border: 0 none;
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-submenu-icon {
                transition: transform 0.2s;
                transform: rotate(90deg);
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
                transform: rotate(-90deg);
              }
              .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menuitem {
                width: 100%;
                position: static;
              }
              
              .p-menu {
                padding: 0;
                background: #ffffff;
                color: #666666;
                border: 1px solid #c8c8c8;
                border-radius: 2px;
                width: 12.5rem;
              }
              .p-menu .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-menu .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-menu .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-menu .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-menu .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-menu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-menu .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-menu.p-menu-overlay {
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-menu .p-submenu-header {
                margin: 0;
                padding: 0.857rem;
                color: #666666;
                background: #f4f4f4;
                font-weight: 700;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
              }
              .p-menu .p-menu-separator {
                border-top: 1px solid #dadada;
                margin: 0;
              }
              
              .p-menubar {
                padding: 0.5rem;
                background: #ffffff;
                color: #666666;
                border: 1px solid #c8c8c8;
                border-radius: 2px;
              }
              .p-menubar .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-menubar .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-menubar .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-menubar .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-menubar .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-menubar .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
                color: #666666;
                margin-left: 0.5rem;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,
              .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-menubar .p-submenu-list {
                padding: 0;
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                width: 12.5rem;
              }
              .p-menubar .p-submenu-list .p-menu-separator {
                border-top: 1px solid #dadada;
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
                background: #eaeaea;
              }
              .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              
              @media screen and (max-width: 960px) {
                .p-menubar {
                  position: relative;
                }
                .p-menubar .p-menubar-button {
                  display: flex;
                  width: 2rem;
                  height: 2rem;
                  color: #666666;
                  border-radius: 50%;
                  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                }
                .p-menubar .p-menubar-button:hover {
                  color: #666666;
                  background: #eaeaea;
                }
                .p-menubar .p-menubar-button:focus {
                  outline: 0 none;
                  outline-offset: 0;
                  box-shadow: 0 0 0 0.2rem #e4e9ec;
                }
                .p-menubar .p-menubar-root-list {
                  position: absolute;
                  display: none;
                  padding: 0;
                  background: #ffffff;
                  border: 1px solid #eaeaea;
                  box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
                  width: 100%;
                }
                .p-menubar .p-menubar-root-list .p-menu-separator {
                  border-top: 1px solid #dadada;
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
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
                  padding: 0.857rem;
                  color: #666666;
                  border-radius: 0;
                  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                  user-select: none;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
                  color: #666666;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
                  color: #666666;
                  margin-right: 0.5rem;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
                  color: #666666;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
                  background: #eaeaea;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                  color: #666666;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                  color: #666666;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                  color: #666666;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
                  outline: 0 none;
                  outline-offset: 0;
                  box-shadow: inset 0 0 0 0.15rem #e4e9ec;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
                  margin-left: auto;
                  transition: transform 0.2s;
                }
                .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
                  transform: rotate(-180deg);
                }
                .p-menubar .p-menubar-root-list .p-submenu-list {
                  width: 100%;
                  position: static;
                  box-shadow: none;
                  border: 0 none;
                }
                .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {
                  transition: transform 0.2s;
                  transform: rotate(90deg);
                }
                .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
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
                .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {
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
                border: 1px solid #7B95A3;
                color: #ffffff;
                background: #7B95A3;
                font-weight: 700;
                border-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
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
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) > a:hover {
                background: #617c8a;
                border-color: #617c8a;
                color: #ffffff;
              }
              .p-panelmenu .p-panelmenu-header.p-highlight {
                margin-bottom: 0;
              }
              .p-panelmenu .p-panelmenu-header.p-highlight > a {
                background: #AFD3C8;
                border-color: #dadada;
                color: #385048;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
              }
              .p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) > a:hover {
                border-color: #8DC8B5;
                background: #8DC8B5;
                color: #385048;
              }
              .p-panelmenu .p-panelmenu-content {
                padding: 0;
                border: 1px solid #dadada;
                background: #ffffff;
                color: #666666;
                border-top: 0;
                border-top-right-radius: 0;
                border-top-left-radius: 0;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon {
                margin-right: 0.5rem;
              }
              .p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-submenu) {
                padding: 0 0 0 1rem;
              }
              .p-panelmenu .p-panelmenu-panel {
                margin-bottom: 2px;
              }
              
              .p-slidemenu {
                padding: 0;
                background: #ffffff;
                color: #666666;
                border: 1px solid #c8c8c8;
                border-radius: 2px;
                width: 12.5rem;
              }
              .p-slidemenu .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-slidemenu .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-slidemenu .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-slidemenu .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-slidemenu .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-slidemenu.p-slidemenu-overlay {
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-slidemenu .p-slidemenu-list {
                padding: 0;
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link {
                background: #eaeaea;
              }
              .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-text {
                color: #666666;
              }
              .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon, .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon {
                color: #666666;
              }
              .p-slidemenu .p-slidemenu-separator {
                border-top: 1px solid #dadada;
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
                color: #666666;
              }
              
              .p-steps .p-steps-item .p-menuitem-link {
                background: transparent;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
                background: #ffffff;
              }
              .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
                color: #a6a6a6;
                border: 1px solid #c8c8c8;
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
                color: #a6a6a6;
              }
              .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-steps .p-steps-item.p-highlight .p-steps-number {
                background: #AFD3C8;
                color: #385048;
              }
              .p-steps .p-steps-item.p-highlight .p-steps-title {
                font-weight: 700;
                color: #666666;
              }
              .p-steps .p-steps-item:before {
                content: " ";
                border-top: 1px solid #dadada;
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
                border: 1px solid #7B95A3;
                border-width: 1px;
                border-color: #7B95A3;
                background: #7B95A3;
                color: #ffffff;
                padding: 0.857rem 1rem;
                font-weight: 700;
                border-top-right-radius: 2px;
                border-top-left-radius: 2px;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                margin: 0 0 -1px 0;
                height: calc(100% + 1px);
              }
              .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
                margin-right: 0.5rem;
              }
              .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.2rem #e4e9ec;
              }
              .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
                background: #617c8a;
                border-color: #617c8a;
                color: #ffffff;
              }
              .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
                background: #AFD3C8;
                border-color: #dadada;
                color: #385048;
              }
              
              .p-tieredmenu {
                padding: 0;
                background: #ffffff;
                color: #666666;
                border: 1px solid #c8c8c8;
                border-radius: 2px;
                width: 12.5rem;
              }
              .p-tieredmenu .p-menuitem-link {
                padding: 0.857rem;
                color: #666666;
                border-radius: 0;
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
                user-select: none;
              }
              .p-tieredmenu .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
                color: #666666;
                margin-right: 0.5rem;
              }
              .p-tieredmenu .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
                background: #eaeaea;
              }
              .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
                color: #666666;
              }
              .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
                color: #666666;
              }
              .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
                color: #666666;
              }
              .p-tieredmenu .p-menuitem-link:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: inset 0 0 0 0.15rem #e4e9ec;
              }
              .p-tieredmenu.p-tieredmenu-overlay {
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-tieredmenu .p-submenu-list {
                padding: 0;
                background: #ffffff;
                border: 1px solid #eaeaea;
                box-shadow: 0 0px 6px 0 rgba(0, 0, 0, 0.16);
              }
              .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
                background: #eaeaea;
              }
              .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
                color: #666666;
              }
              .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
                color: #666666;
              }
              .p-tieredmenu .p-menu-separator {
                border-top: 1px solid #dadada;
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
                border-radius: 2px;
              }
              .p-inline-message.p-inline-message-info {
                background: #A3DEF8;
                border: 1px solid #79C8EB;
                border-width: 1px;
                color: #212121;
              }
              .p-inline-message.p-inline-message-info .p-inline-message-icon {
                color: #212121;
              }
              .p-inline-message.p-inline-message-success {
                background: #A3E2C6;
                border: 1px solid #A3E2C6;
                border-width: 1px;
                color: #212121;
              }
              .p-inline-message.p-inline-message-success .p-inline-message-icon {
                color: #212121;
              }
              .p-inline-message.p-inline-message-warn {
                background: #ffe277;
                border: 1px solid #ffe277;
                border-width: 1px;
                color: #212121;
              }
              .p-inline-message.p-inline-message-warn .p-inline-message-icon {
                color: #212121;
              }
              .p-inline-message.p-inline-message-error {
                background: #ff8b8b;
                border: 1px solid #ff8b8b;
                border-width: 1px;
                color: #212121;
              }
              .p-inline-message.p-inline-message-error .p-inline-message-icon {
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
              .p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
                margin-right: 0;
              }
              
              .p-message {
                margin: 1rem 0;
                border-radius: 2px;
              }
              .p-message .p-message-wrapper {
                padding: 1rem;
              }
              .p-message .p-message-close {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background: transparent;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-message .p-message-close:hover {
                background: rgba(255, 255, 255, 0.3);
              }
              .p-message .p-message-close:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-message.p-message-info {
                background: #A3DEF8;
                border: 1px solid #79C8EB;
                border-width: 1px;
                color: #212121;
              }
              .p-message.p-message-info .p-message-icon {
                color: #212121;
              }
              .p-message.p-message-info .p-message-close {
                color: #212121;
              }
              .p-message.p-message-success {
                background: #A3E2C6;
                border: 1px solid #A3E2C6;
                border-width: 1px;
                color: #212121;
              }
              .p-message.p-message-success .p-message-icon {
                color: #212121;
              }
              .p-message.p-message-success .p-message-close {
                color: #212121;
              }
              .p-message.p-message-warn {
                background: #ffe277;
                border: 1px solid #ffe277;
                border-width: 1px;
                color: #212121;
              }
              .p-message.p-message-warn .p-message-icon {
                color: #212121;
              }
              .p-message.p-message-warn .p-message-close {
                color: #212121;
              }
              .p-message.p-message-error {
                background: #ff8b8b;
                border: 1px solid #ff8b8b;
                border-width: 1px;
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
                border-radius: 2px;
              }
              .p-toast .p-toast-message .p-toast-message-content {
                padding: 1rem;
                border-width: 0;
              }
              .p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
                margin: 0 0 0 0.5rem;
              }
              .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
                font-size: 2rem;
              }
              .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
                width: 2rem;
                height: 2rem;
              }
              .p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
                font-weight: 700;
              }
              .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
                margin: 0.5rem 0 0 0;
              }
              .p-toast .p-toast-message .p-toast-icon-close {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background: transparent;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-toast .p-toast-message .p-toast-icon-close:hover {
                background: rgba(255, 255, 255, 0.3);
              }
              .p-toast .p-toast-message .p-toast-icon-close:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              .p-toast .p-toast-message.p-toast-message-info {
                background: #A3DEF8;
                border: 1px solid #79C8EB;
                border-width: 1px;
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
              .p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-success {
                background: #A3E2C6;
                border: 1px solid #A3E2C6;
                border-width: 1px;
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
              .p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-warn {
                background: #ffe277;
                border: 1px solid #ffe277;
                border-width: 1px;
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
              .p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-error {
                background: #ff8b8b;
                border: 1px solid #ff8b8b;
                border-width: 1px;
                color: #212121;
              }
              .p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
              .p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
                color: #212121;
              }
              
              .p-galleria .p-galleria-close {
                margin: 0.5rem;
                background: transparent;
                color: #ebedef;
                width: 4rem;
                height: 4rem;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
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
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                border-radius: 2px;
                margin: 0 0.5rem;
              }
              .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
              .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
                font-size: 2rem;
              }
              .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon.p-icon,
              .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon.p-icon {
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
              .p-galleria .p-galleria-indicators .p-galleria-indicator button {
                background-color: #7B95A3;
                width: 1rem;
                height: 1rem;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                border-radius: 50%;
              }
              .p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
                background: #617c8a;
              }
              .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
                background: #AFD3C8;
                color: #385048;
              }
              .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
                margin-right: 0.5rem;
              }
              .p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
                margin-bottom: 0.5rem;
              }
              .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
                background: rgba(0, 0, 0, 0.5);
              }
              .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
                background: rgba(255, 255, 255, 0.4);
              }
              .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
                background: rgba(255, 255, 255, 0.6);
              }
              .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
                background: #AFD3C8;
                color: #385048;
              }
              .p-galleria .p-galleria-thumbnail-container {
                background: rgba(0, 0, 0, 0.9);
                padding: 1rem 0.25rem;
              }
              .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
              .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
                margin: 0.5rem;
                background-color: transparent;
                color: #aeb6bf;
                width: 2rem;
                height: 2rem;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                border-radius: 50%;
              }
              .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
              .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #aeb6bf;
              }
              .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content {
                transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
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
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
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
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
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
                background-color: #dadada;
                border-radius: 2px;
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
                background-color: #dadada;
                color: #666666;
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
                border-radius: 2px;
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
                margin-left: 0.5rem;
              }
              .p-chip .p-chip-remove-icon:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              .p-scrolltop {
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
                transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
              }
              .p-scrolltop.p-link {
                background: rgba(0, 0, 0, 0.7);
              }
              .p-scrolltop.p-link:hover {
                background: rgba(0, 0, 0, 0.8);
              }
              .p-scrolltop .p-scrolltop-icon {
                font-size: 1.5rem;
                color: #f4f4f4;
              }
              .p-scrolltop .p-scrolltop-icon.p-icon {
                width: 1.5rem;
                height: 1.5rem;
              }
              
              .p-skeleton {
                background-color: #dadada;
                border-radius: 2px;
              }
              .p-skeleton:after {
                background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
              }
              
              .p-tag {
                background: #7B95A3;
                color: #ffffff;
                font-size: 0.75rem;
                font-weight: 700;
                padding: 0.25rem 0.4rem;
                border-radius: 2px;
              }
              .p-tag.p-tag-success {
                background-color: #A3E2C6;
                color: #323E39;
              }
              .p-tag.p-tag-info {
                background-color: #A3DEF8;
                color: #3D4447;
              }
              .p-tag.p-tag-warning {
                background-color: #ffe38e;
                color: #333333;
              }
              .p-tag.p-tag-danger {
                background-color: #F4B6B6;
                color: #262222;
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
                border-radius: 2px;
                transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
              }
              .p-inplace .p-inplace-display:not(.p-disabled):hover {
                background: #f4f4f4;
                color: #666666;
              }
              .p-inplace .p-inplace-display:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #e4e9ec;
              }
              
              .p-progressbar {
                border: 0 none;
                height: 24px;
                background: #efefef;
                border-radius: 2px;
              }
              .p-progressbar .p-progressbar-value {
                border: 0 none;
                margin: 0;
                background: #7B95A3;
              }
              .p-progressbar .p-progressbar-label {
                color: #ffffff;
                line-height: 24px;
              }
              
              .p-terminal {
                background: #ffffff;
                color: #666666;
                border: 1px solid #dadada;
                padding: 0.571rem 1rem;
              }
              .p-terminal .p-terminal-input {
                font-size: 1rem;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              }
              
              .p-badge {
                background: #7B95A3;
                color: #ffffff;
                font-size: 0.75rem;
                font-weight: 700;
                min-width: 1.5rem;
                height: 1.5rem;
                line-height: 1.5rem;
              }
              .p-badge.p-badge-secondary {
                background-color: #a3897b;
                color: #ffffff;
              }
              .p-badge.p-badge-success {
                background-color: #A3E2C6;
                color: #323E39;
              }
              .p-badge.p-badge-info {
                background-color: #A3DEF8;
                color: #3D4447;
              }
              .p-badge.p-badge-warning {
                background-color: #ffe38e;
                color: #333333;
              }
              .p-badge.p-badge-danger {
                background-color: #F4B6B6;
                color: #262222;
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
                background: #7B95A3;
                color: #ffffff;
                font-size: 0.75rem;
                font-weight: 700;
                padding: 0.25rem 0.4rem;
                border-radius: 2px;
              }
              .p-tag.p-tag-success {
                background-color: #A3E2C6;
                color: #323E39;
              }
              .p-tag.p-tag-info {
                background-color: #A3DEF8;
                color: #3D4447;
              }
              .p-tag.p-tag-warning {
                background-color: #ffe38e;
                color: #333333;
              }
              .p-tag.p-tag-danger {
                background-color: #F4B6B6;
                color: #262222;
              }
              
              .p-panel .p-panel-header .p-panel-header-icon {
                color: #ffffff;
              }
              .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
                color: #ffffff;
              }
              
              .p-dialog .p-dialog-header .p-dialog-header-icon {
                color: #ffffff;
              }
              .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
                color: #ffffff;
              }
              
              /* Customizations to the designer theme should be defined here */
              
            `}
        </style>
    )
}

// EOF
