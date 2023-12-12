export interface ServerResponse {
	data: any[];
	meta: {
		itemsPerPage: number;
		totalItems: number;
		currentPage: number;
		totalPages: number;
		sortBy: [string, 'ASC' | 'DESC'][];
	};
	links: {
		current: string;
	};
}
