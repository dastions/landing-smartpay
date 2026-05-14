/** Structured legal copy (English) for rendering on the landing. */

export const legalMeta = {
  title: 'Legal Notice & Information Protection Policy',
  lastUpdated: 'May 14, 2026',
  intro:
    'This document contains the Legal Notice and Information Protection Policy for Software Payment Services, LLC.',
}

export const companySection = {
  title: '1. Company Information',
  lines: [
    { label: 'Company name', value: 'Software Payment Services, LLC' },
    { label: 'EIN', value: '36-5174309' },
    {
      label: 'Registered address',
      value: '1808 West Mountain Avenue Garage, Fort Collins, CO 80521, United States',
    },
    { label: 'Contact email', value: 'info@appsmartpay.com', href: 'mailto:info@appsmartpay.com' },
  ],
  note:
    'Software Payment Services, LLC operates the AppSmartPay platform and related digital services.',
  contactNote:
    'For any legal, commercial, technical, or information protection inquiries, please contact:',
  contactEmail: 'info@appsmartpay.com',
}

function p(text) {
  return { type: 'p', text }
}

function h2(text) {
  return { type: 'h2', text }
}

function ul(items) {
  return { type: 'ul', items }
}

export const legalNoticeBlocks = [
  h2('2. Website and Platform Owner'),
  p(
    'The website, application, platform, software, services, content, interfaces, documentation, trademarks, trade names, logos, designs, databases, source code, functionalities, and any related digital assets associated with AppSmartPay are owned, licensed, or operated by Software Payment Services, LLC.',
  ),
  p(
    'Access to and use of the AppSmartPay platform are subject to this Legal Notice, the applicable Terms of Service, and any additional policies or agreements made available by Software Payment Services, LLC.',
  ),
  p(
    'By accessing or using the platform, the user agrees to comply with this Legal Notice and all applicable laws and regulations.',
  ),
  h2('3. Purpose of the Platform'),
  p(
    'AppSmartPay is a digital payment, transaction management, and software services platform designed to support payment-related operations, account management, reporting, digital workflows, and related business functionalities.',
  ),
  p(
    'Software Payment Services, LLC may update, modify, suspend, replace, or discontinue any feature, service, interface, or functionality of the platform at any time, subject to applicable contractual obligations.',
  ),
  h2('4. Permitted Use'),
  p(
    'Users agree to use the platform only for lawful purposes and in accordance with applicable agreements, policies, and laws.',
  ),
  p('Users must not:'),
  ul([
    'Use the platform for fraudulent, unlawful, abusive, or unauthorized purposes.',
    'Attempt to gain unauthorized access to systems, accounts, servers, databases, APIs, or networks.',
    'Interfere with the security, availability, integrity, or performance of the platform.',
    'Reverse engineer, copy, reproduce, modify, distribute, resell, or exploit the platform without prior written authorization.',
    'Upload, transmit, or distribute malware, harmful code, automated scraping tools, or other disruptive technologies.',
    'Misrepresent identity, authorization, ownership, transaction activity, or business purpose.',
    'Use the platform in a way that violates applicable payment, banking, anti-fraud, cybersecurity, export control, or consumer protection laws.',
  ]),
  p(
    'Software Payment Services, LLC reserves the right to restrict, suspend, or terminate access when misuse, security risk, fraud, non-compliance, or breach of agreement is detected.',
  ),
  h2('5. Intellectual Property'),
  p(
    'All intellectual property rights related to AppSmartPay, including software, interfaces, texts, graphics, icons, visual elements, workflows, documentation, technical architecture, trademarks, service marks, logos, domain names, and databases, belong to Software Payment Services, LLC or its licensors.',
  ),
  p(
    'No right, title, or interest is transferred to users except for the limited right to access and use the platform according to the applicable terms.',
  ),
  p(
    'Users may not copy, reproduce, modify, adapt, translate, distribute, sell, sublicense, decompile, disassemble, or create derivative works from any part of the platform without prior written authorization from Software Payment Services, LLC.',
  ),
  h2('6. Third-Party Services'),
  p(
    'The platform may integrate with third-party providers, including payment processors, hosting providers, identity verification providers, analytics providers, infrastructure providers, financial technology partners, compliance tools, and communication services.',
  ),
  p(
    'Software Payment Services, LLC is not responsible for the independent acts, omissions, policies, systems, availability, or security practices of third-party providers, except where required by applicable law or binding agreement.',
  ),
  p(
    'Use of third-party services may be subject to separate terms, notices, policies, and contractual obligations.',
  ),
  h2('7. Availability and Maintenance'),
  p(
    'Software Payment Services, LLC uses commercially reasonable efforts to maintain the availability, security, and reliability of the platform.',
  ),
  p('However, the platform may be interrupted, delayed, limited, or unavailable due to:'),
  ul([
    'Maintenance or updates.',
    'Technical failures.',
    'Cybersecurity events.',
    'Third-party service disruptions.',
    'Network or infrastructure issues.',
    'Regulatory or legal requirements.',
    'Force majeure events.',
    'Events beyond the reasonable control of Software Payment Services, LLC.',
  ]),
  p(
    'Software Payment Services, LLC does not guarantee uninterrupted, error-free, or permanently available access unless expressly agreed in writing.',
  ),
  h2('8. Disclaimer of Warranties'),
  p(
    'The platform is provided on an “as is” and “as available” basis, unless otherwise agreed in writing.',
  ),
  p(
    'To the maximum extent permitted by applicable law, Software Payment Services, LLC disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, reliability, availability, and suitability for any specific business outcome.',
  ),
  p(
    'Software Payment Services, LLC does not warrant that the platform will be free from errors, vulnerabilities, interruptions, unauthorized access, data loss, or harmful components.',
  ),
  h2('9. Limitation of Liability'),
  p(
    'To the maximum extent permitted by applicable law, Software Payment Services, LLC shall not be liable for indirect, incidental, special, consequential, punitive, exemplary, or similar damages, including loss of profits, revenue, business opportunities, goodwill, savings, information, transactions, or platform availability.',
  ),
  p(
    'Software Payment Services, LLC’s total liability shall be limited to the amount expressly permitted under the applicable agreement between the parties, or, if no such agreement exists, to the maximum limitation allowed by law.',
  ),
  p('Nothing in this Legal Notice limits liability where such limitation is prohibited by law.'),
  h2('10. Compliance'),
  p(
    'Users are responsible for ensuring that their use of the platform complies with all applicable laws, regulations, industry standards, payment network rules, tax obligations, business requirements, and contractual obligations.',
  ),
  p('This may include, where applicable:'),
  ul([
    'Payment processing rules.',
    'Anti-fraud requirements.',
    'Anti-money laundering obligations.',
    'Consumer protection requirements.',
    'Cybersecurity requirements.',
    'Financial services regulations.',
    'Electronic communications rules.',
    'Export control and sanctions laws.',
    'State and federal privacy and security laws.',
  ]),
  p(
    'Software Payment Services, LLC may request documentation, verification, or cooperation where reasonably necessary to support compliance, risk management, fraud prevention, security, or regulatory obligations.',
  ),
  h2('11. Governing Law'),
  p(
    'Unless a separate written agreement provides otherwise, this Legal Notice shall be governed by the laws of the State of Colorado and applicable federal laws of the United States, without regard to conflict of law principles.',
  ),
  p(
    'Any dispute arising from or related to this Legal Notice, the platform, or related services shall be resolved in the competent courts or dispute resolution forum established in the applicable agreement.',
  ),
  h2('12. Changes to this Legal Notice'),
  p(
    'Software Payment Services, LLC may update this Legal Notice from time to time to reflect legal, operational, technical, or business changes.',
  ),
  p(
    'The updated version will be made available through the platform or website. Continued use of the platform after publication of updates means acceptance of the revised Legal Notice, unless applicable law requires a different process.',
  ),
]

export const privacyPolicyBlocks = [
  h2('13. Purpose'),
  p(
    'This Information Protection Policy explains how Software Payment Services, LLC protects information handled through AppSmartPay and related services.',
  ),
  p(
    'The objective of this policy is to describe the administrative, technical, and organizational measures used to support confidentiality, integrity, availability, fraud prevention, security, and lawful operation of the platform.',
  ),
  p('This policy is designed for a United States legal and operational environment.'),
  h2('14. Scope'),
  p('This policy applies to:'),
  ul([
    'AppSmartPay platform users.',
    'Merchants, customers, partners, vendors, contractors, and service providers.',
    'Website visitors.',
    'Account holders and authorized representatives.',
    'Internal personnel and authorized operators.',
    'Systems, databases, interfaces, APIs, applications, cloud infrastructure, support channels, and related business processes operated by or on behalf of Software Payment Services, LLC.',
  ]),
  h2('15. Information We May Handle'),
  p(
    'Depending on the services used, Software Payment Services, LLC may handle information required to operate, secure, support, verify, improve, and maintain the platform.',
  ),
  p('This may include:'),
  ul([
    'Account information.',
    'Business information.',
    'Contact information.',
    'Transaction-related information.',
    'Payment-related information.',
    'Device, browser, log, and technical information.',
    'Authentication and security information.',
    'Support and communication records.',
    'Compliance, fraud prevention, and risk management information.',
    'Usage, performance, and diagnostic information.',
    'Records required to provide services or meet legal and contractual obligations.',
  ]),
  p(
    'Software Payment Services, LLC does not request information that is not reasonably needed for platform operation, security, compliance, support, or service delivery.',
  ),
  h2('16. How Information Is Used'),
  p('Software Payment Services, LLC may use information to:'),
  ul([
    'Provide, operate, and maintain AppSmartPay.',
    'Create, manage, verify, and support accounts.',
    'Process transactions and platform activity.',
    'Communicate with users, merchants, partners, and service providers.',
    'Provide customer and technical support.',
    'Detect, prevent, investigate, and respond to fraud, abuse, unauthorized activity, security threats, and technical issues.',
    'Improve performance, reliability, user experience, and platform functionality.',
    'Monitor compliance with applicable terms, laws, and technical requirements.',
    'Maintain records required for business, legal, tax, accounting, regulatory, security, and dispute resolution purposes.',
    'Enforce agreements, policies, and platform rules.',
    'Protect the rights, safety, property, systems, and interests of Software Payment Services, LLC, users, partners, and the public.',
  ]),
  h2('17. Information Sharing'),
  p(
    'Software Payment Services, LLC may share information only when necessary for legitimate business, operational, legal, compliance, security, or service-related purposes.',
  ),
  p('Information may be shared with:'),
  ul([
    'Payment processors and financial technology providers.',
    'Cloud hosting and infrastructure providers.',
    'Security, monitoring, fraud prevention, and compliance vendors.',
    'Identity, verification, and authentication providers.',
    'Customer support, communication, and email service providers.',
    'Analytics, diagnostics, and performance service providers.',
    'Professional advisors, including legal, accounting, compliance, insurance, and auditing providers.',
    'Government, regulatory, law enforcement, or judicial authorities when required or permitted by law.',
    'Business successors in connection with a merger, acquisition, financing, restructuring, sale of assets, or similar transaction.',
  ]),
  p(
    'Software Payment Services, LLC does not authorize vendors or service providers to use information for unrelated purposes.',
  ),
  h2('18. Security Measures'),
  p(
    'Software Payment Services, LLC uses commercially reasonable administrative, technical, and organizational safeguards designed to protect information against unauthorized access, loss, misuse, alteration, disclosure, or destruction.',
  ),
  p('These safeguards may include:'),
  ul([
    'Access controls and role-based permissions.',
    'Authentication and authorization controls.',
    'Encryption where appropriate.',
    'Secure transmission protocols.',
    'Network and infrastructure monitoring.',
    'Logging and audit trails.',
    'Vulnerability management.',
    'Backup and recovery processes.',
    'Vendor review and risk management.',
    'Incident response procedures.',
    'Internal confidentiality obligations.',
    'Security reviews and system hardening.',
    'Employee and contractor access limitations.',
  ]),
  p('No security system is completely secure. Users are responsible for protecting their login credentials, devices, networks, and account access.'),
  h2('19. User Responsibilities'),
  p('Users must:'),
  ul([
    'Provide accurate and current information.',
    'Keep login credentials confidential.',
    'Use strong passwords and secure authentication methods.',
    'Notify Software Payment Services, LLC of suspected unauthorized access or suspicious activity.',
    'Use the platform only through authorized channels.',
    'Maintain the security of their own systems, devices, networks, and personnel.',
    'Ensure that their own business use of the platform complies with applicable laws and agreements.',
  ]),
  p(
    'Software Payment Services, LLC is not responsible for security failures caused by user negligence, unauthorized sharing of credentials, compromised devices, insecure networks, or misuse of the platform.',
  ),
  h2('20. Retention'),
  p('Software Payment Services, LLC retains information for as long as reasonably necessary to:'),
  ul([
    'Provide the services.',
    'Maintain business records.',
    'Complete transactions.',
    'Support users.',
    'Prevent fraud and abuse.',
    'Meet legal, tax, accounting, regulatory, security, and contractual obligations.',
    'Resolve disputes.',
    'Enforce agreements.',
    'Protect legitimate business interests.',
  ]),
  p(
    'Retention periods may vary depending on the type of information, legal requirements, service requirements, risk profile, and operational needs.',
  ),
  p(
    'When information is no longer reasonably required, Software Payment Services, LLC may delete, anonymize, archive, or securely retain it according to applicable retention practices.',
  ),
  h2('21. State-Specific Rights and Requests'),
  p(
    'Depending on the user’s location and applicable law, certain rights or choices may apply.',
  ),
  p(
    'Users may contact Software Payment Services, LLC to request information about available options regarding access, correction, deletion, restriction, portability, opt-out, or other rights recognized under applicable U.S. state laws.',
  ),
  p('Requests can be sent to:'),
  p('info@appsmartpay.com'),
  p(
    'Software Payment Services, LLC may need to verify the requester’s identity and authority before responding to a request. Some requests may be limited, denied, or delayed where permitted by law, including when retention is required for security, compliance, accounting, legal, fraud prevention, dispute resolution, or service-related purposes.',
  ),
  h2('22. California Notice'),
  p(
    'Where applicable, California residents may have specific rights under California privacy laws, including rights related to access, correction, deletion, portability, opt-out, and limits on certain uses.',
  ),
  p(
    'Software Payment Services, LLC will respond to eligible California requests in accordance with applicable law.',
  ),
  p('Requests may be submitted to:'),
  p('info@appsmartpay.com'),
  h2('23. Colorado Notice'),
  p(
    'Software Payment Services, LLC is located in Colorado and may be subject to Colorado privacy and consumer protection requirements depending on the nature and scale of its operations.',
  ),
  p(
    'Colorado users may contact Software Payment Services, LLC regarding applicable rights, choices, or requests at:',
  ),
  p('info@appsmartpay.com'),
  h2('24. Children'),
  p('The platform is not intended for children under 13 years of age.'),
  p(
    'Software Payment Services, LLC does not knowingly allow children under 13 to create accounts or use the platform. If information from a child under 13 is identified, Software Payment Services, LLC will take appropriate steps to delete or restrict it, unless retention is required by law.',
  ),
  h2('25. Cookies and Similar Technologies'),
  p(
    'The website or platform may use cookies, pixels, local storage, log files, SDKs, analytics tools, or similar technologies to support:',
  ),
  ul([
    'Authentication.',
    'Security.',
    'Session management.',
    'Platform functionality.',
    'Fraud prevention.',
    'Performance monitoring.',
    'Diagnostics.',
    'User preferences.',
    'Analytics and service improvement.',
  ]),
  p(
    'Users may be able to manage cookies through browser settings or platform controls. Disabling certain technologies may affect platform functionality.',
  ),
  h2('26. International Access'),
  p('Software Payment Services, LLC is based in the United States.'),
  p(
    'Users accessing the platform from outside the United States understand that information may be processed, stored, accessed, or transferred in the United States or other jurisdictions where service providers operate.',
  ),
  p(
    'Use of the platform is subject to applicable U.S. laws and any additional laws that may apply based on the user’s location, contractual relationship, or service configuration.',
  ),
  h2('27. Incident Response'),
  p(
    'Software Payment Services, LLC maintains procedures designed to identify, assess, contain, investigate, and respond to security incidents.',
  ),
  p(
    'In the event of an incident that requires notice under applicable law, Software Payment Services, LLC will provide notice to affected parties, regulators, or other required recipients in accordance with legal obligations.',
  ),
  h2('28. Vendors and Service Providers'),
  p(
    'Software Payment Services, LLC may use vendors and service providers to support platform operations.',
  ),
  p(
    'Where appropriate, Software Payment Services, LLC takes commercially reasonable steps to require vendors and service providers to maintain safeguards and use information only as necessary to provide services or comply with applicable obligations.',
  ),
  h2('29. Updates to this Policy'),
  p(
    'Software Payment Services, LLC may update this Information Protection Policy from time to time.',
  ),
  p(
    'Updates may reflect changes in law, technology, security practices, business operations, platform functionality, or service provider relationships.',
  ),
  p(
    'The updated version will be posted on the website or platform with a revised “Last updated” date.',
  ),
  p(
    'Continued use of the platform after updates means acceptance of the revised policy, unless applicable law requires a different process.',
  ),
  h2('30. Contact'),
  p('For questions, notices, requests, or concerns related to this Legal Notice or Information Protection Policy, contact:'),
  p('Software Payment Services, LLC'),
  p('1808 West Mountain Avenue Garage'),
  p('Fort Collins, CO 80521'),
  p('United States'),
  p('Email: info@appsmartpay.com'),
  p('EIN: 36-5174309'),
]
