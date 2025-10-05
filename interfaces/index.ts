export interface ReviewProps {
  id: number;
  name: string;
  avatar: string; // URL for the user's profile picture
  rating: number; // 1 to 5 stars
  comment: string;
}

export interface PropertyProps {
  id: number; // Added for unique identification
  name: string;
  images: string[]; // Added for the detail page image grid
  pricePerNight: number; // Renamed from 'price' for clarity
  description: string; // Full description for detail page
  host: { // Host details for "About Host" tab
    name: string;
    about: string;
  };
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[]; // Amenities (What this place offers)
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string; // Main image URL (for listing card compatibility)
  discount: string;
  reviews: ReviewProps[]; // Reviews for ReviewSection
}