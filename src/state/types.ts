export interface ExpensesByCageory {
	salaries: number;
	supplies: number;
	services: number;
}

export interface Month { 
	id: string;
	month: string;
	revenue: number;
	expenses: number; 
	nonOperationalExpenses: number;
	operationalExpenses: number;
}

export interface Day { 
	id: string;
	date: string;
	revenue: number;
	expenses: number;
}

export interface GetKpisResponse {
	id: string;
	_id: string;
	__v: number;
	totalProfit: number;
	totalRevenue: number;
	totalExpenses: number;
	expensesByCageory: ExpensesByCageory;
	monthlyData: Array<Month>; 
	dailyData: Array<Date>;
}

export interface GetProductResponse {
	id: string;
	_id: string;
	__v: number;
	price: number;
	expense: number;
	tranactions: Array<string>;
	createdAt: string;
	updatedAt: string;
}