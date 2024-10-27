import * as React from 'react';
const Roles = (props) => (
	<svg width="18" height="18" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.576 5.63321C9.99631 5.24767 9.05387 4.00002 9.21452 2.47927C9.36445 1.08168 10.596 -0.00533505 12.015 1.96981e-05C13.4233 0.00537445 14.6442 1.09239 14.7942 2.47927C14.9548 4.00002 14.0124 5.25303 12.3792 5.60644C12.4195 5.61797 12.453 5.62882 12.4821 5.63823C12.5339 5.65503 12.5717 5.66727 12.6094 5.6707C14.6175 5.98127 16.0847 7.57163 16.2185 9.60108C16.2399 9.90095 16.2399 10.2062 16.2292 10.5114C16.2185 10.9558 15.924 11.2396 15.4742 11.245C13.161 11.2503 10.8531 11.2503 8.53982 11.245C8.12215 11.245 7.81157 10.988 7.79015 10.5971C7.7259 9.5636 7.83299 8.56226 8.40059 7.66266C9.09671 6.55423 10.082 5.89024 11.3725 5.68141C11.3974 5.67565 11.4217 5.6692 11.4458 5.66281C11.4888 5.65136 11.5313 5.64009 11.576 5.63321ZM4.74187 18.3976C4.70176 18.3886 4.65554 18.3782 4.5987 18.3668C6.51034 17.9545 7.17433 16.4177 7.01904 15.2129C6.83698 13.8153 5.675 12.7657 4.28812 12.7443C2.91195 12.7229 1.69107 13.7189 1.46082 15.0469C1.32159 15.8233 1.48224 16.5355 1.93739 17.178C2.3979 17.826 3.02976 18.2008 3.81691 18.34C3.80765 18.3493 3.80018 18.3572 3.79384 18.3639L3.79383 18.3639C3.77816 18.3805 3.76944 18.3898 3.758 18.3936C3.73219 18.3993 3.70484 18.4035 3.67677 18.4078L3.67676 18.4078C3.65243 18.4116 3.62757 18.4154 3.60272 18.4204C2.30687 18.6292 1.32159 19.2985 0.625476 20.4016C0.0525178 21.3119 -0.0438677 22.324 0.0150345 23.3681C0.0418082 23.7483 0.347029 23.9946 0.759344 23.9946C3.0726 24 5.38049 24 7.69374 23.9946C8.1489 23.9946 8.4327 23.7162 8.44341 23.261C8.45412 22.9505 8.44876 22.6345 8.4327 22.324C8.3256 20.3695 6.82092 18.7202 4.8825 18.4257C4.83936 18.4195 4.79623 18.4098 4.74187 18.3976ZM17.0164 15.0843C16.8022 16.3106 17.4447 17.9438 19.4153 18.3668C19.2814 18.3936 19.2064 18.4096 19.1261 18.4311C17.6696 18.6881 16.6147 19.4859 15.9615 20.8086C15.592 21.5636 15.5384 22.3668 15.5599 23.1861C15.5706 23.7376 15.833 24 16.3898 24H19.5759H23.1904C23.7205 24 23.9936 23.7216 23.9989 23.1861V22.6506C23.9829 20.4659 22.5157 18.7631 20.3577 18.4204C20.3304 18.4143 20.3031 18.403 20.2679 18.3886C20.2411 18.3776 20.2097 18.3646 20.1703 18.3507C21.8517 18.0455 22.687 16.6372 22.5906 15.3681C22.4835 13.9331 21.3216 12.8032 19.9133 12.7497C18.4889 12.6961 17.2627 13.6921 17.0164 15.0843ZM12.704 14.8648C12.7049 14.7577 12.7058 14.6506 12.7058 14.5435C12.7058 14.4266 12.7084 14.3091 12.711 14.1915C12.7168 13.932 12.7225 13.6716 12.7004 13.4137C12.6844 13.2262 12.5933 13.0174 12.4648 12.8782C12.2828 12.6747 12.015 12.6319 11.7526 12.7497C11.4742 12.8728 11.3189 13.0924 11.3189 13.3976C11.3169 13.6787 11.3172 13.9598 11.3174 14.2409C11.3178 14.7095 11.3182 15.178 11.3082 15.6466C11.3029 15.7537 11.2279 15.8983 11.1422 15.9679C10.9015 16.1658 10.6524 16.3497 10.4031 16.5338C10.3084 16.6037 10.2137 16.6736 10.1195 16.7443C10.007 16.8286 9.89423 16.9126 9.78145 16.9966C9.44309 17.2487 9.10473 17.5007 8.77541 17.7617C8.45948 18.0134 8.40593 18.4096 8.62548 18.7149C8.84502 19.0201 9.22521 19.1004 9.57327 18.9023C9.64823 18.8594 9.7232 18.8059 9.79281 18.7523C10.4782 18.2436 11.1636 17.7296 11.8437 17.2102C11.9775 17.1084 12.0632 17.1245 12.1864 17.2209C12.464 17.4407 12.7472 17.6521 13.0299 17.8632C13.1398 17.9453 13.2497 18.0273 13.3591 18.1098C13.4192 18.1554 13.4793 18.2011 13.5395 18.2469C13.8117 18.454 14.0851 18.6621 14.3658 18.8594C14.8477 19.1914 15.4421 18.9612 15.517 18.415C15.5599 18.1044 15.4099 17.8849 15.1743 17.7082C14.9815 17.5636 14.7884 17.4193 14.5953 17.2751C14.016 16.8424 13.4367 16.4096 12.8664 15.9679C12.7808 15.909 12.7165 15.7751 12.7111 15.668C12.6997 15.4003 12.7019 15.1325 12.704 14.8648Z" />
</svg>

);
export default Roles;