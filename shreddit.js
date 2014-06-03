
var SELECTION_POSTINGS = 1;
var SELECTION_EDIT = 2;
var SELECTION_SEARCH = 3;
var SELECTION_ABOUT = 4;
var ACTIVE_MENU_CLASS = "active";

var SORT_ORDER_TOP_RATED = "top";
var SORT_ORDER_LEAST_RATED = "least";
var SORT_ORDER_NEWEST = "newest";
var SORT_ORDER_OLDEST = "oldest";
var SORT_ORDER_ALPHABET = "alphabet";


var contentPostings;
var contentEdit;
var contentAbout;
var menuPostings;
var menuEdit;
var menuSearch;
var selectSortOrder;
var tablePostings;

var currentSelection;
var currentSortOrder;

/*
 * Adds or removes the class active according to the flag.
 *
 * @param {type} menu the menu-item to/from which the class active is added/removed.
 * @param {type} flag true if the class active is added, false if the class is removed.
 *
 * @returns {undefined}
 */
function showHideMenu(menu, flag) {
  if (flag === true) {
    if (!menu.hasClass(ACTIVE_MENU_CLASS)) {
      menu.addClass(ACTIVE_MENU_CLASS);
    }
  } else {
    if (menu.hasClass(ACTIVE_MENU_CLASS)) {
      menu.removeClass(ACTIVE_MENU_CLASS);
    }
  }
}

/*
 * Changes the class for all menu-items.
 *
 * @param {type} selection the (new) selection of a menu-item.
 *
 * @returns {undefined}
 */
function showHideMenus(selection) {
  showHideMenu(menuPosting, selection === SELECTION_POSTINGS);
  showHideMenu(menuEdit, selection === SELECTION_EDIT);
  showHideMenu(menuSearch, selection === SELECTION_SEARCH);
}

/*
 * Changes the visibility of the postings and edit form.
 *
 * @param {type} selection the (new) selection of a menu-item.
 *
 * @returns {undefined}
 */
function showHideMenusAndContent(selection) {
  currentSelection = selection;
  if (selection === SELECTION_EDIT) {
    contentPostings.hide();
    contentEdit.show();
    contentAbout.hide();
    showHideMenus(SELECTION_EDIT);
  } else if (selection === SELECTION_SEARCH) {
    contentPostings.show();
    contentEdit.hide();
    contentAbout.hide();
    showHideMenus(SELECTION_SEARCH);
  } else if (selection === SELECTION_ABOUT) {
    contentPostings.hide();
    contentEdit.hide();
    contentAbout.show();
    showHideMenus(SELECTION_ABOUT);
  } else {
    contentPostings.show();
    contentEdit.hide();
    contentAbout.hide();
    showHideMenus(SELECTION_POSTINGS);
  }
  // console.log("Selection: " + currentSelection);
}

function changeSortOrder(order) {
  console.log(order);
  if (order === SORT_ORDER_LEAST_RATED) {
    sortLeastRated();
  } else if (order === SORT_ORDER_NEWEST) {
    sortNewest();
  } else if (order === SORT_ORDER_OLDEST) {
    sortOldest();
  } else if (order === SORT_ORDER_ALPHABET) {
    sortAlphabet();
  } else {
    sortTopRated();
  }
  fillTablePostings(tablePostings);
}

/*
 * Initializes the sort-order.
 *
 * @returns {undefined}
 */
function initializeSortOrder() {
  selectSortOrder.val(SORT_ORDER_NEWEST);
  sortNewest();
}

/*
 * Initializes the shreddit page (menu and content).
 *
 * @returns {undefined}
 */
function initializeShreddit() {

  preparePostings();

  contentPostings = $("#posting-list-id");
  contentEdit = $("#posting-edit-id");
  contentAbout = $("#posting-credit-id");
  menuPosting = $("#menu-posting-id");
  menuEdit = $("#menu-edit-id");
  menuSearch = $("#menu-search-id");
  selectSortOrder = $("#posting-sort-order-id");
  tablePostings = $("#posting-table-id");

  //console.log("cp: " + contentPostings + " ep: " + contentEdit + " mp: " + menuPosting + " me: " + menuEdit + " ms: " + menuSearch);

  menuPosting.bind("click", function() {
    showHideMenusAndContent(SELECTION_POSTINGS);
  });
  menuEdit.bind("click", function() {
    showHideMenusAndContent(SELECTION_EDIT);
  });
  menuSearch.bind("click", function() {
    showHideMenusAndContent(SELECTION_SEARCH);
  });
  $("#show-credit-id").bind("click", function() {
    showHideMenusAndContent(SELECTION_ABOUT);
  });
  selectSortOrder.bind("change", function() {
    changeSortOrder(selectSortOrder.val());
  });

  showHideMenusAndContent(SELECTION_POSTINGS);
  initializeSortOrder();
  fillTablePostings(tablePostings);
}

/*
 * Initialize when the html-document is fully loaded.
 */
$(document).ready(initializeShreddit);
