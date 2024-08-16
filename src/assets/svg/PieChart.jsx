import './style.css';

export default function PieChart() {
    return (
        <svg className='pie-chart-icon' viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint0_linear_104_11426)" />
            <rect x="0.5" y="0.5" width="81" height="81" rx="40.5" stroke="url(#paint1_linear_104_11426)" />
            <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint2_linear_104_11426)" />
            <rect x="10.5" y="10.5" width="61" height="61" rx="30.5" stroke="url(#paint3_linear_104_11426)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1875 43.125C27.1875 36.6702 32.4202 31.4375 38.875 31.4375C39.4618 31.4375 39.9375 31.9132 39.9375 32.5V42.0625H49.5C50.0868 42.0625 50.5625 42.5382 50.5625 43.125C50.5625 49.5798 45.3298 54.8125 38.875 54.8125C32.4202 54.8125 27.1875 49.5798 27.1875 43.125Z" fill="#A685FA" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0625 28.25C42.0625 27.6632 42.5382 27.1875 43.125 27.1875C49.5798 27.1875 54.8125 32.4202 54.8125 38.875C54.8125 39.4618 54.3368 39.9375 53.75 39.9375H43.125C42.5382 39.9375 42.0625 39.4618 42.0625 38.875V28.25Z" fill="#A685FA" />
            <defs>
                <linearGradient id="paint0_linear_104_11426" x1="6.75" y1="86.5" x2="85.75" y2="-5.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A685FA" />
                    <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_104_11426" x1="81.75" y1="-10.5" x2="6.75" y2="82" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A685FA" />
                    <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_104_11426" x1="3.25" y1="13.5" x2="71.75" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A685FA" />
                    <stop offset="0.323723" stop-color="#A685FA" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint3_linear_104_11426" x1="84.25" y1="86" x2="12.25" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#A685FA" />
                    <stop offset="0.576615" stop-color="#A685FA" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

    )
}
