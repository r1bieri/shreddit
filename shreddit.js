
var SELECTION_POSTINGS = 1;
var SELECTION_EDIT = 2;
var SELECTION_SEARCH = 3;
var ACTIVE_MENU_CLASS = "active";

var contentPostings;
var contentEdit;
var menuPostings;
var menuEdit;
var menuSearch;

var currentSelection;

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
    showHideMenus(SELECTION_EDIT);
  } else if (selection === SELECTION_SEARCH) {
    contentPostings.show();
    contentEdit.hide();
    showHideMenus(SELECTION_SEARCH);
  } else {
    contentPostings.show();
    contentEdit.hide();
    showHideMenus(SELECTION_POSTINGS);
  }
  // console.log("Selection: " + currentSelection);
}

/*
 * Initializes the shreddit page (menu and content).
 *
 * @returns {undefined}
 */
function initializeShreddit() {
  contentPostings = $("#posting-list");
  contentEdit = $("#posting-edit");
  menuPosting = $("#menu-posting");
  menuEdit = $("#menu-edit");
  menuSearch = $("#menu-search");

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

  showHideMenusAndContent(SELECTION_POSTINGS);
}

/*
 * Initialize when the html-document is fully loaded.
 */
$(document).ready(initializeShreddit);


/*
 241543903
 15.05.2014  21:32
 Wenn man in der Google Bildersuche nach "241543903" sucht, findet man Menschen, die ihren Kopf in Kühlschränke stecken.

 Versicherte Nase
 14.05.2014  09:47
 Der Winzer und Weintester Ilja Gort hat seine Nase für 5 Millionen Euro versichern lassen. Die Bedingung der Versicherung war allerdings, dass er weder Motorrad fahren noch boxen noch als Feuerschlucker oder Assistent eines Messerwerfers arbeiten darf.

 Pizza
 30.04.2014  15:22
 Eine Pizza mit dem Radius z und der Dicke a hat das Volumen Pi • z • z • a.

 saippuakivikauppias
 22.04.2011  23:59
 In der finnischen Sprache gibt es das mit 19 Buchstaben weltweit längste Wort, das sich vorwärts und rückwärts lesen lässt: »saippuakivikauppias« - übersetzt etwa »Seifenstein-Verkäufer«.

 */