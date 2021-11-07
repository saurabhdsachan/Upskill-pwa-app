import SectionTitle from '@components/Shared/SectionTitle';
import { company } from '@utils/config';
import React from 'react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const TermsContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 antialiased">
      <SectionTitle
        title="Spacejoy EULA and Terms of Service"
        description="Spacejoy uses cookies to enhance performance and improve your user experience, to provide certain user
              functionality, as well as to distinguish you from other users when you use our website and other products
              and services."
        feature={`Last Updated: Jan 02nd, ${currentYear}`}
      />
      <div className="absolute top-0 right-0 max-w-prose mx-auto" aria-hidden="true">
        <svg width={404} height={384} fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern
              id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
      </div>
      <div className="relative sm:px-6 lg:px-8">
        <div>
          <div className="my-4">
            <p className="text-base text-gray-500">
              This End User License Agreement and Terms of Service (the “EULA”) apply to the beta version of the
              Spacejoy software and services provided by Spacejoy Design Solutions Pvt Ltd (“us” or “we”). This is a
              binding contract between you, an individual user (“you”) and us governing your use of Spacejoy services
              (the “Service”) using the Spacejoy website (the “Website”) and the Spacejoy desktop/mobile application
              (the “App”). By registering to use the Spacejoy and/or installing/accessing any portions of the Spacejoy,
              you agree that you have read, understood, and agree to be bound by the EULA. If you do not agree, then you
              may not use the service. To have a copy of the EULA and the Spacejoy Privacy Policy (the “Privacy Policy”)
              sent to you, contact Spacejoy at{' '}
              <a className="text-red-500 hover:underline" href={`mailto:${company.email.support}`}>
                {company.email.support}
              </a>
            </p>
          </div>
          <div className="flex mt-6">
            <div className="flex-1 pr-12">
              <h2 className="text-lg mb-2">Summary of Material Terms.</h2>
              <p className="text-base text-gray-500">
                As provided in greater detail in the EULA (and without limiting the express language of the EULA), you
                acknowledge the following: you consent to the collection, use, and disclosure of your personally
                identifiable information in accordance with the privacy policy, including with respect to the collection
                of location information; the App, Website and Service is provided &ldquo;as is&rdquo; without warranties
                of any kind and {company.product}&apos;s liability to you is limited; disputes arising hereunder will be
                resolved by binding arbitration;
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-lg mb-2">General</h2>
              <p className="text-base text-gray-500">
                The Service is a platform enabling people seeking interior design services (&ldquo;Clients&rdquo; or
                &ldquo;Users&rdquo;) to get a custom interior design ideas, including two design concepts, one final
                design rendering, and one revision of the final design rendering based on User comments. After placing
                an Order (request for custom design), you will receive an email from {company.product} acknowledging
                that
                {company.product} has received your order. Please note that this does not mean that your Order has been
                accepted. Your Order constitutes an offer to {company.product} to avail the services. All orders are
                subject to acceptance
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Description of Services</h2>
            <p className="text-base text-gray-500">
              {company.product} provides interior design services that allow its Clients to visualise beautiful
              furniture, furnishings and decors within the context of their own homes/spaces. {company.product} helps
              homeowners, renters, home stagers and commercial property owners in creating customized designs online. As
              more fully described on the Site, {company.product} offers the following Services: Provides two
              personalized interior design concepts based on room specifications and other details as submitted by the
              Clients to {company.product} Provides a way to explore Client&apos;s creative side by accessing
              interactive designs. Clients can change products in style to get unlimited design ideas Enables users to
              shop the products shown in the design concepts.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Acceptance of Privacy Policy</h2>
            <p className="text-base text-gray-500">
              Your use of the Service is subject to the Privacy Policy, which is available by email and is hereby
              incorporated by reference into the EULA. By using the Service you agree that you have read, understood,
              and agree to the data collection, use, and disclosure provisions set forth in the Privacy Policy.
            </p>
          </div>
          <div className="flex mt-6">
            <div className="flex-1 pr-12">
              <h2 className="text-lg mb-2">Right to Change/Update the EULA.</h2>
              <p className="text-base text-gray-500">
                We may revise the EULA at any time to ensure that they comply with applicable law and remain consistent
                with our services and operations, by posting an updated version. We therefore reserve the right to
                update and revise these Terms at any time without specific or direct notice to You. You should visit
                this page periodically to review the most current EULA, because you are bound by it. Your continued use
                of the Service after a change to the EULA constitutes your binding acceptance of the EULA.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-lg mb-2">Third Party Fees.</h2>
              <p className="text-base text-gray-500">
                Your may incur third party fees through use of the Service, such as fees charged by your Carrier for
                data usage. In addition, you may be subject to third party terms, through your use of the Service, such
                as your Carrier&#39;s terms of service. You acknowledge and agree that you are solely responsible for
                all such fees incurred by you for use of the Service, and you agree to pay all such fees and abide by
                all such terms.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Eligibility</h2>
            <p className="text-base text-gray-500">
              If you are using or opening an account on the Service on behalf of a company, entity, or organization
              (each a &quot;Subscribing Entity&quot;), then you represent and warrant that you: (i) are an authorized
              representative of that Subscribing Entity with the authority to bind such entity to the EULA and (ii)
              agree to be bound by the EULA on behalf of such Subscribing Entity. You must be over the age of 13 to use
              the site and to use our service. No part of the Service is directed to persons under the age of 13. If you
              are under 13 years of age, please do not use or access the service at any time or in any manner. If you
              are under 18 years of age, you represent and agree that you possess the legal consent of your parent or
              guardian to access and use the Service.
            </p>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight mt-6">Scope of License to Users</h2>
          <div className="mt-6">
            <h2 className="text-lg mb-2">License Grant to You.</h2>
            <p className="text-base text-gray-500">
              The Service is licensed, not sold, to you for use only under the terms of the EULA. Subject to your
              complete and ongoing compliance with the terms and conditions of the EULA, {company.product} hereby grants
              you a personal, limited, revocable, non-transferable license to access and use the Website and the App, in
              both instances solely for your own use or for the use of the Subscribing Entity on whose behalf you are
              authorized to act.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Limited License and Site Access.</h2>
            <div className="text-base text-gray-500">
              You are allowed to use the Site and applications only for Your lawful personal use (or personal use on
              behalf of a third party). You may not use the Site to do or to facilitate any of the following things (or
              otherwise to violate any laws or legal rights of anyone else):
              <ol className="pl-10 my-4 list-inside list-decimal">
                <li className="py-1 pl-2">
                  Copy, imitate, mirror, distribute, publish, download, publicly display, publicly perform, post or
                  transmit any of the Content in any manner or format, and through any means now known or later
                  developed;
                </li>
                <li className="py-1 pl-2">Make commercial use of any Content available on the Site;</li>
                <li className="py-1 pl-2">
                  Modify, adapt, translate, reverse engineer, decompile, disassemble or convert into human readable form
                  any of the source code / HTML code underlying the Site and applications.
                </li>
                <li className="py-1 pl-2">
                  Use any automated software or tools that are designed to extract and copy data (such as bots, spiders,
                  crawlers, or other similar data-mining, data-gathering, or data-extraction methods) on the Contents
                  of, or source code / HTML code underlying, the Site;
                </li>
                <li className="py-1 pl-2"> Directly rent, lease, lend, sell, redistribute or sublicense the Service</li>
                <li className="py-1 pl-2">
                  Create derivative works of any portion of the Service, any updates, or any part thereof (except as and
                  only to the extent any foregoing restriction is prohibited by applicable law), nor attempt to disable
                  or circumvent any security or other technological measure designed to protect the Service or any
                  content available through the Service.
                </li>
                <li className="py-1 pl-2">Collect any information about users of the Site;</li>
                <li className="py-1 pl-2">
                  Attempt to interfere with, disrupt, reverse-engineer, steal from, or gain unauthorized access to, any
                  of the software, technology, or equipment that supports the Site;
                </li>
                <li className="py-1 pl-2">
                  Impersonate another person, or misrepresent Your affiliation, with a person or entity;
                </li>
                <li className="py-1 pl-2">Post advertising, marketing links or content;</li>
                <li className="py-1 pl-2">
                  {' '}
                  Access the Site from anywhere in the world where it is unlawful for You to do so.
                </li>
              </ol>
              If you breach these license restrictions, or otherwise exceed the scope of the licenses granted in the
              EULA, then you may be subject to prosecution and damages, as well as liability for infringement of
              intellectual property rights. Although we highly doubt that we will ever have any reason to do so, we
              reserve the right, in our sole and complete discretion, to terminate Your access and ability to use the
              Site without notice. Applicability to Updates. The terms of the EULA will govern any updates provided to
              you by {company.product} that replace and/or supplement the Website or App, unless such upgrade is
              accompanied by a separate license or revised EULA, in which case the terms of that license or revised EULA
              will govern.
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Registration and Eligibility.</h2>
            <p className="text-base text-gray-500">
              Anyone may browse the public-facing pages of the Service and take the style profile, but in order to start
              and access the custom design plan, the client must register.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Client.</h2>
            <p className="text-base text-gray-500">
              To become a {company.product} Design Client, you must provide your zip code, phone number, email address,
              name and password. You will also take a style quiz (to help us determine your preferred design styles),
              provide us photos of your space, and provide us additional information about your room and project. You
              may be afforded the opportunity to have a phone call or online chat with your assigned designer. The
              designer will then provide you suggestions for your space as well as a shoppable list of products
              according to your service package selected. To install and access demo designs, you must provide your
              email address. You may begin interacting with demo designs to understand the service
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Account Security.</h2>
            <p className="text-base text-gray-500">
              Your account is personal to you, and you may not share your account information with, or allow access to
              your account by, any third party. As you will be responsible for all activity that occurs under your
              access credentials, you agree to use reasonable efforts to prevent unauthorized access to or use of the
              Service and to preserve the confidentiality of your username and password, and any device that you use to
              access the Service. You agree to notify us immediately of any breach in secrecy of your log-in information
              If you have any reason to believe that your account information has been compromised or that your account
              has been accessed by a third party, you agree to immediately notify {company.product} by e-mail to{' '}
              <a className="text-red-500 hover:underline" href={`mailto:${company.email.support}`}>
                {company.email.support}
              </a>
              . You will be solely responsible for the losses incurred by {company.product} and others due to any
              unauthorized use of your account.
            </p>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight mt-6">Content You Submit; License Grants from You.</h2>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Your Content</h2>
            <p className="text-base text-gray-500">
              If you are a Client, you may be able to create, post, or share content, such as pictures of your space,
              floor plans and household objects (&#34;Client Content&#34;) {company.product} claims no ownership or
              control over Your Content You or a third-party licensor, as appropriate, retain all copyright, patent, and
              trademark rights to any of Your Content that you post on or through the Service. You are responsible for
              protecting those rights.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">License Grants to {company.product}.</h2>
            <div className="text-base text-gray-500">
              By creating, posting, or sharing Your Content on or through the Service, and subject to {company.product}
              &#39;s Privacy Policy, you grant {company.product} a world-wide, non-exclusive, sub-licensable,
              royalty-free, transferable license to use, modify, remove, publish, transmit, or display Your Content in
              order to
              <ol type="a" className="pl-10 my-4 list-inside list-roman">
                <li>facilitate a design or recommended product list for the Client</li>
                <li>advertise and promote the Service.</li>
              </ol>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">You Must Have Rights to the Content You Post.</h2>
            <div className="text-base text-gray-500">
              You represent and warrant that:
              <ol type="i" className="pl-10 my-4 list-inside list-roman">
                <li>you own Your Content or otherwise have the right to grant the license set forth in the EULA.</li>
                <li>
                  The posting and use of Your Content on or through the Service does not violate the privacy rights,
                  publicity rights, copyrights, contract rights, intellectual property rights, or any other rights of
                  any person, and
                </li>
                <li>
                  The posting of Your Content on the Service does not result in a breach of contract between you and a
                  third party You agree to pay for all royalties, fees, and any other monies owing any person by reason
                  of Your Content that you post on or through the Service You also acknowledge and agree that Your
                  Content is non-confidential and non-proprietary.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Fees; Payments.</h2>
            <div className="text-base text-gray-500">
              <ol type="i" className="pl-10 my-4 list-inside list-roman">
                <li>
                  Fees. The fee (the &#34;Fee&#34;) to be charged to Clients for each Custom Room Design will be set
                  forth on the Service. The Fee is due and payable in advance of Client&#39;s design or product
                  recommendation process.
                </li>
                <li>
                  Payments. The Service currently uses third parties to process payments. Our third-party payment
                  processors accept payments through various credit cards, as detailed on the applicable payment screen.
                  All monetary transactions on the Service take place in U.S. Dollars.
                </li>
                <li>
                  Taxes. Clients are responsible for determining and paying the appropriate government taxes, fees, and
                  service charges resulting from a transaction occurring through the Service, except for taxes on
                  {company.product}&#39;s income on the design service Fee. We are not responsible for collecting,
                  reporting, paying, or remitting to you any such taxes, fees, or service charges, except as may
                  otherwise be required by law.
                </li>
                <li>
                  Refunds. The Service will offer any Client a full refund at {company.product}&#39;s discretion. Please
                  email{' '}
                  <a className="text-red-500 hover:underline" href={`mailto:${company.email.support}`}>
                    {company.email.support}
                  </a>{' '}
                  to obtain a refund.
                </li>
                <li>
                  Third Party Purchases. A Client may wish to purchase items from third parties through the
                  {company.product}
                  service. {company.product} will collect the cost of the furniture in advance of placing orders with
                  the third party for the purchase. All Third Party terms and conditions apply to these purchases,
                  including return policies and shipping costs.
                </li>
                <li>
                  Credits. {company.product} may offer merchandise credit to Clients for use towards purchasing items in
                  their shopping list. Merchandise credit only applies to non-sale items and qualified vendors (for a
                  list of accepted vendors, please email{' '}
                  <a className="text-red-500 hover:underline" href={`mailto:${company.email.support}`}>
                    {company.email.support}
                  </a>
                  ). The merchandise credit may only apply to purchases over a certain cart total, the applicable cart
                  total excludes sale items, non-qualified vendors, and shipping and tax.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Third Party Materials; {company.product} Content.</h2>
            <p className="text-base text-gray-500">
              You understand that by using the Service, you may encounter data, information, applications, materials and
              other content from third parties, including other users (collectively, &#34;Third Party Materials&#34;),
              and data, information, applications, materials and other content from {company.product} (collectively,
              &#34;
              {company.product} Content&#34; and, together with Third Party Materials, but excluding Your Content,
              &#34;Service Content&#34;), that may be offensive, indecent, or objectionable Nevertheless, you agree to
              use the Service at your sole risk and that {company.product} shall not have any liability to you for any
              Service Content that may be found to be offensive, indecent, or that is inaccurate, incomplete, untimely,
              invalid, illegal, indecent, of poor quality or otherwise objectionable You use the Service, and rely upon
              any Service Content accessible through the Service, at your sole risk. In addition, third party services
              and Service Content that may be accessed from, displayed on or linked to your device are not available in
              all languages or in all countries. {company.product} makes no representation that the Service, any third
              party services, and Service Content are appropriate or available for use in any particular location To the
              extent you choose to access such services or materials, you do so at your own initiative and are
              responsible for compliance with any and all applicable laws..
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Your Use of the Service and Service Content.</h2>
            <div className="text-base text-gray-500">
              Your right to use the Service is a privilege, not a right, and is expressly conditioned on the following:
              <br />
              You may access the Service solely as intended through the provided functionality of the Service and as
              permitted under the EULA.
              <br />
              You agree not to copy, reproduce, distribute, publish, display, perform, transmit, stream or broadcast any
              part of the Service without {company.product}&#39;s prior written authorization, including, by way of
              example and not limitation, by doing or engaging in any of the following without {company.product}
              &#39;s express written consent:
              <br />
              altering, defacing, mutilating or otherwise bypassing any approved software through which the Service is
              made available; and using any trademarks, service marks, design marks, logos, photographs or other content
              belonging to
              {company.product} or obtained from the Service.
              <br />
              You agree not to bypass, circumvent, damage or otherwise interfere with any security or other features of
              the App designed to control the manner in which the Service is used, harvest or mine Service Content from
              the Service, or otherwise access or use the Service in a manner inconsistent with individual human usage.
              <br />
              You agree not to undertake, cause, permit or authorize the translation, reverse engineering, disassembling
              or hacking of any aspect of the Service, including any Service Content available on or through the
              Service, or attempt to do any of the foregoing, except and solely to the extent permitted by the EULA, the
              authorized features of the Service, or by law, or otherwise attempt to use or access any portion of the
              Service other than as intended by {company.product}
              <br />
              You agree not to use, display, mirror, frame or utilize framing techniques to enclose the Service,
              including any Service Content available on or through the Service, or any portion thereof, through any
              other application or website, unless and solely to the extent {company.product} makes available the means
              for embedding any part of the Service or Service Content.
              <br />
              You agree not to access, tamper with, or use non-public areas of the Service, {company.product}
              &#39;s (and its hosting company&#39;s) computer systems and infrastructure, or the technical delivery
              systems of {company.product}&#39;s providers.
              <br />
              You agree not to harass, abuse, harm or advocate or incite harassment, abuse or harm of another person or
              group, including {company.product}&#39;s employees and other users.
              <br />
              You agree not to provide any false personal information to {company.product} or any other user, or create
              a false identify or impersonate another person or entity in any way.
              <br />
              You agree not to create a new account with {company.product}, without {company.product}&#39;s express
              written consent, if {company.product} has previously disabled an account of yours.
              <br />
              You agree not to solicit, or attempt to solicit, personal information from other users.
              <br />
              You agree not to restrict, discourage or inhibit any person from using the Service, disclose personal
              information about a third person on the Service or obtained from the Service without the consent of such
              person, or collect information about users.
              <br />
              You agree not to use the Service, without {company.product}&#39;s express written consent, to communicate
              or facilitate any commercial advertisement or solicitation, except as expressly permitted in the EULA.
              <br />
              You agree not to gain unauthorized access to the Service, to other users&#39; accounts, names or
              personally identifiable information, or to other computers or websites connected or linked to the Service.
              <br />
              You agree not to post, transmit or otherwise make available any virus, worm, spyware or any other computer
              code, file or program that may or is intended to disable, overburden, impair, damage or hijack the
              operation of any hardware, software or telecommunications equipment, or any other aspect of the Service or
              communications equipment and computers connected to the Service.
              <br />
              You agree not to interfere with or disrupt the Service, or networks or servers connected to the Service,
              or violate the regulations, policies or procedures of such networks or servers.
              <br />
              You agree not to violate any applicable federal, state or local laws or regulations or the EULA.
              <br />
              You agree not to assist or permit any persons in engaging in any of the activities described above. Third
              Party Software.
              <br />
              The Website and App consists of a package of components, including certain third party software
              (&#34;Third Party Software&#34; and together with the App, the &#34;Package&#34;) provided under separate
              license terms (the &#34;Third Party Terms&#34;), as described in more detail in Section 26 Your use of the
              Third Party Software in conjunction with the App in a manner consistent with the terms of the EULA is
              permitted, however, you may have broader rights under the applicable Third Party Terms and nothing in the
              EULA is intended to impose further restrictions on your use of the Third Party Software.
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Consent to Use of Data.</h2>
            <p className="text-base text-gray-500">
              You agree that {company.product} may collect and use technical data and related information, including,
              but not limited to, UDID, contacts, usage data, location and other technical information about your
              device, system and application software, and peripherals, that is gathered periodically to facilitate the
              provision of software updates, product support, and other services to you (if any) related to the Service,
              and to anonymously track and report your activity inside of the Service, including for analytics purposes
              Please see the Privacy Policy.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Content and Intellectual Property Ownership.</h2>
            <p className="text-base text-gray-500">
              You may not copy or use any of the Content or Intellectual Property of or on the Site without our prior
              written authorization. “Content” means all of the visual, audio-visual, and written information displayed
              on the Site, including all graphics, photographs, drawings, designs, iconography, animation, videos, and
              writing (collectively, “Content”). All Content on the Site is the property of {company.product} and/or
              third parties with whom
              {company.product} has a relationship, and all Content may be protected by one or more applicable
              intellectual property laws, including without limitation copyright, right of publicity, trademark laws.
              All trademarks, service marks, trade names, trade dress, and other branding devices (collectively,
              “Marks”) that appear on the Site are the exclusive property of {company.product} and are protected by
              applicable intellectual property laws. Except for the limited licenses expressly granted to you under the
              EULA, no other rights, licenses, or immunities are granted or will be deemed to be granted to you under
              the EULA, either expressly, or by implication, estoppel or otherwise.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Feedback.</h2>
            <p className="text-base text-gray-500">
              We appreciate hearing from our users and welcome your comments regarding the Service Please be advised,
              however, that if you send us creative ideas, suggestions, inventions, or materials (&#34;Creative
              Ideas&#34;), we will:
              <br />
              own, exclusively, all now known or later discovered rights to the Creative Ideas; not be subject to any
              obligation of confidentiality and will not be liable for any use or disclosure of any Creative Ideas; and
              be entitled to unrestricted use of the Creative Ideas for any purpose whatsoever, commercial or otherwise,
              without compensation to you or any other person.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Consequences of Violating These Terms.</h2>
            <p className="text-base text-gray-500">
              We reserve the right to suspend or terminate your account and prevent access to the Service for any
              reason, at our discretion We reserve the right to refuse to provide the Service to you in the future
              {company.product} may review and remove any of Your Content at any time for any reason, including activity
              which, in its sole judgment: violates the EULA; violates applicable laws, rules, or regulations; is
              abusive, disruptive, offensive or illegal; or violates the rights of, or harms or threatens the safety of,
              Users of the Service You are responsible for any claims, fees, fines, penalties, and other liability
              incurred by us or others caused by or arising out of your breach of the EULA and your use of the Service.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">{company.product}&#39;s Liability.</h2>
            <p className="text-base text-gray-500">
              Changes to the Service. We may change, suspend, or discontinue any aspect of the Service at any time,
              including hours of operation or availability of the Service or any feature, without notice or liability.
              <br />
              User Disputes. We are not responsible for any disputes or disagreements between you and any third party
              you interact with using the Service. This includes disputes between Clients and Designers. You assume all
              risk associated with dealing with third parties. You agree to resolve disputes directly with the other
              party. You release {company.product} of all claims, demands, and damages in disputes among users of the
              Service. You also agree not to involve us in such disputes. Use caution and common sense when using the
              Service. If you participate in an Installation, you are solely responsible for your interactions with
              other Users. You understand that
              {company.product}
              does not currently conduct background checks, including criminal background checks, on its Users.
              {company.product}
              makes no representations or warranties as to the conduct of Users. IN NO EVENT WILL THE RELEASED PARTIES
              (AS DEFINED BELOW) BE LIABLE FOR ANY DAMAGES WHATSOEVER, WHETHER DIRECT, INDIRECT, GENERAL, SPECIAL,
              COMPENSATORY, CONSEQUENTIAL, AND/OR INCIDENTAL, ARISING OUT OF OR RELATING TO THE CONDUCT OF YOU OR ANYONE
              ELSE IN CONNECTION WITH THE USE OF THE SERVICE, INCLUDING WITHOUT LIMITATION, BODILY INJURY, EMOTIONAL
              DISTRESS, AND/OR ANY OTHER DAMAGES RESULTING FROM COMMUNICATIONS OR MEETINGS WITH OTHER USERS OF THIS
              SERVICE OR PERSONS YOU MEET THROUGH THE SERVICE YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL
              INTERACTIONS WITH OTHER USERS OF THE SERVICE, PARTICULARLY IF YOU MEET OFFLINE OR IN PERSON YOU ASSUME ALL
              RISK WHEN ENGAGING THE SERVICES OF ANY OTHER USER AND IN CONNECTION WITH USING THE SERVICE, INCLUDING BUT
              NOT LIMITED TO ANY RISKS ASSOCIATED WITH OBTAINING SERVICES FROM ANY DESIGNER OR PROVIDING ANY SERVICES TO
              ANY CLIENT, INCLUDING ALL RISKS OF PHYSICAL OR EMOTIONAL INJURY OR HARM RESULTING ANY WAY OR ARISING OUT
              OF INSTALLATION SERVICES OR CLIENTS OBTAINED THROUGH THE SERVICE ALL USERS, INCLUDING CLIENTS AND
              DESIGNERS, HEREBY EXPRESSLY AGREE NOT TO HOLD THE RELEASED PARTIES LIABLE FOR ANY INSTALLATION,
              INSTRUCTION, ADVICE OR SERVICES DELIVERED WHICH ORIGINATED THROUGH THE SERVICE AND THE RELEASED PARTIES
              EXPRESSLY DISCLAIM ANY LIABILITY WHATSOEVER FOR ANY DAMAGE, SUITS, CLAIMS, AND/OR CONTROVERSIES THAT ARISE
              OR RELATED IN ANY WAY TO THE SERVICE, THE INFORMATION PROVIDED THROUGH THE SERVICE AND THE SERVICES
              PROVIDED BY OR TO ANY USER OF THE SERVICE.
              <br />
              Content Accuracy. We make no representations about accuracy, reliability, completeness, or timeliness of
              any contents of the Service, including Designs Similarly, we make no representations about accuracy,
              reliability, completeness, or timeliness of any data from a third-party service provider or the quality or
              nature of third-party products or services obtained through the Service Use the Service at your own risk.
              <br />
              Third-Party Websites. The Service may include links to third party websites and applications. You are
              responsible for evaluating whether you want to access or use them. We are not responsible for and do not
              endorse any features, content, advertising, products, or other materials on other websites or
              applications. You assume all risk and we disclaim all liability arising from your use of them.
              <br />
              We make no promises and disclaim all liability of specific results from the use of the Service.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Termination.</h2>
            <p className="text-base text-gray-500">
              The EULA is effective until terminated by you or {company.product} Your rights under the EULA will
              terminate automatically without notice from {company.product} if you fail to comply with any term(s) of
              the EULA (including by violating any license restriction provided herein). You may terminate the EULA by
              uninstalling the App Upon any termination of the EULA, you must immediately cease all use of the Service.
              If you are a Winning Designer and terminate your account before you have completely delivered the Design
              Package, you may not be allowed to use the Service in the future.
            </p>
            <h2 className="text-lg mb-2">Disclaimer.</h2>
            <div className="text-base text-gray-500">
              &#34;Released Parties&#34; include {company.product} and its affiliates, officers, employees, agents,
              partners, and licensors <br /> YOU EXPRESSLY UNDERSTAND AND AGREE THAT:
              <ol type="A" className="pl-10 my-4 list-inside list-decimal">
                <li>
                  YOUR USE OF THE SERVICE IS AT YOUR SOLE RISK, AND THE SERVICE IS PROVIDED ON AN &#34;AS IS&#34; AND
                  &#34;AS AVAILABLE&#34; BASIS AND THE RELEASED PARTIES EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND,
                  WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES AS TO PRODUCTS OR SERVICES
                  OFFERED BY BUSINESSES LISTED ON THE SERVICE, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT;{' '}
                </li>
                <li>
                  THE RELEASED PARTIES MAKE NO WARRANTY THAT
                  <ol type="i" className="pl-10 my-4 list-inside list-roman">
                    <li>THE SERVICE WILL MEET YOUR REQUIREMENTS</li>
                    <li>THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
                    <li>
                      THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE SERVICE, INCLUDING DATA, WILL BE ACCURATE OR
                      RELIABLE,
                    </li>
                    <li>
                      THE QUALITY OF ANY GOODS, DATA OR SERVICE AVAILABLE ON THE SERVICE WILL MEET YOUR EXPECTATIONS
                      AND,
                    </li>
                    <li>ANY ERRORS IN THE SERVICE WILL BE CORRECTED;</li>
                  </ol>
                </li>
                <li>
                  ANY MATERIAL OBTAINED THROUGH THE USE OF THE SERVICE IS ACCESSED AT YOUR OWN DISCRETION AND RISK, AND
                  YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA
                  THAT RESULTS FROM THE USE OF ANY SUCH MATERIAL.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Limitation of Liability.</h2>
            <div className="text-base text-gray-500">
              YOU EXPRESSLY UNDERSTAND AND AGREE THAT THE RELEASED PARTIES WILL NOT BE LIABLE TO YOU FOR ANY DIRECT,
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES
              FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF {company.product} HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), RESULTING FROM:
              <ol type="i" className="pl-10 my-4 list-inside list-roman">
                <li>THE USE OR THE INABILITY TO USE THE SERVICE;</li>
                <li>
                  THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION
                  OR SERVICES OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH, FROM, OR AS A RESULT
                  OF THE SITE;
                </li>
                <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA;</li>
                <li>STATEMENTS OR CONDUCT OF ANY USER OR THIRD PARTY ON THE SERVICE;</li>
                <li> YOUR RELIANCE ON CONTENT OR DATA MADE AVAILABLE BY US; OR </li>
                <li>
                  ANY OTHER MATTER RELATING TO THE SERVICE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                  WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES.
                  ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS IN THIS PARAGRAPH MAY NOT APPLY TO YOU.
                </li>
              </ol>
              <br />
              TO THE FULLEST EXTENT POSSIBLE BY LAW, THE RELEASED PARTIES&#39; MAXIMUM LIABILITY ARISING OUT OF OR IN
              CONNECTION WITH THE SERVICE OR YOUR USE OF COMPANY CONTENT, REGARDLESS OF THE CAUSE OF ACTION (WHETHER IN
              CONTRACT, TORT, BREACH OF WARRANTY, OR OTHERWISE), WILL NOT EXCEED THE GREATER OF
              <ol type="A" className="pl-10 my-4 list-inside list-decimal">
                <li>IF YOU ARE A CLIENT, THE FEES YOU HAVE PAID TO {company.product},</li>
                <li> IF YOU ARE A DESIGNER, THE FEES PAID BY {company.product} TO YOU, AND $100.</li>
              </ol>
            </div>
          </div>
          <h2 className="text-lg mb-2">Indemnity.</h2>
          <div className="text-base text-gray-500">
            You agree to defend, indemnify, and hold harmless the Released Parties and their respective officers,
            directors, employees, contractors, agents, licensors, and suppliers from and against any claims, actions,
            liabilities, damages, judgments, losses, expenses or demands, including without limitation reasonable legal
            and accounting fees, alleging or resulting from
            <ol type="i" className="pl-10 my-4 list-inside list-roman">
              <li>Your use of or reliance on any third-party content,</li>
              <li>Your use of or reliance on any {company.product} Content or Designs, or</li>
              <li>
                Your breach of the EULA or your use of the Services, including, without limitation, any use of the
                content, services, and products of the Services other than as expressly authorized in EULA or your use
                of any information obtained from the Site. We will provide notice to you promptly of any such claim,
                suit, or proceeding.
              </li>
            </ol>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Third Party Disputes.</h2>
            <p className="text-base text-gray-500">
              {company.product} IS NOT AFFILIATED WITH ANY CARRIER, SERVICE PROVIDER, OR THIRD PARTY SERVICE, AND ANY
              DISPUTE YOU HAVE WITH ANY CARRIER, SERVICE PROVIDER, THIRD PARTY SERVICE OR OTHER THIRD PARTY, INCLUDING,
              WITHOUT LIMITATION, ANY OTHER USER OF THE SERVICE, IS DIRECTLY BETWEEN YOU AND SUCH THIRD PARTY, AND YOU
              IRREVOCABLY RELEASE THE RELEASED PARTIES FROM ANY AND ALL CLAIMS, DEMANDS AND DAMAGES (ACTUAL AND
              CONSEQUENTIAL) OF EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH
              SUCH DISPUTES.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Copyright Policy.</h2>
            <div className="text-base text-gray-500">
              The Digital Millennium Copyright Act of 1998 (the &#34;DMCA&#34;) provides recourse for copyright owners
              who believe that material appearing on the Internet infringes their rights under U.S. copyright law. If
              you believe in good faith that materials posted on the Service infringe your copyright, you (or your
              agent) may send {company.product} a &#34;Notification of Claimed Infringement&#34; requesting that the
              material be removed, or access to it blocked The notice must include the following information:
              <ol type="i" className="pl-10 my-4 list-inside list-roman">
                <li>
                  A physical or electronic signature of a person authorized to act on behalf of the owner of the works
                  that have been allegedly infringed;
                </li>
                <li>
                  Identification of the copyrighted work alleged to have been infringed (or if multiple copyrighted
                  works located on the Service are covered by a single notification, a representative list of such
                  works);
                </li>
                <li>
                  Identification of the specific material alleged to be infringing or the subject of infringing
                  activity, and information reasonably sufficient to allow {company.product} to locate the material on
                  the Service;
                </li>
                <li> Your name, address, telephone number, and email address (if available);</li>
                <li>
                  A statement that you have a good faith belief that use of the material in the manner complained of is
                  not authorized by the copyright owner, its agent, or the law;
                </li>
                <li>
                  A statement that the information in the notification is accurate, and under penalty of perjury, that
                  the complaining party is authorized to act on behalf of the owner of an exclusive right that is
                  allegedly infringed.
                </li>
              </ol>
              <br />
              If you believe in good faith that a notice of copyright infringement has been wrongly filed against you,
              the DMCA permits you to send {company.product} a counter-notice.
              <br />
              Notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA; see
              http://www.loc.gov/copyright/ for details Notices and counter-notices with respect to the Service should
              be sent to 1024 Delaware St. Denver, CO 80218 ({company.product} Consult your legal advisor and see 17
              U.S.C. ¤512 before filing a notice or counter-notice as there are penalties for false claims under the
              DMCA.
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Dispute Resolution.</h2>
            <div className="text-base text-gray-500">
              The EULA and the relationship between you and {company.product} will be governed by the laws of the State
              of California without regard to its conflict of law provisions You and {company.product} agree to submit
              to the personal and exclusive arbitration of any disputes relating to your use of the Service under the
              rules of the American Arbitration Association Any such arbitration, to the extent necessary, shall be
              conducted in Los Angeles County in the State of California You covenant not to sue {company.product} in
              any other forum.
              <br />
              You also acknowledge and understand that, with respect to any dispute with the Released Parties arising
              out of or relating to your use of the Service or the EULA:
              <br />
              <ol className="pl-10 my-4 list-inside list-decimal">
                <li className="pl-2 py-1"> YOU ARE GIVING UP YOUR RIGHT TO HAVE A TRIAL BY JURY;</li>
                <li className="pl-2 py-1">
                  YOU ARE GIVING UP YOUR RIGHT TO SERVE AS A REPRESENTATIVE, AS A PRIVATE ATTORNEY GENERAL, OR IN ANY
                  OTHER REPRESENTATIVE CAPACITY, OR TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS, IN ANY LAWSUIT
                  INVOLVING ANY SUCH DISPUTE;
                </li>
                <li className="pl-2 py-1">
                  {' '}
                  YOU MUST FILE ANY CLAIM WITHIN ONE (1) YEAR AFTER SUCH CLAIM AROSE OR IT IS FOREVER BARRED.
                </li>
              </ol>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Miscellaneous.</h2>
            <p className="text-base text-gray-500">
              Assignment You may not assign this EULA or any of the rights or licenses granted hereunder, directly or
              indirectly, including by sale, merger, change of control, operation of law or otherwise, without the prior
              written consent of {company.product}. {company.product} may assign the EULA, including all its rights
              hereunder, without restriction.
              <br />
              Survival The provisions of the EULA that are intended to survive the termination of the EULA by their
              nature will survive the termination of the EULA, including, but not limited to, Sections 2 (General), 5
              (Content You Submit; License Grants from You), 11 (Your Use of the Service and Service Content), 12 (Third
              Party Software), 13 (Consent to Use of Data), 14 (Ownership), 15 (Feedback), 17 ({company.product}&#39;s
              Liability), 18 (Termination), 19 (Disclaimer), 20 (Limitation of Liability), 21 (Indemnity), 21 (Third
              Party Disputes), 23 (Copyright Policy), 24 (Dispute Resolution), and 25 (Miscellaneous).
              <br />
              Consent to Electronic Communications By using the Service, you consent to receiving certain electronic
              communications from us as further described in our Privacy Policy Please read our Privacy Policy to learn
              more about your choices regarding our electronic communications practices You agree that any notices,
              agreements, disclosures, or other communications that we send to you electronically will satisfy any legal
              communication requirements, including that such communications be in writing.
              <br />
              The EULA, together with the Privacy Policy and any other agreements expressly incorporated by reference
              herein, constitute the entire and exclusive understanding and agreement between you and {company.product}
              regarding your use of and access to the Service, and, except as expressly permitted above, may be amended
              only by a written agreement signed by authorized representatives of all parties to the EULA The failure to
              require performance of any provision will not affect our right to require performance at any time
              thereafter, nor will a waiver of any breach or default of the EULA or any provision of the EULA constitute
              a waiver of any subsequent breach or default or a waiver of the provision itself Use of section headers in
              the EULA is for convenience only and will not have any impact on the interpretation of particular
              provisions In the event that any part of the EULA is held to be invalid or unenforceable, the
              unenforceable part shall be given effect to the greatest extent possible and the remaining parts will
              remain in full force and effect You agree that no joint venture, partnership, employment, or agency
              relationship exists between you and {company.product} as a result of the EULA or use of the Service.
              <br />
              Contacting {company.product}. You can contact {company.product} Design Solutions Pvt Ltd by e-mail at{' '}
              <a className="text-red-500 hover:underline" href={`mailto:${company.email.support}`}>
                {company.email.support}
              </a>
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Gift Card Terms</h2>
            <p className="text-base text-gray-500">
              This card is issued by Neo Design Labs Inc (“Spacejoy”) and and is redeemable only for online purchases at
              www.spacejoy.com The card may not be used to purchase another gift card or toward previously purchased
              merchandise. Funds on these cards do not expire and can not be refunded or exchanged, redeemed for cash or
              applied as payment to any account, unless required by law. Returned merchandise purchased with a Gift Card
              will be refunded to a Gift Card. Spacejoy does not accept responsibility for cards lost, damaged or
              stolen, or any unauthorized use of cards and unauthorized resale is prohibited. Acceptance of this card
              constitutes acceptance of these terms and conditions. Spacejoy reserves the right to change these terms
              and conditions at any time. To check your balance, visit this{' '}
              <a className="text-red-500 hover:underline" href="/purchase-gift-card">
                link
              </a>{' '}
              or call <a href="tel:+13104837722">+1.310.483.7722</a> If redeemed, refer to refund and return policies at
              www.spacejoy.com
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Termination of your Spacejoy account </h2>
            <p className="text-base text-gray-500">
              You have the right to terminate your Spacejoy account at any time by contacting us at hello@spacejoy.com.
              Upon termination of your account, your user profile will be removed from Spacejoy and your user content
              may be removed from the site, and your user content will not be available to you. However, you understand
              that NDL Labs is not required to remove your user content, and removed content may persist in backup
              copies for a reasonable period of time. NDL Labs has no obligation to maintain or provide user content of
              a Spacejoy registrant after account termination and may delete all content provided unless legally
              prohibited from doing so. NDL Labs may terminate your Spacejoy account with immediate effect for any
              violation whatsoever of these Terms.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-lg mb-2">Mobile Application Terms</h2>
            <p className="text-base text-gray-500">
              Neo Design Labs (Spacejoy) may make certain mobile applications available to you. The use of these mobile
              applications either alone or in connection with the Services is governed by these Terms. In addition, you
              must comply with all applicable third party terms of agreement when using the mobile applications (for
              example, any agreement with a wireless service or wireless data provider or the app store or other portal
              from where you downloaded the mobile application). You agree that these Terms and the Privacy Policy are
              between you and Neo Design Labs, and that even if you receive access to Spacejoy through Apple, Inc.’s App
              Store or any other source (collectively, the “Distributor”) for use on a mobile device, the Distributor
              has no liability or responsibility whatsoever to you, related to Spacejoy, whether by contract, warranty
              or otherwise, and although you will continue to be bound by the terms you agreed with such Distributor,
              you will look only to NDL Labs for any support relating to the services. You may use the Spacejoy mobile
              application on a product that you own or control and as permitted by the usage rules set forth by the
              Distributor. The Distributor is not responsible for addressing any claims of any sort related to Spacejoy,
              and you must address any claims directly with NDL Labs. The Distributor and its subsidiaries have the
              right (and will be deemed to have accepted the right) to enforce these Terms against you as a third party
              beneficiary hereof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;
