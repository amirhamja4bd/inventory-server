const express =require('express');
const { CreateBrand, UpdateBrand, BrandList, BrandDropDown, DeleteBrand, BrandDetailsByID } = require('../controllers/BrandsController');
const { CategoriesDropDown, CategoriesList, UpdateCategories, CreateCategories, DeleteCategories, CategoriesDetailsByID } = require('../controllers/CategoriesController');
const { CreateCustomers, UpdateCustomers, CustomersList, CustomersDropDown, DeleteCustomer, CustomersDetailsByID } = require('../controllers/CustomersController');
const { CreateExpenses, UpdateExpenses, ExpensesList, DeleteExpense, ExpenseDetailsByID } = require('../controllers/ExpenseController');
const { ExpenseTypesDropDown, ExpenseTypesList, UpdateExpenseTypes, CreateExpenseTypes, ExpenseTypesDetailsByID } = require('../controllers/ExpenseTypeController');
const { CreateProducts, UpdateProducts, ProductsList, DeleteProduct, ProductsDetailsByID } = require('../controllers/ProductsController');
const { CreatePurchases, PurchasesList, PurchasesDelete } = require('../controllers/PurchasesController');
const { ExpensesByDate, ReturnByDate, PurchaseByDate, SalesByDate } = require('../controllers/ReportController');
const { CreateReturns, ReturnsList, ReturnDelete } = require('../controllers/ReturnsController');
const { CreateSales, SalesList, SaleDelete } = require('../controllers/SalesController');
const { ExpensesSummary, ReturnSummary, PurchaseSummary, SalesSummary } = require('../controllers/SummaryController');
const { CreateSuppliers, UpdateSuppliers, SuppliersList, SuppliersDropDown, DeleteSupplier, SuppliersDetailsByID } = require('../controllers/SuppliersController');
const { Registration, Login, ProfileUpdate, ProfileDetails, RecoverEmailVerify, RecoverOTPVerify, RecoverResetPass,  } = require('../controllers/UsersController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');


const router =express.Router();

// Users Routes
router.post("/registration", Registration);
router.post("/login", Login);
router.put("/profile-update", AuthVerifyMiddleware ,ProfileUpdate)
router.get("/profile-details", AuthVerifyMiddleware , ProfileDetails);
router.get("/recover-email-verify/:email", RecoverEmailVerify);
router.get("/recover-otp-verify/:email/:otp", RecoverOTPVerify);
router.post("/recover-reset-pass", RecoverResetPass);


// Brands routes
router.post("/create-brand", AuthVerifyMiddleware, CreateBrand)
router.post("/update-brand/:id", AuthVerifyMiddleware, UpdateBrand)
router.get("/list-brand/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, BrandList)
router.get("/dropdown-brand", AuthVerifyMiddleware, BrandDropDown)
router.get("/delete-brand/:id", AuthVerifyMiddleware, DeleteBrand)
router.get("/brand-detail-by-id/:id", AuthVerifyMiddleware, BrandDetailsByID)

// Categories routes
router.post("/create-category", AuthVerifyMiddleware, CreateCategories)
router.post("/update-category/:id", AuthVerifyMiddleware, UpdateCategories)
router.get("/list-categories/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CategoriesList)
router.get("/dropdown-categories", AuthVerifyMiddleware, CategoriesDropDown)
router.get("/delete-categories/:id", AuthVerifyMiddleware, DeleteCategories)
router.get("/categories-detail-by-id/:id", AuthVerifyMiddleware, CategoriesDetailsByID)

// Customers routes
router.post("/create-customer", AuthVerifyMiddleware, CreateCustomers)
router.post("/update-customer/:id", AuthVerifyMiddleware, UpdateCustomers)
router.get("/list-customers/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, CustomersList)
router.get("/dropdown-customers", AuthVerifyMiddleware, CustomersDropDown)
router.get("/delete-customers/:id", AuthVerifyMiddleware, DeleteCustomer)
router.get("/customers-detail-by-id/:id", AuthVerifyMiddleware, CustomersDetailsByID)

// Suppliers routes
router.post("/create-supplier", AuthVerifyMiddleware, CreateSuppliers)
router.post("/update-supplier/:id", AuthVerifyMiddleware, UpdateSuppliers)
router.get("/list-suppliers/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SuppliersList)
router.get("/dropdown-suppliers", AuthVerifyMiddleware, SuppliersDropDown)
router.get("/delete-suppliers/:id", AuthVerifyMiddleware, DeleteSupplier)
router.get("/suppliers-detail-by-id/:id", AuthVerifyMiddleware, SuppliersDetailsByID)

// Expense Type routes
router.post("/create-expense-types", AuthVerifyMiddleware, CreateExpenseTypes)
router.post("/update-expense-types/:id", AuthVerifyMiddleware, UpdateExpenseTypes)
router.get("/list-expense-types/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ExpenseTypesList)
router.get("/dropdown-expense-types", AuthVerifyMiddleware, ExpenseTypesDropDown)
router.get("/expense-type-detail-by-id/:id", AuthVerifyMiddleware, ExpenseTypesDetailsByID)

// Expense routes
router.post("/create-expense", AuthVerifyMiddleware, CreateExpenses)
router.post("/update-expense/:id", AuthVerifyMiddleware, UpdateExpenses)
router.get("/list-expense/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ExpensesList)
router.get("/dropdown-expense", AuthVerifyMiddleware, ExpenseTypesDropDown)
router.get("/delete-expense/:id", AuthVerifyMiddleware, DeleteExpense)
router.get("/expense-detail-by-id/:id", AuthVerifyMiddleware, ExpenseDetailsByID)

// Products routes
router.post("/create-products", AuthVerifyMiddleware, CreateProducts)
router.post("/update-products/:id", AuthVerifyMiddleware, UpdateProducts)
router.get("/list-products/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ProductsList)
router.get("/dropdown-products", AuthVerifyMiddleware, ExpenseTypesDropDown)
router.get("/delete-products/:id", AuthVerifyMiddleware, DeleteProduct)
router.get("/products-detail-by-id/:id", AuthVerifyMiddleware, ProductsDetailsByID)

// purchases routes
router.post("/create-purchases", AuthVerifyMiddleware, CreatePurchases)
router.get("/list-purchases/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, PurchasesList)
router.get("/delete-purchases/:id", AuthVerifyMiddleware, PurchasesDelete)

// Sales routes
router.post("/create-sales", AuthVerifyMiddleware, CreateSales)
router.get("/list-sales/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, SalesList)
router.get("/delete-sales/:id", AuthVerifyMiddleware, SaleDelete)

// Returns routes
router.post("/create-returns", AuthVerifyMiddleware, CreateReturns)
router.get("/list-returns/:pageNo/:perPage/:searchKeyword", AuthVerifyMiddleware, ReturnsList)
router.get("/delete-returns/:id", AuthVerifyMiddleware, ReturnDelete)


//Report
router.post("/expenses-by-date",AuthVerifyMiddleware,ExpensesByDate);
router.post("/return-by-date",AuthVerifyMiddleware,ReturnByDate);
router.post("/purchase-by-date",AuthVerifyMiddleware,PurchaseByDate);
router.post("/sales-by-date",AuthVerifyMiddleware,SalesByDate);

//Summary
router.get("/expenses-summary",AuthVerifyMiddleware, ExpensesSummary);
router.get("/return-summary",AuthVerifyMiddleware,ReturnSummary);
router.get("/purchase-summary",AuthVerifyMiddleware,PurchaseSummary);
router.get("/sales-summary",AuthVerifyMiddleware,SalesSummary);

module.exports=router;