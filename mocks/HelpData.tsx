import { company } from '@utils/config';

const data = [
  {
    tag: 'Who are we?',
    question: 'What is Spacejoy?',
    answer: `${company.product} is an online interior design service that helps with designing your actual space in 3D. You can either design it yourself, ask for an expert to design it for you, or even collaborate with the design team. The final design features products that can be bought right away from furniture and home decor stores across America.`,
  },
  {
    tag: 'Who are we?',
    question: 'Why Spacejoy?',
    answer: `${company.product}’s interactive 3D app is one of the easiest ways to design your home. We provide full access to the best interior designers from around the country. You can see your actual room in 3D, request revisions for the perfect design and gain access to a custom shopping list (with furniture and decor). We want to help you make an informed purchasing decision, so we make designing and purchasing easy!`,
  },
  {
    tag: 'Who are we?',
    question: 'Who are your designers?',
    answer: `Our interior designers are professionals from across the United States. Designers' credentials are reviewed by our leadership team and they must pass our assessment test and training prior to working with any customer. Are you interested in joining our fantastic design team? Apply at <a href="mailto:careers@spacejoy.com?subject=&body=">careers@spacejoy.com</a>.`,
  },
  {
    tag: 'Who are we?',
    question: 'I am interested in design, can I become a Spacejoy designer?',
    answer: `We are always accepting applications to join our talented team but our application process is competitive. If you have experience in design, please email your resume and design portfolio to <a href="mailto:careers@spacejoy.com?subject=&body=">careers@spacejoy.com</a>. Our leadership team will review your application and if your application meets the requirements, we will reach out to schedule an interview.`,
  },
  {
    tag: 'Who are we?',
    question: 'How much will it cost to work with us?',
    answer: `We have three packages - <a href="/pricing">Delight</a>, <a href="/pricing">Bliss</a> and <a href="/pricing">Euphoria</a>. You'll find details of the packages in our <a href="/pricing">Pricing Section</a>. Pick the one that best suits your requirements.`,
  },
  {
    tag: 'Who are we?',
    question: 'How is Spacejoy a one-stop design solution?',
    answer:
      "At Spacejoy, we don't just design your home in 3D for you; we take care of everything from design to ordering. The products featured in your design can be shopped directly through Spacejoy. Rest assured that our deal-hunters will also find the best pricing on the items in your shopping list. ",
  },
  {
    tag: 'Who are we?',
    question: 'Can Spacejoy work within my budget? ',
    answer:
      'Yes, we can work within your budget. We believe quality design can happen at any price point, and our super curators will scout stores across the internet to ensure that your space gets the best makeover within your budget. ',
  },
  {
    tag: 'Who are we?',
    question: 'How long does it take for a design to be complete, from start to finish?',
    answer: `The design delivery will depend on the ‘<a href="/pricing">Package</a>’ you choose. Details of this is mentioned in our ‘<a href="/pricing">Pricing Page</a>’. However if you are in a hurry, we can always make an exception. You can speak with your assigned designer to expedite the process. `,
  },
  {
    tag: 'Who are we?',
    question: 'What do I do if I am unhappy with a design?',
    answer: `Our designers are experts at translating your wants and needs into reality. In rare cases where we cannot deliver designs you love, our leadership team will reassign your project or refund your money. You can reach our team at <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a>.`,
  },
  {
    tag: 'Who are we?',
    question: 'How frequently can I reach out to the designers/s or the design team assisting me?',
    answer: `You have unlimited access to our designers during working hours using the chat feature within your project dashboard. Please allow 24-48 hours for a response. If you need to get in touch with your designer faster, please reach out to our team via e-mail at <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a>.`,
  },
  {
    tag: 'Account & Payment',
    question: 'What payment types do you accept?',
    answer:
      'We accept all standard forms of payment such as Visa, Mastercard & American Express. We also accept Affirm financing (pending approval) and Spacejoy Gift Cards. You can use any of these to pay for your package and for the products featured in your final design.',
  },
  {
    tag: 'Account & Payment',
    question: 'What happens if I forget my login and/or password?',
    answer:
      'Click on the forgot username / password button and enter your registered email id. Our support team will generate your username/password right away.',
  },
  {
    tag: 'Account & Payment',
    question: 'What if I want to cancel my payment and initiate a refund?',
    answer: `We want you to love your designs and your new space. If at any point you are dissatisfied, let us know at <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a> and we will work with you to ensure a seamless experience .`,
  },
  {
    tag: 'Customer Support',
    question: 'What is the best way to contact Spacejoy?',
    answer: `Write to us at <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a> or schedule a call.`,
  },
  {
    tag: 'Get Started',
    question: 'How do I get started?',
    answer: `Login to our website and sign up for one of our <a href="/pricing">packages</a>. Once you’ve selected and paid for the package that best fits your needs, you’ll need to complete your homework! Submit photos and answer the questions from our design quiz. Once these steps are completed, our team will review your project and get in touch with you to ensure that we have all the necessary details to start your project.`,
  },
  {
    tag: 'Get Started',
    question: 'Where can I see some ideas from your designers for inspiration?',
    answer: `You can view hundreds of our design examples on our <a href="/interior-designs">Interior Designs</a> page. Use this space to find inspiration for any of your rooms and for any design style! These are all real projects from our customers and we’re excited to share them with you to get your creative juices flowing.`,
  },
  {
    tag: 'Get Started',
    question: 'Once I get started, can I meet the design team face to face?',
    answer: `We have designers from around the country. If meeting the designer face to face is important to you then we will try to match you with someone around your location. While signing up, be sure to fill in your location and phone number so we can help.`,
  },
  {
    tag: 'Get Started',
    question: 'What brands do you source the products from?',
    answer: `Spacejoy works with hundreds of furniture and home decor brands from across the US. From brands you love (like Crate and Barrel and Pottery Barn) and a few that we hope to introduce you to- there is no shortage of retail options.`,
  },
  {
    tag: 'Get Started',
    question: 'What happens once I purchase products featured in my designs?',
    answer: `Once you have finalized the design, our customer satisfaction specialist will provide you with a curated shopping list of products from various brands and the date of delivery for each product. Once we receive the sign off from you, the order is placed and all you have to do is sit back and wait for it to be delivered to your doorstep. Super easy right?`,
  },
  {
    tag: 'Features & Services',
    question: 'What kind of spaces can Spacejoy design for me?',
    answer: `We can design your living room, bedroom, dining area, sunroom and entryway. If you however have any special requests we’ll be happy to discuss. Write to us at <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a>`,
  },
  {
    tag: 'Features & Services',
    question: 'Are there different design packages?',
    answer: `Yes, we offer three different package types that vary from tablescaping to a fully designed space. You can find out more information about the differences in our packages in our <a href="/pricing">Pricing Section</a> `,
  },
  {
    tag: 'Features & Services',
    question: 'How can I get in touch with Spacejoy’s expert design team?',
    answer: `To access our designers, you’ll need to sign up for a <a href='/pricing'>package</a>! Once you’ve completed your purchase and design quiz, you’ll have access to your designers using the chat feature in your project dashboard. Please allow your designers 24-48 hours to respond. If you need to get in touch with your designer quicker, feel free to e-mail us at  <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a>`,
  },
  {
    tag: 'Features & Services',
    question: 'Can Spacejoy design my kitchen or bathroom?',
    answer: `We currently don’t extend our services to bathrooms and kitchens that may require remodeling. However, if you need help with add-on or plug-n-play solutions, we can help. Write to us at <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a> with your requirements and we’ll be happy to work something out.`,
  },
  {
    tag: 'Features & Services',
    question: 'Will Spacejoy help me in sourcing all the products/items/furniture for each room?',
    answer: `Spacejoy will provide an extensive shopping list of all of the products featured in your designs. If you need assistance in placing and tracking your order, our dedicated customer service team will be happy to assist you!`,
  },
  {
    tag: 'Features & Services',
    question: 'Can Spacejoy help with renovation and remodelling projects?',
    answer: `No, Spacejoy currently does not take up renovation or remodeling projects. At the moment we only offer plug-n-play services.`,
  },
  {
    tag: 'Features & Services',
    question: 'Can Spacejoy design a commercial space?',
    answer: `Yes, we would be delighted to help you with a commercial space. We’ve helped with projects both big and small. You can reach out to us at  <a href="mailto:hello@spacejoy.com?subject=&body=">hello@spacejoy.com</a> to provide the details of your project and we’ll assign one of our expert designers to help with your project.`,
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'What is "The Spacejoy Advantage"?',
    answer:
      "Your design features products from multiple retailers. Spacejoy offers a hassle-free experience by managing your order across different retailers. You can see your product-related updates all in one place on Spacejoy, under the 'My Project Orders' section. If you're unhappy with any of your purchases and want to initiate a refund or cancellation, you can initiate it across retailers, all on Spacejoy. ",
  },
  {
    tag: 'Shopping With Spacejoy',
    question:
      'If the prices on the retailer’s website and Spacejoy are different, will Spacejoy guarantee a price match?',
    answer:
      "At Spacejoy, we are committed to finding you the best prices on products featured in your designs. The prices on our site are updated regularly to reflect any offers and promotions offered by the retailers. Sometimes, there may be a price difference due to dynamic changes. You can rest assured that Spacejoy will offer a refund if the prices on the retailers' site are lower than what you paid on Spacejoy at the time of processing your order. Spacejoy never adds any overheads to the cost of the product. This is Spacejoy's Price Match Guarantee.	",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: "Are there any expectations or limitations to Spacejoy's Price Match Guarantee?",
    answer:
      "Once you place an order on Spacejoy, we execute a back-to-back order on the retailer's site. Once the order gets processed on the retailer's site, we cannot guarantee a price match.",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'Am I obliged to purchase all the furniture and decor featured in your designs on Spacejoy?',
    answer:
      'No, you are under no obligation to place your orders on Spacejoy. While we would love the opportunity to provide you with an easy one-stop checkout process and end-to-end support until your entire order is processed, you can always choose to place your orders directly with our retail partners.',
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'What will happen if the items in my design are out of stock?',
    answer:
      "If the products in your recently finished design are out-of-stock, our team will help you with alternative suggestions that are within your budget and match the aesthetic of your design. If it has been over two weeks since your design completion and the products featured in your design are out-of-stock, please write to <a href='mailto:hello@spacejoy.com?subject=&body='>hello@spacejoy.com</a>.",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'When does Spacejoy place an order with the retailers?',
    answer:
      "Spacejoy takes 24hrs to 48hrs to process your order. First, we collect the exact prices, shipping charges, and tax calculations. If the total price differs vastly from the estimated prices, you'll be informed of the difference. If you choose to accept the difference in price, then Spacejoy will go ahead and complete your order. If the price is less, you will be refunded the amount and if the price is more, we will send you a secure payment link for the balance due. If the price difference is throwing your budget calculations off, we'll help you with other alternatives. If the price drops, then Spacejoy will initiate a refund as a part of our Price Match guarantee. ",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'Does Spacejoy offer swatches?',
    answer:
      "If you're looking to buy a sofa or a rug and need to be entirely sure of the fabric, you can reach out to your designer. You can also email us at <a href='mailto:hello@spacejoy.com?subject=&body='>hello@spacejoy.com</a> and ask for a swatch. We'll coordinate with the retailer and have it delivered to you if the retailer offers this service.  ",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'Can I change my delivery date and/or address?',
    answer:
      "Spacejoy takes one working day to process your order with the retailers. You have this window in case you'd like to change the delivery date or/and address. If you miss this window, then Spacejoy cannot help you with this request, unless the retailer allows it. ",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'What if the item arrives damaged?',
    answer: `When an item arrives at your doorstep, we encourage you to inspect the packaging to ensure it's not tampered with or damaged. If it is, then notify your courier and refuse the delivery. You can either write to us at <a href='mailto:hello@spacejoy.com?subject=&body='>hello@spacejoy.com</a> and we will initiate a refund or replacement, or you can upload photos directly to your project dashboard and our team will take care of the rest. If the product is already with you, please make sure to keep the original packaging and tags and write to us within 24 hours. Please include photos of the damaged product, and we'll help you with the next steps.`,
  },
  {
    tag: 'Shopping With Spacejoy',
    question: "Can I apply the promo code available at the retailer's sites?",
    answer:
      "As a part of Spacejoy's price match guarantee, we make sure that we offer you the lowest price. If you have any special promo codes from retailers available with you, please mention the same in the comment box while placing your order and we will ensure that we apply those codes and you get the best possible prices for your purchase. Sometimes, Spacejoy offers exclusive brand discounts, and you can also apply those promo codes while placing your order to get additional discounts. ",
  },
  {
    tag: 'Shopping With Spacejoy',
    question: 'Will Spacejoy reach out to me for order approval?',
    answer:
      'When you place an order on Spacejoy, we authorize your card for the estimated price, which includes shipping and tax. At the time of processing your order, if we find that there is a price increase (on your product/shipping) or the product is out of stock and no longer available or if the shipping period is unusually long, Spacejoy will reach out to you with the updated information to discuss next steps. If there is a price drop, Spacejoy will process your order and will automatically initiate a refund for the difference in amount. ',
  },
  {
    tag: 'Item Cancellations and Returns',
    question: 'Can I initiate a return on Spacejoy?',
    answer:
      "You can make a return by going to your dashboard, under the 'My Product Orders' tab, select the product you want to initiate a return and click on return. Please make sure to have all the original packaging before you initiate a return request. <br /> <br />If the item is damaged, we require at least 3 reference photos to initiate your return with the vendor:<br/>1. A photo of the entire item.<br/>2. A close-up photo of the damage.<br/>3. A photo of the package (so we can determine if it was damaged in transit).<br/><br/>Please send these photos at <a href='mailto:returns@spacejoy.com?subject=&body='>returns@spacejoy.com</a> for us to process the replacement with the retailer. ",
  },
  {
    tag: 'Item Cancellations and Returns',
    question: 'Can I initiate a cancellation on Spacejoy?',
    answer:
      "Once your order is placed, our order processing team begins placing orders right away. Please reach out to us at <a href='mailto:cs@spacejoy.com'>cs@spacejoy.com</a> if you need to cancel or change the delivery information. Please note, we can not guarantee an order can be changed. If the order has been processed with the retailer, the products may be subject to fees if you need to return the items.",
  },
  {
    tag: 'Item Cancellations and Returns',
    question: "What is Spacejoy's return policy?",
    answer:
      "Spacejoy doesn't have a return policy of its own. Whether or not a return will be accepted depends on the retailer's return policy. Please make sure to go through it before you initiate a return. Please note some sale or clearance items can not be returned. ",
  },
  {
    tag: 'Item Cancellations and Returns',
    question: 'Who is responsible for return shipping?',
    answer:
      "If there is an issue with your product, such as the product arrives damaged or is incorrect, the retailer will cover the shipping charges. If you're no longer interested in the product and have changed your mind, you will be responsible for return shipping. ",
  },
  {
    tag: 'Shipping and Delivery',
    question: 'How are shipping costs calculated?',
    answer:
      'Spacejoy doesn’t add any overheads on shipping costs. Shipping costs are calculated by the retailer based on the type of shipping, location and size of the product. What you see during checkout is an estimation and the actual shipping costs may vary when we process the order. If the difference between the estimated costs and the final cost varies significantly we will reach out to you for approval or with alternative suggestions. If there is a price drop, Spacejoy will process the order and initiate a refund.  ',
  },
  {
    tag: 'Shipping and Delivery',
    question: 'Can I change my delivery address?',
    answer:
      "In most cases, once you place an order changing your delivery address will not be possible. Please make sure to select the correct address before you place an order. If you do realize that you provided an incorrect address, please reach out to <a href='mailto:orders@spacejoy.com?subject=&body='>orders@spacejoy.com</a> and we will do our best to accommodate the change. ",
  },
  {
    tag: 'Shipping and Delivery',
    question: 'Does Spacejoy work with freight forwarding companies?',
    answer:
      'At the moment Spacejoy doesn’t directly work with any freight forwarding companies. Should this change we’ll update our policy. ',
  },
];
export default data;
