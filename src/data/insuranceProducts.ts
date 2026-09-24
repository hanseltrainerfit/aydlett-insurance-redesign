import type { InsuranceProduct } from '../types';

export const insuranceProducts: InsuranceProduct[] = [
  {
    id: 'homeowners',
    name: 'Homeowners Insurance',
    category: 'coastal',
    tagline: 'Tailored protection for Outer Banks coastal homes and primary residences.',
    shortDescription: 'Shield your dwelling, personal belongings, and liability against storms, fire, theft, and unexpected perils.',
    longDescription: 'Your home is one of your most valuable investments, especially along the North Carolina coast. Standard homeowners insurance provides critical financial protection for your physical dwelling, attached structures, personal property, and family liability. Because standard policies exclude rising water, we help coordinate essential flood and windstorm coverage to ensure no dangerous gaps exist.',
    keyFeatures: [
      'Dwelling & Other Structures Coverage',
      'Personal Belongings Replacement Cost',
      'Personal Liability & Guest Medical Payments',
      'Loss of Use & Additional Living Expenses',
      'Coordination with Wind/Hail & Coastal Deductibles'
    ],
    coastalConsiderations: 'Coastal North Carolina homes often have specific percentage deductibles for named storms and hurricanes. Our agents help you clearly understand and optimize your deductible limits.',
    iconName: 'Home',
    popular: true
  },
  {
    id: 'flood',
    name: 'Coastal Flood Insurance',
    category: 'coastal',
    tagline: 'Vital rising-water protection through NFIP and trusted private flood carriers.',
    shortDescription: 'Standard homeowners insurance does NOT cover flood damage. Protect your property against storm surge and tidal flooding.',
    longDescription: 'In coastal Dare County and across the Outer Banks, flood insurance is not just an option—it is a critical safeguard. Damage caused by storm surge, King Tides, or tropical systems is strictly excluded under standard property insurance. We write policies through both the National Flood Insurance Program (NFIP) and private flood markets to find you the most comprehensive limits and competitive rates.',
    keyFeatures: [
      'Building Structure Protection (up to $250,000 NFIP or higher via private market)',
      'Contents & Belongings Coverage (up to $100,000 NFIP or excess)',
      'Elevation Certificate Review & Rate Optimization',
      'Both VE, AE, and X Flood Zone Coverage',
      'Private Flood options for high-value coastal properties'
    ],
    coastalConsiderations: 'The NFIP has a standard 30-day waiting period before coverage takes effect. Do not wait until a named storm enters the Atlantic basin.',
    iconName: 'Waves',
    popular: true
  },
  {
    id: 'auto',
    name: 'Auto Insurance',
    category: 'personal',
    tagline: 'Complete coverage for your personal vehicles with trusted multi-carrier choices.',
    shortDescription: 'Drive with confidence across North Carolina, Virginia, and beyond with dependable protection at the best available rates.',
    longDescription: 'Auto insurance is a binding contract protecting your household against devastating financial losses from collisions, vehicular theft, vandalism, and liability lawsuits. As an independent agency, we compare rates and coverage terms across dozens of leading insurance companies (including Progressive and top regional carriers) to get you the right protection and maximum discounts.',
    keyFeatures: [
      'Bodily Injury & Property Damage Liability',
      'Comprehensive (Theft, Animal Collision, Storm Damage)',
      'Collision Coverage with Flexible Deductibles',
      'Uninsured & Underinsured Motorist Protection',
      'Roadside Assistance & Rental Reimbursement'
    ],
    coastalConsiderations: 'Coastal driving exposes vehicles to salt air, sand, and localized roadway flooding. Comprehensive coverage protects against non-collision environmental hazards.',
    iconName: 'Car',
    popular: true
  },
  {
    id: 'boat',
    name: 'Boat & Marine Insurance',
    category: 'recreational',
    tagline: 'Specialized watercraft coverage for sounds, inlets, and offshore Atlantic waters.',
    shortDescription: 'Protect your center console, skiff, fishing yacht, or personal watercraft with true marine coverage.',
    longDescription: 'Boating is the heartbeat of life on the Outer Banks. Whether you navigate the shallow flats of the Currituck Sound, fish Oregon Inlet, or venture offshore into the Gulf Stream, your vessel requires coverage built for marine realities. From hull damage and salvage assistance to fuel spill liability, we protect your time on the water.',
    keyFeatures: [
      'Agreed Value or Actual Cash Value Hull Coverage',
      'Watercraft Liability & Medical Payments for Guests',
      'Wreck Removal & Environmental Fuel Spill Liability',
      'Trailer & On-Board Marine Equipment Coverage',
      'Emergency On-Water Towing & Assistance'
    ],
    coastalConsiderations: 'Policies define specific navigational territories and hurricane haul-out plans. We help you select limits appropriate for North Carolina and Atlantic coastal navigation.',
    iconName: 'Anchor',
    popular: true
  },
  {
    id: 'renters',
    name: 'Renters Insurance',
    category: 'personal',
    tagline: 'Affordable protection for your personal property and personal liability.',
    shortDescription: 'Your landlord’s insurance covers the building—not your furniture, electronics, clothing, or liability.',
    longDescription: 'If you rent a house, condo, or apartment in the Outer Banks area, your landlord’s insurance policy only rebuilds the structure if disaster strikes. Renters insurance is remarkably affordable and replaces your clothes, furniture, computers, and gear if damaged by fire, theft, or specified water leaks, while shielding you against personal liability claims.',
    keyFeatures: [
      'Personal Property Replacement Cost',
      'Worldwide Belongings Protection (even in your car or traveling)',
      'Personal Liability Protection',
      'Temporary Living Expenses if Residence is Uninhabitable',
      'Generous discounts when bundled with auto insurance'
    ],
    iconName: 'Key'
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle & Powersports',
    category: 'recreational',
    tagline: 'Tailored policies for cruisers, touring bikes, ATVs, and recreational vehicles.',
    shortDescription: 'Hit the scenic coastal highway with coverage engineered specifically for two wheels and off-road riding.',
    longDescription: 'Cruising NC Highway 12 requires specialized protection designed for motorcycle enthusiasts. Standard auto policies do not extend to motorcycles or off-road vehicles. We provide robust coverage for custom accessories, safety riding gear, passenger liability, and collision.',
    keyFeatures: [
      'Custom Parts & Equipment (CPE) Protection',
      'Passenger & Bodily Injury Liability',
      'Comprehensive Coverage including theft & storm damage',
      'Roadside Assistance specifically equipped for motorcycles',
      'Seasonal and multi-bike discount structures'
    ],
    iconName: 'Compass'
  },
  {
    id: 'rv',
    name: 'RV & Travel Trailer Insurance',
    category: 'recreational',
    tagline: 'Coverage for motorhomes, fifth wheels, and travel trailers on the road or at the beach.',
    shortDescription: 'Comprehensive protection combining vehicle and personal dwelling coverage for your mobile adventures.',
    longDescription: 'Whether your RV is your seasonal Outer Banks getaway or your vehicle for cross-country road trips, an RV policy uniquely covers both the road risk and the living quarters. We offer policies for Class A, B, and C motorhomes, pop-up campers, fifth wheels, and utility trailers.',
    keyFeatures: [
      'Total Loss Replacement & Agreed Value',
      'Personal Belongings inside the RV',
      'Campsite & Vacation Liability Coverage',
      'Emergency Expense & Lodging Allowance',
      'Full-Timer Coverage Options Available'
    ],
    iconName: 'Truck'
  },
  {
    id: 'life-health',
    name: 'Life & Health Insurance',
    category: 'personal',
    tagline: 'Financial security and healthcare protection for what matters most: your family.',
    shortDescription: 'Term life, whole life, and health coverage guidance to protect your family’s financial future.',
    longDescription: 'True peace of mind means knowing your loved ones are protected no matter what tomorrow brings. We provide independent guidance on individual life insurance policies to replace lost income, pay off mortgages, and ensure educational security, alongside health insurance options.',
    keyFeatures: [
      'Term Life Insurance (10, 20, 30-year guaranteed rates)',
      'Permanent & Whole Life Insurance options',
      'Mortgage Protection Life Coverage',
      'Individual Health Plan Guidance (Managed Care & PPOs)',
      'Long-Term Care Financial Protection'
    ],
    iconName: 'HeartHandshake'
  },
  {
    id: 'bop',
    name: 'Business Owners Policy (BOP)',
    category: 'commercial',
    tagline: 'Comprehensive, cost-effective package policy tailored for small businesses.',
    shortDescription: 'Bundle essential property, general liability, and business income into one convenient, money-saving policy.',
    longDescription: 'For Outer Banks retail stores, coastal cafes, consulting offices, and local trade contractors, a Business Owners Policy (BOP) combines the primary coverages every business needs at an economical package price. We customize limits to protect your inventory, customer traffic, and daily operations.',
    keyFeatures: [
      'Commercial Property & Coastal Building Structure',
      'Business Personal Property & Inventory Coverage',
      'General Liability Protection against customer claims',
      'Business Income & Extra Expense (interruption coverage)',
      'Equipment Breakdown & Valuable Papers Coverage'
    ],
    coastalConsiderations: 'Seasonal coastal businesses experience fluctuating revenue. We tailor business interruption limits to protect peak seasonal earnings.',
    iconName: 'Building2',
    popular: true
  },
  {
    id: 'general-liability',
    name: 'Commercial General Liability',
    category: 'commercial',
    tagline: 'Vital defense against third-party lawsuits, bodily injuries, and property damage.',
    shortDescription: 'Prevent a legal dispute or accident from endangering your company’s financial survival.',
    longDescription: 'In today’s litigious environment, a single slip-and-fall on your premises or an alleged product defect can result in crippling legal defense bills. Commercial General Liability provides legal representation and covers court judgments, medical expenses, and settlements up to your policy limit.',
    keyFeatures: [
      'Premises Liability & Slip-and-Fall Coverage',
      'Products & Completed Operations Liability',
      'Independent Contractor Liability Protection',
      'Personal & Advertising Injury (libel, slander, copyright)',
      'Full Legal Defense Costs outside policy limits on select policies'
    ],
    iconName: 'ShieldAlert'
  },
  {
    id: 'commercial-property',
    name: 'Commercial Property Insurance',
    category: 'commercial',
    tagline: 'Protect your building, equipment, inventory, and signs from physical disaster.',
    shortDescription: 'Comprehensive protection for commercial real estate, leased office spaces, and business assets.',
    longDescription: 'From high winds and nor’easters to kitchen fires and plumbing bursts, commercial property insurance funds the repair or rebuilding of your facility and the replacement of tools, computers, fixtures, and merchandise. We work with specialized coastal commercial underwriters.',
    keyFeatures: [
      'Building & Physical Structure Coverage',
      'Business Contents, Stock, and Merchandising',
      'Outdoor Signs, Fencing, and Exterior Fixtures',
      'Debris Removal & Ordinance or Law Coverage',
      'Specialized Coastal Endorsements'
    ],
    iconName: 'Landmark'
  },
  {
    id: 'commercial-auto',
    name: 'Commercial Auto Insurance',
    category: 'commercial',
    tagline: 'Fleet and commercial vehicle protection for daily business operations.',
    shortDescription: 'Ensure work trucks, delivery vans, and passenger vehicles are properly titled and covered.',
    longDescription: 'Personal auto insurance policies routinely deny claims for vehicles used for commercial activities, deliveries, or employee transit. A commercial auto policy guarantees that your business name is primary and provides substantially higher liability limits suitable for commercial exposure.',
    keyFeatures: [
      'Commercial Liability for Work Trucks, Vans & Sedans',
      'Physical Damage (Collision & Comprehensive)',
      'Hired & Non-Owned Auto Liability (employee personal vehicles)',
      'On-Board Equipment and Tool Coverage',
      'Flexible Driver Schedule & Multi-Vehicle Discounts'
    ],
    iconName: 'Truck'
  },
  {
    id: 'workers-comp',
    name: 'Workers’ Compensation',
    category: 'commercial',
    tagline: 'State-mandated injury care for your team and legal immunity for your company.',
    shortDescription: 'Cover medical expenses, lost wages, and rehabilitation for work-related employee injuries.',
    longDescription: 'In North Carolina, businesses with three or more employees are required by state law to carry Workers’ Compensation insurance. It protects your hardworking team by paying medical bills and lost earnings following workplace accidents, while protecting you from direct personal injury lawsuits from injured workers.',
    keyFeatures: [
      'Emergency & Ongoing Medical Bill Payments',
      'Lost Wages & Disability Benefit Replacement',
      'Employer’s Liability Legal Defense',
      'Rehabilitation and Return-to-Work Services',
      'NC Industrial Commission Compliance Verification'
    ],
    iconName: 'Users'
  }
];
