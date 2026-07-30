import { product } from '../config/product';

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: LegalSection[];
}

export const EFFECTIVE_DATE = '30 July 2026';

export const legalPages: Record<string, LegalPageContent> = {
  terms: {
    slug: 'terms',
    title: 'Terms and Conditions',
    description: 'The terms and conditions governing purchases made on the PRODXSTORE digital products marketplace.',
    intro: `These Terms and Conditions ("Terms") govern your use of ${product.siteUrl} and any purchase made through ${product.brand} ("we", "us", "our"). By purchasing or downloading any product from PRODXSTORE, you agree to these Terms.`,
    sections: [
      {
        heading: '1. About PRODXSTORE',
        paragraphs: [
          'PRODXSTORE is a digital-products marketplace that sells downloadable digital resources, including the 50 Illustrated Kids Stories Mega Bundle, to individual consumers, parents, teachers and learning organisations.',
          'All products sold on PRODXSTORE are digital downloads. No physical goods are shipped as part of any order placed through this website.',
        ],
      },
      {
        heading: '2. Orders and Payment',
        paragraphs: [
          'Prices are displayed in Indian Rupees (INR) and are inclusive of applicable taxes unless stated otherwise at checkout. Payment for all products is a one-time payment; PRODXSTORE does not currently sell any recurring subscription products.',
          'An order is considered complete once payment has been successfully processed. Access to the purchased digital files is provided through the delivery method described in the Delivery Policy.',
        ],
      },
      {
        heading: '3. Licence to Use Purchased Files',
        paragraphs: [
          'When you purchase the 50 Illustrated Kids Stories Mega Bundle, you are granted a personal and single-classroom use licence as described on the product page and in the Personal and Classroom Licence document included in your download.',
          'You may not resell, redistribute, publicly share, sublicense or commercially republish the files, in original or modified form, without separate written permission from PRODXSTORE.',
        ],
      },
      {
        heading: '4. Refunds',
        paragraphs: [
          'Refund requests are handled in accordance with the published Refund Policy. Because our products are delivered digitally and access is granted immediately after payment, change-of-mind refunds are normally unavailable once files have been delivered, subject to applicable consumer law.',
        ],
      },
      {
        heading: '5. Changes to These Terms',
        paragraphs: [
          'We may update these Terms from time to time to reflect changes to our products, policies or applicable law. The version published on this page is the version in effect at the time of your purchase.',
        ],
      },
      {
        heading: '6. Contact',
        paragraphs: [
          `Questions about these Terms can be sent to ${product.supportEmail}.`,
        ],
      },
    ],
  },

  privacy: {
    slug: 'privacy',
    title: 'Privacy Policy',
    description: 'How PRODXSTORE collects, uses and protects information when you purchase a digital product.',
    intro: `This Privacy Policy explains how ${product.brand} collects, uses and safeguards information in connection with your visit to our website and any purchase you make.`,
    sections: [
      {
        heading: '1. Information We Collect',
        paragraphs: [
          'When you complete a purchase, we collect the information necessary to process your order and deliver your digital product, such as your name, email address and payment confirmation details. We do not collect more information than is reasonably required to fulfil your order and provide support.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        paragraphs: [
          'Your information is used to process payment, deliver the purchased digital files, respond to support requests, and communicate important updates about your order. We do not sell your personal information to third parties.',
        ],
      },
      {
        heading: '3. Payment Processing',
        paragraphs: [
          'Payments are processed through secure third-party payment processors. PRODXSTORE does not store your full card or payment credentials on its own servers.',
        ],
      },
      {
        heading: '4. Data Retention',
        paragraphs: [
          'We retain order and support records for as long as reasonably necessary to resolve delivery issues, respond to enquiries and meet our legal and accounting obligations.',
        ],
      },
      {
        heading: '5. Your Rights',
        paragraphs: [
          'You may contact us at any time to ask what information we hold about you, to request a correction, or to request deletion of your information where we are not required to retain it for legal or accounting purposes.',
        ],
      },
      {
        heading: '6. Contact',
        paragraphs: [
          `Privacy-related questions can be sent to ${product.supportEmail}.`,
        ],
      },
    ],
  },

  license: {
    slug: 'license',
    title: 'Personal and Classroom Use Licence',
    description: 'The usage licence granted with the 50 Illustrated Kids Stories Mega Bundle.',
    intro: 'This licence describes what you may and may not do with the digital files included in the 50 Illustrated Kids Stories Mega Bundle. A copy of this licence is also included inside your downloaded ZIP package.',
    sections: [
      {
        heading: '1. What This Licence Allows',
        paragraphs: [
          'You may download, read and print the storybook PDF and bonus files for your own household use.',
          'You may use the material with one classroom if you are a teacher or tutor, including printing copies for the children in that single classroom.',
          'You may edit the master DOCX file to add your own notes, questions or activity instructions for your own personal or single-classroom use.',
        ],
      },
      {
        heading: '2. What This Licence Does Not Allow',
        paragraphs: [
          'You may not resell, redistribute, publicly upload, share the ZIP package, or commercially republish the stories, bonuses or any edited version of the DOCX file.',
          'You may not use the material across multiple classrooms, schools or branches under a single purchase. Each additional classroom requires its own licence unless a broader licence is purchased separately.',
          'You may not claim authorship of the original story content when sharing any permitted excerpts for classroom or household use.',
        ],
      },
      {
        heading: '3. Duration',
        paragraphs: [
          'This licence applies for as long as you retain the downloaded files. Download the files and keep them for continued permitted use under the terms of this licence.',
        ],
      },
      {
        heading: '4. Questions About This Licence',
        paragraphs: [
          `If you need a licence covering additional classrooms or a different use case, contact ${product.supportEmail} before use.`,
        ],
      },
    ],
  },

  disclaimer: {
    slug: 'disclaimer',
    title: 'Disclaimer',
    description: 'Important disclaimers relating to the content and use of PRODXSTORE digital products.',
    intro: 'This Disclaimer applies to the 50 Illustrated Kids Stories Mega Bundle and other digital products sold by PRODXSTORE.',
    sections: [
      {
        heading: '1. Content Suitability',
        paragraphs: [
          'The story collection is written for general reading enjoyment and is generally suitable for children ages 6–12. Parent-guided reading is recommended for approximately ages 6–10, and confident readers around ages 9–12 may read independently.',
          'The Spooky Stories category is mildly spooky in tone and is recommended for ages 9 and above with parental guidance. Parents and teachers should review any story before sharing it with a child if they have concerns about its suitability for that specific child.',
        ],
      },
      {
        heading: '2. No Professional Advice',
        paragraphs: [
          'The Parent Storytelling Guide and other bonus materials are provided for general informational and educational purposes only. They are not a substitute for professional educational, developmental or psychological advice.',
        ],
      },
      {
        heading: '3. Original Content',
        paragraphs: [
          'All stories, characters and illustrations included in this bundle are original works created for PRODXSTORE. No copyrighted third-party characters, logos or brand imagery are used or implied.',
        ],
      },
      {
        heading: '4. Limitation of Liability',
        paragraphs: [
          'To the extent permitted by applicable law, PRODXSTORE is not liable for any indirect or consequential loss arising from the use of the digital files, beyond the purchase price paid for the product.',
        ],
      },
    ],
  },

  'refund-policy': {
    slug: 'refund-policy',
    title: 'Refund Policy',
    description: 'When refunds are available for digital products purchased from PRODXSTORE.',
    intro: 'Because PRODXSTORE sells digital downloads, our refund policy reflects the fact that access to purchased files is granted immediately after payment.',
    sections: [
      {
        heading: '1. Delivery Issues',
        paragraphs: [
          'If you experience a duplicate charge, a corrupted download, a missing file, or any other technical delivery problem, contact us and we will help restore access, resend the files, or provide an appropriate resolution.',
        ],
      },
      {
        heading: '2. Change-of-Mind Requests',
        paragraphs: [
          'Change-of-mind refunds are normally unavailable once the digital files have been delivered, because the product has already been made fully accessible to you. This is standard practice for digital goods and is subject to applicable consumer law in your jurisdiction.',
        ],
      },
      {
        heading: '3. How to Request Assistance',
        paragraphs: [
          `Email ${product.supportEmail} with the email address used for payment and your order reference. Our support team will review your request and respond with the next steps.`,
        ],
      },
    ],
  },

  'delivery-policy': {
    slug: 'delivery-policy',
    title: 'Delivery Policy',
    description: 'How PRODXSTORE delivers the 50 Illustrated Kids Stories Mega Bundle after purchase.',
    intro: 'This Delivery Policy explains how you will receive your digital product after a successful purchase.',
    sections: [
      {
        heading: '1. Digital Delivery Only',
        paragraphs: [
          'The 50 Illustrated Kids Stories Mega Bundle is a digital-download product. No physical item is printed, packaged or shipped. There is no shipping address required for delivery.',
        ],
      },
      {
        heading: '2. What You Receive',
        paragraphs: [
          'After successful payment, you will receive one organised ZIP package containing the Read Me First guide, the combined storybook PDF, the editable master DOCX, the bonus pack, the editable bonus files and the Personal and Classroom Use Licence.',
        ],
      },
      {
        heading: '3. Delivery Timing',
        paragraphs: [
          'Access is provided as soon as payment has been confirmed. If your download does not arrive or does not open correctly, contact support with your order details and we will assist promptly.',
        ],
      },
      {
        heading: '4. Support',
        paragraphs: [
          `For any delivery issue, email ${product.supportEmail} with the email address used for payment and, if available, your order reference.`,
        ],
      },
    ],
  },

  contact: {
    slug: 'contact',
    title: 'Contact Support',
    description: 'How to reach PRODXSTORE customer support for order, delivery or licensing questions.',
    intro: 'Our support team is here to help with orders, downloads and licensing questions relating to the 50 Illustrated Kids Stories Mega Bundle and other PRODXSTORE products.',
    sections: [
      {
        heading: 'Email Support',
        paragraphs: [
          `Send your question to ${product.supportEmail}. Please include the email address used for payment and your order reference where possible, so we can locate your order quickly.`,
        ],
      },
      {
        heading: 'What to Include in Your Message',
        paragraphs: [
          'A brief description of the issue (for example: missing file, corrupted download, duplicate charge, or a licensing question).',
          'The email address used at checkout and, if available, your order reference number.',
        ],
      },
      {
        heading: 'Response Times',
        paragraphs: [
          'We aim to respond to all support requests as promptly as possible. Delivery-related issues such as missing or corrupted files are treated as a priority.',
        ],
      },
    ],
  },

  'download-help': {
    slug: 'download-help',
    title: 'Download Help',
    description: 'Troubleshooting help for downloading and opening your PRODXSTORE digital files.',
    intro: 'If you are having trouble downloading or opening your 50 Illustrated Kids Stories Mega Bundle files, the steps below cover the most common issues.',
    sections: [
      {
        heading: 'The ZIP File Will Not Open',
        paragraphs: [
          'Most phones, tablets and computers can open ZIP files using their built-in file manager. If your device does not open ZIP files by default, install a free, reputable file-extraction app for your device before trying again.',
        ],
      },
      {
        heading: 'The PDF Will Not Open',
        paragraphs: [
          'The storybook PDF can be opened with any common PDF reader, including the built-in PDF viewer on most phones, tablets and web browsers, or a dedicated PDF reader app on desktop computers.',
        ],
      },
      {
        heading: 'The DOCX File Will Not Open',
        paragraphs: [
          'The editable master document can be opened with Microsoft Word or a compatible document editor. If you do not have Microsoft Word, most free document editors that support the .docx format will also open the file correctly.',
        ],
      },
      {
        heading: 'Still Need Help?',
        paragraphs: [
          `Contact ${product.supportEmail} with a description of the problem and the device or app you are using, and our support team will help you get access to your files.`,
        ],
      },
    ],
  },
};
