import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
         <h3>Shop Bangla</h3>
        </a>
      </Link>
      <ul>
        <li>Address: 60-49 Road 11378 New York</li>
        <li>Phone: +95 32.257.498</li>
        <li>Email: Shop.bangla212@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
