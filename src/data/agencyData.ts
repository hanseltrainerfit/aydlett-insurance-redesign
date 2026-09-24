import type { AgencyInfo } from '../types';

export const agencyData: AgencyInfo = {
  name: 'Aydlett Insurance Agency',
  legalName: 'Aydlett Insurance Agency, Inc.',
  foundedYear: 1994,
  yearsInBusiness: 'Over 30 Years',
  phone: '(252) 441-9393',
  phoneRaw: '2524419393',
  fax: '(252) 449-0442',
  faxRaw: '2524490442',
  email: 'info@aydlettins.com',
  street: '208 W. Walker St',
  city: 'Kill Devil Hills',
  state: 'NC',
  zip: '27948',
  coordinates: {
    lat: 36.045380,
    lng: -75.681240
  },
  serviceAreas: [
    'Kill Devil Hills',
    'Nags Head',
    'Kitty Hawk',
    'Duck',
    'Southern Shores',
    'Corolla & Currituck',
    'Roanoke Island & Manteo',
    'Hatteras Island',
    'Northeast North Carolina',
    'Southeastern Virginia'
  ],
  hours: [
    { day: 'Monday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 12:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 5:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' }
  ]
};

/**
 * Calculates whether the Kill Devil Hills, NC office is currently open.
 * Uses Eastern Time (America/New_York).
 */
export function getOfficeLiveStatus(): { isOpen: boolean; statusMessage: string; nextOpenMessage: string } {
  try {
    const now = new Date();
    // Format to Eastern Time string to get day and hour accurately
    const options: Intl.DateTimeFormatOptions = {
      timeZone: 'America/New_York',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(now);
    
    let weekday = '';
    let hour = 0;
    let minute = 0;

    for (const part of parts) {
      if (part.type === 'weekday') weekday = part.value;
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    const currentMinutes = hour * 60 + minute;

    if (weekday === 'Wednesday') {
      // 9:00 AM to 12:00 PM (540 to 720 mins)
      if (currentMinutes >= 540 && currentMinutes < 720) {
        return {
          isOpen: true,
          statusMessage: 'Open Today until 12:00 PM',
          nextOpenMessage: 'Open Today until 12:00 PM'
        };
      }
    } else if (['Monday', 'Tuesday', 'Thursday', 'Friday'].includes(weekday)) {
      // 9:00 AM to 5:00 PM (540 to 1020 mins)
      if (currentMinutes >= 540 && currentMinutes < 1020) {
        return {
          isOpen: true,
          statusMessage: 'Open Today until 5:00 PM',
          nextOpenMessage: 'Open Today until 5:00 PM'
        };
      }
    }

    // Otherwise currently closed
    let nextOpen = 'Opens Tomorrow at 9:00 AM';
    if (weekday === 'Friday' && currentMinutes >= 1020) {
      nextOpen = 'Opens Monday at 9:00 AM';
    } else if (weekday === 'Saturday' || weekday === 'Sunday') {
      nextOpen = 'Opens Monday at 9:00 AM';
    }

    return {
      isOpen: false,
      statusMessage: 'Office Closed · Leave a Message or Quote Request 24/7',
      nextOpenMessage: nextOpen
    };
  } catch {
    return {
      isOpen: true,
      statusMessage: 'Mon–Fri 9:00 AM – 5:00 PM (Wed 12 PM)',
      nextOpenMessage: 'Call (252) 441-9393'
    };
  }
}
