// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

export const API_ENDPOINTS = {
  PROPERTIES: '/properties',
  PROPERTY_DETAIL: '/properties/:id',
  BOOKINGS: '/bookings',
  USERS: '/users',
  SEARCH: '/search',
  REVIEWS: '/reviews',
} as const;

// Application Configuration
export const APP_CONFIG = {
  APP_NAME: 'ALX Listing App',
  APP_DESCRIPTION: 'Find and book amazing places to stay',
  ITEMS_PER_PAGE: 12,
  MAX_GUESTS: 16,
  MIN_NIGHTS: 1,
  MAX_NIGHTS: 28,
} as const;

// UI Constants
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  LARGE_DESKTOP: 1280,
} as const;

export const COLORS = {
  PRIMARY: '#3B82F6',
  SECONDARY: '#6B7280',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#06B6D4',
} as const;

// Property Types
export const PROPERTY_TYPES = [
  'House',
  'Apartment',
  'Villa',
  'Condo',
  'Cabin',
  'Cottage',
  'Loft',
  'Studio',
  'Townhouse',
  'Other'
] as const;

// Amenities List
export const COMMON_AMENITIES = [
  { id: 'wifi', name: 'WiFi', icon: '📶' },
  { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
  { id: 'parking', name: 'Free parking', icon: '🚗' },
  { id: 'pool', name: 'Pool', icon: '🏊‍♂️' },
  { id: 'hot_tub', name: 'Hot tub', icon: '🛁' },
  { id: 'gym', name: 'Gym', icon: '💪' },
  { id: 'air_conditioning', name: 'Air conditioning', icon: '❄️' },
  { id: 'heating', name: 'Heating', icon: '🔥' },
  { id: 'tv', name: 'TV', icon: '📺' },
  { id: 'washing_machine', name: 'Washing machine', icon: '🧺' },
  { id: 'pets_allowed', name: 'Pets allowed', icon: '🐕' },
  { id: 'smoking_allowed', name: 'Smoking allowed', icon: '🚬' },
] as const;

// Sort Options
export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Most relevant' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest rated' },
  { value: 'newest', label: 'Newest' },
] as const;

// Date and Time
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DISPLAY_DATE_FORMAT = 'MMM DD, YYYY';
export const TIME_FORMAT = 'HH:mm';

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  VALIDATION: 'Please check your input and try again.',
  BOOKING_CONFLICT: 'The selected dates are not available.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  BOOKING_CREATED: 'Your booking has been confirmed!',
  PROFILE_UPDATED: 'Your profile has been updated successfully.',
  REVIEW_SUBMITTED: 'Thank you for your review!',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'alx_user_preferences',
  SEARCH_HISTORY: 'alx_search_history',
  RECENT_PROPERTIES: 'alx_recent_properties',
  BOOKING_DRAFT: 'alx_booking_draft',
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  PROPERTY_DETAIL: '/property/[id]',
  BOOKING: '/booking',
  PROFILE: '/profile',
  SEARCH: '/search',
  HELP: '/help',
  ABOUT: '/about',
} as const;