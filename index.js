var customerName = 'bob'
customerName;

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}
upperCaseCustomerName();

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
const leastFavoriteCustomer = "Margie";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
}
changeLeastFavoriteCustomer();
