// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) /*targetClassName */{
  var result = [];

  (function traverseDOM (node) {
    var c;
    !node.classList ? c = "" : c = node.classList.value;

    if (c.indexOf(className) > -1){
      result.push(node);
    }

    var children = node.childNodes
    if (children){
      for (var i = 0; i < children.length; i++)
      traverseDOM(children[i]);
    }
  })(document.body);

  return result;
};
// document.body
// element.childNodes
// element.classList
