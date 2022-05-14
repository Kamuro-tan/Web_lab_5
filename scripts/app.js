
var main = function() {
    "use strict";

    var toDos = [
        "Купить продукты",
        "Обновить несколько новых задач",
        "Подготовиться к лекции в понедельник",
        "Ответить на письма нанимателей на LinkedIn",
        "Вывести Грейс на прогулку в парк",
        "Закончить писать книгу"
    ];

    $(".tabs a span").toArray().forEach(function(element) {
        $(element).on("click", function() {
            var $element = $(element)
            var $content

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>")
                toDos.forEach(function(todo) {
                    $content.append($("<li>").text(todo));
                });

            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>")
                for (var i = (toDos.length - 1); i > -1; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }

            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("3 TAG")
            }

            $("main .content").append($content);
            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");

}

$(document).ready(main);