export interface User {
	id: number;
	username: string;
	password: string;
	email: string;
	fullName: string;
	isActive: boolean;
	dateOfBirth?: string | null;
	gender?: string | null;
	address?: string | null;
	phoneNumber?: string | null;
	role: string;
	profileImageUrl?: string | null;
	bio?: string | null;
	preferredLanguage: string;
	accountBalance?: number | null;
	createdAt: string;
	updatedAt: string;
}
