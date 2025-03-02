import React from "react";
import "../PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      {/* <h1 className="privacy-title">Privacy Policy</h1> */}
      <p className="privacy-section">
        <strong>'KivaPay' India</strong> will always ensure that your privacy is protected and secured. You can be assured that we shall use your personal information only in accordance with this privacy policy. Please read and understand the KivaPay Privacy Policy carefully to know our views and practices regarding your personal data and on how we use it. KivaPay reserves the right to make changes to this policy at any point in time on its discretion and accordingly update this page. Please check this page periodically to make sure you are happy with the changes.
      </p>
      
      <div className="privacy-section">
        <h2>Information Required:</h2>
        <ul className="privacy-list">
          <li>Name, designation, and contact information including email address, Business information, etc.</li>
          <li>Demographic information like postcodes, preferences, and interests.</li>
          <li>Any other information related/relevant to our application process.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>Why does KivaPay collect your information?</h2>
        <p className="privacy-highlight">To personalize user experience:</p>
        <p>We may use information to understand how our users as a group use the services and resources provided on KivaPay.com.</p>
        
        <p className="privacy-highlight">To improve customer service:</p>
        <p>Your information helps us to respond more effectively to your customer service requests, inquiries, and support needs.</p>
        
        <p className="privacy-highlight">To process your application:</p>
        <p>We use the information collected to understand the nature and profile of your business and accordingly approve or decline your application.</p>
        
        <p className="privacy-highlight">For marketing purposes:</p>
        <p>We may use your information for promotional activities of our new products and features, special offers, and for advertising our products.</p>

        <p className="privacy-highlight">To send periodic emails:</p>
        <p>The email address provided will be used to send information and updates pertaining to our site and our services. It may also be used to respond to your inquiries, and/or other requests. If the user decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc.</p>

      </div>
      
      <div className="privacy-section">
        <h2>KivaPay Data Storage and Access</h2>
        <p>The data we collect from you are stored in our system servers and will be treated with utmost confidentiality. Your personal information will be used only by KivaPay for all business transactions that require your information to complete the transactions.</p>
        <p>KivaPay may allow a third-party application to access your information in cases where a need arises for verification of your data and other validation purposes. KivaPay ensures that verification processes used by third party application will help to make your account safe from fraud or any money laundering.</p>
      </div>
      
      <div className="privacy-section">
        <h2>KivaPay Security</h2>
        <p>KivaPay recognizes its responsibility to keep confidential and secure at all times any information that KivaPay receives in connection with a transaction. KivaPay has all the necessary electronic and physical procedures in place to keep your information secure in order to prevent any unauthorized access. When you log into your KivaPay account, all Internet communication is secured using Secure Socket Layer (SSL) technology with 256-bit encryption security.
        For your own safety, please make sure never to share your KivaPay login details with anyone.</p>
      </div>

      <div className="privacy-section">
        <h2>Internet Cookies</h2>
        <p>Cookies are text files, used by your computer’s browser, that store visitor session data. Cookies, by themselves, do not identify the individual user. Cookies are commonly used on the Internet and do not harm your system.</p>
        <p>Cookies are mainly used to measure web traffic, for keeping records and to let you know when you visit a particular site. But cookies never give us access to any other information other than what you choose to share with us.</p>
        <p>Cookies also help us in analyzing data to be used in improving our website, eventually giving you a better user experience. Users generally have the options to accept or decline cookies. However, please note that you will not get the full benefit of using the website if you chose to decline.</p>
      </div>
      
      <div className="privacy-section">
        <h2>Third-Party Websites</h2>
        <p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensors and other third parties. KivaPay does not control the content or links that appear on these sites and are not responsible for the practices employed by those websites.</p>
      <p>Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies. KivaPay does not guarantee protection and privacy of information that you may provide to such websites.</p>
      </div>
      
      <div className="privacy-section privacy-footer">
        <h2>Updating Your Information</h2>
        <p>If your personal or professional information (such as your name, address, or telephone number) needs change, you must update your details by contacting KivaPay on our contact us page.</p>
      <p>To avoid inconvenience to all, KivaPay strongly advises keeping all information up to date and correct. KivaPay will be exempt from any responsibility in the rare event where losses may arise from not updating your information.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;