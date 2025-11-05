import { Question } from '../types';

export const questionBank: Question[] = [
  {
    id: 1,
    questionText: 'It is essential that hotels understand the results they received from the strategies they employ in order to:',
    options: [
      'Reduce channel dependence',
      'Avoid having to adjust rates in the future',
      'Focus less on occupancy and more on ADR',
      'Adjust future strategies accordingly',
    ],
    correctAnswerIndex: 3,
    feedback: {
      text: 'Understanding the outcomes of strategies is crucial for making informed adjustments to future plans, a core principle of effective revenue management.',
      reference: 'Chapter 12, Page 98',
    },
    category: 'Strategy & Performance',
  },
  {
    id: 2,
    questionText: 'To whom should the revenue strategy be communicated?',
    options: [
      'Operations',
      'Sales & Marketing',
      'General Manager',
      'All of the above',
    ],
    correctAnswerIndex: 3,
    feedback: {
      text: 'A revenue strategy must be communicated across all key departments, including operations, sales, marketing, and senior leadership, to ensure alignment and successful execution.',
      reference: 'Chapter 3, Page 17 & Chapter 12, Page 95-97',
    },
    category: 'Departmental Integration',
  },
  {
    id: 3,
    questionText: 'A proprietary computerized system maintained by a chain or affiliate organization for real-time access to hotel information, inventory availability and rates is referred to as a:',
    options: [
      'Revenue distribution channel (RDC)',
      'Central reservation system (CRS)',
      'Global distribution system (GDS)',
      'Internet distribution system (IDS)',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'A Central Reservation System (CRS) is the technology platform used by hotel chains to centrally manage and distribute inventory, rates, and reservations.',
      reference: 'Chapter 1, Page 6 & Glossary, Page 159',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 4,
    questionText: 'Which question is NOT relevant to an internal market analysis?',
    options: [
      "When was the hotel's most recent renovation?",
      'Is there construction nearby?',
      'Have any large companies in the market been acquired recently?',
      'Is the product in need of improvement?',
    ],
    correctAnswerIndex: 2,
    feedback: {
      text: 'An internal analysis focuses on factors within the hotel itself (product, service, renovations). The acquisition of large companies in the market is part of an external analysis.',
      reference: 'Chapter 5, Pages 31-32',
    },
    category: 'Market Analysis',
  },
  {
    id: 5,
    questionText: 'Which of the following is considered a critical "soft skill" for a modern revenue professional?',
    options: ['Forecasting accuracy', 'System proficiency', 'Influence', 'Data entry speed'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'While technical skills are important, the ability to influence decisions at all levels, convince others based on data, and lead teams are crucial soft skills for a revenue strategist.',
      reference: 'Chapter 2, Page 11',
    },
    category: 'The Revenue Professional',
  },
  {
    id: 6,
    questionText: 'What are the three evolutionary stages of revenue optimization, in chronological order?',
    options: [
      'Predictive, Prescriptive, Descriptive',
      'Descriptive, Prescriptive, Predictive',
      'Descriptive, Predictive, Prescriptive',
      'Prescriptive, Predictive, Descriptive',
    ],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Revenue management evolved from describing historical results (descriptive), to predicting future results (predictive), and now to recommending decisions (prescriptive).',
      reference: 'Chapter 1, Page 5',
    },
    category: 'Fundamentals',
  },
  {
    id: 7,
    questionText: 'The process of forecasting total demand for a hotel in the absence of any constraints is known as forecasting:',
    options: ['Constrained Demand', 'Unconstrained Demand', 'Operational Demand', 'Net Demand'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Unconstrained demand forecasting is critical for determining how much demand a hotel would enjoy without any pricing or inventory restrictions, forming the basis for strategy.',
      reference: 'Chapter 7, Page 44',
    },
    category: 'Forecasting',
  },
  {
    id: 8,
    questionText: 'According to industry experts, what percentage of revenue growth achieved through rate increases typically flows to the bottom line?',
    options: ['50%', '75%', '85%', '95%'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'Revenue growth from rate is highly profitable, with approximately 95% flowing to the bottom line, whereas growth from occupancy has higher variable costs and sees about 50% flow-through.',
      reference: 'Chapter 8, Page 50',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 9,
    questionText: 'An inventory control strategy that requires a guest to book a certain number of nights to stay over a high-demand date is called:',
    options: ['Closed to Arrival (CTA)', 'Maximum Length of Stay (MaxLOS)', 'Minimum Length of Stay (MinLOS)', 'Full Pattern Length of Stay (FPLOS)'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'A Minimum Length of Stay (MinLOS) restriction is used to prevent shorter stays during peak periods, helping to build occupancy on the shoulder nights.',
      reference: 'Chapter 9, Page 68',
    },
    category: 'Inventory Control',
  },
  {
    id: 10,
    questionText: 'RevPASH, a key performance indicator for F&B outlets, stands for:',
    options: [
      'Revenue Per Available Seat Hour',
      'Revenue Per Active Serving Hour',
      'Restaurant Profit Per Available Serving Hour',
      'Revenue Per Allocated Seating Hour',
    ],
    correctAnswerIndex: 0,
    feedback: {
      text: 'RevPASH (Revenue Per Available Seat Hour) is a critical metric for measuring the performance and utilization of restaurant seating capacity over time.',
      reference: 'Chapter 10, Page 84',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 11,
    questionText: 'If a hotel\'s RevPAR is $150 and its competitive set\'s RevPAR is $125, what is the hotel\'s Revenue Generation Index (RGI)?',
    options: ['83.3', '100', '120', '125'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'RGI is calculated as (Hotel RevPAR / Comp Set RevPAR) x 100. In this case, ($150 / $125) x 100 = 120, indicating the hotel is capturing more than its fair share of revenue.',
      reference: 'Chapter 11, Page 91',
    },
    category: 'Strategy & Performance',
  },
  {
    id: 12,
    questionText: 'Which term refers to the practice of evaluating the value of a potential group by comparing it against the transient business that would be displaced?',
    options: ['Segmentation Analysis', 'Displacement Analysis', 'Attrition Analysis', 'Channel Analysis'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Displacement analysis is a crucial calculation that compares the total value of a group (including ancillary revenue) with the value of transient business that would be turned away if the group is accepted.',
      reference: 'Chapter 10, Page 79',
    },
    category: 'Group & Transient Management',
  },
  {
    id: 13,
    questionText: 'The "Digital Marketing Trifecta" is a model for categorizing digital marketing activities into which three groups?',
    options: [
      'Search, Social, and Mobile',
      'Paid, Earned, and Owned Media',
      'Inbound, Outbound, and Content Marketing',
      'Direct, Indirect, and Referral Traffic',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'The Digital Marketing Trifecta categorizes marketing efforts into Owned Media (e.g., your website), Paid Media (e.g., PPC ads), and Earned Media (e.g., reviews, social mentions).',
      reference: 'Chapter 16, Page 121',
    },
    category: 'Marketing',
  },
  {
    id: 14,
    questionText: 'Which of the following pricing methods involves setting a price for the guest\'s entire stay based on their arrival date, which does not change day-to-day?',
    options: ['Daily BAR Pricing', 'Arrival Based Pricing', 'Full Pattern Length of Stay Pricing', 'Dynamic Pricing'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Arrival Based Pricing determines the rate for the entire stay based on the day of arrival, offering simplicity for the guest, whereas Daily BAR can change each night.',
      reference: 'Chapter 8, Page 59',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 15,
    questionText: 'The USALI provides a standardized system of accounts for the lodging industry. What does USALI stand for?',
    options: [
      'United States Association of Lodging Industry',
      'Uniform System of Accounts for the Lodging Industry',
      'Universal Standard of Accounting for Lodging International',
      'United Standard Accounting & Lodging Index',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'USALI stands for the Uniform System of Accounts for the Lodging Industry, which provides standardized financial reporting and segmentation definitions for hotels.',
      reference: 'Chapter 6, Page 39',
    },
    category: 'Fundamentals',
  },
  {
    id: 16,
    questionText: 'The Gross Operating Profit Per Available Room (GOPPAR) is a performance metric that focuses on:',
    options: ['Top-line revenue only', 'Profitability after all expenses', 'Profitability before management fees and non-operating income/expenses', 'Distribution costs only'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'GOPPAR measures profitability by considering gross operating profit (revenues minus operating expenses) relative to the number of available rooms, giving a clearer picture of operational efficiency.',
      reference: 'Chapter 11, Page 92',
    },
    category: 'Strategy & Performance',
  },
  {
    id: 17,
    questionText: 'In the context of channel management, a model where the guest pays the hotel directly and the hotel then pays a commission to the booking channel is called:',
    options: ['Merchant Model', 'Opaque Model', 'Retail Model', 'Wholesale Model'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'The Retail Model (or Agency Model) is when the hotel collects payment from the guest and then pays a commission to the Online Travel Agency (OTA).',
      reference: 'Chapter 15, Page 115',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 18,
    questionText: 'What is the primary purpose of a "rate fence"?',
    options: [
      'To set the highest possible room rate',
      'To limit a discounted rate to a specific customer segment or booking pattern',
      'To ensure all channels have the same rate',
      'To create a simple, single rate for all guests',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Rate fences are rules or restrictions (e.g., advance purchase, non-refundable) designed to limit discounted rates to specific segments, preventing dilution from customers willing to pay more.',
      reference: 'Chapter 8, Page 64',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 19,
    questionText: 'Which of the four primary types of forecasts is used to determine operational necessities such as staffing schedules?',
    options: ['Demand Forecast', 'Strategic Forecast', 'Revenue Forecast', 'Operational Forecast'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'The Operational Forecast provides departments like front desk and housekeeping with information on arrivals, departures, and stay-overs to properly schedule staff and manage resources.',
      reference: 'Chapter 7, Page 48',
    },
    category: 'Forecasting',
  },
  {
    id: 20,
    questionText: 'The difference between a group’s contracted room block and what the hotel expects will actually materialize is known as:',
    options: ['Attrition', 'Wash', 'Slippage', 'Cut-off'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Wash (or wash factor) is the hotel\'s estimate of no-shows, cancellations, and early departures within a group block, used to manage inventory more accurately.',
      reference: 'Glossary, Page 164',
    },
    category: 'Group & Transient Management',
  },
  {
    id: 21,
    questionText: 'Which organizational structure for revenue management involves a dedicated professional located at the property, often part of the executive committee?',
    options: ['Centralized Revenue Optimization', 'Outsourced Revenue Optimization', 'On-Property Revenue Optimization', 'Hybrid Revenue Optimization'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'The on-property structure places a revenue professional at the hotel, allowing for daily interaction with other departments and a dedicated focus on that single property\'s needs.',
      reference: 'Chapter 3, Page 19',
    },
    category: 'Departmental Integration',
  },
  {
    id: 22,
    questionText: 'The concept that a hotel cannot have everything it wants and must make choices about how to allocate its limited inventory is a fundamental economic principle known as:',
    options: ['Rationality', 'Scarcity', 'Preference', 'Restriction'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Scarcity is the economic principle that needs and wants exceed the available resources (in this case, rooms), which is the foundation of why revenue optimization is necessary.',
      reference: 'Chapter 4, Page 23',
    },
    category: 'Fundamentals',
  },
  {
    id: 23,
    questionText: 'A useful methodology for product benchmarking that evaluates a hotel’s Strengths, Weaknesses, Opportunities, and Threats is called:',
    options: ['A Competitive Set Analysis', 'A Market Position Analysis', 'A SWOT Analysis', 'A Rate-Value Analysis'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'A SWOT analysis is a tool used to evaluate a hotel’s Strengths and Weaknesses (internal factors) against its Opportunities and Threats (external factors).',
      reference: 'Chapter 5, Page 34',
    },
    category: 'Market Analysis',
  },
  {
    id: 24,
    questionText: 'Total Hotel Revenue Optimization (THRO) shifts focus from just rooms revenue to:',
    options: ['Only Food & Beverage revenue', 'Optimizing all revenue-generating areas of a hotel', 'Guest satisfaction scores', 'Marketing budget efficiency'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'THRO expands the principles of revenue optimization beyond guest rooms to all other revenue centers like F&B, spa, golf, and meetings to maximize total asset profitability.',
      reference: 'Chapter 10, Page 75',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 25,
    questionText: 'The practice of accepting more reservations for a day than there are rooms available to compensate for no-shows and cancellations is known as:',
    options: ['Displacement', 'Walking a guest', 'Fencing', 'Overselling'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'Overselling is a strategic practice used to achieve 100% occupancy by accepting reservations in excess of capacity to account for the estimated "wash factor" (no-shows, cancellations, etc.).',
      reference: 'Chapter 9, Page 71',
    },
    category: 'Inventory Control',
  },
  {
    id: 26,
    questionText: 'Which key performance indicator would be most appropriate for measuring the revenue efficiency of a golf course?',
    options: ['RevPAR', 'RevPASH', 'RevPATT', 'TRevPAR'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'RevPATT, or Revenue Per Available Tee Time, is the standard metric for measuring revenue performance in the golf industry, analogous to RevPAR for rooms.',
      reference: 'Chapter 10, Page 86',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 27,
    questionText: 'In the context of Paid Search (PPC), what does "CPC" stand for?',
    options: ['Cost Per Conversion', 'Cost Per Click', 'Customer Purchase Cost', 'Campaign Performance Cost'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'CPC, or Cost Per Click, is the amount an advertiser pays each time a user clicks on one of their ads in a paid search campaign.',
      reference: 'Chapter 16, Page 137',
    },
    category: 'Marketing',
  },
  {
    id: 28,
    questionText: 'What is the primary risk of a hotel engaging in aggressive, reactive discounting during a downturn?',
    options: [
      'It may lead to a long-term degradation of brand value and price position',
      'It will immediately increase GOPPAR',
      'It attracts high-spending loyal customers',
      'It simplifies channel management',
    ],
    correctAnswerIndex: 0,
    feedback: {
      text: 'Aggressive discounting can trigger price wars, damage a brand\'s perceived value, and make it very difficult to recover Average Daily Rate (ADR) when demand returns.',
      reference: 'Chapter 8, Pages 54 & 57',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 29,
    questionText: 'Which USALI segment would a booking for a social, non-active duty military, or educational group of 10 or more rooms fall under?',
    options: ['Corporate Group', 'Association / Convention', 'SMERFE', 'Government Group'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'SMERFE is an acronym for Social, Military, Educational, Religious, Fraternal, and Entertainment groups, and is a standard market segment for group business.',
      reference: 'Chapter 6, Page 40',
    },
    category: 'Fundamentals',
  },
  {
    id: 30,
    questionText: 'The metric that measures a hotel\'s ADR performance relative to its competitive set is the:',
    options: ['Occupancy Index', 'ADR Index', 'RevPAR Index (RGI)', 'Market Share'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'The ADR Index (also known as ARI) compares a hotel\'s Average Daily Rate to the average ADR of its competitive set to determine its pricing position in the market.',
      reference: 'Glossary, Page 158',
    },
    category: 'Strategy & Performance',
  },
  {
    id: 31,
    questionText: 'Which department has critical information to share about online trends and customer data in revenue team meetings?',
    options: ['Human Resources', 'Engineering', 'Ecommerce Manager', 'Security'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'The Ecommerce Manager has vital insights into online booking trends, channel performance, and digital customer behavior, which is essential for a holistic revenue strategy.',
      reference: 'Chapter 3, Page 18',
    },
    category: 'Departmental Integration',
  },
  {
    id: 32,
    questionText: 'A hotel\'s website and email marketing campaigns are examples of which type of media?',
    options: ['Paid Media', 'Earned Media', 'Social Media', 'Owned Media'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'Owned Media refers to any digital asset that is directly controlled by the hotel, such as its own website, blog, or social media profiles.',
      reference: 'Chapter 16, Page 121',
    },
    category: 'Marketing',
  },
  {
    id: 33,
    questionText: 'If a guest books a hotel on an "opaque" website like Hotwire, what information are they typically NOT shown before completing the purchase?',
    options: ['The room rate', 'The star rating of the hotel', 'The hotel\'s name and exact address', 'The dates of the stay'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Opaque models obscure the hotel\'s brand and specific location until after the booking is complete, which is the trade-off for receiving a deeply discounted rate.',
      reference: 'Chapter 15, Page 115',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 34,
    questionText: 'What is the primary goal of creating an "optimal business mix"?',
    options: [
      'To maximize occupancy regardless of rate',
      'To achieve the highest possible RevPAR',
      'To achieve the highest possible profitability by balancing revenue from different segments and channels',
      'To reduce the cost of distribution to zero',
    ],
    correctAnswerIndex: 2,
    feedback: {
      text: 'An optimal business mix focuses on maximizing total profitability, not just top-line revenue. It involves strategically selecting customers from various segments and channels based on their total value and cost of acquisition.',
      reference: 'Part One: The Fundamentals, Page 3',
    },
    category: 'Fundamentals',
  },
  {
    id: 35,
    questionText: 'Which forecasting method is foundational and must be completed before other types of forecasts?',
    options: ['Revenue Forecast', 'Operational Forecast', 'Strategic Forecast', 'Demand Forecast'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'The Demand Forecast, which determines unconstrained demand, is the foundation for all other forecasts and subsequent strategic decisions about pricing and inventory controls.',
      reference: 'Chapter 7, Page 43',
    },
    category: 'Forecasting',
  },
  {
    id: 36,
    questionText: 'Menu Engineering evaluates menu items based on which two key factors?',
    options: ['Popularity and Profitability', 'Cost and Preparation Time', 'Presentation and Taste', 'Popularity and Cost'],
    correctAnswerIndex: 0,
    feedback: {
      text: 'Menu engineering is a data-driven process that analyzes menu items based on how often they are ordered (popularity) and how much profit they generate (profitability) to optimize the menu.',
      reference: 'Chapter 10, Page 85',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 37,
    questionText: 'The total cost associated with acquiring a new customer, including commissions, transaction fees, and marketing spend, is known as:',
    options: ['Net RevPAR', 'Cost of Acquisition', 'GOPPAR', 'Channel Cost'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Cost of Customer Acquisition is a critical metric that encompasses all costs involved in attracting and converting a guest. Managing this cost is key to profitability.',
      reference: 'Chapter 15, Page 117',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 38,
    questionText: 'If booking pace is slow, what should be the revenue manager\'s first step?',
    options: [
      'Immediately lower all rates by 10%',
      'Research the market and data to identify the cause of the slow pace',
      'Close all discount channels',
      'Increase overbooking levels',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Reacting to slow pace by immediately dropping rates can be a costly mistake. The first step should always be to analyze the data to understand the root cause, which may not be related to price.',
      reference: 'Chapter 8, Page 53',
    },
    category: 'Strategy & Performance',
  },
  {
    id: 39,
    questionText: 'What is the primary disadvantage of a centralized revenue management structure?',
    options: [
      'Higher cost per hotel',
      'Difficulty in recruiting talent',
      'A potential lack of nuanced, local market knowledge',
      'Inconsistent application of brand strategy',
    ],
    correctAnswerIndex: 2,
    feedback: {
      text: 'While centralization offers consistency and expertise, a key challenge is that a remote revenue manager may miss the nuances of the local market that an on-property professional would experience daily.',
      reference: 'Chapter 3, Page 21',
    },
    category: 'Departmental Integration',
  },
  {
    id: 40,
    questionText: 'A "walk" occurs when a hotel:',
    options: [
      'Has a guest who leaves without paying',
      'Is oversold and must relocate a guest with a guaranteed reservation to another hotel',
      'Has a guest who books without a credit card guarantee',
      'Escorts a disruptive guest off the property',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Walking a guest is the result of being oversold and involves arranging and paying for a guest\'s accommodation at another hotel. It has both tangible and intangible costs.',
      reference: 'Chapter 9, Page 71',
    },
    category: 'Inventory Control',
  },
  {
    id: 41,
    questionText: 'An example of an "external influencer" on a hotel\'s market is:',
    options: ['A planned room renovation', 'The opening of a new competitive hotel', 'A change in front office management', 'A new menu in the hotel restaurant'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'External influencers are factors outside the hotel that impact its business. The opening of a new competitor directly affects supply and market dynamics.',
      reference: 'Chapter 5, Page 31',
    },
    category: 'Market Analysis',
  },
  {
    id: 42,
    questionText: 'What is the primary purpose of a property\'s website in the digital marketing landscape?',
    options: [
      'To display photos of the hotel',
      'To serve as the primary digital asset for acquiring and converting customers directly',
      'To provide a contact number for the front desk',
      'To list the hotel\'s address and driving directions',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'The hotel website is the most valuable owned asset. Its core purpose is to act as the backbone of the marketing mix, driving direct bookings which are typically the most profitable.',
      reference: 'Chapter 16, Page 122',
    },
    category: 'Marketing',
  },
  {
    id: 43,
    questionText: 'Which of the following is an example of an ancillary revenue stream?',
    options: ['Standard room rate', 'Group room block revenue', 'Spa and wellness treatments', 'Transient room revenue'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Ancillary revenue is generated from goods or services other than the main product (rooms), such as spa treatments, F&B, parking, or retail.',
      reference: 'Glossary, Page 158',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 44,
    questionText: 'The legal framework that sets guidelines for the collection and processing of personal information of individuals within the European Union is known as:',
    options: ['USALI', 'SOX', 'GDPR', 'CAN-SPAM'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'GDPR, or the General Data Protection Regulation, is a critical piece of legislation that governs data privacy and protection for EU citizens and impacts how hotels handle customer data.',
      reference: 'Chapter 16, Page 140',
    },
    category: 'Marketing',
  },
  {
    id: 45,
    questionText: 'The practice of maintaining consistent rates for the same product across all public distribution channels is known as:',
    options: ['Dynamic Pricing', 'Rate Fencing', 'Rate Parity', 'Open Pricing'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Rate Parity is the strategy of keeping rates consistent across different distribution channels, although its enforcement and legality vary by region.',
      reference: 'Chapter 15, Page 111',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 46,
    questionText: 'What is a significant challenge when applying revenue management principles to Alternative Accommodations like home rentals?',
    options: ['Inventory is static and never changes', 'There is only one type of customer', 'Demand is always predictable', 'Inventory is dynamic and product types are highly varied'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'Unlike hotels with fixed inventory, the home rental market has dynamic inventory (homes become available or unavailable) and a wide variety of unique product types, making forecasting and pricing more complex.',
      reference: 'Chapter 16, Page 142',
    },
    category: 'Emerging Trends',
  },
  {
    id: 47,
    questionText: 'In a revenue team, the Director of Sales is primarily responsible for providing input on:',
    options: ['Daily transient pricing', 'Group forecasting and market intelligence', 'Website conversion rates', 'Restaurant staffing levels'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'The Director of Sales provides crucial insight into the group market, including forecasting, lead pace, and competitive intelligence, which is vital for the overall revenue strategy.',
      reference: 'Chapter 3, Page 18',
    },
    category: 'Departmental Integration',
  },
  {
    id: 48,
    questionText: 'The "Cost of Acquisition" includes which of the following?',
    options: ['Only front desk labor costs', 'Only the cost of the property management system', 'Commissions, transaction fees, and all sales & marketing expenses', 'Only the cost of utilities'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'The Cost of Acquisition is a comprehensive measure that includes all costs related to generating a booking, from channel commissions and transaction fees to the entire sales and marketing budget.',
      reference: 'Chapter 15, Page 117',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 49,
    questionText: 'Which performance metric is calculated by dividing the number of rooms sold by the number of rooms available?',
    options: ['ADR (Average Daily Rate)', 'RevPAR (Revenue Per Available Room)', 'Occupancy', 'GOPPAR (Gross Operating Profit Per Available Room)'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Occupancy is the percentage of available rooms that were sold during a specified period. The formula is Rooms Sold / Rooms Available.',
      reference: 'Chapter 4, Page 25',
    },
    category: 'Strategy & Performance',
  },
  {
    id: 50,
    questionText: 'A key benefit of a dynamic pricing strategy is the ability to:',
    options: [
      'Set one rate for the entire year to simplify management',
      'Adjust rates frequently based on market conditions and demand',
      'Offer the same rate to every customer regardless of segment',
      'Eliminate the need for a revenue manager',
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Dynamic pricing allows a hotel to optimize rates by changing them as often as needed based on real-time market conditions, demand forecasts, and other factors.',
      reference: 'Chapter 8, Page 59',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 51,
    questionText: 'The cost of customer acquisition, which includes commissions and marketing, can range from what percentage of guest-paid revenue?',
    options: [ '5% to 10%', '10% to 15%', '15% to 30%', '30% to 45%' ],
    correctAnswerIndex: 2,
    feedback: {
      text: "Managing the cost of customer acquisition is a major pain point for owners. These costs can range from 15% to as high as 30% of guest-paid revenue, significantly impacting profitability.",
      reference: "Chapter 14, Page 107",
    },
    category: "Strategy & Performance"
  },
  {
    id: 52,
    questionText: 'When developing a revenue strategy, which element focuses on identifying the most profitable customer segments?',
    options: [ 'Acquisition Planning', 'Channel Costs', 'Demand Targeting', 'Customer Retention Plan' ],
    correctAnswerIndex: 2,
    feedback: {
      text: "Demand Targeting is the first step in a revenue strategy, where the team determines the most appropriate segments that will deliver the greatest profit or value to the hotel.",
      reference: "Chapter 12, Page 94",
    },
    category: "Strategy & Performance"
  },
  {
    id: 53,
    questionText: "When setting up a group block in a PMS, what is the best practice regarding the number of rooms held out of inventory?",
    options: [ "Always hold the gross amount contracted.", "Hold a 'net' amount of rooms based on the expected pickup or wash factor.", "Only hold rooms once the rooming list is received.", "Hold 10% more rooms than contracted to account for walk-ins." ],
    correctAnswerIndex: 1,
    feedback: {
      text: "Best practice is to 'net down' the group block, holding an amount of rooms based on the forecasted pickup. This leaves the remaining rooms in inventory to be sold, helping to maximize revenue and improve forecasting accuracy.",
      reference: "Chapter 13, Page 103",
    },
    category: "Group & Transient Management"
  },
  {
    id: 54,
    questionText: 'A revenue professional who is a good listener with strong observation skills and can "read situations" to identify needed changes is demonstrating which soft skill?',
    options: [ 'Technically Savvy', 'Critical Observer', 'Agile', 'Priority Focused' ],
    correctAnswerIndex: 1,
    feedback: {
      text: "The 'Critical Observer' soft skill involves being a good listener with strong observation skills, able to read situations, identify changes needed, understand environments, and respond accordingly.",
      reference: "Chapter 2, Page 11",
    },
    category: "The Revenue Professional"
  },
  {
    id: 55,
    questionText: 'Overbooking by room type is a strategy primarily used to:',
    options: [ 'Provide free upgrades to all guests', 'Minimize the need for a front desk', 'Increase revenue and ADR by managing upgrades and selling more premium rooms', 'Ensure the hotel never reaches 100% occupancy' ],
    correctAnswerIndex: 2,
    feedback: {
      text: "A well-planned overbooking strategy for base room types can produce a lift in revenues and ADR by minimizing free upgrades and strategically managing the demand for premium room types.",
      reference: "Chapter 8, Page 67",
    },
    category: "Inventory Control"
  },
  {
    id: 56,
    questionText: 'What does TRevPAR measure?',
    options: [ 'Total Room revenue per available room', 'Transient Revenue per available room', 'Total Revenue per available room, including all revenue centers', 'Training Revenue per available room' ],
    correctAnswerIndex: 2,
    feedback: {
      text: "TRevPAR, or Total Revenue Per Available Room, is a holistic metric that measures the total revenue from all operated departments (rooms, F&B, spa, etc.) per available room.",
      reference: "Glossary, Page 164 & Chapter 2, Page 16",
    },
    category: "Strategy & Performance"
  },
  {
    id: 57,
    questionText: 'The practice of maintaining consistent rates for the same product in all public distribution channels is known as:',
    options: [ 'Rate Integrity', 'Rate Parity', 'Rate Fencing', 'Rate Ceiling' ],
    correctAnswerIndex: 1,
    feedback: {
      text: "Rate parity is the practice of maintaining consistent rates across all public distribution channels. It's a key and often challenging component of a hotel's distribution strategy.",
      reference: "Chapter 15, Page 111",
    },
    category: "Technology & Distribution"
  },
  {
    id: 58,
    questionText: 'In a displacement analysis, what must be considered in addition to room revenue?',
    options: [ 'Only the number of rooms.', 'The day of the week.', "Ancillary revenues and associated costs for both the group and the displaced business.", "The group's name." ],
    correctAnswerIndex: 2,
    feedback: {
      text: "A proper displacement analysis compares the total value of business, which includes all ancillary spending (F&B, meetings, etc.) and subtracts any associated costs, not just room revenue.",
      reference: "Chapter 10, Page 79",
    },
    category: "Group & Transient Management"
  },
  {
    id: 59,
    questionText: 'What is a key challenge facing the revenue management discipline regarding personnel?',
    options: [ 'An oversupply of qualified candidates', 'A talent gap, with a growing need for more people with a higher caliber of talent', 'Salaries are decreasing across the industry', 'The role is becoming less strategic' ],
    correctAnswerIndex: 1,
    feedback: {
      text: "The increasing demands on revenue professionals have created a 'talent gap,' with a growing need for a deeper talent pool that the industry is struggling to fill.",
      reference: "Chapter 2, Page 14",
    },
    category: "The Revenue Professional"
  },
  {
    id: 60,
    questionText: 'If a small increase in price leads to a large decrease in the quantity of rooms sold, the demand for those rooms is considered to be:',
    options: [ 'Inelastic', 'Price Insensitive', 'Elastic', 'Fixed' ],
    correctAnswerIndex: 2,
    feedback: {
      text: "Elastic demand occurs when the quantity demanded changes significantly based on the price charged. This is typical for price-sensitive customer segments.",
      reference: "Chapter 4, Page 29",
    },
    category: "Pricing & Profitability"
  },
  {
    id: 61,
    questionText: 'A good performance measurement framework should focus on four key areas, including Financial Perspective, Customer Perspective, Internal Process Perspective, and:',
    options: [ 'Marketing Budget Perspective', 'Competitor Pricing Perspective', 'Learning and Growth Perspective', 'Ownership Satisfaction Perspective' ],
    correctAnswerIndex: 2,
    feedback: {
      text: "A balanced performance measurement framework includes four key perspectives: Financial, Customer, Internal Process, and Learning and Growth.",
      reference: "Chapter 11, Page 89",
    },
    category: "Strategy & Performance"
  },
  {
    id: 62,
    questionText: 'A "Last Room Availability" (LRA) agreement means that a contracted account:',
    options: [
      'Can book any available room (including suites) at their negotiated rate',
      'Can only book the last available room on weekends',
      'Must pay the BAR rate for the last available room',
      'Is not guaranteed a room during high-demand periods'
    ],
    correctAnswerIndex: 0,
    feedback: {
      text: "LRA is a high-value concession where the hotel must allow the company to book any available room type at their lowest negotiated rate, even if it's a premium room. This can limit a hotel's ability to yield higher rates.",
      reference: "Chapter 8, Page 75",
    },
    category: 'Group & Transient Management',
  },
  {
    id: 63,
    questionText: 'What does the term "F&B Minimum" refer to in the context of group business?',
    options: [
      'The minimum number of food and beverage items a group must order',
      'The total dollar amount of catered events required by the hotel',
      'The minimum price for a single banquet menu item',
      'The minimum number of people required for a banquet'
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'The F&B Minimum is the total required dollar amount a group must spend on catered events (not including service charges and taxes), based on the meeting space and dates being held.',
      reference: 'Chapter 10, Page 81',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 64,
    questionText: 'Which business intelligence tool is specifically designed to provide insights into market pricing and positioning by tracking competitor rates?',
    options: [
      'Property Management System (PMS)',
      'Rate shopping tools',
      'Central Reservations System (CRS)',
      'Channel Manager'
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Rate shopping tools provide advanced insights into market pricing and positioning by automatically collecting and displaying competitor rates from various online sources.',
      reference: 'Chapter 1, Page 7 & Chapter 2, Page 10',
    },
    category: 'Technology & Distribution',
  },
  {
    id: 65,
    questionText: 'In menu engineering, a menu item that is highly popular but has low profitability is known as a:',
    options: ['Star', 'Plow Horse', 'Puzzle', 'Dog'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'A "Plow Horse" is a menu item that is popular with customers but does not have a high contribution margin. Strategies for these items often involve re-pricing or reducing portion size.',
      reference: 'Chapter 10, Page 86',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 66,
    questionText: 'A "Closed to Arrival" (CTA) restriction is used to:',
    options: [
      'Prevent any new bookings on a certain day',
      'Prevent reservations from departing on a certain day',
      'Prevent reservations from arriving on a particular day',
      'Require a minimum number of nights for any stay'
    ],
    correctAnswerIndex: 2,
    feedback: {
      text: 'A CTA restriction prevents guests from checking in on a specific date. It is often used to manage occupancy on shoulder dates around a peak night.',
      reference: 'Chapter 9, Page 68',
    },
    category: 'Inventory Control',
  },
  {
    id: 67,
    questionText: 'The process of optimizing revenues from function space is heavily dependent on the ratio between:',
    options: [
      'Number of rooms and number of restaurants',
      'Meeting space square footage and the number of group rooms booked',
      'Number of staff and number of guests',
      'ADR and Occupancy'
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Optimizing function space involves managing the Space to Group Room Ratio (SGR). This KPI measures the amount of meeting space used relative to the number of group rooms occupied per day.',
      reference: 'Chapter 10, Page 82',
    },
    category: 'Total Revenue Optimization',
  },
  {
    id: 68,
    questionText: 'A hotelier who invests in ongoing training, unifies the organization around profitability goals, and trusts their team to act quickly is following a best practice for:',
    options: [
      'Reducing marketing spend',
      'Managing owner and operator relationships',
      'Cutting labor costs',
      'Increasing commission percentages'
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'A Special Note to Owners and Operators emphasizes that investing in training and tools, aligning goals, and empowering revenue teams are crucial for achieving optimal profits.',
      reference: 'Introduction, Page 1',
    },
    category: 'The Revenue Professional',
  },
  {
    id: 69,
    questionText: 'A consumer who books a hotel room bundled with a flight and rental car is purchasing a:',
    options: ['Retail rate', 'Qualified rate', 'Package', 'Opaque rate'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Packages are transient rates bundled with other components for convenience or perceived value, such as bed & breakfast, airfare, or parking.',
      reference: 'Chapter 6, Page 40',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 70,
    questionText: 'According to the text, a "vanity site" for a branded hotel is:',
    options: [
      'The hotel\'s main page on the brand.com website',
      'A hotel\'s social media page',
      'A stand-alone, property-specific website separate from the brand site',
      'An internal website for hotel employees only'
    ],
    correctAnswerIndex: 2,
    feedback: {
      text: 'Vanity sites (or microsites) are property-specific websites created by branded hotels to address unique needs not fully supported by the main brand.com site, such as special targeting or language requirements.',
      reference: 'Chapter 16, Page 123',
    },
    category: 'Marketing',
  },
  {
    id: 71,
    questionText: 'What is the most common time-based unit of inventory for a hotel room?',
    options: ['An hour', 'A week', 'A month', 'A night'],
    correctAnswerIndex: 3,
    feedback: {
      text: 'The fundamental unit of inventory for a hotel room is the room night, which is perishable. If a room goes unsold for a night, that revenue is lost forever.',
      reference: 'Part One: The Fundamentals, Page 3',
    },
    category: 'Fundamentals',
  },
  {
    id: 72,
    questionText: 'The final forecast created, which provides operational departments with the information they need for staffing and resource planning, is the:',
    options: ['Demand Forecast', 'Operational Forecast', 'Revenue Forecast', 'Strategic Forecast'],
    correctAnswerIndex: 1,
    feedback: {
      text: 'The Operational Forecast is the final forecast, used by operational departments to prepare their areas of responsibility. It is often extracted directly from the Revenue Forecast.',
      reference: 'Chapter 7, Page 48',
    },
    category: 'Forecasting',
  },
  {
    id: 73,
    questionText: 'The concept of "price discrimination" in the hotel industry refers to:',
    options: [
      'Charging different prices to different customer segments for the same product',
      'Refusing to sell rooms to certain customers',
      'Only accepting one form of payment',
      'Having only one price for all room types'
    ],
    correctAnswerIndex: 0,
    feedback: {
      text: 'Price discrimination is the practice of charging different prices to different groups of consumers for the same or similar products. This is a core concept in revenue management, enabled by rate fences.',
      reference: 'Chapter 4, Page 29',
    },
    category: 'Pricing & Profitability',
  },
  {
    id: 74,
    questionText: 'Which role is considered the "chair" of the revenue team meeting?',
    options: ['General Manager', 'Director of Sales', 'Revenue Professional', 'Front Office Manager'],
    correctAnswerIndex: 2,
    feedback: {
      text: 'The Revenue Professional (analyst, manager, or director) is the chair of the revenue team meeting, responsible for providing data, leading the discussion, and ensuring strategy communication.',
      reference: 'Chapter 3, Page 18',
    },
    category: 'Departmental Integration',
  },
  {
    id: 75,
    questionText: 'A "channel management tool" is primarily used by hotels to:',
    options: [
      'Manage guest reviews on different websites',
      'Update rates and inventory across multiple distribution channels from a single point of entry',
      'Design marketing emails for different customer segments',
      'Forecast future demand'
    ],
    correctAnswerIndex: 1,
    feedback: {
      text: 'Channel management tools are a critical technology that allows for the management of rates and inventory through one system, which then distributes that information to multiple channels, saving time and reducing errors.',
      reference: 'Chapter 2, Page 10',
    },
    category: 'Technology & Distribution',
  }
];