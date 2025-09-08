// Card Component Props
export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  price?: number;
  rating?: number;
  location?: string;
  className?: string;
  onClick?: () => void;
}

// Button Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

// Property/Listing Interfaces
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: string[];
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
}

export interface Host {
  id: string;
  name: string;
  avatar: string;
  joinedDate: string;
  responseRate: number;
  isSuperhost: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  icon?: string;
}

// Booking Interfaces
export interface BookingDetails {
  propertyId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  totalPrice: number;
  nights: number;
}

export interface GuestInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// Search and Filter Interfaces
export interface SearchFilters {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string[];
  amenities?: string[];
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// API Response Interfaces
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}