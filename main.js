var fruits = ['apple', 'apricot', 'avocado', 'blueberry', 'cherry', 'coconut', 'cranberry', 'dragonfruit', 'durian', 'grape', 'grapefruit', 'guava', 'kiwi fruit', 'lemon', 'lime', 'lychee', 'mango', 'melon', 'watermelon', 'miracle fruit', 'orange', 'bloodorange','clementine','mandarine','tangerine','papaya','passionfruit','peach','pear','persimmon','physalis','plum/prune','pineapple','pomegranate','raspberry','rambutan','star fruit','strawberry'];

$(function() {
  var list = $("#list");
  var preFunc = null;
  var preReg;

  function appendList(word) {
    var item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    var result = "^" + element;
    return result;
  }

  function matchWord(array, reg, message) {
    $.each(array, function(i, element) {
      if (element.match(reg)) {
        appendList(element);
      }
    });
    if ($(".list").length === 0) {
      appendList(message);
    }
  }

  $("#keyword").on("keyup", function() {
    var input = $("#keyword").val();
    var inputs = input.split(" ");
    var newInputs = inputs.map(editElement);
    var reg = RegExp(newInputs.join("|"));

    $(".list").remove();
    if (input.length !== 0 && reg !== preReg) {
      clearTimeout(preFunc);
      preFunc = setTimeout(matchWord(fruits, reg, "一致する果物はありませんでした。"), 500);
    }
  });
});
