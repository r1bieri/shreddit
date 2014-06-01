
var POSTINGS = {"postings": [
    {"shortName": "241543903",
      "by": "fridge",
      "date": "15.05.2014  21:32",
      "rating": 7,
      "linkURL": "http://www.hsr.ch",
      "linkName": "Hochschule Rapperswil",
      "description": "Wenn man in der Google Bildersuche nach \"241543903\" sucht, findet man Menschen, die ihren Kopf in K&uuml;hlschränke stecken."},
    {"shortName": "Versicherte Nase",
      "by": "cyrano",
      "date": "14.05.2014  09:47",
      "rating": 3,
      "linkURL": "http://www.hsr.ch",
      "linkName": "Hochschule Rapperswil",
      "description": "Der Winzer und Weintester Ilja Gort hat seine Nase für 5 Millionen Euro versichern lassen. Die Bedingung der Versicherung war allerdings, dass er weder Motorrad fahren noch boxen noch als Feuerschlucker oder Assistent eines Messerwerfers arbeiten darf."},
    {"shortName": "Pizza",
      "by": "volcano",
      "date": "30.04.2014  15:22",
      "rating": 5,
      "linkURL": "http://www.hsr.ch",
      "linkName": "Hochschule Rapperswil",
      "description": "Eine Pizza mit dem Radius z und der Dicke a hat das Volumen Pi • z • z • a."},
    {"shortName": "saippuakivikauppias",
      "by": "helvi",
      "date": "22.04.2011  23:59",
      "rating": 9,
      "linkURL": "http://www.hsr.ch",
      "linkName": "Hochschule Rapperswil",
      "description": "In der finnischen Sprache gibt es das mit 19 Buchstaben weltweit l&auml;ngste Wort, das sich vorw&auml;rts und r&uuml;ckw&auml;rts lesen l&auml;sst: &raquo;saippuakivikauppias&laquo; - &uuml;bersetzt etwa &raquo;Seifenstein-Verk&auml;ufer&laquo;."}]
};

var stars = [
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe610;&#xe610;&#xe610;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe611;&#xe610;&#xe610;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe610;&#xe610;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe611;&#xe610;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe610;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe611;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe612;&#xe610;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe612;&#xe611;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe612;&#xe612;&#xe610;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe612;&#xe612;&#xe611;</span>&nbsp;&nbsp;&nbsp;",
  "&nbsp;&nbsp;&nbsp;&nbsp;<span class=\"rating-stars\">&#xe612;&#xe612;&#xe612;&#xe612;&#xe612;</span>&nbsp;&nbsp;&nbsp;"
];

function fillTablePostings(table) {
  var html = [];
  var input = POSTINGS.postings;

  for (var index = 0; index < input.length; index++) {
    var item = input[index];
    html.push("<tr><td class=\"posting-title\">",
            item.shortName,
            "</td><td class=\"posting-rating\">",
            item.by,
            stars[item.rating],
            item.date,
            "</td></tr><tr><td colspan=\"2\" class=\"posting-descr\">",
            item.description,
            "<span id=\"plink-" + index + "\" data-url=\"" + item.linkURL + "\" data-name=\"" + item.linkName + "\"></span></td></tr>\n");
  }
  table.html(html.join(''));
}

var showLinks = false;

function toggleLinks() {
  for (var index = 0; ; index++) {
    var item = document.getElementById("plink-" + index);
    if (!item) {
      break;
    }
    if (showLinks) {
      item.innerHTML = "";
    } else {
      item.innerHTML = "<br>&gt;&nbsp;&nbsp;&nbsp;&nbsp;<a href=\"" + item.getAttribute("data-url") + "\" target=\"_blank\">" + item.getAttribute("data-name") + "</a>";
    }
  }
  showLinks = !showLinks;
}
